const profileTitle = document.querySelector('.profile__title');
const profileText = document.querySelector('.profile__text');
const profileTitleInput = document.querySelector('.popup__formfield-input_name');
const profileTextInput = document.querySelector('.popup__formfield-input_job');

const popup = document.querySelector('.popup');
const popupReductionWindow = document.querySelector('.popup_reduction-window');
const popupCloseButton = document.querySelector('.popup__close-button');
const popupReductionButton = document.querySelector('.profile__reduction-button');
const formElementProfile = document.querySelector('.popup__container_profile');

const popupInitialCardsWindow = document.querySelector('.popup_initial-cards-window');
const popupAddButton = document.querySelector('.profile__add-button');
const popupAddButtonClose = popupInitialCardsWindow.querySelector('.popup__close-button');
const formElementPlace = popupInitialCardsWindow.querySelector('.popup__container_place');
const inputTextName = popupInitialCardsWindow.querySelector('.popup__formfield-input popup__formfield-input_place');
const inputTextLink = popupInitialCardsWindow.querySelector('.popup__formfield-input popup__formfield-input_link');

const galleryLists = document.querySelector('.gallery__lists');
const inputPlace = document.querySelector('.popup__formfield-input_place');
const inputLink = document.querySelector('.popup__formfield-input_link');
const templateNode = document.querySelector('#temp');

const popupBigWindow = document.querySelector('.popup_big-window-picture');
const bigWindowCloseButton = popupBigWindow.querySelector('.popup__close-button');
const pictureItem = popupBigWindow.querySelector('.popup__picture');
const pictureTextItem = popupBigWindow.querySelector('.popup__picture-text');

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

function popupOpen(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function packReductionButton() {
    profileTitleInput.value = profileTitle.textContent;
    profileTextInput.value = profileText.textContent;
};

function packBigWindow(item) {
    pictureItem.src = item.link;
    pictureItem.alt = item.name;
    pictureTextItem.textContent = item.name;
}

function addDeleteListenerToItem(item) {
    const removeButton = item.querySelector('.gallery__delete-button');
    removeButton.addEventListener('click', deleteItem);
}

function deleteItem(event) {
    event.target.closest('.gallery__list').remove();
}

function composeItem(item) {
    const tempElement = templateNode.content.cloneNode(true);
    const headerElement = tempElement.querySelector('.gallery__list-title');
    const linkElement = tempElement.querySelector('.gallery__list-image');
    headerElement.textContent = item.name;
    linkElement.src = item.link;
    linkElement.alt = item.name;
    tempElement.querySelector('.gallery__like-button').addEventListener('click', function (evt) {
        evt.target.classList.toggle('gallery__like-button_active');
    });
    linkElement.addEventListener('click', () => {
        packBigWindow(item);
        popupOpen(popupBigWindow);
    });
    addDeleteListenerToItem(tempElement);
    return tempElement;
}

function renderList() {
    const listItems = initialCards.map(composeItem);
    galleryLists.append(...listItems);
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = profileTitleInput.value;
    profileText.textContent = profileTextInput.value;
    closePopup(popupReductionWindow);
}

function formSubmitHandlerCards(evt) {
    evt.preventDefault();
    const inputTextName = inputPlace.value;
    const inputTextLink = inputLink.value;
    const item = composeItem({ name: inputTextName, link: inputTextLink })
    galleryLists.prepend(item);
    inputPlace.value = '';
    inputLink.value = '';
    closePopup(popupInitialCardsWindow);
}

popupReductionButton.addEventListener('click', () => {
    popupOpen(popupReductionWindow);
    packReductionButton()
})

popupAddButton.addEventListener('click', () => popupOpen(popupInitialCardsWindow));
popupCloseButton.addEventListener('click', () => closePopup(popupReductionWindow));
popupAddButtonClose.addEventListener('click', () => closePopup(popupInitialCardsWindow));
bigWindowCloseButton.addEventListener('click', () => closePopup(popupBigWindow));

formElementProfile.addEventListener('submit', formSubmitHandler);
formElementPlace.addEventListener('submit', formSubmitHandlerCards);

renderList();