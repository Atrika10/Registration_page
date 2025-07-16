import React from 'react'
import { useState } from 'react'

function UserDetailsByTime() {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [userDetails, setUserDetails] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log({startDate, endDate});

    try{
      const response =  await fetch('http://localhost:5000/user/details', {
        method : "POST",
         headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({startDate, endDate}),
      })

      const data = await response.json();
      console.log("dataaaaa", data);
      setUserDetails(data.data);

    }catch(err){
      console.log("errrorrrr", err);
    }
  }

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
            onClick={handleSubmit}
          >
            Details
          </button>
        </div>

        {/* Details/Content area */}
        <div className="mt-6 p-8 border-2 border-gray-200 rounded-lg min-h-[200px] bg-gray-300">
          <div className="text-center text-gray-400 mt-16">
            {userDetails.length === 0 ? <> "No user details found"</>  
            : <>
            {userDetails.map((user, index)=>{
              return (
                <div key={index} className="mb-4">
                  <p className="text-gray-700">Name: {user.firstName} {user.lastName}</p>
                  <p className="text-gray-700">Email: {user.email}</p>
                  <p className="text-gray-700">Phone: {user.phone}</p>
                  <p className="text-gray-700">Created At: {new Date(user.createdAt).toLocaleDateString()}</p>
                </div>
              )
            })}
             </>}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default UserDetailsByTime