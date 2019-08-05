export class Popup {
  constructor(content = "") {
    this.content = content;
    this.close = this.close.bind(this);
    this.onPopupEscPress = this.onPopupEscPress.bind(this);
  }

  template() {
    const templateString = `<div class="popup">
        <div class="popup__box">
          <button class="popup__close" type="button">x</button>
          <div class="popup__body">${this.content}</div>
        </div>
      </div>
    `;
    var element = document.createElement("div");
    element.insertAdjacentHTML('beforeend', templateString.trim());
    return element.firstChild;
  }

  render() {
    this.popup = this.template();
    document.querySelector("body").appendChild(this.popup);
    this.addListeners();
  }

  close() {
    this.removeListeners();
    this.popup.remove();
  }

  removeListeners() {
    this.popup.querySelector(".popup__close").removeEventListener("click", this.close);
    document.querySelector("body").removeEventListener("keydown", this.onPopupEscPress);
  }

  onPopupEscPress(event) {
    if(event.keyCode === 27) {
      event.preventDefault();
      this.close();
    }
  }

  addListeners() {
    this.popup.querySelector(".popup__close").addEventListener("click", this.close);
    document.querySelector("body").addEventListener("keydown", this.onPopupEscPress);
  }
}