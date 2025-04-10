et populacaoA = 80000;
let populacaoB = 200000;

const taxaA = 0.03;  // 3%
const taxaB = 0.015; // 1.5%

let anos = 0;

while (populacaoA < populacaoB) {
    populacaoA += populacaoA * taxaA;
    populacaoB += populacaoB * taxaB;
    anos++;
}

console.log(`Serão necessários ${anos} anos para que a população do país A ultrapasse ou iguale a do país B.`);
