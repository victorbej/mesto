import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import {
    initialCards,
    cardsContainer,
    reductionButton,
    addCardButton
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


// 'UserInfo' class performance
const userInfo = new UserInfo('.profile__title', '.profile__text');


// 'PopupWithForm' class performance
const profileEditPopup = new PopupWithForm({
    containerSelector: '.popup_reduction-window'
});
const addCardPopup = new PopupWithForm({
    containerSelector: '.popup_initial-cards-window'
});

profileEditPopup.setEventListeners();
addCardPopup.setEventListeners();

reductionButton.addEventListener('click', () => {
    profileEditPopup.open();
});

addCardButton.addEventListener('click', () => {
    addCardPopup.open();
});