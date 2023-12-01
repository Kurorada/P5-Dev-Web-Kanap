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
  console.log(product);
  let title = document.getElementById("title");
  let price = document.getElementById("price");
  let colorSelect = document.getElementById("colors");

  let colors = product.colors;
  console.log(colors[1]);
  for (let i = 0; i < colors.length; i++) {
    let color = colors[i];
    console.log(color);

    let option = document.createElement("option");
    option.innerText = color;
    option.value = color;
    colorSelect.appendChild(option);
  }

  console.log(colorSelect);
  title.innerText = product.name;
  price.innerText = product.price;
  description.innerText = product.description;
  let button = document.getElementById("addToCart");
  button.addEventListener("click", buttonclick);
  function buttonclick() {
    const selectedColor = colorSelect.value;

    const quantitySelect = document.getElementById("quantity");
    const selectedQuantity = quantitySelect.value;
    const selection = {
      id: product._id,
      quantity: selectedQuantity,
      color: selectedColor,
    };
    let cart = localStorage.getItem("cart");
    if (cart !== null) {
      cart = JSON.parse(cart);
      let productIndex = cart.findIndex(
        (product) =>
          product.id === selection.id && product.color === selection.color
      );
      if (productIndex == -1) {
        cart.push(selection);
      } else {
        console.log(cart[productIndex]);
      }
    } else {
      cart = [];
      cart.push(selection);
    }

    const myJSON = JSON.stringify(cart);
    localStorage.setItem("cart", myJSON);
    // console.log(localStorage.getItem("cart"));
    document.getElementById("addToCart");
  }
  // button onclick =
}
init();
