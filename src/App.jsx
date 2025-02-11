import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Card from './components/Card';
import Filter from './components/Filter';
import AddTodo from './components/AddTodo';
import EditTodo from './components/EditTodo';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';


function App(){

   let [todos,setTodo] = useState([
      {
         name:"Complete Todo task",
         description:"Tomorrow is last date so have to submit the task by today.",
         status:"Not Completed"
      },
      {
         name:"Complete Landing Page task",
         description:"Monday is last date so have to submit the task by today.",
         status:"Not Completed"
      },
      {
         name:"Complete Capstone task",
         description:"Friday is last date so have to submit the task by today.",
         status:"Not Completed"
      },
      {
         name:"Complete Portfolio task",
         description:"Saturday is last date so have to submit the task by today.",
         status:"Not Completed"
      },
      {
         name:"Complete NodeJS task",
         description:"Tuesday is last date so have to submit the task by today.",
         status:"Not Completed"
      }
   ]); 

   let [originalTodos] = useState([
      {
         name:"Complete Todo task",
         description:"Tomorrow is last date so have to submit the task by today.",
         status:"Not Completed"
      },
      {
         name:"Complete Landing Page task",
         description:"Monday is last date so have to submit the task by today.",
         status:"Not Completed"
      },
      {
         name:"Complete Capstone task",
         description:"Friday is last date so have to submit the task by today.",
         status:"Not Completed"
      },
      {
         name:"Complete Portfolio task",
         description:"Saturday is last date so have to submit the task by today.",
         status:"Not Completed"
      },
      {
         name:"Complete NodeJS task",
         description:"Tuesday is last date so have to submit the task by today.",
         status:"Not Completed"
      }
   ]); 

   return <>
    <BrowserRouter>
      <Routes>
         <Route path="/Home" element={
            <>
              <AddTodo todo={todos} setTodo ={setTodo}/>
              <Filter  todo={todos} setTodo ={setTodo} originalTodos={originalTodos} />
              <Card todo={todos} setTodo ={setTodo}/>
            </>
            }/>
         <Route path="/edit-user/:id" element={<EditTodo  todo={todos} setTodo ={setTodo}/>}/>
         <Route path="/*" element={<Navigate to='/Home'/>}/>
      </Routes>
    </BrowserRouter>
   </> 
}

export default App