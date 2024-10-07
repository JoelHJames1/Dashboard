import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Edit } from 'lucide-react'

type Patient = {
  id: string
  name: string
  initial: string
  individualId: string
  notes: string
}

const PatientList: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    // Fetch patients data from API
    const fetchPatients = async () => {
      // Replace with actual API call
      const mockPatients: Patient[] = [
        { id: '1', name: 'John Doe', initial: 'JD', individualId: 'ID001', notes: 'Regular checkup' },
        { id: '2', name: 'Jane Smith', initial: 'JS', individualId: 'ID002', notes: 'Follow-up appointment' },
        { id: '3', name: 'Bob Johnson', initial: 'BJ', individualId: 'ID003', notes: 'New patient' },
      ]
      setPatients(mockPatients)
    }
    fetchPatients()
  }, [])

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.individualId.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <div className="mb-4">
        <div className="relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="Search patients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {filteredPatients.map((patient) => (
            <li key={patient.id}>
              <div className="px-4 py-4 sm:px-6 flex items-center justify-between hover:bg-gray-50">
                <div className="flex-grow cursor-pointer" onClick={() => navigate(`/patient/${patient.individualId}`)}>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-blue-600 truncate">{patient.name}</p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {patient.initial}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        ID: {patient.individualId}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <p>{patient.notes}</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => navigate(`/edit-patient/${patient.individualId}`)}
                  className="ml-4 px-3 py-1 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Edit className="h-4 w-4 mr-1 inline" />
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PatientList