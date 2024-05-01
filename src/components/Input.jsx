import React from 'react'

function Input(props) {
    return (
        <div className="">
            <div className="">{props.title}</div>
            <input type="text"
                value={props.value}
                name={props.name}
                onChange={props.onChange}
                placeholder={props.placeholder}
                className={`border ${props.error ? 'border-red-600' : 'border-zinc-400'} w-full outline-none p-2 rounded-lg`} />
               {props.error && <div className="text-red-600">{props.error}</div>}
        </div>
    )
}

export default Input