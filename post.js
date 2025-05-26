import axios from "axios";

const urlPost = "http://cnms-parking-api.net.uztec.com.br/api/v1/entry"

document.getElementById("car").addEventListener("submit", function(event) {
    event.preventDefault();
    const plate = document.getElementById("plate");
    const model = document.getElementById("model");
    const data = {
        plate: plate.value,
        model: model.value
    }
    axios.post(urlPost, data)
    .then(response =>{
        console.log("Dados inseridos com sucesso!", response.data);
        document.getElementById("resultatoInserir").textContent ="Registrado!";
    })
    .catch(error=>{
        document.getElementById("resultadoInserir").textContent ="Erro!";
        console.error(error, "Erro inesperado");
    })

});
    