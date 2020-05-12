import { letters, symbolArr } from './dataBase';
import Decryping from './decryping';

export default class Translate {
  constructor() {
    this.translateToBtn = document.querySelector('[data-id=translateToBtn]');
    this.translateFromBtn = document.querySelector('[data-id=translateFromBtn]');
    this.textArea = null;
  }

  create() {
    console.log('Объявим слушателей');

    this.createListeners();
  }

  createListeners() {
    this.translateToBtn.addEventListener('click', () => { // Зашифровать
      this.textArea = document.querySelector('[data-id=textField]');
      if (this.textArea.value === '') {
        console.error('пусто');
      } else {
        console.log('Окей, шифруем');
        this.translation();
      }
    });

    this.translateFromBtn.addEventListener('click', () => { // Расшифровать
      this.textArea = document.querySelector('[data-id=textField]');
      if (this.textArea.value === '') {
        console.error('пусто');
      } else {
        console.log('Окей, будем расшифровывать');
        new Decryping(this.textArea).create();
      }
    });

    console.log('Кнопки готовы к действию');
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

  translation() {
    const textArr = this.textArea.value.toLowerCase();
    let newText = '';

    for (let i = 0; i < textArr.length; i += 1) {
      const el = textArr[i];
      for (let j = 0; j < letters.length; j += 1) {
        if (el === letters[j][1]) {
          newText += `${letters[j][2]}${this.specialSimbol()}`;
        }
      }

      for (let j = 0; j < symbolArr.length; j += 1) { // если знак препинания
        if (el === symbolArr[j][0]) {
          newText += `${symbolArr[j][1]}${this.specialSimbol()}`;
        }
      }
    }

    console.log(newText);
    this.textArea.value += `\n- - - - - Результат - - - - -\n${newText}`;
  }
}
