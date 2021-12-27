import { BehaviorSubject } from "rxjs"
import { Service } from "typedi";
import 'reflect-metadata';

@Service()
export class DataService {
    public faceInputStream = new BehaviorSubject<string>('');
    public imageRecognitionStream = new BehaviorSubject(null);
}