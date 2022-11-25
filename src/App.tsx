import { useState } from 'react'
import styles from './App.module.css'
import Logo from './assets/logo.svg'
import { PlusCircle } from 'phosphor-react'

function App() {

  return (
    <div>
      <header className={styles.headContainer}>
        <img src={Logo} />
      </header>

      <div className={styles.container}>
        <div className={styles.boxCreateTasks}>
          <input placeholder="Adicione uma nova tarefa" type="text" className={styles.inputTask}/>
          <button type="submit" className={styles.buttonCreateTask}>Criar <PlusCircle size={16} /></button>
        </div>
        
        <div className={styles.containerViewsTasks}>
          <div className={styles.boxInfosTasks}>
            <span>Tarefas criadas <strong>0</strong></span>
            <span>Concluídas <strong>0</strong></span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
