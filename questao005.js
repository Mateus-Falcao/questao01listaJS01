function calcularCirculo() {
    let raio = parseFloat(prompt("Digite o raio do círculo:"));

    if (isNaN(raio) || raio <= 0) {
        alert("Raio inválido. Tente novamente.");
        return;
    }

    const pi = Math.PI;
    let area = pi * Math.pow(raio, 2);
    let perimetro = 2 * pi * raio;

    alert(`Raio: ${raio}
Área: ${area.toFixed(2)}
Perímetro (circunferência): ${perimetro.toFixed(2)}`);
}


calcularCirculo();
