import { letters, symbolArr, numberArr } from './dataBase';
import AdditionalFunctions from './additionalFunctions';
import Decryping from './decryping';

export default class Translate {
  constructor(parent) {
    this.parent = document.querySelector(`[data-id=${parent}]`);
    this.translateBtn = document.querySelector('[data-id=translate]');
    this.cleanFormBtn = document.querySelector('[data-id=cleanForm]');
    this.textArea = document.querySelector('[data-id=textField]');
  }

  create() {
    this.createListeners();
  }

  createListeners() {
    this.translateBtn.addEventListener('click', () => {
      const checking = this.textArea.value.split('|{>->}');

      if (checking.length > 1) {
        console.log('Окей, будем расшифровывать');
        new Decryping(this.textArea).create();
      } else if (this.textArea.value.length !== 0) {
        console.log('Окей, шифруем');
        this.translation();
      } else {
        new AdditionalFunctions(this.parent).createInfoForm('Форма пуста, введите текст', 'red');
      }
    });

    this.textArea.addEventListener('keydown', (event) => {
      if (event.keyCode === 8 && this.textArea.value.length <= 1) {
        this.cleanFormBtn.classList.add('hide');
      } else {
        this.cleanFormBtn.classList.remove('hide');
      }
    });

    this.cleanFormBtn.addEventListener('click', () => { // Очистить
      new AdditionalFunctions(this.parent).cleanForm(this.cleanFormBtn);
    });

    console.log('Кнопки готовы к действию');
  }

  translation() {
    const textArr = this.textArea.value.toLowerCase();
    let newText = '|{>->}'; // Это чтобы начало строки идентифицировать

    for (let i = 0; i < textArr.length; i += 1) {
      const el = textArr[i];
      for (let j = 0; j < letters.length; j += 1) {
        if (el === letters[j][1]) {
          newText += `${letters[j][2]}${new AdditionalFunctions(this.parent).specialSimbol()}`;
        }
      }

      for (let j = 0; j < symbolArr.length; j += 1) { // если знак препинания
        if (el === symbolArr[j][0]) {
          newText += `${symbolArr[j][1]}${new AdditionalFunctions(this.parent).specialSimbol()}`;
        }
      }

      for (let j = 0; j < numberArr.length; j += 1) { // если цифры
        if (el === numberArr[j][0]) {
          newText += `${numberArr[j][1]}${new AdditionalFunctions(this.parent).specialSimbol()}`;
        }
      }
    }

    this.textArea.value = newText;
    new AdditionalFunctions(this.parent).copyTextBtn();
    this.textArea.disabled = true;
  }
}
