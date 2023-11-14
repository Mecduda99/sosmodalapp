import React from 'react'
import Image from 'next/image'
import './Rodape.css'

export default function Rodape() {
    return (
        <footer>
            <div className='integrantes-lista'>
                <h1 className="titulo-vermelho">Integrantes</h1>

                <div className="integrantes">
                    <p>Maria Eduarda RM</p>
                    <p>Maria Eduarda RM</p>
                    <p>Maria Eduarda RM</p>
                    <p>Maria Eduarda RM</p>
                </div>
            </div>

            <div className='redes-sociais'>
                <div>
                    <Image className='img' src="" alt="Picture of the author"></Image>
                    <p>LinkedIn</p>
                </div>
                <div>
                    <Image className='img' src="" alt="Picture of the author"></Image>
                    <p>Instagram</p>
                </div>
                <div>
                    <Image className='img' src="" alt="Picture of the author"></Image>
                    <p>E-mail</p>
                </div>
                <div>
                    <Image className='img' src="" alt="Picture of the author"></Image>
                    <p>WhatsApp</p>
                </div>
            </div>
        </footer>
    )
}