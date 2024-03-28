import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import studentStore from './redux/studentsredux/studentsstore.js'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={studentStore}>
    <App />
    <ToastContainer/>
  </Provider>
)

  //     <React.StrictMode>
  // </React.StrictMode>,