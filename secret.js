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
        "url('https://download1592.mediafire.com/0n7itae7hxzg0DpLUWNwNiSuJYlANpsUUgkR1MfNNtM4GNV6HcIb1hPQMmj3_At1YClglfde7Nzrouo7cJhabhwIZuythw/zoqyltqqpf8v8tp/01470031.jpg')",
        "url('https://download1589.mediafire.com/64ghuvfvzysgXC9_DE5Q3LcF8bbe_zSyWc85JgDseKb6r1YsVyc6Q4J03j_RxkZEggt9whLQZUxq5lH1zi7bkGZSVK1HOA/ieditx1n4s2ncmg/04820013.jpg')",
        "url('https://download1472.mediafire.com/c1uy1mj7qmkgxPapCL-fGnPyOyowODUudMm5NftrzbN6HKE1-LU24UGxYNDNh4FB1HFfKQd43mvCXiVylK95np2URsQNkA/arvhs4bhy1sdvxg/06790010.jpg')",
        "url('https://download849.mediafire.com/wmv5rykt60lgglW5Jy0C3u7a2hIlaLBhgKBaf3Zvsm0e9s288foJyxZorMq7ywVAzzcAaHucXiv6mjbatUjennd2UvoD7A/ed1sk2wdrcge5tj/07100013.jpg')",
        "url('https://download1525.mediafire.com/8t3435w0v4dgYvpSkxKC_vCaxNkSHTZDSzDC5yysEHYJ2pjafgaty2-tmPmFhwde3TxJRpPUzYIRIbyfYwKQERFuefhvwA/m11ksy6kjwdcyiw/07100020.jpg')",
        "url('https://download1484.mediafire.com/wwempy5we3agvSwfVpjLCH-lKXeb7MzG9KvFH0TkUgKayG2OT16RlMqgnMH4BF11HI_oy3t8JqhhSmQcu2sfyOI9J6Vj_Q/93xdg94qtyv9nzd/08680016.jpg')",
        "url('https://download1528.mediafire.com/k8huuvif9vwgsIRW2N9ZkP3TzahNgGM1kDqhEbT9dcIEeDy_KPwjHaCTxiG1AgROg4F_yP3W_jgyjrATGJQoDzk_4x7USw/vtmm3ewq14bvf78/09310029.jpg')",
        "url('https://download1580.mediafire.com/wdui8f8phl6gQnwleBdUV_9ElsPBoOHUh6dPV8FxlnEp2GUpOat3oMHRPbUtnIzR7GiKHT20I9wXNu0Li0goHGr614FuPg/6lph70agonxip8m/09870035.jpg')",
        "url('https://download1085.mediafire.com/ajy2faoit5rg0v5sOcVW1IrEhOpqrKNyw1AX7RtJij3ffcTA2x8-hoQMBGzPAVVKhHfH1m0cckw0fEuNdGjyx4G03-fCyg/0cjytjwjbbbcxnd/735301.jpg')",
        "url('https://download1515.mediafire.com/9pd6pjrrztjgbhqChUyvFb4WZioqX_nBBpcz_kN5ZQdC6BWNg3iofiv5_Zu0NzSpIV3BIX09XtV8HYJG9zWz1q14wCLzyg/4s8315d10x33eeg/Clannad.jpg')"
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

