import { img_exampleFood1, img_exampleFood2, img_exampleFood3 } from "../../assets";
import HightlightCard from "../HighlightCard/HighlightCard";
import styles from "./styles";

const Highlight = () => {
    const products = [
        {
            id: "1",
            name: "Greek salad",
            price: 12.99,
            image: img_exampleFood1,
            description:
                "The famouse greek salad of cripy lettuce, peppers, olives and out Chicago style feta cheese, garnished with cruchy gartic and rosemary croutons.",
        },
        {
            id: "2",
            name: "Bruchetta",
            price: 5.99,
            image: img_exampleFood3,
            description: "Our famouse bruchetta with fresh tomatoes and basil.",
        },
        {
            id: "3",
            name: "Lemon Dessert",
            price: 7.99,
            image: img_exampleFood2,
            description:
                "Our famouse lemon dessert with fresh lemon and basil.",
        },
    ];
    return (
        <div>
            <header className={styles().headerSection}>
                <h1 className={styles().headerTitle}>This weeks specials!</h1>
                <button className={styles().headerButton}>Online Menu</button>
            </header>
            <div className={styles().cardSection}>
                {products.map((product) => (
                    <HightlightCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
};

export default Highlight;
