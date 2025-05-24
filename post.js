import axios from "axios";

console.log("Inicio");
const urlPost = "http://cnms-parking-api.net.uztec.com.br/api/v1/entry"

document.getElementById("car").addEventListener("submit", function(event) {
    console.log("Teste");
    event.preventDefault();
    const plate = document.getElementById("plate");
    const model = document.getElementById("model");
    const car = {
        plate: plate.textContent,
        model: model.textContent
    }
    axios.post(urlPost, car)
    .then(response=>{
        console.log("Dados inseridos com sucesso!", response.data);
        document.getElementById("result").textContent ="Registrado!";
    })
    .catch(error=>{
        document.getElementById("result").textContent ="Erro!";
        console.error(error, "Erro inesperado");
    })

});
    