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
                <Link className='link' href="/produtos/calca">HOME</Link>
                <Link className='link' href="/produtos/camisa">SOBRE NOS</Link>
                <Link className='link' href="/produtos/meia">FALE CONOSCO</Link>
            </div>

            <div>
                <p>usuario - email</p>
            </div>
        </nav>
    </header>       
    )
}