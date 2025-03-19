// Récupérer toutes les tâches sauvegardées
export function getTasks() {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
}

// Sauvegarder le tableau de tâches dans le localStorage
export function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Ajouter une tâche
export function addTask(task) {
    const tasks = getTasks();
    tasks.push(task);
    saveTasks(tasks);
}

// Supprimer une tâche par son ID
export function removeTask(taskId) {
    let tasks = getTasks(); // Récupère toutes les tâches
    tasks = tasks.filter(task => task.id !== taskId); // Filtre les tâches sans celle supprimée
    saveTasks(tasks); // Sauvegarde la nouvelle liste mise à jour
}
