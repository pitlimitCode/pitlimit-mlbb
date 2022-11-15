// import conn from '../lib/db'

// export default async (req, res) => {
//   try {
//     console.log("req nom", req.body)
//     const query = 'INSERT INTO posts(content) VALUES($1)'
//     const values = [req.body.content]
//     const result = await conn.query(
//       query,
//       values
//     );
//     console.log( "ttt",result );
//   } catch ( error ) {
//     console.log( error );
//   }
// };

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe123' })
}
