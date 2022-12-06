import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import {heroesRank, date} from '../api/datas'

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_MLBB_PL}/users/lastdata`)
  const data = await res.json()
  if (!data) { return { notFound: true } }
  return {  props: { data } }
}

export default function Home(context) {
  // console.log(context)
  // const datas123 = context.example;
  // console.log(date)
  // console.log(context.data[0].date)
  
  const date= context.data[0].date
  const heroesRank = JSON.parse(context.data[0].herojson);
  
  return (
  <div className={styles.container}>
    <Head>
      <title>Pit Limit MLBB</title>
      <meta name="description" content="MLBB Hero Pick Recommendation"/>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <header className={styles.header}>
      <h1 className={styles.titleText}>Top 5 MLBB Heroes by Role</h1>
    </header>
    <main className={styles.main}>

      <div className={styles.updateText}>Update: {date}</div>

      <table className="table table-bordered" style={{borderColor: '#F2A154'}}>
        <thead>
          <tr className='text-center'>
            <th>Exp</th>
            <th>Jungler</th>
            <th>Mid</th>
            <th>Roamer</th>
            <th>Gold</th>
          </tr>
        </thead>
        <tbody>
          {heroesRank.map(data => (
            <tr key={data.row}>
              <td className={styles.firstLetter}>{data.exp}</td>
              <td className={styles.firstLetter}>{data.jungler}</td>
              <td className={styles.firstLetter}>{data.mid}</td>
              <td className={styles.firstLetter}>{data.roamer}</td>
              <td className={styles.firstLetter}>{data.gold}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link href='https://m.mobilelegends.com/id/rank' target="_blank" rel="noopener noreferrer" className={styles.link}>
        source
      </Link>

    </main>

    <footer className={styles.footer}>
      <Link href='https://www.instagram.com/pitlimitmlbb' target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</Link>
      <Link href='https://github.com/pitlimitCode' target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</Link>
    </footer>

  </div>
  )
}
