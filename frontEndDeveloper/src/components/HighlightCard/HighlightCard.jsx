import { icon_motoboy } from "../../assets";
import MoneyFormatter from "../../utils/MoneyFormatter";
import styles from "./styles";

const HightlightCard = ({ image, name, price, description }) => {
    return (
        <div className={styles().container}>
            <div className={styles().imageWrapper}>
                <img src={image} alt="" className={styles().image} />
            </div>
            <div className={styles().infos}>
                <div>
                    <header className={styles().infosHeader}>
                        {name}
                        <span className={styles().infosPrice}>
                            {MoneyFormatter(price)}
                        </span>
                    </header>
                    <p className={styles().description}>{description}</p>
                </div>

                <button className={styles().orderButton}>
                    Order a delivery{" "}
                    <span className={styles().iconWrapper}>
                        <img
                            src={icon_motoboy}
                            alt=""
                            className={styles().icon}
                        />
                    </span>
                </button>
            </div>
        </div>
    );
};

export default HightlightCard;
