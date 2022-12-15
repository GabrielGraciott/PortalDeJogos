var url0 =
  "https://api.rawg.io/api/games?page=1&page_size=12&key=f52b75e592fd4f42b9f92b03163d7911";

async function cards() {
  let str = "";
  let data = await fetch(url0).then((res) => res.json());
  let result = data.results;
  for (let index = 0; index < result.length; index++) {
    const card = result[index];
    str += `<div class="col-12 col-sm-3 col-md-4 col-lg-3">
    <div class="card border border-0">
        <h5 class="card-title fw-bold text-truncate">${card.name}</h5>
        <div class="ratio" style="--bs-aspect-ratio: 50%;">
        <img src="${card.background_image}" class="img-fluid" alt="imagem card">
        </div>
        <h5 class="fs-6">Classificação: <span class="float-end">${card.rating}</span></h5>
        <h5 class="fs-6">Data de lançamento: <span class="float-end">${card.released}</span></h5>
        <div class="card-body">
        <a href="detalhes.html?id=${card.id}"><button type="button" class="btn btn-secondary" id="btn-2">Mais detalhes ...</button></a>
        </div>
    </div>
    </div>`;
  }
  url0 = data.next;
  document.getElementById("cards").insertAdjacentHTML("beforeend", str);
}

var url1 = `https://api.rawg.io/api/platforms?page=1&page_size=3&key=f52b75e592fd4f42b9f92b03163d7911`;
async function plataformas() {
  let data = await fetch(url1).then((res) => res.json());
  let str = "";
  for (let index = 0; index < data.results.length; index++) {
    const plataforma = data.results[index];
    str += ` <div class="col-12 col-sm-4 col-md-4">
    <div class="card border border-0">
        <h5 class="card-title fw-bold">${plataforma.name}</h5>
        <div class="formimg" style="background-image: url('${plataforma.image_background}')">
            
        </div>
        <div class="card-body">
            <p class="card-text">
                <b>Principais jogos</b>
            <ul class="lista">`;
    for (let i = 0; i < 3; i++) {
      str += `<li>${plataforma.games[i].name}</li>`;
    }
    str += `</ul>
            </p>
            <p class="card-text text-end">Mais detalhes ...</p>
        </div>
    </div>
   </div>`;
  }
  url1 = data.next;
  document.getElementById("plata").insertAdjacentHTML("beforeend", str);
}

async function showDetails(id) {
  var url2 = `https://api.rawg.io/api/games/${id}?&key=f52b75e592fd4f42b9f92b03163d7911`
  let data = await fetch(url2).then((res) => res.json());
  let str = `<div class="col-12 col-sm-3 col-md-4 col-lg-3">
    <div class="card border border-0">
        <h5 class="card-title fw-bold text-truncate">${data.name}</h5>
        <div class="ratio" style="--bs-aspect-ratio: 50%;">
        <img src="${data.background_image}" class="img-fluid" alt="imagem card">
        </div>
        <h5 class="fs-6">Classificação: <span class="float-end">${data.rating}</span></h5>
        <h5 class="fs-6">Data de lançamento: <span class="float-end">${data.released}</span></h5>
        <div class="card-body">
        </div>
    </div>
  </div>`

  document.getElementById("cards").insertAdjacentHTML("beforeend", str);
}



async function search(searchId) {
  //var searchId = document.getElementById("search-input");
  var url3 = `https://api.rawg.io/api/games?page=1&page_size=4&search=${searchId}&key=f52b75e592fd4f42b9f92b03163d7911`
  let str = "";
  try {
    let data = await fetch(url3).then((res) => res.json());
    let result = data.results;
    for (let index = 0; index < result.length; index++) {
      const card = result[index];
      str += `<div class="col-12 col-sm-3 col-md-4 col-lg-3">
                <div class="card border border-0">
                    <h5 class="card-title fw-bold text-truncate">${card.name}</h5>
                    <div class="ratio" style="--bs-aspect-ratio: 50%;">
                      <img src="${card.background_image}" class="img-fluid" alt="imagem card">
                    </div>
                    <h5 class="fs-6">Classificação: <span class="float-end">${card.rating}</span></h5>
                    <h5 class="fs-6">Data de lançamento: <span class="float-end">${card.released}</span></h5>
                    <div class="card-body">
                    <a href="detalhes.html?id=${card.id}"><button type="button" class="btn btn-secondary" id="btn-2">Mais detalhes ...</button></a>
                    </div>
                </div>
      </div>`;
    }

    url3 = data.next;
    document.getElementById("cards").insertAdjacentHTML("beforeend", str);
  } catch (err) {
    alert(err);
  }
}