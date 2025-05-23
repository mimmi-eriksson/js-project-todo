import Controls from "../components/Controls"
import TaskList from "../components/TaskList"
import useThemeStore from "../stores/useThemeStore"

const MainSection = () => {
  const theme = useThemeStore(state => state.theme)
  return (
    <section className={`${theme === 'dark' ? 'dark' : ''} bg-surface dark:bg-surface-dark text-text dark:text-text-dark flex flex-col items-center min-h-screen`}>
      <Controls />
      <TaskList />
    </section>
  )
}

export default MainSection