import { createHeader } from "./header.js";
import { createMain } from "./main.js";
import { createFooter } from "./footer.js"
document.body.append(createHeader(), createMain(), createFooter());



const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#navMenu");

menuBtn.addEventListener("click", ()=> {
    menu.classList.toggle("open");
})