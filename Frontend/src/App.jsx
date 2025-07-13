import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from '../src/components/Registration.jsx';

function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element= {<Registration/>} />
    <Route path='/dashboard' element={<h1>Dashboard</h1>} />
    <Route path='*' element={<h1>Page Not Found</h1>}/>
   
   </Routes>
   </BrowserRouter>
  )
}

export default App
