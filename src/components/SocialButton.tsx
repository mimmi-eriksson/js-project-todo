type SocialButtonProps = {
  icon: React.ElementType
  link: string
  ariaLabel?: string
}

const SocialButton = ({
  icon: Icon,
  link = "",
  ariaLabel = 'icon button',
}: SocialButtonProps): JSX.Element => {
  return (
    <li>
      <a
        className="hover:text-hover dark:hover:text-hover-dark p-2"
        href={link}
        target="_blank"
        aria-label={ariaLabel}
      >
        <Icon className="w-4 h-4" />
      </a>
    </li>
  );
};

export default SocialButton;