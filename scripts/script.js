import {FormValidator} from './FormValidator.js';
import {Card} from './Card.js';
import {initialCards, settings} from './constants.js';

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
  const popupWithPhoto = document.querySelector('.popup_type_photo');
  const photoImg = document.querySelector('.photo__image');
  const photoText = document.querySelector('.photo__text');
  const photoButtonClose = document.querySelector('.popup__button-close_type_photo');
  const formValidatorProfile = new FormValidator(settings, formElementProfile);
  const formValidatorElementNewPlace = new FormValidator(settings, formElementNewPlace);
  
  formValidatorProfile.enableValidation();
  formValidatorElementNewPlace.enableValidation();

  const createCard = (item) => {
    const card = new Card(item, '.new-place-template');
    const elementCard = card.generateCard();

    return elementCard;
  }

  initialCards.forEach((item) => {
    containerNewPlace.append(createCard(item));
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
    formValidatorElementNewPlace.disableSubmitButton();
  };

  export const handleOpenPopup = (name, link) => {
    photoImg.src = link;
    photoImg.alt = name;
    photoText.textContent = name;
    popupWithPhoto.classList.add('popup_opened');
  }
  
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
    formValidatorProfile._setInputText(popupTypeProfile, popupRedactName, profileInfoName);
    formValidatorProfile._setInputText(popupTypeProfile, popupRedactStatus, profileInfoStatus);
    formValidatorProfile._enableSubmitButton(buttonSaveProfile);
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
  photoButtonClose.addEventListener('click', () => {
    closePopup(popupWithPhoto);
  });
    
  popupTypeProfile.addEventListener('click', handleClosePopupByClick);
  popupTypeNewPlace.addEventListener('click', handleClosePopupByClick);
  popupWithPhoto.addEventListener('click', handleClosePopupByClick);
  
  formElementProfile.addEventListener('submit', () => {
  formProfileSubmitHandler;
  handleClosePopupBySubmit;
}); 
  formElementNewPlace.addEventListener('submit', () => {
    handleCreateNewItem;
    handleClosePopupBySubmit;
});
