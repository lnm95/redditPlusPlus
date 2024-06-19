import { appendNew } from '../../utils/tools';

export class FlairData {
    text: string;
    color: string;
    background: string;
    richtext: Array<RichElement>;
}

export class RichElement {
    t: string;
    e: string;
    u: string;
    a: string;
}

export function renderFlair(conatiner: Element, sub: string, flair: FlairData) {
    const a = appendNew(conatiner, `a`, `no-decoration`) as HTMLAnchorElement;
    a.href = `/r/` + sub + `/?f=flair_name%3A%22` + flair.text + `%22`;

    const span = appendNew(a, `span`, [
        `bg-tone-4`,
        `inline-block`,
        `truncate`,
        `max-w-full`,
        `text-12`,
        `font-normal`,
        `box-border`,
        `px-[6px]`,
        `rounded-[20px]`,
        `leading-4`,
        `max-w-full`,
        `py-xs`,
        `!px-sm`,
        `leading-4`,
        `h-xl`,
        `inline-flex`
    ]);
    span.classList.add(flair.color == `light` ? `text-global-white` : `text-global-black`);
    span.style.backgroundColor = flair.background;

    for (const richElement of flair.richtext) {
        if (richElement.e == `text`) {
            const content = document.createTextNode(richElement.t);
            span.appendChild(content);
        }
        if (richElement.e == `emoji`) {
            const fimg = document.createElement(`faceplate-img`);
            fimg.classList.add(`flair-image`);
            fimg.setAttribute(`loading`, `lazy`);
            fimg.setAttribute(`width`, `16`);
            fimg.setAttribute(`height`, `16`);
            fimg.setAttribute(`src`, richElement.u);
            fimg.setAttribute(`alt`, richElement.a);
            span.appendChild(fimg);
        }
    }

    if (flair.richtext.length == 0) {
        const content = document.createTextNode(flair.text);
        span.appendChild(content);
    }
}
