import { useState, createContext } from 'react'

import useTasks from '../hooks/useTasks'

const Context = createContext({
  tasks: [],
  saveTask: () => {},
  editTask: () => {},
  deleteTask: () => {},

  isEdit: { _id: null },
  editTaskForm: () => {},
})

export const TaskContextProvider = ({ children }) => {
  const [isEdit, setIsEdit] = useState({
    _id: null,
  })

  const { tasks, deleteTask, editTask, saveTask } = useTasks()

  const editTaskForm = (id) => {
    if (!id) return setIsEdit({ _id: null })

    const task = tasks.find(task => task._id === id)
    setIsEdit(task)
  }

  return (
    <Context.Provider value={{ tasks, deleteTask, editTask, saveTask, isEdit, editTaskForm }}>
      {children}
    </Context.Provider>
  )
}

export default Context
