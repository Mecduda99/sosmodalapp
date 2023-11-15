"use client";
import Link from 'next/link';
import "./Cabecalho.css";
import { useState } from 'react';

export default function Cabecalho() {
    return(
    <header className='cabecalho'>
        <nav>   
            <Link className='link' href="/">LOGOUT</Link>
            <div className='menu-sections'>
                <Link className='link' href="/">HOME</Link>
                <Link className='link' href="/secoes/sobre">SOBRE NOS</Link>
                <Link className='link' href="/secoes/faleconosco">FALE CONOSCO</Link>
            </div>

            <div>
                <p>usuario - email</p>
            </div>
        </nav>
    </header>       
    )
}