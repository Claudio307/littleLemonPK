import { img_exampleFood } from "../../assets";
import styles from "./styles";

const Hero = () => {
    return (
        <div className={styles().container}>
            <div className={styles().background} />
            <div className={styles().main}>
                <div className={styles().infos}>
                    <h1 className={styles().title}>Little lemon</h1>
                    <h2 className={styles().subtitle}>Chicago</h2>
                    <p className={styles().description}>
                        We are a family owned Mediterranean restaurant, focused
                        on traditional recipes served with a modern twist.
                    </p>
                    <button type="button" className={styles().button}>
                        Reserve Table
                    </button>
                </div>
                <img
                    src={img_exampleFood}
                    alt=""
                    className={styles().foodExample}
                />
            </div>
        </div>
    );
};

export default Hero;
