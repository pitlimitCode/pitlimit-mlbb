import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {heroesRank, date} from '../api/datas'

export default function Home(content) {
  // console.log(content)
  // const datas123 = content.example;
  // console.log(date)
  
  return (
  <div className={styles.container}>
    <Head>
      <title>Pit Limit MLBB</title>
      <meta name="description" content="MLBB Hero Pick Recommendation"/>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <header className={styles.header}>
      <h1 className={styles.titleText}>Top 5 MLBB Heroes each Role</h1>
    </header>
    <main className={styles.main}>

      <div className={styles.updateText}>Update: {date}</div>

        <br/>
        <div>Update: 01 November 2022</div>
        <div>GitHub Website Creator: <a href='https://github.com/pitlimitCode' target="_blank" rel="noopener noreferrer">PitLimitCode</a></div>

      <table className="table table-bordered" style={{borderColor: '#F2A154'}}>
        <thead>
          <tr className='text-center'>
            {/* <th scope="col">Exp</th> */}
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
              <td>{data.exp}</td>
              <td>{data.jungler}</td>
              <td>{data.mid}</td>
              <td>{data.roamer}</td>
              <td>{data.gold}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </main>

    <footer className={styles.footer}>
      {/* GitHub Website Creator:<span style={{color:'white'}}>_</span><span><Link href='https://github.com/pitlimitCode' target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>PitLimitCode</Link></span> */}
      <Link href='https://www.instagram.com/pitlimitmlbb' target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</Link>
      <Link href='https://github.com/pitlimitCode' target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</Link>
    </footer>

  </div>
  )
}
