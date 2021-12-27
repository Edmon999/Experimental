import React, { useEffect, useState } from "react";
import { Subject, takeUntil } from "rxjs";
import Container from "typedi";
import { DataService } from "../../services/DataService";

import styles from './ShowImage.module.css'

const ShowImage: React.FC = () => {
    const Data = Container.get(DataService);
    const [imgUrl, setImgUrl] = useState<string>('');


    useEffect(() => {
        const unsubsriber = new Subject<void>();
        Data.faceInputStream.pipe(takeUntil(unsubsriber)).subscribe((url) => {
            setImgUrl(url);
        })
        return () => {
            unsubsriber.next();
        }
    })
    return (
        <div className={styles.imgPosition}>
            <div className={styles.image}>
                <img src={imgUrl} alt="face" width="250vw" height="auto" />
            </div>
        </div>
    )
}

export default ShowImage