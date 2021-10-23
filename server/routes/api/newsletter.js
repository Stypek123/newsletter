import express from 'express';
import mysql from 'mysql';

const router = express.Router();

// Get users
// router.get('/', async (req, res) => {
//     try {
//         dbGet();
        
//         res.status(200).send();
//     } catch(e) {
//         console.log(e);
//         res.status(500).send();
//     }
// });

// POST USER
router.post('/addToNewsletter/:email', async (req, res) => {
    dbInsert(req.params.email, res)
});



// INSERT MAIL
async function dbInsert(email, res) {
    let mail = email
    let con = mysql.createConnection({
        host: "remotemysql.com",
        user: "P9IgcRMnbm",
        password: "Cr2bldKHHx",
        database: "P9IgcRMnbm"
    });

    con.connect( async err => {
        if(err) return res.status(500).send({message: err.code}) 

        const query = `INSERT INTO newsletter_users(email) VALUES('${mail}')`;
        
        
        con.query(query, (err, result) => {
                if (err) {
                    if(err) return res.status(405).send({message: err.code})
                }
                return res.status(201).send({message: 'everything is fine'});
            });
    });
}

// GET MAIL
// function dbGet() {
//     let con = mysql.createConnection({
//         host: "remotemysql.com",
//         user: "P9IgcRMnbm",
//         password: "Cr2bldKHHx",
//         database: "P9IgcRMnbm"
//     });

// };

export default router
