import { Github, Linkedin } from 'lucide-react'
import SocialButton from '../components/SocialButton'

const Footer = () => {
  return (
    <footer>
      <div className="bg-primary dark:bg-secondary text-secondary dark:text-primary text-sm flex items-center justify-center gap-4 py-5">
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