const pixelBaseAltura = 5;
const corPincel = document.getElementById('pincel');
const corPaleta = document.getElementsByClassName('color');

corPaleta[0].className += ' selected';
corPincel.className = 'black';

function selecionaCor(evento) {
  const corSelecionada = evento.target;

  for (let index = 0; index < corPaleta.length; index += 1) {
    corPaleta[index].classList.remove('selected');
  }
  corPincel.className = corSelecionada.className.replace('color ', '');
  evento.target.classList.add('selected');
}

function pintaPixel(evento) {
  const cor = document.querySelector('.selected');

  evento.target.className = `pixel${cor.className
    .replace('color', '')
    .replace(' selected', '')}`;
  console.log(cor.className);
}

function limpaTodosPixels() {
  const todosPixels = document.getElementsByClassName('pixel');

  for (let index = 0; index < todosPixels.length; index += 1) {
    todosPixels[index].className = 'pixel white';
  }
}

function criaTag(tipo, id, classe) {
  const tag = document.createElement(tipo);

  if (id !== '') {
    tag.id = id;
  }

  if (classe !== '') {
    tag.className = classe;
  }

  return tag;
}

window.onload = function () {
  const quadroPixel = document.getElementById('pixel-board');
  const btnLimpar = document.getElementById('clear-board');

  btnLimpar.innerText = 'Limpar';
  btnLimpar.addEventListener('click', limpaTodosPixels);

  for (let index = 0; index < corPaleta.length; index += 1) {
    corPaleta[index].addEventListener('click', selecionaCor);
  }

  for (let index = 1; index <= pixelBaseAltura ** 2; index += 1) {
    const tagPixel = criaTag('div', '', 'pixel white');
    tagPixel.addEventListener('click', pintaPixel);

    quadroPixel.appendChild(tagPixel);
  }
};
