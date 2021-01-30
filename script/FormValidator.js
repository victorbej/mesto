export const validationConfig = {
<<<<<<< HEAD
=======
    formSelector: '.popup__formfield',
    inputSelector: '.popup__formfield-input',
    inputInvalidClass: 'popup__formfield-input_error',
    submitButtonSelector: '.popup__save-button',
    buttonInvalidClass: 'popup__save-button_invalid'
  };
  
  export class FormValidator {
    constructor(config, formSelector) {
      this._formSelector = formSelector;
      this._inputSelector = config.inputSelector;
      this._inputInvalidClass = config.inputInvalidClass;
      this._submitButtonSelector = config.submitButtonSelector;
      this._buttonInvalidClass = config.buttonInvalidClass;
      this._formfield = document.querySelector(this._formSelector);
      this._submitButtonState = this._formfield.querySelector(this._submitButtonSelector);
      this._inputList = this._formfield.querySelectorAll(this._inputSelector);
    };
  
    _showError(input) {
      const error = this._formfield.querySelector(`#${input.id}-error`);
      error.textContent = input.validationMessage;
      input.classList.add(this._inputInvalidClass);
    };
  
    _hideError(input) {
      const error = this._formfield.querySelector(`#${input.id}-error`);
      error.textContent = '';
      input.classList.remove(this._inputInvalidClass);
    };
  
    _checkInputValidity(input) {
      if (input.validity.valid) {
        this._hideError(input);
      } else {
        this._showError(input);
      };
    };
  
    _setButtonState() {
      if (this._formfield.checkValidity()) {
        this._submitButtonState.classList.remove(this._buttonInvalidClass);
        this._submitButtonState.disabled = false;
      } else {
        this._submitButtonState.classList.add(this._buttonInvalidClass);
        this._submitButtonState.disabled = true;
      };
    };
  
    _setEventListeners() {
      this._inputList.forEach((input) => {
        input.addEventListener('input', () => {
          this._checkInputValidity(input);
          this._setButtonState(this._submitButtonState, this._formfield.checkValidity());
        });
      });
    };
  
    enableValidation() {
      this._setEventListeners();
      this._setButtonState(this._submitButtonState, this._formfield.checkValidity());
    };
  
    toResetValididation() {
      this._inputList.forEach((input) => {
        this._hideError(input);
      });
      this._setButtonState();
    }
  
  };
  
  const enablePopupProfile = new FormValidator(validationConfig, '.popup__formfield_profile');
  const enablePopupAddCard = new FormValidator(validationConfig, '.popup__formfield_add-card');
  
>>>>>>> 4b2835639b218258223e0873680e3c7f17539669
  formSelector: '.popup__formfield',
  inputSelector: '.popup__formfield-input',
  inputInvalidClass: 'popup__formfield-input_error',
  submitButtonSelector: '.popup__save-button',
  buttonInvalidClass: 'popup__save-button_invalid'
};

export class FormValidator {
  constructor(config, formSelector) {
    this._formSelector = formSelector;
    this._inputSelector = config.inputSelector;
    this._inputInvalidClass = config.inputInvalidClass;
    this._submitButtonSelector = config.submitButtonSelector;
    this._buttonInvalidClass = config.buttonInvalidClass;
    this._formfield = document.querySelector(this._formSelector);
    this._submitButtonState = this._formfield.querySelector(this._submitButtonSelector);
    this._inputList = this._formfield.querySelectorAll(this._inputSelector);
  };

  _showError(input) {
    const error = this._formfield.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.add(this._inputInvalidClass);
  };

  _hideError(input) {
    const error = this._formfield.querySelector(`#${input.id}-error`);
    error.textContent = '';
    input.classList.remove(this._inputInvalidClass);
  };

  _checkInputValidity(input) {
    if (input.validity.valid) {
      this._hideError(input);
    } else {
      this._showError(input);
    };
  };

  _setButtonState() {
    if (this._formfield.checkValidity()) {
      this._submitButtonState.classList.remove(this._buttonInvalidClass);
      this._submitButtonState.disabled = false;
    } else {
      this._submitButtonState.classList.add(this._buttonInvalidClass);
      this._submitButtonState.disabled = true;
    };
  };

  _setEventListeners() {
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._setButtonState(this._submitButtonState, this._formfield.checkValidity());
      });
    });
  };

  enableValidation() {
    this._setEventListeners();
    this._setButtonState(this._submitButtonState, this._formfield.checkValidity());
  };

  toResetValididation() {
    this._inputList.forEach((input) => {
      this._hideError(input);
    });
    this._setButtonState();
  }

};

const enablePopupProfile = new FormValidator(validationConfig, '.popup__formfield_profile');
const enablePopupAddCard = new FormValidator(validationConfig, '.popup__formfield_add-card');

<<<<<<< HEAD
export { enablePopupProfile, enablePopupAddCard };
=======

>>>>>>> 4b2835639b218258223e0873680e3c7f17539669
