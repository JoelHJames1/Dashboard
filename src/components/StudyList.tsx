import React, { useState, useEffect } from 'react'
import { Search } from 'lucide-react'

type Study = {
  id: string
  name: string
  protocol: string
  institute: string
  primaryIndication: string
}

const StudyList: React.FC = () => {
  const [studies, setStudies] = useState<Study[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // Fetch studies data from API
    const fetchStudies = async () => {
      // Replace with actual API call
      const mockStudies: Study[] = [
        { id: '1', name: 'Cardiology Study', protocol: 'CARD-001', institute: 'Heart Institute', primaryIndication: 'Heart Disease' },
        { id: '2', name: 'Oncology Trial', protocol: 'ONC-002', institute: 'Cancer Research Center', primaryIndication: 'Lung Cancer' },
        { id: '3', name: 'Neurology Research', protocol: 'NEURO-003', institute: 'Brain Institute', primaryIndication: 'Alzheimer\'s' },
      ]
      setStudies(mockStudies)
    }
    fetchStudies()
  }, [])

  const filteredStudies = studies.filter(study =>
    study.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    study.protocol.toLowerCase().includes(searchTerm.toLowerCase())
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
            placeholder="Search studies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {filteredStudies.map((study) => (
            <li key={study.id}>
              <div className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-blue-600 truncate">{study.name}</p>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {study.protocol}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      Institute: {study.institute}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <p>Primary Indication: {study.primaryIndication}</p>
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

export default StudyList