let progress =document.getElementById("progress");
let song =document.getElementById("song");
let ctrlIcon =document.getElementById("ctrlIcon");

let songs = ["song1.mp3", "song2.mp3", "song3.mp3"];
let currentSongIndex = 0;

song.onloadmetadata =function(){
    progress.max= song.duration;
    progress.value=song.currentTime;

}
function playPause(){
    if(ctrlIcon.classList.contains("fa-pause"))
    {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");

        
    }
    else
    {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");

    }
}

function changeSong(direction) {
    if (direction === 'forward') {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }

    song.src = songs[currentSongIndex];
    song.load();
    song.play();

    document.querySelector(".song_img").src = `./photo${currentSongIndex + 1}.jpeg`;
    document.querySelector("h1").innerText = `Song ${currentSongIndex + 1}`;
}

if(song.play())
{
    setInterval(()=>
    {progress.value=song.currentTime;
    },500);
}
progress.onchange = function()
{
    song.play();
    song.currentTime=progress.value;
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
    
    }
