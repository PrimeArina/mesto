import {FormValidator} from '../components/FormValidator.js'; 
import {Card} from '../components/Card.js'; 
import {initialCards, settings} from '../utils/constants.js'; 
import {Section} from '../components/Section.js';
import {Popup} from '../components/Popup.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js'
import {UserInfo} from '../components/UserInfo.js';
import './index.css';

  const popupTypeProfile = document.querySelector('.popup_type_profile'); 
  const buttonEditProfile = document.querySelector('.profile-info__edit-button'); 
  const buttonSaveProfile = document.querySelector('.popup__button-save_type_profile'); 
  const formElementProfile = document.querySelector('.popup__form_type_profile'); 
  const popupRedactName = document.querySelector('.popup__redaction-name_profile'); 
  const popupRedactStatus = document.querySelector('.popup__redaction-status_profile'); 
  const popupTypeNewPlace = document.querySelector('.popup_type_new-place'); 
  const formElementNewPlace = document.querySelector('.popup__form_type_new-place'); 
  const buttonAddNewPlace = document.querySelector('.profile__add-button'); 
  const namingNewPlace = document.querySelector('.popup__redaction-name_new-place'); 
  const addressNewPlace = document.querySelector('.popup__redaction-status_new-place'); 
  const popupWithPhoto = document.querySelector('.popup_type_photo'); 
  const buttonCloseProfile = document.querySelector('.popup__button-close_type_profile'); 
  const buttonCloseNewPlace = document.querySelector('.popup__button-close_type_new-place'); 
  const photoButtonClose = document.querySelector('.popup__button-close_type_photo'); 
  const inputValue = document.querySelector('.popup__entry-field');
  const containerNewPlace = document.querySelector('.elements');
  const popupTypeProfileInputs = document.querySelector('.popup_type_profile').querySelectorAll('.popup__entry-field');
  const formValidatorProfile = new FormValidator(settings, formElementProfile); 
  const formValidatorElementNewPlace = new FormValidator(settings, formElementNewPlace); 
  const popupProfileWithForm = new PopupWithForm('.popup_type_profile', handlerFormProfile);
  const popupNewPlaceWithForm = new PopupWithForm('.popup_type_new-place', handlerCreateNewItem);
  const popupWithImage = new PopupWithImage('.popup_type_photo');
  const popupTypeProfileParent = new Popup('.popup_type_profile');
  const popupTypeNewPlaceParent = new Popup('.popup_type_new-place');
  const popupWithPhotoParent = new Popup('.popup_type_photo');
  const userInfo = new UserInfo({
    elementNameSelector:'.profile-info__name', 
    elementStatusSelector: '.profile-info__status'});

  function handleCardClick ({link, name}) {
    popupWithImage.open({link, name});
  }
  
  formValidatorProfile.enableValidation(); 
  formValidatorElementNewPlace.enableValidation(); 

  const createCard = (item) => { 
    const card = new Card(item, '.new-place-template', handleCardClick); 
    return card.generateCard(); 
  } 

  const cardsAdd = new Section({
    items: initialCards,
    renderer: createCard}, '.elements');
  cardsAdd.renderAllItems();

  function handlerCreateNewItem(card){
    containerNewPlace.prepend(createCard(card));
    formValidatorElementNewPlace.disableSubmitButton();
    popupNewPlaceWithForm.close();
  }; 

  function handlerFormProfile(name, status){ 
    userInfo.setUserInfo(name, status);
    popupProfileWithForm.close();
  };

  buttonEditProfile.addEventListener('click', () => { 
    popupTypeProfileParent.open();
    submitHandlerFormProfile();
    formValidatorProfile.setInputText(inputValue); 
    formValidatorProfile._enableSubmitButton(buttonSaveProfile);
  });

  const submitHandlerFormProfile = () => {
    const userInfoGet = userInfo.getUserInfo();
    popupTypeProfileInputs.forEach((input) => {
      input.value = userInfoGet[input.name];
    });
  }

  buttonAddNewPlace.addEventListener('click', () => { 
    popupTypeNewPlaceParent.open(); 
  }); 
  
  popupTypeProfileParent.setEventListeners();
  popupTypeNewPlaceParent.setEventListeners();
  popupWithPhotoParent.setEventListeners();

  popupProfileWithForm.setEventListenersSubmit();
  popupNewPlaceWithForm.setEventListenersSubmit();