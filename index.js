var numberOfDrumButton = document.querySelectorAll(".drum").length;
for(var i =0; i<numberOfDrumButton; i++){
    document.querySelectorAll("button")[i].addEventListener("click", handkeClick);
}

function sound(key){
    switch (key) {
        case 'a':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();      
            break;
        case 's':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case 'v':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'b':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 'n':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'm':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
    
        default:
            console.log();
            break;
    }
}

// make mouse click make instrument sound
function handkeClick(){
    sound(this.innerHTML);
    buttonanimation(this.innerHTML);
}

//make keyboard press to make instrument sound
document.addEventListener("keydown",function(event){
    sound(event.key);
    buttonanimation(event.key);
});


// add animation to button
function buttonanimation(currentKey){
    document.querySelector("."+currentKey).classList.add("pressed");

    setTimeout(function(){
    document.querySelector("."+currentKey).classList.remove("pressed");
    }, 150);


}


