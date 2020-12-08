// JavaScript source code

//variable declaration
var totalDesks = [];
var modelTxt = document.getElementById("model");
var numberOfDrawersTxt = document.getElementById("numberOfDrawers");
var sizeTxt = document.getElementById("size");
var colorTxt = document.getElementById("color");
var materialTxt = document.getElementById("material");
var costTxt = document.getElementById("cost");
var dropDownConsultorOption = document.getElementsByName("dropDownConsultor")[0];
var imgDesk = document.getElementById("imgDesk");


//Constructor of the Desk
function Desk() {

    
    this.id = totalDesks.length + 1;
    this.model = modelTxt.value;
    this.drawers = numberOfDrawersTxt.value;
    this.size = sizeTxt.value;
    this.color = colorTxt.value;
    this.material = materialTxt.value;
    this.cost = costTxt.value;
    this.drawerClosed = true;
    this.imgSrc = "images/default.png";
    totalDesks.push(this)
    dropDownConsultorOption.innerHTML = "";
    for (let i in totalDesks)
    {
        
        dropDownConsultorOption.innerHTML += "<option value='" + i + "'>" + i + "</option>";
    }

    
    
}

//Prototype of the Desk
Desk.prototype = {
    //open and close the drawer method
    accionDrawer: function () {
        if (this.drawerClosed == true) { this.drawerClosed = false }
        else if (this.drawerClosed == false) { this.drawerClosed = true }
        return this.drawerClosed
    },
    //print in console method
    printInConsole: function () {
        let labelDesk = document.getElementById("labelConsult");
        imgDesk.src = this.imgSrc;
        imgAlt = this.imgAlt;

        labelDesk.innerText = "Desk info: \n" +
        " The model is " + this.model + "." +
            "\n The number of drawers is " + this.drawers + "." +
            "\n The size is " + this.size[0] + "x" + this.size[1] + "x" + this.size[2] + "." +
            "\n The color is " + this.color + "." +
            "\n The material is " + this.material + "." +
            "\n The cost is " + this.cost + " Euros." +
            "\n Desk's drawer is closed? " + this.drawerClosed + ".";
    },

    printAll: function() {
        for (i in totalDesks) {
            console.log("Desk info: \n" +
                " The model is " + totalDesks[i].model + "." +
                "\n The number of drawers is " + totalDesks[i].drawers + "." +
                "\n The size is " + totalDesks[i].size[0] + "x" + totalDesks[i].size[1] + "x" + totalDesks[i].size[2] + "." +
                "\n The color is " + totalDesks[i].color + "." +
                "\n The material is " + totalDesks[i].material + "." +
                "\n The cost is " + totalDesks[i].cost + " Euros." +
                "\n Desk's drawer is closed? " + totalDesks[i].drawerClosed + ".")
        }
    },

    //stores the desk in an array
    getId: function () { return this.id; },
    getModel: function () { return this.model; },
    getNumberOfDrawers: function () { return this.drawers; },
    getSize: function () { return this.size; },
    getColor: function () { return this.color; },
    getMaterial: function () { return this.material; },
    getCost: function () { return this.cost; },
    getDrawerClosed: function () { return this.drawerClosed; },
    getImgSrc: function () { return this.imgSrc },
    getImgAlt: function () { return this.imgAlt },
    getImgHeight: function() { return this.imgHeight },
    getImgWidth: function () { return this.imgWidth },

    setId: function (id) { this.id = id;},
    setModel: function (model) { this.model = model; },
    setNumberOfDrawers: function (numberOfDrawers) { this.drawers = numberOfDrawers; },
    setSize: function (size) { this.size = size; },
    setColor: function (color) { this.color = color; },
    setMaterial: function (material) { this.material = material; },
    setCost: function (cost) { this.cost = cost; },
    setDrawerClosed: function (drawerClosed) { this.drawerClosed = drawerClosed; },
    setImgSrc: function (imgSrc) { this.imgSrc = imgSrc },
    setImgAlt: function (imgAlt) { this.imgAlt = imgAlt },
    setImgHeight: function (imgHeight) { this.imgHeight = imgHeight },
    setImgWidth: function (imgWidth) {this.imgWidth = imgWidth }
    
    }

//create default desks
var desk1 = new Desk()
desk1.setId(1);
desk1.setModel("Andina");
desk1.setNumberOfDrawers(4);
desk1.setSize([100, 60, 10]);
desk1.setColor("White");
desk1.setMaterial("Metal");
desk1.setCost(35.20);
desk1.setImgSrc("images/andina.png");
desk1.setImgAlt("Escritorio modelo Andina");
desk1.setImgHeight(300);
desk1.setImgWidth(300);

var desk2 = new Desk();
desk2.setId(2);
desk2.setModel("Patagonia");
desk2.setNumberOfDrawers(2);
desk2.setSize([120, 40, 20]);
desk2.setColor("Black");
desk2.setMaterial("Wood");
desk2.setCost(25.70);
desk2.setImgSrc("images/patagonia.png");
desk2.setImgAlt("Escritorio modelo Patagonia");
desk2.setImgHeight(300);
desk2.setImgWidth(300);

var desk3 = new Desk();
desk3.setId(3);
desk3.setModel("Nordic");
desk3.setNumberOfDrawers(3);
desk3.setSize([90, 50, 15]);
desk3.setColor("Brown");
desk3.setMaterial("Plastic");
desk3.setCost(15.50);
desk3.setImgSrc("images/nordic.png");
desk3.setImgAlt("Escritorio modelo Nordic");
desk3.setImgHeight(300);
desk3.setImgWidth(300);


dropDownConsultorOption.onchange = function ()
{
    var dropDownConsultorValue = document.getElementById("dropDownConsultor").value;
    totalDesks[dropDownConsultorValue].printInConsole();
}
