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
    const deleteFormEl = document.createElement('div');
    deleteFormEl.classList = 'infoWindow red delete';

    deleteFormEl.innerHTML = `
      <span class="text">Уверены, что хотите очистить поле?</span>
      <div class="span_btns_holder">
        <span data-id="deleteTrue" class="span_btn">Да</span>
        <span data-id="deleteFalse" class="span_btn">Нет</span>
      </div>`;

    this.parent.appendChild(deleteFormEl);

    this.deleteFormBtns(deleteFormEl);
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
    const infoEl = document.createElement('div');
    infoEl.classList = `infoWindow infoWindow-animate ${bgc}`;

    infoEl.innerHTML = `<span class="text">${textInfo}</span>`;

    this.parent.appendChild(infoEl);

    setTimeout(() => {
      infoEl.remove();
    }, 2000);
  }

  // eslint-disable-next-line class-methods-use-this
  deleteFormBtns(formParent) {
    const deleteTrue = document.querySelector('[data-id=deleteTrue]');
    const deleteFalse = document.querySelector('[data-id=deleteFalse]');

    deleteTrue.addEventListener('click', () => {
      this.textArea.disabled = false;
      this.textArea.value = '';

      formParent.remove();
      this.createInfoForm('Форма очищена!', 'red');
    });

    deleteFalse.addEventListener('click', () => {
      formParent.remove();
    });
  }
}
