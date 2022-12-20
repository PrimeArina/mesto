import {Popup} from '../components/Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector){
    super(popupSelector);
    this._photoImg = this._popupElement.querySelector('.photo__image');
    this._photoText = this._popupElement.querySelector('.photo__text');
  }
  
  openPopup( {link, name} ){
    this._photoImg.src = link;
    this._photoText.textContent = name; 
    this._photoImg.alt = name;

    super.openPopup();
  } 
}
