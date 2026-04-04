import { createCompleteElement } from "./utils.js";

const year = new Date().getFullYear()

export function createFooter() {
    const footer = createCompleteElement("footer");
    const footerWrapper = createCompleteElement("div", ["footerWrapper"]);
    
    const footerLeftSide = createCompleteElement("div", ["leftSideFooter"]);
    const icon = createCompleteElement("i", ["fa-solid", "fa-code"]);
    const copyright = createCompleteElement("span", [], `© ${year} RbsDeveloper. All rights reserved.`);
    footerLeftSide.append(icon, copyright);

    const footerRightSide = createCompleteElement("div", ["rightSideFooter"]);
    const secondSpan = createCompleteElement("span", [],"Built with");
    const heartIcon = createCompleteElement("i", ["fa-solid", "fa-heart"]);
    const techSpan = createCompleteElement("span", [], "using HTML, CSS & JavaScript");
    footerRightSide.append(secondSpan, heartIcon, techSpan);

    footerWrapper.append(footerLeftSide, footerRightSide);
    footer.append(footerWrapper);
    return footer
} 