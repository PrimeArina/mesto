import {Popup} from '../components/Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm){
    super(popupSelector);
    this._submitForm = submitForm;
    this._inputListValues = this._popupElement.querySelectorAll('.popup__entry-field');
    this._form  = this._popupElement.querySelector('.popup__form');
  }

  _getInputValues(){
    this._formInputValues = {};
    this._inputListValues.forEach((input) => {
        this._formInputValues[input.name] = input.value;
    });
    return this._formInputValues;
  }

  setEventListenersSubmit(){
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
    });
  }

  close(){ 
    super.close();
    this._form.reset();
  }
}