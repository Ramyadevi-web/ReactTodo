import React from 'react'
import { useState } from 'react'

function Filter({todo,setTodo,originalTodos}) {

     const [statusFilter,setStatusFilter] = useState("All")
     
     const handleClick = (event)=>{
        const selectedFilter = event.target.textContent;
          setStatusFilter(selectedFilter)
          if(selectedFilter == "Completed"){
            setTodo(originalTodos.filter((item)=>item.status=="Completed"))
          }else if(selectedFilter == "Not Completed"){
            setTodo(originalTodos.filter((item)=>item.status=="Not Completed"))
          }else{
            setTodo(originalTodos)
          }
            
     }
return (
    <div className='todoFilter d-flex flex-row justify-content-between  me-5 ms-5 mt-5 fs-4 fw-semibold'>
        <div>My Todo</div>
   
        <div  className='todoFilter d-flex flex-row'>
            <div>Status Filter:</div>&nbsp;
          <div className="dropdown">
            <button className="dropdown-button dropdown-toggle filterButton" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {statusFilter}
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" onClick={handleClick}>All</a></li>
                <li><a className="dropdown-item" href="#" onClick={handleClick}>Not Completed</a></li>
                <li><a className="dropdown-item" href="#" onClick={handleClick}>Completed</a></li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Filter
