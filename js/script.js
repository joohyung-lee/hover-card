var hoverCard = {
    width: 0,
    height: 0,
    startX:0,
    startY:0,
    mouseX: 0,
    mouseY: 0,
    postionX: function () {
        return this.mouseX / this.width;
    },
    positionY: function () {
        return this.mouseY / this.height;
    },
    cardTransform: function (target) {
        var rx = this.postionX() * 30;
        var ry = this.positionY() * -30;
        return target.children[0].style.transform = 'rotateY(' + rx + 'deg)' + ' ' + 'rotateX(' + ry + 'deg)';
    },
    cardBgTransform: function (target) {
        var bx = this.postionX() * -40;
        var by = this.positionY() * -40;
        return target.children[0].children[0].style.backgroundPosition = bx + 'px' + ' ' + by + 'px';
    },
    handleEnter: function (target, e) {
        this.width = target.clientWidth;
        this.height = target.clientHeight;
        this.startX=e.pageX;
        this.startY=e.pageY;
    },
    handleMove: function (target, e) {
        if(Math.abs(this.startX-e.pageX)>50){
            target.children[0].classList.remove('ani');
        }
        this.mouseX = e.pageX - target.offsetLeft - this.width / 2;
        this.mouseY = e.pageY - target.offsetTop - this.height / 2;
        this.cardTransform(target);
        this.cardBgTransform(target);
    },
    handleLeave: function (target) {
        this.mouseX = 0;
        this.mouseY = 0;
        target.children[0].classList.add('ani');
        this.cardTransform(target);
        this.cardBgTransform(target);
    },
    touchEnter: function (target, e) {
        e.preventDefault();
        this.handleEnter(target,e.touches[0]);
        
    },
    touchMove: function (target, e) {
        e.preventDefault();
        this.handleMove(target,e.touches[0])
    },
    touchEnd: function (target,e) {
        e.preventDefault();
        this.handleLeave(target)
    }

}