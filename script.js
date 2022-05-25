let pixelBaseAltura = 5;
let corPincel = document.getElementById('pincel');
let corPaleta = document.getElementsByClassName('color');
corPaleta[0].className += " selected";
corPincel.className = 'black';

for (let chave in corPaleta) {
  corPaleta[chave].addEventListener('click', selecionaCor); 
}

window.onload = function () {
  let quadroPixel = document.getElementById('pixel-board');

  for (let index = 1; index <= pixelBaseAltura ** 2; index += 1) {
    let tagPixel = criaTag('div','','pixel','style.backgroundColor','rgb(255, 255, 255)');

    quadroPixel.appendChild(tagPixel);
  }
};

function selecionaCor(evento) {
  let corSelecionada = evento.target;

  for (let index = 0; index < corPaleta.length; index += 1) {
    corPaleta[index].classList.remove('selected'); 
  }
  corPincel.className = corSelecionada.className;
  evento.target.classList.add('selected');
}

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
