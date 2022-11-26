import { useState, ChangeEvent } from 'react'
import styles from './App.module.css'
import Logo from './assets/logo.svg'
import Clipboard from './assets/clipboard.png'
import { PlusCircle } from 'phosphor-react'
import { CardTasks } from './components/cardTasks'

function App() {

  const [task, setTask] = useState([])
  const [valueInput, setValueInput] = useState('')

  function handleDeleteTask(){
    
  }

  function handleInsertTask(event: ChangeEvent<HTMLInputElement>){
    setValueInput(event.target.value)
  }

  function save(){
    setTask([...task, valueInput])
    setValueInput('')
  }

  function filterRemoveTask(taskRemove: string){
    const newArrayTask = task.filter(task => task != taskRemove)
    setTask(newArrayTask)
  }

  return (
    <div>
      <header className={styles.headContainer}>
        <img src={Logo} />
      </header>

      <div className={styles.container}>
        <div className={styles.boxCreateTasks}>
          <input value={valueInput} onChange={handleInsertTask} name="task" placeholder="Adicione uma nova tarefa" type="text" className={styles.inputTask}/>
          <button onClick={save} type="submit" className={styles.buttonCreateTask}>Criar <PlusCircle size={16} /></button>
        </div>
        
        <div className={styles.containerViewsTasks}>
          <div className={styles.boxInfosTasks}>
            <span>Tarefas criadas <strong>{task.length}</strong></span>
            <span>Concluídas <strong>0 de {task.length}</strong></span>
          </div>

          {task.length > 0 &&
            task.map(task => <CardTasks key={task} content={task} removeTask={filterRemoveTask}/>)
          }

          {task.length <= 0  &&
            <div className={styles.boxTasks}>
              <img src={Clipboard}/>
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          }
          </div>
        
      </div>
      
    </div>
  )
}

export default App
