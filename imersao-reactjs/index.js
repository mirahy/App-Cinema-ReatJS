import { getIntervaloEntreDatas, filmes } from './modulo.js'

let dias = getIntervaloEntreDatas('17/09/2022','23/09/2022')
console.log(dias)

let ano = 2022
let copaDoMundo = false

// if(ano === 2022){
//     copaDoMundo = "É o ano da copa do Mundo"
// }else{
//     copaDoMundo = "Não é o ano da copa do Mundo"
// }

copaDoMundo = ano === 2022 ? "É o ano da copa do Mundo" : "Não é o ano da copa do Mundo"

console.log(copaDoMundo)

filmes.forEach(function(filme){
    console.log(filme)
})

let filmeEncontrado = filmes.find(function(filme){
    return filme.id === 2
})
console.log("Filme encotrado:", filmeEncontrado.titulo)

let filmesTerror = filmes.filter(function(filme){
    return filme.genero === "Terror"
})
console.log("Filmes de Terror:", filmesTerror)

let numeros = [5, 30, 45, 60]

let numerosDobrados = numeros.map(function(numero){
    return numero * 2;
})
 console.log(numeros, numerosDobrados)
