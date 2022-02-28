import Dexie from 'dexie';

const db = new Dexie('pwa_assignment');
db.version(1).stores({
  tasks: '++id, name, dueDate, assignedTo', // Primary key and indexed props
});


function getAllTasks() {
    return db.tasks.toArray().then((data) => {
        return data
    });
}

function addTask(name, dueDate, assignedTo) {
    console.log(name, dueDate, assignedTo);
    return db.tasks.add({ name, dueDate, assignedTo })
        .then(() => true)
        .catch(err => {
            alert("Ouch... " + err);
    });
}

function deleteTask(id) {
    return db.tasks.where('id').equals(id).delete();  
}

function getTask(id) {
    return db.tasks.get(id);
}

const moduleExports = {
    getAllTasks,
    addTask,
    deleteTask,
    getTask
};
export default moduleExports;