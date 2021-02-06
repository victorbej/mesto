export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

export const validationConfig = {
    formSelector: '.popup__formfield',
    inputSelector: '.popup__formfield-input',
    inputInvalidClass: 'popup__formfield-input_error',
    submitButtonSelector: '.popup__save-button',
    buttonInvalidClass: 'popup__save-button_invalid'
};

export const cardsContainer = document.querySelector('.gallery__lists');
export const cardSelector = document.querySelector('.template');
export const reductionButton = document.querySelector('.profile__reduction-button');
export const addCardButton = document.querySelector('.profile__add-button');
export const inputName = document.querySelector('.popup__formfield-input_name');
export const inputJob = document.querySelector('.popup__formfield-input_job');
export const inputPlace = document.querySelector('.popup__formfield-input_place');
export const inputLink = document.querySelector('.popup__formfield-input_link');