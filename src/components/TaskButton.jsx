const TaskButton = ({ icon, text }) => {
  return (
    <button className="bg-surface p-2">
      <img src={icon} alt={text} />
    </button>
  )
}

export default TaskButton