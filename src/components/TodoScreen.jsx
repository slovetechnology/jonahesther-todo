import { useState } from "react";
import AllTodos from "./AllTodos";
import TodoForm from "./TodoForm";

// grid, flex
export default function TodoScreen() {
    const localData = JSON.parse(localStorage.getItem('todos'))
    const [todos, setTodos] = useState(localData || [])
    const [singleData, setSingleData] = useState({})
    const [forms, setForms] = useState({
        title: "",
        price: "",
        author: "",
    })

    const GetTodoData = (item) => {
        setSingleData(item)
        setForms({
            title: item.title,
            price: item.price,
            author: item.author
        })
    }

    const DeleteTodoData = (item) => {
        // find among all todos where the title matches the item parameter
        // filter method add two more ways to delete data
        const filterData = todos.filter((element) => element.title !== item.title)
        setTodos(filterData)
        localStorage.setItem('todos', JSON.stringify(filterData))
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto gap-10 my-10">
            <div className="h-fit pb-16 bg-white shadow-xl rounded-lg">
                {/* todo form */}
                <TodoForm
                    todos={todos}
                    setTodos={setTodos}
                    singleData={singleData}
                    forms={forms}
                    setForms={setForms}
                />
            </div>
            <div className="h-[72.3vh] overflow-y-auto bg-white shadow-xl rounded-lg">
                {/* show all todos */}
                <AllTodos 
                todos={todos}
                GetTodoData={GetTodoData}
                DeleteTodoData={DeleteTodoData}
                />
            </div>
        </div>
    )
}