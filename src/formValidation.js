
const validators = {
    name: {
        validate: (value) => value.trim().length >=2,
        errorMsg: "Name must be at least 2 characters",
    },
    email: {
        validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        errorMsg: "Please enter a valid email",
    },
    text: {
        validate: (value) => value.trim().length >= 10,
        errorMsg: "Message must be at least 10 characters",
    }
}


function validateField(input){
    console.log(input)
    const isValid = validators[input.id].validate(input.value);
    const icon = document.querySelector(`#${input.id}Icon`).querySelector("i");
    const errorMsgEl = document.querySelector(`#${input.id}Error`);
    console.log(icon)
    if(!isValid && input.value.length > 0){  
        input.classList.remove("goodToGo");
        input.classList.add("error");      
        icon.classList.remove("fa-circle-check");      
        errorMsgEl.textContent = validators[input.id].errorMsg;
        errorMsgEl.classList.add("visible");
        icon.classList.add("fa-circle-xmark");          
    }else if (isValid){
        input.classList.remove("error");
        input.classList.add("goodToGo");      
        icon.classList.remove("fa-circle-xmark");     
        errorMsgEl.textContent = "";
        errorMsgEl.classList.remove("visible");
        icon.classList.add("fa-circle-check");
        console.log("all good")  
    }else{
        input.classList.remove("error", "goodToGo");
        icon.className = "fa-solid";
        errorMsgEl.classList.remove("visible");
    }  
}

export function initFormValidation() {
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#text");
    const formEl = document.querySelector("form");

    nameInput.addEventListener("input", (e) => validateField(e.target));
    emailInput.addEventListener("input", (e) => validateField(e.target));
    messageInput.addEventListener("input", (e) => validateField(e.target));

    formEl.addEventListener("submit", (e)=> {
        const inputs = [nameInput, emailInput, messageInput];
        const areAllValid = inputs.every(input => validateField(input))
        
        if(!areAllValid){
            e.preventDefault()
        }
    });


}


