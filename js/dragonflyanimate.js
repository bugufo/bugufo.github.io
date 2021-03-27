(function () {
const html = document.documentElement;
const canvas = document.querySelector('.dragonflyanimation');
const context = canvas.getContext('2d');





const currentFrame = index => (
    `dragonfly/dragonflyanimation0001_${index.toString().padStart(5, '0')}.jpg`


)


const frameCount = 75;
canvas.height = 600;
canvas.width = 600;
const dragonflyAnimationImage = new Image();
dragonflyAnimationImage.src = currentFrame(0);
dragonflyAnimationImage.onload = function(){
    context.drawImage(dragonflyAnimationImage, 0, 0)
};


const updateImage = index => {
    dragonflyAnimationImage.src = currentFrame(index);
    context.drawImage(dragonflyAnimationImage, 0, 0);
};

window.addEventListener('scroll', () => {

    
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.pageYOffset;
    const scrollFraction = scrollTop / (maxScrollTop);
    const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;
    
    

    const scrollFractionModified = map(scrollFraction, scrollTop, 3, maxScrollTop, 5)

    const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFractionModified * frameCount));


    if (frameIndex <= 0) {
        requestAnimationFrame(() => updateImage(1));
    }
    else if (frameIndex > 74) {
        requestAnimationFrame(() => updateImage(74));
    }
    else if (frameIndex < 74) {
    requestAnimationFrame(() => updateImage(frameIndex + 1));
};

});
})();
