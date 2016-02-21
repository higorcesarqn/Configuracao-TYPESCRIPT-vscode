var app;
(function (app) {
    var Greeter = (function () {
        function Greeter(element) {
            this.element = element;
            this.element.innerHTML += "A Hora atual é: ";
            this.span = document.createElement('span');
            this.element.appendChild(this.span);
            this.span.innerText = new Date().toUTCString();
        }
        Greeter.prototype.start = function () {
            var _this = this;
            this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
        };
        Greeter.prototype.stop = function () {
            clearTimeout(this.timerToken);
        };
        return Greeter;
    })();
    app.Greeter = Greeter;
})(app || (app = {}));
//# sourceMappingURL=greeter.js.map