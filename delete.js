import axios from "axios";

console.log("Inicio");
const urlDelete = `http://cnms-parking-api.net.uztec.com.br/api/v1/cancel/`


document.getElementById("del").addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Teste");

    const plateToDelete = document.getElementById("delete").value;

    console.log(`Removendo placa ${plateToDelete}`)
    var url = urlDelete + plateToDelete
    axios.delete(url)
    .then(response =>{
        document.getElementById("resultadoDeletar").textContent = "<p style='color: green'>Item deletado com sucesso!</p>";
    })
    .catch(error =>{
        document.getElementById("resultadoDeletar").textContent = "<p style='color: red;>Erro ao deletar o item!</p>'";
        console.error(error);
    })
})