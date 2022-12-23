const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cards = document.querySelector('.cards-container');








menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoMenu);



function toggleDesktopMenu() {
    const isasideClosed= aside.classList.contains('inactive');
    if(!isasideClosed){
        aside.classList.add('inactive');
        }
    desktopMenu.classList.toggle('inactive');

}



function toggleMobileMenu() {
    
    const isasideClosed= aside.classList.contains('inactive');
    if(!isasideClosed){
        aside.classList.add('inactive');
        }

    mobileMenu.classList.toggle('inactive');
    }

function toggleCarritoMenu() {
    const ismobileMenuClosed= mobileMenu.classList.contains('inactive');

    if (!ismobileMenuClosed) {
            mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}


const productList = [];

productList.push({
    name: 'Bike',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: '120',
    img: './icons/bt_add_to_cart.svg',
});

productList.push({
    name: 'Pantalla',
    image: 'https://support.apple.com/library/content/dam/edam/applecare/images/es_MX/macos/monterey/macos-monterey-mba-screenshot-toolbar.jpg',
    price: '225',
    img: './icons/bt_add_to_cart.svg',
});

productList.push({
    name: 'Computador',
    image: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HELg?q=90&o=f&w=480&h=270',
    price: '625',
    img: './icons/bt_add_to_cart.svg',
});
/*
 <div class="product-card">
        <img
          src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>

      */
//Una nueva forma de hacer un for es como el for(product: arr) en Java

function renderProduct(arr) {
    

for (product of arr) {
   const productCard = document.createElement('div');
   productCard.classList.add('product-card');

   const img = document.createElement('img');
   img.setAttribute('src', product.image);

   const productInfo = document.createElement('div');
   productInfo.classList.add('product-info');

   const Div = document.createElement('div');

   const productPrice = document.createElement('p');
   productPrice.innerText = '$ '+product.price;

   const productName = document.createElement('p');
   productName.innerText = product.name;  
   
   //El appendChild Sirve para identificar donde se cierra un div o cualquier contenedor usemos 
   Div.appendChild(productPrice);
   Div.appendChild(productName);

   const productInfoFigure = document.createElement('figure');
   const productImageCard = document.createElement('img');
   productImageCard.setAttribute('src', product.img);

   productInfoFigure.appendChild(productImageCard);

   productInfo.appendChild(Div);
   productInfo.appendChild(productInfoFigure);

   productCard.appendChild(img);
   productCard.appendChild(productInfo);
   


cards.appendChild(productCard);

}
}

renderProduct(productList);


