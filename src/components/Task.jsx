import TaskButton from "./TaskButton"

const Task = ({ task }) => {
  return (
    <div className="flex justify-between items-center pl-2">
      <div>
        <p className={`${task.isCompleted ? 'line-through' : 'no-underline'} decoration-red-500`}>{task.title}</p>
      </div>
      <div>
        <TaskButton icon="/assets/icons/trash-bin.svg" />
      </div>
    </div>
  )
}

export default Task