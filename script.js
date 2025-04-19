// Simulação de dados para estatísticas
const stats = {
    usuariosAtivos: 120,
    cargasEntregues: 450,
    servidores: 15
};

// Simulação de servidores onde o bot está presente
const servidores = [
    "Servidor 1 - Comunidade ETS2",
    "Servidor 2 - Caminhoneiros BR",
    "Servidor 3 - Simuladores Online"
];

// Atualiza as estatísticas na página
document.addEventListener("DOMContentLoaded", () => {
    // Atualiza os dados de estatísticas
    document.getElementById("usuariosAtivos").textContent = stats.usuariosAtivos;
    document.getElementById("cargasEntregues").textContent = stats.cargasEntregues;
    document.getElementById("servidores").textContent = stats.servidores;

    // Atualiza a lista de servidores
    const listaServidores = document.getElementById("servidores-lista");
    servidores.forEach(servidor => {
        const li = document.createElement("li");
        li.textContent = servidor;
        listaServidores.appendChild(li);
    });
});

// Função para alternar entre abas
function showTab(tabId) {
    const tabs = document.querySelectorAll(".tab-content");
    tabs.forEach(tab => {
        tab.style.display = "none"; // Esconde todas as abas
    });
    document.getElementById(tabId).style.display = "block"; // Mostra a aba selecionada
}