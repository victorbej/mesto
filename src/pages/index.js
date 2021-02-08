import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import FormValidator from '../components/FormValidator.js';
import {
    initialCards,
    cardsContainer,
    reductionButton,
    addCardButton,
    inputName,
    inputJob,
    inputPlace,
    inputLink,
    validationConfig
} from '../utils/constants.js';


// 'Section' and 'Card' classes performance, cards rendering
const section = new Section({
    items: initialCards, renderer: (item) => { createCard(item, '#temp', clickOnCard) },
}, cardsContainer);

function createCard(item, cardSelector, handleCardClick) {
    const card = new Card(item, cardSelector, handleCardClick);
    const cardElement = card.generateCard();
    addElement(cardElement);
}

function addElement(cardElement) {
    section.addItem(cardElement);
}

section.renderer();


// 'PopupWithImage' class performance, popup with picture formed and packed
const popupBigPicture = new PopupWithImage('.popup_big-window-picture');
popupBigPicture.setEventListeners();

function clickOnCard(name, link) {
    popupBigPicture.open(name, link);
}


// 'UserInfo' class performance
const userInfo = new UserInfo('.profile__title', '.profile__text');


// 'PopupWithForm' class performance for profile popup implementation
const profileEditPopup = new PopupWithForm({
    containerSelector: '.popup_reduction-window', handleSubmit: ({ ['name-input']: name, ['about']: job }) => {
        userInfo.setUserInfo(name, job);
    }
});

profileEditPopup.setEventListeners();

reductionButton.addEventListener('click', () => {
    inputName.value = userInfo.getUserInfo().name;
    inputJob.value = userInfo.getUserInfo().job;
    enablePopupProfile.toResetValididation();
    profileEditPopup.open();
});


// 'PopupWithForm' class performance for card insert popup implementation
const addCardPopup = new PopupWithForm({
    containerSelector: '.popup_initial-cards-window', handleSubmit: ({ ['place-input']: name, ['place-link']: link }) => {
        const card = createCard({ name, link }, '#temp', clickOnCard);
        addElement(card);
    }
});

addCardPopup.setEventListeners();

addCardButton.addEventListener('click', () => {
    inputPlace.value = '';
    inputLink.value = '';
    enablePopupAddCard.toResetValididation();
    addCardPopup.open();
});


// 'FormValidator' class performance and it's enable for profile popup
const enablePopupProfile = new FormValidator(validationConfig, '.popup__formfield_profile');
enablePopupProfile.enableValidation();


// 'FormValidator' class performance and it's enable for card insert popup
const enablePopupAddCard = new FormValidator(validationConfig, '.popup__formfield_add-card');
enablePopupAddCard.enableValidation();