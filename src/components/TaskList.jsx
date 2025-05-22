import Task from "./Task"
import Counter from "./Counter"
import taskStore from "../stores/taskStore"

const TaskList = () => {
  const tasks = taskStore(state => state.tasks)
  return (
    <div className="bg-background dark:bg-background-dark">
      <div>
        {tasks.map(task => <Task key={task.id} task={task} />)}
      </div>
      <Counter />
    </div>
  )
}

export default TaskList