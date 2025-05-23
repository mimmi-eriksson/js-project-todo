import Task from "./Task"
import Empty from "./Empty"
import Counter from "./Counter"
import useTaskStore from "../stores/useTaskStore"

const TaskList = () => {
  const tasks = useTaskStore(state => state.tasks)
  return (
    <div className="bg-white dark:bg-background-dark w-full flex-grow">
      <div className="flex flex-col">
        {tasks.map(task => <Task key={task.id} task={task} />)}
      </div>
      {tasks.length === 0 && <Empty />}
      {tasks.length > 0 && <Counter />}
    </div>
  )
}

export default TaskList