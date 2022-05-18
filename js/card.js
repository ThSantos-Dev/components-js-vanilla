"use strict";

 class card extends HTMLElement {
  constructor() {
    super();
    this.build();
  }

  build() {
    const shadow = this.attachShadow({ mode: "open" });

    setTimeout(() => {
      shadow.appendChild(this.style());
      shadow.appendChild(this.createCard());
    },0)
  }

  style() { 
    const style = document.createElement("style");
    style.textContent = `
    .card {
        width: ${this.setSize()}px;
        height: ${this.setSize()}px;
    
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    
        background-color: ${this.setBgColor()};
        box-shadow: 0px 0px 10px #0f0f0f;
    }
    
    .card-text {
        width: 50%;
    
        text-align: center;
        text-transform: uppercase;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
        padding: 4px;
    
        border-radius: 12px;
        box-shadow: 0px 0px 2px #0f0f0f;
    }
    
    .card-image {
        width: 50%;
        height: 50%;
    
        background-image: url('${this.setImage()}');
        background-size: contain;
    
        border-radius: 50%;
        box-shadow: inset 0 0 12px #0f0f0f;
    }
        `;

    return style;
  }

  createCard() {
    // <div class="card">
    //   <div class="card-text">Thales Santos</div>
    //   <div class="card-image"></div>
    //   <div class="card-text">DS2T</div>
    // </div>

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="card-text">${this.setName()}</div>
        <div class="card-image"></div>
        <div class="card-text">${this.setTeam()}</div>
    `;

    return card;
  }

  setBgColor() {
      const color = this.getAttribute('data-bg-color')

      return !color ? '#f3f3f3' : color
  }

  setImage() {
      const url = this.getAttribute('data-image')

      return !url ? './img/add.png' : url
  }

  setSize() {
      const size = this.getAttribute('data-size')

        return size < 300 ? 300 : size
  }

  setName() {
    const name = this.getAttribute('data-name')

    return !name ? 'Nome do aluno' : name
  }

  setTeam() {
      const team = this.getAttribute('data-team')

      return !team ? 'Turma do aluno' : team
  }

}

customElements.define("card-aluno", card);
