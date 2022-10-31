const settings = {
    formSelector: '.popup__container',
    inputSelector: '.popup__entry-field',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: '.popup__button-save_invalid',
    activeButtonClass: '.popup__button-save_valid',
    inputErrorClass: '.popup__input_error',
    errorClass: '.popup__error'
  };
debugger;
const showInputError = (formElement, inputElement, errorMessage, settings) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.classList.add(settings.errorClass);
  errorElement.textContent = errorMessage;
};
debugger;
const hideInputError = (formElement, inputElement, settings) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.classList.remove(settings.errorClass);
  errorElement.textContent = '';
};
debugger;
const checkInputValidity = (formElement, inputElement, settings) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, settings);
  } else {
    hideInputError(formElement, inputElement, settings);
  };
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  
function toggleButtonState (inputList, buttonElement, settings) {
  if (hasInvalidInput(inputList, settings)) {
    buttonElement.disabled = 'disabled';
    buttonElement.classList.add(settings.inactiveButtonClass);
    buttonElement.classList.remove(settings.activeButtonClass);
  } else {
    buttonElement.disabled = '';
    buttonElement.classList.remove(settings.inactiveButtonClass);
    buttonElement.classList.add(settings.activeButtonClass);
  };
};

const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  const buttonElement = formElement.querySelector(settings.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, settings);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, settings);
      toggleButtonState(inputList, buttonElement, settings);
    });
  });
};

function deleteError (formElement, settings) {
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    inputList.forEach(inputElement => hideInputError(formElement, inputElement, settings));
    toggleButtonState(formElement, inputList, settings);
  };

const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, settings);
  }); 
};


enableValidation({
    formSelector: '.popup__container',
    inputSelector: '.popup__entry-field',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_invalid',
    activeButtonClass: 'popup__button-save_valid',
    inputErrorClass: '.popup__input_error',
    errorClass: '.popup__error'
  });


 

  