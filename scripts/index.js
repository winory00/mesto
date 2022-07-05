
const cardsContainer = document.querySelector('.elements');
const template = document.querySelector('.element__form');
const editButtonLink = document.querySelector('.profile__edit-button');
const addButtonLink = document.querySelector('.profile__add-button');

const modalWindow = document.querySelector('.popup-information');
const modalWindowAdd = document.querySelector('.popup-cards');

const modalCloseBtn = modalWindow.querySelector('.popup-information__close');
const closeCardsButton = modalWindowAdd.querySelector('.popup-cards__close');


const formElement = document.querySelector('[name="popup-informationform"]');
const formElementAdd = document.querySelector('[name="popup-cardsform"]');

const nameInput = document.querySelector('.profile__title');
const jobInput = document.querySelector('.profile__text');
const formName = document.querySelector('[name="form__name"]');
const formJob = document.querySelector('[name="form__description"]');

const saveBtn = document.querySelector('.popup__button');

const modalImageOpen = document.querySelector('.popup-photo');
const imagePopup = document.querySelector('.popup-photo__image');
const textImage = document.querySelector('.popup-photo__description');
const closeBtnImage = document.querySelector('.popup-photo__close');

function openModalProfile() {

    formName.value = nameInput.textContent;
    formJob.value = jobInput.textContent;
    openWindow(modalWindow);
}
function openModalCard() {
    openWindow(modalWindowAdd);
}


function openWindow(window) {
    window.classList.add('popup_is-active');
    document.addEventListener('keydown', (event) => keydownEsc(event, window));
}

function closeWindow(window) {

    document.removeEventListener('keydown', (event) => keydownEsc(event, window));
    resetForm(window);
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
    evt.target.reset(handleAddCardFormSubmit);
}

function render() {
    const cards = initialCards.map(getElement);
    cardsContainer.append(...cards);

}


function getElement(item) {
    const getElementTemplate = template.content.cloneNode(true);
    const name = getElementTemplate.querySelector('.element__title');
    const removeBtn = getElementTemplate.querySelector('.element__delete');
    const photo = getElementTemplate.querySelector('.element__image');

    name.textContent = item.name;
    photo.src = item.link;
    photo.alt = item.name;

    removeBtn.addEventListener('click', removeElement);

    const likeButton = getElementTemplate.querySelector('.element__like');
    likeButton.addEventListener('click', handleLikeCard);
    function handleLikeCard() {
        likeButton.classList.toggle('element__like_is-active');
    }

    const openElementImage = getElementTemplate.querySelector('.element');
    openElementImage.querySelector('.element__image').addEventListener('click', handleOpenImage);
    function handleOpenImage() {
        imagePopup.alt = item.name;
        imagePopup.src = item.link;
        textImage.textContent = item.name;

        openWindow(modalImageOpen);

    }
    return getElementTemplate;


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

modalWindow.addEventListener('click', onOverlayClick);
modalWindowAdd.addEventListener('click', onOverlayClick);
modalImageOpen.addEventListener('click', onOverlayClick);
editButtonLink.addEventListener('click', openModalProfile);
addButtonLink.addEventListener('click', openModalCard);
modalCloseBtn.addEventListener('click', closeModalProfile);
closeCardsButton.addEventListener('click', closeModalCardAdd);
formElement.addEventListener('submit', handleProfileFormSubmit);
formElementAdd.addEventListener('submit', handleAddCardFormSubmit);
closeBtnImage.addEventListener('click', closeElementImage);




