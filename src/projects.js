import { createCompleteElement } from "./utils.js"

const projects = [
    {
        title:"Battleship",
        description:"A fully playable browser-based Battleship game built with a focus on Test Driven Development using Jest. Features an AI opponent, drag-and-drop ship placement, and modular game logic separated from the UI.",
        image:"/images/battleship.png",
        tags:["Javascript", "JEST", "Webpack", "TDD"],
        liveUrl:"https://rbsdeveloper.github.io/Odin-Project-Battleship/",
        repoUrl:"https://github.com/RbsDeveloper/Odin-Project-Battleship",
        gradient: "linear-gradient(135deg, #667eea, #764ba2)",
    },
    {
        title:"Weather App",
        description:"A dynamic weather application powered by the Visual Crossing API. Search any city and get real-time conditions, daily and weekly forecasts, UV index, humidity, wind and more.",
        image:"/images/weatherapp.png",
        tags:["REST APIs", "Webpack", "Javascript", "CSS"],
        liveUrl:"https://rbsdeveloper.github.io/Odin-Project-Weather-app/",
        repoUrl:"https://github.com/RbsDeveloper/Odin-Project-Weather-app",
        gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
    },
    {
        title:"ToDoodle — Task Management App",
        description:"A full-featured task manager with project organization, priority levels, and smart filtering for today's, completed, and overdue tasks.",
        image:"/images/toDoodle.png",
        tags:["Local Storage", "Javascript", "CSS", "Webpack"],
        liveUrl:"https://rbsdeveloper.github.io/toDoList-OdinProject/",
        repoUrl:"https://github.com/RbsDeveloper/toDoList-OdinProject",
        gradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
    },
    {
        title:"Calculator",
        description:"A fully functional calculator built with vanilla JavaScript, HTML and CSS. Features arithmetic operations, calculation history, keyboard input support, and three different color themes.",
        image:"/images/calculator.png",
        tags:["Javascrip", "CSS"],
        liveUrl:"https://rbsdeveloper.github.io/Calculator-Odin-Project/",
        repoUrl:"https://github.com/RbsDeveloper/Calculator-Odin-Project",
        gradient: "linear-gradient(135deg, #43e97b, #38f9d7)",
    },
    {
        title:"Etch a Sketch",
        description:"A fun browser-based Etch-a-Sketch project built with HTML, CSS, and JavaScript. Part of The Odin Project curriculum.",
        image:"/images/etchasketch.png",
        tags:["Javascript", "CSS"],
        liveUrl:"https://rbsdeveloper.github.io/Etch-a-Sketch-Odin-Project/",
        repoUrl:"https://github.com/RbsDeveloper/Etch-a-Sketch-Odin-Project",
        gradient: "linear-gradient(135deg, #fa709a, #fee140)",
    },
    {
        title:"Tic Tac Toe",
        description:"A simple yet interactive Tic-Tac-Toe game built using HTML, CSS, and JavaScript. This project features a modern UI, smooth game mechanics, and a dynamic message display for player turns and results.",
        image:"/images/tictactoe.png",
        tags:["javascript", "CSS"],
        liveUrl:"https://rbsdeveloper.github.io/TicTacToe-OdinProject/",
        repoUrl:"https://github.com/RbsDeveloper/TicTacToe-OdinProject",
        gradient: "linear-gradient(135deg, #a18cd1, #fbc2eb)",
    }
]

function createProjectCard(projects) {
    const projectsContainer = createCompleteElement("div", ["projectsContainer"], "",);
    
    projects.forEach((project, idx) => {
        const card = createCompleteElement("article", ["projectCard"], "", {id:idx+1});
        
        const header = createCompleteElement("div", ["cardHeader"], "");
        header.style.background = project.gradient;
        const projectPreview = createCompleteElement("img", ["projectImg"], "", {src:project.image});
        header.append(projectPreview);

        const cardBody = createCompleteElement("div", ["cardBody"]);
        const projectTitle = createCompleteElement("h4", ["cardTitle"], project.title);
        const projectDesciption = createCompleteElement("p", ["cardDescription"], project.description);
        const tagList = createCompleteElement("ul", ["cardTags"]);
        project.tags.forEach(tag=> {
            const li = createCompleteElement("li", [], tag);
            tagList.append(li)
        });
        const linkContainer = createCompleteElement("div", ["cardLinkBtns"]);
        const liveBtn = createCompleteElement("a", ["btn", "liveBtn"], "Live Demo", {href:project.liveUrl});
        liveBtn.prepend(createCompleteElement("i", ["fa-solid", "fa-arrow-up-right-from-square"]))
        const codeBtn = createCompleteElement("a", ["btn", "codeBtn"], "Code", {href:project.repoUrl});
        codeBtn.prepend(createCompleteElement("i", ["fa-solid", "fa-file-code"]));
        linkContainer.append(liveBtn, codeBtn);

        cardBody.append(projectTitle, projectDesciption, tagList, linkContainer);
        card.append(header, cardBody);
        projectsContainer.append(card)
    });

    return projectsContainer;
}

export function createProjectsSection() {
    const projectsSection = createCompleteElement("section", ["projectSection"]);
    const innerWrapper =  createCompleteElement("div", ["container"]);
    const sectionTitle = createCompleteElement("h2", ["sectionTitle"], "Featured Projects");
    const sectionDescription = createCompleteElement("p", ["sectionDescription"], "A collection of my recent work showcasing various technologies and problem-solving approaches.");
    
    innerWrapper.append(sectionTitle, sectionDescription, createProjectCard(projects));
    projectsSection.append(innerWrapper)
    return projectsSection;
}

