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

const profileEditPopup = new PopupWithForm({
  containerSelector: popupEdit,
  handleSubmit: (input) => {
    toLoad(popupEdit, true);
    api.editUserInfo({
      name: input['name-input'],
      about: input['about']
    })
      .then(data => {
        userInfo.setUserInfo(data._id, data.name, data.about, data.avatar);
        profileEditPopup.close();
        toLoad(popupEdit, false);
      });
  }
});

const avatarEditPopup = new PopupWithForm({
  containerSelector: popupEditAvatar,
  handleSubmit: (input) => {
    toLoad(popupEdit, true);
    api.editAvatar(input['place-avatar'])
      .then(data => {
        userInfo.setUserInfo(data._id, data.name, data.about, data.avatar);
        avatarEditPopup.close();
        toLoad(popupEdit, false);
      });

  }
});

const addCardPopup = new PopupWithForm({
  containerSelector: pupupInitialCards,
  handleSubmit: (input) => {
    toLoad(pupupInitialCards, true);
    api.addPlaceCard({
      name: input['place-input'],
      link: input['place-link']
    })
      .then(data => {
        const card = createCard(data, '#temp', userInfo.getUserInfo());
        const cardElement = card.generateCard();
        cardList.addNewItem(cardElement);
        toLoad(pupupInitialCards, false);
        addCardPopup.close();
      });
  }
});

const deleteCardPopup = new PopupWithConfirmDelete({
  containerSelector: popupDelete,
  handleSubmit: ({ element, cardId }) => {
    toLoad(popupDelete, true);
    api.deletePlaceCard(cardId)
      .then(() => {
        element.remove();
        toLoad(popupDelete, false);
        deleteCardPopup.close();
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

const cardList = new Section({
  data: {},
  renderer: (item, userData) => {
    const card = createCard(item, '#temp', userData);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
}, cardsContainer
);

//promise
Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([initalCards, userResult]) => {
    userInfo.setUserInfo(userResult._id, userResult.name, userResult.about, userResult.avatar);
    cardList.setRenderedItems(initalCards);
    cardList.renderer(userResult);
  })
  .catch((error) => {
    console.log(error);
  });
