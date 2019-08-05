import { Cart } from "./cart";
import { Product } from "./product";
import { data } from "./data";

const cardList = document.querySelector('#card-list');
const cartContainer = document.querySelector('#cart-container');

const cart = new Cart(cartContainer);
cart.render();

for (let i = 0; i < data.length; i++) {
  let product = new Product(cart, cardList, data[i]);
  product.render();
}