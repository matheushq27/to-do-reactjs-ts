import styles from './cardTasks.module.css'
import { Trash } from 'phosphor-react'

interface TaskProps{
    content: string
    removeTask: (comment: string) => void
}

export function CardTasks({content, removeTask}:TaskProps){

    function handleDeleteTask(){
        removeTask(content)
    }
    
    return(
        <div className={styles.CardTasks}>
            <div><input type="checkbox" className={styles.checkbox}/></div>
            <div><p>{content}</p></div>
            <div className={styles.boxTrash}><Trash size={18} onClick={handleDeleteTask}/></div>
        </div>
    )
}