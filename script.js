const corPincel = document.getElementById('pincel');
const corPaleta = document.getElementsByClassName('color');
const txtTamanho = document.getElementById('board-size');
const quadroPixel = document.getElementById('pixel-board');
const todosPixels = document.getElementsByClassName('pixel');

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
}

function limpaTodosPixels() {
  // const todosPixels = document.getElementsByClassName('pixel');

  for (let index = 0; index < todosPixels.length; index += 1) {
    todosPixels[index].className = 'pixel white';
  }
}

function retiraNumeroNegativo(evento) {
  // if (!Math.sign(evento.key)) {
  //   evento.preventDefault();
  // }
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

function geraGradePixels(pixelBaseAltura) {
  quadroPixel.style.width = `${40 * pixelBaseAltura + 2 * pixelBaseAltura}px`;

  for (let index = 1; index <= pixelBaseAltura ** 2; index += 1) {
    const tagPixel = criaTag('div', '', 'pixel white');
    tagPixel.addEventListener('click', pintaPixel);

    quadroPixel.appendChild(tagPixel);
  }
}

function novaGradePixels() {
  if (txtTamanho.value === '') {
    window.alert('Board inválido!');
  } else {
    let base = parseInt(txtTamanho.value);
    
    while (todosPixels.length > 0) {
      quadroPixel.removeChild(todosPixels[0]);
    }

    geraGradePixels(parseInt(txtTamanho.value));
  }
}

window.onload = function () {
  const btnLimpar = document.getElementById('clear-board');
  const btnTamanho = document.getElementById('generate-board');

  btnLimpar.innerText = 'Limpar';
  btnLimpar.addEventListener('click', limpaTodosPixels);
  btnTamanho.addEventListener('click', novaGradePixels);
  txtTamanho.addEventListener('keydown', retiraNumeroNegativo);

  for (let index = 0; index < corPaleta.length; index += 1) {
    corPaleta[index].addEventListener('click', selecionaCor);
  }

  geraGradePixels(5);
};
