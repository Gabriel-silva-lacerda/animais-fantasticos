export default class initModal {
  constructor(botaoAbrir, botaoFechar, botaoModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(botaoModal);

    // Bind this ao callback para
    // fazer referência ao objeto
    // da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // Abre e fecha o modal
  toggleMotal() {
    this.containerModal.classList.toggle("ativo");
  }

  // Adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleMotal();
  }

  // Fecha modal ao clicar do lado de fora
  cliqueForaModal(event) {
    if (event.target === this.containerModal) this.toggleMotal();
  }

  // Adiciona os eventos ao modal
  addModalEvents() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
      return this;
    }
  }
}
