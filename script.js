let pixelBaseAltura = 5;
let corPincel = document.getElementById('pincel');
let corPaleta = document.getElementsByClassName('color');
corPaleta[0].className += " selected";
corPincel.className = 'black';

window.onload = function () {
  let quadroPixel = document.getElementById('pixel-board');

  for (let index = 0; index < corPaleta.length; index += 1) {
    corPaleta[index].addEventListener('click', selecionaCor); 
  }

  for (let index = 1; index <= pixelBaseAltura ** 2; index += 1) {
    let tagPixel = criaTag('div','','pixel white','','');
    tagPixel.addEventListener("click",pintaPixel);

    quadroPixel.appendChild(tagPixel);
  }
};

function selecionaCor(evento) {
  let corSelecionada = evento.target;

  for (let index = 0; index < corPaleta.length; index += 1) {
    corPaleta[index].classList.remove('selected'); 
  }
  corPincel.className = corSelecionada.className.replace('color ', '');
  evento.target.classList.add('selected');
}

function pintaPixel(evento) {
  let cor = document.querySelector('.selected');

  evento.target.className = "pixel" + cor.className.replace('color', '').replace(' selected', '');
  console.log(cor.className);
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
    tag[atributo] = valor;
  }

  return tag;
}
