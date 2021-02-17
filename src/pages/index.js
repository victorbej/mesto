import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api.js';
import {
  cardsContainer,
  reductionButton,
  addCardButton,
  inputName,
  inputJob,
  inputPlace,
  inputLink,
  validationConfig,
  // popupEditAvatar
} from '../utils/constants.js';


const userInfo = new UserInfo('.profile__title', '.profile__text', '.profile__image');

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-20/",
  headers: {
    "Content-Type": "application/json",
    authorization: "3b5720a2-0d91-4d09-b4f0-91da5b71591f",
  },
});

Promise.all([
  api.getUserInfo(),
  api.getInitialCards()
])
  .then((values) => {
    const [user, initialCards] = values;
    userInfo.getUserInfo(user.name, user.about, user.avatar);
    userInfo.setUserInfo(user)

    const section = new Section({
      items: initialCards, renderer: (item) => { createCard(item, '#temp', clickOnCard) },
    }, cardsContainer);
    section.renderer(initialCards);

    function createCard(item, cardSelector, handleCardClick) {
      const card = new Card(item, cardSelector, handleCardClick);
      const cardElement = card.generateCard();
      addElement(cardElement);
    }

    function addElement(cardElement) {
      section.addItem(cardElement);
    }

    const addCardPopup = new PopupWithForm({
      containerSelector: '.popup_initial-cards-window',
      handleSubmit: (input) => {
        api.addNewCard({
          name: input['place-input'],
          link: input['place-link']
        })
          .then(data => {
            createCard(data, '#temp', clickOnCard);
          })
          .catch((err) => {
            console.log(err);
          })
      }
    });

    addCardPopup.setEventListeners();

    addCardButton.addEventListener('click', () => {
      inputPlace.value = '';
      inputLink.value = '';
      enablePopupAddCard.toResetValididation();
      addCardPopup.open();
    });

  })
  .catch((err) => {
    console.log(err);
  })

// 'PopupWithImage' class performance, popup with picture formed and packed
const popupBigPicture = new PopupWithImage('.popup_big-window-picture');
popupBigPicture.setEventListeners();

function clickOnCard(name, link) {
  popupBigPicture.open(name, link);
}


// 'PopupWithForm' class performance for card insert popup implementation
const profileEditPopup = new PopupWithForm({
  containerSelector: '.popup_reduction-window', handleSubmit: ({ ['name-input']: name, ['about']: about }) => {
    userInfo.setUserInfo(name, about);
  }
});

profileEditPopup.setEventListeners();

reductionButton.addEventListener('click', () => {
  inputName.value = userInfo.getUserInfo().name;
  inputJob.value = userInfo.getUserInfo().about;
  enablePopupProfile.toResetValididation();
  profileEditPopup.open();
});


// 'FormValidator' class performance and it's enable for profile popup
const enablePopupProfile = new FormValidator(validationConfig, '.popup__formfield_profile');
enablePopupProfile.enableValidation();


// 'FormValidator' class performance and it's enable for card insert popup
const enablePopupAddCard = new FormValidator(validationConfig, '.popup__formfield_add-card');
enablePopupAddCard.enableValidation()