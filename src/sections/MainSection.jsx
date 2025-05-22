import Controls from "../components/Controls"
import Counter from "../components/Counter"
import TaskList from "../components/TaskList"

const MainSection = () => {
  return (
    <section>
      <Controls />
      <TaskList />
      <Counter />
    </section>
  )
}

export default MainSection