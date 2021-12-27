import React from "react";
import Tilt from 'react-tilt';
import styles from './Logo.module.css';
import * as image from '../../assets/images/brain.png';


const Logo: React.FC = () => {

    return <div>
        <Tilt className={styles.box} options={{ max: 25, }} style={{ height: 150, width: 150, }} >
            <div> <img src={image.default} alt="brain" className={styles.brain}/> </div>
        </Tilt>

    </div>
}

export default Logo;