const readline = require('readline');
const math = require('mathjs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function desenhaParabola(a, b, c) {
  const largura = 100;
  const altura = 100;
  const escalaX = 1;
  const escalaY = 0.01;

  let matriz = Array.from({ length: altura }, () => Array(largura).fill(' '));

  for (let x = -largura / 2; x < largura / 2; x++) {
    const y = a * (x / escalaX) ** 2 + b * (x / escalaX) + c; 
    const xConsole = Math.round(largura / 2 + x);
    const yConsole = Math.round(altura / 2 - y * escalaY);

    if (xConsole >= 0 && xConsole < largura && yConsole >= 0 && yConsole < altura) {
      matriz[yConsole][xConsole] = '*';
    }
  }

  for (let i = 0; i < altura; i++) {
    console.log(matriz[i].join(''));
  }
}

function calcularRaizes(a, b, c) {
  const delta = (b ** 2) - (4 * a * c);

  if (delta < 0) {
    console.log('Nao ha raiz');
  } else if (delta === 0) {
    const x = -b / (2 * a);
    console.log(`x = ${x.toFixed(3)}`);
  } else {
    const raizDelta = math.sqrt(delta);
    const x1 = (-b + raizDelta) / (2 * a);
    const x2 = (-b - raizDelta) / (2 * a);
    console.log(`x1 = ${x1.toFixed(3)} e x2 = ${x2.toFixed(3)}`);
  }
}

function calcularVertice(a, b, c) {
  const xV = -b / (2 * a);
  const yV = (a * xV ** 2) + (b * xV) + c;
  console.log(`O Vertice e: (${xV.toFixed(3)}, ${yV.toFixed(3)})`);
  console.log(`O Eixo e: (${xV.toFixed(3)})`);
  
  
}

function processarEquacao(equacao) {
  try {
    const match = equacao.match(/(-?\d*)x\^2\s*([+-]\s*\d*)x\s*([+-]\s*\d*)/);

    if (match) {
      const a = parseFloat(match[1] || '1');
      const b = parseFloat(match[2].replace(/\s/g, '') || '0');
      const c = parseFloat(match[3].replace(/\s/g, '') || '0');
      console.log(`Coeficientes: a = ${a}, b = ${b}, c = ${c}`);
      calcularRaizes(a, b, c);
      calcularVertice(a, b, c);
      desenhaParabola(a, b, c);
    } else {
      console.log('Erro: A equação deve estar no formato "ax^2 + bx + c = 0".');
    }
  } catch (error) {
    console.log('Erro ao processar');
    }
  }

function perguntar() {
  rl.question('Digite a equação para encontrar o valor de x (ou "sair" para encerrar): ', (entrada) => {
    // if (entrada.toLowerCase() === 'sair') {
    //   rl.close();
    //   return
    // }
    processarEquacao(entrada);
    perguntar();
  });
}

perguntar();