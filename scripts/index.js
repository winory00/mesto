const initialCards = [
    {
        name: 'Карелия',
        link: './images/victor-malyushev-LJdhcQugG10-unsplashКарелия.jpg'
    },
    {
        name: 'Байкал',
        link: './images/vadim-artyukhin-Z6LAUjhLzJQ-unsplashБайкал.jpg'
    },
    {
        name: 'Алтай',
        link: './images/nick-night-WxoSM-9oyc8-unsplashАлтай.jpg'
    },
    {
        name: 'Карачаево-Черкесcия',
        link: './images/kirill-pershin-1088404Карачаево.png'
    },
    {
        name: 'Эльбрус',
        link: './images/kirill-pershin-1404681-unsplashЭльбрус.png'
    },
    {
        name: 'Домбай',
        link: './images/kirill-pershin-1556355-unsplashДомбай.png'
    }
];

const cardsContainer = document.querySelector('.elements');
const template = document.querySelector('.element__form');
const editButtonLink = document.querySelector('.profile__edit-button');
const addButtonLink = document.querySelector('.profile__add-button');

const modalWindow = document.querySelector('.popup-information');
const modalWindowAdd = document.querySelector('.popup-cards');

const modalCloseBtn = modalWindow.querySelector('.popup-information__close');
const addCloseBtn = modalWindowAdd.querySelector('.popup-cards__close');


let formElement = document.querySelector('.popup-information__form');
let formElementAdd = document.querySelector('.popup-cards__form');

let nameInput = document.querySelector('.profile__title');
let jobInput = document.querySelector('.profile__text');
const formName = document.querySelector('[name="form__name"]');
const formJob = document.querySelector('[name="form__description"]');

const saveBtn = document.querySelector('.popup-cards__save');





function toggleModalWindow() {
    modalWindow.classList.toggle('popup-information_is-active');

}

function toggleModalWindowAdd() {
    modalWindowAdd.classList.toggle('popup-cards_is-active');
}

function openModalWindow() {
    toggleModalWindow();
    formName.value = nameInput.textContent;
    formJob.value = jobInput.textContent;
}
function openModalWindowAdd() {
    toggleModalWindowAdd();

}

function onOverlayClick(event) {
    console.log('event.target', event.target);
    console.log('event.currentTarget', event.currentTarget);
    if (event.target === event.currentTarget) {
        toggleModalWindow();
    }
}
function onOverlayClickAdd(event) {
    console.log('event.target', event.target);
    console.log('event.currentTarget', event.currentTarget);
    if (event.target === event.currentTarget) {
        toggleModalWindowAdd();
    }
}
 function onOverlayClickImage(event) {
    console.log('event.target', event.target);
    console.log('event.currentTarget', event.currentTarget);
    if (event.target === event.currentTarget) {
        toggleOpenElementImage();
 }}

function formSubmitHandler(evt) {
    evt.preventDefault();
    nameInput.textContent = formName.value;
    jobInput.textContent = formJob.value;
    toggleModalWindow();
}

function formSubmitAdd(evt) {
    evt.preventDefault();
    toggleModalWindowAdd();
}
function handleAddCard() {
    const inputValue = document.querySelector('[name="form__title"]').value;
    const photoValue = document.querySelector('[name="form__link"]').value;
    const newObject = { name: inputValue, link: photoValue };
    console.log(newObject);
    const newCardName = getElement(newObject);
    cardsContainer.prepend(newCardName);

}



saveBtn.addEventListener('click', handleAddCard);
modalWindow.addEventListener('click', onOverlayClick);
modalWindowAdd.addEventListener('click', onOverlayClickAdd);

editButtonLink.addEventListener('click', openModalWindow);
addButtonLink.addEventListener('click', openModalWindowAdd);

modalCloseBtn.addEventListener('click', toggleModalWindow);
addCloseBtn.addEventListener('click', toggleModalWindowAdd);

formElement.addEventListener('submit', formSubmitHandler);
formElementAdd.addEventListener('submit', formSubmitAdd);







function render() {
    const html = initialCards.map(getElement);
    cardsContainer.append(...html);

}


function getElement(item) {
    const getElementTemplate = template.content.cloneNode(true);
    const name = getElementTemplate.querySelector('.element__title');
    const removeBtn = getElementTemplate.querySelector('.element__delete');
    name.textContent = item.name;
    const link = getElementTemplate.querySelector('.element__image');
    link.src = item.link;
    removeBtn.addEventListener('click', removeElement);
    return getElementTemplate;
}
render();

function removeElement(evt) {
    const element = evt.target.closest('.element');
    element.remove();

}
const LikeButtons = cardsContainer.querySelectorAll('.element__like');
for (let i = 0; i < LikeButtons.length; i++) {

    let ActiveButton = LikeButtons[i];

    ActiveButton.addEventListener('click', function () {

        ActiveButton.classList.toggle('element__like_is-active');

    })
}


const modalImageOpen = document.querySelector('.popup-photo');
const imagePopup = document.querySelector('.popup-photo__image');
const textImage = document.querySelector('.popup-photo__description');
const closeBtnImage = document.querySelector('.popup-photo__close');


const openElementImage = cardsContainer.querySelectorAll('.element')
for (let i = 0; i < openElementImage.length; i++) {
    let Element = openElementImage[i];
    Element.addEventListener('click', function() {
        
        image = Element.querySelector('.element__image');
        imagePopup.src = image.src; 
        text = Element.querySelector('.element__title');
        textImage.textContent = text.textContent; 
        modalImageOpen.classList.toggle('popup-photo_is-active');
    })

    function closeElementImage() {
        modalImageOpen.classList.toggle('popup-photo_is-active');
    }
}
// modalImage.addEventListener('click', onOverlayClickImage);
modalImageOpen.addEventListener('click', openElementImage);
closeBtnImage.addEventListener('click', closeElementImage);

