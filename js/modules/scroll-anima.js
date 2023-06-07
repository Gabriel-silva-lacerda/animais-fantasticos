export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    this.animaScroll = this.animaScroll.bind(this)
  }
  
  animaScroll() {
    this.sections.forEach((section) => {
      const sectioTop = section.getBoundingClientRect().top;
      const isSectionBisible = (sectioTop - this.windowMetade) < 0;
      if (isSectionBisible) {
        section.classList.add("ativo");
      } else {
        section.classList.remove("ativo");
      }
    });
  }

  init() {
    this.animaScroll()
    window.addEventListener("scroll", this.animaScroll);
  }
}
