document.addEventListener('DOMContentLoaded', () => {
const editButton = document.querySelector('.profile-info__edit-button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__button-close');
const saveButton = document.querySelector('.popup__button-save');

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

const formElement = document.querySelector('.popup__container');
const popupRedactName = document.querySelector('.popup__redaction-name');
const popupRedactStatus = document.querySelector('.popup__redaction-status');
const profileInfoName = document.querySelector('.profile-info__name');
const profileInfoStatus = document.querySelector('.profile-info__status');

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileInfoName.textContent = popupRedactName.value;
    profileInfoStatus.textContent = popupRedactStatus.value;
  };
    
  formElement.addEventListener('submit', formSubmitHandler); 

  const initialCards = [
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

  const containerNewPlace = document.querySelector('.elements')
  const newPlaceTemplate = document.querySelector('#new-place-template').content;

  const render = () => {
    initialCards.forEach((item) => {
      const elementNewPlace = cardNewPlace (item.name, item.link);

      containerNewPlace.append(elementNewPlace);
    });
    newPlaceContainer.addEventListener('submit', newItem);
   };

    const cardNewPlace = (name, link) => {
    const elementNewPlace = newPlaceTemplate.querySelector('.new-place-element').cloneNode(true);
    elementNewPlace.querySelector('.new-place-element__image').src = link;
    elementNewPlace.querySelector('.new-place-element__image').alt = name;
    elementNewPlace.querySelector('.new-place-element__text').textContent = name;
    const heartLike = elementNewPlace.querySelector('.new-place-element__heart-button');
    heartLike.addEventListener('click', likeListen); 
    const deleteButton = elementNewPlace.querySelector('.new-place-element__delete-button');
    deleteButton.addEventListener('click', delButton);
    const photoBlock = elementNewPlace.querySelector('.new-place-element__image');
    photoBlock.addEventListener('click', photoListen);
    
    return elementNewPlace;
  };

  const newPlace = document.querySelector('.new-place');
  const newPlaceContainer = document.querySelector('.new-place__container');
  const addButton = document.querySelector('.profile__add-button');
  const closeButtonNp = newPlace.querySelector('.new-place__button-close');
  const makeButton = document.querySelector('.new-place__button-make');
 
  function newPlaceClass () {
    newPlace.classList.toggle('new-place_opened');
  };
  
  addButton.addEventListener('click', newPlaceClass);
  closeButtonNp.addEventListener('click', newPlaceClass);
  makeButton.addEventListener('click', newPlaceClass);
    
  const namingNewPlace = document.querySelector('.new-place__naming');
  const adressNewPlace = document.querySelector('.new-place__adress');

  const newItem = (evt) => {
    evt.preventDefault();
    const itemNew = cardNewPlace(namingNewPlace.value, adressNewPlace.value);
    containerNewPlace.prepend(itemNew);
    namingNewPlace.value = '';
    adressNewPlace.value = '';
  };

  const likeListen = (evt) => {
    const likeElement = evt.target.closest('.new-place-element__heart-button');
    likeElement.classList.toggle('new-place-element__heart-button_active');
  };

  const delButton = (evt) => {
    const delElement = evt.target.closest('.new-place-element');
    delElement.remove();
  };
   
  const photoClass = document.querySelector('.photo');
  const photoImg = document.querySelector('.photo__image');
  const photoText = document.querySelector('.photo__text');
  const photoButtonClose = document.querySelector('.photo__button-close');

  const photoListen = (evt) => {
    evt.preventDefault();
    photoClass.classList.toggle('photo_opened');
    const evTarg = evt.target.closest('.new-place-element');
    const imgPhoto = evTarg.querySelector('.new-place-element__image');
    const textPhoto = evTarg.querySelector('.new-place-element__text');
    photoImg.src = imgPhoto.src;
    photoImg.alt = imgPhoto.alt;
    photoText.textContent = textPhoto.textContent;
  };
 
  photoButtonClose.addEventListener('click', photoListen);
  
  render();

});