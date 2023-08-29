import women from '@/../public/assets/women-react.svg'
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { CustomTyped } from './CustomTyped';



export function Introduction() {
    return (
        <section id="home" className="px-16 2xl:px-64">
            <div className="flex justify-between">
                <h1>Olá, meu nome é <br />
                    <span className="">Matheus Lucca</span>
                    <br />

                    <CustomTyped  className="writeText"
                        strings={["FullStack Developer"]}
                        typeSpeed={150}
                        backDelay={200}
                        backSpeed={100}
                        loop />
                </h1>
                <div className="">
                    <Image src={women} width='300' height='200'  alt="Logo do react" />
                </div>
            </div>

            <div>
                <a href="https://github.com/MatheusLucca"> <FaGithub /> <span>Github</span> </a>
                <a href="https://www.instagram.com"> <FaInstagram /> <span>Instagram</span> </a>
                <a href="https://www.linkedin.com/in/matheus-alves-b1a22720a/"> <FaLinkedin /> <span>Linkedin</span> </a>
            </div>
        </section>
    )
}