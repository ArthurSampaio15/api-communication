import axios from "axios";

const urlActive = "http://cnms-parking-api.net.uztec.com.br/api/v1/active";
const mostraCarros = document.getElementById("cars");


async function getRepos()
{
    axios.get(urlActive)
    .then(response => {
        mostraCarros.innerHTML = 
        `<h1>Dados dos carros: </h1>"
             "<h3>"${JSON.stringify(response.data)}"</h3>"`;
    })
    .catch(error => {
        console.error(error, "Erro ao buscar o usuário");
    });
}

const btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", getRepos);
// document.addEventListener('DOMContentLoaded',  () => {
//     getRepos();
// });