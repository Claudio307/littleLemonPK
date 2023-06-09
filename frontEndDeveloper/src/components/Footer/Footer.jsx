import { Link } from "react-router-dom";
import { img_logoWhite } from "../../assets";
import styles from "./styles";
import { AiFillFacebook, AiOutlineMail } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { BsFillTelephoneFill, BsInstagram } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className={styles().container}>
            <div className={styles().background}></div>
            <img src={img_logoWhite} alt="" className={styles().logoWhite} />
            <div className={styles().column}>
                <h3 className={styles().columnTitle}>Navigation</h3>
                <ul className={styles().list}>
                    <li>
                        <Link className={styles().link} to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className={styles().link} to="/">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className={styles().link} to="/">
                            Menu
                        </Link>
                    </li>
                    <li>
                        <Link className={styles().link} to="/booking">
                            Reservations
                        </Link>
                    </li>
                    <li>
                        <Link className={styles().link} to="/">
                            Order online
                        </Link>
                    </li>
                    <li>
                        <Link className={styles().link} to="/">
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles().column}>
                <h3 className={styles().columnTitle}>Contact</h3>
                <ul className={styles().list}>
                    <li className={styles().contactItem}>
                        <BiMap />
                        678 Pisa Ave, Chicago, IL 60611
                    </li>
                    <li className={styles().contactItem}>
                        <BsFillTelephoneFill />
                        (312) 593-2744
                    </li>
                    <li className={styles().contactItem}>
                        <AiOutlineMail />
                        customer@littlelemon.com
                    </li>
                </ul>
            </div>
            <div className={styles().column}>
                <h3 className={styles().columnTitle}>Social Media</h3>
                <ul className={`${styles().list} ${styles().listSocialMedia}`}>
                    <li>
                        <Link
                            className={styles().link}
                            to="https://www.instagram.com"
                            target="_blank"
                        >
                            <BsInstagram />
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={styles().link}
                            to="https://www.facebook.com"
                            target="_blank"
                        >
                            <AiFillFacebook />
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={styles().link}
                            to="https://twitter.com"
                            target="_blank"
                        >
                            <FaTwitterSquare />
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
