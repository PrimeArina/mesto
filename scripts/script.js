document.addEventListener('DOMContentLoaded', () => {
let editButton = document.querySelector('.profile-info__edit-button');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__button-close');
let saveButton = document.querySelector('.popup__button-save');

  editButton.addEventListener('click', function(e) {
    popup.classList.toggle('popup_opened');
  });
  closeButton.addEventListener('click', function(e) {
    popup.classList.toggle('popup_opened');
  });
  saveButton.addEventListener('click', function(e) {
    popup.classList.toggle('popup_opened');
  });

function openPopup(popup) {
    popup.classList.add('popup_opened');
  };
function closePopup(popup) {
    popup.classList.remove('popup_opened');
  };

let formElement = document.querySelector('.popup__container');
let popupRedactName = document.querySelector('.popup__redaction-name');
let popupRedactStatus = document.querySelector('.popup__redaction-status');
let profileInfoName = document.querySelector('.profile-info__name');
let profileInfoStatus = document.querySelector('.profile-info__status');

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileInfoName.textContent = popupRedactName.value;
    profileInfoStatus.textContent = popupRedactStatus.value;
  };
    
  formElement.addEventListener('submit', formSubmitHandler); 
});