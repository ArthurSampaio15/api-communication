import axios from "axios";

const urlPost = "http://cnms-parking-api.net.uztec.com.br/api/v1/entry"

document.getElementById("formPostCarro").addEventListener("submit", function(event) {
    event.preventDefault();
    const plate = document.getElementById("platePost").value;
    const model = document.getElementById("modelPost").value;
    const data = {
        plate: plate,
        model: model
    }
    axios.post(urlPost, data)
    .then(response =>{
        console.log("Dados inseridos com sucesso!", response.data);
        document.getElementById("resultPost").innerHTML ="<p style='color: green;'>CheckIn completo, o cliente está registrado no sistema</p>";
    })
    .catch(error=>{
            if(error = "Estacionament lotado!")
            {
                document.getElementById("resultPost").innerHTML ="Todos os quartos estão ocupados neste momento";
            }
            else
            {
                document.getElementById("resultPost").innerHTML ="Erro ao tentar registrar cliente no sistema, Ligue para <strong style='color: red; font-family: Arial;'>4002-8922</strong> para chamar o suporte";
                console.error(error, "Erro inesperado");
            }
    })

});