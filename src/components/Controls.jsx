import useTaskStore from "../stores/useTaskStore"
import { useState } from "react"
import ControlsButton from "./ControlsButton"
import { Trash2, Funnel, SquareCheck, Plus } from "lucide-react"

const Controls = () => {
  const addTask = useTaskStore(state => state.addTask)
  const completeAll = useTaskStore(state => state.completeAll)
  const deleteAll = useTaskStore(state => state.deleteAll)
  const hideCompleted = useTaskStore(state => state.hideCompleted)

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
            <label htmlFor="addTask" className="bg-white dark:bg-background-dark rounded-lg border border-border dark:border-border-dark text-accent dark:text-accent-dark hover:text-hover dark:hover:text-hover-dark cursor-pointer flex items-center gap-2 p-2 grow" onClick={() => toggleInputVisible()}>
              <Plus size={28} />
              <p className="font-medium text-xl">Add task</p>
            </label>}
          {inputVisible &&
            <input className="bg-white dark:bg-background-dark rounded-lg border border-border dark:border-border-dark p-2 grow" type="text" id="addTask" placeholder="Type here..." value={newTask} onChange={handleChange} />
          }
          {inputVisible && <button className="font-medium text-xl text-accent dark:text-accent-dark hover:text-hover dark:hover:text-hover-dark cursor-pointer px-2 py-1" type="submit">Done</button>}
          {!inputVisible &&
            <div className="flex items-center gap-1 md:gap-2">
              <ControlsButton onClick={() => hideCompleted()} icon={Funnel} ariaLabel="Filter" />
              <ControlsButton onClick={() => completeAll()} icon={SquareCheck} ariaLabel="Complete all" />
              <ControlsButton onClick={() => deleteAll()} icon={Trash2} ariaLabel="Delete all" />
            </div>}
        </div>
      </form>
    </div>
  )
}

export default Controls