

async function getMovieReq() {
    try {
        let name = document.getElementById('name').value
        let res = await fetch(`http://www.omdbapi.com/?apikey=871609cd&t=${name}`)
        let data = await res.json()
        console.log(data)
        if (data.Error == "Movie not found!") {
            appendRisk()
        }
        appendMovie(data)
    }
    catch(e) {
        console.log(e)
        
    }
}

getMovieReq()

function appendMovie(d) {
    let card = document.getElementById('cards')
    card.innerHTML =`<div class="card">
        <img src="${d.Poster}" alt="photo">
        <h1>Tital: ${d.Title}</h1>
        <h3>Actor: ${d.Actors}</h3>
        <h4>Release Year: ${d.Year}</h4>
        <p>Rating: ${d.imdbRating}</p>
        </div>`
    let rateShow = document.getElementById('rateShow')
    if (d.imdbRating > 8.5) {
        rateShow.innerHTML=`<h3>Awards: ${d.Awards}</h3>`
    }
    
}

function appendRisk() {
    let card = document.getElementById('cards')
    card.innerHTML=`<h1>Sorry we couldn't find this Movie</h1>
    <img src="https://www.vippng.com/png/detail/333-3331993_error-png-error.png" alt="">`
}