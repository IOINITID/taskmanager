import {createElement} from "../utils";

// Возвращает разметку блока доска
const createBoardTemplate = () => {
  return (
    `<section class="board container"></section>`
  );
};

// Класс доски
export default class Board {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createBoardTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
