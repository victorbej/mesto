import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import {
    initialCards,
    cardsContainer,
} from '../utils/constants.js';

// 'Section' and 'Card' classes performance, cards rendering
const section = new Section({
    items: initialCards, renderer: (item) => { createCard(item, '#temp', clickOnCard) },
}, cardsContainer);

function createCard(item, cardSelector, handleCardClick) {
    const card = new Card(item, cardSelector, handleCardClick);
    const cardElement = card.generateCard();
    section.addItem(cardElement);
}

section.renderer();

// 'PopupWithImage' class performance, popup with picture formed and packed
const popupBigPicture = new PopupWithImage('.popup_big-window-picture');
popupBigPicture.setEventListeners();

function clickOnCard(event) {
    const pictureItem = event.target;
    const pictureText = pictureItem.closest('.gallery__list')
        .querySelector('.gallery__list-title')
        .textContent;

    popupBigPicture.open(pictureText, pictureItem.src);
}