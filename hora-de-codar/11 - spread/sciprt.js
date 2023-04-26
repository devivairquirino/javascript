"use strict" // Modo estrito

let n1=[10,20,30];
let n2=[11,22,33,44];
let n3=[...n1,...n2];
console.log("n1: " + n1);
console.log("n2: " + n2);
console.log("n3: " + n3);

let player1= {nome:"Vhouross", energia: 1000, strong: Infinity, defesa: Infinity};
let player2= {nome:"Keke", energia: 1000, strong: 200, defesa: Infinity, magia: Infinity};
let player3= {...player2,...player1};
console.log(player3);