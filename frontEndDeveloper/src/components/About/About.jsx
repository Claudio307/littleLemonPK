import { img_marioAdrian1, img_marioAdrian2 } from "@/assets";
import styles from "./styles";

const About = () => {
    return (
        <div className={styles().container}>
            <div className={styles().infosContainer}>
                <header>
                    <h2 className={styles().title}>Little Lemon</h2>
                    <p className={styles().subtitle}>Chicago</p>
                </header>
                <p className={styles().description}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Velit, omnis natus animi quos rerum eos sit deleniti
                    explicabo est aperiam minus qui. Explicabo rem voluptas
                    accusantium veritatis in dolore recusandae?Lorem ipsum
                    dolor, sit amet consectetur adipisicing elit. Rerum
                    aspernatur qui eaque enim tenetur, amet dignissimos quo
                    vitae saepe quod! Accusamus voluptates dolores aut earum
                    animi fugiat quaerat nobis tenetur.
                </p>
            </div>
            <div className={styles().imageContainer}>
                <img
                    src={img_marioAdrian2}
                    alt=""
                    className={styles().image2}
                />
                <img
                    src={img_marioAdrian1}
                    alt=""
                    className={styles().image1}
                />
            </div>
        </div>
    );
};

export default About;
