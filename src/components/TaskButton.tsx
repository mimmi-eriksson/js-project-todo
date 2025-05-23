type TaskButtonProps = {
  icon: React.ElementType
  onClick?: () => void
  ariaLabel?: string
}

const TaskButton = ({
  icon: Icon,
  onClick,
  ariaLabel = 'icon button',
}: TaskButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="bg-surface dark:bg-surface-dark border-l-1 border-l-border dark:border-l-border-dark text-accent dark:text-accent-dark hover:text-hover dark:hover:text-hover-dark cursor-pointer p-4"
    >
      <Icon className="w-8 h-8" />
    </button>
  )
}

export default TaskButton


