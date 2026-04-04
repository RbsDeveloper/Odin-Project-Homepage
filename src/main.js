import { createCompleteElement } from "./utils.js";
import { createHero } from "./hero.js";
import { createProjectsSection } from "./projects.js";
import { createContactSection } from "./contact.js";

export function createMain() {
    const main = createCompleteElement("main");
    main.append(createHero(), createProjectsSection(), createContactSection());

    return main
}