export class FormValidator {
  constructor(settings, formElement){
    this._settings = settings;
    this._formElement = formElement;
    this._buttonElement = this._formElement.querySelector(settings.submitButtonSelector);
    this._inputList = Array.from(this._formElement.querySelectorAll(settings.inputSelector));
   }

_showInputError(inputElement, errorMessage){
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._settings.inputErrorClass);
    errorElement.classList.add(this._settings.errorClass);
    errorElement.textContent = errorMessage;
  };

  _hideInputError(inputElement){
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._settings.inputErrorClass);
    errorElement.classList.remove(this._settings.errorClass);
    errorElement.textContent = '';
  };

  _setInputText(inputElement){
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement);
    };
  };

  _checkInputValidity(inputElement){
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    };
  };

  _hasInvalidInput(){
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState(){
    if (this._hasInvalidInput()) {
      this.disableSubmitButton();
    } else {
      this._enableSubmitButton();
    };
  };

  _enableSubmitButton(){
    this._buttonElement.disabled = '';
    this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
  };

  disableSubmitButton(){
    this._buttonElement.disabled = 'disabled';
    this._buttonElement.classList.add(this._settings.inactiveButtonClass);
  };

  _setEventListeners(){
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  enableValidation(){
    this._setEventListeners();
  };    
}
