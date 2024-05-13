import { Notifier } from "./../pattern/notifier.js";
import { Counter } from "./../models/counter.js";

export class Controller extends Notifier{
    
    #counter;
    
    constructor(){
        super();
        this.#counter = new Counter();
    }

    increment(){
        this.#counter.incrementValue();
        this.notify();
    }

    decrement(){
        this.#counter.decrementValue();
        this.notify();
    }

    getCount(){
        return this.#counter.value;
    }
    
}