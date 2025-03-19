let inputValue = ""; // Variable globale pour stocker la valeur de l'input

export default function selectValueInput() {
    const SELECTCHECK = document.querySelector('#check');
    const SELECTINPUT = document.querySelector('#addTask');
    const SELECTMAIN = document.querySelector('#test');
    SELECTCHECK.addEventListener('click', () => {
        inputValue = SELECTINPUT.value; // Stocke la valeur de l'input dans la variable globale
        console.log('Valeur de l’input : ', inputValue);
    });
}

// Fonction pour accéder à la valeur stockée
export function getInputValue() {
    return inputValue;
}
