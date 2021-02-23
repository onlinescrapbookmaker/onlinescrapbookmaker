// main.js

console.log(`Let's get crafty!`);

var art=document.getElementById("headerid").style.textAlign = "center";

// enter name prompt
var username = prompt("Let's get crafty! Please enter your name to begin.");

// loop to remind user to enter name
while(username == false || username == null) {
    username = prompt("Please enter your name to begin. \nIf you don't want to enter a name, please enter 'noname'.");
};
        
if (username=="noname") {
    document.getElementById("username").innerHTML = "My Scrapbook"; //header title set to default
} else if (username!=false) {
    document.getElementById("username").innerHTML = username + "'s Scrapbook"; //header title is customized using the name entered
};

// raphael paper for main canvas
var paper = new Raphael(document.getElementById("svgcanvas"));
var dimX = paper.width;
var dimY = paper.height;
var bg = paper.rect(0, 0, dimX, dimY);
bg.attr({
    "fill" : "white",  
    "stroke" : "white"       
});

// raphael paper for stickers
var paper2 = new Raphael(document.getElementById("stickers"));
var stickerpad = paper2.rect(0, 0, 200, 300);
stickerpad.attr({
    "fill" : "white",
    "opacity" : 0,
});

// insert stickers with svg
var sticker1 = paper2.rect(0, 0, 100, 100);
sticker1.attr({ 
    "fill" : "url(resources/sun100.png)",
    "stroke" : "none"  
});

var sticker2 = paper2.rect(100, 0, 100, 100);
sticker2.attr({
    "fill" : "url(resources/heart100.png)",  
    "stroke" : "none"       
});

var sticker3 = paper2.rect(0, 100, 100, 100);
sticker3.attr({
    "fill" : "url(resources/rainbow100.png)",  
    "stroke" : "none"                
});

var sticker4 = paper2.rect(100, 100, 100, 100);
sticker4.attr({
    "fill" : "url(resources/balloon100.png)",  
    "stroke" : "none"                
});

var sticker5 = paper2.rect(0, 200, 100, 100);
sticker5.attr({
    "fill" : "url(resources/star100.png)",  
    "stroke" : "none"                
});

var sticker6 = paper2.rect(100, 200, 100, 100);
sticker6.attr({
    "fill" : "url(resources/watermelon100.png)",  
    "stroke" : "none"                
});

// to show that stickers are clickable
sticker1.node.addEventListener("mouseover", function(){
    sticker1.node.style.opacity = 0.75
    //console.log("on") - test whether it's working
});

sticker1.node.addEventListener("mouseout", function(){
    sticker1.node.style.opacity = 1
    //console.log("off") - test whether it's working
});

sticker2.node.addEventListener("mouseover", function(){
    sticker2.node.style.opacity = 0.75
});

sticker2.node.addEventListener("mouseout", function(){
    sticker2.node.style.opacity = 1
});

sticker3.node.addEventListener("mouseover", function(){
    sticker3.node.style.opacity = 0.75
});

sticker3.node.addEventListener("mouseout", function(){
    sticker3.node.style.opacity = 1
});

sticker4.node.addEventListener("mouseover", function(){
    sticker4.node.style.opacity = 0.75
});

sticker4.node.addEventListener("mouseout", function(){
    sticker4.node.style.opacity = 1
});

sticker5.node.addEventListener("mouseover", function(){
    sticker5.node.style.opacity = 0.75
});

sticker5.node.addEventListener("mouseout", function(){
    sticker5.node.style.opacity = 1
});

sticker6.node.addEventListener("mouseover", function(){
    sticker6.node.style.opacity = 0.75
});

sticker6.node.addEventListener("mouseout", function(){
    sticker6.node.style.opacity = 1
});

// let stickers go on canvas and draggable
sticker1.node.addEventListener("click", function(){
    var sticker1selected = paper.image("resources/sun100.png", dimX/2, dimY/2, 100, 100);
    var mousedown = false;

    sticker1selected.node.addEventListener("mousedown", function(ev){
        mousedown = true;
        //console.log('mousedown');
        sticker1selected.attr({
            "opacity": .5
        });
    });

    bg.node.addEventListener("mousemove", function(ev){
        var x = ev.offsetX;
        var y = ev.offsetY;
        if (mousedown == true) {
            sticker1selected.attr({
                "x": x,
                "y": y
            });
        };
    });

    window.addEventListener("mouseup", function(ev){
        mousedown = false;
        //console.log('mouseup');
        sticker1selected.attr({
            "opacity": 1
        });
    });           
});

sticker2.node.addEventListener("click", function(){
    var sticker2selected = paper.image("resources/heart100.png", dimX/3, dimY/3, 100, 100);
    var mousedown = false;

    sticker2selected.node.addEventListener("mousedown", function(ev){
        mousedown = true;
        sticker2selected.attr({
            "opacity": .5
        });
    });

    bg.node.addEventListener("mousemove", function(ev){
        var x = ev.offsetX;
        var y = ev.offsetY;
        if (mousedown == true) {
            sticker2selected.attr({
                "x": x,
                "y": y
            });
        };
    });

    window.addEventListener("mouseup", function(ev){
        mousedown = false;
        sticker2selected.attr({
            "opacity": 1
        });
    });           
});

sticker3.node.addEventListener("click", function(){
    var sticker3selected = paper.image("resources/rainbow100.png", dimX/4, dimY/2, 100, 100);
    var mousedown = false;

    sticker3selected.node.addEventListener("mousedown", function(ev){
        mousedown = true;
        sticker3selected.attr({
            "opacity": .5
        });
    });

    bg.node.addEventListener("mousemove", function(ev){
        var x = ev.offsetX;
        var y = ev.offsetY;
        if (mousedown == true) {
            sticker3selected.attr({
                "x": x,
                "y": y
            });
        };
    });

    window.addEventListener("mouseup", function(ev){
        mousedown = false;
        sticker3selected.attr({
            "opacity": 1
        });
    });           
});

sticker4.node.addEventListener("click", function(){
    var sticker4selected = paper.image("resources/balloon100.png", dimX/2, dimY/10, 100, 100);
    var mousedown = false;

    sticker4selected.node.addEventListener("mousedown", function(ev){
        mousedown = true;
        sticker4selected.attr({
            "opacity": .5
        });
    });

    bg.node.addEventListener("mousemove", function(ev){
        var x = ev.offsetX;
        var y = ev.offsetY;
        if (mousedown == true) {
            sticker4selected.attr({
                "x": x,
                "y": y
            });
        };
    });

    window.addEventListener("mouseup", function(ev){
        mousedown = false;
        sticker4selected.attr({
            "opacity": 1
        });
    });           
});

sticker5.node.addEventListener("click", function(){
    var sticker5selected = paper.image("resources/star100.png", dimX/8, dimY/2, 100, 100);
    var mousedown = false;

    sticker5selected.node.addEventListener("mousedown", function(ev){
        mousedown = true;
        sticker5selected.attr({
            "opacity": .5
        });
    });

    bg.node.addEventListener("mousemove", function(ev){
        var x = ev.offsetX;
        var y = ev.offsetY;
        if (mousedown == true) {
            sticker5selected.attr({
                "x": x,
                "y": y
            });
        };
    });

    window.addEventListener("mouseup", function(ev){
        mousedown = false;
        sticker5selected.attr({
            "opacity": 1
        });
    });           
});

sticker6.node.addEventListener("click", function(){
    var sticker6selected = paper.image("resources/watermelon100.png", dimX/7, dimY/5, 100, 100);
    var mousedown = false;

    sticker6selected.node.addEventListener("mousedown", function(ev){
        mousedown = true;
        sticker6selected.attr({
            "opacity": .5
        });
    });

    bg.node.addEventListener("mousemove", function(ev){
        var x = ev.offsetX;
        var y = ev.offsetY;
        if (mousedown == true) {
            sticker6selected.attr({
                "x": x,
                "y": y
            });
        };
    });

    window.addEventListener("mouseup", function(ev){
        mousedown = false;
        sticker6selected.attr({
            "opacity": 1
        });
    });           
});
//---------------------------------------------

// adding image through url onto canvas and making it draggable
var imagebutton = document.getElementById("insertImage");

imagebutton.addEventListener("click", function(){
    var imageURL = document.getElementById("imageURL");
    var insertedimageurl = imageURL.value;

    var newImage = new Image();
    newImage.src = insertedimageurl;
    var insertedimage = paper.image(insertedimageurl, dimX/7, dimY/5, 200, 200);
    var mousedown = false;

    insertedimage.node.addEventListener("mousedown", function(ev){
        mousedown = true;
        //console.log('mousedown');
        insertedimage.attr({
            "opacity": .5
        });
    });

    bg.node.addEventListener("mousemove", function(ev){
        var x = ev.offsetX;
        var y = ev.offsetY;
        if (mousedown == true) {
            insertedimage.attr({
                "x": x,
                "y": y
            });
        };
    });

    window.addEventListener("mouseup", function(ev){
        mousedown = false;
        //console.log('mouseup');
        insertedimage.attr({
            "opacity": 1
        });
    });           
  
});
/* function for selecting image from local machine (removed bc I can't figure out the function part)
window.addEventListener("load", function() {
  document.querySelector('input[type="file"]').addEventListener("change", function() {
      if (this.files && this.files[0]) {
          var img = document.querySelector("img");  // $("img")[0]
          img.src = URL.createObjectURL(this.files[0]); 
          img.onload = imageIsLoaded;
      }
  });
});

// function for inserting image from local machine into canvas and letting it be draggable 
let imagebutton = document.getElementById("insertImage");
let selectimage = document.getElementById("selectimage");

imagebutton.addEventListener("click", function(){
    var insertedimage = paper.image(selectimage.value, dimX/2, dimY/2, 200, 200); / I believe the problem is here :(
    var mousedown = false;

    insertedimage.node.addEventListener("mousedown", function(ev){
        mousedown = true;
        insertedimage.attr({
            "opacity": .5
        });
    });

    bg.node.addEventListener("mousemove", function(ev){
        var x = ev.offsetX;
        var y = ev.offsetY;
        if (mousedown == true) {
            insertedimage.attr({
                "x": x,
                "y": y
            });
        };
    });

    window.addEventListener("mouseup", function(ev){
        mousedown = false;
        insertedimage.attr({
            "opacity": 1
        });
    });           
}); */

//---------------------------------------------

// function for adding text into canvas and making it draggable

let textbutton = document.getElementById("insertText");
let textbox = document.getElementById("textbox");
let scaleslider = document.getElementById("scaleslider"); // slider to adjust scale of text

textbutton.addEventListener("click", function(){
    var insertedtext = paper.text(dimX/2, dimY/2, textbox.value).attr({ 
            "font-size": scaleslider.value,
            "font-family" : "hello"
        });
    var mousedown = false;

    insertedtext.node.addEventListener("mousedown", function(ev){
        mousedown = true;
        //console.log('mousedown');
        insertedtext.attr({
            "opacity": .5
        });
    });

    bg.node.addEventListener("mousemove", function(ev){
        var x = ev.offsetX;
        var y = ev.offsetY;
        if (mousedown == true) {
            insertedtext.attr({
                "x": x,
                "y": y
            });
        };
    });

    window.addEventListener("mouseup", function(ev){
        mousedown = false;
        //console.log('mouseup');
        insertedtext.attr({
            "opacity": 1
        });
    });           
  
});

//---------------------------------------------

var raphaelPath; //for holding the raphael path var pathString
var pathString; //for holding the path string
var mouseState= "up"; //for holding the state of the mouse

// slider for hue (canvas)
let canvashue = document.getElementById("canvashueslider")

// slider for saturation (canvas)
let canvassaturation = document.getElementById("canvassaturationslider")

// slider for lightness (canvas)
let canvaslightness = document.getElementById("canvaslightnessslider")

// change canvas color with sliders
canvashue.addEventListener("input", function(ev) {
    var colorString = "hsl(" + canvashue.value + "," + canvassaturation.value + "," + canvaslightness.value + ")";
    bg.attr({
        "fill" : colorString,
        "stroke" : colorString,
    });
});

canvassaturation.addEventListener("input", function(ev) {
    var colorString = "hsl(" + canvashue.value + "," + canvassaturation.value + "," + canvaslightness.value + ")";
    bg.attr({
        "fill" : colorString,
        "stroke" : colorString,
    });
});

canvaslightness.addEventListener("input", function(ev) {
    var colorString = "hsl(" + canvashue.value + "," + canvassaturation.value + "," + canvaslightness.value + ")";
    bg.attr({
        "fill" : colorString,
        "stroke" : colorString,
    });
});

//---------------------------------------------

// slider for hue (marker)
let hue = document.getElementById("hueslider")

// slider for saturation (marker)
let saturation = document.getElementById("saturationslider")

// slider for lightness (marker)
let lightness = document.getElementById("lightnessslider")

// slider for stroke width (marker)
let stroke = document.getElementById("strokeslider")

// drawing on canvas (marker)
bg.node.addEventListener('mousedown', function(ev){
    mouseState = "down";
    //console.log(mouseState + "mousedown");
    pathString = `M ${ev.offsetX} ${ev.offsetY}`;
    raphaelPath = paper.path(pathString);
    var colorString = "hsl(" + hue.value + "," + saturation.value + "," + lightness.value + ")";
    raphaelPath.attr({
        "stroke" : colorString,
        "stroke-width" : stroke.value
    });
});

window.addEventListener('mouseup', function(ev){
    if (mouseState = "down") {
        //pathString += `L ${ev.offsetX} ${ev.offsetY}`;
        //raphaelPath = paper.path(pathString);
        //console.log(mouseState + "mouseup");
        mouseState = "up";
    }
});

bg.node.addEventListener('mousemove', function(ev){
    if (mouseState === "down") {
    pathString += `L ${ev.offsetX} ${ev.offsetY}`;
    raphaelPath = paper.path(pathString);
    var colorString = "hsl(" + hue.value + "," + saturation.value + "," + lightness.value + ")";
        raphaelPath.attr({
            "stroke" : colorString,
            "stroke-width" : stroke.value
        });
    };
    //console.log(mouseState + "mousemove");
});

// clear button that clears the paper of the drawing
let clearButton = document.getElementById("clearButton"); 
clearButton.addEventListener('click', function(ev){
    paper.clear();
    bg = paper.rect(0, 0, dimX, dimY);
    bg.attr({
        "fill" : "white",  
        "stroke" : "white"       
    });
    bg.node.addEventListener('mousedown', function(ev){
        mouseState = "down";
        //console.log(mouseState + "mousedown");
        pathString = `M ${ev.offsetX} ${ev.offsetY}`;
        raphaelPath = paper.path(pathString);
        var colorString = "hsl(" + hue.value + "," + saturation.value + "," + lightness.value + ")";
        raphaelPath.attr({
            "stroke" : colorString,
            "stroke-width" : stroke.value
        });
    });

    bg.node.addEventListener('mousemove', function(ev){
        if (mouseState === "down") {
        pathString += `L ${ev.offsetX} ${ev.offsetY}`;
        raphaelPath = paper.path(pathString);
        var colorString = "hsl(" + hue.value + "," + saturation.value + "," + lightness.value + ")";
            raphaelPath.attr({
                "stroke" : colorString,
                "stroke-width" : stroke.value
            });
        };
        //console.log(mouseState + "mousemove");
    });
});

// functions for buttons of music player
var currSong = 0;
var maxVol = 1;
var currVol = 0;

var audio = new Audio();
var audioArray = new Array('resources/yup.mp3','resources/sky.mp3','resources/needingyou.wav');
audio.src = audioArray[currSong];

let playButton = document.getElementById("playButton");
playButton.addEventListener('mousedown', function(ev){
    audio.play();
    console.log(audioArray[currSong]);
});

let pauseButton = document.getElementById("pauseButton");
pauseButton.addEventListener('mousedown', function(ev){
    audio.pause();
});

let nextButton = document.getElementById("nextButton");
nextButton.addEventListener('mousedown', function(ev){
    if (currSong >= audioArray.length - 1) {
        currSong = 0;
        audio.src = audioArray[currSong];
        audio.play();
        console.log(audioArray[currSong]);
        currSong++;
    } else {
        currSong++;
        audio.src = audioArray[currSong];
        audio.play();
        console.log(audioArray[currSong]);
    }
});

let previousButton = document.getElementById("previousButton");
previousButton.addEventListener('mousedown', function(ev){
    if (currSong == 0) {
        currSong = audioArray.length - 1;
        audio.src = audioArray[currSong];
        audio.play();
        console.log(audioArray[currSong]);
        currSong--;
    } else {
        currSong--;
        audio.src = audioArray[currSong];
        audio.play();
        console.log(audioArray[currSong]);
    }
});

let volAddButton = document.getElementById("volAddButton");
volAddButton.addEventListener('mousedown', function(ev){
    if (audio.volume != maxVol) {
        audio.volume += 0.1;
        console.log(audio.volume);
    } else if (audio.volume == maxVol){
        alert("Volume is set to maximum!");
    }
});

let volMinusButton = document.getElementById("volMinusButton");
volMinusButton.addEventListener('mousedown', function(ev){
    if (audio.volume < 0.2){
        alert("Volume is set to minimum!");
    } else if (audio.volume != minVol) {
        audio.volume -= 0.1;
        console.log(audio.volume);
    }
});

audio.addEventListener('ended', function () {
    if (currSong > audioArray.length) {
        currSong = 0;
        audio.src = audioArray[currSong];
        audio.play();
        currSong++;
        console.log(audioArray[currSong]);
    } else {
        currSong++;
        audio.src = audioArray[currSong];
        audio.play();
        console.log(audioArray[currSong]);
    }
}, true);

//------------------------------------------------

// arrary for prompts
var promptsArray = [];

promptsArray[0] = "What are your goals?";
promptsArray[1] = "How are you feeling today?";
promptsArray[2] = "What kind of weather do you love?";
promptsArray[3] = "Document your favourite memory!";
promptsArray[4] = "What is your favorite place to visit?";
        
// set prompts in header div
var prompts = document.getElementById("prompts");

//Sets the text in the quotes div to a random one from the quoteArray every 15 seconds
setInterval(function(){
    prompts.innerHTML = promptsArray[Math.floor((Math.random()*4)+1)];
}, 15000);
