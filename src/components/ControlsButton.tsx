type ControlsButtonProps = {
  icon: React.ElementType
  onClick?: () => void
  ariaLabel?: string
}

const ControlsButton = ({
  icon: Icon,
  onClick,
  ariaLabel = 'icon button',
}: ControlsButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="text-accent dark:text-accent-dark hover:text-hover dark:hover:text-hover-dark cursor-pointer p-1"
    >
      <Icon className="w-8 h-8" />
      <p className="hidden md:inline">{ariaLabel}</p>
    </button>
  );
};

export default ControlsButton;

