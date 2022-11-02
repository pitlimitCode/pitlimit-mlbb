

upload website dan IG tiap jumat, karena player rame di sabtu minggu

input:
time update
hierarchy:
  ban >= 50 %
  win >= 60 %
  min 1 most popular each role
  win-end

priority :
-server site hero update:
  json.parse json.stringify,
  1 table: id, json_data? (max length?), date (YYYY-MM-DD), time (can null) | date for client web | time for documentation

coming soon output other:
-6 hero most banned
-hero image circle
-spell most used
-emblem most used
-items most used

coming soon coding:
npm run custom for quick deploy updated


git branch #make sure on branch 
git add -A
git commit -m "__your_message__"
git push
git checkout main
git merge origin/developing
git checkout developing
git branch #again

Run the development local server:
```bash
npm run dev
```

looping row table on HTML:
<tr key=data.id[n]>
  <td>data.exp[n]</td>
  <td>data.jungler[n]</td>
  <td>data.mid[n]</td>
  <td>data.roamer[n]</td>
  <td>data.gold[n]</td>
</tr>

json prototype  *still need revision. butuh id, 
{
  id: [ 0,1,2,3,4 ],
  exp: [
    exp0,
    exp1,
    exp2,
    exp3,
    exp4
  ],
  jungler: [ ... ],
  mid: [ ... ],
  roamer: [ ... ],
  gold: [ ... ]
}


VISI & MISSION:
Visi:
-individual achievement about portofolio nextJS project
-mlbb player didt confuse to choose hero while not ranked from long time before
-get minor contribution income from visitor/client/host
Mission:
...
-


NOTES default dari VERCEL: https://nextjs.org/docs/api-routes/introduction