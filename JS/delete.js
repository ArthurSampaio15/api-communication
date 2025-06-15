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
        document.getElementById("resultDelete").innerHTML = "<p style='color: green'>Sucesso, cliente acabou de ser deletado do sistema</p>";
    })
    .catch(error =>{
        if(error.stauts = 404)
        {
            document.getElementById("resultDelete").innerHTML = "O cliente não está registrado no motel";
        }
        else
        {
            document.getElementById("resultDelete").innerHTML = "Erro ao deletar o cliente, Ligue para <strong style='color: red; font-family: Arial;'>4002-8922</strong> para chamar o suporte";
            console.error(error);
        }
    })
})