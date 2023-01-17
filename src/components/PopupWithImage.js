import {Popup} from '../components/Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector){
    super(popupSelector);
    this._photoImg = document.querySelector('.photo__image');
    this._photoText = document.querySelector('.photo__text');
  }
  
  open( {link, name} ){
    this._photoImg.src = link;
    this._photoText.textContent = name; 
    this._photoImg.alt = name;

    super.open();
  } 
}
