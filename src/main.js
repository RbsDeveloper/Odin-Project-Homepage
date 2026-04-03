import { createCompleteElement } from "./utils.js";
import { createHero } from "./hero.js";
import { createProjectsSection } from "./projects.js";

export function createMain() {
    const main = createCompleteElement("main");
    main.append(createHero(), createProjectsSection());

    return main
}