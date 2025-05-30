import useThemeStore from "../stores/useThemeStore"
import { ToggleLeft } from "lucide-react"

const Header = () => {
  const { theme, toggleTheme } = useThemeStore()
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className={`${theme === 'dark' ? 'dark' : ''} bg-primary dark:bg-secondary text-secondary dark:text-primary border-b border-b-border dark:border-b-border-dark flex justify-between items-center p-4`}>
        <h1 className="text-3xl font-semibold">TO DO LIST</h1>
        <button type="button" onClick={() => toggleTheme()} className="self-start -mt-3 -mr-2 flex items-center gap-1 text-xs cursor-pointer">
          <p className="">{`${theme === 'light' ? 'Dark mode' : 'Light mode'}`}</p>
          <ToggleLeft size={24} />
        </button>
      </div>
    </header>
  )
}

export default Header