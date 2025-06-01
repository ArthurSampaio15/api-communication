import axios from "axios";

const urlReport = "http://cnms-parking-api.net.uztec.com.br/api/v1/report";
const showResult = document.getElementById("resultReport");

export async function getReport() 
{
    try {
        const response = await axios.get(urlReport);

        // Assumimos que response.data é um objeto contendo todas as métricas do relatório.
        const reportData = response.data;

        // Verifica se reportData é um objeto e não é nulo
        if (typeof reportData === 'object' && reportData !== null) {
            // Acessa as propriedades diretamente do objeto reportData
            const reportDate = reportData.date || "N/A"; // Use 'date' ou 'reportDate' dependendo da API
            const totalEntries = reportData.totalEntries || 0;
            const totalExits = reportData.totalExits || 0;
            const currentVehicles = reportData.currentVehicles || 0;
            const totalRevenue = reportData.totalRevenue || 0; // Formata para 2 casas decimais

            // Monta o HTML para exibir todas as informações do relatório
            showResult.innerHTML = `
                <h2>Relatório do Estacionamento</h2>
                <p>Data: <strong>${reportDate}</strong></p>
                <p>Total de Entradas: <strong>${totalEntries}</strong></p>
                <p>Total de Saídas: <strong>${totalExits}</strong></p>
                <p>Veículos Atualmente no Pátio: <strong>${currentVehicles}</strong></p>
                <p>Receita Total: <strong>R$ ${totalRevenue}</strong></p>
            `;
        } else {
            // Caso a resposta da API não seja um objeto como esperado
            showResult.innerHTML = "Erro: Formato de relatório inesperado da API.";
            console.error("Formato inesperado do relatório:", reportData);
        }

    } catch (error) {
        // Tratamento de erro aprimorado
        let message = "Erro ao carregar o relatório!";
        if (error.response) {
            message += ` Status: ${error.response.status}. Mensagem: ${error.response.data ? (error.response.data.message || JSON.stringify(error.response.data)) : 'N/A'}`;
        } else if (error.request) {
            message += " Nenhuma resposta do servidor. Verifique a conexão.";
        } else {
            message += ` Detalhes: ${error.message}`;
        }
        showResult.innerHTML = message;
        console.error("Erro completo ao buscar relatório:", error);sss
    }
}

const btReport = document.getElementById("btReport");
btReport.addEventListener("click", getReport);