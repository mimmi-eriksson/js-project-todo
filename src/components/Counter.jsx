import useTaskStore from "../stores/useTaskStore"

const Counter = () => {
  const tasks = useTaskStore(state => state.tasks)
  const completedTasks = tasks.filter(task => task.isCompleted)

  return (
    <div className="py-5 text-center">
      <p> {completedTasks.length} of {tasks.length} tasks remaining</p>
    </div>
  )
}

export default Counter