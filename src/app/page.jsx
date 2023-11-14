import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="row">
        <div>
          <h1>A solução para otimizar seu atendimento</h1>
          <p>Com o chatbot IHelp você terá otimização, rapidez e captação de informações de forma inteligente.</p>
          <button>Adquira já</button>
        </div>

        <div>
          <Image src="/images/celular.png" width={600} height={600} alt="celular"></Image>
        </div>

      </div>
    </main>
  )
}
