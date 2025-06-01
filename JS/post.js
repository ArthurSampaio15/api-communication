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
        document.getElementById("resultPost").textContent ="Registrado!";
    })
    .catch(error=>{
            if(error = "Estacionament lotado!")
            {
                document.getElementById("resultPost").textContent ="Estacionamento lotado!";
            }
            else
            {
                document.getElementById("resultPost").textContent ="Erro!";
                console.error(error, "Erro inesperado");
            }
    })

});
    

// response.data.error = "Estacionamento lotado!"