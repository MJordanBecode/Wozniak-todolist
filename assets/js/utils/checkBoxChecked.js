export default function strikeThroughtText(taskId) {
    const taskElement = document.getElementById(taskId);  // Récupérer la div contenant la tâche
    const taskP = taskElement.querySelector('p');  // Sélectionner l'élément <p> à l'intérieur de la div

    if (taskP) {
        // Ajouter ou enlever la classe line-through au <p> en fonction de l'état de la checkbox
        taskP.classList.toggle('line-through');  // Applique ou enlève la classe 'line-through'
    }
    console.log(`Tâche ${taskId} finie !`);
}
