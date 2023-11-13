import React from 'react'
import Image from 'next/image'

export default function Rodape() {
    return (
        <>
            <h1>Integrantes</h1>

            <div>
                <p>Maria Eduarda</p>
                <p>Maria Eduarda</p>
                <p>Maria Eduarda</p>
                <p>Maria Eduarda</p>
            </div>

            <div className='redes-sociais'>
                <div>
                    <Image src="" alt="Picture of the author"></Image>
                    <p>titulo da rede</p>
                </div>
                <div>
                    <Image src="" alt="Picture of the author"></Image>
                    <p>titulo da rede</p>
                </div>
                <div>
                    <Image src="" alt="Picture of the author"></Image>
                    <p>titulo da rede</p>
                </div>
                <div>
                    <Image src="" alt="Picture of the author"></Image>
                    <p>titulo da rede</p>
                </div>
            </div>
        </>
    )
}