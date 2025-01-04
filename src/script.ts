const backButton : HTMLElement = document.querySelector('.back-button')
const overlay : HTMLElement = document.querySelector('.overlay')
const mainPage : HTMLElement = document.querySelector('.main-page')
const buyButton : HTMLElement = document.querySelector('.overlay-button')
const lightModeToggleText :HTMLElement = document.querySelector('.light-mode-text ')

const overlayBook : HTMLElement = document.querySelector('.overlay-book')
const onBookTitle : HTMLElement = document.querySelector('.overlay-book-book-title')
const onBookAuthor : HTMLElement = document.querySelector('.overlay-book-book-author')

const bookTitle : HTMLElement = document.querySelector('.overlay-info-title')
const bookAuthor : HTMLElement = document.querySelector('.overlay-info-author')
const bookParagraph : HTMLElement = document.querySelector('.overlay-info-paragraph')

const audienceFact : HTMLElement = document.querySelector('.audience-fact-text')
const pagesFact : HTMLElement = document.querySelector('.pages-fact-text')
const publishedFact : HTMLElement = document.querySelector('.published-fact-text')
const publisherFact : HTMLElement = document.querySelector('.publisher-fact-text')

const checkbox :HTMLInputElement = document.querySelector('.checkbox')
const mainPageHeader : HTMLElement = document.querySelector('.page-header')


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

let light : string = '#f8f8f8'
let dark : string = '#222222'


if(checkbox.checked === false) {
        
    lightMode();
    console.log("Light Mode Enabled.")
    checkbox.checked = false

} else {

    darkMode();
    console.log("Dark Mode Enabled.")
    checkbox.checked = true

} 





interface bookObject {
    id: number;

    title: string;
    author: string;
    publisher: string;
    year: number;
    pages: number;
    plot: string;
    audience: string;
    color: string;
}

type allBooks = bookObject[];




async function getBook(bookId: number) {
    const url = 'https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books';
    const options = {
        method: 'GET',
    };

    try {
        const response = await fetch(url, options);
        const allBooks: allBooks = await response.json();
        const clickedBook = allBooks.find((book : bookObject)  => book.id === bookId);

        
        overlayBook.style.background = `${clickedBook.color}`
        onBookTitle.innerText = `${clickedBook.title}`
        onBookAuthor.innerText = `${clickedBook.author}`

        bookTitle.innerText = `${clickedBook.title}`
        bookAuthor.innerText = `${clickedBook.author}`
        bookParagraph.innerText = `${clickedBook.plot}`

        audienceFact.innerText = `${clickedBook.audience}`
        pagesFact.innerText = `${clickedBook.pages}`
        publishedFact.innerText = `${clickedBook.year}`
        publisherFact.innerText = `${clickedBook.publisher}`
      } catch (error) {
        console.error(error);
      }
    
}


function goBack() {

   overlay.style.display = 'none';
   mainPage.style.display = 'flex'

}




async function bookClick(event: Event) {
    const inspectedBook = event.currentTarget as HTMLElement;
    console.log(inspectedBook)
    const bookId = inspectedBook.id

    if(bookId === "Book1") {
        await getBook(1);
    } else if(bookId === "Book2") {
        await getBook(2)
    } else if(bookId === "Book3") {
        await getBook(3)
    } else if(bookId === "Book4") {
        await getBook(4)
    } else if(bookId === "Book5") {
        await getBook(5)
    } else if(bookId === "Book6") {
        await getBook(6)
    } else if(bookId === "Book7") {
        await getBook(7)
    } else if(bookId === "Book8") {
        await getBook(8)
    } else {
        console.error('Something has gone wrong...')
    }

    mainPage.style.display = 'none'
    overlay.style.display = 'flex'

    

}



function lightMode() {

    mainPageHeader.style.color = dark
    bookTitle.style.color = dark
    bookAuthor.style.color = dark
    bookParagraph.style.color = dark
    buyButton.style.color = light

    buyButton.style.background = dark
    mainPage.style.background = light
    overlay.style.background = light

}

function darkMode() {

    mainPageHeader.style.color = light
    bookTitle.style.color = light
    bookAuthor.style.color = light
    bookParagraph.style.color = light
    buyButton.style.color = dark

    buyButton.style.background = light
    mainPage.style.background = dark
    overlay.style.background = dark

}

let isAnimating : boolean = false;

function lightButtonToggle() {

    if (isAnimating) return

    isAnimating = true;
    checkbox.disabled = true;

    lightModeToggleText.style.opacity = '1'

    if(checkbox.checked === false) {

        lightModeToggleText.style.color = dark
        lightModeToggleText.innerText = 'Lightmode enabled!'
        
        lightMode();
        checkbox.checked = false

        

    } else {

        lightModeToggleText.style.color = light
        lightModeToggleText.innerText = 'Darkmode enabled!'

        darkMode();
        checkbox.checked = true

    } 

    lightModeToggleText.classList.add('slideUpFadeAnimation')

    setTimeout(() => {
        lightModeToggleText.classList.remove('slideUpFadeAnimation');
        lightModeToggleText.style.opacity = '0'
        isAnimating = false
        checkbox.disabled = false;
    }, 300); 
}







checkbox.addEventListener('change', lightButtonToggle)
backButton.addEventListener('click', goBack)

madeline?.addEventListener('click', bookClick);
theTaleOfPeterRabbit?.addEventListener('click', bookClick);
haroldAndThePurpleCrayon?.addEventListener('click', bookClick);
whereTheWildThingsAre?.addEventListener('click', bookClick);
goodnightMoon?.addEventListener('click', bookClick);
aWrinkleInTime?.addEventListener('click', bookClick);
theVeryHungryCaterpillar?.addEventListener('click', bookClick);
charlottesWeb?.addEventListener('click', bookClick);