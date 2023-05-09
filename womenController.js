const connectToDb = require('./dataBase')
const db = connectToDb();
const WomenTI = require('./womanModel')


const showHello = (req, res) => (res.send("Olá, mundo!"));


async function createWoman (req, res) {
    const createNewWoman = new WomenTI({
        name: req.body.name,
        image: req.body.image,
        quote: req.body.quote,
        resume: req.body.resume
    })

    try{
        const womanCriated = await createNewWoman.save();
        res.status(201).json(womanCriated)
    }catch(err){
        console.log("Erro", err)
    }
}

async function women(req, res) {
    try{
        const womenFromDb = await WomenTI.find();
        res.json(womenFromDb)
    }catch(err){
        console.log("Erro", err)
    }
    
};

async function updateWoman (req, res) {
    try{
        const _id = req.params.id;
        const findedWoman = await WomenTI.findById(_id);
        if (req.body.name) findedWoman.name = req.body.name;
        if (req.body.image) findedWoman.image = req.body.image;
        if (req.body.resume) findedWoman.resume = req.body.resume;
        if (req.body.quote) findedWoman.quote = req.body.quote;

        const lastWoman = await findedWoman.save();
        res.status(201).json(lastWoman)
    }
    catch(err){
        console.log("Erro", err)
    }
}

async function deleteWoman(req, res){
    try{
        const _id = req.params.id;
        const deletededWoman = await WomenTI.findByIdAndDelete(_id);
        res.json({message: 'Mulher deletada com sucesso!'})
    }
    catch(err){
        console.log("Algo está errado", err)
    }
}

const showHour = (req, res) => {
    const date = new Date();
    const hour = date.toLocaleTimeString('pt-BR');
    res.send(hour);
}

    

module.exports = {
    showHello,
    women,
    showHour,
    createWoman,
    updateWoman,
    deleteWoman
}