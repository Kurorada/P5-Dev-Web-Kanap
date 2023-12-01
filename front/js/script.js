async function init() {
  let response = await fetch("http://127.0.0.1:3000/api/products");
  const productList = await response.json();
  console.log(productList);
  const container = document.getElementById("items");
  for (let i = 0; i < productList.length; i++) {
    let product = productList[i];

    let a = document.createElement("a");
    let article = document.createElement("article");
    let img = document.createElement("img");
    img.src = product.imageUrl;
    img.alt = product.altTxt;
    let name = document.createElement("h3");
    name.innerText = product.name;
    let description = document.createElement("p");
    description.innerText = product.description;

    let id = product._id;

    let url = "http://127.0.0.1:5500/front/html/product.html?id=" + id;
    a.href = url;
    article.appendChild(img);
    article.appendChild(name);
    article.appendChild(description);
    a.appendChild(article);
    container.appendChild(a);
  }
}
init();
