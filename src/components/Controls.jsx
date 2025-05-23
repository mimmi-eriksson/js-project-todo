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
    <div className="bg-surface dark:bg-surface-dark px-1 py-2">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-1">
          <label htmlFor="addTask" className="hidden">Add task</label>
          <input className="bg-white dark:bg-background-dark rounded border border-border" type="text" id="addTask" value={newTask} onChange={handleChange} />
          <button type="submit">Add task</button>
        </div>
      </form>
    </div>
  )
}

export default Controls