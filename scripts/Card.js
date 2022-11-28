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

export const popupWithPhoto = document.querySelector('.popup_type_photo');
const photoImg = document.querySelector('.photo__image');
const photoText = document.querySelector('.photo__text');
export const photoButtonClose = document.querySelector('.popup__button-close_type_photo');

export class Card {
  constructor(data, templateSelector){
    this._link = data.link;
    this._name = data.name;
    this._templateSelector = templateSelector;
  }

  _getTemplate(){
    const elementCard = document.querySelector(this._templateSelector).content.querySelector('.new-place-element').cloneNode(true);

    return elementCard;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.new-place-element__heart-button').addEventListener('click', this._handleLikeListen); 
    this._element.querySelector('.new-place-element__delete-button').addEventListener('click', this._handleDelButton);
    this._setEventListeners();
  
    this._element.querySelector('.new-place-element__image').src = this._link;
    this._element.querySelector('.new-place-element__image').alt = this._name;
    this._element.querySelector('.new-place-element__text').textContent = this._name;
  
    return this._element;
  } 

  _handleLikeListen(evt){
    evt.currentTarget.classList.toggle('new-place-element__heart-button_active');
  };

  _handleDelButton(evt){
    evt.target.closest('.new-place-element').remove();
  };

  _handleOpenPopupPhoto() {
    photoImg.src = this._link;
    photoImg.alt = this._name;
    photoText.textContent = this._name;
    popupWithPhoto.classList.add('popup_opened');
  }

  _handleClosePopupPhoto() {
    popupWithPhoto.classList.remove('popup_opened');
  }

  _setEventListeners() {
    this._element.querySelector('.new-place-element__image').addEventListener('click', () => {
      this._handleOpenPopupPhoto();
    });

    photoButtonClose.addEventListener('click', () => {
      this._handleClosePopupPhoto();
    });
  }
}


