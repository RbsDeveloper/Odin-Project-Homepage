import { updateModalForCurrentUser } from "./thankYouModal.js";

const validators = {
    name: {
        validate: (value) => value.trim().length >=2,
        errorMsg: "Name must be at least 2 characters",
    },
    email: {
        validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        errorMsg: "Please enter a valid email",
    },
    message: {
        validate: (value) => value.trim().length >= 10,
        errorMsg: "Message must be at least 10 characters",
    }
}


function validateField(input){
    const isValid = validators[input.id].validate(input.value);
    const icon = document.querySelector(`#${input.id}Icon`).querySelector("i");
    const errorMsgEl = document.querySelector(`#${input.id}Error`);
    if(!isValid && input.value.length > 0){  
        input.classList.remove("goodToGo");
        input.classList.add("error");      
        icon.classList.remove("fa-circle-check");      
        errorMsgEl.textContent = validators[input.id].errorMsg;
        errorMsgEl.classList.add("visible");
        icon.classList.add("fa-circle-xmark");     
        return false     
    }else if (isValid){
        input.classList.remove("error");
        input.classList.add("goodToGo");      
        icon.classList.remove("fa-circle-xmark");     
        errorMsgEl.textContent = "";
        errorMsgEl.classList.remove("visible");
        icon.classList.add("fa-circle-check");
        return true 
    }else{
        input.classList.remove("error", "goodToGo");
        icon.className = "fa-solid";
        errorMsgEl.classList.remove("visible");
        return false
    }  
}

export function initFormValidation() {
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#message");
    const formEl = document.querySelector("form");

    nameInput.addEventListener("input", (e) => validateField(e.target));
    emailInput.addEventListener("input", (e) => validateField(e.target));
    messageInput.addEventListener("input", (e) => validateField(e.target));

    formEl.addEventListener("submit", (e)=> {
        e.preventDefault()
        console.log(messageInput)
        const inputs = [nameInput, emailInput, messageInput];
        const results = inputs.map(input => validateField(input))
        const areAllValid = results.every(result=> result===true);

        if(!areAllValid){
            return
        }

        const formData = new FormData(formEl);

        formData.append("_captcha", "false"); 
        
        formData.append("message", messageInput.value);

        
        fetch("https://formsubmit.co/ajax/developer.rbs@gmail.com", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log("Success!", data);
            updateModalForCurrentUser(nameInput.value, emailInput.value);
            document.querySelector("#submitModal").showModal();
            formEl.reset();

            inputs.forEach((input) => {
                input.classList.remove("goodToGo");
                input.parentElement.querySelector("i").classList.remove("fa-circle-check")
            });

        })
        .catch(error => console.error("Error:", error));
        
    });
}


