const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularSegGrau(a, b, c) {
  const delta = (b ** 2) - (4 * a * c);
  if (delta < 0) {
    console.log("Nao existe raiz");
  } else if (delta === 0) {
    const x = -b / (2 * a);
    console.log(`x = ${x.toFixed(3)}`);
  } else {
    const raizDelta = Math.sqrt(delta);
    const x1 = (-b + raizDelta) / (2 * a);
    const x2 = (-b - raizDelta) / (2 * a);
    console.log(`x1 = ${x1.toFixed(3)} e x2 = ${x2.toFixed(3)}`);
  }
}

function processarEquacao(equacao) {
  try {
    const match = equacao.match(/(-?\d*)x\^2\s*([+-]\s*\d*)x\s*([+-]\s*\d*)/)
    if (match) {
      const a = parseFloat(match[1] || '1');
      const b = parseFloat(match[2].replace(/\s/g, '') || '0');
      const c = parseFloat(match[3].replace(/\s/g, '') || '0');
      
      calcularSegGrau(a, b, c)
    } else {
      console.log("O formato deve ser 'ax^2 + bx + c = 0'");
    }
  } catch (error) {
    console.log('Error ao processar');
  }
}

function perguntar() {
  rl.question('Digite a equação quadrática para encontrar as raízes (no formato "ax^2 + bx + c = 0") (ou "sair" para encerrar): ', (entrada) => {
    processarEquacao(entrada);
    perguntar();
  })
}

perguntar();