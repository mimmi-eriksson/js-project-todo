const ControlsButton = ({ icon, text }) => {
  return (
    <button className="">
      <img src={icon} alt={text} />
      <p>{text}</p>
    </button>
  )
}

export default ControlsButton