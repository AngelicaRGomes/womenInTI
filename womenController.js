
// const mostraPorta = () => console.log(`Servidor rodando na porta ${port}.`);

const showHello = (req, res) => (res.send("Olá, mundo!"));

const women = (req, res) => {
    const womenInTI = [
        {
            name: "Angélica Rodrigues Gomes",
            image: "https://media.licdn.com/dms/image/D4D03AQHQNm8kW7Agww/profile-displayphoto-shrink_400_400/0/1678667807168?e=1689206400&v=beta&t=MVTyKsxWUfNWeBwE-PAS_RejhE2VmCCcJzvddqnL90s",
            resume: "Desenvolvedora fullstack"
        },
        {
            name: "Angélica Rodrigues Gomes",
            image: "https://media.licdn.com/dms/image/D4D03AQHQNm8kW7Agww/profile-displayphoto-shrink_400_400/0/1678667807168?e=1689206400&v=beta&t=MVTyKsxWUfNWeBwE-PAS_RejhE2VmCCcJzvddqnL90s",
            resume: "Desenvolvedora fullstack"
        },
        {
            name: "Angélica Rodrigues Gomes",
            image: "https://media.licdn.com/dms/image/D4D03AQHQNm8kW7Agww/profile-displayphoto-shrink_400_400/0/1678667807168?e=1689206400&v=beta&t=MVTyKsxWUfNWeBwE-PAS_RejhE2VmCCcJzvddqnL90s",
            resume: "Desenvolvedora fullstack"
        }
    ]
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
    showHour
}