import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { User, LogOut, Plus } from 'lucide-react'
import PatientList from './PatientList'
import StudyList from './StudyList'
import ClinicList from './ClinicList'
import AddStudyModal from './AddStudyModal'
import AddClinicModal from './AddClinicModal'

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('patients')
  const [showAddStudyModal, setShowAddStudyModal] = useState(false)
  const [showAddClinicModal, setShowAddClinicModal] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const email = location.state?.email || 'User'

  const handleLogout = () => {
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <User className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-800">Pact Management System</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">Welcome, {email}!</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <LogOut className="h-5 w-5 mr-2 inline" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            <button
              onClick={() => setActiveTab('patients')}
              className={`inline-flex items-center px-4 py-2 text-base font-medium ${
                activeTab === 'patients'
                  ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-500'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 border-transparent'
              }`}
            >
              Patients
            </button>
            <button
              onClick={() => setActiveTab('studies')}
              className={`inline-flex items-center px-4 py-2 text-base font-medium ${
                activeTab === 'studies'
                  ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-500'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 border-transparent'
              }`}
            >
              Studies
            </button>
            <button
              onClick={() => setActiveTab('clinics')}
              className={`inline-flex items-center px-4 py-2 text-base font-medium ${
                activeTab === 'clinics'
                  ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-500'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 border-transparent'
              }`}
            >
              Clinics
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {activeTab === 'patients' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Patients</h2>
                <button
                  onClick={() => navigate('/add-patient')}
                  className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Plus className="h-5 w-5 mr-2 inline" />
                  Add Patient
                </button>
              </div>
              <PatientList />
            </div>
          )}

          {activeTab === 'studies' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Studies</h2>
                <button
                  onClick={() => setShowAddStudyModal(true)}
                  className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Plus className="h-5 w-5 mr-2 inline" />
                  Add Study
                </button>
              </div>
              <StudyList />
            </div>
          )}

          {activeTab === 'clinics' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Clinics</h2>
                <button
                  onClick={() => setShowAddClinicModal(true)}
                  className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Plus className="h-5 w-5 mr-2 inline" />
                  Add Clinic
                </button>
              </div>
              <ClinicList />
            </div>
          )}
        </div>
      </main>

      {showAddStudyModal && (
        <AddStudyModal onClose={() => setShowAddStudyModal(false)} />
      )}

      {showAddClinicModal && (
        <AddClinicModal onClose={() => setShowAddClinicModal(false)} />
      )}
    </div>
  )
}

export default Dashboard