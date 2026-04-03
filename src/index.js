import { createHeader } from "./header.js";

document.body.append(createHeader())


const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#navMenu");

menuBtn.addEventListener("click", ()=> {
    menu.classList.toggle("open");
})