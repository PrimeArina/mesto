export class Popup {
  constructor(popupSelector){
    this._popupElement = document.querySelector(`.${popupSelector}`);
    this._handlerEscKey = this._handlerEscKey.bind(this);
  }

  _handlerEscKey(evt){ 
    if(evt.key === 'Escape' ){
      this.closePopup();
    }; 
  }; 
  
  openPopup(){ 
    document.addEventListener('keydown', this._handlerEscKey); 
    this._popupElement.classList.add('popup_opened'); 
  }; 

  closePopup(){ 
    this._popupElement.classList.remove('popup_opened'); 
    document.removeEventListener('keydown', this._handlerEscKey); 
  }; 

  _handleClosePopupByClick(evt){ 
    if (evt.target === evt.currentTarget) { 
      this._popupElement.closePopup(evt.currentTarget); 
    }; 
  }; 

  setEventListeners(){
    this._popupElement.addEventListener('click', this._handleClosePopupByClick);
  }
}
