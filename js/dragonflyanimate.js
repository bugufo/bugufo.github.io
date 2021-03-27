(function () {
const html = document.documentElement;
const canvas = document.querySelector('.dragonflyanimation');
const context = canvas.getContext('2d');

this.addEventListener("DOMContentLoaded", preloadImages, true);
 
function preloadImages(e) {
    const imageArray = new Array("dragonfly/dragonflyanimation0001_00000.jpg",
    "dragonfly/dragonflyanimation0001_00001.jpg",
    "dragonfly/dragonflyanimation0001_00002.jpg",
    "dragonfly/dragonflyanimation0001_00003.jpg",
    "dragonfly/dragonflyanimation0001_00004.jpg",
    "dragonfly/dragonflyanimation0001_00005.jpg",
    "dragonfly/dragonflyanimation0001_00006.jpg",
    "dragonfly/dragonflyanimation0001_00007.jpg",
    "dragonfly/dragonflyanimation0001_00008.jpg",
    "dragonfly/dragonflyanimation0001_00009.jpg",
    "dragonfly/dragonflyanimation0001_00010.jpg",
    "dragonfly/dragonflyanimation0001_00011.jpg",
    "dragonfly/dragonflyanimation0001_00012.jpg",
    "dragonfly/dragonflyanimation0001_00013.jpg",
    "dragonfly/dragonflyanimation0001_00014.jpg",
    "dragonfly/dragonflyanimation0001_00015.jpg",
    "dragonfly/dragonflyanimation0001_00016.jpg",
    "dragonfly/dragonflyanimation0001_00017.jpg",
    "dragonfly/dragonflyanimation0001_00018.jpg",
    "dragonfly/dragonflyanimation0001_00019.jpg",
    "dragonfly/dragonflyanimation0001_00020.jpg",
    "dragonfly/dragonflyanimation0001_00021.jpg",
    "dragonfly/dragonflyanimation0001_00022.jpg",
    "dragonfly/dragonflyanimation0001_00023.jpg",
    "dragonfly/dragonflyanimation0001_00024.jpg",
    "dragonfly/dragonflyanimation0001_00025.jpg",
    "dragonfly/dragonflyanimation0001_00026.jpg",
    "dragonfly/dragonflyanimation0001_00027.jpg",
    "dragonfly/dragonflyanimation0001_00028.jpg",
    "dragonfly/dragonflyanimation0001_00029.jpg",
    "dragonfly/dragonflyanimation0001_00030.jpg",
    "dragonfly/dragonflyanimation0001_00031.jpg",
    "dragonfly/dragonflyanimation0001_00032.jpg",
    "dragonfly/dragonflyanimation0001_00033.jpg",
    "dragonfly/dragonflyanimation0001_00034.jpg",
    "dragonfly/dragonflyanimation0001_00035.jpg",
    "dragonfly/dragonflyanimation0001_00036.jpg",
    "dragonfly/dragonflyanimation0001_00037.jpg",
    "dragonfly/dragonflyanimation0001_00038.jpg",
    "dragonfly/dragonflyanimation0001_00039.jpg",
    "dragonfly/dragonflyanimation0001_00040.jpg",
    "dragonfly/dragonflyanimation0001_00041.jpg",
    "dragonfly/dragonflyanimation0001_00042.jpg",
    "dragonfly/dragonflyanimation0001_00043.jpg",
    "dragonfly/dragonflyanimation0001_00044.jpg",
    "dragonfly/dragonflyanimation0001_00045.jpg",
    "dragonfly/dragonflyanimation0001_00046.jpg",
    "dragonfly/dragonflyanimation0001_00047.jpg",
    "dragonfly/dragonflyanimation0001_00048.jpg",
    "dragonfly/dragonflyanimation0001_00049.jpg",
    "dragonfly/dragonflyanimation0001_00050.jpg",
    "dragonfly/dragonflyanimation0001_00051.jpg",
    "dragonfly/dragonflyanimation0001_00052.jpg",
    "dragonfly/dragonflyanimation0001_00053.jpg",
    "dragonfly/dragonflyanimation0001_00054.jpg",
    "dragonfly/dragonflyanimation0001_00055.jpg",
    "dragonfly/dragonflyanimation0001_00056.jpg",
    "dragonfly/dragonflyanimation0001_00057.jpg",
    "dragonfly/dragonflyanimation0001_00058.jpg",
    "dragonfly/dragonflyanimation0001_00059.jpg",
    "dragonfly/dragonflyanimation0001_00060.jpg",
    "dragonfly/dragonflyanimation0001_00061.jpg",
    "dragonfly/dragonflyanimation0001_00062.jpg",
    "dragonfly/dragonflyanimation0001_00063.jpg",
    "dragonfly/dragonflyanimation0001_00064.jpg",
    "dragonfly/dragonflyanimation0001_00065.jpg",
    "dragonfly/dragonflyanimation0001_00066.jpg",
    "dragonfly/dragonflyanimation0001_00067.jpg",
    "dragonfly/dragonflyanimation0001_00068.jpg",
    "dragonfly/dragonflyanimation0001_00069.jpg",
    "dragonfly/dragonflyanimation0001_00070.jpg",
    "dragonfly/dragonflyanimation0001_00071.jpg",
    "dragonfly/dragonflyanimation0001_00072.jpg",
    "dragonfly/dragonflyanimation0001_00073.jpg",
    "dragonfly/dragonflyanimation0001_00074.jpg");
 
    for (let i = 0; i < imageArray.length; i++) {
        const tempImage = new Image();
        tempImage.src = imageArray[i];
    };
};







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
