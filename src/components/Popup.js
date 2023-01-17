export class Popup {
  constructor(popupSelector){
    this._popupElement = document.querySelector(popupSelector);
    this._handlerEscKey = this._handlerEscKey.bind(this);
    this._buttonClosePopup = this._popupElement.querySelector('.popup__button-close');
  }

  _handlerEscKey(evt){ 
    if(evt.key === 'Escape' ){
      this.close();
    }; 
  }; 
  
  open(){ 
    document.addEventListener('keydown', this._handlerEscKey); 
    this._popupElement.classList.add('popup_opened'); 
  }; 

  close(){ 
    this._popupElement.classList.remove('popup_opened'); 
    document.removeEventListener('keydown', this._handlerEscKey); 
  }; 

  _handleClosePopupByClick(evt){ 
    if (evt.target.classList.contains('popup')) { 
      this.close(); 
    };
  }; 

  setEventListeners(){
    this._popupElement.addEventListener('click', (evt) => {this._handleClosePopupByClick(evt)});
    this._buttonClosePopup.addEventListener('click', () => {this.close()});
  }
}
