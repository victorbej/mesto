const popupBigWindow = document.querySelector('.popup_big-window-picture');
const pictureItem = popupBigWindow.querySelector('.popup__picture');
const pictureTextItem = popupBigWindow.querySelector('.popup__picture-text');
const bigWindowCloseButton = popupBigWindow.querySelector('.popup__close-button');

const profileTitle = document.querySelector('.profile__title');
const profileText = document.querySelector('.profile__text');
const profileTitleInput = document.querySelector('.popup__formfield-input_name');
const profileTextInput = document.querySelector('.popup__formfield-input_job');
const popupReductionWindow = document.querySelector('.popup_reduction-window');
const popupReductionButton = document.querySelector('.profile__reduction-button');
const formElementProfile = document.querySelector('.popup__container_profile');

const popupInitialCardsWindow = document.querySelector('.popup_initial-cards-window');
const popupAddButton = document.querySelector('.profile__add-button');
const popupAddButtonClose = popupInitialCardsWindow.querySelector('.popup__close-button');
const formElementPlace = popupInitialCardsWindow.querySelector('.popup__container_place')

const inputPlace = document.querySelector('.popup__formfield-input_place');
const inputLink = document.querySelector('.popup__formfield-input_link');

const cardsContainer = document.querySelector('.gallery__lists')

const popupCloseButton = document.querySelector('.popup__close-button');

export { popupInitialCardsWindow, popupAddButton, popupAddButtonClose, formElementPlace };

export { popupBigWindow, pictureTextItem, pictureItem, bigWindowCloseButton };

export { profileTitle, profileText, profileTitleInput, profileTextInput, popupReductionButton, popupReductionWindow, formElementProfile };

export { popupCloseButton };

export { cardsContainer };

export { inputPlace, inputLink };