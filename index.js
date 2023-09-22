
var  noOFDrumClick=document.querySelectorAll(".drum").length;
for (var i=0;i<noOFDrumClick;i++){


document.querySelectorAll(".drum")[i].addEventListener("click",function (){

    var buttonInnerHTML =  this.innerHTML;
     
   
    makesound(buttonInnerHTML);

});
}

document.addEventListener("keypress",function(event){
    
    makesound(event.key);
});

 function makesound(key){

    switch(key){
    case "A":
        var audio= new Audio("[iSongs.info] 02 - Rushivanamlona.mp3");
        audio.play();
    break;

    case "B":
        var b= new Audio("drum-solo-150-bpm-by-prettysleepy-art-12975.mp3");
        b.play();
        break;

        case "C":
            var c= new Audio("left-crashwav-14567.mp3");
            c.play();
            break;
            case "D":
                var d= new Audio("slow-drum-loop-transition-104934.mp3");
                d.play();
                break;
                case "E":
                    var e= new Audio("metal-drums-by-prettysleepy-art-11777.mp3");
                    e.play();
                    break;
                    case "F":
                        var f= new Audio("synthpop-drum-solo-112bpm-by-prettysleepy-art-15456.mp3");
                        f.play();
                        break;

                        case "G":
                            var g= new Audio("071633_drumloopbasickit013wav-88095.mp3");
                            g.play();
                            break;
                            default:
    }


 }