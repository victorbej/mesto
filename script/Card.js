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


const popupBigWindow = document.querySelector('.popup_big-window-picture');
const bigWindowCloseButton = popupBigWindow.querySelector('.popup__close-button');
const pictureItem = popupBigWindow.querySelector('.popup__picture');


class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }
    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.gallery__list')
            .cloneNode(true)

        return cardElement;
    }
    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.gallery__list-title').textContent = this._name;
        this._element.querySelector('.gallery__list-image').src = this._link;

        return this._element;
    }
    _handleOpenPopup() {
        pictureItem.src = this._link;
        popupBigWindow.classList.add('popup_opened');
    }

    _handleClosePopup() {
        pictureItem.src = '';
        popupBigWindow.classList.remove('popup_opened');
    }
    _setEventListeners() {
        this._element.addEventListener('click', () => {
          this._handleOpenPopup();
        });
        bigWindowCloseButton.addEventListener('click', () => {
          this._handleClosePopup();
        })
      }
}
initialCards.forEach((item) => {
    const card = new Card(item, '.template');
    const cardElement = card.generateCard();

    document.querySelector('.gallery__lists').prepend(cardElement);
});



// export { initialCards };