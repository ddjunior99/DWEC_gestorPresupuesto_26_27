"use strict";
// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global
let presupuesto = 0;
let gasto = [];
let idGasto = 0;

function actualizarPresupuesto(nuevoPresupuesto) {
    // TODO
    if (typeof nuevoPresupuesto === "number" && nuevoPresupuesto >= 0) 
    {
        presupuesto = nuevoPresupuesto;   
    }
    else
    {
       console.log("El presupuesto no puede ser negativo");
        nuevoPresupuesto = -1;      
    }
    return nuevoPresupuesto;
}

function mostrarPresupuesto() {
    // TODO
    let mensaje = "Tu presupuesto actual es de " + presupuesto + " €";
    return mensaje;
}

function CrearGasto(descripcion, valor) {
    // TODO
    //Propiedades

    this.descripcion = descripcion;
    valor = parseFloat(valor); 
    
    if (valor < 0 || isNaN(valor)) 
    {
        this.valor = 0;
    }
    else{
        this.valor = valor;
    }

    //Métodos

    this.mostrarGasto = function() {
        let mensaje = "Gasto correspondiente a " + this.descripcion + " con valor " + this.valor + " €";
        return mensaje;
    }

    this.actualizarDescripcion = function(nuevaDescripcion) {
        this.descripcion = nuevaDescripcion;
    }

    this.actualizarValor = function(nuevovalor) {
        nuevovalor = parseFloat(nuevovalor);

        if (nuevovalor < 0 || isNaN(nuevovalor)) 
        {
            this.valor = this.valor;
        }
        else{
            this.valor = nuevovalor;
        }
    }
}


// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto
}
