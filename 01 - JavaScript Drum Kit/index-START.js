window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key='${e.key}']`);
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
    if (!audio) return;
    audio.currentTime = 0; //rewind the audio track to the start
    audio.play();
    key.classList.add('playing');
})

window.addEventListener('keyup', function(e){
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
        key.classList.remove('playing');
})

var arr = [];

for (var i=1; i=5; i++) {
    arr.push(i);
}

console.log(arr);
