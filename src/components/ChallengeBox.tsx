import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){

    const { activeChallenge, resetChallenge, completeChallenge  } = useContext(challengesContext)
    const { resetCountdown } = useContext(CountdownContext)
    function handleChallengeSucceeded(){
        completeChallenge()
        resetChallenge()
    }
    function handleChallengeFailed(){
        resetChallenge()
        resetCountdown()
    }

    return(
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button onClick={handleChallengeFailed} type="button" className={styles.challengeFailedButton}>Falhei</button>
                        <button onClick={handleChallengeSucceeded} type="button" className={styles.challengeSucceededButton}>Completei</button>
                    </footer>
                </div>
            ) :(
                 <div className={styles.challengeNotActive}>
                 <strong>Finalize um ciclo para receber um desafio</strong>
                 <p>
                     <img src="icons/level-up.svg" alt="Level Up"/>
                     Avance de nível completando desafios
                 </p>
             </div>
            )}
        </div>
    )
}