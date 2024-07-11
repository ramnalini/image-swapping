const imageSources = ['1.jpg','2.jpg','3.jpeg','4.webp','5.jpg','6.jpg','7.jpg','8.webp','9.jpeg','10.jpg'];
function changeBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;
}
setInterval(changeBackgroundImage, 1000);