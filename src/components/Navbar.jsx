
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modals from './Modal';
import styles from "./Navbar.module.css";




const Navbar = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
    <nav className={styles.navbar}>
        <Link to ="/" className={styles.logo} >
            BOOK MART
        </Link>
        <ul className={styles.nav_links}>
            <li className={styles.nav_item}>
                <Link  className={styles.nav_link} onClick={showModal}>
                    LOGIN
                </Link>
                <Modals />
            </li>
            <li className={styles.nav_item}>
                <Link to ="/signup" className={styles.nav_link} >
                    SING UP
                </Link>
            </li>
        </ul>

    </nav>
    
    )
}

export default Navbar;