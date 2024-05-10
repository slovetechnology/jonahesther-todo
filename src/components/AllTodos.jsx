import { FaBook, FaRegEdit, FaTrashAlt } from "react-icons/fa";


import React from 'react'

function AllTodos(props) {
    return (
        <div className="mt-5">
            {props.todos.map((item, index) => (
                <div key={index} className="border mb-3 flex items-center gap-3 p-[10px] w-11/12 mx-auto rounded-lg border-zinc-300 hover:scale-105 transition-all">
                <div className="border rounded-full p-2 text-2xl"> <FaBook className="text-zinc-400" /> </div>
                <div className="grid grid-cols-7">
                    <div className="col-span-5">
                        <div className="font-extrabold text-lg">{item.title}</div>
                        <div className="flex items-center gap-4">
                            <div className="text-sm">{item.author}</div>
                            <div className="text-sm"> &#8358;{item.price}</div>
                        </div>
                    </div>
                    <div className="col-span-2 flex items-center justify-end gap-10">
                        <button 
                        onClick={() => props.GetTodoData(item)}
                        className="text-blue-600 border rounded-full p-2"> <FaRegEdit /> </button>
                        <button 
                        onClick={() => props.DeleteTodoData(item)}
                        className="text-red-600 border rounded-full p-2"> <FaTrashAlt /> </button>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}

export default AllTodos