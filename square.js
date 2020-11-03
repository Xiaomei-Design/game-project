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
        textSize(this.size);
        textAlign(CENTER);
        text(this.textString, this.x, this.y, this.size, this.size)
        
    }

    clicked() {
        let checkX = mouseX > this.x && mouseX < (this.x + this.size);
        let checkY = mouseY > this.y && mouseY < (this.y + this.size);
        // function myInputEvent() {
        //     return this.value
        // }
        if(checkX && checkY) {
            // let inp = createInput('');
            // let result = inp.input(myInputEvent);
            // this.textString = parseInt(9, 10);
            const userInput = prompt('Plese type a number');
            const numberContainer = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
            if (numberContainer.includes(userInput)) {
                this.textString = userInput;
            } else {
                alert('Please enter a valid input!')
            }; 
        }
    }
}