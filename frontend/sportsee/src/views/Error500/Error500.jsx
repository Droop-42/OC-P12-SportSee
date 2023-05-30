import styles from './Error500.module.css'

export default function Error500 () {
    return (
        <div className={styles.error}>
            <div className={styles.txt}>
                <strong>Error 500</strong>
                <span className={styles.txt2}><strong> Internal Server Error!</strong></span>
            </div> 
        </div>
    )
}