import React from 'react'
import Todo from './components/Todo.jsx'
import Header from './components/Header.jsx'
import './App.css'
import Footer from './Footer.jsx'

alert('Hello prince....Welcome to the Todo App!, ')

function App() {
  

  return (
    
      <div className= 'todo-app'>

        <Header />

        <div className="todo">
          <Todo />
        </div>
        
        <Footer />
        
      </div>
      
    
    
  )
}

export default App
