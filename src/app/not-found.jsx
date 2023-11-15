import Image from "next/image";


export default function Notfound() {
  return (
    <div>
        <h1>OOPS! 404! - Página não encontrada!</h1>
        <div>
            <figure className="block m-auto w-52">
            <Image src="/images/erro.png" alt="numeracao 404" width={650} height=
            {500} />
            </figure>
        </div>
    </div>
  )
}