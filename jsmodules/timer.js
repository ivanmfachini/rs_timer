
const timer = {
    miliseconds: 0,
    seconds: 0,
    minutes: 0,
    hours: 0,
    interval: 0,
    isrunning: false,
    mark_count: 0,
    marks:[],
    marks_records: {},
    html_mil: document.getElementById("miliseconds"),
    html_sec: document.getElementById("seconds"),
    html_min: document.getElementById("minutes"),
    mil_str: "",
    sec_str: "",
    min_str: "",
    display: ()=>{
        timer.mil_str = String(timer.miliseconds).padStart(3,"0");
        timer.sec_str = String(timer.seconds).padStart(2,"0");
        timer.min_str = String(timer.minutes).padStart(2,"0");
        timer.html_mil.innerHTML = timer.mil_str;
        timer.html_sec.innerHTML = timer.sec_str;
        timer.html_min.innerHTML = timer.min_str 
    },
    start: ()=> {
        timer.isrunning = true;
        timer.interval = setInterval(() => {
            if(timer.miliseconds < 973){
                timer.miliseconds += 27                
            } else{
                timer.miliseconds -= 973;
                if(timer.seconds < 60){
                    timer.seconds+=1
                } else{
                    timer.seconds = 0;
                    if(timer.minutes < 60){
                        timer.minutes+=1
                    } else{
                        timer.minutes = 0;
                        timer.hours+=1
                    }
                }
            };
            timer.display()           
        }, 27)
    },
    pause: ()=>{
        clearInterval(timer.interval);
        timer.isrunning = false;
    },
    stop: ()=>{
        clearInterval(timer.interval);
        timer.isrunning = false;
        timer.hours = timer.minutes = timer.seconds = timer.miliseconds = 0;
        timer.display();
        timer.marks_records[new Date()] = timer.marks;
        timer.marks = [];
        timer.mark_count = 0;
        console.log(timer.marks_records)
    },
    mark: ()=>{
        timer.marks.push(`${timer.hours}:${timer.min_str}:${timer.sec_str}:${timer.mil_str}`);
        console.log(timer.marks);
        timer.mark_count+=1;
    }
};

export default timer