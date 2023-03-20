const productos = [
    {nombre: 'Anillo de oro', precio: 1500},
    {nombre: 'Anillo de Flor', precio: 900},
    {nombre: 'Collar de diamantes', precio: 5000},
    {nombre: 'Piedra amatista', precio: 650},
    {nombre: 'Corona', precio: 10000},
    {nombre: 'Collar piedra', precio: 800}
    
];
console.log(productos)

let carrito = []

let seleccion = prompt('Hola ¿desea comprar algun producto? Responda si o no')

while(seleccion != "si" && seleccion != "no"){
    alert('Por favor ingrese si o no')
    seleccion = prompt('Hola ¿desea comprar algun producto? Responda si o no')
}

if(seleccion == "si"){
    alert('A continuación... nuestro catálogo')
}
    else if (seleccion == "no"){
        alert('Gracias por venir, hasta pronto!')
    }


While(seleccion != "no"); {
    let producto = prompt('Agrega un producto a tu carrito')
    let precio = 0

    if(producto == 'Anillo de Oro'  || producto == 'Anillo de Flor' || producto == 'Collar de diamantes' || producto == 'Piedra amatista' || prodcuto == 'Corona' || producto == 'Collar piedra'){
        switch (producto) {
            case "Anillo de oro":
                precio = 1500;
                break;
            case "Anillo de Flor":
                precio = 900;
                break;
            case "Collar de diamantes":
                precio = 5000;
                break;
            case "Piedra amatista":
                precio = 650;
                break;
            case "Corona":
                precio = 10000;
                break;
            case "Collar piedra":
                precio = 800;
                break; 
            default:
                break;                            
        }
        
        let unidades = parseInt(prompt('¿Cuantas unidades quiere llevar?'))

        carrito.push({producto, unidades, precio})

    }   else{
        alert('no tenemos ese producto')
    }

    seleccion = prompt('¿Desea seguir comprando')

    while(seleccion === "no"){
        alert("Gracias por la compra! Hasta pronto")
        carrito.forEach((carritoFinal)) => {
            console.log('producto: ${carritoFinal.producto}')
        }
    }
}   