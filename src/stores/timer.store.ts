import {observable} from 'mobx';

class Timer {
    @observable timer = 0;

    constructor() {
        setInterval(() => {
            this.timer += 1;
        }, 1000);
    }

    resetTimer() {
        this.timer = 0;
    }

    setTimer(value: number) {
        this.timer = value;
    }  
}


export default Timer;