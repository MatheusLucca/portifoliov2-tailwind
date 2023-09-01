import { ProjectItem } from "./ProjectItem"

export function ProjectList() {
    const project = {
        name: "Portifolio",
        type: "Website",
        description: "Descrição",
        imagem: "/assets/projeto.svg",
        link: "aaa",
        left: true


    }
    const project1 = {
        name: "Portifolio",
        type: "Website",
        description: "Descrição",
        imagem: "/assets/projeto.svg",
        link: "aaa",
        left: false


    }
    return (
        <section id="projects" className="bg-neutral-800  h-[82rem] pt-24 px-40 flex flex-col gap-10">
            <h2 className="text-center text-sky-700 xs:text-3xl md:text-5xl font-bold md:mb-16 xs:mb-4">Últimos Projetos</h2>
            <ul className="flex flex-col justify-center items-center gap-8">
                <ProjectItem project={project} />
                <ProjectItem project={project1} />
                <ProjectItem project={project} />
            </ul>

            <a href="" className="bg-sky-600 hover:bg-sky-700 text-white rounded-3xl w-80 text-xl flex justify-center p-3 center self-center">VER TODOS OS PROJETOS</a>

        </section>
    )
}