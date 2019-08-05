import { Popup } from "./popup";

export class Product {
  constructor(cart, container, props) {
    this.name = props.name;
    this.cost = props.cost;
    this.text = props.text;
    this.container = container;
    this.cart = cart;

    this.product = null;

    this.showProduct = this.showProduct.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  template() {
    const templateString = `<div class="col-lg-6" style="margin-bottom: 20px;">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <p>${this.cost}</p>
          <button href="#" id="showProduct" class="btn btn-primary">Подробнее</button>
          <button href="#" id="buyProduct" class="btn btn-warning">В корзину</button>
        </div>
      </div>
    </div>`;
    var element = document.createElement("div");
    element.insertAdjacentHTML('beforeend', templateString.trim());
    return element.firstChild;
  }

  render() {
    this.product = this.template();
    this.container.appendChild(this.product);
    this.addListeners();
  }

  showProduct() {
    const popup = new Popup(this.text);
    popup.render();
  }

  addToCart() {
    debugger;
    this.cart.addProduct({name: this.name, cost: this.cost});
  }

  removeListeners() {

  }

  addListeners() {
    this.product.querySelector("#showProduct").addEventListener("click", this.showProduct);
    this.product.querySelector("#buyProduct").addEventListener("click", this.addToCart);
  }
}