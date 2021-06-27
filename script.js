function countdown(num) {

    let time = setInterval(function () {
        num--;

        if (num <= 0) {
            clearInterval(time);
            console.log("DONE!");
        }
        else {
            console.log(num);
        }

    }, 1000)
}

countdown(4);


function randomGame() {
    let counter = 0;

    let randomNum = setInterval(function () {
        let num = Math.random().toFixed(2);
        counter++;

        if (num >= 0.75) {
            clearInterval(randomNum);
            console.log(counter);
        };
    }, 1000)
}

randomGame();