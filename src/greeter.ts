module app {
    export class Greeter {
        element: HTMLElement;
        span: HTMLElement;
        timerToken: number;

        constructor(element: HTMLElement) {
            this.element = element;
            this.element.innerHTML += "A Hora atual é: ";
            this.span = document.createElement('span');
            this.element.appendChild(this.span);
            this.span.innerText = new Date().toUTCString();
        }

        start() {
            this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
        }

        stop() {
            clearTimeout(this.timerToken);
        }
    }
}