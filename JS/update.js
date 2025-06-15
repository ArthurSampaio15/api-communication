import axios from "axios";

document.getElementById("formUpdate").addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Teste");
    const update = document.getElementById("plateOld").value;
    var url = `http://cnms-parking-api.net.uztec.com.br/api/v1/update/${update}`;
    const newPlate = document.getElementById("plateUpdate").value;
    const newModel = document.getElementById("modelUpdate").value;
    const newCar = {
        newPlate : newPlate,
        newModel : newModel
    }
    axios.put(url, newCar)
    .then(response =>{
        console.log(response.data);
        document.getElementById("resultUpdate").innerHTML = "<p style='color: green;'>Informações do cliente atualizada com sucesso</p>";
    })
    .catch(error =>{
        if(error.status = 404)
        {
            document.getElementById("resultUpdate").innerHTML ="Placa do cliente não encontrada!";
            console.error(error);
        }
        else
        {
            document.getElementById("resultUpdate").innerHTML = "Erro ao atualizar as informações do cliente, Ligue para <strong style='color: red; font-family: Arial;'>4002-8922</strong> para chamar o suporte";
            console.error(error);
        }
    })
})