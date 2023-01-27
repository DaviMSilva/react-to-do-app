
import { TaskFormPage, TaskList } from "pages";
import { BrowserRouter, Routes, Route  } from "react-router-dom";

export function AppRoute(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskList/>}/>
        <Route path="/tasks" element={<TaskList/>}/>
        <Route path="/task-form" element={<TaskFormPage/>}/>
        <Route path="/task-form/:id" element={<TaskFormPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}