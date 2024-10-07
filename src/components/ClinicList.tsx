import React, { useState, useEffect } from 'react'
import { Search } from 'lucide-react'

type Clinic = {
  id: string
  name: string
  address: string
}

const ClinicList: React.FC = () => {
  const [clinics, setClinics] = useState<Clinic[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // Fetch clinics data from API
    const fetchClinics = async () => {
      // Replace with actual API call
      const mockClinics: Clinic[] = [
        { id: '1', name: 'Main Street Clinic', address: '123 Main St, Anytown, USA' },
        { id: '2', name: 'Downtown Medical Center', address: '456 Oak Ave, Metropolis, USA' },
        { id: '3', name: 'Sunset Health Clinic', address: '789 Sunset Blvd, Bigcity, USA' },
      ]
      setClinics(mockClinics)
    }
    fetchClinics()
  }, [])

  const filteredClinics = clinics.filter(clinic =>
    clinic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    clinic.address.toLowerCase().includes(searchTerm.toLowerCase())
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
            placeholder="Search clinics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {filteredClinics.map((clinic) => (
            <li key={clinic.id}>
              <div className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-blue-600 truncate">{clinic.name}</p>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      Address: {clinic.address}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ClinicList