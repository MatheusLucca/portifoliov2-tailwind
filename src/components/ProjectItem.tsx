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
        "item-project-left": "lg:item-project-left",
        "item-text-description-left": "lg:item-text-description-left",
        "item-link-left": "lg:item-link-left",
    }
    const right = {
        "item-project-right": "lg:item-project-right",
        "item-text-description-right": "lg:item-text-description-right",
        "item-link-right": "lg:item-link-right",
    }
    return (
            <li className={`xs:xs-item lg:item-project ${project.left ? left["item-project-left"] : right["item-project-right"]} group`}>
            <div className={`xs:xs-item-text-description lg:item-text-description ${project.left ? left["item-text-description-left"] : right["item-text-description-right"]}`}>
                <strong>{project.name} </strong>
                <span className="">- {project.type}</span>
            </div>
            <div className="">
                <Image src={project.imagem} alt={project.name} width={550} height={400} className="opacity-40 group-hover:opacity-100 transition-all duration-300"/>
            </div>
            <a href="" className={`xs:xs-item-link lg:item-link ${project.left ? left["item-link-left"]: right["item-link-right"]} group-hover:text-violet-800`}>
                Ver mais
                <BsArrowRightCircle />
            </a>
        </li>
    )
}