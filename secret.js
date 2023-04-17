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
        url('https://lh3.googleusercontent.com/pw/AJFCJaX5boccS4UfXP1TxsuDGvjOYEYryv5trmyaGN3_oEoRf3_y4EmQoz4wW01RVXKOtPDeS0f3yCVzydrKbPW-z1C2hIaOQFwh01tHg_70fKS4U1ZF7uXUpwheeDVXYONjM5-9NqBBM5VXDISNxWGVF4mU=w1666-h937-s-no?authuser=0'),
        url('https://lh3.googleusercontent.com/pw/AJFCJaXVeFqIJRpyEG72OH58GpMce9vP_fKSwkK6eSBX_51KhI3dLdhz9odLdQ4SA-YwEODdrZct47XqctcoH7W7XWGqCx6Ku7IsqNpKRg7GVF2cdt9bL09L2Ag-9c3zP0QG_D1STfckhrO3BuUiN3ZtPMMn=w1666-h937-s-no?authuser=0'),
        url('https://lh3.googleusercontent.com/pw/AJFCJaWDjVySAtrI0TT7NC7nWy0C07EwB22I1hMlFt1Woxxe5Oi2r2mVYl_PbAnN4k9xQxF-lJ747HgvMaJUSG1Ix-8vIavuf38LMHqn6BDFVKBpXLFl04CE_5cOry61dNiYfTvMTCKebM5XNm7hs25MfAiA=w1666-h937-s-no?authuser=0'),
        url('https://lh3.googleusercontent.com/pw/AJFCJaX1sLIsLKBLTC6Mko_mL-BjPf8C12AFdMI_Fc48DkGZFT5h0NbrorsBATrqsOxNfY1XO_58LI6vbzxRIE3Q1a8wvp4Lw_r9VpqzkKFdRPtNUn4MlvBh_c8ZcJ_uOvEhFk87QPEM3_V4YB-A_PAY8u37=w1666-h937-s-no?authuser=0'),
        url('https://lh3.googleusercontent.com/pw/AJFCJaUYiTSRINSctBWRBecIHYYOsN1rF5d_RZyDZuOZnW-erb8l3SWid68bTKipC6kJc4nJodyCUFhUwhH3CU2ZgFt2MK-2RYHnsFos_MMCT3jacG9tftMoHZmbz13PC7DzSTKpxy-aR4oDUpX66X3YUNZb=w1666-h937-s-no?authuser=0'),
        url('https://lh3.googleusercontent.com/pw/AJFCJaVcujfA1WxREe9DCafp7aZJCHk6jXjsZICaO6rmBwD4w_mLTI0f0ZkusEx8wLFMpsLzyeqLfBtp1ZicsfnS45cAAYIpupXBFv_A_yMZJb9TfqGB4j3UxFM_5rfBMHgmz67sOF8T9A-MPWSw9ZqYv4a9=w1666-h937-s-no?authuser=0'),
        url('https://lh3.googleusercontent.com/pw/AJFCJaWBrPk0EXIPli1rM1PZBOiXso2PwwIE1NCDeI2t-hNVQxnE4CD7WkogGZiTESH4FwcIzFXCyiNew2O-ztv8GdFgUj_DpaZYEyWwm6hzos1sqk_EyiuDN_bsihPp1YflE4t-9hZxjEIP2cUWnQBRpEJr=w1666-h937-s-no?authuser=0'),
        url('https://lh3.googleusercontent.com/pw/AJFCJaVWVVvXiCoj4X0YXgNHqJTYDvydO7HtHS5ccbuQxV-D0HCsobMzMcJl6Bh_PBfb6pSMibWYTU_By4bf4S5KsCJod8ahCFzrAj1r2tHc9nng_17OUbaGDl335-HPuw1ylqoTgJgMAYs6xcmzAk_2Vt2E=w1666-h937-s-no?authuser=0'),
        url('https://lh3.googleusercontent.com/pw/AJFCJaUU3dJn0gmmedRfnLBJSncFklWNckwMzTTCH3lWoS65842AccTE-G3de1Mp7iAAsZCrBezf6tmYDW0bUk-ojFwY6yKerTpdNYBpM9BnsbpXyDEZ_yJEiZt6Xrw8sJy0ZWPpjZMYS2NjI0ZIg9g0V7Wh=w1312-h937-s-no?authuser=0'),
        url('https://lh3.googleusercontent.com/pw/AJFCJaUYlfCPOpGpmQZPXl9spNieRcc5m6nUHHBZUADJpjaCrDZW2d0z7tI4CZmvEnZvysGG0dsGv-1v7B8H3YjSvr4lzMbIaa_3eNHopd4lljInmGdG7Xmx9SrOkajt9noGqjQpWg003ZwsFPVEN9byVJZc=w1666-h937-s-no?authuser=0')
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

