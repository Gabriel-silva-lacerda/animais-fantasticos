import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  // Criar a div contendo informações
  // com o total de animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }
  // Preenche cada animal no DOM
  const numeroGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numeroGrid.appendChild(divAnimal);
  }

  // Anima os números de cada animal 
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  // Puxa os animais através de um arquivo json
  // e cria cada animal uitilziando createAnimal
  async function criarAnimais() {
    try {
      // Fetch, espera a resposta e transforma em json
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      // Após a tranformação de json, ativa as funções
      // para preencher e animar os números
      animaisJson.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      alert(Error(erro));
    }
  }

  return criarAnimais();
}
