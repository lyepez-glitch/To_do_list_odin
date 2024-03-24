class ToDoItem {

    constructor(title, description, dueDate, priority, notes, completed) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.completed = false;
    }
}

const createToDoItem = (title, description, dueDate, priority, notes) => {
    const item = new ToDoItem(title, description, dueDate, priority, notes);
    return item;
}

export { createToDoItem };