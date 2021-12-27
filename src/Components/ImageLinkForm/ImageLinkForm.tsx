import React, { useEffect } from "react";
import { useState } from "react";
import { Subject, takeUntil } from "rxjs";
import Container from "typedi";
import { DataService } from "../../services/DataService";
import { DataActionService } from "../../services/DataActionService";
import styles from './ImageLinkForm.module.css'


const Clarifai = require('clarifai');

const app = new Clarifai.App({
    apiKey: 'eec807f3026d4a54bc3138ae3893b67d'
});

const ImageLinkForm: React.FC = () => {
    const Data = Container.get(DataService);
    const DataActions = Container.get(DataActionService);
    const [input, setInput] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement
    >) => {
        DataActions.faceInputHandler(e)
    }

    const handleClick = (): void => {
        app.models
            .predict(
                Clarifai.GENERAL_MODEL,
                input
            ).then((res: any) => {
                Data.imageRecognitionStream.next(res.outputs[0].data.concepts);
            }).catch((err: any) => {
                console.log(err)
            })
    }


    useEffect(() => {
        const unsubsriber = new Subject<void>()
        Data.faceInputStream.pipe(takeUntil(unsubsriber)).subscribe((inputValue: string) => {
            setInput(inputValue);
        })
        return () => {
            unsubsriber.next();
        }
    }, [input])

    return (<div className={styles.mainForm}>
        <p>This Magic detect faces!!</p>
        <div>
            <input
                type="text"
                onChange={handleChange}
            />
        </div>
        <div>
            <button onClick={handleClick}>Detect</button>
        </div>
    </div>)
}

export default ImageLinkForm