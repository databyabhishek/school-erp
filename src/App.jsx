// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/landing/Home'
import Login from './pages/auth/Login'
import Demo from './pages/landing/Demo'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/demo" element={<Demo />} />
    </Routes>
  )
}

export default App