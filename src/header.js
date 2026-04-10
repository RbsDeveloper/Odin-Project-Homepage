import { createCompleteElement } from "./utils.js";

export function createHeader() {
    const headerWrapper = createCompleteElement('header', ["header"], "", {});

    const navElement = createCompleteElement("nav", ["navbar", "container"]);
    const logo = createCompleteElement("div", ["logoContainer"], "</>RbsDeveloper");
    const navUl = createCompleteElement("ul", ["menu"], "", {id: "navMenu"});
    const firstLi = createCompleteElement("li")
    firstLi.append(createCompleteElement("a", [], "home", {href: "#"}))
    const secondLi = createCompleteElement("li")
    secondLi.append(createCompleteElement("a", [], "projects", {href: "#"}))
    const thirdLi = createCompleteElement("li")
    thirdLi.append(createCompleteElement("a", [], "contact", {href: "#"}));
    navUl.append(firstLi, secondLi, thirdLi);

    const toggleBtnsContainer = createCompleteElement("div", ["togglers"]);
    const themeBtn = createCompleteElement("button", ["themeBtn"], "", {"aria-label": "Toggle dark Mode"})
    themeBtn.append(createCompleteElement("i", ["fa-regular", "fa-moon"]));
    const menuBtn = createCompleteElement("button", ["hamburgerBtn"], "", {"aria-label": "Toggle Menu", id:"menuBtn"})
    menuBtn.append(createCompleteElement("i", ["fa-solid", "fa-bars"]));
    toggleBtnsContainer.append(themeBtn, menuBtn);
    
    navElement.append(logo, navUl, toggleBtnsContainer);
    headerWrapper.append(navElement);

    return headerWrapper
}