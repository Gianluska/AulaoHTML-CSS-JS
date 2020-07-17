const inputColor = document.querySelector('#color');
const inputFont = document.querySelector('#font');

const mainTitle = document.querySelector('.main__content--title');

function applyStyles() {
  mainTitle.style.color = inputColor.value;
  mainTitle.style.borderColor = inputColor.value;

  mainTitle.style.fontSize = inputFont.value + 'px';
}