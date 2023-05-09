const db = require('mongoose')
require('dotenv').config();
const env = process.env;
async function connectToDb () {
   try {
    console.log("Conexão com o banco de dados iniciou")
    await db.connect(env.MONGODB_URL);
    console.log("Conexão feita, poura!")
   }
   catch(err){
    console.log(`Algum erro ${err}`)
   }
}

module.exports = connectToDb;