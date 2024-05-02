
// code splitting

import { useEffect, useState } from "react";
import Input from "./Input";

export default function TodoForm(props) {
    const localData = JSON.parse(localStorage.getItem('todos')) //[{}, {}, {}, {}, {}, {}, {}, {}, {},]
    // useEffect 

    useEffect(() => {
        if(!localData) {
            localStorage.setItem('todos', JSON.stringify([]))
        }
    }, [])
    const [errors, setErrors] = useState({
        title: '',
        price: '',
        author: '',
    })
    const [forms, setForms] = useState({
        title: '',
        price: '',
        author: ''
    })
    const handleFormChanges = (event) => {
        setForms({
            ...forms,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmission = () => {
        setTimeout(() => {
            setErrors({title: '', price: '', author: ''})
        }, 2000)
        if(!forms.title) return setErrors({...errors, title: 'Title is required'})
        if(!forms.price) return setErrors({...errors, price: 'Price is required'})
        if(!forms.author) return setErrors({...errors, author: 'Author is required'})

        const dataToStore = forms
        props.setTodos([
            dataToStore,
            ...props.todos,
        ])
        
        
        localData.unshift(dataToStore)
        localStorage.setItem('todos', JSON.stringify(localData))
    }
    return (
        <div className="w-11/12 mx-auto mt-10">
            <div className="capitalize bg-zinc-100 p-3 mb-10 rounded-lg font-bold text-2xl border">add new todo</div>
            <div className="mb-5">
                <Input
                error={errors.title}
                    name="title"
                    value={forms.title}
                    onChange={handleFormChanges}
                    title="Book title"
                    placeholder="Book title" />
            </div>
            <div className="grid grid-cols-2 gap-5 mb-10">
                <Input
                error={errors.price}
                    name="price"
                    value={forms.price}
                    onChange={handleFormChanges}
                    title="price"
                    placeholder="Book price" />
                <Input
                error={errors.author}
                    name="author"
                    value={forms.author}
                    onChange={handleFormChanges}
                    title="author"
                    placeholder="Book Author" />
            </div>
            <button 
            onClick={handleSubmission}
            className="bg-blue-500 py-3 px-6 w-full rounded-lg text-white capitalize">add todo</button>
        </div>
    )
}