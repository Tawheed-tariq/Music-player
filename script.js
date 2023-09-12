var progress = document.getElementById("progress");
var song = document.getElementById("song");
var ctrl_icon = document.getElementById("ctrlIcon");
song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(ctrl_icon.classList.contains("fa-pause")){
        song.pause();
        ctrl_icon.classList.remove("fa-pause");
        ctrl_icon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrl_icon.classList.remove("fa-play");
        ctrl_icon.classList.add("fa-pause");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrl_icon.classList.remove("fa-play");
    ctrl_icon.classList.add("fa-pause");
}
