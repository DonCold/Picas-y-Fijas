import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import 'bootswatch/dist/sketchy/bootstrap.min.css'
import './index.css'

import { TaskContextProvider } from './context/TaskContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>
)
