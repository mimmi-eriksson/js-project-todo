import Controls from "../components/Controls"
import TaskList from "../components/TaskList"
import useThemeStore from "../stores/useThemeStore"

const Main = () => {
  const theme = useThemeStore(state => state.theme)
  return (
    <main className={`${theme === 'dark' ? 'dark' : ''} bg-surface dark:bg-surface-dark text-text dark:text-text-dark flex flex-col items-center flex-grow`}>
      <Controls />
      <TaskList />
    </main>
  )
}

export default Main