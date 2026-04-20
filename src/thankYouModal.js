import { createCompleteElement } from "./utils.js";


export function createModal(usernName, userEmail) {

    //const overlay = createCompleteElement("div", ["modalOverlay"])
    const modal = createCompleteElement("dialog", ["thankYouModal"], "", {id:"submitModal"});
    const modalInnerContent = createCompleteElement("div", ["modalInner"]);

    const modalBg = createCompleteElement("div", ["modalBg"]);
    const modalContent = createCompleteElement("div", ["modalContent"]);

    //Success icon
    const successIcon = createCompleteElement("div", ["successIcon"]);
    const checkIcon  = createCompleteElement("i", ["fa-regular", "fa-circle-check"]);
    successIcon.append(checkIcon);

    //main msg

    const msgMainContainer = createCompleteElement("div", ["msgMainContainer"]);
    const thanksHeading = createCompleteElement("h2", ["modalTitle", "gradientText"]);
    
    const sentMSg = createCompleteElement("p", [], "Your message has been successfully sent.");
    const replyMsg =  createCompleteElement("p", [], "I'll get back to you at ");
    const emailSpan = createCompleteElement("span", ["emailHighlight"],  "", {id:"emailSpan"});
    replyMsg.append(emailSpan, " as soon as possible!")

    msgMainContainer.append(thanksHeading, sentMSg, replyMsg);

    //Info cards

    const infoCards = createCompleteElement("div", ["infoCardsContainer"]);

    //first card
    const responseCard = createCompleteElement("div", ["infoCard", "responseCard"]);
    const responseIconWrapper = createCompleteElement("div", ["iconWrapper"]);
    const responseIcon = createCompleteElement("i", ["fa-solid", "fa-envelope"]);
    responseIconWrapper.append(responseIcon);
    const responseTextWrapper = createCompleteElement("div", ["textWrapper"]);
    const responseLabel = createCompleteElement("p", ["CardLabel"], "Response Time");
    const responseValue = createCompleteElement("p", ["cardValue"], "24-28 hours");
    responseTextWrapper.append(responseLabel, responseValue);
    responseCard.append(responseIconWrapper, responseTextWrapper);
    //second card
    const statusCard = createCompleteElement("div", ["infoCard", "statusCard"]);
    const statusIconWrapper = createCompleteElement("div", ["iconWrapper"]);
    const statusIcon = createCompleteElement("i", ["fa-regular", "fa-circle-check"]);
    statusIconWrapper.append(statusIcon);
    const statusTextWrapper = createCompleteElement("div", ["textWrapper"]);
    const statusLabel = createCompleteElement("p", ["CardLabel"], "Status");
    const statusValue = createCompleteElement("p", ["cardValue"], "Received ✓");
    statusTextWrapper.append(statusLabel, statusValue);
    statusCard.append(statusIconWrapper, statusTextWrapper);

    infoCards.append(responseCard, statusCard);
    //Buttons
    const btnsWrappers = createCompleteElement("div", ["btnsWrapper"]);

    const backBtn = createCompleteElement("button", ["btn", "backBtn"]);
    const backIcon = createCompleteElement("i", ["fa-solid", "fa-arrow-left"]);
    const backText = createCompleteElement("span", [], "Back to Portfolio");
    backBtn.append(backIcon, backText);
    const topBtn = createCompleteElement("button", ["btn", "topBtn"]);
    const topIcon = createCompleteElement("i", ["fa-solid", "fa-home"]);
    const topText = createCompleteElement("span", [], "Go to Top");
    topBtn.append(topIcon, topText);

    btnsWrappers.append(backBtn, topBtn);

    //tip box
    const tipBox = createCompleteElement("div", ["tipBox", "contactTip"]);
    const tipText = createCompleteElement("p", [], "💡 In the meantime, feel free to explore more of my projects or connect with me on social media!");
    tipBox.append(tipText);

    modalContent.append(successIcon, msgMainContainer, infoCards, btnsWrappers, tipBox);
    modalInnerContent.append(modalBg, modalContent);
    modal.append(modalInnerContent)

    //btn events

    backBtn.addEventListener("click", () => {
        const target = document.querySelector("#projectsSection")
        modal.close();
        target.scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    })

    topBtn.addEventListener("click", () => {
        window.scrollTo({top: 0, behavior:"smooth"})
        modal.close();
    })

    modal.addEventListener("click", (e) => {
        if(e.target === modal){
            //overlay.classlist.remove(visible);
            modal.close();
        }
    })

    return modal;
}

export function updateModalForCurrentUser(usernName, userEmail) {
    const modalHeader = document.querySelector(".modalTitle");
    const name = usernName ? usernName.split(" ")[0] : "";
    if(name){
       modalHeader.textContent = "Thank You, ";
        const nameSpan = createCompleteElement("span", ["nameHighlight"], name);
       modalHeader.append(nameSpan, "!");
    }else{
       modalHeader.textContent = ("Thank You!")
    }

    const emailSpan = document.querySelector("#emailSpan");
    emailSpan.textContent = userEmail;
}