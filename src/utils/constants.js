export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
  
  export const settings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__entry-field',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_invalid',
    inputErrorClass: '.popup__input_error',
    errorClass: '.popup__error'
  }

  
  

  export const popupTypeProfile = document.querySelector('.popup_type_profile');
  export const buttonEditProfile = document.querySelector('.profile-info__edit-button');
  export const buttonCloseProfile = document.querySelector('.popup__button-close_type_profile');
  export const buttonSaveProfile = document.querySelector('.popup__button-save_type_profile');
  export const formElementProfile = document.querySelector('.popup__container_type_profile');
  export const popupRedactName = document.querySelector('.popup__redaction-name_profile');
  export const popupRedactStatus = document.querySelector('.popup__redaction-status_profile');
  export const profileInfoName = document.querySelector('.profile-info__name');
  export const profileInfoStatus = document.querySelector('.profile-info__status');
  
  // const newPlaceTemplate = document.querySelector('.new-place-template').content;
  export const popupTypeNewPlace = document.querySelector('.popup_type_new-place');
  export const formElementNewPlace = document.querySelector('.popup__container_type_new-place');
  export const buttonAddNewPlace = document.querySelector('.profile__add-button');
  export const buttonCloseNewPlace = document.querySelector('.popup__button-close_type_new-place');
  // const buttonMakeNewPlace = document.querySelector('.popup__button-save_type_new-place');
  export const namingNewPlace = document.querySelector('.popup__redaction-name_new-place');
  export const addressNewPlace = document.querySelector('.popup__redaction-status_new-place');
  export const popupWithPhoto = document.querySelector('.popup_type_photo');
  export const photoImg = document.querySelector('.photo__image');
  export const photoText = document.querySelector('.photo__text');
  export const photoButtonClose = document.querySelector('.popup__button-close_type_photo');
  
