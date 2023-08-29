import me from '@/../public/assets/me.png'
import Image from "next/image";

export function About(){
    return(
        <section>
            <div>
                <div className='img'>
                        <Image src={me} alt="Uma foto minha" width={400} height={400}  />
                </div>
                <div>
                    <h2>Sobre mim</h2>
                    <span>Campo Grande-MS, Brasil.</span>
                    <p>19 anos, técnico em informática, cursando sistemas de informação na Universidade Federal de Mato Grosso do Sul(UFMS).</p>
                    <p>Estou à procura da minha primeira experiência profissional como desenvolvedor estágiario no mercado de trabalho e disponível a trabalhos freelancer.</p>
                    <p>Aqui você encontra alguns dos meus projetos, assim como no linkedin e github.</p>       
                    <a href=''>Currículo</a>         
                </div> 
            </div>
        </section>
    )
}