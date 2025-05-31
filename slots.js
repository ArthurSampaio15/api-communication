import axios from "axios";

const urlSlots = "http://cnms-parking-api.net.uztec.com.br/api/v1/slots";
const showSlots = document.getElementById("resultSlots");

async function getReport(){
    try
    {
        const response = await axios.get(urlSlots);
        showSlots.innerHTML = response;
    }
    catch (error)
    {
        showSlots.innerHTML = "Erro!"
        console.log(error);
    }
}

const btSlots = document.getElementById("btSlots");
btSlots.addEventListener("click", getReport);