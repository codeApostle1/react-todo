import React from 'react'
import { useState } from 'react'
// import TodoItem from './TodoItem';
import Form from './Form';
import Todolist from './Todolist';

const Todo = () => {

    const [todos, setTodos] = useState([])


    
   

  return (
    <div className='todoCont'>

      {/* <p className="error">green</p> */}
        <Form todos={todos} setTodos={setTodos} />

        <Todolist todos={todos} setTodos={setTodos} />
        
        
    </div>
  )
}

export default Todo