import React, { useState } from 'react';
import './App.css';
import TodoList from './ToDoList';

function App() {
  const [inputData,setInputData]=useState();
  const [todolist,settodolist]=useState([]);
  const inputItem=(event)=>{
    setInputData(event.target.value);
  }
  const add_Item=()=>{
    settodolist((olddata)=>{
      return [...olddata,inputData];
    });
    setInputData("");
  }
  const deleteItems=(id)=>{
    console.log('Clicked');
    settodolist((olddata)=>{
      return olddata.filter((data,index)=>{
        return index !==id;
      })
    });
}
  return (
    <>
    <div className='main_Container'>
      <div className='box_container'>
        <h3 className='main_heading'>ToDo List</h3>
        <div className='main_content'>
          <input type='text' name='todo' placeholder='Add Item List' onChange={inputItem} value={inputData} />
          <button onClick={add_Item}>+</button>
          
        </div>
        <div className='list_content'>
          <ol>
            
            {
              todolist.map((val,index)=>{
                return(
                <TodoList 
                  key={index}
                  id={index}
                  text= {val}
                  onSelect={deleteItems}
                />
                )
              })
            }
          </ol>
        </div>
      </div>
    </div>
    </>
  )
}

export default App;
