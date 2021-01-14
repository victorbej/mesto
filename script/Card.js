import { pictureItem, pictureTextItem, popupBigWindow} from './variables.js';
import { popupOpen, closePopup } from './index.js';
export class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    };

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.gallery__list')
            .cloneNode(true)

        return cardElement;
    };

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.gallery__list-title').textContent = this._name;
        this._picture = this._element.querySelector('.gallery__list-image');
        this._picture.src = this._link;
        this._picture.alt = this._name;

        this._setEventListeners();

        return this._element;
    };

    _handleLikeCardClick() {
        this._element.querySelector('.gallery__like-button').classList.toggle('gallery__like-button_active');
    };

    _handleDeleteCardClick() {
        this._element.remove();
    };

    _handleOpenPopup() {
        pictureItem.src = this._link;
        pictureTextItem.textContent = this._name;
        popupOpen(popupBigWindow);
    };

    _setEventListeners() {
        this._element.querySelector('.gallery__like-button').addEventListener('click', () => {
            this._handleLikeCardClick();
        });
        this._element.querySelector('.gallery__delete-button').addEventListener('click', () => {
            this._handleDeleteCardClick();
        });
        this._picture.addEventListener('click', () => {
            this._handleOpenPopup();
        });
    };
};