"use strict";
// index.ts
// Aqui uso las funciones que hice en calculos.ts y las pruebo
// con datos de ejemplo
Object.defineProperty(exports, "__esModule", { value: true });
const calculos_1 = require("./calculos");
// el porcentaje de iva que voy a usar, 12%
let tasaIva = 0.12;
// ---------- Compra 1 ----------
let compra1 = [100, 250, 75];
let subtotal1 = (0, calculos_1.calcularSubtotal)(compra1);
let iva1 = (0, calculos_1.calcularIVA)(subtotal1, tasaIva);
let total1 = (0, calculos_1.calcularTotal)(subtotal1, iva1);
console.log("Compra 1:");
console.log("Subtotal: " + subtotal1);
console.log("IVA: " + iva1);
console.log("Total: " + total1);
// ---------- Compra 2 ----------
let compra2 = [500, 1200, 350, 80];
let subtotal2 = (0, calculos_1.calcularSubtotal)(compra2);
let iva2 = (0, calculos_1.calcularIVA)(subtotal2, tasaIva);
let total2 = (0, calculos_1.calcularTotal)(subtotal2, iva2);
console.log("\nCompra 2:");
console.log("Subtotal: " + subtotal2);
console.log("IVA: " + iva2);
console.log("Total: " + total2);
// ---------- Compra 3 (carrito vacio, para probar que no se rompa) ----------
let compra3 = [];
let subtotal3 = (0, calculos_1.calcularSubtotal)(compra3);
let iva3 = (0, calculos_1.calcularIVA)(subtotal3, tasaIva);
let total3 = (0, calculos_1.calcularTotal)(subtotal3, iva3);
console.log("\nCompra 3 (vacia):");
console.log("Subtotal: " + subtotal3);
console.log("IVA: " + iva3);
console.log("Total: " + total3);
