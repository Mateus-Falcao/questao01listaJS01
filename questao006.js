function calcularInvestimento() {
    let capitalInicial = parseFloat(prompt("Digite o capital inicial investido (C):"));
    let taxaJuros = parseFloat(prompt("Digite a taxa de juros mensal (i) em percentual:"));
    let tempoMeses = parseInt(prompt("Digite o tempo de investimento em meses (t):"));

    if (isNaN(capitalInicial) || isNaN(taxaJuros) || isNaN(tempoMeses) || capitalInicial <= 0 || taxaJuros < 0 || tempoMeses <= 0) {
        alert("Valores inválidos. Tente novamente.");
        return;
    }

    taxaJuros = taxaJuros / 100;
    let montante = capitalInicial * Math.pow(1 + taxaJuros, tempoMeses);
    alert(`O montante final após ${tempoMeses} meses será: R$ ${montante.toFixed(2)}`);
}

calcularInvestimento();
