import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './views/Home.jsx'
import NewTask from './views/newTask.jsx'
import EditTask from './views/EditTask.jsx'

import './css/index.css'

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/home" element={ <Home /> }></Route>
        <Route path="/new-task" element={ <NewTask /> }></Route>
        <Route path="/edit-task" element={ <EditTask /> }></Route>
      </Routes>
    </BrowserRouter>
  </>
)
