/* Ouvre le navigateur, je ne pense pas que ça marchera sur un serveur sans interface graphique */

var app = require("node-server-screenshot");

app.fromURL("http://todomvc.com", "test.png", function(){

    console.log('done');

});
