import { create_to_do_list } from "./ToDoList";
import { createToDoItem } from './ToDoItem';
const loadListsFromStorage = (to_do_list) => {


    const to_do_lists = document.querySelector("#to_do_lists");


    let toDoLists = localStorage.getItem("toDoLists");
    toDoLists = JSON.parse(toDoLists);

    toDoLists.forEach((todolist) => {
        console.log("todolist", todolist)
        const ul = document.createElement("ul");
        const div = document.createElement("div");
        const btn = document.createElement("button");
        btn.textContent = "Add to do";
        btn.addEventListener("click", function() {
            const todo1 = createToDoItem("todo1", "description1", Date.now(), "Low", "Write some notes");


        })
        todolist.list.forEach((todo) => {


            for (const key in todo) {

                if (key === "title" || key === "dueDate") {
                    let li = document.createElement("li");
                    li.textContent = `${key}: ${todo[key]}`;

                    ul.appendChild(li);
                }

            }
            div.appendChild(ul)
            div.appendChild(btn)
            div.classList.add("to-do-list")
            const todolistsCont = document.querySelector("#to_do_lists");
            todolistsCont.appendChild(div);

        })
    })

}

const loadPage = () => {
    localStorage.clear();
    let toDoLists = [];
    const to_do_list = create_to_do_list();
    const todo1 = createToDoItem("todo1", "description1", Date.now(), "Low", "Write some notes");
    const todo2 = createToDoItem("todo2", "description2", Date.now(), "Low", "Write some notes");
    const todo3 = createToDoItem("todo3", "description3", Date.now(), "Low", "Write some notes");
    to_do_list.addItem(todo1);
    to_do_list.addItem(todo2);
    to_do_list.addItem(todo3);


    toDoLists.push(to_do_list);
    toDoLists = JSON.stringify(toDoLists);
    localStorage.setItem("toDoLists", toDoLists);
    const add_to_do_list_Btn = document.querySelector("#add_to_do_list");





    add_to_do_list_Btn.addEventListener("click", function() {
        let listsEle = document.querySelector("#to_do_lists");
        listsEle.innerHTML = '';
        let toDoLists = localStorage.getItem("toDoLists");
        toDoLists = JSON.parse(toDoLists);
        const to_do_list = create_to_do_list();
        const newToDo = createToDoItem("do laundry", "laundry", Date.now(), "Low", "Write some notes");
        to_do_list.addItem(newToDo);
        console.log("to_do_list", to_do_list)
        toDoLists.push(to_do_list);
        toDoLists = JSON.stringify(toDoLists);
        localStorage.setItem("toDoLists", toDoLists);
        loadListsFromStorage();
    });
    loadListsFromStorage();

}

export { loadPage };