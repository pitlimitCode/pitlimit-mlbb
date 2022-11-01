import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pit Limit MLBB</title>
        <meta name="description" content="MLBB Hero Pick Recommendation"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <table className="table table-bordered border-primary">
          <thead>
            <tr>
              <th scope="col">LANE</th>
              <th scope="col">Exp</th>
              <th scope="col">Jungler</th>
              <th scope="col">Mid</th>
              <th scope="col">Roamer</th>
              <th scope="col">Gold</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Phoveus </td>
              <td>Terizla </td>
              <td>Gloo </td>
              <td>Paquito </td>
              <td>Fredrinn</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Ling </td>
              <td>Leomord </td>
              <td>Aldous </td>
              <td>Harith </td>
              <td>Fanny</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Faramis</td>
              <td>Valentina</td>
              <td>Gussion</td>
              <td>Yve</td>
              <td>Pharsa</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Lolita</td>
              <td>Grock</td>
              <td>Diggie</td>
              <td>Chou</td>
              <td>Atlas</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Wanwan</td>
              <td>Beatrix</td>
              <td>Kimmy</td>
              <td>Irithel</td>
              <td>Clint</td>
            </tr>
          </tbody>
        </table>

        <br/>
        <div>Update: 01 November 2022</div>
        <div>GitHub Website Creator: <a href='https://github.com/pitlimitCode' target="_blank">PitLimitCode</a></div>

      </main>

      {/* <footer className={styles.footer}>
        <a href='https://github.com/pitlimitCode' target="_blank">WebSite Creator</a>
        <a href='https://m.mobilelegends.com/id/rank' target="_blank">Algoritma References</a>
      </footer> */}

    </div>
  )
}
