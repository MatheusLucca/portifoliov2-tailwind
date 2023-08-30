import me from '@/../public/assets/me.png'
import Image from "next/image";

export function About(){
    return(
        <section className='pt-20 bg-neutral-800  h-[38rem]'>
            <div className='flex px-16 2xl:px-64 gap-60'>
                <div className='img'>
                        <Image src={me} alt="Uma foto minha" width={400} height={400}  className='rounded-3xl'/>
                </div>
                <div className='flex flex-col gap-2 px-2 w-[40rem]'>
                    <h2 className='text-sky-700 text-5xl font-bold'>Sobre mim</h2>
                    <span className='text-lg'>Campo Grande-MS, Brasil.</span>
                    <p className='text-xl'>20 anos, técnico em informática, cursando o último semestre de sistemas de informação na Universidade Federal de Mato Grosso do Sul(UFMS).</p>
                    <p className='text-xl'>Estou à procura de emprego como desenvolvedor no mercado de trabalho e disponível a trabalhos freelancer.</p>
                    <p className='text-xl'>Trabalhei mais de um ano como desenvolvedor Full Stack utilizando(Javascript, Jquery e Django).</p>
                    <p className='text-xl'>Aqui você encontra alguns dos meus projetos, assim como no linkedin e github.</p>       
                    <a href='' className='bg-sky-600 hover:bg-sky-700 text-white rounded-3xl w-36 text-xl flex justify-center p-2'>Currículo</a>         
                </div> 
            </div>
        </section>
    )
}