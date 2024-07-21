const movieListEl = document.querySelector('.movie__list');
const APIKEY = "f1babf83"
const searchInput = "input"
async function main() {
    const movies = await fetch(`https://omdbapi.com/?s=${searchInput.value}&apikey=${APIKEY}
    `);
    const moviesData = await movies.json();
    movieListEl.innerHTML = moviesData.Search.map((movie) => movieHTML(movie)).join("");
}

main();


function showMovie(movie) {
    localStorage.setItem("movie", movie);
    window.location.href = `${window.location.origin}/movie.html`
}



function movieHTML(movie) {
            return `<div class="movie__card">
            <div class="movie__card--container">
                <div class="movie__description">
                    <div class="movie__title">
                        <h3>${movie.Title}</h4>
                    </div>
                    <div class="movie__year">
                        <p>${movie.Year}</p>
                    </div>
                    <div class="movie__poster">
                        <img src=${movie.Poster}>
                    </div>
                </div>    
            </div>
        </div>`
        
}


function openMenu() {
    document.body.classList += "menu--open"
}

function closeMenu() {
    document.body.classList.remove('menu--open')
}