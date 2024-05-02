import { useState } from "react";
import AllTodos from "./AllTodos";
import TodoForm from "./TodoForm";

// grid, flex
export default function TodoScreen() {
    const localData = JSON.parse(localStorage.getItem('todos'))
    const [todos, setTodos] = useState(localData || [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto gap-10 my-10">
            <div className="h-fit pb-16 bg-white shadow-xl rounded-lg">
                {/* todo form */}
                <TodoForm
                    todos={todos}
                    setTodos={setTodos}
                />
            </div>
            <div className="h-[72.3vh] overflow-y-auto bg-white shadow-xl rounded-lg">
                {/* show all todos */}
                <AllTodos 
                todos={todos}
                />
            </div>
        </div>
    )
}