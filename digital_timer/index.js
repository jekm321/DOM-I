const digits = document.querySelector('.digits');
const secTen = document.getElementById('secondTens');
const secOne = document.getElementById('secondOnes');
const msHun = document.getElementById('msHundreds');
const msTen = document.getElementById('msTens');
const startbtn = document.getElementById('start');
const resetbtn = document.getElementById('reset');
// const stopbtn = document.getElementById('stop');  // this is for stop button

// these are all constants since value will not be changed, will be used to 
// access the document and make changes to the css/html

startbtn.addEventListener('click', timer);
resetbtn.addEventListener('click', reset);
// stopbtn.addEventListener('click', stop);  // this is for stop button

// this is where the eventListeners are added, allowing buttons to have a funciton
let counter = 0;
let counts = '';
let ready = true;
let interval;

// these are global variables to be accessed in multiple functions


function timer() {
    if (ready) {
        resetbtn.classList.add('disabled');
        startbtn.classList.add('disabled');
        resetbtn.disabled = true;
        startbtn.disabled = true;
        interval = window.setInterval(myFunc, 10);
        // ready = false;   // this is if stop button is being used

        //prevents button interference while timer is running

        function myFunc() {
            counter++;
            let counts = counter.toString();

            while (counts.length < 4) {
                counts = '0' + counts;
            }

            msTen.innerHTML = `${counts[3]}`;
            msHun.innerHTML = `${counts[2]}`;
            secOne.innerHTML = `${counts[1]}`;
            secTen.innerHTML = `${counts[0]}`;
            if (counter === 1000) {
                window.clearInterval(interval);
                resetbtn.classList.remove('disabled');
                resetbtn.disabled = false;

                digits.classList.add('redDigit');

                ready = false;

                // activates reset button at the end
            }
        }
    }
}

function reset() {
    msTen.innerHTML = `0`;
    msHun.innerHTML = `0`;
    secOne.innerHTML = `0`;
    secTen.innerHTML = `0`;
    counter = 0;
    ready = true;
    startbtn.classList.remove('disabled');
    startbtn.disabled = false;

    // resets appearance of timer

    digits.classList.remove('redDigit');

    // returns color of timer back to black
}

// function stop() {
//     if (!ready) {
//         window.clearInterval(interval);
//         resetbtn.classList.remove('disabled');
//         resetbtn.disabled = false;

//         digits.classList.remove('redDigit');

//         msTen.innerHTML = `0`;
//         msHun.innerHTML = `0`;
//         secOne.innerHTML = `0`;
//         secTen.innerHTML = `0`;
//         counter = 0;
//         ready = true;
//         startbtn.classList.remove('disabled');
//         startbtn.disabled = false;
//     }
// }

// for fun added a stop button xD