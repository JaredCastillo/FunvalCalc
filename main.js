let cuenta = document.querySelector('.bill-input');
let NumeroCuenta = parseInt(cuenta.value);
let personas = document.querySelector('.people-input');
let NumeroPer = parseInt(personas.value)


let TotalProp= document.querySelector('.tip-value');
let totalResult = document.querySelector('.total-value');



let botones = document.querySelectorAll('.button-prop');


let alert = document.querySelector('#alert');
let valor = 5;
botones.forEach(element => {
    element.addEventListener('click', event=>{
        // Cambiar estilos

        Borrarseleccion()
        element.classList.add('boton-selected');
        valor = parseInt(event.target.innerText.slice(0,-1));

        calcTip()
    });
})




function calcTip(){
    TotalProp.innerText = (( NumeroCuenta * valor / 100) /  NumeroPer).toFixed(2);
    totalResult.innerText = ((( NumeroCuenta * valor / 100) +  NumeroCuenta)/ NumeroPer).toFixed(2);
}


cuenta.addEventListener('input', ()=>{
    NumeroCuenta = parseFloat(cuenta.value);
    calcTip()
});

personas.addEventListener('input', ()=>{
    NumeroPer = parseFloat(personas.value);

    if ( NumeroPer == 0 || isNaN( NumeroPer)){
        personas.style.borderColor = 'rgb(164, 68, 68)';
        alert.classList.add('error');
        
    }else{
        alert.classList.remove('error');
        personas.style.borderColor = 'hsl(189, 41%, 97%)';
        calcTip()
    }

let custom = document.querySelector('.custom');
custom.addEventListener('click', ()=>{
    Borrarseleccion()
});
custom.addEventListener('input', ()=>{
    valor = parseInt(custom.value);
    if (!isNaN(valor)){
        calcTip();
    }  
});
    
});



function Borrarseleccion(){
    botones.forEach(element =>{
        element.classList.remove('boton-selected');
    });
}



let reset = document.querySelector('.reset');
reset.addEventListener('click', ()=>{
    cuenta.value = 0;
    NumeroCuenta = 0;
    personas.value = 1;
    NumeroPer = 1;
    custom.value = 'Custom';
    calcTip();


});

