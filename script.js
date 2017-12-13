function Phone(brand, matrix, price, color) {
	this.brand = brand;
	this.price = price; 
	this.color = color;
	this.matrix = matrix;
}

Phone.prototype.printInfo = function() {
console.log("The phone brand is " + this.brand + ". Has good quality matrix? " +"-"+ this.matrix + ". Color is " + this.color + " and the price is " + this.price + " zł.");
}

var iPhone6S = new Phone("Apple", "Yes", 2100, "silver");
var GalaxyS6 = new Phone("Samsung", "Yes", 2200, "gold");
var OnePlus = new Phone("Plus", "I dont known", 1000, "black");

iPhone6S.printInfo();
GalaxyS6.printInfo();
OnePlus.printInfo();
