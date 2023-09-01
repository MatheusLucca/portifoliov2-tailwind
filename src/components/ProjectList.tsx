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
        <section id="projects" className="bg-neutral-800 xs:h-[86rem] sm:h-[95rem] lg:h-[82rem] xs:pt-12 sm:pt-24 xs:px-5 md:px-28 lg:px-40 flex flex-col gap-10">
            <h2 className="text-center text-sky-700 xs:text-3xl md:text-5xl font-bold xs:mb-4 md:mb-8 lg:mb-16">Últimos Projetos</h2>
            <ul className="flex flex-col justify-center items-center gap-8">
                <ProjectItem project={project} />
                <ProjectItem project={project1} />
                <ProjectItem project={project} />
            </ul>

            <a href="" className="bg-sky-600 hover:bg-sky-700 text-white rounded-3xl w-80 text-xl flex justify-center p-3 center self-center">VER TODOS OS PROJETOS</a>

        </section>
    )
}