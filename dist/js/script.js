var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const backButton = document.querySelector('.back-button');
const overlay = document.querySelector('.overlay');
const mainPage = document.querySelector('.main-page');
const buyButton = document.querySelector('.overlay-button');
const lightModeToggleText = document.querySelector('.light-mode-text ');
const overlayBook = document.querySelector('.overlay-book');
const onBookTitle = document.querySelector('.overlay-book-book-title');
const onBookAuthor = document.querySelector('.overlay-book-book-author');
const bookTitle = document.querySelector('.overlay-info-title');
const bookAuthor = document.querySelector('.overlay-info-author');
const bookParagraph = document.querySelector('.overlay-info-paragraph');
const audienceFact = document.querySelector('.audience-fact-text');
const pagesFact = document.querySelector('.pages-fact-text');
const publishedFact = document.querySelector('.published-fact-text');
const publisherFact = document.querySelector('.publisher-fact-text');
const checkbox = document.querySelector('.checkbox');
const mainPageHeader = document.querySelector('.page-header');
///////////////book selectors//////////////////
const goodnightMoon = document.querySelector('#Book1');
const theVeryHungryCaterpillar = document.querySelector('#Book2');
const aWrinkleInTime = document.querySelector('#Book3');
const haroldAndThePurpleCrayon = document.querySelector('#Book4');
const whereTheWildThingsAre = document.querySelector('#Book5');
const madeline = document.querySelector('#Book6');
const theTaleOfPeterRabbit = document.querySelector('#Book7');
const charlottesWeb = document.querySelector('#Book8');
//////////////////////////////////
let light = '#f8f8f8';
let dark = '#222222';
if (checkbox.checked === false) {
    lightMode();
    console.log("Light Mode Enabled.");
    checkbox.checked = false;
}
else {
    darkMode();
    console.log("Dark Mode Enabled.");
    checkbox.checked = true;
}
function getBook(bookId) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books';
        const options = {
            method: 'GET',
        };
        try {
            const response = yield fetch(url, options);
            const allBooks = yield response.json();
            const clickedBook = allBooks.find((book) => book.id === bookId);
            overlayBook.style.background = `${clickedBook.color}`;
            onBookTitle.innerText = `${clickedBook.title}`;
            onBookAuthor.innerText = `${clickedBook.author}`;
            bookTitle.innerText = `${clickedBook.title}`;
            bookAuthor.innerText = `${clickedBook.author}`;
            bookParagraph.innerText = `${clickedBook.plot}`;
            audienceFact.innerText = `${clickedBook.audience}`;
            pagesFact.innerText = `${clickedBook.pages}`;
            publishedFact.innerText = `${clickedBook.year}`;
            publisherFact.innerText = `${clickedBook.publisher}`;
        }
        catch (error) {
            console.error(error);
        }
    });
}
function goBack() {
    overlay.style.display = 'none';
    mainPage.style.display = 'flex';
}
function bookClick(event) {
    return __awaiter(this, void 0, void 0, function* () {
        const inspectedBook = event.currentTarget;
        console.log(inspectedBook);
        const bookId = inspectedBook.id;
        if (bookId === "Book1") {
            yield getBook(1);
        }
        else if (bookId === "Book2") {
            yield getBook(2);
        }
        else if (bookId === "Book3") {
            yield getBook(3);
        }
        else if (bookId === "Book4") {
            yield getBook(4);
        }
        else if (bookId === "Book5") {
            yield getBook(5);
        }
        else if (bookId === "Book6") {
            yield getBook(6);
        }
        else if (bookId === "Book7") {
            yield getBook(7);
        }
        else if (bookId === "Book8") {
            yield getBook(8);
        }
        else {
            console.error('Something has gone wrong...');
        }
        mainPage.style.display = 'none';
        overlay.style.display = 'flex';
    });
}
function lightMode() {
    mainPageHeader.style.color = dark;
    bookTitle.style.color = dark;
    bookAuthor.style.color = dark;
    bookParagraph.style.color = dark;
    buyButton.style.color = light;
    buyButton.style.background = dark;
    mainPage.style.background = light;
    overlay.style.background = light;
}
function darkMode() {
    mainPageHeader.style.color = light;
    bookTitle.style.color = light;
    bookAuthor.style.color = light;
    bookParagraph.style.color = light;
    buyButton.style.color = dark;
    buyButton.style.background = light;
    mainPage.style.background = dark;
    overlay.style.background = dark;
}
let isAnimating = false;
function lightButtonToggle() {
    if (isAnimating)
        return;
    isAnimating = true;
    checkbox.disabled = true;
    lightModeToggleText.style.opacity = '1';
    if (checkbox.checked === false) {
        lightModeToggleText.style.color = dark;
        lightModeToggleText.innerText = 'Lightmode enabled!';
        lightMode();
        checkbox.checked = false;
    }
    else {
        lightModeToggleText.style.color = light;
        lightModeToggleText.innerText = 'Darkmode enabled!';
        darkMode();
        checkbox.checked = true;
    }
    lightModeToggleText.classList.add('slideUpFadeAnimation');
    setTimeout(() => {
        lightModeToggleText.classList.remove('slideUpFadeAnimation');
        lightModeToggleText.style.opacity = '0';
        isAnimating = false;
        checkbox.disabled = false;
    }, 300);
}
checkbox.addEventListener('change', lightButtonToggle);
backButton.addEventListener('click', goBack);
madeline === null || madeline === void 0 ? void 0 : madeline.addEventListener('click', bookClick);
theTaleOfPeterRabbit === null || theTaleOfPeterRabbit === void 0 ? void 0 : theTaleOfPeterRabbit.addEventListener('click', bookClick);
haroldAndThePurpleCrayon === null || haroldAndThePurpleCrayon === void 0 ? void 0 : haroldAndThePurpleCrayon.addEventListener('click', bookClick);
whereTheWildThingsAre === null || whereTheWildThingsAre === void 0 ? void 0 : whereTheWildThingsAre.addEventListener('click', bookClick);
goodnightMoon === null || goodnightMoon === void 0 ? void 0 : goodnightMoon.addEventListener('click', bookClick);
aWrinkleInTime === null || aWrinkleInTime === void 0 ? void 0 : aWrinkleInTime.addEventListener('click', bookClick);
theVeryHungryCaterpillar === null || theVeryHungryCaterpillar === void 0 ? void 0 : theVeryHungryCaterpillar.addEventListener('click', bookClick);
charlottesWeb === null || charlottesWeb === void 0 ? void 0 : charlottesWeb.addEventListener('click', bookClick);
