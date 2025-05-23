import { Trash2 } from "lucide-react"
import TaskButton from "./TaskButton"
import useTaskStore from "../stores/useTaskStore"

const Task = ({ task }) => {
  const toggleCompleted = useTaskStore(state => state.toggleCompleted)
  const deleteTask = useTaskStore(state => state.deleteTask)

  return (
    <div className="flex justify-between items-center pl-3 border-b-1 border-b-border dark:border-b-border-dark">
      <button onClick={() => toggleCompleted(task.id)} className="flex flex-col gap-1">
        <p className={`${task.isCompleted ? 'line-through' : 'no-underline'} decoration-red-500`}>
          {task.task}
        </p>
        {!task.isCompleted && <p className="text-text-secondary dark:text-text-dark-secondary">created at</p>}
      </button>
      <div>
        <TaskButton onClick={() => deleteTask(task.id)} icon={Trash2} ariaLabel="Delete task" />
      </div>
    </div>
  )
}

export default Task