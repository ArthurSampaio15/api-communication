import axios from "axios";

    document.getElementById("formExit").addEventListener("submit", function(event){
    event.preventDefault();
    const plateExit = document.getElementById("plateExit").value;
    const urlExit = `http://cnms-parking-api.net.uztec.com.br/api/v1/exit/${plateExit}`;
    const exit = {
        plate: plateExit
    }
    axios.patch(urlExit, exit)
    .then(response => {
        console.log(response);
        document.getElementById("resultExit").innerHTML = "<p style='color: green;'>CheckOut completo, cliente foi retirado do sistema</p>";
    })
    .catch(error => {
        if(error.status == "404"){
            document.getElementById("resultExit").innerHTML = "Placa do cliente não encontrada";
            console.error(error);
        }
        else{
            document.getElementById("resultExit").innerHTML = "Erro ao retirar o cliente do sistema, Ligue para <strong style='color: red; font-family: Arial;'>4002-8922</strong> para chamar o suporte";
            console.error(error);
        }
    })
})