const ControlsButton = ({ icon, text, onClick }) => {
  return (
    <button onClick={onClick} className="p-2">
      <img className="w-7" src={icon} alt={text} />
      <p className="hidden md:inline">{text}</p>
    </button>
  )
}

export default ControlsButton