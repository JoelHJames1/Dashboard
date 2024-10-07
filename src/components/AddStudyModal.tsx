import React from 'react'
import { useForm } from 'react-hook-form'
import { X } from 'lucide-react'

type StudyForm = {
  name: string
  protocol: string
  description: string
  status: string
  institute: string
  primaryIndication: string
  secondaryIndication: string
  pi: string
  prscSc: string
}

type AddStudyModalProps = {
  onClose: () => void
}

const AddStudyModal: React.FC<AddStudyModalProps> = ({ onClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<StudyForm>()

  const onSubmit = (data: StudyForm) => {
    console.log(data)
    // Here you would typically send this data to your API
    onClose()
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                  Add New Study
                </h3>
                <div className="mt-2">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Study Name</label>
                        <input
                          type="text"
                          id="name"
                          {...register('name', { required: 'Study name is required' })}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="protocol" className="block text-sm font-medium text-gray-700">Protocol</label>
                        <input
                          type="text"
                          id="protocol"
                          {...register('protocol', { required: 'Protocol is required' })}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        {errors.protocol && <p className="mt-2 text-sm text-red-600">{errors.protocol.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                        <input
                          type="text"
                          id="description"
                          {...register('description')}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                        <input
                          type="text"
                          id="status"
                          {...register('status', { required: 'Status is required' })}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        {errors.status && <p className="mt-2 text-sm text-red-600">{errors.status.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="institute" className="block text-sm font-medium text-gray-700">Institute</label>
                        <select
                          id="institute"
                          {...register('institute', { required: 'Institute is required' })}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        >
                          <option value="">Select institute</option>
                          <option value="NIAID">NIAID</option>
                          <option value="OTHER">OTHER</option>
                        </select>
                        {errors.institute && <p className="mt-2 text-sm text-red-600">{errors.institute.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="primaryIndication" className="block text-sm font-medium text-gray-700">Primary Indication</label>
                        <input
                          type="text"
                          id="primaryIndication"
                          {...register('primaryIndication', { required: 'Primary indication is required' })}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        {errors.primaryIndication && <p className="mt-2 text-sm text-red-600">{errors.primaryIndication.message}</p>}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="secondaryIndication" className="block text-sm font-medium text-gray-700">Secondary Indication</label>
                        <input
                          type="text"
                          id="secondaryIndication"
                          {...register('secondaryIndication')}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="pi" className="block text-sm font-medium text-gray-700">PI</label>
                        <input
                          type="text"
                          id="pi"
                          {...register('pi', { required: 'PI is required' })}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        {errors.pi && <p className="mt-2 text-sm text-red-600">{errors.pi.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="prscSc" className="block text-sm font-medium text-gray-700">PRSC/SC</label>
                        <input
                          type="text"
                          id="prscSc"
                          {...register('prscSc', { required: 'PRSC/SC is required' })}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        {errors.prscSc && <p className="mt-2 text-sm text-red-600">{errors.prscSc.message}</p>}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={handleSubmit(onSubmit)}
            >
              Save
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddStudyModal