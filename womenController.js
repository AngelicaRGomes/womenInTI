
// const mostraPorta = () => console.log(`Servidor rodando na porta ${port}.`);
const { v4: uuidv4 } = require('uuid');
const womenInTI = [
    {
        id: "1",
        name: "Angélica Rodrigues Gomes",
        image: "https://media.licdn.com/dms/image/D4D03AQHQNm8kW7Agww/profile-displayphoto-shrink_400_400/0/1678667807168?e=1689206400&v=beta&t=MVTyKsxWUfNWeBwE-PAS_RejhE2VmCCcJzvddqnL90s",
        resume: "Desenvolvedora fullstack"
    },
    {
        id: "2",
        name: "Lorena Miranda",
        image: "https://media.licdn.com/dms/image/D4D03AQHQNm8kW7Agww/profile-displayphoto-shrink_400_400/0/1678667807168?e=1689206400&v=beta&t=MVTyKsxWUfNWeBwE-PAS_RejhE2VmCCcJzvddqnL90s",
        resume: "Desenvolvedora fullstack"
    },
    {
        id: "3",
        name: "Loiane Groner",
        image: "https://media.licdn.com/dms/image/D4D03AQHQNm8kW7Agww/profile-displayphoto-shrink_400_400/0/1678667807168?e=1689206400&v=beta&t=MVTyKsxWUfNWeBwE-PAS_RejhE2VmCCcJzvddqnL90s",
        resume: "Desenvolvedora fullstack"
    }
]


const showHello = (req, res) => (res.send("Olá, mundo!"));


const createWoman = (req, res) => {
    const createNewWoman = {
        id: uuidv4(),
        name: req.body.name,
        image: req.body.image,
        resume: req.body.resume
    }

    womenInTI.push(createNewWoman)

    res.json(womenInTI)

}

const women = (req, res) => {
    res.json(womenInTI)
};



const showHour = (req, res) => {
    const date = new Date();
    const hour = date.toLocaleTimeString('pt-BR');
    res.send(hour);
}

    

module.exports = {
    showHello,
    women,
    showHour,
    createWoman
}