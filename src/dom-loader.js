import { create_to_do_list } from "./ToDoList";
import { createToDoItem } from './ToDoItem';
import { addToDo, setPriority, deleteToDo, markComplete, addList } from './clickFunctions';
import { format } from "date-fns";
import getDate from './date';
import './style.css';
const loadListsFromStorage = (to_do_list) => {


    const to_do_lists = document.querySelector("#to_do_lists");


    let toDoLists = localStorage.getItem("toDoLists");
    toDoLists = JSON.parse(toDoLists);

    toDoLists.forEach((todolist) => {
        console.log("todolist", todolist)
        const todolistsCont = document.querySelector("#to_do_lists");
        const ul = document.createElement("ul");
        const listCont = document.createElement("div");
        listCont.id = "to_do_list";
        const addBtn = document.createElement("button");
        addBtn.textContent = "Add to do";
        addBtn.id = todolist.id;
        addBtn.classList.add("addBtn");
        addBtn.addEventListener("click", function() { addToDo(addBtn) })
        todolist.list.forEach((todo) => {
            const toDoCont = document.createElement("div");
            toDoCont.classList.add("todocont")
            const ul = document.createElement("ul");
            ul.classList.add("todo");

            for (const key in todo) {

                if (key === "title" || key === "dueDate" || key === "completed") {
                    let li = document.createElement("li");
                    li.textContent = `${key}: ${todo[key]}`;

                    ul.appendChild(li);
                }

            }
            toDoCont.appendChild(ul)
            toDoCont.id = todo.id;
            toDoCont.classList.add(todo.priority)


            const priorityBtn = document.createElement("button")
            priorityBtn.textContent = "Set Priority";

            priorityBtn.addEventListener("click", function() { setPriority(priorityBtn) })

            const completedBtn = document.createElement("button");

            completedBtn.textContent = "Mark completed";
            completedBtn.addEventListener("click", function() { markComplete(completedBtn) })
            toDoCont.appendChild(priorityBtn);
            toDoCont.appendChild(completedBtn);
            const deleteBtn = document.createElement("button");
            deleteBtn.addEventListener("click", function() { deleteToDo(deleteBtn) })
            deleteBtn.textContent = "Delete To Do"
            toDoCont.appendChild(deleteBtn)
            listCont.appendChild(toDoCont)


        })
        listCont.classList.add("to-do-list");
        listCont.appendChild(addBtn);

        todolistsCont.appendChild(listCont);
    })

}

const loadPage = () => {
    localStorage.clear();
    let toDoLists = [];
    const to_do_list = create_to_do_list();
    const todo1 = createToDoItem("todo1", "description1", getDate(), "Low", "Write some notes");
    const todo2 = createToDoItem("todo2", "description2", getDate(), "Low", "Write some notes");
    const todo3 = createToDoItem("todo3", "description3", getDate(), "Low", "Write some notes");
    to_do_list.addItem(todo1);
    to_do_list.addItem(todo2);
    to_do_list.addItem(todo3);


    toDoLists.push(to_do_list);
    toDoLists = JSON.stringify(toDoLists);
    localStorage.setItem("toDoLists", toDoLists);
    const add_to_do_list_Btn = document.querySelector("#add_to_do_list");





    add_to_do_list_Btn.addEventListener("click", addList);
    loadListsFromStorage();

}

export { loadPage, loadListsFromStorage };