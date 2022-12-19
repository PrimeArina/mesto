import {Popup} from '../components/Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit){
    super(popupSelector);
    this._formSubmit = formSubmit;
    this._inputListValues = Array.from(this._popupElement.querySelectorAll('.popup__entry-field'));
    this._form  = this._popupElement.querySelector('.popup__container');
  }

  _getInputValues(){
    this._formInputValues = {};
    this._inputListValues.forEach(input => {
        this._formInputValues[input.name] = input.value;
    })
    return this._formInputValues;
  }

  setEventListeners(){
    super.setEventListeners();
    this._form.addEventListener('submit', this._formSubmit(this._getInputValues()));
  }

  closePopup(){ 
    super.closePopup();
    this._form.reset();
  };
}