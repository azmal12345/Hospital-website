const openNav = document.getElementById("open");
const closeNav = document.getElementById("close");

openNav.addEventListener("click", function(){
    closeNav.classList.toggle("active");
})

const list = document.getElementById("changeImg");
const imgList = document.querySelectorAll("span");

imgList[0].addEventListener("click", function(){
    list.setAttribute("src", "img/dance1.gif.gif");
    list.style.width = "250px";
    list.style.height = "250px";
})
imgList[1].addEventListener("click", function(){
    list.setAttribute("src", "img/dance2.gif.gif");
    list.style.width = "200px";
    list.style.height = "250px";
})
imgList[2].addEventListener("click", function(){
    list.setAttribute("src", "img/dance6.gif.gif");
    list.style.width = "250px";
    list.style.height = "250px";
})
imgList[3].addEventListener("click", function(){
    list.setAttribute("src", "img/dance4.gif.gif");
    list.style.width = "250px";
    list.style.height = "250px";
})
imgList[4].addEventListener("click", function(){
    list.setAttribute("src", "img/dance5.gif.gif");
    list.style.width = "250px";
    list.style.height = "250px";
})

window.addEventListener("keydown", clickFunction, false);

let song = new Audio();

function clickFunction(e){
    if(e.keyCode == "65"){
        song.src = "keyCodeSongFile/hindiSong1.mp3.mp3";
        song.play();
    }else if(e.keyCode == "66"){
        song.src = "keyCodeSongFile/hindiSong2.mp3.mp3";
        song.play();
    }else if(e.keyCode == "67"){
        song.src = "keyCodeSongFile/hindiSong3.mp3.mp3";
        song.play();
    }else if(e.keyCode == "68"){
        song.src = "keyCodeSongFile/bangaliSong1.mp3.mp3";
        song.play();
    }else if(e.keyCode == "69"){
        song.src = "keyCodeSongFile/hindiSong5.mp3.mp3";
        song.play();
    }else if(e.keyCode == "70"){
        song.src = "keyCodeSongFile/hindiSong6.mp3.mp3";
        song.play();
    }else if(e.keyCode == "71"){
        song.src = "keyCodeSongFile/bhoojpuriSong2.mp3.mp3";
        song.play();
    }else if(e.keyCode == "72"){
        song.src = "keyCodeSongFile/hindiSong8.mp3.mp3";
        song.play();
    }else if(e.keyCode == "73"){
        song.src = "keyCodeSongFile/hindiSong9.mp3.mp3";
        song.play();
    }else if(e.keyCode == "74"){
        song.src = "keyCodeSongFile/englishSong1.mp3.mp3";
        song.play();
    }else if(e.keyCode == "75"){
        song.src = "keyCodeSongFile/englishSong2.mp3.mp3";
        song.play();
    }else if(e.keyCode == "76"){
        song.src = "keyCodeSongFile/englishSong3.mp3.mp3";
        song.play();
    }else if(e.keyCode == "77"){
        song.src = "keyCodeSongFile/englishSong4.mp3.mp3";
        song.play();
    }else if(e.keyCode == "78"){
        song.src = "keyCodeSongFile/rajstaniSong1.mp3.mp3";
        song.play();
    }else if(e.keyCode == "79"){
        song.src = "keyCodeSongFile/englishSong6.mp3.mp3";
        song.play();
    }else if(e.keyCode == "80"){
        song.src = "keyCodeSongFile/englishSong7.mp3.mp3";
        song.play();
    }else if(e.keyCode == "81"){
        song.src = "keyCodeSongFile/englishSong8.mp3.mp3";
        song.play();
    }else if(e.keyCode == "82"){
        song.src = "keyCodeSongFile/haryanivSong1.mp3.mp3";
        song.play();
    }else if(e.keyCode == "83"){
        song.src = "keyCodeSongFile/haryanivSong2.mp3.mp3";
        song.play();
    }else if(e.keyCode == "84"){
        song.src = "keyCodeSongFile/haryanviSong3.mp3.mp3";
        song.play();
    }else if(e.keyCode == "85"){
        song.src = "keyCodeSongFile/hariyanviSong4.mp3.mp3";
        song.play();
    }else if(e.keyCode == "86"){
        song.src = "keyCodeSongFile/punjabiSong1.mp3.mp3";
        song.play();
    }else if(e.keyCode == "87"){
        song.src = "keyCodeSongFile/punjabiSong2.mp3.mp3";
        song.play();
    }else if(e.keyCode == "88"){
        song.src = "keyCodeSongFile/punjabiSong3.mp3.mp3";
        song.play();
    }else if(e.keyCode == "89"){
        song.src = "keyCodeSongFile/punjabiSong4.mp3.mp3";
        song.play();
    }else if(e.keyCode == "90"){
        song.src = "keyCodeSongFile/africanSong1.mp3.mp3";
        song.play();
    }
}