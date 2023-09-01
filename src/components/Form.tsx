

export function Form() {


    return (
        <section id="form" className="pt-20 xs:h-[50rem] lg:h-[38rem] lg:px-40">
            <h2 className='text-center text-sky-700 xs:mb-6 lg:mb-16 xs:text-3xl lg:text-5xl font-bold'>Contato</h2>
            <div className="xs:xs-form lg:form">
                <div className="text-sky-500">
                    <h4 className="font-bold xs:text-xl lg:text-2xl">Nome</h4>
                    <span className="sm:text-lg lg:text-xl">Matheus Lucca Alves</span>

                    <h4 className="font-bold xs:text-xl lg:text-2xl">Email</h4>
                    <span className="sm:text-lg lg:text-xl">mat.lualves@gmail.com</span>
                </div>

                <form action="" className="flex flex-col gap-4 ml-12 flex-1">
                    
                        <input
                            type="text" name="" id=""
                            placeholder="Nome" className="input-form"
                        />
                        <input type="email" name="" id=""
                            placeholder="Email" className="input-form"
                        />
                    
                    <input type="text" name="" id=""
                        placeholder="Assunto" className="input-form"
                    />
                    <textarea
                        placeholder="Descrição" className="h-24 rounded-lg text-black p-4 text-xl opacity-80 focus:outline-none focus:border-2 focus:border-sky-500"
                    >

                    </textarea>

                    <button type="button" className="bg-sky-600 hover:bg-sky-700 text-white rounded-3xl w-80 text-xl flex justify-center p-3 center self-center"> Enviar Mensagem </button>
                </form>
            </div>
        </section>
    )
}