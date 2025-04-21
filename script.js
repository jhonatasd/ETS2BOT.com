// Evento principal ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    atualizarInformacoesBot(); // Carrega e atualiza as informações do bot
    setInterval(atualizarInformacoesBot, 10000); // Atualiza o status a cada 10 segundos
});

// Alterna entre abas visíveis
function showTab(tabId) {
    // Esconde todas as abas
    document.querySelectorAll(".tab-content").forEach(tab => {
        tab.style.display = "none";
    });

    // Mostra a aba selecionada
    const abaSelecionada = document.getElementById(tabId);
    if (abaSelecionada) {
        abaSelecionada.style.display = "block";
    } else {
        console.error(`Aba com ID ${tabId} não encontrada.`);
    }
}

// Busca e atualiza informações do bot na página
async function atualizarInformacoesBot() {
    const urlAPI = "https://discord.com/oauth2/authorize?client_id=1358484284503097595"; // Substitua pela URL real da API

    try {
        const response = await fetch(urlAPI);
        if (!response.ok) throw new Error(`Erro na API: ${response.status}`);

        const data = await response.json();

        // Atualiza os elementos do DOM
        atualizarElemento("statusBot", data.status === "online" ? "🟢 Online" : "🔴 Offline");
        atualizarElemento("servidoresBot", `Servidores: ${data.servidores || "N/A"}`);
        atualizarElemento("usuariosBot", `Usuários: ${data.usuarios || "N/A"}`);
        atualizarElemento("nomeBot", `Nome: ${data.nome || "Desconhecido"}`);
    } catch (error) {
        console.error("Erro ao atualizar informações do bot:", error);
        atualizarElemento("statusBot", "Erro ao carregar status.");
    }
}

// Atualiza o conteúdo de um elemento HTML
function atualizarElemento(id, conteudo) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.textContent = conteudo;
    } else {
        console.warn(`Elemento com ID ${id} não encontrado.`);
    }
}
