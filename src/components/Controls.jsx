import useTaskStore from "../stores/useTaskStore"
import { useState } from "react"

const Controls = () => {
  const addTask = useTaskStore(state => state.addTask)

  const [newTask, setNewTask] = useState("")

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (newTask) {
      addTask(newTask)
      setNewTask("")
    } else {
      alert("please fill in a task")
    }
  }

  return (
    <div className="bg-surface dark:bg-surface-dark">
      <form onSubmit={handleSubmit}>
        <label htmlFor="addTask">Add task</label>
        <input type="text" id="addTask" value={newTask} onChange={handleChange} />
        <button type="submit">Add task</button>
      </form>
    </div>
  )
}

export default Controls