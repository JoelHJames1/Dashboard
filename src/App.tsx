import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import PatientDetails from './components/PatientDetails'
import EditPatient from './components/EditPatient'
import AddPatient from './components/AddPatient'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/patient/:id" element={<PatientDetails />} />
          <Route path="/edit-patient/:id" element={<EditPatient />} />
          <Route path="/add-patient" element={<AddPatient />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App