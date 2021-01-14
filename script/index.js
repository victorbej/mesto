import { initialCards } from './InitialCards.js';
import { Card } from './Card.js';
import { popupBigWindow, bigWindowCloseButton } from './variables.js';

initialCards.forEach((item) => {
    const card = new Card(item, '.template');
    const cardElement = card.generateCard();

    document.querySelector('.gallery__lists').prepend(cardElement);
});

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

bigWindowCloseButton.addEventListener('click', () => closePopup(popupBigWindow));

export { popupOpen, closePopup };