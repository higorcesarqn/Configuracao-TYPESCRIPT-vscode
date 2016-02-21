/// <reference path="greeter" />
module app {
    window.onload = () => {
        var el = document.getElementById('content');
        var greeter = new Greeter(el);
        greeter.start();
    };
 }
