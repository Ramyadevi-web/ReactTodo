import React from 'react'
import { useState } from 'react'

function AddTodo({todo,setTodo}) {

  const [name,setName] = useState("")
  const [description,setDescription] = useState("")
  let status = "Not Completed"

  const handleAdd = (()=>{
     
        let newArray = [...todo]
        newArray.push({name,description,status});
        setTodo(newArray)

        setName("")
        setDescription("")
  })
  return (
  
    <>
    
    <div className='d-flex justify-content-center mt-5 fs-3 fw-semibold greenColor mb-5'>My todo</div>
        <div className="d-flex  align-items-center justify-content-center gap-3">
            <div>
                <input type="text" placeholder='Todo Name' 
                className="form-control inputField" 
                aria-describedby="passwordHelpInline"
                value={name}
                onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
                <input type="text" placeholder='Todo Description' 
                className="form-control inputField" 
                aria-describedby="passwordHelpInline"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div>
                <button type="submit" className='btn greenbackground Todo' onClick={()=>handleAdd()}>Add Todo</button>
            </div>
        </div>
    </>
  )
}

export default AddTodo
