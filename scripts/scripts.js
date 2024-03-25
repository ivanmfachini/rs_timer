import '../modules/toggle-mode.js';
import timer from '../modules/timer.js';

//import { buttonPressAudio, kitchenTimer , bgAudio } from "../modules/sounds.js";
// essa estratégia de import de audios causou um erro no Firefox: "NotSupportedError: The media resource indicated by the src attribute or assigned media provider object was not suitable"
// então eu adicionei audio tags manualmente na página html e instanciei aqui:
const bgAudio = document.getElementById("bg-audio");
const buttonPressAudio = document.getElementById("button-press");
const kitchenTimer = document.getElementById("kitchen-timer");

const controls_arr = Array.prototype.slice.call(document.getElementById("controls").children);
// document.getElementById("controls").children retorna uma HTML Collection, não um array
// Array.prototype.slice.call() converte para um array que pode ser iterado:

controls_arr.forEach(element => {
    element.addEventListener('click',(event)=>{
        const doc_classes = document.documentElement.classList;
        switch(event.target.id){
            case "musicon":
                bgAudio.play();
                doc_classes.toggle("silence");
                break;
            case "musicoff":
                bgAudio.pause();
                doc_classes.toggle("silence");
                break;
            case "stop":
                kitchenTimer.play();
            default:
                timer[event.target.id]();
                if((timer.isrunning && !doc_classes.contains('running')) || (!timer.isrunning && doc_classes.contains('running'))){
                    doc_classes.toggle('running');
                    doc_classes.toggle('paused');
                    buttonPressAudio.play()
                }
        }        
    })
});
