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
        document.getElementById("resultTime").innerHTML = `<br><div style="font-size: 25px;">Tempo de permanência: <br><strong style="font-family: Arial;">${formatDay} Dias ${formatHour} horas ${formatMinute} minutos e ${formatSecond} segundos</strong></div>`;
    })
    .catch(error =>{
        if(error.status  = 404)
        {
            document.getElementById("resultTime").innerHTML = "Cliente não encontrado no motel"
        }
        else
        {
            document.getElementById("resultTime").innerHTML = "Erro ao verificar o tempo de permanência do cliente, Ligue para <strong style='color: red; font-family: Arial;'>4002-8922</strong> para chamar o suporte";
            console.log("Erro", error);
        }
    })
})