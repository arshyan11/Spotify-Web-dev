let myprogressbar = document.getElementById("myprogressbar");
let masterplay = document.getElementById("masterplay");
let songindex = 1;
let audioElement = new Audio("songs/1.mp3");
let gif=document.getElementById("gif");
let songItem=Array.from(document.getElementsByClassName("songItem"))

let songList = [
    { SongName: "wariyo", filepath: "songs/1.mp3", coverpath: "1.jpg" },
    { SongName: "Ceilo-Huma-Huma", filepath: "songs/2.mp3", coverpath: "2.jpg" },
    { SongName: "DEAF KEV", filepath: "songs/3.mp3", coverpath: "3.jpg" },
    { SongName: "Different Heaven", filepath: "songs/4.mp3", coverpath: "4.jpg" },
    { SongName: "Janji-Heros", filepath: "songs/5.mp3", coverpath: "5.jpg" },
    { SongName: "Let me Love you", filepath: "songs/2.mp3", coverpath: "6.jpg" },
    { SongName: "Let me Love you", filepath: "songs/2.mp3", coverpath: "7.jpg" },
    { SongName: "Let me Love you", filepath: "songs/2.mp3", coverpath: "8.jpg" },
    { SongName: "Let me Love you", filepath: "songs/2.mp3", coverpath: "9.jpg" },
    { SongName: "Let me Love you", filepath: "songs/2.mp3", coverpath: "10.jpg" },
    // Add more songs as needed
];

songItem.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName('img')[0].src=songList[i].coverpath;
    element.getElementsByClassName('song-info')[0].innerText=songList[i].SongName
    




    
});
// Play/Pause toggle
masterplay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        gif.style.opacity=1;
    } else {
        audioElement.pause();
        masterplay.classList.remove("fa-pause-circle");
        masterplay.classList.add("fa-play-circle");
        gif.style.opacity=0;
    }
});
audioElement.addEventListener("timeupdate",()=>{
    console.log("timeupdate");
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myprogressbar.value=progress;
})
myprogressbar.addEventListener("change",()=>
{
    audioElement.currentTime=(myprogressbar.value*audioElement.duration)/100;
})

    
const makeallplays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    });
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        console.log(e.target);
        songindex=parseInt(e.target.id);
        makeallplays();
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src = `songs/${songindex+1}.mp3`;
        audioElement.currentTime=0;
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        audioElement.play();
    });
});

document.getElementById("forward").addEventListener("click",()=>{
    if(songindex>9){
        songindex=1;

    }
    else{
        songindex+=1;
    }
    audioElement.src = `songs/${songindex}.mp3`;
    audioElement.currentTime=0;
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
    audioElement.play();
});
document.getElementById("back").addEventListener("click",()=>{
    if(songindex<=1){
        songindex=1;

    }
    else{
        songindex-=1;
    }
    audioElement.src = `songs/${songindex}.mp3`;
    audioElement.currentTime=0;
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
    audioElement.play();
});