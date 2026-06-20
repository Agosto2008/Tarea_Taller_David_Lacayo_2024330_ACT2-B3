"use strict";
// calculos.ts
// En este archivo pongo las funciones para calcular el subtotal,
// el IVA y el total de una compra.
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularSubtotal = calcularSubtotal;
exports.calcularIVA = calcularIVA;
exports.calcularTotal = calcularTotal;
// Esta funcion suma todos los precios que vienen en la lista
// montos: lista de precios de los productos
// regresa: la suma de todos los precios (el subtotal)
function calcularSubtotal(montos) {
    let suma = 0;
    for (let i = 0; i < montos.length; i++) {
        suma = suma + montos[i];
    }
    return suma;
}
// Esta funcion calcula el IVA
// subtotal: el subtotal que ya calculamos antes
// tasa: el porcentaje de IVA en decimal, por ejemplo 0.12 es 12%
// regresa: el valor del IVA
function calcularIVA(subtotal, tasa) {
    let iva = subtotal * tasa;
    return iva;
}
// Esta funcion suma el subtotal mas el iva para sacar el total
// subtotal: el subtotal de la compra
// iva: el iva que ya calculamos antes
// regresa: el total final que se debe pagar
function calcularTotal(subtotal, iva) {
    let total = subtotal + iva;
    return total;
}
