document.addEventListener('DOMContentLoaded', () => {
  const popupTypeProfile = document.querySelector('.popup_type_profile');
  const buttonEditProfile = document.querySelector('.profile-info__edit-button');
  const buttonCloseProfile = document.querySelector('.popup__button-close_type_profile');
  const buttonSaveProfile = document.querySelector('.popup__button-save_type_profile');
  const formElementProfile = document.querySelector('.popup__container_type_profile');
  const popupRedactName = formElementProfile.querySelector('.popup__redaction-name_profile');
  const popupRedactStatus = formElementProfile.querySelector('.popup__redaction-status_profile');
  const profileInfoName = document.querySelector('.profile-info__name');
  const profileInfoStatus = document.querySelector('.profile-info__status');
  const containerNewPlace = document.querySelector('.elements')
  const newPlaceTemplate = document.querySelector('#new-place-template').content;
  const popupTypeNewPlace = document.querySelector('.popup_type_new-place');
  const newPlaceContainer = document.querySelector('.popup__container_type_new-place');
  const buttonAddNewPlace = document.querySelector('.profile__add-button');
  const buttonCloseNewPlace = document.querySelector('.popup__button-close_type_new-place');
  const buttonMakeNewPlace = document.querySelector('.popup__button-save_type_new-place');
  const namingNewPlace = document.querySelector('.popup__redaction-name_new-place');
  const adressNewPlace = document.querySelector('.popup__redaction-status_new-place');
  const popupWithPhoto = document.querySelector('.popup_type_photo');
  const photoImg = document.querySelector('.photo__image');
  const photoText = document.querySelector('.photo__text');
  const photoButtonClose = document.querySelector('.popup__button-close_type_photo');
  
  const openPopup = (popup) => {
    popup.classList.add('popup_opened');
  };
  const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
  };
 
  function formProfileSubmitHandler (evt) {
    evt.preventDefault();
    profileInfoName.textContent = popupRedactName.value;
    profileInfoStatus.textContent = popupRedactStatus.value;

  };

  const render = () => {
    initialCards.forEach((item) => {
      const elementNewPlace = createCardNewPlace (item.name, item.link);

      containerNewPlace.append(elementNewPlace);
    });
    newPlaceContainer.addEventListener('submit', handleCreateNewItem);
  };

  const createCardNewPlace = (name, link) => {
    const elementNewPlace = newPlaceTemplate.querySelector('.new-place-element').cloneNode(true);
    const photoBlock = elementNewPlace.querySelector('.new-place-element__image');
    photoBlock.src = link;
    photoBlock.alt = name;
    elementNewPlace.querySelector('.new-place-element__text').textContent = name;
    const heartLike = elementNewPlace.querySelector('.new-place-element__heart-button');
    heartLike.addEventListener('click', handleLikeListen); 
    const buttonDel = elementNewPlace.querySelector('.new-place-element__delete-button');
    buttonDel.addEventListener('click', handleDelButton);
    photoBlock.addEventListener('click', photoListen);
    
    return elementNewPlace;
  };

  const handleCreateNewItem = (evt) => {
    evt.preventDefault();
    const itemNew = createCardNewPlace(namingNewPlace.value, adressNewPlace.value);
    containerNewPlace.prepend(itemNew);
    newPlaceContainer.reset();
  }

  const handleLikeListen = (evt) => {
    const likeElement = evt.target.closest('.new-place-element__heart-button');
    likeElement.classList.toggle('new-place-element__heart-button_active');
  };

  const handleDelButton = (evt) => {
    const elementDelete = evt.target.closest('.new-place-element');
    elementDelete.remove();
  };
  
  const photoListen = (evt) => {
    evt.preventDefault();
    const newPlaceFindElement = evt.target.closest('.new-place-element');
    const imgPhoto = newPlaceFindElement.querySelector('.new-place-element__image');
    imgPhoto.addEventListener('click', () => {
      openPopup(popupWithPhoto);
    });
    const textPhoto = newPlaceFindElement.querySelector('.new-place-element__text');
    photoImg.src = imgPhoto.src;
    photoImg.alt = imgPhoto.alt;
    photoText.textContent = textPhoto.textContent;
  };

  buttonEditProfile.addEventListener('click', () => {
    openPopup(popupTypeProfile);
  });
  buttonCloseProfile.addEventListener('click', () => {
    closePopup(popupTypeProfile);
  });
  buttonSaveProfile.addEventListener('click', () => {
    closePopup(popupTypeProfile);
  });
  buttonAddNewPlace.addEventListener('click', () => {
    openPopup(popupTypeNewPlace);
  });
  buttonCloseNewPlace.addEventListener('click', () => {
    closePopup(popupTypeNewPlace);
  });
  buttonMakeNewPlace.addEventListener('click', () => {
    closePopup(popupTypeNewPlace);
  });
  popupTypeProfile.addEventListener('click', (evt) => {
    if(evt.target == evt.currentTarget){
      closePopup(popupTypeProfile);
    };
  });
  popupTypeNewPlace.addEventListener('click', (evt) => {
    if(evt.target == evt.currentTarget){
      closePopup(popupTypeNewPlace);
    };
  });
  popupWithPhoto.addEventListener('click', (evt) => {
    if(evt.target == evt.currentTarget){
      closePopup(popupWithPhoto);
    };
  });
  
  popupTypeProfile.addEventListener('keydown', (evt) => {
    if(evt.key === 'escape'){
      closePopup(popupTypeProfile);
    };
  });
  popupTypeNewPlace.addEventListener('keydown', (evt) => {
    if(evt.key === 'escape'){
      closePopup(popupTypeNewPlace);
    };
  });
  popupWithPhoto.addEventListener('keydown', (evt) => {
    if(evt.key === 'escape'){
      closePopup(popupWithPhoto);
    };
  });

  formElementProfile.addEventListener('submit', formProfileSubmitHandler); 
  photoButtonClose.addEventListener('click', () => {
    closePopup(popupWithPhoto);
  });
  
  
  
  render();





});

  