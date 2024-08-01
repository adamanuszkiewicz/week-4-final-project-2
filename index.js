const movieListEl = document.querySelector('.movie__list');
const APIKEY = "f1babf83"
const searchInput = document.getElementById("searchInput")
const searchButton = document.getElementById("searchButton")
async function main() {
    const movies = await fetch(`https://omdbapi.com/?s=${searchInput.value}&apikey=${APIKEY}
    `);
    const moviesData = await movies.json();
    movieListEl.innerHTML = moviesData.Search.map((movie) => movieHTML(movie)).join("");
    
    async function fetchData() {
          try {
            const response = await fetch(`https://omdbapi.com/?s=${searchInput.value}&apikey=${APIKEY}
    `);
            if (!response.ok) throw new Error("HTTP error " + response.status);
            const data = await response.json();
            console.log(data);
          } catch (error) {
            console.error("Fetch error:", error);
          }
        }
};



searchButton.addEventListener('click', main)

searchInput.addEventListener('keyup', function(event) {
    if (event.key === "Enter") {
        searchButton.click();
    }
})



function movieHTML(movie) {
            return `<div class="movie__card">
            <div class="movie__card--container">
                <div class="movie__description">
                    <div class="movie__title">
                        <h3>${movie.Title}</h3>
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