// import sqlite from 'sqlite-async'
// import { dbPath } from '../config/constants'


// export const SQLiteDB = async () => {
//     const dbConnect = () => {
//         try {
//             const db = await sqlite.Open(dbPath)
//             console.log('Connected to the jaamp database.');
//             return db

//         }
//         catch(err) {
//             console.error(err.message);
//             return
//         }
//     }

//     const dbClose = async () => {
//         try {
//             await _db.close()
//             console.log('Closing the database connection.');

//         }
//         catch(err) {
//             console.error(err.message);
//             return
//         }
//     }

//     const _db = await dbConnect()


//     const dbRun = (sql, params?) => db.run(sql, (err) => {
//         if(err) {
//             console.error(err.message)
//             return
//         }
//         console.log("Sql statement complete")
//     })

//     return {
//         dbClose,
//         dbRun
//     }
// }

// // const db = new sqlite3.Database('../db/jaamp.db', (err) => {
// //     if (err) {
// //         console.error(err.message);
// //     }
// //     console.log('Connected to the jaamp database.');
// // })

// // export const dbConnect = () => db
// // export const dbClose = (_db) => _db.close((err) => {
// //     if (err) {
// //         console.error(err.message);
// //     }
// //     console.log('Close the database connection.');
// // })