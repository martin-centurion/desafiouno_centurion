
import MainScreen from './src/screens/MainScreen';

const taskList = [
  {
    id: 1,
    task: "Tarea 1",
    completed: false
  },
  {
    id: 2,
    task: "Tarea 2",
    completed: false
  },{
    id: 3,
    task: "Tarea 3",
    completed: false
  },{
    id: 4,
    task:  "Tarea 4",
    completed: false
  },{
    id: 5,
    task: "Tarea 5",
    completed: false
  },
]

export default function App() {
  return (
      <MainScreen taskList = {taskList}/>
  );
}

