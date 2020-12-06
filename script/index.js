const profileTitle = document.querySelector('.profile__title');
const profileText = document.querySelector('.profile__text');
const profileTitleInput = document.querySelector('.popup__formfield-input_name');
const profileTextInput = document.querySelector('.popup__formfield-input_job');

const popupReductionWindow = document.querySelector('.popup_reduction-window');
const popupCloseButton = document.querySelector('.popup__close-button');
const popupReductionButton = document.querySelector('.profile__reduction-button');
const formElementProfile = document.querySelector('.popup__container_profile');

const popupInitialCardsWindow = document.querySelector('.popup_initial-cards-window');
const popupAddButton = document.querySelector('.profile__add-button');
const popupAddButtonClose = popupInitialCardsWindow.querySelector('.popup__close-button');
const formElementPlace = popupInitialCardsWindow.querySelector('.popup__container_place');

const galleryLists = document.querySelector('.gallery__lists');
const inputPlace = document.querySelector('.popup__formfield-input_place');
const inputLink = document.querySelector('.popup__formfield-input_link');
const templateNode = document.querySelector('#temp');

const initialCards = [
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

function activateReductionButton() {
    popupReductionWindow.classList.add('popup_opened');
    profileTitleInput.value = profileTitle.textContent;
    profileTextInput.value = profileText.textContent;
};

function deactivateReductionButton() {
    popupReductionWindow.classList.remove('popup_opened');
};

function activateAddButton() {
    popupInitialCardsWindow.classList.add('popup_opened');
};

function deactivateAddButton() {
    popupInitialCardsWindow.classList.remove('popup_opened');
};

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = profileTitleInput.value;
    profileText.textContent = profileTextInput.value;
    popupReductionWindow.classList.remove('popup_opened');
}

function formSubmitHandlerCards(evt) {
    evt.preventDefault();
    popupInitialCardsWindow.classList.remove('popup_opened');
}

function renderList() {
    const listItems = initialCards.map(composeItem);
    galleryLists.append(...listItems);
}

function composeItem(item) {
    const tempElement = templateNode.content.cloneNode(true);
    const headerElement = tempElement.querySelector('.gallery__list-title');
    const linkElement = tempElement.querySelector('.gallery__list-image');
    headerElement.textContent = item.name;
    linkElement.src = item.link;
    return tempElement;
}

popupCloseButton.addEventListener('click', deactivateReductionButton);
popupAddButtonClose.addEventListener('click', deactivateAddButton);
popupAddButton.addEventListener('click', activateAddButton);
popupReductionButton.addEventListener('click', activateReductionButton);
formElementProfile.addEventListener('submit', formSubmitHandler);
formElementPlace.addEventListener('submit', formSubmitHandlerCards);
renderList();