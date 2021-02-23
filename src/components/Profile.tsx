import styles from '../styles/components/profile.module.css'

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/MarceloCChaves.png" alt="Marcelo Chaves"/>
            <div>
                <strong>Marcelo Chaves</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}