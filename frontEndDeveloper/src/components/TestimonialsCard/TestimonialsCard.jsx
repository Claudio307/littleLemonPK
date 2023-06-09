import { icon_star } from "../../assets";
import styles from "./styles";

const TestimonialsCard = ({ image, name, stars, description }) => {
    return (
        <div className={styles().container}>
            <img src={image} alt="" className={styles().image} />
            <h3 className={styles().name}>{name}</h3>
            <div className={styles().containerStars}>
                {[...Array(stars)].map((_, index) => {
                    return (
                        <img
                            src={icon_star}
                            alt=""
                            key={index}
                            className={styles().star}
                        />
                    );
                })}
            </div>
            <p className={styles().description}>"{description}"</p>
        </div>
    );
};

export default TestimonialsCard;
