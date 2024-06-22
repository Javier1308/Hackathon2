
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css'
import Log from './pages/Log'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='*' element={<Navigate to="/login" replace />} />
        <Route path='/login' element={<Log />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>

    </Router>
  )
}

export default App
