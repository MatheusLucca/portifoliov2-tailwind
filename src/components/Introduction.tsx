import women from '@/../public/assets/women-react.svg'
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { CustomTyped } from './CustomTyped';



export function Introduction() {
    return (
        <section id="home" className="px-16 2xl:px-64 mt-28 font-bold h-[38rem]">
            <div className="flex justify-between">
                <h1 className='text-5xl'>Olá, meu nome é <br />
                    <span className="text-6xl text-sky-700">Matheus Lucca</span>
                    <br />

                    <CustomTyped  className="writeText"
                        strings={["Full Stack Developer"]}
                        typeSpeed={150}
                        backDelay={200}
                        backSpeed={100}
                        loop />
                </h1>
                <div className="">
                    <Image src={women} width='300' height='200'  alt="Logo do react" />
                </div>
            </div>

            <div className='flex gap-10 text-2xl transition-width transition-slowest ease'>
                <a href="https://github.com/MatheusLucca" className='btn-social group'> 
                    <FaGithub size={44}/> <span className='group-hover:visible group-hover:transition-all group-hover:duration-300 group-hover:delay-75 right-10'>GitHub</span>
                </a>
                <a href="https://www.instagram.com" className='btn-social group'> 
                    <FaInstagram size={44}/> <span className='right-0 group-hover:visible group-hover:transition-all group-hover:duration-300 group-hover:delay-75 right-4'>Instagram</span> 
                </a>
                <a href="https://www.linkedin.com/in/matheus-alves-b1a22720a/" className='btn-social group'> 
                    <FaLinkedin size={44}/> <span className='group-hover:visible group-hover:transition-all group-hover:duration-300 group-hover:delay-75 right-6'>Linkedin</span> 
                </a>
            </div>
        </section>
    )
}