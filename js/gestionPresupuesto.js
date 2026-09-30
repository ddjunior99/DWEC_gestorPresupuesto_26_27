"use strict";
// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global
let presupuesto = 0;


function actualizarPresupuesto(nuevoPresupuesto) {
    // TODO
    if (typeof nuevoPresupuesto === "number" && nuevoPresupuesto >= 0) 
    {
        presupuesto = nuevoPresupuesto;
        return presupuesto;     
    }
    else
    {
       console.log("El presupuesto no puede ser negativo");
        presupuesto = -1;
        return presupuesto;
    }
    

}

function mostrarPresupuesto() {
    // TODO
    let mensaje = "Tu presupuesto actual es de " + presupuesto + " €";
    return mensaje;
}

function CrearGasto(descripcion, cifra) {
    // TODO
    //Propiedades

    this.descripcion = descripcion;
    
    if (cifra < 0) 
    {
        this.cifra = 0;
    }
    else{
        this.cifra = cifra;
    }

    //Métodos

    this.mostrarGasto = function() {
        let mensaje = "Gasto correspondiente a " + this.descripcion + " con valor " + this.cifra + " €";
        return mensaje;
    }

    this.actualizarDescripcion = function(nuevaDescripcion) {
        this.descripcion = nuevaDescripcion;
    }

    this.actualizarCifra = function(nuevaCifra) {
        if (nuevaCifra < 0) 
        {
            this.cifra = this.cifra;
        }
        else{
            this.cifra = nuevaCifra;
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
