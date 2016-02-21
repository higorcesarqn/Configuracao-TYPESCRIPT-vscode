/// <reference path="greeter" />
var app;
(function (app) {
    window.onload = function () {
        var el = document.getElementById('content');
        var greeter = new app.Greeter(el);
        greeter.start();
    };
})(app || (app = {}));
//# sourceMappingURL=app.js.map