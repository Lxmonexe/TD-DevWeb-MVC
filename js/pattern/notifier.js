import {Observer} from './observer.js';
export class Notifier extends Observer{
    #observers = [];

    constructor(){
        super();
    }

    addObserver(observer = new Observer()){
        this.#observers.push(observer);
    }
    notify(){
        this.#observers.forEach(observer => observer.notify());
    }
}