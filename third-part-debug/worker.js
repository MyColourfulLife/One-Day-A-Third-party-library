var a = require('debug')('worker:a');
var b = require('debug')('worker:b');

function work() {
    a('doing a lot of uninteresting work');
    setTimeout(work,Math.random()*1000);
}

work();

function workb() {
    b('doing some work');
    setTimeout(workb, Math.random() * 2000);    
}

workb();