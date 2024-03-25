import '../modules/toggle-mode.js';
import timer from '../modules/timer.js';
import { buttonPressAudio, kitchenTimer , bgAudio } from "./sounds.js";

const controls_arr = Array.prototype.slice.call(document.getElementById("controls").children);
// document.getElementById("controls").children returns an HTML collection, not an array
// Array.prototype.slice.call() converts it to an array so it can be iterated

controls_arr.forEach(element => {
    element.addEventListener('click',(event)=>{
        switch(event.target.id){
            case "musicon":
                bgAudio.play();
                break;
            case "musicoff":
                bgAudio.pause();
                break;
            default:
                const doc_classes = document.documentElement.classList;
                timer[event.target.id]();
                if((timer.isrunning && !doc_classes.contains('running')) || (!timer.isrunning && doc_classes.contains('running'))){
                    doc_classes.toggle('running');
                    doc_classes.toggle('paused');
                    buttonPressAudio.play()
                };
                if(timer.miliseconds == 0){
                    kitchenTimer.play()
                };
                break
        }
        
    })
});

/* setInterval(() => {
    console.log(timer.minutes, timer.seconds, timer.miliseconds)
}, 1243); */