import React, { useEffect, useState } from "react"
import Container from "typedi"
import { Subject, takeUntil } from "rxjs"

import styles from './ImageInfo.module.css'
import { DataService } from "../../services/DataService"
import { IImageInfo } from "../../global/intearfaces/interface"

const ImageInfo: React.FC = () => {
    const Data = Container.get(DataService)
    const [imageInfo, setImageInfo] = useState<IImageInfo[] | null>(null);
    const [input, setInput] = useState<string>()
    useEffect(() => {
        const unsubsriber = new Subject<void>()
        Data.imageRecognitionStream
            .pipe(takeUntil(unsubsriber))
            .subscribe(setImageInfo)
        return () => {
            unsubsriber.next();
            unsubsriber.complete()
        }
    }, [Data.imageRecognitionStream]);

    useEffect(() => {
        const unsubsriber = new Subject<void>()
        Data.faceInputStream
            .pipe(takeUntil(unsubsriber))
            .subscribe(setInput)
        if (!!input) {
            Data.imageRecognitionStream.next(null)
        }
        return () => {
            unsubsriber.next();
            unsubsriber.complete()
        }
    }, [input])
    return imageInfo && !!input ? (
        <div className={styles.imageInfoWraper}>
            <h3><strong>Image Info 99% accurate</strong></h3>
            <ul>
                {imageInfo.filter((info, index) => index < 14).map((info, index) => {
                    return <li key={index}>{info.name}</li>
                })}
            </ul>
        </div>
    ) : null
}

export default ImageInfo