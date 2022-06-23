import { useContext } from 'react'

import TaskContext from '../context/TaskContext'

const Task = ({ id, task, desc }) => {
  const { deleteTask, editTaskForm } = useContext(TaskContext)

  const handleDelete = () => {
    deleteTask(id)
  }

  const handleEdit = () => {
    editTaskForm(id)
  }

  return (
    <tr>
      <th scope="row">{ id }</th>
      <td>{ task }</td>
      <td>{ desc }</td>
      <td>
        <button type="button" onClick={handleEdit} className="btn btn-info">Editar</button>
        <button type="button" onClick={handleDelete} className="btn btn-danger">Eliminar</button>
      </td>
    </tr>
  )
}

export default Task
