import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
// import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api.js';
import {
  cardsContainer,
  reductionButton,
  addCardButton,
  inputName,
  inputJob,
  inputPlace,
  inputLink,
  // validationConfig,
  editAvatarButton
} from '../utils/constants.js';


//getting api
const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-20/",
  headers: {
    "Content-Type": "application/json",
    authorization: "3b5720a2-0d91-4d09-b4f0-91da5b71591f",
  },
});

// this is all about user info
const userInfo = new UserInfo('.profile__title', '.profile__text', '.profile__image');

api.getUserInfo()
  .then(res => {
    userInfo.setUserInfo(res.name, res.about)
    userInfo.setAvatar(res.avatar)
  })
  .catch((error) => {
    console.log(error);
  });

const profileEditPopup = new PopupWithForm({
  containerSelector: '.popup_reduction-window',
  handleSubmit: ({ ['name-input']: name, ['about']: about }) => {
    api.editUserInfo(name, about)
      .then(res => userInfo.setUserInfo(res.name, res.about))
      .catch((error) => {
        console.log(error);
      });
  }
});

profileEditPopup.setEventListeners();

reductionButton.addEventListener('click', () => {
  inputName.value = userInfo.getUserInfo().name;
  inputJob.value = userInfo.getUserInfo().about;
  profileEditPopup.open();
});

const avatarEditPopup = new PopupWithForm({
  containerSelector: '.popup_download-avatar',
  handleSubmit: ({ ['place-avatar']: avatar }) => {
    api.editAvatar(avatar)
      .then(res => userInfo.setAvatar(res.avatar))
      .catch((error) => {
        console.log(error);
      });
  }
});

avatarEditPopup.setEventListeners();

editAvatarButton.addEventListener('click', () => {
  avatarEditPopup.open();
});


// this is all about cards
const section = new Section({
  items: {}, renderer: (item) => { createCard(item, '#temp', clickOnCard) },
}, cardsContainer);

function createCard(item, cardSelector, handleCardClick) {
  const card = new Card(item, cardSelector, handleCardClick);
  const cardElement = card.generateCard();
  addElement(cardElement);
}

function addElement(cardElement) {
  section.addItem(cardElement);
}

const popupBigPicture = new PopupWithImage('.popup_big-window-picture');
popupBigPicture.setEventListeners();

function clickOnCard(name, link) {
  popupBigPicture.open(name, link);
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
  addCardPopup.open();
});


// this is rendering
Promise.all([
  api.getUserInfo(),
  api.getInitialCards()
])
  .then(([user, initialCards]) => {
    userInfo.setUserInfo(user.name, user.about);
    userInfo.setAvatar(user.avatar);
    section.setRenderedItems(initialCards);
    section.renderer(initialCards);
  })
  .catch((error) => {
    console.log(error);
  });