import { NavLink } from "react-router-dom";
import styles from "./styles";
import { icon_menu } from "../../assets";
import { useState } from "react";

const Nav = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    return (
        <>
            <nav>
                <ul className={styles().list} data-open={String(menuIsOpen)}>
                    <li className={styles().item}>
                        <NavLink className={styles().hyperLink} to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className={styles().item}>
                        <NavLink className={styles().hyperLink} to="/about">
                            About
                        </NavLink>
                    </li>
                    <li className={styles().item}>
                        <NavLink className={styles().hyperLink} to="/menu">
                            Menu
                        </NavLink>
                    </li>
                    <li className={styles().item}>
                        <NavLink className={styles().hyperLink} to="/booking">
                            Reservations
                        </NavLink>
                    </li>
                    <li className={styles().item}>
                        <NavLink
                            className={styles().hyperLink}
                            to="/order-online"
                        >
                            Order Online
                        </NavLink>
                    </li>
                    <li className={styles().item}>
                        <NavLink className={styles().hyperLink} to="/login">
                            Login
                        </NavLink>
                    </li>
                </ul>
                <button
                    className={styles().menu}
                    onClick={() => setMenuIsOpen((prev) => !prev)}
                >
                    <img src={icon_menu} alt="" className={styles().menuIcon} />
                </button>
            </nav>
        </>
    );
};

export default Nav;
