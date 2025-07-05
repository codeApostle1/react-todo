import React from 'react'
import styles from './todoItem.module.css'

const TodoItem = ({item, todos, setTodos}) => {

    function handleDelete(item) {
        setTodos(todos.filter((todo)=> todo !== item));
    }

    

  return (
    <div className={styles.item}>
        <div className={styles.itemName}>
             {item}

             <span><button onClick={() => handleDelete(item)} className={styles.delete}>X</button></span>
        </div>
       <hr className={styles.line} />
    </div>
  )
}

export default TodoItem