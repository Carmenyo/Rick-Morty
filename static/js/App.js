import API from "../api.js";
const api = new API();

const $characterContainer = document.querySelector("#character-container");


class Character {
  constructor({name, image}) {
    this.name =name
    this.image =image
    this.render();
  }

  build() {
    return `
       <article class="character">
            <div class="character-grid">
            <h1>${this.name}</h1>
             <img src=${this.image} alt="">
            </div>
        </article>`;
  }
  render() {
    $characterContainer.innerHTML = this.build();
  }
}



async function initApp(initCharacterId){
const characterData = await api.getCharacter(1)
console.log(characterData)
// const rick = new Character(characterData)

// const rick = new Character({
//     name: "pancho",
//     img: "http://127.0.0.1:5500/static/images/Rick-and-Morty.png"
// } );


}
initApp(1)