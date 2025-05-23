import Controls from "../components/Controls"
import TaskList from "../components/TaskList"

const MainSection = () => {
  return (
    <section className="bg-surface dark:bg-surface-dark text-text dark:text-text-dark flex flex-col items-center min-h-screen">
      <Controls />
      <TaskList />
    </section>
  )
}

export default MainSection