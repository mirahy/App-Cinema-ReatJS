export function getIntervaloEntreDatas(dataInicial, dataFinal) {
    let dtInicial = dataInicial.split('/')
    let dtFinal = dataFinal.split('/')
    let [diaInicial, mesInicial, anoInicial] = dtInicial
    let [diaFinal, mesFinal, anoFinal] = dtFinal
    dtInicial = new Date(anoInicial, Number(mesInicial - 1), diaInicial)
    dtFinal = new Date(anoFinal, Number(mesFinal - 1), diaFinal)
    const diferenca = Math.abs(dtFinal.getTime() - dtInicial.getTime());
    const dias = Math.ceil(diferenca / (1000 * 60 * 60 * 24))
    return dias
}

export let filmes = [
    {
        id: 1,
        titulo:"Vingadores Guerra Infinita",
        genero:"Ação"
    },
    {
        id: 2,
        titulo:"Jogos Mortais",
        genero:"Terror",
        poster: "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/7EPDYnjcy4cP4Ldy3qFApySOdNh.jpg"
    },
    {
        id: 3,
        titulo:"Rei Leão",
        genero:"Animação"
    },
    {
        id: 4,
        titulo:"Se beber não case",
        genero:"Comédia"
    },
    {
        id: 5,
        titulo:"Invocação do Mal",
        genero:"Terror"
    }
]