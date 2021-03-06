import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    }
  ])

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000)
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    // ... pulls all the stuff from the previous state
    setTasks(tasks.map((task) => task.id === id ? 
                      { ...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="App">
      <Header name="MOM" 
              onAdd={() => setShowAddTask(!showAddTask)} 
              showAdd={showAddTask} 
      />
      {showAddTask ? <AddTask onAdd={addTask} /> : ''} 
      {tasks.length > 0 ?
      <Tasks tasks={tasks} 
              onDelete={deleteTask} 
              onToggle={toggleReminder}
      /> : 'No Tasks To Show'}
    </div>
  );
}

export default App
