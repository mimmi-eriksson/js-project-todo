import useTaskStore from "../stores/useTaskStore"

const Counter = () => {
  const tasks = useTaskStore(state => state.tasks)
  const unCompletedTasks = tasks.filter(task => !task.isCompleted)

  return (
    <div className="py-8 text-center text-text-secondary dark:text-text-secondary-dark">
      <p> {unCompletedTasks.length} of {tasks.length} tasks remaining</p>
    </div>
  )
}

export default Counter