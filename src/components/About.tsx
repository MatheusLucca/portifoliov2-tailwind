import me from '@/../public/assets/me.png'
import Image from "next/image";

export function About(){
    return(
        <section className='xs:pt-14 md:pt-20 bg-neutral-800 xs:h-[40rem] md:h-[40rem] lg:[38rem] xs:text-center md:text-start'>
            <div className='flex px-16 2xl:px-64 md:gap-40 2xl:gap-60'>
                <div className='xs:hidden md:block'>
                        <Image src={me} alt="Uma foto minha" width={400} height={400}  className='rounded-3xl'/>
                </div>
                <div className='flex flex-col gap-2 px-2 w-[40rem]'>
                    <h2 className='text-sky-700 xs:text-3xl md:text-5xl font-bold'>Sobre mim</h2>
                    <span className='xs:text-base md:text-lg'>Campo Grande-MS, Brasil.</span>
                    <p className='xs:text-lg md:text-xl'>20 anos, técnico em informática, cursando o último semestre de sistemas de informação na Universidade Federal de Mato Grosso do Sul(UFMS).</p>
                    <p className='xs:text-lg md:text-xl'>Trabalhei mais de um ano como desenvolvedor Full Stack utilizando(Javascript, Jquery e Django).</p>
                    <p className='xs:text-lg md:text-xl'>Aqui você encontra alguns dos meus projetos, assim como no linkedin e github.</p>       
                    <a href='' className='bg-sky-600 hover:bg-sky-700 text-white rounded-3xl w-36 xs:text-lg md:text-xl flex justify-center p-2 xs:self-center md:self-start'>Currículo</a>         
                </div> 
            </div>
        </section>
    )
}