import { removeTask } from "./localStorage.js";

export default function deleteTask(taskId) {
    const taskElement = document.getElementById(taskId);

    if (taskElement) {
        taskElement.remove(); // Supprime l'élément du DOM
        removeTask(taskId); // Supprime du localStorage
        console.log(`Tâche ${taskId} supprimée !`);
    } else {
        console.log(`Erreur : Tâche ${taskId} introuvable.`);
    }
}
