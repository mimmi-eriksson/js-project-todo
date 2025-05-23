const TaskButton = ({ onClick, icon, text }) => {
  return (
    <button onClick={onClick} className="bg-surface p-2">
      <img src={icon} alt={text} />
    </button>
  )
}

export default TaskButton