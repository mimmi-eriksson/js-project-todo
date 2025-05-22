import { create } from "zustand"

const taskStore = create((set) => ({
  tasks: [
    {
      id: 1,
      title: "uncompleted task",
      isCompleted: false
    },
    {
      id: 2,
      title: "completed task",
      isCompleted: true
    }
  ],

  addTask: (newTask) => set(state => ({ tasks: state.tasks = (prevTasks) => [...prevTasks, newTask] })),
  // toggleCompleted: 
  // deleteTask:

}))

export default taskStore