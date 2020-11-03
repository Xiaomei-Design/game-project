class Square {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = 'white';
        this.textColor = 'black';
        this.textString = '';
    }
    render() {
        
        fill(this.color);
        square(this.x, this.y, this.size);
        fill(this.textColor);
        textSize(this.size);
        textAlign(CENTER);
        text(this.textString, this.x, this.y, this.size, this.size)
        
    }

    clicked() {
        let checkX = mouseX > this.x && mouseX < (this.x + this.size);
        let checkY = mouseY > this.y && mouseY < (this.y + this.size);
        if(checkX && checkY) {
            this.textString = parseInt(9, 10);
        }
    }
    
}