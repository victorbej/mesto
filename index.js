const popup = document.querySelector('.popup');
const popupReductionButton = document.querySelector('.profile__reduction-button');
const popupCloseButton = document.querySelector('.popup__close-button');
const profileTitle = document.querySelector('.profile__title');
const profileText = document.querySelector('.profile__text');
const profileTitleInput = document.querySelector('.popup__formfield-input_name');
const profileTextInput = document.querySelector('.popup__formfield-input_job');
const formElement = document.querySelector('.popup__container');
const popupEdit = document.querySelector('.popup__edit');
const popupSaveButton = document.querySelector('.popup__save-button');

function activateReductionButton() {
    popup.classList.add('popup_opened');
};

function deactivateReductionButton() {
    popup.classList.remove('popup_opened');
};

function deactivateSaveButton() {
    popup.classList.remove('popup_opened');
};

function insertProfileInfo () {
    profileTitleInput.value = profileTitle.textContent;
    profileTextInput.value = profileText.textContent;
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileTitle.textContent = profileTitleInput.value;
    profileText.textContent = profileTextInput.value;
}


insertProfileInfo();
popupCloseButton.addEventListener('click', deactivateReductionButton);
popupReductionButton.addEventListener('click', activateReductionButton); 
popupSaveButton.addEventListener('click', deactivateSaveButton);
formElement.addEventListener('submit', formSubmitHandler);
