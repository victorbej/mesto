import { initialCards } from './InitialCards.js';
import { Card } from './Card.js';
import { popupBigWindow, bigWindowCloseButton } from './variables.js';
import { popupCloseButton } from './variables.js';
import { profileTitle, profileText, profileTitleInput, profileTextInput, popupReductionButton, popupReductionWindow, formElementProfile } from './variables.js';
import { popupInitialCardsWindow, popupAddButton, popupAddButtonClose, formElementPlace } from './variables.js';
import { inputPlace, inputLink } from './variables.js';

function popupOpen(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', addKeyDownEsc);
    document.addEventListener('mousedown', addMouseDownClosePopup);
};

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', addKeyDownEsc);
    document.removeEventListener('mousedown', addMouseDownClosePopup);
    // if (popup.querySelector('.popup__formfield')) {
    //     toResetValididation(popup, validationConfig);
    // }
};

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
    // enableValidation(validationConfig);
};

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = profileTitleInput.value;
    profileText.textContent = profileTextInput.value;
    closePopup(popupReductionWindow);
};

function createCard(item) {
    const card = new Card(item, '.template');
    const cardElement = card.generateCard();
    return cardElement;
};

initialCards.forEach((item) => {
    document.querySelector('.gallery__lists').prepend(createCard(item));
});

function toAddCard() {
    const inputNamePlace = inputPlace.value;
    const inputLinkPlace = inputLink.value;
    document.querySelector('.gallery__lists').prepend(createCard({ name: inputNamePlace, link: inputLinkPlace }, '#temp'));
}

function toAddCardFormSubmit() {
    toAddCard();
    closePopup(popupInitialCardsWindow);
    // enableValidation(validationConfig);
}

popupReductionButton.addEventListener('click', () => {
    popupOpen(popupReductionWindow);
    packReductionButton();
});
popupAddButton.addEventListener('click', () => popupOpen(popupInitialCardsWindow));
popupAddButtonClose.addEventListener('click', () => closePopup(popupInitialCardsWindow));
bigWindowCloseButton.addEventListener('click', () => closePopup(popupBigWindow));
popupCloseButton.addEventListener('click', () => closePopup(popupReductionWindow));

formElementProfile.addEventListener('submit', formSubmitHandler);
formElementPlace.addEventListener('submit', toAddCardFormSubmit);

export { popupOpen };