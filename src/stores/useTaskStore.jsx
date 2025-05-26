import { create } from "zustand"
import { devtools } from "zustand/middleware"

const useTaskStore = create(
  devtools((set) => ({
    tasks: [],

    addTask: (task) => {
      const newTask = {
        id: Date.now(),
        task,
        isCompleted: false
      }

      set(state => ({ tasks: [newTask, ...state.tasks] }))
    },

    deleteTask: (id) => {
      set(state => ({ tasks: state.tasks.filter(task => task.id !== id) }))
    },

    toggleCompleted: (id) => {
      set(state => ({
        tasks: state.tasks.map(task => {
          if (task.id === id) {
            return { ...task, isCompleted: !task.isCompleted }
          }
          else {
            return task
          }
        }
        )
      }))
    },

    deleteAll: () => { set({ tasks: [] }) },

    completeAll: () => set(state => ({
      tasks: state.tasks.map(task => {
        return { ...task, isCompleted: true }
      })
    })),

    hideCompleted: () => set(state => ({
      tasks: state.tasks.filter(task => !task.isCompleted)
    })),

  }))
)

export default useTaskStore