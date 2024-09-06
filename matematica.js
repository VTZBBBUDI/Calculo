function calcular100() {
  let soma = 0;
  let antesSoma = 0;
  for (let i = 1; i <= 100; i += 1) { //declara o index = 1, i vai de 0 ate 100, +1 e adicionado a cada vez que o i passa pelo loop ate dar 100
    soma += i; // adiciona o index na soma
    console.log(`${i} + ${antesSoma} = ${soma}`);
    antesSoma = soma; //adiciona o valor da soma depois do console log
  }
  return soma;
}

calcular100()