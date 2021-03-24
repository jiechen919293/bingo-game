const bnums = document.querySelectorAll('.b-column');
const inums = document.querySelectorAll('.i-column');
const nnums = document.querySelectorAll('.n-column');
const gnums = document.querySelectorAll('.g-column');
const onums = document.querySelectorAll('.o-column');
const html = document.querySelector('html');
const reset = document.getElementById('reset');
const pick = document.querySelector('tbody');


function getRandomInt(min, max) {
    // Don't worry about how this works, just trust that it
    // generates an integer between min and max.
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function giveNumber(row, min, max) {
    let array = [];
    for (let i = 0; i < 5; i++) {
        array[i] = getRandomInt(min, max);
        for (let j = 0; j < i; j++) {
            if (array[i] === array[j]) {
                i--;
                break;
            }
        }

    };
    for (let i = 0; i < 5; i++) {
        row[i].innerHTML = array[i];
    };
};

//main
function resetNewBox() {
    giveNumber(gnums, 46, 60);
    giveNumber(onums, 61, 75);
    giveNumber(bnums, 1, 15);
    giveNumber(inums, 16, 30);
    giveNumber(nnums, 31, 45);

};

// Event
html.addEventListener('load', resetNewBox);
reset.addEventListener('click', resetNewBox);
pick.addEventListener('click', function(event) {
    event.target.classList.toggle('dab');
})