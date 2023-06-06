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

  function animaAnimaisNumeros() {}

  // Puxa os animais através de um arquivo json
  // e cria cada animal uitilziando createAnimal
  async function criarAnimais(url) {
    try {
      // Fetch e espera a resposta
      const animaisResponse = await fetch(url);
      // Transforma a resposta em json
      const animaisJson = await animaisResponse.json();

      animaisJson.forEach((animal) => preencherAnimais(animal));
      const animaNumeros = new AnimaNumeros();
      console.log(animaNumeros);
      animaNumeros.init("[data-numero]", ".numeros", "ativo");
    } catch (erro) {
      alert(Error(erro));
    }
  }

  return fetchAnimais();
}
