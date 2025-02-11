import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom';


  function Card({todo,status,setTodo,setStatus}) {

    let navigate = useNavigate();

    const handleClick = (index,newStatus)=>{    
            let newTodo = [...todo];
            newTodo[index].status = newStatus;
            setTodo(newTodo)
    }

    const handleDelete = (index)=>{
      let newTodos = [...todo];
      newTodos.splice(index,1);
      setTodo(newTodos);
    }

     return (
      <>
      <div className='d-flex flex-row flex-wrap justify-content-center'>
      {
        todo.map((item,index)=>{
          return(
        <div className='cardContainer' key={index}>
          <div className='cardContent p-5'>
             <div className='pb-2'><strong>Name :</strong> {item.name}</div>
             <div className='pb-2'><strong>Description :</strong>{item.description}</div>
            <div className=' d-flex flex-row '>
              <div className="align-content-center me-3">
              Status
              </div>
              <div className="dropdown">
                  
                      <button className="dropdown-button dropdown-toggle" 
                      style={{backgroundColor:todo[index].status ==="Completed"?"#28a745":""}}type="button"
                      data-bs-toggle="dropdown" aria-expanded="false">
                      {todo[index].status}
                      </button>
                    
                      <ul className="dropdown-menu">
                          <li><button className="dropdown-item" href="#" 
                          onClick={()=>handleClick(index,"Not Completed")}>Not Completed</button></li>
                          <li><button className="dropdown-item"  href="#"
                          onClick={()=>handleClick(index,"Completed")}>Completed</button></li>
                      </ul>
              </div>
            </div>
          </div>
          <div className='footerButton d-flex justify-content-end me-4'>
            <button className="btn greenbackground" onClick={()=>{navigate(`/edit-user/${index}`)}}>Edit</button>&nbsp;
            <button className="btn deleteButton" onClick={()=>handleDelete(index)}>Delete</button>
          </div>
        </div>
          )
         
        })
      } 
      </div>
      
      </> 
  )
}

export default Card
