"use strict";

(function () {
  const cardList = document.querySelector('#card-list');
  const template = document.querySelector('#template1').content.querySelector('div');

  for (let i = 0; i < window.data.length; i++) {
    const templateClone = template.cloneNode(true);
    templateClone.querySelector('.card-title').textContent = window.data[i].name;
    templateClone.querySelector('.card-text').textContent = window.data[i].text;
    templateClone.querySelector('.btn').addEventListener('click', () => {
      alert(`Стоимость — ${window.data[i].cost}`);
    });

    cardList.appendChild(templateClone);
  }
}());
