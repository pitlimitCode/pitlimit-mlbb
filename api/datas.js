const row1 = []; const row2 = []; const row3 = []; const row4 = []; const row5 = [];


const date = '03 Desember 2022'

row1.push("joy")
row1.push("chou")
row1.push("alice")
row1.push("badang")
row1.push("fredrinn")

row2.push("martis")
row2.push("kaja")
row2.push("leomord")
row2.push("fanny")
row2.push("aulus")

row3.push("gusion")
row3.push("yve")
row3.push("faramis")
row3.push("zhask")
row3.push("lunox")

row4.push("franco")
row4.push("carmilla")
row4.push("lolita")
row4.push("diggie")
row4.push("floryn")

row5.push("wanwan")
row5.push("lesley")
row5.push("kimmy")
row5.push("clint")
row5.push("melissa")

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
// console.log("heroesRank: ", heroesRank);
// const tes1 = (JSON.stringify(heroesRank));
// console.log("stringfy: ", tes1);
// const tes2 = (JSON.parse(tes1));
// console.log("parse: ", tes2);

export {heroesRank, date}