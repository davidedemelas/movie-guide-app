
// api key -> 4fb8aad6
// api url request -> http://www.omdbapi.com/?i=tt3896198&apikey=4fb8aad6

let movieName = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-button");
let result = document.getElementById("result");

let getMovie = () => {
    let name = movieName.value;
    let url = `http://www.omdbapi.com/?t=${name}&apikey=${key}`;

    if (name.length <= 0) {
        result.innerHTML = `<h3 class="msg"> Please enter a movie name </h3>`;

    } else {
        fetch(url).then((resp) => resp.json()).then((data) => {
            if(data.Response == "True"){
                result.innerHTML = `
                    <div class="info">
                        <img src=${data.Poster} class="poster">
                        <div>
                            <h2>${data.Title}</h2>
                            <div class="rating">
                                <img src="star.svg">
                                <h4>${data.imdbRating}</h4>
                            </div>
                            <div class="rating">
                                <span>${data.Rated}</span>
                                <span>${data.Year}</span>
                                <span>${data.Runtime}</span>
                            </div>
                            <div class="genre">
                                <div>${data.Genre.split(",").join("</div><div>")}</div>
                            </div>
                            <h3>Plot:</h3>
                            <p>${data.Plot}</p>
                            <h3>Cast:</h3>
                            <p>${data.Actors}</p>
                        </div>
                    </div>
                `;
            }
            else{
                result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
            }
        })
        .catch(() => {
            result.innerHTML = `<h3 class="msg">Error occured</h3>`;
        })
    }
}

searchBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);
