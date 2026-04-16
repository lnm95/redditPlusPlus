import { settings } from "./settings/settings";

export function renderRightSidebar(rightSidebar: Element) {
    if(settings.REMOVE_RIGHT_SIDEBAR.isEnabled()) {
        rightSidebar.remove();
        return;
    }
    
    rightSidebar.className = `right-sidebar min-w-0 w-[316px] max-w-[316px] hidden s:block styled-scrollbars xs:sticky xs:top-[56px] xs:max-h-[calc(100vh-var(--shreddit-header-height)-1px)] xs:overflow-y-auto xs:overflow-x-hidden pp_rightSidebar pp_defaultText`;
}
