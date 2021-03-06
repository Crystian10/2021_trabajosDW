/**
 * Script para pintar el tablero
 */

'use strict'
const screenDraw=[
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0],
    [0,9,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,9,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0],
    [0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0],
    [0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0],
    [0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0],
    [0,0,0,0,1,0,1,0,2,2,2,0,1,0,1,0,0,0,0],
    [1,1,1,1,1,1,1,0,3,3,3,0,1,1,1,1,1,1,1],
    [0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0],
    [0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0],
    [0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0],
    [0,9,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,9,0],
    [0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0],
    [0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0],
    [0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0],
    [0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

const board=document.querySelector("#board");

createBoard();
function createBoard() {
    // dibujamos el tablero
    screenDraw.map(line => {
        line.map((el, i) => {
            const div=document.createElement("div");
            if (i==0) {
                div.classList.add("newLine");
            }
            if (el==0) {
                div.classList.add("wall");
            } else if (el==2) {
                div.classList.add("door");
            } else if (el==1) {
                div.classList.add("food");
            } else if (el==9) {
                div.classList.add("energizer")
            }
            board.appendChild(div);
        });
    });
}
