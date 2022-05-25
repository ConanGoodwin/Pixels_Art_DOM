let pixelBaseAltura = 5;

window.onload = function () {
  let quadroPixel = document.getElementById('pixel-board');

  for (let index = 1; index <= pixelBaseAltura ** 2; index += 1) {
    let tagPixel = criaTag('div', '', 'pixel', 'style.backgroundColor', 'rgb(255, 255, 255)');

    quadroPixel.appendChild(tagPixel);
  }
};

function criaTag(tipo, id, classe, atributo, valor) {
  let tag = document.createElement(tipo);

  if (id != '') {
    tag.id = id;
  }

  if (classe != '') {
    tag.className = classe;
  }

  if (atributo != '') {
    tag.setAttribute(atributo, valor);
  }

  return tag;
}
