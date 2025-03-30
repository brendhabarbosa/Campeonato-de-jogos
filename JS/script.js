let dataEvento = new Date("2025-04-15T18:00:00Z");

function exibirTempoRestante() {
    let dataAtual = new Date(); // Atualiza a data atual a cada execução
    let diferenca = dataEvento - dataAtual; // Recalcula a diferença

    if (diferenca > 0) {
        let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        let horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        let segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        let contagem = document.getElementById("contagem");
        contagem.innerHTML = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
    } else {
        let contagem = document.getElementById("contagem");
        contagem.innerHTML = "O evento já começou!";
        clearInterval(intervalo); // Para o intervalo quando o evento começar
    }
}

// Atualiza a contagem regressiva a cada segundo
let intervalo = setInterval(exibirTempoRestante, 1000);