import axios from "axios";

const urlSlots = "http://cnms-parking-api.net.uztec.com.br/api/v1/slots";
const showSlots = document.getElementById("resultSlots"); 

async function getReport() {
    try {
        axios.get(urlSlots)
        .then(response =>{
            let avaibleSlots = "N/A"; 

            if (typeof response.data === 'number') {
                avaibleSlots = response.data;
            } else if (typeof response.data === 'object' && response.data !== null && 'available' in response.data) {
                avaibleSlots = response.data.available;
            } else if (typeof response.data === 'object' && response.data !== null && 'totalSlots' in response.data && 'occupied' in response.data) {
                avaibleSlots = response.data.totalSlots - response.data.occupied;
            } else {
                console.warn("Formato de resposta inesperado da API de vagas:", response.data);
                showSlots.innerHTML = "Não foi possível determinar o número de quartos disponíveis.";
                return; 
            }
            showSlots.innerHTML = `<p style="font-size: 50px;">Quantidade de quartos disponíveis: <strong style="color: red; font-family: Arial;">${avaibleSlots}</strong></p>`;
        })
        

    } catch (error) {
        showSlots.innerHTML = "<p style='font-size: 40px;'>Erro ao verificar os quartos disponíveis, Ligue para <strong style='color: red; font-family: Arial;'>4002-8922</strong> para chamar o suporte</p>"; 
        console.error("Erro ao buscar vagas:", error); 
    }
}

const btslots = document.getElementById("btSlots");
btslots.addEventListener("click", getReport);