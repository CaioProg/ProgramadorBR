let video = document.getElementById("video1");

function showControles(e) {
    e.style.opacity = 1;
  }
  
function hiddenControles(e) {
    e.style.opacity = 0;
}

function retroceder(){
    video.currentTime -= 15; 
}

function avancar(){
    video.currentTime += 15; 

}

function diminuir_vel(){
    video.playbackRate -= 0.1;
}

function aumentar_vel(){
    video.playbackRate += 0.1;
}

function play(){
    video.play();
}

function stop(){
    video.pause();
    video.currentTime = 0;
}