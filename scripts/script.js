import {FormValidator} from './FormValidator.js';
import {Card, initialCards, popupWithPhoto, photoButtonClose} from './Card.js';

  const popupTypeProfile = document.querySelector('.popup_type_profile');
  const buttonEditProfile = document.querySelector('.profile-info__edit-button');
  const buttonCloseProfile = document.querySelector('.popup__button-close_type_profile');
  const buttonSaveProfile = document.querySelector('.popup__button-save_type_profile');
  const formElementProfile = document.querySelector('.popup__container_type_profile');
  const popupRedactName = document.querySelector('.popup__redaction-name_profile');
  const popupRedactStatus = document.querySelector('.popup__redaction-status_profile');
  const profileInfoName = document.querySelector('.profile-info__name');
  const profileInfoStatus = document.querySelector('.profile-info__status');
  const containerNewPlace = document.querySelector('.elements')
  const newPlaceTemplate = document.querySelector('.new-place-template').content;
  const popupTypeNewPlace = document.querySelector('.popup_type_new-place');
  const formElementNewPlace = document.querySelector('.popup__container_type_new-place');
  const buttonAddNewPlace = document.querySelector('.profile__add-button');
  const buttonCloseNewPlace = document.querySelector('.popup__button-close_type_new-place');
  const buttonMakeNewPlace = document.querySelector('.popup__button-save_type_new-place');
  const namingNewPlace = document.querySelector('.popup__redaction-name_new-place');
  const addressNewPlace = document.querySelector('.popup__redaction-status_new-place');
  
  new FormValidator().enableValidation();

  initialCards.forEach((item) => {
    const card = new Card(item, '.new-place-template');
    const elementCard = card.generateCard();
  
    document.querySelector('.elements').append(elementCard);
  });

  const openPopup = (popup) => {
    document.addEventListener('keydown', handlerEscKey);
    popup.classList.add('popup_opened');
  };
  const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', handlerEscKey);
  };
 
  const formProfileSubmitHandler = (evt) => {
    evt.preventDefault();
    profileInfoName.textContent = popupRedactName.value;
    profileInfoStatus.textContent = popupRedactStatus.value;

  };

  const handlerEscKey = (evt) => {
    if(evt.key === 'Escape' ){
      const choosePopupEsc = document.querySelector('.popup_opened');
      closePopup(choosePopupEsc);
    };
  };

  function handleCreateNewItem(evt){
    evt.preventDefault();
    containerNewPlace.prepend(
      new Card ({
      link: addressNewPlace.value,
      name: namingNewPlace.value
      },
      '.new-place-template').generateCard()
    );
    formElementNewPlace.reset();
    new FormValidator()._disableSubmitButton(buttonMakeNewPlace);
  };
  
  const handleClosePopupByClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(evt.currentTarget);
    };
  };

  const handleClosePopupBySubmit = (evt) => {
    closePopup(evt.currentTarget);
  };

  buttonEditProfile.addEventListener('click', () => {
    openPopup(popupTypeProfile);
    new FormValidator()._setInputText(popupTypeProfile, popupRedactName, profileInfoName);
    new FormValidator()._setInputText(popupTypeProfile, popupRedactStatus, profileInfoStatus);
    new FormValidator()._enableSubmitButton(buttonSaveProfile);
  });
  buttonCloseProfile.addEventListener('click', () => {
    closePopup(popupTypeProfile);
  });
  buttonAddNewPlace.addEventListener('click', () => {
    openPopup(popupTypeNewPlace);
  });
  buttonCloseNewPlace.addEventListener('click', () => {
    closePopup(popupTypeNewPlace);
  });
    
  popupTypeProfile.addEventListener('submit', handleClosePopupBySubmit);
  popupTypeNewPlace.addEventListener('submit', handleClosePopupBySubmit);
  popupTypeProfile.addEventListener('click', handleClosePopupByClick);
  popupTypeNewPlace.addEventListener('click', handleClosePopupByClick);
  popupWithPhoto.addEventListener('click', handleClosePopupByClick);
  
  formElementProfile.addEventListener('submit', formProfileSubmitHandler); 
  formElementNewPlace.addEventListener('submit', handleCreateNewItem);
  photoButtonClose.addEventListener('click', () => {
    closePopup(popupWithPhoto);
  });
