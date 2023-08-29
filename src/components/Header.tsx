import Link from "next/link";
export function Header(){
    return(
        <header className="px-48 py-4 border-b-2 border-zinc-500 bg-zinc-900 text-neutral-50">
            <div className="flex justify-between">
                <span className="text-2xl text-violet-400">Portifo<span className="text-sky-400">lio</span></span>
                <nav className="text-xl">
                    <ul className="flex gap-14">
                        <li className="hover:text-gray-400"><Link href={'#home'}>Home</Link></li>
                        <li className="hover:text-gray-400"><Link href={'#about'}>Sobre mim</Link></li>
                        <li className="hover:text-gray-400"><Link href={'#skills'}>Habilidades</Link></li>
                        <li className="hover:text-gray-400"><Link href={'#projects'}>Projetos</Link></li>
                        <li className="hover:text-gray-400"><Link href={'#form'}>Contato</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}