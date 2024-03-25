import '../modules/toggle-mode.js';
import timer from '../modules/timer.js';

const controls_arr = Array.prototype.slice.call(document.getElementById("controls").children);
// document.getElementById("controls").children returns an HTML collection, not an array
// Array.prototype.slice.call() converts it to an array so it can be iterated

controls_arr.forEach(element => {
    element.addEventListener('click',(event)=>{
        const doc_classes = document.documentElement.classList;
        timer[event.target.id]();
        if((timer.isrunning && !doc_classes.contains('running')) || (!timer.isrunning && doc_classes.contains('running'))){
            doc_classes.toggle('running');
            doc_classes.toggle('paused')
        }
    })
});

/* setInterval(() => {
    console.log(timer.minutes, timer.seconds, timer.miliseconds)
}, 1243); */