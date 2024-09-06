const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function perguntar() {
  rl.question('Digite a expressao para calcular, ou digite "sair" para encerrar: ', (entrada) => {
    if (entrada.toLowerCase() === 'sair') {
      rl.close();
      return
    }
    try {
      let resultado = eval(entrada);
      if (typeof resultado === 'number') {
        resultado = resultado.toFixed(3);
      }
      console.log(`Resutado: ${resultado}`);
    } catch (error) {
      console.log('Expressao Invalida');
    }
    perguntar();
  });
  }

perguntar();