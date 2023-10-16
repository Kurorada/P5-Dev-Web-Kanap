// let = URLSearchParams.get
const str = window.location.href;
let url = new URL(str);

let id = url.searchParams.get("id");
async function init() {
  let response = await fetch("http://127.0.0.1:3000/api/products/" + id);

  const product = await response.json();
  var itemimg = document.getElementsByClassName("item__img")[0];
  let img = document.createElement("img");
  img.src = product.imageUrl;
  img.alt = product.altTxt;
  itemimg.appendChild(img);

  let prix = document.createElement("p");
  let titre = document.createElement("h1");

  let description = document.createElement("p");
  let couleur = document.createElement("img");
}
init();
