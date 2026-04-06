import { createCompleteElement } from "./utils.js";

const contactLinks = [
    {label: "Email", icon: ["fa-solid", "fa-envelope"], href: "mailto:rbsDeveloper@gmail.com", content: "rbsDeveloper@gmail.com"},
    {label: "Location", icon: ["fa-solid", "fa-location-dot"], content: "Bucharest, Romania"}
    
]

function createContactLinks (items) {
    const contactsList = createCompleteElement("ul", ["contactsList"]);

    items.forEach(element => {
        const li = createCompleteElement("li", ["contactItem"]);
        const span = createCompleteElement("span", ["contactIcon"]);
        const i = createCompleteElement("i", element.icon);
        const innerWrapper = createCompleteElement("div");
        const itemName = createCompleteElement("h4", [], element.label);
        const link = createCompleteElement("a", [], element.content, {href:element.href});
        span.append(i);
        innerWrapper.append(itemName, link);
        li.append(span, innerWrapper);
        contactsList.append(li)
    });
    return contactsList
}

function createInfoSide() {
    const info = createCompleteElement("address", ["contactInfo"]);
    const infoTitle = createCompleteElement("h3", [], "Let's talk about your project");
    const contactDescription = createCompleteElement("p", [], "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!");
    const linksUl = createContactLinks(contactLinks);
    const tipElement = createCompleteElement("aside", ["contactTip"]);
    const tip = createCompleteElement("p", [], "💡Quick Tip: Include details about your project timeline, budget, and specific requirements to help me understand your needs better.")
    tipElement.append(tip);
    info.append(infoTitle, contactDescription, linksUl, tipElement);

    return info;
}

function createFormSide() {
    const formWrapper = createCompleteElement("div", ["formContainer"])
    const formEl = createCompleteElement("form");

    const nameGroup = createCompleteElement("div", ["formGroup"]);
    const nameLabel = createCompleteElement("label", [], "Name", {for:"name"});
    const nameInput = createCompleteElement("input", [], "", {type:"text", id:"name", name: "name", placeholder:"John"});
    nameGroup.append(nameLabel, nameInput);

    const emailGroup = createCompleteElement("div", ["formGroup"]);
    const emailLabel = createCompleteElement("label", [], "Email", {for:"email"});
    const emailInput = createCompleteElement("input", [], "", {type:"email", id:"email", name: "email", required:"true", placeholder:"yourEmail@example.com"})
    emailGroup.append(emailLabel, emailInput);

    const textZoneGroup = createCompleteElement("div", ["formGroup"]);
    const textZoneLabel = createCompleteElement("label", [], "Message", {for:"message"});
    const textZoneInput = createCompleteElement("textarea", [], "", {id:"message", name: "message", rows:"6", col:"33", required:"true", placeholder:"Tell me about your project..."});
    textZoneGroup.append(textZoneLabel, textZoneInput);

    const button = createCompleteElement("button", [], "", {type:"submit"});
    const submitIcon = createCompleteElement("i", ["fa-solid", "fa-paper-plane"]);
    const submitBtnText = createCompleteElement("span", [], "Send Message");
    button.append(submitIcon, submitBtnText);

    formEl.append(nameGroup, emailGroup, textZoneGroup, button);
    formWrapper.append(formEl);

    return formWrapper
}

export function createContactSection () {
    const section = createCompleteElement("section", ["contactSection"], "", {id: "contact"});

    const sectionHeader = createCompleteElement("header", ["sectionHeader"]);
    const sectionTitle = createCompleteElement("h2", ["title"], "Get In Touch");
    const sectionDescription = createCompleteElement("p", ["sectionDescription"], "Have a project in mind or just want to chat? Feel free to reach out!")
    sectionHeader.append(sectionTitle, sectionDescription);


    const contactWrapper = createCompleteElement("div", ["contactWrapper"]);
    contactWrapper.append(createInfoSide(), createFormSide());
    section.append(sectionHeader, contactWrapper);
    return section
}