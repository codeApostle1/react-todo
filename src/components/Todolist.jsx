import React from 'react'
import TodoItem from './todoItem'
import styles from './todolist.module.css'

const Todolist = ({todos, setTodos}) => {
  return (
    <div className={styles.list}> 
        {todos.map((item) => (
                <TodoItem key={item} 
                item={item} 
                todos={todos}
                setTodos={setTodos} />
            ))}
    </div>
  )
}

export default Todolist