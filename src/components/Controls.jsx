import taskStore from "../stores/taskStore"
import { useState } from "react"

const Controls = () => {
  const addTask = taskStore(state => state.addTask)

  const [newTask, setNewTask] = useState({
    title: "",
    isCompleted: false
  })

  const handleChange = (event) => {
    setNewTask({
      ...newTask,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (newTask.title) {
      addTask(newTask)
      setNewTask({ title: "", isCompleted: false })
    } else {
      alert("please fill in a task")
    }
  }

  return (
    <div className="bg-surface dark:bg-surface-dark">
      <form onSubmit={handleSubmit}>
        <label htmlFor="addTask">Add task</label>
        <input type="text" id="addTask" name="title" value={newTask.title} onChange={handleChange} />
        <button type="submit">Add task</button>
      </form>
    </div>
  )
}

export default Controls