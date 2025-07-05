import React from 'react'
import { useState } from 'react'
import styles from './form.module.css'
import ErrorMsg from './ErrorMsg'

const Form = ({todos, setTodos}) => {

    const [error, setError] = useState(false)
     const [todo, setTodo] = useState('');
    const [errorMsg ,setErrorMsg] = useState('')

     const handleSubmit = (e) => {
        e.preventDefault();
     if (todo !== ''){ 
      setTodos([...todos, todo]);
      setTodo('');
      setError(false)
      setErrorMsg('')
    } 
      
      else {
            setTodo('');
            setError(true)
            setErrorMsg('I use God beg you, please enter a meaningful data.')
      }
    }

    
       

        

  return (
    <div>
         <ErrorMsg errorMsg={errorMsg} error={error}/>

        <div className="inputContainer">
            <form className={styles.todoForm} onSubmit={handleSubmit}>
            <input className={styles.input} 
            type='text' 
            value={todo} 
            onChange={(e)=> setTodo(e.target.value)} 
            placeholder='Add a new todo'
            />


            <button className={styles.btn} type='submit'>Add</button>
            
        </form>
        </div>
        
    </div>
  )
}

export default Form