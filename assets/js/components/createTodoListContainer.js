import { createDiv, createP, createImage } from "../utils/createElement.js";
import deleteTask from "../utils/deleteTask.js";
import { addTask, getTasks } from "../utils/localStorage.js";
import strikeThroughtText from "../utils/checkBoxChecked.js";

// Variable globale pour stocker la valeur de l'input
let inputValue = "";
let taskCounter = 0; // Compteur global pour générer des IDs uniques

// Fonction pour récupérer la valeur de l'input
function selectValueInput() {
    const SELECTCHECK = document.querySelector('#check');
    const SELECTINPUT = document.querySelector('#addTask');

    SELECTCHECK.addEventListener('click', () => {
        inputValue = SELECTINPUT.value; // Récupérer la valeur de l'input
        console.log('Valeur de l’input : ', inputValue);
    });
}

// Fonction pour récupérer la valeur de l'input
function getInputValue() {
    return inputValue;
}



export default function createTodoListContainer() {
    const SELECTMAIN = document.querySelector('#container-todolist');
    SELECTMAIN.classList.add(...'flex flex-col gap-2 p-4'.split(' '));

    selectValueInput(); // Initialiser l'écoute de l'input

    const SELECTCHECK = document.querySelector('#check');
    SELECTCHECK.addEventListener('click', () => {
        const inputValue = getInputValue(); // Récupérer la valeur de l'input
        console.log('Valeur récupérée dans le gestionnaire de clic : ', inputValue);

        if (!inputValue.trim()) {
            console.log("Aucune valeur saisie, rien à afficher");
            return;
        }

        taskCounter++; // Incrémenter le compteur pour générer un nouvel ID
        const uniqueId = `todo-${taskCounter}`;

        // Créer la div de la tâche
        const newDiv = createDiv();
        newDiv.id = uniqueId;

        // Création des images
        const binImage = createImage();
        binImage.src = 'assets/images/bin.svg';
        binImage.classList.add('w-6');
        binImage.id = `${uniqueId}-bin`;
        binImage.addEventListener("click", () => deleteTask(uniqueId));

        const penImage = createImage();
        penImage.src = 'assets/images/pen.svg';
        penImage.classList.add('w-6');
        penImage.id = `${uniqueId}-pen`;

        const imageDiv = createDiv();
        imageDiv.classList.add(...'flex gap-2'.split(' '));
        imageDiv.appendChild(binImage);
        imageDiv.appendChild(penImage);

        // Checkbox
        const checkboxDiv = createDiv();
        checkboxDiv.classList.add(...'flex items-center'.split(' '));
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('w-4');
        checkbox.id = `${uniqueId}-checkbox`;
        checkbox.addEventListener("click", () => strikeThroughtText(uniqueId));
        checkboxDiv.appendChild(checkbox);

        // Paragraphe pour le contenu
        const newP = createP();
        newP.textContent = inputValue;
        newP.classList.add(...'flex flex-1 justify-center'.split(' '));

        // Assembler la tâche
        newDiv.appendChild(newP);
        newDiv.appendChild(imageDiv);
        newDiv.appendChild(checkboxDiv);
        newDiv.classList.add(...'flex bg-red-300 text-center gap-2 mt-2 rounded-2xl p-1'.split(' '));

        SELECTMAIN.appendChild(newDiv);

        // Sauvegarder la tâche dans le localStorage
        const newTaskData = {
            id: uniqueId,
            content: inputValue,
            completed: false // par exemple
        };
        addTask(newTaskData); // Sauvegarde la tâche dans le localStorage
    });
}

// Fonction pour charger et recréer les tâches au chargement de la page
function loadTasks() {
    const tasks = getTasks();
    const SELECTMAIN = document.querySelector('#container-todolist');

    tasks.forEach(task => {
        const taskDiv = createDiv();
        taskDiv.id = task.id;
        taskDiv.classList.add(...'flex bg-red-300 text-center gap-2 mt-2 rounded-2xl p-1'.split(' '));

        const taskP = createP();
        taskP.textContent = task.content;
        taskP.classList.add(...'flex flex-1 justify-center'.split(' '));

        const imageDiv = createDiv();
        imageDiv.classList.add(...'flex gap-2'.split(' '));

        const binImage = createImage();
        binImage.src = 'assets/images/bin.svg';
        binImage.classList.add('w-6');
        binImage.id = `${task.id}-bin`;
        binImage.addEventListener("click", () => deleteTask(task.id));

        const penImage = createImage();
        penImage.src = 'assets/images/pen.svg';
        penImage.classList.add('w-6');
        penImage.id = `${task.id}-pen`;

        imageDiv.appendChild(binImage);
        imageDiv.appendChild(penImage);

        const checkboxDiv = createDiv();
        checkboxDiv.classList.add(...'flex items-center'.split(' '));
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('w-4');
        checkbox.id = `${task.id}-checkbox`;
        checkbox.addEventListener("click", () => strikeThroughtText(uniqueId));
        checkboxDiv.appendChild(checkbox);

        taskDiv.appendChild(taskP);
        taskDiv.appendChild(imageDiv);
        taskDiv.appendChild(checkboxDiv);

        SELECTMAIN.appendChild(taskDiv);
    });
}

// Charger les tâches au chargement de la page
document.addEventListener("DOMContentLoaded", loadTasks);

