export class FormValidator {
  constructor(settings = {
    formSelector: '.popup__container',
    inputSelector: '.popup__entry-field',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_invalid',
    activeButtonClass: 'popup__button-save_valid',
    inputErrorClass: '.popup__input_error',
    errorClass: '.popup__error'
  }, formElement){
    this._settings = settings;
    this._formElement = formElement;
   }

    _showInputError(formElement, inputElement, errorMessage, settings){
      const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.add(this._settings.inputErrorClass);
      errorElement.classList.add(this._settings.errorClass);
      errorElement.textContent = errorMessage;
    };

    _hideInputError(formElement, inputElement, settings){
      const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.remove(this._settings.inputErrorClass);
      errorElement.classList.remove(this._settings.errorClass);
      errorElement.textContent = '';
    };

    _setInputText(formElement, inputElement, textElement){
      inputElement.value = textElement.textContent;
      if (inputElement.validity.valid) {
        this._hideInputError(formElement, inputElement, this._settings);
      };
    };

    _checkInputValidity(formElement, inputElement, settings){
      if (!inputElement.validity.valid) {
        this._showInputError(formElement, inputElement, inputElement.validationMessage, settings);
      } else {
        this._hideInputError(formElement, inputElement, settings);
      };
    };

    _hasInvalidInput(inputList){
      return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      });
    };
  
    _toggleButtonState(inputList, buttonElement, settings){
      if (this._hasInvalidInput(inputList, settings)) {
        this._disableSubmitButton(buttonElement);
      } else {
        this._enableSubmitButton(buttonElement);
      };
    };

    _enableSubmitButton(buttonElement){
      buttonElement.disabled = '';
      buttonElement.classList.remove(this._settings.inactiveButtonClass);
      buttonElement.classList.add(this._settings.activeButtonClass);
    };

    _disableSubmitButton(buttonElement){
      buttonElement.disabled = 'disabled';
      buttonElement.classList.add(this._settings.inactiveButtonClass);
      buttonElement.classList.remove(this._settings.activeButtonClass);
    };

    _setEventListeners(formElement, settings){
      const inputList = Array.from(formElement.querySelectorAll(this._settings.inputSelector));
      const buttonElement = formElement.querySelector(this._settings.submitButtonSelector);
      this._toggleButtonState(inputList, buttonElement, settings);
      inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            new FormValidator()._checkInputValidity(formElement, inputElement, settings);
            new FormValidator()._toggleButtonState(inputList, buttonElement, settings);
        });
      });
    };

    _deleteError(formElement, settings){
      const inputList = Array.from(formElement.querySelectorAll(this._settings.inputSelector));
      inputList.forEach(inputElement => this._hideInputError(formElement, inputElement, settings));
      this._toggleButtonState(formElement, inputList, settings);
    };

    enableValidation(settings){
    const formList = Array.from(document.querySelectorAll(this._settings.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      this._setEventListeners(formElement, settings);
    }); 
    };    
}


