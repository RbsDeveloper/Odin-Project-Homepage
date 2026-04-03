import { createHeader } from "./header.js";
import { createMain } from "./main.js";
document.body.append(createHeader(), createMain());



const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#navMenu");

menuBtn.addEventListener("click", ()=> {
    menu.classList.toggle("open");
})