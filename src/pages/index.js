import {FormValidator} from '../components/FormValidator.js'; 
import {Card} from '../components/Card.js'; 
import {initialCards, settings, containerNewPlace} from '../utils/constants.js'; 
import {Section} from '../components/Section.js';
import {Popup} from '../components/Popup.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js'
import {UserInfo} from '../components/UserInfo.js';
import './index.css';

  const popupTypeProfile = document.querySelector('.popup_type_profile'); 
  const buttonEditProfile = document.querySelector('.profile-info__edit-button'); 
  const buttonCloseProfile = document.querySelector('.popup__button-close_type_profile'); 
  const buttonSaveProfile = document.querySelector('.popup__button-save_type_profile'); 
  const formElementProfile = document.querySelector('.popup__container_type_profile'); 
  const popupRedactName = document.querySelector('.popup__redaction-name_profile'); 
  const popupRedactStatus = document.querySelector('.popup__redaction-status_profile'); 
  const popupTypeNewPlace = document.querySelector('.popup_type_new-place'); 
  const formElementNewPlace = document.querySelector('.popup__container_type_new-place'); 
  const buttonAddNewPlace = document.querySelector('.profile__add-button'); 
  const buttonCloseNewPlace = document.querySelector('.popup__button-close_type_new-place'); 
  const namingNewPlace = document.querySelector('.popup__redaction-name_new-place'); 
  const addressNewPlace = document.querySelector('.popup__redaction-status_new-place'); 
  const popupWithPhoto = document.querySelector('.popup_type_photo'); 
  const photoButtonClose = document.querySelector('.popup__button-close_type_photo'); 
  const formValidatorProfile = new FormValidator(settings, formElementProfile); 
  const formValidatorElementNewPlace = new FormValidator(settings, formElementNewPlace); 
  const popupWithImage = new PopupWithImage('popup_type_photo');
  const popupTypeProfileParent = new Popup('popup_type_profile');
  const popupTypeNewPlaceParent = new Popup('popup_type_new-place');
  const popupWithPhotoParent = new Popup('popup_type_photo');
  const userInfo = new UserInfo({
    elementNameSelector:'.profile-info__name', 
    elementStatusSelector: '.profile-info__status'});

  function handleCardClick ({link, name}) {
    popupWithImage.openPopup({link, name});
  }
  
  formValidatorProfile.enableValidation(); 
  formValidatorElementNewPlace.enableValidation(); 

  const createCard = (item) => { 
    const card = new Card(item, '.new-place-template', handleCardClick); 
    return card.generateCard(); 
  } 

  const addCards = new Section({
    items: initialCards,
    renderer: createCard}, containerNewPlace);

  addCards.renderAllItems();


  function handleCreateNewItem(evt){  
    evt.preventDefault(); 
    containerNewPlace.prepend(  
    createCard({  
      link: addressNewPlace.value,  
      name: namingNewPlace.value  
      }));  

    formValidatorElementNewPlace.disableSubmitButton();   
    new PopupWithForm('popup_type_new-place', handleCreateNewItem).closePopup();
  }; 

  const formProfileSubmitHandler = (evt) => { 
    evt.preventDefault(); 
    userInfo.setUserInfo({
      name: popupRedactName.value, 
      status: popupRedactStatus.value});
    new PopupWithForm('popup_type_profile', formProfileSubmitHandler).closePopup();
    };

  buttonEditProfile.addEventListener('click', () => { 
    popupTypeProfileParent.openPopup();
    const userInfoGet = userInfo.getUserInfo();
    popupRedactName.value = userInfoGet.name;
    popupRedactStatus.value = userInfoGet.status;
    formValidatorProfile._setInputText(); 
    formValidatorProfile._enableSubmitButton(buttonSaveProfile); 
    
  });

  buttonCloseProfile.addEventListener('click', () => { 
    popupTypeProfileParent.closePopup(); 
  }); 

  buttonAddNewPlace.addEventListener('click', () => { 
    popupTypeNewPlaceParent.openPopup(); 
  }); 

  buttonCloseNewPlace.addEventListener('click', () => { 
    popupTypeNewPlaceParent.closePopup(); 
  }); 

  photoButtonClose.addEventListener('click', () => { 
    popupWithPhotoParent.closePopup(); 
  }); 

  popupTypeProfile.addEventListener('click', popupTypeProfileParent.handleClosePopupByClick); 
  popupTypeNewPlace.addEventListener('click', popupTypeNewPlaceParent.handleClosePopupByClick); 
  popupWithPhoto.addEventListener('click', popupWithPhotoParent.handleClosePopupByClick); 
   
  formElementProfile.addEventListener('submit', formProfileSubmitHandler);  
  formElementNewPlace.addEventListener('submit', handleCreateNewItem); 
  