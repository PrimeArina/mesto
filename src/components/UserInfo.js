export class UserInfo {
    constructor({elementNameSelector, elementStatusSelector}){
      this._nameElement = document.querySelector(elementNameSelector);
      this._statusElement = document.querySelector(elementStatusSelector);
    }

    getUserInfo(){
        return{
        name: this._nameElement.textContent,
        status: this._statusElement.textContent
        }
      }

    setUserInfo({name, status}) {
      this._nameElement.textContent = name;
      this._statusElement.textContent = status;
    }
}