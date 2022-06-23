import { useState, useContext, useEffect } from 'react'

import TaskContext from '../context/TaskContext'

const TaskForm = () => {
  const { saveTask, editTask, isEdit, editTaskForm } = useContext(TaskContext)

  const [task, setTask] = useState('')
  const [desc, setDesc] = useState('')

  useEffect(() => {
    if (isEdit?._id) {
      const { title, desc } = isEdit
      setTask(title)
      setDesc(desc)
    }
  }, [isEdit])

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  const handleChangeDesc = (e) => {
    setDesc(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (task === '' || desc === '') return;

    if (isEdit?._id) {
      editTask(isEdit?._id, {
        title: task,
        desc: desc
      })

      editTaskForm()

    } else {
      saveTask({
        title: task,
        desc: desc,
      })
    }

    setTask('')
    setDesc('')
  }

  const handleEditCancel = () => {
    editTaskForm()

    setTask('')
    setDesc('')
  }

  const BUTTON = isEdit._id ? 'Editar Tarea' : 'Agregar Tarea'

  return (
    <form onSubmit={handleSubmit} className="card">
      <div className='card-body'>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingInput" placeholder="Titulo Tarea" value={task} onChange={handleChange} />
          <label htmlFor="floatingInput">Titulo</label>
        </div>

        <div className="form-floating">
          <textarea className="form-control" placeholder='Descripcion' id="floatingTextarea" value={desc} onChange={handleChangeDesc} />
          <label htmlFor="floatingTextarea">Descripcion</label>
        </div>

        <div className="mt-5">
          <button type='submit' className="btn btn-primary">{ BUTTON }</button>
          { isEdit._id && <button type='button' className="btn btn-danger" onClick={handleEditCancel}>Cancelar</button> }
        </div>
      </div>
    </form>
  )
}

export default TaskForm
