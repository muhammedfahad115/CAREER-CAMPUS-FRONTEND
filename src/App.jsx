import './App.css'
import Landingpage from './pages/Landingpage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StudentRouter from './router/StudentRouter'
import InstituitonRouter from './router/InstituitonRouter'
import EmployeesRouter from './router/EmployeesRouter'
import CompaniesRouter from './router/CompaniesRouter'
import PageNotFound from './components/PageNotFound'
function App() {

  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/companies/*' element={<CompaniesRouter/>} ></Route>
          <Route path='/students/*' element={<StudentRouter/>}></Route>
          <Route path='/institutions/*' element={<InstituitonRouter/>}></Route>
          <Route path='/employees/*' element={<EmployeesRouter/>}></Route>
          <Route path='/' element={<Landingpage/>}></Route>
          <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
