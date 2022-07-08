
const cardsContainer = document.querySelector('.elements');
const template = document.querySelector('.element__form');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddCard = document.querySelector('.profile__add-button');

const modalWindow = document.querySelector('[name="popup-information"]');
const modalWindowAdd = document.querySelector('[name="popup-cards"]');

const modalCloseBtn = modalWindow.querySelector('[name="information__close-button"]');
const cardsButtonClose = modalWindowAdd.querySelector('[name="popup-cards__close-button"]');


const formElement = document.querySelector('[name="popup-informationform"]');
const formElementAdd = document.querySelector('[name="popup-cardsform"]');

const nameInput = document.querySelector('.profile__title');
const jobInput = document.querySelector('.profile__text');
const formName = document.querySelector('[name="form__name"]');
const formJob = document.querySelector('[name="form__description"]');

const buttonSave = document.querySelector('.popup__button');

const modalImageOpen = document.querySelector('.popup-photo');
const imagePopup = document.querySelector('.popup-photo__image');
const textImage = document.querySelector('.popup-photo__description');
const btnImageClose = document.querySelector('.popup-photo__close');
const buttonSelectors = {
    formSelector: '.popup__form',
    submitButtonSelector: '.popup__button',
};

function openModalProfile() {
  
    formName.value = nameInput.textContent;
    formJob.value = jobInput.textContent;
    toggleWindowButton(modalWindow, buttonSelectors);
    openWindow(modalWindow);
}
function openModalCard() {
    toggleWindowButton(modalWindowAdd,buttonSelectors);
    openWindow(modalWindowAdd);
}


function openWindow(window) {
    resetForm(window);
    window.classList.add('popup_is-active');
    
    document.addEventListener('keydown', (event) => keydownEsc(event, window));
}

function closeWindow(window) {

    document.removeEventListener('keydown', (event) => keydownEsc(event, window));
    window.classList.remove('popup_is-active');
}

function keydownEsc(event, window) {
    if (event.code === 'Escape') {
        closeWindow(window);
    }
}
function closeModalProfile() {
    closeWindow(modalWindow);
}

function closeModalCardAdd() {
    closeWindow(modalWindowAdd);
}

function closeElementImage() {
    closeWindow(modalImageOpen);
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    nameInput.textContent = formName.value;
    jobInput.textContent = formJob.value;
    closeWindow(modalWindow);
}

function handleAddCardFormSubmit(evt) {
    evt.preventDefault();
    const inputValue = document.querySelector('[name="form__title"]');
    const photoValue = document.querySelector('[name="form__link"]');
    const newObject = { name: inputValue.value, link: photoValue.value };
    const newCardName = getElement(newObject);
    cardsContainer.prepend(newCardName);
    closeWindow(modalWindowAdd);
    evt.target.reset();
}

function render() {
    const cards = initialCards.map(getElement);
    cardsContainer.append(...cards);

}


function getElement(item) {
    const elementTemplate = template.content.cloneNode(true);
    const name = elementTemplate.querySelector('.element__title');
    const buttonRemove = elementTemplate.querySelector('.element__delete');
    const photo = elementTemplate.querySelector('.element__image');

    name.textContent = item.name;
    photo.src = item.link;
    photo.alt = item.name;

    buttonRemove.addEventListener('click', removeElement);

    const buttonLike = elementTemplate.querySelector('.element__like');
    buttonLike.addEventListener('click', handleLikeCard);
    function handleLikeCard() {
        buttonLike.classList.toggle('element__like_is-active');
    }

    const elementImageOpen = elementTemplate.querySelector('.element');
    elementImageOpen.querySelector('.element__image').addEventListener('click', handleOpenImage);
    function handleOpenImage() {
        imagePopup.alt = item.name;
        imagePopup.src = item.link;
        textImage.textContent = item.name;

        openWindow(modalImageOpen);

    }
    return elementTemplate;


}
render();

function removeElement(evt) {
    const element = evt.target.closest('.element');
    element.remove();

}


function handleFormSubmit(event, form) {
    event.preventDefault();
}

function onOverlayClick(event) {

    if (event.target === event.currentTarget) {

        closeWindow(modalWindow);
        closeWindow(modalWindowAdd);
        closeElementImage();

    }
};

function resetForm(window) {
    const inputs = window.querySelectorAll('.popup__input');
    inputs.forEach((input) => {
        const errorNode = window.querySelector(`#${input.id}-error`);
        if (errorNode.classList.contains('popup__error_visible')) {
            errorNode.classList.remove('popup__error_visible');
            input.value = '';
        }
    }
    )
};

modalWindow.addEventListener('click', onOverlayClick);
modalWindowAdd.addEventListener('click', onOverlayClick);
modalImageOpen.addEventListener('click', onOverlayClick);
buttonEditProfile.addEventListener('click', openModalProfile);
buttonAddCard.addEventListener('click', openModalCard);
modalCloseBtn.addEventListener('click', closeModalProfile);
cardsButtonClose.addEventListener('click', closeModalCardAdd);
formElement.addEventListener('submit', handleProfileFormSubmit);
formElementAdd.addEventListener('submit', handleAddCardFormSubmit);
btnImageClose.addEventListener('click', closeElementImage);




