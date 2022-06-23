import { useState, useEffect } from 'react'

const API = "http://localhost:8000"

const useTasks = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch(`${API}`)
      .then(response => response.json())
      .then(data => setTasks(data))
  }, [])

  const saveTask = ({ title, desc }) => {
    const newTask = {
      title,
      desc
    }

    fetch(`${API}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTask)
    }).then(response => response.json()).then(data => {
      setTasks([...tasks, data])
    })

  }

  const editTask = (id, { title, desc }) => {

    fetch(`${API}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, desc })
    }).then(response => response.json()).then(data => {
      setTasks(tasks.map(task => task._id === id ? data : task))
    })
  }

  const deleteTask = (id) => {
    fetch(`${API}/${id}`, {
      method: "DELETE"
    }).then(response => response.json()).then(data => {
      setTasks(tasks.filter(task => task._id !== id))
    })
  }

  return {
    tasks,
    saveTask,
    editTask,
    deleteTask,
  }
}

export default useTasks
