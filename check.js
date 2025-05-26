import axios from "axios";

const urlCheck = `http://cnms-parking-api.net.uztec.com.br/api/v1/check/ABC-1111`;

document.getElementById("carro").addEventListener("submit", function(event) {
    console.log("Teste");
    event.preventDefault();
    const plate = document.getElementById("plates");
    axios.get(urlCheck, plate)
    .then(response=>{
        document.getElementById("resultadoConsulta").textContent ="Carro disponível";
    })
    .catch(error=>{
        document.getElementById("resultadoConsulta").textContent ="Erro!";
        console.error(error, "Erro inesperado");
    })

});
