document.addEventListener('DOMContentLoaded', () => {
  const popupTypeProfile = document.querySelector('.popup_type_profile');
  const buttonEditProfile = document.querySelector('.profile-info__edit-button');
  const buttonCloseProfile = popupTypeProfile.querySelector('.popup__button-close_type_profile');
  const buttonSaveProfile = popupTypeProfile.querySelector('.popup__button-save_type_profile');
  const formElementProfile = document.querySelector('.popup__type_container_profile');
  const popupRedactName = document.querySelector('.popup__redaction-name_profile');
  const popupRedactStatus = document.querySelector('.popup__redaction-status_profile');
  const profileInfoName = document.querySelector('.profile-info__name');
  const profileInfoStatus = document.querySelector('.profile-info__status');
  const containerNewPlace = document.querySelector('.elements')
  const newPlaceTemplate = document.querySelector('#new-place-template').content;
  const newPlace = document.querySelector('.popup_type_new-place');
  const newPlaceContainer = document.querySelector('.popup__type_container_new-place');
  const buttonAddNewPlace = document.querySelector('.profile__add-button');
  const buttonCloseNewPlace = newPlace.querySelector('.popup__button-close_type_new-place');
  const buttonMakeNewPlace = document.querySelector('.popup__button-save_type_new-place');
  const namingNewPlace = document.querySelector('.popup__redaction-name_new-place');
  const adressNewPlace = document.querySelector('.popup__redaction-status_new-place');
  const popupWithPhoto = document.querySelector('.popup_type_photo');
  const photoImg = document.querySelector('.photo__image');
  const photoText = document.querySelector('.photo__text');
  const photoButtonClose = document.querySelector('.popup__button-close_type_photo');

  function openPopupTypeProfile(evt) {
    popupTypeProfile.classList.add('popup_opened');
  };
  function closePopupTypeProfile(evt) {
    popupTypeProfile.classList.remove('popup_opened');
  };
  function openPopupNewPlace(evt) {
    newPlace.classList.add('popup_opened');
  };
  function closePopupNewPlace(evt) {
    newPlace.classList.remove('popup_opened');
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
    newPlaceContainer.addEventListener('submit', createNewItem);
  };

  const createCardNewPlace = (name, link) => {
    const elementNewPlace = newPlaceTemplate.querySelector('.new-place-element').cloneNode(true);
    const photoBlock = elementNewPlace.querySelector('.new-place-element__image');
    photoBlock.src = link;
    photoBlock.alt = name;
    elementNewPlace.querySelector('.new-place-element__text').textContent = name;
    const heartLike = elementNewPlace.querySelector('.new-place-element__heart-button');
    heartLike.addEventListener('click', likeListen); 
    const buttonDel = elementNewPlace.querySelector('.new-place-element__delete-button');
    buttonDel.addEventListener('click', delButton);
    photoBlock.addEventListener('click', photoListen);
    
    return elementNewPlace;
  };

  const createNewItem = (evt) => {
    evt.preventDefault();
    const itemNew = createCardNewPlace(namingNewPlace.value, adressNewPlace.value);
    containerNewPlace.prepend(itemNew);
    newPlaceContainer.reset();
  };

  const likeListen = (evt) => {
    const likeElement = evt.target.closest('.new-place-element__heart-button');
    likeElement.classList.toggle('new-place-element__heart-button_active');
  };

  const delButton = (evt) => {
    const elementDelete = evt.target.closest('.new-place-element');
    elementDelete.remove();
  };
  
  const photoListen = (evt) => {
    evt.preventDefault();
    popupWithPhoto.classList.toggle('photo_opened');
    const newPlaceFindElement = evt.target.closest('.new-place-element');
    const imgPhoto = newPlaceFindElement.querySelector('.new-place-element__image');
    const textPhoto = newPlaceFindElement.querySelector('.new-place-element__text');
    photoImg.src = imgPhoto.src;
    photoImg.alt = imgPhoto.alt;
    photoText.textContent = textPhoto.textContent;
  };

  buttonEditProfile.addEventListener('click', openPopupTypeProfile);
  buttonCloseProfile.addEventListener('click', closePopupTypeProfile);
  buttonSaveProfile.addEventListener('click', closePopupTypeProfile);
  buttonAddNewPlace.addEventListener('click', openPopupNewPlace);
  buttonCloseNewPlace.addEventListener('click', closePopupNewPlace);
  buttonMakeNewPlace.addEventListener('click', closePopupNewPlace);

  formElementProfile.addEventListener('submit', formProfileSubmitHandler); 
  photoButtonClose.addEventListener('click', photoListen);
  
  render();

});

  