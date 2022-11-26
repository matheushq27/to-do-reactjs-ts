import styles from './cardTasks.module.css'
import { Trash } from 'phosphor-react'
import { useState } from 'react'

interface TaskProps{
    content: string
    removeTask: (comment: string) => void
    checkTask: (comment: string) => void
    check: boolean
}

export function CardTasks({content, removeTask, checkTask, check}:TaskProps){

    function handleDeleteTask(){
        removeTask(content)
    }

    function handleCheckTask(){
        checkTask(content)
    }
    
    return(
        <div className={styles.CardTasks}>
            <div><input defaultChecked={check} onChange={handleCheckTask} type="checkbox" className={styles.checkbox}/></div>
            <div><p className={check ? styles.lineThrough : ''}>{content}</p></div>
            <div className={styles.boxTrash}><Trash size={18} onClick={handleDeleteTask}/></div>
        </div>
    )
}