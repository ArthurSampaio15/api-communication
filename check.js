import axios from "axios";

const urlCheck = `http://cnms-parking-api.net.uztec.com.br/api/v1/check`;

document.getElementById("carro").addEventListener("submit", function(event) {
    console.log("Teste");
    event.preventDefault();
    const plateToCheck = document.getElementById("plates").value;
    var url = `http://cnms-parking-api.net.uztec.com.br/api/v1/check/${plateToCheck}`;
    axios.get(url)
    .then(response=>{
        document.getElementById("resultadoConsulta").textContent ="Carro disponível";
    })
    .catch(error=>{
        if (error.status = 404)
        {
            document.getElementById("resultadoConsulta").textContent ="Veículo não encontrado";    
        }
        else
        {
            document.getElementById("resultadoConsulta").textContent ="Erro!";
            console.error(error, "Erro inesperado");
        }
    })

});
