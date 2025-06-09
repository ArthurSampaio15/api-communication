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
                showSlots.innerHTML = "Não foi possível determinar o número de vagas.";
                return; 
            }
            showSlots.innerHTML = `<p style="font-size: 50px;">Vagas disponíveis: <strong style="color: red;">${avaibleSlots}</strong></p>`;
        })
        

    } catch (error) {
        showSlots.innerHTML = "Erro ao carregar vagas!"; 
        console.error("Erro ao buscar vagas:", error); 
    }
}

const btslots = document.getElementById("btSlots");
btslots.addEventListener("click", getReport);