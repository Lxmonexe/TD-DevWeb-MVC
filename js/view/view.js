import { Observer } from "./../pattern/observer.js";

export class View extends Observer{
    #controller;

    constructor(controller){
        super();
        this.#controller = controller;
        controller.addObserver(this);
        this.#addEventOnIncrementButton();
        this.#addEventOnDecrementButton();

    }

    #addEventOnIncrementButton(){
        const incrementButton = document.querySelector("#btn-increment");
        incrementButton.addEventListener("click", (event) => {
            this.#controller.increment();
        });
    }

    #addEventOnDecrementButton(){
        const decrementButton = document.querySelector("#btn-decrement");
        decrementButton.addEventListener("click", (event) => {
            this.#controller.decrement();
        });
    }

    notify(){
        const counterElement = document.querySelector("#txt-counter");
        counterElement.innerHTML = this.#controller.getCount(); 
    }
}