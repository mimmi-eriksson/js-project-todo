import TaskButton from "./TaskButton"
import useTaskStore from "../stores/useTaskStore"

const Task = ({ task }) => {
  const toggleCompleted = useTaskStore(state => state.toggleCompleted)
  const deleteTask = useTaskStore(state => state.deleteTask)

  return (
    <div className="flex justify-between items-center pl-2">
      <div onClick={() => toggleCompleted(task.id)}>
        <p className={`${task.isCompleted ? 'line-through' : 'no-underline'} decoration-red-500`}>{task.task}</p>
      </div>
      <div>
        <TaskButton onClick={() => deleteTask(task.id)} icon="/assets/icons/trash-bin.svg" />
      </div>
    </div>
  )
}

export default Task