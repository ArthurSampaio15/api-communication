import axios from "axios";
const plates = document.getElementById("plates");

const urlCheck = `http://cnms-parking-api.net.uztec.com.br/api/v1/check/ABC-1111`;

document.getElementById("carro").addEventListener("submit", function(event) {
    console.log("Teste");
    event.preventDefault();
    const plate = document.getElementById("plates");
    axios.get(urlCheck, plate)
    .then(response=>{
        document.getElementById("resultado").textContent ="Carro disponível";
    })
    .catch(error=>{
        document.getElementById("resultado").textContent ="Erro!";
        console.error(error, "Erro inesperado");
    })

});
