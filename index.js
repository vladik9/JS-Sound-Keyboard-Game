

var nr_of_buttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < nr_of_buttons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var my_button = this.innerHTML;
        console.log(my_button);
        play_my_sound(my_button);
        makeAnimationa(my_button);
    })
}

document.addEventListener("keypress", function (event) {
    play_my_sound(event.key);
    makeAnimationa(event.key);

});


function play_my_sound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var tom5 = new Audio("sounds/snare.mp3");
            tom5.play();
            break;
        case "k":
            var tom6 = new Audio("sounds/crash.mp3");
            tom6.play();
            break;
        case "l":
            var tom7 = new Audio("sounds/kick-bass.mp3");
            tom7.play();
            break;
        default:
            alert("Missing input! Are you crazy?")
            break;
    }
}


function makeAnimationa(key_presed) {
    var curret_button = document.querySelector("." + key_presed);
    curret_button.classList.add("pressed");
    setTimeout(function () {
        curret_button.classList.remove("pressed")
    }, 500);
}



