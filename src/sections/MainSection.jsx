import Controls from "../components/Controls"
import TaskList from "../components/TaskList"

const MainSection = () => {
  return (
    <section className="bg-surface dark:bg-surface-dark">
      <Controls />
      <TaskList />
    </section>
  )
}

export default MainSection