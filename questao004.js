let salarioInicial = 1000;
let salario = salarioInicial;
let percentual = 0.0015;
let anoAtual = new Date().getFullYear();

salario += salarioInicial * percentual;

for (let ano = 1997; ano <= anoAtual; ano++) {
    percentual *= 2;
    salario += salarioInicial * percentual;
}

alert(`Salário atual do funcionário (iniciado com R$ 1000,00): R$ ${salario.toFixed(2)}`);
