export class Cart {
  constructor(container) {
    this.container = container;
    this.products = [];

    this.makeOrder = this.makeOrder.bind(this);
  }

  template() {
    const templateString = `<div class="cart">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-muted">Your cart</span>
          <span class="badge badge-secondary badge-pill">${this.products.length}</span>
        </h4>
        <ul class="list-group mb-3">
          ${this.products.map(product => `
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">${product.name}</h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">$${product.cost}</span>
            </li>
          `).join("")}
        </ul>
        <ul class="list-group mb-3">
          <li class="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>$${this.getTotal()}</strong>
          </li>
        </ul>

        <div class="card p-2 pull-right">
          <button id="makeOrderBtn" class="btn btn-success">Купить!</button>
        </div>
      </div>
    `;
    var element = document.createElement("div");
    element.insertAdjacentHTML('beforeend', templateString.trim());
    return element.firstChild;
  }

  render() {
    this.cart = this.template();
    this.container.appendChild(this.cart);
    this.addListeners();
  }

  remove() {
    this.cart.remove();
    this.removeListeners();
  }

  update() {
    this.remove();
    this.render();
  }

  getTotal() {
    return this.products.reduce((acc, product) => acc + product.cost, 0);
  }

  makeOrder() {
    console.log("Покупка совершена");
  }

  addProduct(product) {
    this.products.push(product);
    this.update();
  }

  removeListeners() {

  }

  addListeners() {
    this.cart.querySelector("#makeOrderBtn").addEventListener("click", this.makeOrder);
  }
}