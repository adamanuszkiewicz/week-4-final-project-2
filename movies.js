const movieListEl = document.querySelector('.movie__list');
const Title = localStorage.getItem("imdbId")

async function onSearchChange(event) {
    const id = event.target.value;
    renderMovies(Title)
}

async function renderMovies(Title) {
    const movies = await fetch(`https://omdbapi.com/?apikey=f1babf83&s=fast${Title}`)
    const moviesData = await movies.json();
    movieListEl.innerHTML = moviesData.map(movie => movieHTML(movie)).join('');
}

function movieHTML(movie) {
    return `
        <div class="movie">
            <div class="movie__title">
                ${movie.Title}
            </div>
            <div class="movie__year">
                ${movie.Year}
            </div>
        </div>`
}