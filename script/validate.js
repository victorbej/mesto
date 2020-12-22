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

function setButtonState(button, isActive, config) {
  if (isActive) {
    button.classList.remove(config.buttonInvalidClass);
    button.disabled = false;
  } else {
    button.classList.add(config.buttonInvalidClass);
    button.disabled = true;
  }
}

function setEventListeners(form, config) {
  const inputsList = form.querySelectorAll(config.inputSelector);
  const submitButton = form.querySelector(config.submitButtonSelector);

  inputsList.forEach((input) => {
    input.addEventListener('input', () => {
      checkInputValidity(form, input, config);
      setButtonState(submitButton, form.checkValidity(), config);
    });
  });
}

function enableValidation(config) {
  const forms = document.querySelectorAll(config.formSelector);
  forms.forEach((form) => {
    setEventListeners(form, config);

    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    const submitButton = form.querySelector(config.submitButtonSelector);
    setButtonState(submitButton, form.checkValidity(), config)
  });
}

function toResetValididation(popup, config) {
  const renderedForm = popup.querySelector(config.formSelector);
  const renderedInput = renderedForm.querySelectorAll(config.inputSelector);
  renderedInput.forEach((input) => {
    hideError(renderedForm, input, config);
  })
}

const validationConfig = {
  formSelector: '.popup__formfield',
  inputSelector: '.popup__formfield-input',
  inputInvalidClass: 'popup__formfield-input_error',
  submitButtonSelector: '.popup__save-button',
  buttonInvalidClass: 'popup__save-button_invalid'
};

enableValidation(validationConfig);
// Render of "enableValidation(validationConfig);" added to "packReductionButton()"