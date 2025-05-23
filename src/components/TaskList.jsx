import Task from "./Task"
import Counter from "./Counter"
import useTaskStore from "../stores/useTaskStore"

const TaskList = () => {
  const tasks = useTaskStore(state => state.tasks)
  return (
    <div className="bg-white dark:bg-background-dark w-full">
      <div className="flex flex-col">
        {tasks.map(task => <Task key={task.id} task={task} />)}
      </div>
      <Counter />
    </div>
  )
}

export default TaskList