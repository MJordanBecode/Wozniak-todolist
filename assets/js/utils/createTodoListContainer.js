import { createDiv, createP, createImage } from "../functions/createElement.js";

// Variable globale pour stocker la valeur de l'input
let inputValue = ""; 

// Fonction pour récupérer la valeur de l'input
function selectValueInput() {
    const SELECTCHECK = document.querySelector('#check');
    const SELECTINPUT = document.querySelector('#addTask');

    // Ajouter un gestionnaire d'événements pour récupérer la valeur de l'input
    SELECTCHECK.addEventListener('click', () => {
        inputValue = SELECTINPUT.value; // Stocke la valeur de l'input dans la variable globale
        console.log('Valeur de l’input : ', inputValue);
    });
}

// Fonction pour récupérer la valeur stockée
function getInputValue() {
    return inputValue;
}

export default function createTodoListContainer() {
    // Créer un seul <div> pour contenir tous les nouveaux éléments
    const SELECTMAIN = document.querySelector('#container-todolist');
    
    // Initialiser la fonction pour écouter l'input
    selectValueInput();

    // Ajouter un gestionnaire d'événements au clic sur le bouton #check
    const SELECTCHECK = document.querySelector('#check');
    SELECTCHECK.addEventListener('click', () => {
        const inputValue = getInputValue();  // Récupérer la valeur de l'input
        console.log('Valeur récupérée dans le gestionnaire de clic : ', inputValue);

        // Créer une nouvelle div qui contiendra le <p> et les deux images
        const newDiv = createDiv(); // Crée une nouvelle div pour chaque tâche

        // Créer les images bin et pen
        const binImage = createImage();
        binImage.src = 'assets/images/bin.svg';  // Chemin correct pour l'image bin
        
        const penImage = createImage();
        penImage.src = 'assets/images/pen.svg';  // Chemin correct pour l'image pen

        // Si la valeur est valide, créer un nouveau <p>
        if (inputValue && inputValue !== '') {
            const newP = createP();  // Crée un nouvel élément <p> à chaque clic
            newP.textContent = inputValue;  // Affecte la valeur à l'élément <p>

            // Ajouter le nouveau <p> à la nouvelle div
            newDiv.appendChild(newP);
            
            // Ajouter les deux images dans la nouvelle div
            newDiv.appendChild(binImage);
            newDiv.appendChild(penImage);

            // Ajouter la nouvelle div au container principal
            SELECTMAIN.appendChild(newDiv);
        } else {
            console.log("Aucune valeur saisie, rien à afficher");
        }
    });
}
