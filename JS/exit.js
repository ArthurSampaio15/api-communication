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
        document.getElementById("resultExit").textContent = "Carro retirado do estacionamento";
    })
    .catch(error => {
        if(error.status == "404"){
            document.getElementById("resultExit").textContent = "Placa não encontrada";
            console.error(error);
        }
        else{
            document.getElementById("resultExit").textContent = "Erro";
            console.error(error);
        }
    })
})