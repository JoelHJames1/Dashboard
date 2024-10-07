import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ArrowLeft, Save } from 'lucide-react'

type PatientForm = {
  firstName: string
  middleName: string
  lastName: string
  preferredName: string
  dob: string
  gender: string
  ethnicity: string
  mmgContact: string
  status: string
  currentClinic: string
  referralSource: string
  addressType: string
  address: string
  unit: string
  city: string
  state: string
  zipCode: string
  notes: string
}

const AddPatient: React.FC = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm<PatientForm>()

  const onSubmit = (data: PatientForm) => {
    console.log(data)
    // Here you would typically send this data to your API
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-5xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center space-x-5">
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Add New Patient</h2>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col">
                    <label className="leading-loose">First Name</label>
                    <input type="text" {...register('firstName', { required: 'First name is required' })} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Middle Name</label>
                    <input type="text" {...register('middleName')} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Last Name</label>
                    <input type="text" {...register('lastName', { required: 'Last name is required' })} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col">
                    <label className="leading-loose">Preferred Name</label>
                    <input type="text" {...register('preferredName')} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Date of Birth</label>
                    <input type="date" {...register('dob', { required: 'Date of birth is required' })} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                    {errors.dob && <p className="text-red-500 text-sm">{errors.dob.message}</p>}
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Gender</label>
                    <select {...register('gender', { required: 'Gender is required' })} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                      <option value="">Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col">
                    <label className="leading-loose">Ethnicity</label>
                    <input type="text" {...register('ethnicity')} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">MMG Contact</label>
                    <input type="text" {...register('mmgContact')} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Status</label>
                    <select {...register('status', { required: 'Status is required' })} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                      <option value="">Select status</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                    {errors.status && <p className="text-red-500 text-sm">{errors.status.message}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col">
                    <label className="leading-loose">Current Clinic</label>
                    <input type="text" {...register('currentClinic')} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Referral Source</label>
                    <input type="text" {...register('referralSource')} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Address Type</label>
                    <select {...register('addressType')} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                      <option value="Home">Home</option>
                      <option value="Work">Work</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col col-span-2">
                    <label className="leading-loose">Address</label>
                    <input type="text" {...register('address')} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Unit</label>
                    <input type="text" {...register('unit')} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col">
                    <label className="leading-loose">City</label>
                    <input type="text" {...register('city')} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">State</label>
                    <input type="text" {...register('state')} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Zip Code</label>
                    <input type="text" {...register('zipCode')} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Notes</label>
                  <textarea {...register('notes')} rows={3} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"></textarea>
                </div>
              </div>
              <div className="pt-4 flex items-center space-x-4">
                <button type="button" onClick={() => navigate('/dashboard')} className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                  <ArrowLeft className="w-6 h-6 mr-1" />
                  <span className="text-sm">Cancel</span>
                </button>
                <button type="submit" className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                  <Save className="w-6 h-6 mr-1" />
                  <span className="text-sm">Save</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPatient