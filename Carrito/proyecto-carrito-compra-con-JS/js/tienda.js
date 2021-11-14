const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});

const comprarButton = document.querySelector('.comprarButton'); /*llamar al boton de comprar*/
comprarButton.addEventListener('click', comprarButtonClicked); /*se ejecute cuando haga click*/

const shoppingCartItemsContainer = document.querySelector( /*se calamcena en el cotenedor*/
  '.shoppingCartItemsContainer'
);

function addToCartClicked(event) { /*recibe un parametro event*/
  const button = event.target; /*capturar el target del event*/
  const item = button.closest('.item');/*el button capturado con event, cuando se hace click se captura con nombre, precio, img*/

  const itemTitle = item.querySelector('.item-title').textContent; /*se capturan los datos, TITULO*/
  const itemPrice = item.querySelector('.item-price').textContent; /*se capturan los datos, PRECIO*/
  const itemImage = item.querySelector('.item-image').src; /*se capturan los datos, IMAGEN*/

  addItemToShoppingCart(itemTitle, itemPrice, itemImage); /*separar una funcion de otra*/
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName( //*cuando el usuario añade el mismo producto no lo duplique y solo aumente cantidad*/
    'shoppingCartItemTitle'
  );
  for (let i = 0; i < elementsTitle.length; i++) { 
    if (elementsTitle[i].innerText === itemTitle) { /*compara los elemenstos con intemtittle*/
      let elementQuantity = elementsTitle[ /**/
        i
      ].parentElement.parentElement.parentElement.querySelector( /**/
        '.shoppingCartItemQuantity' /*nos trae desde esta clase*/
      );
      elementQuantity.value++; /*suma el valor del mismo elemento*/
      $('.toast').toast('show'); /*mostrar mensaje que se agrega el mismo producto*/
      updateShoppingCartTotal(); /*actualiza la cantidad*/
      return;  /*ya no se duplica sino se suma*/
    }
  }

  const shoppingCartRow = document.createElement('div');
  const shoppingCartContent = `
  <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
  shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemsContainer.append(shoppingCartRow);

  shoppingCartRow
    .querySelector('.buttonDelete') /*llama a la funcion creada mas abajo*/
    .addEventListener('click', removeShoppingCartItem); /*aparece el click, x de borrar*/

  shoppingCartRow
    .querySelector('.shoppingCartItemQuantity') /*llama a la funcion de cambiar cantidad */
    .addEventListener('change', quantityChanged);

  updateShoppingCartTotal();
}

function updateShoppingCartTotal() {
  let total = 0; /*aparece cuando terina la funcion*/
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal'); 

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem'); /*se llama a todos los elementos qe tienen los items*/

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector( /*hace un evento que indica el precio*/
      '.shoppingCartItemPrice'
    );
    const shoppingCartItemPrice = Number( /*covierte a numero a todo valor que tiene dentro*/
      shoppingCartItemPriceElement.textContent.replace('S/.', '')/*remplaza el s/. por un string vacio*/
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number( /*convierte a numero que esta dentro*/
      shoppingCartItemQuantityElement.value /*queremos el valor de cantidad*/
    );
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
  });
  shoppingCartTotal.innerHTML = `S/. ${total.toFixed(2)}`; /*toFixed(2) se redondena a dos decimales*/
}

function removeShoppingCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove(); /*borra*/
  updateShoppingCartTotal();/*actualiza el precio total*/
}

function quantityChanged(event) { /*modificar, aumentar cantidad*/
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  /*if (input.value<= 0) {
    input.value = 1;
  }*/ /*no permite bajar a cero*/
  updateShoppingCartTotal();/*actualiza el precio total*/
}

function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = '';  /*se borra todo, es decir que se quede vacio*/
  updateShoppingCartTotal();/*actualiza el precio total*/
}
