import React from 'react';
import './App.css';

const TodoList =(props)=>{
    
    return (
        <>
            <div className='list_style'>
            <i className="fas fa-times-octagon" onClick={()=>{
                props.onSelect(props.id);
            }}></i>
            <li>{props.text}</li>
            </div>
        </>
    )
}

export default TodoList;