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
        document.getElementById("resultUpdate").textContent = "Atualizado com sucesso!";
    })
    .catch(error =>{
        if(error.status = 404)
        {
            document.getElementById("resultUpdate").textContent ="Placa não encontrada!";
            console.error(error);
        }
        else
        {
            document.getElementById("resultUpdate").textContent = "Erro!";
            console.error(error);
        }
    })
})