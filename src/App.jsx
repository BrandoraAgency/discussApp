
import './App.css'  
import Dashboard from './view/Dashboard'
import ProjectMeeting from './view/ProjectMeeting'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
   <> 
   <Routes>
     <Route path='/' element={ <Dashboard/>}/>
     <Route path='/:meetID' element={<ProjectMeeting/>}/>
   </Routes>
   </>
  )
}

export default App
