import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function EditTodo({todo,setTodo}) {

  let navigate = useNavigate();
  let param = useParams();

  let [name,setName] = useState("");
  let [description,setDescription] = useState("");

  useEffect(()=>{
    if(param.id){
      setName(todo[param.id].name);
      setDescription(todo[param.id].description);
    }
    else {
         alert(`Inavlid User Id:${param.id}`)
         navigate("/")
      }
  },[])

  const handleEdit = (index)=>{
   let newTodo = [...todo];
   newTodo[index].name = name;
   newTodo[index].description = description;
   setTodo[newTodo];
   navigate("/")
  }

  return (
    <>
    <div className='container mt-'>
    <h1 className='text-center'>Edit Todo</h1>
 
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><strong>Todo Name</strong></Form.Label>
        <Form.Control type="text" value={`${name}`} onChange={((e)=>setName(e.target.value))}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><strong>Description</strong></Form.Label>
        <Form.Control type="text" value={`${description}`} onChange={((e)=>setDescription(e.target.value))}/>
      </Form.Group>
      <Button variant="primary" onClick={()=>handleEdit(param.id)}>
        Edit
      </Button>
      </Form>
    </div>
    </>
  )
}

export default EditTodo
