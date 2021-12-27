import Container, { Service } from "typedi";
import 'reflect-metadata';

import { DataService } from "./DataService";

@Service()
export class DataActionService {
    private DataServices = Container.get(DataService)

    public faceInputHandler(e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement
    >) {
        this.DataServices.faceInputStream.next(e.target.value);
    }
}