import React from "react";
import * as styles from './Navigation.module.css'


const Navigation: React.FC = () => {
    return (
        <nav className={styles.nav}>
            <button className={styles.navButton}>Sign out</button>
        </nav>
    )
}

export default Navigation