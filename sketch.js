var splashScreen
var playbutton,aboutbutton,musicbutton,mutebutton

function preload(){
    splashScreen=loadImage("The Fortune Treasure!!.gif") 
}

function setup(){
    createCanvas(windowWidth,windowHeight)

playbutton=createImg("play.png")
playbutton.position(width/4,height-(height/4))
playbutton.size(180,150) 

musicbutton=createImg("music.png")
musicbutton.position(width/2,height-(height/4.25))
musicbutton.size(180,140) 

mutebutton=createImg("mute.png")
mutebutton.position(width/28,height-(height/4.25))
mutebutton.size(180,140) 

}

function draw(){
    background(splashScreen)
}