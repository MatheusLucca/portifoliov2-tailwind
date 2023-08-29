import { ProjectItem } from "./ProjectItem"

export function ProjectList() {
    const project = {
        name: "Portifolio",
        type: "Website",
        description: "Descrição",
        imagem: "/assets/projeto.svg",
        link: "aaa",
        class: "left"


    }
    const project1 = {
        name: "Portifolio",
        type: "Website",
        description: "Descrição",
        imagem: "/assets/projeto.svg",
        link: "aaa",
        class: "right"


    }
    return (
        <section id="projects">
            <h2>Ultimos Projetos</h2>
            <ul>
                <ProjectItem project={project} />
                <ProjectItem project={project1} />
                <ProjectItem project={project} />
            </ul>

            <a href="">VER TODOS OS PROJETOS</a>

        </section>
    )
}