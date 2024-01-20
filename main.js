

const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const youtubeFrame = document.getElementById('youtube');
const title = document.getElementById('title');


yesButton.addEventListener('click', () => {
    
    yesButton.style.display = 'none';
    noButton.style.display = 'none';
    title.innerHTML = "Agora é meu namorado para toda a vida";
    youtubeFrame.innerHTML += "<iframe width='560' height='315' src='https://www.youtube-nocookie.com/embed/Me5ZBOFT72w?si=8tPxDkaRvRdjmaMe&amp;start=5&amp;autoplay=1&amp;loop=1' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>"
})


noButton.addEventListener('mousedown', () => {
    let top = generateRandomNumber(20, 80);
    let left = generateRandomNumber(20, 80);
    noButton.style.top = `${top}%`;
    noButton.style.left = `${left}%`;
})

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

