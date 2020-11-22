let popup = document.querySelector('.popup');

let reductionButton = document.querySelector('.profile__reduction-button');
reductionButton.addEventListener('click', activateReductionButton);

function activateReductionButton() {
    popup.classList.add('popup_opened');
};

let popupCloseButton = document.querySelector('.popup__close-button');
popupCloseButton.addEventListener('click', deactivateReductionButton);

function deactivateReductionButton() {
    popup.classList.remove('popup_opened');
};

let profileTitle = document.querySelector('.profile__title');
// profileTitle.innerHTML = 'Жак-Ив Кусто'

let profileText = document.querySelector('.profile__text');
profileText.innerHTML = 'Исследователь океана';

// Находим форму в DOM
let formElement = document.querySelector('.popup__container') // Воспользуйтесь методом querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    let name = document.querySelector('.popup__formfield-input_name'); // Воспользуйтесь инструментом .querySelector()
    let job = document.querySelector('.popup__formfield-input_job');// Воспользуйтесь инструментом .querySelector()

    console.log(name.value);
    console.log(job.value);// Получите значение полей из свойства value

    profileText.insertAdjacentHTML('beforeend', 
    
    `<h1 class="profile__title">${name.value}</h1>`);

    name.value = 'Жак-Ив Кусто';
    
    // Выберите элементы, куда должны быть вставлены значения полей

    profileTitle.textContent = name.value
    profileText.textContent = job.value// Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 

let saveButton = document.querySelector('.profile__save-button');
saveButton.addEventListener('click', formElement);