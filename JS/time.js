import axios from "axios";

const urlTime = "http://cnms-parking-api.net.uztec.com.br/api/v1/time/"

document.getElementById("formTime").addEventListener("submit", function(event){
    event.preventDefault();
    const plateToTime = document.getElementById("plateTime").value;
    var url = `http://cnms-parking-api.net.uztec.com.br/api/v1/time/${plateToTime}`;
    axios.get(url)
    .then(response =>{
        const carro = response.data;
        document.getElementById("resultTime").textContent = `Tempo do carro: ${carro.parkedTime && !isNaN(new Date(carro.parkedTime)) 
                                                                                ? new Date(carro.parkedTime).toLocaleTimeString()
                                                                                : "Vazio"}`;
    })
    .catch(error =>{
        if(error.status  = 404)
        {
            document.getElementById("resultTime").textContent = "Carro não encontrado"
        }
        else
        {
            document.getElementById("resultTime").textContent = "Erro ao Verificar!";
            console.log(error);
        }
    })
})