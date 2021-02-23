//styles
import './index.css';

//scripts
import Api from '../components/Api.js';
import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';

//constants
import {
  nameSelector,
  aboutSelector,
  avatarSelector,
} from '../utils/constants.js';


//card
function createCard(data, cardSelector, userData) {
  const card = new Card(
    data,
    cardSelector,
    {
      handleCardClick: (name, link) => {
        popupBigPicture.open(name, link);
      },
      handleCardDelete: (element, cardId) => {
        deleteCardPopup.open({ element, cardId });
      },
      handleCardLike: (cardId) => {
        if (card.checkLike()) {
          api.deleteLike(cardId)
            .then((data) => {
              card.setLike(data);
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          api.addLike(cardId)
            .then((data) => {
              card.setLike(data);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      },
      userData: userData
    });
  return card;
};

//classes
const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-20/",
  headers: {
    "Content-Type": "application/json",
    authorization: "3b5720a2-0d91-4d09-b4f0-91da5b71591f",
  },
});

const userInfo = new UserInfo({ nameSelector, aboutSelector, avatarSelector });

const popupBigPicture = new PopupWithImage('.popup_big-window-picture');