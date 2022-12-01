import {handleOpenPopup} from './script.js';

export class Card {
  constructor(data, templateSelector){
    this._link = data.link;
    this._name = data.name;
    this._templateSelector = templateSelector;
  }

  _getTemplate(){
    const elementCard = document.querySelector(this._templateSelector).content.querySelector('.new-place-element').cloneNode(true);

    return elementCard;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._elementImage = this._element.querySelector('.new-place-element__image');
    this._elementHeartButton = this._element.querySelector('.new-place-element__heart-button');

    this._setEventListeners();

    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._element.querySelector('.new-place-element__text').textContent = this._name;
  
    return this._element;
  } 

  _setEventListeners(){
    this._elementHeartButton.addEventListener('click', this._handleLike); 
    this._element.querySelector('.new-place-element__delete-button').addEventListener('click', this._handleDel);
    this._elementImage.addEventListener('click', () => {handleOpenPopup(this._name, this._link)});
  }

  _handleLike(evt){
    evt.currentTarget.classList.toggle('new-place-element__heart-button_active');
  };

  _handleDel(){
    this._element.remove();
  };
}


