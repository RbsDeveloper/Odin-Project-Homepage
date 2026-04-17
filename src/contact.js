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
    const info = createCompleteElement("address", ["contactInfo", "revealHidden"]);
    const infoTitle = createCompleteElement("h3", [], "Let's talk about your project");
    const contactDescription = createCompleteElement("p", ["contactDescription"], "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!");
    const linksUl = createContactLinks(contactLinks);
    const tipElement = createCompleteElement("aside", ["contactTip"]);
    const tip = createCompleteElement("p", [], "💡Quick Tip: Include details about your project timeline, budget, and specific requirements to help me understand your needs better.")
    tipElement.append(tip);
    info.append(infoTitle, contactDescription, linksUl, tipElement);

    return info;
}

const formFields = [
    {
        label: "Name",
        tag: "input",
        attrs: { type: "text", id: "name", name: "name", placeholder: "John", autocomplete:"name"},
        errorId: "nameError",
        iconId: "nameIcon"
    },
    {
        label: "Email",
        tag: "input",
        attrs: { type: "email", id: "email", name: "email", placeholder: "yourEmail@example.com", required: "true", autocomplete:"email" },
        errorId: "emailError",
        iconId: "emailIcon"
    },
    {
        label: "Message",
        tag: "textarea",
        attrs: { id: "text", name: "text", rows: "6", placeholder: "Tell me about your project...", required: "true", autocomplete:"text" },
        errorId: "textError",
        iconId: "textIcon"
    },
]

function createFormSide () {
    const formWrapper = createCompleteElement("div", ["formContainer", "revealHidden"]);
    const formEl = createCompleteElement("form", [], "", {action: "https://formsubmit.co/developer.rbs@gmail.com",method: "POST"});

    formFields.forEach(field => {
        // group
        const group = createCompleteElement("div", ["formGroup"]);

        // label wrapper
        const labelWrapper = createCompleteElement("div", ["labelWrapper"]);
        const label = createCompleteElement("label", [], field.label, { for: field.attrs.id });
        const errorMsg = createCompleteElement("span", ["errorMsg"], "", { id: field.errorId });
        labelWrapper.append(label, errorMsg);

        // input wrapper
        const inputWrapper = createCompleteElement("div", ["inputWrapper"]);
        const input = createCompleteElement(field.tag, [], "", field.attrs);
        const iconWrapper = createCompleteElement("span", ["iconWrapper"], "", { id: field.iconId });
        const icon = createCompleteElement("i", ["fa-solid"]);
        iconWrapper.append(icon)
        inputWrapper.append(input, iconWrapper);

        group.append(labelWrapper, inputWrapper);
        formEl.append(group);
    });

    // submit button
    const button = createCompleteElement("button", [], "", { type: "submit", value:"submit" });
    button.append(
        createCompleteElement("i", ["fa-solid", "fa-paper-plane"]),
        createCompleteElement("span", [], "Send Message")
    );
    formEl.append(button);

    formWrapper.append(formEl);
    return formWrapper;
}

export function createContactSection () {
    const section = createCompleteElement("section", ["contactSection"], "", {id: "contact"});
    const innerWrapper =  createCompleteElement("div", ["container"]);
    const sectionHeader = createCompleteElement("header", ["sectionHeader","revealHidden"]);
    const sectionTitle = createCompleteElement("h2", ["title"], "Get In Touch");
    const sectionDescription = createCompleteElement("p", ["sectionDescription"], "Have a project in mind or just want to chat? Feel free to reach out!")
    sectionHeader.append(sectionTitle, sectionDescription);

    const contactWrapper = createCompleteElement("div", ["contactWrapper"]);
    contactWrapper.append(createInfoSide(), createFormSide());
    innerWrapper.append(sectionHeader, contactWrapper);
    section.append(innerWrapper)
    return section
}