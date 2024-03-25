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
        btn.id = todolist.id;
        btn.addEventListener("click", function() {
            let listsEle = document.querySelector("#to_do_lists");
            listsEle.innerHTML = '';
            const new_to_do = createToDoItem("added todo", "description", Date.now(), "Low", "Write some notes");

            let toDoLists = localStorage.getItem("toDoLists");
            toDoLists = JSON.parse(toDoLists);
            toDoLists.forEach((list) => {
                console.log("list id", typeof list.id)
                console.log("btn id ", typeof btn.id)
                if (list.id.toString() === btn.id) {
                    console.log("true")
                    list.list.push(new_to_do);
                }
            })

            toDoLists = JSON.stringify(toDoLists);
            localStorage.setItem("toDoLists", toDoLists);
            loadListsFromStorage();




        })
        todolist.list.forEach((todo) => {

            const ul = document.createElement("ul");
            ul.classList.add("todo");

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
            const priorityBtn = document.createElement("button")
            priorityBtn.textContent = "Set Priority";

            priorityBtn.addEventListener("click", function() {
                const todoCont = button.closest('.todo');

                let toDoLists = localStorage.getItem("toDoLists");
                toDoLists = JSON.parse(toDoLists);
                toDoLists.forEach((list) => {
                    list.list.forEach((todo) => {
                        if (todo.id.toString() === todoCont.id.toString()) {
                            todo.priority = "High";
                        }
                    })
                })
                toDoLists = JSON.stringify(toDoLists);
                localStorage.setItem("toDoLists", toDoLists);
            })
            const completedBtn = document.createElement("button");

            completedBtn.textContent = "Mark completed";
            completedBtn.addEventListener("click", () => {
                const todoCont = button.closest('.todo');

                let toDoLists = localStorage.getItem("toDoLists");
                toDoLists = JSON.parse(toDoLists);
                toDoLists.forEach((list) => {
                    list.list.forEach((todo) => {
                        if (todo.id.toString() === todoCont.id.toString()) {
                            todo.setCompleted(true);
                        }
                    })
                })
                toDoLists = JSON.stringify(toDoLists);
                localStorage.setItem("toDoLists", toDoLists);
            })
            div.appendChild(priorityBtn);
            div.appendChild(completedBtn);
            const deleteBtn = document.querySelector("button");
            deleteBtn.addEventListener("click", () => {
                const todoCont = button.closest('.todo');

                let toDoLists = localStorage.getItem("toDoLists");
                toDoLists = JSON.parse(toDoLists);
                toDoLists.forEach((list, index) => {
                    list.list.forEach((todo) => {
                        if (todo.id.toString() === todoCont.id.toString()) {
                            list.list.splice(index, 1);
                        }
                    })
                })
                toDoLists = JSON.stringify(toDoLists);
                localStorage.setItem("toDoLists", toDoLists);
            })
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