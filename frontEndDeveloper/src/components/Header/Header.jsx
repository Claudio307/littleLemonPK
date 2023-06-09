import { icon_logo } from "../../assets";
import styles from "./styles";

const Header = ({ children }) => {
    return (
        <header className={styles().header}>
            <img src={icon_logo} alt="" className={styles().logo} />
            {children}
        </header>
    );
};
export default Header;
