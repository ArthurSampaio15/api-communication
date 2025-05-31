import axios from "axios";

const urlReport = "http://cnms-parking-api.net.uztec.com.br/api/v1/report"
const showResult = document.getElementById("resultReport");

async function getReport(){
    try
    {
        const response = await axios.get(urlReport);
        showResult.innerHTML = response;
    }
    catch (error)
    {
        showResult.innerHTML = "Erro!"
        console.log(error);
    }
}

const btReport = document.getElementById("btReport");
btReport.addEventListener("click", getReport);