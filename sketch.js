let dice = [];
var color1;
var color2;
var color3;
var num;
var x;
var y = 0; 

function setup() {
    createCanvas(600, 400);
	for(let i = 0; i < 20; i++){
        color1 = (int)(random(256));
        color2 = (int)(random(256));
        color3 = (int)(random(256));
        num = (int)(random(1,7));
        x = (int)(random(600));
		dice[i] = new Dice(num, color1, color2, color3, x, y);
	}
}


function draw() {
    background(211,211,211);
	for(let i = 0; i < dice.length; i++) {
        dice[i].show();
        dice[i].move();
	}
}

class Dice {
	constructor(num, color1, color2, color3, x, y) {
		this.num = num;
		this.color1 = color1;
		this.color2 = color2;
		this.color3 = color3;
		this.x = x;
		this.y = y;
	}
	
	show() {
		stroke(0);
		fill(this.color1, this.color2, this.color3);
		rect(this.x, this.y, 40, 40, 5);
        textSize(20);
        fill(0);
		text(this.num, this.x + 15, this.y +25);
	}
	
	move() {
		this.y = this.y + 10;
        if(this.y == 400){
            this.y = 0;
        }

	}

}