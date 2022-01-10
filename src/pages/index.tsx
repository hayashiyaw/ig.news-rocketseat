import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import style from './home.module.scss'

export default function Home(){
  return(
    <>
      <Head>
        <title> Home | ig.news</title>
      </Head>

      <main className={style.contentContainer}>
        <section className={style.hero}>
          <span>👏 Hey, welcome </span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for $9,90 month</span>
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="girl coding" />
      </main>
    </>
  )
}