import { letters, symbolArr, numberArr } from './dataBase';

export default class Decryping {
  constructor(textArea) {
    this.textArea = textArea;
  }

  create() {
    this.translation();
  }

  translation() {
    let newText = '';
    let textArr = this.textArea.value.toLowerCase();
    textArr = textArr.split(/(_!-_)|(_\|_)|(_><\|}}_)|(_{\|_)|(_\|\|\|\|\|\|_)|(_-\|\|_)|(_-\|\|_)|(_!-_)|(_\.\|\._)|(_-\|_)|(\|{>->})/);

    // console.log(textArr);

    for (let i = 0; i < textArr.length; i += 1) {
      const el = textArr[i];
      for (let j = 0; j < letters.length; j += 1) {
        if (el === letters[j][2]) {
          newText += `${letters[j][1]}`;
        }
      }

      for (let j = 0; j < symbolArr.length; j += 1) { // если знак препинания
        if (el === symbolArr[j][1]) {
          newText += `${symbolArr[j][0]}`;
        }
      }

      for (let j = 0; j < numberArr.length; j += 1) { // если цифры
        if (el === numberArr[j][1]) {
          newText += `${numberArr[j][0]}`;
        }
      }
    }

    // this.textArea
    this.textArea.value = newText;
    this.textArea.disabled = false;
  }
}
