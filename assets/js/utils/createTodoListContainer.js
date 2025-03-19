import { createDiv, createP } from "../functions/createElement.js";

const newDiv = createDiv();
const newP = createP();
export default function createTodoListContainer(){

    const SELECTMAIN = document.querySelector('main');
    SELECTMAIN.appendChild(newDiv);
}