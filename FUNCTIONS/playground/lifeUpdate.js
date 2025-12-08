


function life(mood) {
    if (mood === 'happy') {
        return "life is fun";
    } else if (mood === 'sad') {
        return "life is not always fun";
    } else {
        return "just live your life and stop conplaining";
    }
}

console.log(life('sad'));


function friends(respect) {
    if (respect === true) {
        return 'Keep walking together and enjoy life';
    } else if (respect === false) {
        return 'End everything and walk away';
    } else {
        return `Respect should be a priority not an option`
    }
    }

console.log(friends(false));
console.log(friends());
