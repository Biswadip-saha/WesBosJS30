function removeTranstion(e){
    if(e.propertyName !== 'transform') return

    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach((key)=>{
    key.addEventListener('transitionend', removeTranstion)
})

window.addEventListener('keydown', (e) => {
	const audio = document.querySelector(`audio[data-key="${e.code}"]`);
	const divClass = document.querySelector(`.key[data-key="${e.code}"]`);

    if (!audio) return;

    audio.currentTime = 0;
	audio.play();

    divClass.classList.add('playing')
});