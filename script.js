function gerarDieta() {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const objetivo = document.getElementById("objetivo").value;

  if (!peso || !altura) {
    alert("Digite peso e altura corretamente!");
    return;
  }

  // Calcular calorias base usando fórmula simplificada (Harris-Benedict modificada)
  let calorias = 24 * peso; // metabolismo basal aproximado
  if (objetivo === "ganhar") calorias += 500;
  if (objetivo === "perder") calorias -= 500;

  // Distribuição de macros
  let proteina = Math.round(peso * 2); // gramas por dia
  let gordura = Math.round(peso * 1);  // gramas por dia
  let carbo = Math.round((calorias - (proteina*4 + gordura*9)) / 4);

  // Cardápio exemplo por objetivo
  let cardapio = "";

  if (objetivo === "ganhar") {
    cardapio = `
      Café: Omelete (3 ovos) + aveia + banana <br>
      Lanche: Shake de proteína + castanhas <br>
      Almoço: Arroz integral, frango, legumes, azeite <br>
      Lanche: Iogurte + granola <br>
      Jantar: Peixe + batata doce + legumes
    `;
  } else if (objetivo === "perder") {
    cardapio = `
      Café: 2 ovos + fruta <br>
      Lanche: Iogurte natural + castanhas <br>
      Almoço: Salada grande + frango grelhado <br>
      Lanche: Cenoura ou pepino <br>
      Jantar: Peixe + legumes
    `;
  } else {
    cardapio = `
      Café: Omelete + aveia + fruta <br>
      Lanche: Iogurte + frutas <br>
      Almoço: Arroz integral, carne magra, legumes <br>
      Lanche: Castanhas e fruta <br>
      Jantar: Frango + legumes
    `;
  }

  document.getElementById("resultado").innerHTML = `
    <h2>Dieta sugerida (${objetivo})</h2>
    <p><strong>Calorias aproximadas:</strong> ${calorias} kcal</p>
    <p><strong>Macros:</strong> Proteínas: ${proteina}g, Carboidratos: ${carbo}g, Gorduras: ${gordura}g</p>
    <h3>Cardápio diário:</h3>
    ${cardapio}
  `;
}