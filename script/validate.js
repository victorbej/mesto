function showError(form, input, config) {
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = input.validationMessage;
  input.classList.add(config.inputInvalidClass);
}

function hideError(form, input, config) {
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = '';
  input.classList.remove(config.inputInvalidClass);
}

function checkInputValidity(form, input, config) {
  input.setCustomValidity('');

  if (!input.validity.valid) {
    showError(form, input, config);
  } else {
    hideError(form, input, config);
  }
}

function setEventListeners(form, config) {
  const inputsList = form.querySelectorAll(config.inputSelector);

  inputsList.forEach((input) => {
    input.addEventListener('input', () => {
      checkInputValidity(form, input, config);
    });
  });
}

function enableValidation(config) {
  const forms = document.querySelectorAll(config.formSelector);
  forms.forEach((form) => {
    setEventListeners(form, config);
  });
}

const validationConfig = {
  formSelector: '.popup__formfield',
  inputSelector: '.popup__formfield-input',
  inputInvalidClass: 'popup__formfield-input_error'
};

enableValidation(validationConfig);