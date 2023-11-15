"use client";
import Link from 'next/link';
import "./Cabecalho.css";
import { useState } from 'react'; 

export default function Cabecalho() {
    const user = JSON.parse(sessionStorage.getItem("user-info"));
    const [usuario] = useState(user);
  
    const handleLogout = () => {
      sessionStorage.removeItem("token-user");
      sessionStorage.removeItem("user-info");
      window.location.href = "/login";
    }

    if(sessionStorage.getItem("token-user")){
    
        return (
            
            <header className='cabecalho'>
              
            <nav>
              <Link onClick={handleLogout} href="/">LOGOUT</Link>
              <div className='menu-sections'>
                <Link className='link' href="/">HOME</Link>
                <Link className='link' href="/secoes/sobre">SOBRE NOS</Link>
                <Link className='link' href="/secoes/faleconosco">FALE CONOSCO</Link>
                </div>
              <div>
                <p>{usuario.name} - {usuario.email}</p>
              </div>
            </nav>
        </header>
      )
    }
    else{
    return (
    <header className='cabecalho'>
        <nav>
            <Link href="/login">LOGIN</Link>
            <div className='menu-sections'>
                <Link className='link' href="/">HOME</Link>
                <Link className='link' href="/secoes/sobre">SOBRE NOS</Link>
                <Link className='link' href="/secoes/faleconosco">FALE CONOSCO</Link>
            </div>
            <div>
                <p>-</p>
            </div>
        </nav>
    </header>
    ) 
    }

}