import React from 'react'
import { useState } from 'react'

function UserDetailsByTime() {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  return (
    <div className='bg-black w-full h-screen flex  justify-center'> 
    <div className="w-[70%] mx-auto p-6 ">
      <div className="space-y-4">
        {/* Date inputs section */}
        <div className="flex items-center gap-4 w-[40%] m-auto">
          <div className="flex-1 space-y-3">
            <div>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="Start date"
                className="w-full px-3 py-2 bg-gray-100 border-0 rounded-md text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
              />
            </div>
            <div>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                placeholder="End date"
                className="w-full px-3 py-2 bg-gray-100 border-0 rounded-md text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Details button */}
          <button
            className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-full font-medium"
            onClick={() => {
              console.log("Start Date:", startDate)
              console.log("End Date:", endDate)
            }}
          >
            Details
          </button>
        </div>

        {/* Details/Content area */}
        <div className="mt-6 p-8 border-2 border-gray-200 rounded-lg min-h-[200px] bg-gray-300">
          <div className="text-center text-gray-400 mt-16">
            
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default UserDetailsByTime