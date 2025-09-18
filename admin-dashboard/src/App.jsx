import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import DashboardLayout from '../src/layout/DashboardLayout'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'

function App() {

  return (
    <DashboardLayout>
      <Routes>
          {/* <Route path='/login' element={}/> */}
          <Route path='/' element={<Dashboard />}/>
          <Route path='/about' element={<Projects />}/>
          <Route path='/skills' element={<Projects />}/>
          <Route path='/projects' element={<Projects />}/>
      </Routes>
    </DashboardLayout>
  )
}

export default App
