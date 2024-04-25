console.log("hello");

//initialize variales
let songIndex=0;

let audioElement = new Audio('songs/5.mp3')
let masterPlay =document.getElementById('masterPlay')
let myProgress =document.getElementById('myProgress')
let masterSongName = document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('card'));
// let songItems1=Array.from(document.getElementsByClassName('songinfo'));

let songs =[
    {songName:"Game of Thrones",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Hukum",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Tareefan",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},  
    {songName:"Tujhe kitna chahne lage",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Its Time For Us",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Its Time For Us",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
]

songItems.forEach((element, i) => {
    console.log(element ,i);
    element.getElementsByTagName("img")[0].src =songs[i].coverPath;
    element.getElementsByTagName("a")[0].innerText =songs[i].songName;
    
    

    // element.getElementsByTagName("songinfo")[0].innerText =songs[i].songName;
    
});
// songItems1.forEach((element, i) => {
//     console.log(element ,i);
//     element.getElementsByTagName("img")[0].src =songs[i].coverPath;
   
    
// });
    

// audioElement.play();


//handle play pause
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        //gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        //gif.style.opacity = 0;
    }
})

//listem to events
audioElement.addEventListener('timeupdate',()=>{
 console.log('timeupdate');
 //update seekbar
 progress=parseFloat((audioElement.currentTime/audioElement.duration)*100) //.....eq 1
 console.log(progress)
 myProgress.value=progress;
})

myProgress.addEventListener('change',()=>{
    audioElement.currentTime= myProgress.value*audioElement.duration/100 //from eq 1
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        console.log(e.target)
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        document.getElementById('playcardCover').src =songs[songIndex].coverPath
        
        audioElement.currentTime = 0;
        audioElement.play();
        // gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=6){
        songIndex = 1
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    document.getElementById('playcardCover').src =songs[songIndex].coverPath
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=1){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    document.getElementById('playcardCover').src =songs[songIndex].coverPath
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})