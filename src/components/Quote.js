import styles from './Quote.module.css';
import Card from './Card';
import iconDice from './../images/icon-dice.svg';
import patternDividerMobile from './../images/pattern-divider-mobile.svg';
import patternDividerDesktop from './../images/pattern-divider-desktop.svg';

const Quote = () => {
    return (
        <Card className={styles}>
            <h2>ADVICE #117</h2>
            <p>
                "It is easy to sit up and take notice,
                what's difficult is getting up and taking action."
            </p>
            <img src={patternDividerMobile} />
            {/* TODO: Desktop pattern */}
            <div className={styles.endOfCard}>
                <button className={styles.dice}>
                    <img src={iconDice} alt="Dice button" />
                </button>
            </div>
        </Card>
    )
}

export default Quote;