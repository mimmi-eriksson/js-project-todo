import useTaskStore from "../stores/useTaskStore"
import { useState } from "react"
import ControlsButton from "./ControlsButton"

const Controls = () => {
  const addTask = useTaskStore(state => state.addTask)
  const completeAll = useTaskStore(state => state.completeAll)
  const deleteAll = useTaskStore(state => state.deleteAll)

  const [newTask, setNewTask] = useState("")
  const [inputVisible, setInputVisible] = useState(false)

  const toggleInputVisible = () => {
    setInputVisible(!inputVisible)
  }

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (newTask) {
      addTask(newTask)
      setNewTask("")
      setInputVisible(false)
    } else {
      setInputVisible(false)
    }
  }

  return (
    <div className="bg-surface dark:bg-surface-dark border-y-1 border-y-border dark:border-y-border-dark w-full px-2 py-4 h-20 flex items-center">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex items-center gap-2 justify-stretch">
          {!inputVisible &&
            <label htmlFor="addTask" className="bg-white dark:bg-background-dark rounded-lg border border-border dark:border-border-dark flex gap-2 p-2 grow" onClick={() => toggleInputVisible()}>
              <img src="/assets/icons/plus.svg" alt="plus icon" />
              <p className="font-medium text-xl text-accent dark:text-accent-dark">Add task</p>
            </label>}
          {inputVisible &&
            <input className="bg-white dark:bg-background-dark rounded-lg border border-border dark:border-border-dark p-2 grow" type="text" id="addTask" placeholder="Type here..." value={newTask} onChange={handleChange} />
          }
          {inputVisible && <button className="font-medium text-xl text-accent dark:text-accent-dark px-2 py-1" type="submit">Done</button>}
          {!inputVisible &&
            <div className="flex items-center">
              <ControlsButton icon="/assets/icons/filter.svg" text="Filter" />
              <ControlsButton onClick={() => completeAll()} icon="/assets/icons/check-box.svg" text="Complete all" />
              <ControlsButton onClick={() => deleteAll()} icon="/assets/icons/trash-bin.svg" text="Delete all" />
            </div>}
        </div>
      </form>
    </div>
  )
}

export default Controls