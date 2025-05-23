import useTaskStore from "../stores/useTaskStore"

const Counter = () => {
  const tasks = useTaskStore(state => state.tasks)
  return (
    <div className="py-5 text-center">
      <p>tasks: {tasks.length}</p>
    </div>
  )
}

export default Counter