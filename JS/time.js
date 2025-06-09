import axios from "axios";
import moment from "moment";

const urlTime = "http://cnms-parking-api.net.uztec.com.br/api/v1/time/"

document.getElementById("formTime").addEventListener("submit", function(event){
    event.preventDefault();
    const plateToTime = document.getElementById("plateTime").value;
    var url = `http://cnms-parking-api.net.uztec.com.br/api/v1/time/${plateToTime}`;
    axios.get(url)
    .then(response =>{
        const time = response.data.parkedTime;
        const duracao = moment.duration(time, "minutes");
        const timePres = duracao.asMilliseconds();
        console.log(timePres);
        const formatDay = moment.utc(timePres).format("DD")
        const formatHour = moment.utc(timePres).format("HH");
        const formatMinute = moment.utc(timePres).format("mm");
        const formatSecond = moment.utc(timePres).format("ss");
        document.getElementById("resultTime").textContent = `Tempo de permanência: ${formatDay} ${formatHour} horas ${formatMinute} minutos e ${formatSecond} segundos`;
    })
    .catch(error =>{
        if(error.status  = 404)
        {
            document.getElementById("resultTime").textContent = "Carro não encontrado"
        }
        else
        {
            document.getElementById("resultTime").textContent = "Erro ao Verificar!";
            console.log(error);
        }
    })
})