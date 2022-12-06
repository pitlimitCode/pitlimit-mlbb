import axios from 'axios';
import {useState} from 'react';
import Router from 'next/router';
import styles from '../styles/Home.module.css'

export async function getServerSideProps(context) {
  const api = process.env.API_MLBB_PL
  return {  props: { api } }
}

export default function Update(context) {
  // const datas = (JSON.parse(context.data[0].herojson));
  // console.log(datas)
  // console.log(datas[0])
  // console.log(datas[0].exp)

  const [e0, sete0] = useState();
  const [e1, sete1] = useState();
  const [e2, sete2] = useState();
  const [e3, sete3] = useState();
  const [e4, sete4] = useState();

  const [j0, setj0] = useState();
  const [j1, setj1] = useState();
  const [j2, setj2] = useState();
  const [j3, setj3] = useState();
  const [j4, setj4] = useState();

  const [m0, setm0] = useState();
  const [m1, setm1] = useState();
  const [m2, setm2] = useState();
  const [m3, setm3] = useState();
  const [m4, setm4] = useState();

  const [r0, setr0] = useState();
  const [r1, setr1] = useState();
  const [r2, setr2] = useState();
  const [r3, setr3] = useState();
  const [r4, setr4] = useState();

  const [g0, setg0] = useState();
  const [g1, setg1] = useState();
  const [g2, setg2] = useState();
  const [g3, setg3] = useState();
  const [g4, setg4] = useState();

  const row1 = []; const row2 = []; const row3 = []; const row4 = []; const row5 = [];

  row1.push(e0, e1, e2, e3, e4);
  row2.push(j0, j1, j2, j3, j4);
  row3.push(m0, m1, m2, m3, m4);
  row4.push(r0, r1, r2, r3, r4);
  row5.push(g0, g1, g2, g3, g4);
  
  // row2.push(j0);
  // row2.push(j1);
  // row2.push(j2);
  // row2.push(j3);
  // row2.push(j4);

  const heroesRank = 
  [
    {
      row: 1,
      exp: row1[0],
      jungler: row2[0],
      mid: row3[0],
      roamer: row4[0],
      gold: row5[0],
    },
    {
      row: 2,
      exp: row1[1],
      jungler: row2[1],
      mid: row3[1],
      roamer: row4[1],
      gold: row5[1],
    },
    {
      row: 3,
      exp: row1[2],
      jungler: row2[2],
      mid: row3[2],
      roamer: row4[2],
      gold: row5[2],
    },
    {
      row: 4,
      exp: row1[3],
      jungler: row2[3],
      mid: row3[3],
      roamer: row4[3],
      gold: row5[3],
    },
    {
      row: 5,
      exp: row1[4],
      jungler: row2[4],
      mid: row3[4],
      roamer: row4[4],
      gold: row5[4],
    },
  ]

  const tes1 = (JSON.stringify(heroesRank));

  const handleSubmit = (e) => {
    // console.log(`${context.api}/users`);
    axios.post(`${context.api}/users`, {
      herojson: tes1
    })
      .then(function (response) { 
        // console.log(response); 
        Router.push('/')
      })
      .catch(function (error) { console.log(error); 
        });
    e.preventDefault();
  };
  
  const goHome = (e) => {
    Router.push('/')
  }

  return(
    <>
      
      <form onSubmit={(e) => handleSubmit(e)}>

        <table className="table table-bordered text-center" style={{borderColor: '#F2A154'}}>
          <thead>
            <tr>
              <th>Exp</th> <th>Jungler</th> <th>Mid</th> <th>Roamer</th> <th>Gold</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="text" onChange={(e) => sete0(e.target.value)}/></td>
              <td><input type="text" onChange={(e) => setj0(e.target.value)}/></td>
              <td><input type="text" onChange={(e) => setm0(e.target.value)}/></td>
              <td><input type="text" onChange={(e) => setr0(e.target.value)}/></td>
              <td><input type="text" onChange={(e) => setg0(e.target.value)}/></td>
            </tr>
            <tr>
              <td><input type="text" onChange={(e) => sete1(e.target.value)}/></td>
              <td><input type="text" onChange={(e) => setj1(e.target.value)}/></td>
              <td><input type="text" onChange={(e) => setm1(e.target.value)}/></td>
              <td><input type="text" onChange={(e) => setr1(e.target.value)}/></td>
              <td><input type="text" onChange={(e) => setg1(e.target.value)}/></td>
            </tr>
            <tr>
              <td><input type="text" onChange={(e) => sete2(e.target.value)}/></td>
              <td><input type="text" onChange={(e) => setj2(e.target.value)}/></td>
              <td><input type="text" onChange={(e) => setm2(e.target.value)}/></td>
              <td><input type="text" onChange={(e) => setr2(e.target.value)}/></td>
              <td><input type="text" onChange={(e) => setg2(e.target.value)}/></td>
            </tr>
            <tr>
              <td><input type="text" onChange={(e) => sete3(e.target.value)}/></td>
              <td><input type="text" onChange={(e) => setj3(e.target.value)}/></td>
              <td><input type="text" onChange={(e) => setm3(e.target.value)}/></td>
              <td><input type="text" onChange={(e) => setr3(e.target.value)}/></td>
              <td><input type="text" onChange={(e) => setg3(e.target.value)}/></td>
            </tr>
            <tr>
              <td><input type="text" onChange={(e) => sete4(e.target.value)}/></td>
              <td><input type="text" onChange={(e) => setj4(e.target.value)}/></td>
              <td><input type="text" onChange={(e) => setm4(e.target.value)}/></td>
              <td><input type="text" onChange={(e) => setr4(e.target.value)}/></td>
              <td><input type="text" onChange={(e) => setg4(e.target.value)}/></td>
            </tr>
          </tbody>
        </table>
        <div className='text-center'><button type="submit">Submit</button></div>
      </form>

      <div className='mt-3'><textarea rows="7" placeholder='note...' style={{width:'100%'}}/></div>

      <div className='text-center'><button onClick={(e) => goHome(e)}>Home</button></div>
      
      {/* <table className="table table-bordered" style={{borderColor: '#F2A154'}}>
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
          {
            datas.map(data => (
              <tr key={data.row}>
                <td >{data.exp}</td>
                <td >{data.jungler}</td>
                <td >{data.mid}</td>
                <td >{data.roamer}</td>
                <td >{data.gold}</td>
              </tr>
            ))
          }
        </tbody>
      </table> */}

    </>
  )
}
