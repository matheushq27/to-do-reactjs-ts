import { useState, ChangeEvent } from 'react'
import styles from './App.module.css'
import Logo from './assets/logo.svg'
import Clipboard from './assets/clipboard.png'
import { PlusCircle } from 'phosphor-react'
import { CardTasks } from './components/cardTasks'

interface Task{
  task: string
  check: boolean
}

function App() {

  const [task, setTask] = useState([])
  const [valueInput, setValueInput] = useState('')
  const [solvedTasks, setSolvedTasks] = useState(0)

  function handleInsertTask(event: ChangeEvent<HTMLInputElement>){
    setValueInput(event.target.value)
  }

  function save(){
    setTask([...task, {task: valueInput, check: false}])
    setValueInput('')
  }

  function filterRemoveTask(taskRemove: string){
    const newArrayTask = task.filter(task => task.task != taskRemove)
    qtdCheckTasks(newArrayTask)
    setTask(newArrayTask)
  }

  function handleCheckTask(taskCheck: string){
    
    const newArrayTask = task.filter((task) => {
      if(task.task == taskCheck){
        task.check = !task.check
      }
      
      return task
    })

    qtdCheckTasks(newArrayTask)
    setTask(newArrayTask)
  }

  function qtdCheckTasks(newArrayTask: Array<string>){
    const qtdCheck = newArrayTask.filter(task => task.check)
    setSolvedTasks(qtdCheck.length)
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
            {task.length > 0 && <span>Concluídas <strong>{solvedTasks} de {task.length}</strong></span>}
          </div>

          {task.length > 0 &&
            task.map(task => <CardTasks key={task.task} check={task.check} content={task.task} removeTask={filterRemoveTask} checkTask={handleCheckTask} />)
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
