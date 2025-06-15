import axios from "axios";

const urlActive = "http://cnms-parking-api.net.uztec.com.br/api/v1/active";
const mostraCarros = document.getElementById("resultActive");


export async function getCars()
{
    try{
        const response = await axios.get(urlActive);
        
        let contentHTML = "<h1>Dados dos carros</h1>"

        if(Array.isArray(response.data) && response.data.length > 0){
            contentHTML += `
                <table border="1" style="width:100%; border-collapse: collapse; background-color: var(--marrom); color: white; text-shadow: 2px 2px var(--sombra); border: 2px solid var(--preto);">
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
                <tr style="font-family: Arial;">
                    <td><b>${carro.plate || "Vazio"}</b></td>
                    <td><b>${carro.model || "Vazio"}</b></td>
                    <td><b>${carro.entryTime && !isNaN(new Date(carro.entryTime)) 
                        ? new Date(carro.entryTime).toLocaleString()
                        : "Vazio"}</b></td>
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
        mostraCarros.innerHTML = '<p style="font-size: 25px;">Erro ao localizar os cliente, Ligue para <strong style="color: red; font-family: Arial;">4002-8922</strong> para chamar o suporte</p>';
    }
}

const btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", getCars);