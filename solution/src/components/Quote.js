import { useEffect, useState } from 'react';
import styles from './Quote.module.css';
import Card from './Card';
import iconDice from './../images/icon-dice.svg';
import patternDividerMobile from './../images/pattern-divider-mobile.svg';
import patternDividerDesktop from './../images/pattern-divider-desktop.svg';

const adviceSlipEndpoint = 'https://api.adviceslip.com/advice';

const Quote = () => {
    const [advice, setAdvice] = useState({ "slip": { "id": "", "advice": "" } });

    const handleDiceRoll = async () => {
        const response = await fetch(adviceSlipEndpoint);
        const advice = await response.json();
        setAdvice(advice.slip);
    }

    // Loads new advice upon first render
    useEffect(() => {
        handleDiceRoll();
    }, []
    );

    return (
        <Card className={styles}>
            <h2>ADVICE #{advice.id}</h2>
            <p>
                {`"${advice.advice}"`}
            </p>
            <div className={styles.imgContainer}>
                <img src={patternDividerMobile} alt="Divider" className={styles.imgMobile} />
                <img src={patternDividerDesktop} alt="Divider" className={styles.imgDesktop} />
            </div>
            <div className={styles.endOfCard}>
                <button className={styles.dice} onClick={handleDiceRoll}>
                    <img src={iconDice} alt="Dice button" />
                </button>
            </div>
        </Card>
    )
}

export default Quote;