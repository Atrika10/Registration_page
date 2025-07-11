import React, { useState } from 'react'

function Registration() {
  const [formData, setFormData] = useState(
    {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: ''
    }
  )
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: ''
  });
  const [isSubmit, setIsSubmit] = useState(false);

  // function to handle the value of the input field
  const handleInputChange = (e)=>{
    setFormData((prevData)=>{
      return {
        ...prevData,
        [e.target.name] : e.target.value
      }
    });

    // clear Error when user start typing
    if(errors[e.target.name]){
      setErrors((prevErr)=>{
        return {
          ...prevErr,
          [e.target.name] : ''
        }
      })
    }

     console.log(e.target.value, 'valueeee');
  }

  // function to handle the form submission
  const handleSubmit = (e) =>{
    e.preventDefault();
    setIsSubmit(true);
    console.log('Form submitted', formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: ''
    })
  }
 
  // now write validation function for all the fields
  const validators = {
    firstName : (value)=>{
      if(!value) return 'First name is required';
      if(value.length < 2) return 'First name must be at least 2 characters long';
      if(!/^[a-zA-Z]+$/.test(value)) return 'First name can only contain letters';
      return ''; // return empty string if no error
    },
    lastName : (value)=>{
      if(!value) return 'Last name is required';
      if(value.length < 2) return 'Last name must be at least 2 characters long';
      if(!/^[a-zA-Z]+$/.test(value)) return 'Last name can only contain letters';
      return '';
    },
    email : (value)=>{
      if(!value) return 'Email is required';
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailPattern.test(value)) return 'Invalid email format';
      return '';
    },
    password : (value)=>{
      if(!value) return 'Password is required';
      if(value.length < 6) return 'Password must be at least 6 characters long';
      return '';
    },
    phone : (value)=>{
      if(!value) return 'Phone number is required';
      const phonePattern = /^\+?[1-9]\d{1,14}$/; // E.164 format
      if(!phonePattern.test(value)) return 'Invalid phone number format';
      return '';
    }
  }

  // function to validate the field
  const validateField = (fieldName, value)=>{
    const validator = validators[fieldName];
    if(validator) {
      return validator(value);
    }
    return ''; // return empty string if no validator is found
  }

  // function to handle input blur event
  const handleInputBlur = (e)=>{
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error
    }));
  }

  return (
    <>
     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md border border-gray-200">
        <div className="px-6 py-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
            <p className="text-gray-600 mt-2">Enter your information to create your account</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2" >
                  First Name
                </label>
                <input
                value={formData.firstName}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                  id="firstName"  
                  name="firstName"
                  type="text"
                  placeholder="John"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                value={formData.lastName}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
                id="email"
                name="email"
                type="email"
                placeholder="john.doe@example.com"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
              value={formData.password}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
              value={formData.phone}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 123 456 7890"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <button
              type="submit"
              
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 font-medium"
            >
              {isSubmit ? 'Created' : 'Create Account'}
            </button>
          </form>

          <div className="text-center mt-6 text-sm text-gray-600">
            Already have an account?
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500 hover:underline">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Registration