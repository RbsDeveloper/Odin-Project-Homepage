import { createHeader } from "./header.js";
import { createMain } from "./main.js";
import { createFooter } from "./footer.js"
document.body.append(createHeader(), createMain(), createFooter());


//toggle dark/light mode
const themeBtn = document.querySelector("#themeToggler");
themeBtn.addEventListener("click", ()=> {
    const icon = themeBtn.querySelector("i");
    icon.classList.add("spinning");

    icon.addEventListener("animationend", ()=> {
        icon.classList.remove("spinning")
    })

    document.documentElement.classList.toggle("dark");
    
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
    
})

//toggle menu

function toggleMenu () {
    const icon = menuBtn.querySelector("i");
    const isOpen = menu.classList.contains("open")


    icon.classList.add(isOpen ? "spinningOut" : "spinningIn");

    icon.addEventListener("animationend", ()=> {
        icon.classList.remove("spinningIn", "spinningOut");
    }, {once: true})

    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-x")

    menu.classList.toggle("open");
}

const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#navMenu");

menuBtn.addEventListener("click", toggleMenu)

const navLinks = document.querySelectorAll("#navMenu a");
navLinks.forEach(link => {
    link.addEventListener("click", toggleMenu)
})

document.addEventListener("click", (e)=> {
    if(menu.classList.contains("open") &&
        !menu.contains(e.target) &&
        !menuBtn.contains(e.target)){
            toggleMenu()
        }
})


//event for the scroll btn in the hero section
const scrollBtn = document.querySelector("#scrollTrigger");
scrollBtn.addEventListener("click", () => {
    document.querySelector("#projectsSection").scrollIntoView({behavior: "smooth"})
})
