/* =========================
   NAVEGAÇÃO ENTRE SEÇÕES
========================= */
function showSection(id){

    const sections = document.querySelectorAll("section");
    const buttons = document.querySelectorAll(".sidebar button");

    sections.forEach(section => {
        section.classList.remove("active");
    });

    buttons.forEach(btn => {
        btn.classList.remove("active-btn");
    });

    const target = document.getElementById(id);

    if(target){
        target.classList.add("active");
    }

    // Ativa botão selecionado corretamente
    buttons.forEach(btn => {
        const onclick = btn.getAttribute("onclick");
        if(onclick && onclick.includes(id)){
            btn.classList.add("active-btn");
        }
    });

}


/* =========================
   CONTADORES AUTOMÁTICOS
========================= */
function atualizarContadores(){

    const totalManuais = document.querySelectorAll(".card").length;
    const totalRoteadores = document.querySelectorAll("#roteadores .card").length;
    const totalSistemas = document.querySelectorAll("#sistemas .card").length;

    const contadorGeral = document.getElementById("totalManuais");

    if(contadorGeral){
        contadorGeral.innerText = totalManuais;
    }

    const dashboardCards = document.querySelectorAll(".stat-card h3");

    if(dashboardCards.length >= 3){
        dashboardCards[1].innerText = totalRoteadores;
        dashboardCards[2].innerText = totalSistemas;
    }

}


/* =========================
   BUSCA DE MANUAIS
========================= */
function ativarBusca(){

    const searchInput = document.getElementById("searchInput");

    if(!searchInput) return;

    searchInput.addEventListener("keyup", function(){

        const valor = this.value.toLowerCase();
        const cards = document.querySelectorAll("#roteadores .card");

        cards.forEach(card => {

            const texto = card.innerText.toLowerCase();

            if(texto.includes(valor)){
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

}


/* =========================
   DARK MODE
========================= */
function toggleDarkMode(){
    document.body.classList.toggle("dark");
}


/* =========================
   DATA E HORA AUTOMÁTICA
========================= */
function atualizarDataHora(){

    const agora = new Date();

    const formatado = agora.toLocaleString('pt-BR', {
        dateStyle: 'short',
        timeStyle: 'medium'
    });

    const elemento = document.getElementById("dataHora");

    if(elemento){
        elemento.innerText = formatado;
    }

}


/* =========================
   ANIMAÇÃO DE CONTADOR
========================= */
function animarNumero(elemento, final){

    let inicio = 0;
    const duracao = 800;
    const incremento = final / (duracao / 16);

    const timer = setInterval(() => {
        inicio += incremento;

        if(inicio >= final){
            elemento.innerText = final;
            clearInterval(timer);
        } else {
            elemento.innerText = Math.floor(inicio);
        }

    }, 16);

}


/* =========================
   INICIALIZAÇÃO AUTOMÁTICA
========================= */
document.addEventListener("DOMContentLoaded", function(){

    atualizarContadores();
    ativarBusca();
    atualizarDataHora();
    setInterval(atualizarDataHora, 1000);

});
