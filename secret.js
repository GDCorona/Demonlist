var currentbg = -1;
var currentSounds = -1;
var check = true;
setTimeout(function(){document.getElementById("greetingSound").play();}, 1500);
function runSecret(){
    if(check) {
        check = false;
        randombg(); 
        randomSounds(); 
        setTimeout(function(){check = true;}, 3000);
    }
    else {alert("Too fast!");}
}
function randombg(){
   var random = Math.floor(Math.random() * 10);
   var bg = 
    [
        "url('https://wallpapermoon.com/wp-content/uploads/2022/03/06790036.jpg')",
        "url('https://wallpapermoon.com/wp-content/uploads/2021/08/01470031.jpg')",
        "url('https://wallpapermoon.com/wp-content/uploads/2021/08/01470020.jpg')",
        "url('https://wallpapermoon.com/wp-content/uploads/2022/03/06790018.jpg')",
        "url('https://wallpapermoon.com/wp-content/uploads/2022/03/06790010.jpg')",
        "url('https://wallpapermoon.com/wp-content/uploads/2022/03/06790007.jpg')",
        "url('https://wallpapermoon.com/wp-content/uploads/2021/09/02340045.jpg')",
        "url('https://wallpapermoon.com/wp-content/uploads/2021/09/02340012.jpg')",
        "url('https://wallpapermoon.com/wp-content/uploads/2022/06/02770073.jpg')",
        "url('https://wallpapermoon.com/wp-content/uploads/2022/06/02770071.jpg')"
    ];
    if(currentbg == random){randombg();}
    else{
        currentbg = random;
        document.getElementsByTagName("body")[0].style.backgroundImage = bg[currentbg];
    }
}
function randomSounds(){
    var random = Math.floor(Math.random() * 7);
    var sounds = 
    [
        "https://feeds.soundcloud.com/stream/1493606950-corona-689894639-kaguya-noise-3.mp3",
        "https://feeds.soundcloud.com/stream/1493606947-corona-689894639-kaguya-noise-2.mp3",
        "https://feeds.soundcloud.com/stream/1493606932-corona-689894639-chika-noise-3.mp3",
        "https://feeds.soundcloud.com/stream/1493606929-corona-689894639-chika-noise-2.mp3",
        "https://feeds.soundcloud.com/stream/1493606920-corona-689894639-chika-noise-1.mp3",
        "https://feeds.soundcloud.com/stream/1493606914-corona-689894639-rikka-noise-2.mp3",
        "https://feeds.soundcloud.com/stream/1493606911-corona-689894639-rikka-noise-1.mp3"
    ]
    if(currentSounds == random){randomSounds();}
    else{
        currentSounds = random;
        document.getElementById("secretSounds").src = sounds[currentSounds];
        document.getElementById("secretSounds").play();
    }
}

