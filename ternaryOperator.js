// condition to be evaluated ? expression to execute if condition is truthy : expression to execute if condition is falsy

const lightswitch = {
    switchState: "on",
    flipSwitch() {
        if (this.switchState === "on") {
            this.switchState = "off";
        } else {
            this.switchState = "on";
        }
    }
};

//in console try these:
lightswitch.flipSwitch();
lightswitch

//The short version of it using ternary operator is like this:
lightswitch.flipSwitch = function () {
    (this.switchState === "on") ? this.switchState = "off" : this.switchState = "on";
};

//try these in console again:
lightswitch.flipSwitch();
lightswitch

//another example:
function canVote(age) {
    if (age >= 18) {
        return true;
    }
    return false;
}

//you might this this method works but its actually wrong syntax 
// function canVote(age) {
//     (age >= 18) ? return true : return false;
// }

//The correct syntax is like this:
function canVote(age) {
    return (age >= 18) ? true : false;
}