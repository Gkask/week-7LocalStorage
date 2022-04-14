const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const movieYearOfPublication = document.querySelector('.userInputPublication');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');
const year = document.querySelector('.movieYear');


let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let publicationInStorage = localStorage.getItem('publication');
    
if(titleInStorage && imageUrlInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(51, 51, 82, 0.685), rgba(73, 49, 49, 0.582)), 
    url('${imageUrlInStorage}')`;
    year.textContent = publicationInStorage;

}
btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let yearOfPublicationInput = movieYearOfPublication.value;

    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('publication' , yearOfPublicationInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    year.textContent = yearOfPublicationInput;
    container.style.backgroundImage = `linear-gradient(rgba(51, 51, 82, 0.685), rgba(73, 49, 49, 0.582)), 
    url('${posterUrlInput}')`;
    movieTitle.value = '';
    moviePosterUrl.value = '';
    movieYearOfPublication.value = '';
});