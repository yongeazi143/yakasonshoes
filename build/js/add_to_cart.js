import { proContainer, cartQuantity } from "./cartDOM.js";

let cart = [];
let btnDOM = [];

class Products {
  async getProduct() {
    try {
      let data = await fetch("./js/products.json");
      let info = await data.json();

      let products = info.items;
      products = products.map((item) => {
        const { title, price } = item.details;
        const { id } = item.sys;
        const image = item.details.image.url;
        return { title, price, id, image };
      });
      // console.log(products);
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

export class Display {
  displayProducts(products) {
    let content = "";
    products.forEach((product) => {
      content += `
         <div class="products">
          <img src="${product.image}" alt="product">
          <div class="description">
            <h3 class="text-2xl font-simibold">${product.title} </h3>
            <div class="star text-[gold]">
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
            </div>
            <h4 class="text-amber-900 font-bold text-lg">&#8358 ${product.price}</h4>
          </div>
          <button class="cart-btn" id="cart-btn" data-id=${product.id}>
            <i class="bx bx-cart bx-md"></i> add to cart
          </button>
        </div>
         `;
    });
    proContainer.innerHTML = content;
  }
  getCartButtons() {
    const buttons = [...document.querySelectorAll("#cart-btn")];
    btnDOM = buttons;
    buttons.forEach((button) => {
      let id = button.dataset.id;
      const inCart = cart.find((item) => item.id);
      if (inCart) {
        button.classList.toggle("btn-disabled");
        button.innerText = "in cart";
        button.disabled = true;
      }
      button.addEventListener("click", (event) => {
        event.target.classList.toggle("btn-disabled");
        event.target.innerText = "in cart";
        event.target.disabled = true;
        //   get product from Products
        let cartItems = { ...Storage.getProduct(id), quantity: 1 };
        // add products to the cart Array
        cart = [...cart, cartItems];
        //   Save cart to Local Storage
        Storage.saveCart(cart);
        // Sattings Cart Values
        this.cartValues(cart);
      });
    });
  }

  cartValues(cart) {
    let tempTotal,
      itemsTotal = 0;
    cart.map((items) => {
      tempTotal += items.price * items.quantity;
      itemsTotal = items.quantity;
    });
    //  cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
    cartQuantity.innerText = itemsTotal;
  }
}

class Storage {
  static saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }

  static getProduct(id) {
    let products = JSON.parse(localStorage.getItem("products"));
    return products.find((product) => product.id === id);
  }
  static saveCart(cart) {
    localStorage.setItem("items", JSON.stringify(cart));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let products = new Products();
  let display = new Display();

  products
    .getProduct()
    .then((products) => {
      display.displayProducts(products);
      Storage.saveProducts(products);
    })
    .then(() => {
      display.getCartButtons();
    });
});
