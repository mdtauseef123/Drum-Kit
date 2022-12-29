//Collecting all the buttons in an array
var buttons=document.querySelectorAll(".drum");
for(let i=0;i<buttons.length;i++){
    //Listening for mouse clicks on the buttons
    buttons[i].addEventListener("click", function(){
        //It will return which key is pressed and we can accordingly play sound
        //It will return w,a,s,d,j,k,l
        var button_pressed=this.innerHTML;
        play_sounds(button_pressed);
        button_animations(button_pressed);
    });
}


//Listening for keyboard events
document.addEventListener("keydown", function(event){
    var button_pressed=event.key;
    play_sounds(button_pressed);
    button_animations(button_pressed);
});


//General Function for Playing Sounds
function play_sounds(key_input){
    var button_pressed=key_input;
    switch(button_pressed){
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
        break;
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
        break;
        case "l":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;
        default:
            console.log(button_pressed);
    }
}


function button_animations(button_pressed){
    var active_button=document.querySelector("."+button_pressed);
    active_button.classList.add("pressed");
    setTimeout(function(){
        active_button.classList.remove("pressed");
    }, 100);
}