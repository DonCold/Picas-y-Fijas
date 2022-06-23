import { useContext } from 'react'

import TaskContext from './context/TaskContext'

import TaskForm from './components/TaskForm'
import Task from './components/Task'

function App() {
  const { tasks } = useContext(TaskContext)

  return (
    <div className='container'>
      <h1 className='text-center'>Agrega tus Tareas</h1>

      <TaskForm />


      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Titulo</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.map(task => (
              <Task key={task._id} id={task._id} task={task.title} desc={task.desc} />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default App
