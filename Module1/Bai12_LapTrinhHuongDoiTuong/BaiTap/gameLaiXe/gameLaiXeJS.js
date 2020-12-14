function Car(mapWith, mapHeight) {
    this.mapWith = mapWith;
    this.mapHeight = mapHeight;
    this.speedX = 0;
    this.speedY = 0;
    this.power = 3;
    this.cx = mapWith / 2;
    this.cy = mapHeight / 2;
}

Car.prototype.draw = function (context) {
    let img = document.getElementById('imgCar');
    context.drawImage(img);
};
