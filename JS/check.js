import axios from "axios";

document.getElementById("formCarro").addEventListener("submit", function(event) {
    event.preventDefault();
    const plateToCheck = document.getElementById("plates").value;
    var url = `http://cnms-parking-api.net.uztec.com.br/api/v1/check/${plateToCheck}`;
    axios.get(url)
    .then(response=>{
        document.getElementById("resultCheck").textContent ="Carro disponível";
    })
    .catch(error=>{
        if (error.status = 404)
        {
            document.getElementById("resultCheck").textContent ="Veículo não encontrado";    
        }
        else
        {
            document.getElementById("resultCheck").textContent ="Erro!";
            console.error(error, "Erro inesperado");
        }
    })

});
