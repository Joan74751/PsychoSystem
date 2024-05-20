const btnCart = document.querySelector('.container-cart-icon')
const containercartproducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containercartproducts.classList.toggle('hidden-cart')
})

/* JFJFJFJFJFJFJFJFJFJFJFJFJFJF */
const carinfo = document.querySelector('.cart-product')
const rowproduct = document.querySelector('.row-product')

// Lista de todos los contenedores de productos
const productlist = document.querySelector('.container-items')

// Variable de arreglo de productos
let allproducts = []

let valortotal = document.querySelector('.total-pagar')

const countproducts = document.querySelector('#contador-productos')

productlist.addEventListener('click', f =>{
    if(f.target.classList.contains('btn-add-cart')){
        const product = f.target.parentElement

        const infoproduct = {
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price: product.querySelector('p').textContent,
        };

        const exits = allproducts.some(product => product.title === infoproduct.title)

        if(exits){
            const product = allproducts.map(product =>{
                if(product.title === infoproduct.title){
                    product.quantity++;
                    return product
                }else{
                    return product
                }
            });
            allproducts = [...product];
        }else{
            allproducts = [...allproducts, infoproduct];
        }


        ShowHTML();
    }

});

rowproduct.addEventListener('click', (f) => {
    if(f.target.classList.contains('icon-close')){
        const product = f.target.parentElement
        const title = product.querySelector('p').textContent

        allproducts = allproducts.filter(product => product.title !== title);

        ShowHTML()
    }
})

// Funcion para mostrar HTML

const ShowHTML = () =>{

    if(!allproducts.length){
        containercartproducts.innerHTML = `
            <p class="cart-empty"> Selecciona un Producto</p>
        `
    }

    //Limpiar HTML

    rowproduct.innerHTML = '';

    let total = 0;

    let totalofproduct = 0;

    allproducts.forEach(product => {
        const containerproduct = document.createElement('div')
        containerproduct.classList.add('cart-product') 

        containerproduct.innerHTML = 
        `
        <div class="info-cart-product">
        <span class="cantidad-producto-carrito">
            ${product.quantity}
        </span>
        <p class="titulo-producto-carrito">${product.title}</p>
        <span class="precio-producto-carrito">${product.price}</span>
    </div> 
    <svg 
        class="icon-close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(0, 0, 0);">

        <!-- transform: ;msFilter:; -->

        <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
    </svg>
        `;

        rowproduct.append(containerproduct);

        total = total + parseInt(product.quantity*product.price.slice(1));
        totalofproduct = totalofproduct + product.quantity;

    });

    valortotal.innerText = `$${total}`;
    countproducts.innerText = totalofproduct;
}

function irAtras(){
    location.href = '../servicio.html'  //window.history.back();
}