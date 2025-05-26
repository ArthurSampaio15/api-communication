import axios from "axios";

const urlActive = "http://cnms-parking-api.net.uztec.com.br/api/v1/active";
const mostraCarros = document.getElementById("cars");


async function getRepos()
{
    try{
        const response = await axios.get(urlActive);
        
        let contentHTML = "<h1>Dados dos carros</h1>"

        if(Array.isArray(response.data) && response.data.length > 0){
            contentHTML += `
                <table border="1" style="width:100%; border-collapse: collapse;">
                <thead>
                    <tr>
                    <th>Placa</th>
                    <th>Modelo</th>
                    <th>Hora de Entrada</th>
                    </tr>
                </thead>
                <tbody>
            `;

            response.data.forEach(carro => {
                contentHTML += `
                <tr>
                    <td>${carro.plate || "Vazio"}</td>
                    <td>${carro.model || "Vazio"}</td>
                    <td>${new Date(carro.entrytime).toLocaleDateString() || "Vazio"}</td>
                </tr>
                `;
            });
            contentHTML += `
            </tbody>
            </table>`; 
        }
        else{
            contentHTML = "<h1>Nenhum carro está estacionado</h1>"
        }
        mostraCarros.innerHTML = contentHTML;
    }
    catch (error){
        console.error("Erro ao localizar carros estacionados", error);
        mostraCarros.innerHTML = '<p style="color: red;">Erro ao localizar os carros no estacionamento, tente novamente mais tarde</p>';
    }
}

const btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", getRepos);
// document.addEventListener('DOMContentLoaded',  () => {
//     getRepos();
// });