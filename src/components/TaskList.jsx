import Task from "./Task"
import Empty from "./Empty"
import Counter from "./Counter"
import useTaskStore from "../stores/useTaskStore"

const TaskList = () => {
  const tasks = useTaskStore(state => state.tasks)
  return (
    <div className="bg-white dark:bg-background-dark border-x-1 border-border dark:border-border-dark w-full flex-grow flex flex-col max-w-[1024px]">
      {tasks.length > 0 && (
        <div className="flex flex-col">
          {tasks.map(task => <Task key={task.id} task={task} />)}
        </div>
      )}
      {tasks.length > 0 && <Counter />}
      {tasks.length === 0 && <Empty />}
    </div>
  )
}

export default TaskList