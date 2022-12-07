// Store the gameboard as an array inside of a gameboard OBJECT. == START HERE
//gameboard == module

/** 
 * 
 * gameObject
 *  function addX
 * function addY
 * 
 * 
 */
// var gameBoard = {
//     //gameboard
    
// }

//+++++++++++++++ IIFE +++++++++++++++
let gameBoard = (function() {
    console.log("gameboard");
    let gameBoard = [
        null, null, null,
        null, null, null,
        null, null, null];
     console.table(gameBoard);
     let addX = function () {
        console.log("add x");
     };
     let addO = function() {
        console.log("O its OH!");
     }
     return {addX, addO, gameBoard};
}) ();
//Players also to be stored in objects
// players = factory?

// Prob want object to control the flow of the game itself
//  controller = module
/** 
 * 
 * gameObject
 *  function win
 * function lose
 * 
 * 
 */

/*

 Your main goal here is to have as little global code as possible. Try tucking everything away inside of a module or factory. 
 
 ****Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. 
 
 ***If you need multiples of something (players!), create them with factories.

 */