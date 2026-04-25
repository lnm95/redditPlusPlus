import { MAX_LOAD_LAG } from '../../defines';
import { dynamic } from '../../utils/dynamic';
import { checkIsRendered } from '../../utils/tools';
import { CustomCSS } from '../customCSS';
import { settings } from '../settings/settings';
import { GuidelinesColor } from './guidelinesColor';

import style from './guidelines.less';

const _GREEN = `#4CAF50`;
const _BLUE = `#1E88DB`;
const _YELLOW = `#FF9800`;
const _PURPLE = `#B650C7`;
const _RED = `#F44336`;
const _SEA_GREEN = `#3ABAA2`;

const COLORS = [_GREEN, _BLUE, _YELLOW, _PURPLE, _RED];
const COLORS_CONTRASTING = [_GREEN, _YELLOW, _BLUE, _RED, _SEA_GREEN, _PURPLE];

const colorMode = settings.GUIDELINES_COLOR.get() as GuidelinesColor;
const thickMode = settings.GUIDELINES_THICK.isEnabled();
const disabled = colorMode == GuidelinesColor.Grayscale && !thickMode;

const guidlinesCss = new CustomCSS();

if (!disabled) {
    guidlinesCss.register(document);
    guidlinesCss.addStyle(style);
}

export async function renderGuidlines(comment: Element) {
    if (disabled || checkIsRendered(comment, `pp-guidlines-rendered`)) return;

    const shadowRoot = await dynamic<ShadowRoot>(() => comment.shadowRoot, MAX_LOAD_LAG);

    guidlinesCss.register(shadowRoot);

    const isUser = comment.hasAttribute(`is-user-op`);
    const depth = parseInt(comment.getAttribute(`depth`)!);

    if (depth > 0) {
        // refresh old guidlines when user add new comment
        if (isUser) {
            comment.parentElement!.removeAttribute(`pp-guidlines-rendered`);

            setTimeout(() => {
                [...comment.parentElement!.children].forEach(child => {
                    if (child != comment && child.matches(`shreddit-comment`)) {
                        child.removeAttribute(`pp-guidlines-rendered`);

                        renderGuidlines(child);
                    }
                });
            }, 200);
        }

        renderGuidlines(comment.parentElement!);
    }

    if (colorMode == GuidelinesColor.Random) {
        let availableColors = [...COLORS.keys()];

        if (depth > 0) {
            const parentColor = parseInt(comment.parentElement!.getAttribute(`pp_guidelines_color`)!);
            availableColors.splice(parentColor, 1);
        }

        const color = availableColors[Math.floor(Math.random() * availableColors.length)];
        comment.setAttribute(`pp_guidelines_color`, color.toString());
    }

    // main line
    renderMainLine(comment, depth);

    // more reply branch
    renderMoreReplyBranch(comment, depth);

    // branch in parent guideline
    if (depth > 0) {
        const branches = comment.parentElement!.shadowRoot!.querySelector(`#comment-children`);

        const slotName = comment.getAttribute(`slot`);
        const branch = await dynamic(() => {
            const threadline = branches?.querySelector(`slot[name="${slotName}"]`)?.previousElementSibling;

            return threadline?.querySelector(`div[data-testid="branch-line"]`) as HTMLElement;
        }, MAX_LOAD_LAG);

        if (branch) {
            renderBranch(comment.parentElement!, branch, depth - 1);
        }
    }
}

async function renderMainLine(comment: Element, depth: number) {
    const mainThreadLine = await dynamic<HTMLElement>(() => comment.shadowRoot?.querySelector(`div[data-testid="main-thread-line"]`) ?? null, MAX_LOAD_LAG);

    if (!mainThreadLine) return;

    applyGuidlineStyle(comment, mainThreadLine, depth);
    mainThreadLine.parentElement!.classList.toggle(`pp_guidline_mainline`, true);
    mainThreadLine.parentElement!.classList.toggle(`pp_guidline_colorized`, colorMode != GuidelinesColor.Grayscale);
}

async function renderMoreReplyBranch(comment: Element, depth: number) {
    const branches = await dynamic(() => comment.shadowRoot?.querySelector(`#comment-children`), MAX_LOAD_LAG);

    branches?.querySelectorAll(`div[data-testid="branch-line"]`).forEach(branch => {
        renderBranch(comment, branch as HTMLElement, depth);
    });
}

function renderBranch(comment: Element, branchLine: HTMLElement, depth: number) {
    applyGuidlineStyle(comment, branchLine, depth);
    branchLine.classList.toggle(`pp_guidline_branch`, true);
    branchLine.classList.toggle(`pp_guidline_colorized`, colorMode != GuidelinesColor.Grayscale);

    const branchExtraLine = branchLine.nextElementSibling as HTMLElement;
    if (branchExtraLine != null && branchExtraLine.className.startsWith(`box-border h-md`)) {
        branchExtraLine.classList.toggle(`pp_guidline_extraLine`, true);
        renderBranch(comment, branchExtraLine, depth);
    }
}

function applyGuidlineStyle(comment: Element, element: HTMLElement, depth: number) {
    if (colorMode == GuidelinesColor.ClassicGradient || colorMode == GuidelinesColor.ContrastingGradient) {
        const colros = colorMode == GuidelinesColor.ClassicGradient ? COLORS : COLORS_CONTRASTING;
        element.style.setProperty(`--line-color`, colros[depth % colros.length]);
    }
    if (colorMode == GuidelinesColor.Random) {
        const color = parseInt(comment.getAttribute(`pp_guidelines_color`)!);
        element.style.setProperty(`--line-color`, COLORS[color]);
    }
    element.style.setProperty(`--line-width`, thickMode ? `2px` : `1px`);
}
