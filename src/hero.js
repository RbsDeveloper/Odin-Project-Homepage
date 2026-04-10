import { createCompleteElement } from "./utils.js";

const links = [
    {label: "Github", icon: ["fa-brands","fa-github"], href: "https://github.com/RbsDeveloper"},
    {label: "LinkedIn", icon: ["fa-brands", "fa-linkedin-in"], href: "https://www.linkedin.com/in/raul-bazavan"},
    {label: "Email", icon: ["fa-solid", "fa-envelope"], href: "mailto:rbsDeveloper@gmail.com"}
]

function createSocialLinks(socialLinks) {
    const ul = createCompleteElement("ul", ["socialList"]);

    socialLinks.forEach(({label, icon, href}) => {
        const li = createCompleteElement("li");
        const a = createCompleteElement("a", ["socialLink"], "", {
            href, 
            "aria-label": label,
            rel: "noopener noreferrer",
            target: "blank"
        })
        const i = createCompleteElement("i", icon);

        a.append(i);
        li.append(a);
        ul.append(li);
    })

    return ul;
}

export function createHero() {
    const homeSection = createCompleteElement("section", ["homeSection"], "", {id:"home"});

    const heroWrapper = createCompleteElement("div", ["container"]);

    const avatar = createCompleteElement("div", ["heroAvatar"], "", {id:"avatar"});
    const avatarImg = createCompleteElement("img", ["avatarImg"], "", {alt:"Raul - Front End Developer", src: "/images/raul.jpg"})
    avatar.append(avatarImg)
    
    const greetHeading = createCompleteElement("h1", ["greetMsg"], "Hi, I'm ");
    greetHeading.append(createCompleteElement("span", ["nameElement"], "Raul"));

    const tagline = createCompleteElement("p", ["tagline"], "Front end Developer | UI/UX Enthusiast | Problem Solver");
    const fullDescription = createCompleteElement("p", ["personalDescription"], 
        "I build exceptional digital experiences that combine beautiful design with powerful functionality. Passionate about creating scalable solutions and exploring cutting-edge technologies."
    )

    const scrollBtn = createCompleteElement("button", ["btn", "scrollBtn"], "", {id: "scrollTrigger"});
    const scrollBtnSpan = createCompleteElement("span", [], "View My Work");
    const scrollBtnIcon = createCompleteElement("i", ["fa-solid", "fa-chevron-down"]);
    scrollBtn.append(scrollBtnSpan, scrollBtnIcon);
    
    heroWrapper.append(avatar,greetHeading, tagline, fullDescription, createSocialLinks(links), scrollBtn)
    homeSection.append(heroWrapper);

    return homeSection;
}