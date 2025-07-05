import React from 'react'
import Form from './Form'


const ErrorMsg = ({errorMsg, error}) => {
  return (
    <div>
    
     <p className="error">{errorMsg}</p>
    </div>
  )
}

export default ErrorMsg