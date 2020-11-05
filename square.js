class Square {
    constructor(x, y, size, num) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = 'white';
        this.textColor = 'black';
        this.textString = num;
    }

    render() {
        
        fill(this.color);
        square(this.x, this.y, this.size);
        fill(this.textColor);
        textSize(28);
        textAlign(CENTER,CENTER);
        text(this.textString, this.x+4, this.y, this.size, this.size)
        
    }

    clicked() {
        let checkX = mouseX > this.x && mouseX < (this.x + this.size);
        let checkY = mouseY > this.y && mouseY < (this.y + this.size);
        
        if(checkX && checkY) {
            
            inputSound.play();
            
            const userInput = key;
            const numberContainer = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
            if (numberContainer.includes(userInput)) {
                this.textString = userInput;
                this.color = 'yellow';
            } else {
                alertSound.play();
                alert('Please enter a valid input!')
            };
        }
    }
}