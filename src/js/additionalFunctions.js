export default class AdditionalFunctions {
  constructor(parent) {
    this.parent = parent;
    this.textArea = document.querySelector('[data-id=textField]');
  }

  copyTextBtn() { // Копировать
    this.textArea.select();
    document.execCommand('copy');

    this.createInfoForm('Текст скопирован в буффер обмена!', 'green');
  }

  cleanForm() { // Очистить
    this.textArea.disabled = false;
    this.textArea.value = '';

    this.createInfoForm('Форма очищена!', 'red');
  }

  // eslint-disable-next-line class-methods-use-this
  specialSimbol() {
    const specialArr = [
      ['_!-_'],
      ['_|_'],
      ['_><|}}_'],
      ['_{|_'],
      ['_||||||_'],
      ['_-||_'],
      ['_-|_'],
      ['_!-_'],
      ['_.|._'],
    ];
    const randomCount = Math.floor((9) * Math.random());

    return specialArr[randomCount];
  }

  // eslint-disable-next-line class-methods-use-this
  createInfoForm(textInfo, bgc) {
    const chatEl = document.createElement('div');
    chatEl.classList = `infoWindow infoWindow-animate ${bgc}`;

    chatEl.innerHTML = `<span class="text">${textInfo}</span>`;

    this.parent.appendChild(chatEl);

    // chatEl.style.marginTop = `${-chatEl.offsetHeight}px`;
    // chatEl.style.marginLeft = `calc(50% - ${chatEl.offsetWidth}px)`;
  }
}
