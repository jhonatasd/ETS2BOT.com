// Atualiza as estatísticas na página
document.addEventListener("DOMContentLoaded", () => {
    carregarInfoBot(); // Carrega as informações do bot ao carregar a página
    fetchBotStatus(); // Atualiza o status do bot ao carregar a página
});

// Função para alternar entre abas
function showTab(tabId) {
    const tabs = document.querySelectorAll(".tab-content");
    tabs.forEach(tab => {
        tab.style.display = "none"; // Esconde todas as abas
    });
    document.getElementById(tabId).style.display = "block"; // Mostra a aba selecionada
}

// Função para buscar informações do bot
async function carregarInfoBot() {
    try {
        const response = await fetch("https://discord.com/oauth2/authorize?client_id=1358484284503097595"); // Substitua pela URL da sua API
        const data = await response.json();

        // Atualiza os elementos do site com as informações do bot
        document.getElementById("statusBot").textContent = data.status === "online" ? "🟢 Online" : "🔴 Offline";
        document.getElementById("servidoresBot").textContent = `Servidores: ${data.servidores}`;
        document.getElementById("usuariosBot").textContent = `Usuários: ${data.usuarios}`;
        document.getElementById("nomeBot").textContent = `Nome: ${data.nome}`;
    } catch (error) {
        console.error("Erro ao carregar informações do bot:", error);
        document.getElementById("statusBot").textContent = "Erro ao carregar status.";
    }
}

// Função para monitorar o status do bot em tempo real
async function fetchBotStatus() {
    try {
        const response = await fetch("https://discord.com/oauth2/authorize?client_id=1358484284503097595"); // Substitua pela URL da sua API
        const data = await response.json();

        // Atualiza os elementos no HTML com os dados da API
        document.getElementById("status").textContent = `Status: ${data.status}`;
        document.getElementById("servers").textContent = `Servidores: ${data.servers}`;
        document.getElementById("users").textContent = `Usuários: ${data.users}`;
    } catch (error) {
        console.error("Erro ao buscar status do bot:", error);
        document.getElementById("status").textContent = "Erro ao carregar status.";
    }
}

// Atualiza o status do bot a cada 10 segundos
setInterval(fetchBotStatus, 10000);
fetchBotStatus();
