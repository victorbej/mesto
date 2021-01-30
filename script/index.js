import Section from './Section.js';
import { initialCards } from './InitialCards.js';
import { Card } from './Card.js';
import { popupBigWindow, bigWindowCloseButton } from './variables.js';
import { popupCloseButton } from './variables.js';
import { profileTitle, profileText, profileTitleInput, profileTextInput, popupReductionButton, popupReductionWindow, formElementProfile } from './variables.js';
import { popupInitialCardsWindow, popupAddButton, popupAddButtonClose, formElementPlace } from './variables.js';
import { inputPlace, inputLink } from './variables.js';
import { enablePopupProfile, enablePopupAddCard } from './FormValidator.js';
import { cardsContainer } from './variables.js';

const cards = new Section({
    items: initialCards, renderer: (item) => { createCard(item) },
}, cardsContainer);

function createCard(item) {
    const card = new Card(item, '.template');
    const cardElement = card.generateCard();
    cards.addItem(cardElement);
};

cards.renderer();

function popupOpen(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', addKeyDownEsc);
    document.addEventListener('mousedown', addMouseDownClosePopup);
};

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', addKeyDownEsc);
    document.removeEventListener('mousedown', addMouseDownClosePopup);
};

function toReset(popup) {
    popup.querySelector('.popup__formfield').reset();
}

function addKeyDownEsc(e) {
    if (e.key === 'Escape') {
        closePopup(document.querySelector('.popup_opened'));
    };
};

function addMouseDownClosePopup(e) {
    if (e.target.classList.contains('popup')) {
        closePopup(e.target.closest('.popup_opened'))
    };
};

function packReductionButton() {
    profileTitleInput.value = profileTitle.textContent;
    profileTextInput.value = profileText.textContent;
};

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = profileTitleInput.value;
    profileText.textContent = profileTextInput.value;
    closePopup(popupReductionWindow);
};

function toAddCard() {
    const inputNamePlace = inputPlace.value;
    const inputLinkPlace = inputLink.value;
    cardsContainer.prepend(createCard({ name: inputNamePlace, link: inputLinkPlace }, '#temp'));
};

function toAddCardFormSubmit(evt) {
    evt.preventDefault();
    toAddCard();
    closePopup(popupInitialCardsWindow);
};

popupReductionButton.addEventListener('click', () => {
    toReset(popupReductionWindow);
    enablePopupProfile.toResetValididation();
    popupOpen(popupReductionWindow);
    packReductionButton();
});

popupAddButton.addEventListener('click', () => {
    toReset(popupInitialCardsWindow);
    enablePopupAddCard.toResetValididation();
    popupOpen(popupInitialCardsWindow)
});

popupAddButtonClose.addEventListener('click', () => closePopup(popupInitialCardsWindow));
bigWindowCloseButton.addEventListener('click', () => closePopup(popupBigWindow));
popupCloseButton.addEventListener('click', () => closePopup(popupReductionWindow));

formElementProfile.addEventListener('submit', formSubmitHandler);
formElementPlace.addEventListener('submit', toAddCardFormSubmit);

enablePopupProfile.enableValidation();
enablePopupAddCard.enableValidation();

export { popupOpen };