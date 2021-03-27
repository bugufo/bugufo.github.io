
const html = document.documentElement;
const canvas = document.querySelector('.dragonflyanimation');
const context = canvas.getContext('2d');

const currentFrame = index => (
    `dragonfly/dragonflyanimation0001_${index.toString().padStart(5, '0')}.jpg`


)
console.log(currentFrame);

const frameCount = 75
canvas.height = 600;
canvas.width = 600;
const img = new Image();
img.src = currentFrame(0);
img.onload = function(){
    context.drawImage(img, 0, 0)
}

const updateImage = index => {
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {
    const scrollTop = html.scrollTop;
    console.log(scrollTop);
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / (maxScrollTop);
    const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;
    
    

    //const scrollFractionModified = (scrollFraction-scrollTop)/(maxScrollTop-scrollTop) * ((0.44)-(0.17)) + (0.17)
    const scrollFractionModified = map(scrollFraction, scrollTop, 3.6, maxScrollTop, 7.5)
    console.log(scrollFraction);
    console.log(scrollFractionModified);
    const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFractionModified * frameCount));


    requestAnimationFrame(() => updateImage(frameIndex + 1))
})