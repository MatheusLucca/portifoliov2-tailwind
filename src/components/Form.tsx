import { useState } from "react";


export function Form() {


    return (
        <section id="form">
            <h2>Entre em Contato</h2>
            <div>
                <div>
                    <h3>Informações</h3>

                    <h4>Nome</h4>
                    <span>Matheus Lucca Alves</span>

                    <h4>Email</h4>
                    <span>mat.lualves@gmail.com</span>
                </div>

                <form action="">
                    
                        <input
                            type="text" name="" id=""
                            placeholder="Nome"
                        />
                        <input type="email" name="" id=""
                            placeholder="Email"
                        />
                    
                    <input type="text" name="" id="" className="subject"
                        placeholder="Assunto"
                    />
                    <textarea
                        placeholder="Descrição"
                    >

                    </textarea>

                    <button type="button"> Enviar Mensagem </button>
                </form>
            </div>
        </section>
    )
}