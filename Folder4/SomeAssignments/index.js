async function getData() {
  try {
    let api_key = `a781e459`;
    let search = document.getElementById("inputBox").value;
    let url = `http://www.omdbapi.com/?s=${search}&apikey=${api_key}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.Search);
    appendData(data.Search);
  } catch (err) {
    console.log(err, "err");
  }
}
function appendData(data) {
  let searchBox = document.getElementById("searchBox");
  searchBox.innerHTML = null;
  data.map(function (el) {
    let main_div = document.createElement("div");
    main_div.style.display = "flex";
    let div1 = document.createElement("div");
    let image = document.createElement("img");
    image.src = el.Poster;
    image.style.width = "70px";
    image.style.height = "70px";
    image.style.margin = "10px";
    div1.appendChild(image);
    let div2 = document.createElement("div");
    let title = document.createElement("p");
    title.innerText = el.Title;
    div2.appendChild(title);
    main_div.append(div1, div2);
    main_div.style.borderBottom = "1px solid black";

    main_div.addEventListener("click", function () {
      getMovie(el.Title);
    });

    searchBox.append(main_div);
  });
}

async function getMovie(title) {
  try {
    let api_key = `a781e459`;
    let url = `http://www.omdbapi.com/?t=${title}&apikey=${api_key}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    localStorage.setItem("Movie", JSON.stringify(data));
    window.location.href = "./Movies.html";
  } catch (err) {
    console.log(err, "err");
  }
}

function appendMovie() {
  let data = JSON.parse(localStorage.getItem("Movie")) || [];
  let Poster = document.getElementById("Poster");
  let image = document.createElement("img");
  image.src = data.Poster;
  Poster.append(image);
  let name = document.getElementById("name");
  name.innerText = "TITLE :- " + data.Title;
  let plot = document.getElementById("plot");
  plot.innerText = "PLOT :- " + data.Plot;
  let ratings = document.getElementById("imdb");
  ratings.innerText = "IMDB :- " + data.imdbRating;
  if (data.imdbRating > 8) {
    let rec = document.getElementById("rec");
    rec.innerText = "RECOMMENDED";
    rec.style.color = "green";
    ratings.innerText = "IMDB :- " + data.imdbRating;
  } else {
    ratings.innerText = "IMDB :- " + data.imdbRating;
  }
}
appendMovie();
