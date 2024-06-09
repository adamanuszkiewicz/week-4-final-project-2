// const movieListEl = document.querySelector('.movie__list');
// const Title = localStorage.getItem("imdbId")

// async function onSearchChange(event) {
//     const id = event.target.value;
//     renderMovies(Title)
// }

// async function renderMovies(Title) {
//     const movies = await fetch(`https://omdbapi.com/?apikey=f1babf83&s=fast${Title}`)
//     const moviesData = await movies.json();
//     movieListEl.innerHTML = moviesData.map(movie => movieHTML(movie)).join('');
// }

// function movieHTML(movie) {
//     return `
//         <div class="movie">
//             <div class="movie__title">
//                 ${movie.title}
//             </div>
//             <div class="movie__year">
//                 ${movie.year}
//             </div>
//         </div>`
// }

let movies;

async function rendermovies(filter) {
    const moviesWrapper = document.querySelector('.movies');

    moviesWrapper.classList += ' movies__loading'

    if (!movies) {
        movies = await getMovies();
    }

    moviesWrapper.classList.remmove('movies__loading')
    const moviesHtml = movies
        .map((movie)=> {
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
            </div>`
        })
        .join("");
    moviesWrapper.innerHTML = movieList;

}

function yearsHTML(year) {
    let yearHTML = "";
    for (let i = 0; i < Math.floor(year); ++i) {
        yearHTML += `${movies.Year}`;
    }
    if (!Number.isInteger(year)) {
        yearHTML +=  `${movies.Year}`
    }
    return yearHTML
}