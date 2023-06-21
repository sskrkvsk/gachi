                            
var drums = document.querySelectorAll(".drum");
var vid = document.querySelector(".vid");
var isPlaying = false;
var tom1 = new Audio('sounds/cupid.mp3');

for (i=0; i<drums.length; i++) {
    drums[i].addEventListener("click", function () {
        var btnInnerHTML = this.innerHTML;
        
        omegaWitch(btnInnerHTML);  
        btnAnimation(btnInnerHTML);


    document.addEventListener("keydown", function (event) {
        var pressedKey = event.key;

        omegaWitch(pressedKey);
        btnAnimation(pressedKey);
        })



    function omegaWitch(checkThis) {
        switch (checkThis) {
            case "play":
                

                if (!isPlaying) {
                    tom1.play();
                    tom1.volume = 0.5;
                    isPlaying = true;
                    vid.classList.remove("vid");
                    vid.classList.add("video-container");

                    // document.body.style.backgroundColor = "red";

                  } else {
                    tom1.pause();
                    isPlaying = false; 
                    vid.classList.add("vid");
                  }
                break;
                
            case "m":
                var tom2 = new Audio('sounds/g1.mp3');
                tom2.play();
                break;
            case "a":
                var tom2 = new Audio('sounds/g2.mp3');
                tom2.play();
                break;
            case "s":
                var tom2 = new Audio('sounds/g3.mp3');
                tom2.play();
                break;
            case "t":
                var tom2 = new Audio('sounds/g4.mp3');
                tom2.play();
                break;
            case "e":
                var tom2 = new Audio('sounds/g5.mp3');
                tom2.play();
                break;
            case "r":
                var tom2 = new Audio('sounds/g6.mp3');
                tom2.play();
                break;
            default: console.log("ass");
                break;
            }

        }


        function btnAnimation(currentKey) {
            var activeBtn = document.querySelector("."+currentKey);
            activeBtn.classList.add("pressed");
            setTimeout(function() {
                activeBtn.classList.remove('pressed');
            }, 100); 
        }
        
       
        // var audio = new Audio('./sounds/tom-1.mp3');
        // audio.play();
        // this.style.color = "red";
    });
}



























// var drumpads = document.querySelectorAll(".drum");

// drumpads.forEach(function(drum) {
//   drum.addEventListener("click", function() {

//     var classL = drum.classList;

//     if(classL.contains("q")) {
//         console.log("my ass");
//     } else if(classL.contains("w")) {
//         console.log("my kak");
//     } else if(classL.contains("e")) {
//         console.log("my zaz");
//     } else if(classL.contains("r")) {
//         console.log("my ass");
//     } else if(classL.contains("t")) {
//         console.log("my ass");
//     } else if(classL.contains("y")) {
//         console.log("my ass");
//     } else if(classL.contains("u")) {
//         console.log("my ass");
//     }
    
//   });
// });
