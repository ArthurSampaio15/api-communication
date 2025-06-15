import axios from "axios";

document.getElementById("formCarro").addEventListener("submit", function(event) {
    event.preventDefault();
    const plateToCheck = document.getElementById("plates").value;
    var url = `http://cnms-parking-api.net.uztec.com.br/api/v1/check/${plateToCheck}`;
    axios.get(url)
    .then(response=>{
        document.getElementById("resultCheck").innerHTML ="<p style='color: green;'>O cliente ainda está hospedado no motel</p>";
    })
    .catch(error=>{
        if (error.status = 404)
        {
            document.getElementById("resultCheck").innerHTML ="Este cliente não está registrado no motel";    
        }
        else
        {
            document.getElementById("resultCheck").innerHTML ="Erro ao encontrar o cliente, Ligue para <strong style='color: red; font-family: Arial;'>4002-8922</strong> para chamar o suporte";
            console.error(error, "Erro inesperado");
        }
    })

});
