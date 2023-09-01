import Image from "next/image";
import { BsArrowRightCircle } from 'react-icons/bs'
type ProjectItemProps ={
    project: {
        name: string;
        type: string;
        description: string;
        imagem: string;
        link: string;
        left: boolean;
    }
}
export function ProjectItem({ project }: ProjectItemProps) {

    const left = {
        "item-project-left": "item-project-left",
        "item-text-description-left": "item-text-description-left",
        "item-link-left": "item-link-left",
    }
    const right = {
        "item-project-right": "item-project-right",
        "item-text-description-right": "item-text-description-right",
        "item-link-right": "item-link-right",
    }
    return (
            <li className={`xs:item-xs md:item-project ${project.left ? left["item-project-left"] : right["item-project-right"]} group`}>
            <div className={`xs:static md:absolute md:item-text-description ${project.left ? left["item-text-description-left"] : right["item-text-description-right"]}`}>
                <strong>{project.name}</strong>
                <span className="description">- {project.type}</span>
            </div>
            <div className="">
                <Image src={project.imagem} alt={project.name} width={550} height={400} className="opacity-40 group-hover:opacity-100 transition-all duration-300"/>
            </div>
            <a href="" className={`xs:static md:absolute item-link ${project.left ? left["item-link-left"]: right["item-link-right"]} group-hover:text-violet-800`}>
                Ver mais
                <BsArrowRightCircle />
            </a>
        </li>
    )
}