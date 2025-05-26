import { Github, Linkedin } from 'lucide-react'
import SocialButton from '../components/SocialButton'
import useThemeStore from '../stores/useThemeStore'

const Footer = () => {
  const theme = useThemeStore(state => state.theme)
  return (
    <footer>
      <div className={`${theme === 'dark' ? 'dark' : ''} bg-primary dark:bg-secondary text-secondary dark:text-primary border-t border-t-border dark:border-t-border-dark text-sm flex items-center justify-center gap-4 py-1`}>
        <p>&copy; {new Date().getFullYear()} Mimmi Eriksson</p>
        <ul
          className="flex gap-2"
        >
          <SocialButton link="https://github.com/mimmi-eriksson" icon={Github} ariaLabel="GitHub profile" />
          <SocialButton link="https://www.linkedin.com/in/mimmi-aj-eriksson/" icon={Linkedin} ariaLabel="LinkedIn profile" />
        </ul>
      </div>
    </footer>
  )
}

export default Footer