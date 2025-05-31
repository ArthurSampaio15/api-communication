import axios from "axios";

console.log("Inicio");
const urlDelete = `http://cnms-parking-api.net.uztec.com.br/api/v1/cancel/`


document.getElementById("formDelete").addEventListener("submit", function(event){
    event.preventDefault();
    const plateToDelete = document.getElementById("delete").value;

    console.log(`Removendo placa ${plateToDelete}`)
    var url = urlDelete + plateToDelete
    axios.delete(url)
    .then(response =>{
        document.getElementById("resultDelete").textContent = "<p style='color: green'>Item deletado com sucesso!</p>";
    })
    .catch(error =>{
        if(error.stauts = 404)
        {
            document.getElementById("resultDelete").textContent = "Carro não encontrado'";
        }
        else
        {
            document.getElementById("resultDelete").textContent = "<p style='color: red;>Erro ao deletar o item!</p>'";
            console.error(error);
        }
    })
})