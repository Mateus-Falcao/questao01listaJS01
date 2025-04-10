let N = parseInt(prompt("Quantos números você quer digitar?"));

if (isNaN(N) || N <= 0) {
    alert("Número inválido. Atualize a página e tente novamente.");
} else {
    let menor;

    for (let i = 0; i < N; i++) {
        let numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));

        if (isNaN(numero)) {
            alert("Valor inválido. Tente novamente.");
            i--; 
            continue;
        }

        if (i === 0 || numero < menor) {
            menor = numero;
        }
    }

    alert(`O menor valor digitado foi: ${menor}`);
}
