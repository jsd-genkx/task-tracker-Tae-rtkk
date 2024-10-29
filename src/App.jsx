import { useState } from 'react'

import './App.css'

function App() {
  const [tasks, setTasks] = useState({text:''});

  const [allTasks,setAllTasks] = useState([]);

  function Addtask(event) {
    const {name, value} = event.target;
    setTasks(prevtask => ({
      ...prevtask,
      [name]:value
    }));
  }

  function Submit(event) {
    event.preventDefault();
    if(tasks.text.trim()) {
      setAllTasks([...allTasks, tasks]);
      setTasks({text: ''});
    } 
}

  return (
    <div className='flex items-center justify-center m-10'>
      <div className='flex flex-col bg-slate-100 w-1/4 h-48 p-5 rounded-lg items-center justify-center'>
        <h1 className='text-2xl	 font-bold p-4'>Task Tracker</h1>
        <form onSubmit={Submit} >
          <input type="text" placeholder='Add task' name="text" value={tasks.text} onChange={Addtask} />
          <button type='submit'>ADD</button>
        </form>

        <ul>
                {allTasks.map((task, index) => (
                    <li key={index}>
                        {task.text}
                    </li>
                ))}
            </ul>
      </div>
    </div>
  )
}

export default App
