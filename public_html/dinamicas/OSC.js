/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Devuelve el objeto del parametro
function O(i) { return typeof i == 'object' ? i : document.getElementById(i) }
//Devuelve el estilo del objeto referido
function S(i) { return O(i).style }
//Devuelve una matriz(array) conteniendo todos los objetos que tengan el nombre de la clase dado
function C(i) { return document.getElementsByClassName(i) }