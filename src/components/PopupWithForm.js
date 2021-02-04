import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({ containerSelector }) {
        super(containerSelector);
        this._formfield = this._popup.querySelector('.popup__formfield');
        this._inputList = this._popup.querySelectorAll('.popup__formfield-input');
    }

    _getInputValues() {
    }

    setEventListeners() {
        super.setEventListeners();
    }

    close() {
        this._formfield.reset();
        super.close();
    }

}