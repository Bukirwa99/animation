var textArea =document.getElementById("textArea");
textArea.style.fontsize="15px";
textArea.Value =JUGGLER;
//my controls
var startButton=document.getElementById("Start");
var stopButton=document.getElementById("Stop");
stopButton.disabled=true;
startButton.addEventListener("click",()=>{
    startButton.disabled=false;
    stopButton.disabled=true;
    textAreacontent=textArea.value;
    animateNow();


});
stopButton.addEventListener(click,()=>{
    stopButton.disabled=false;
    startButton.disabled=true;
    stopAnimating();
    textArea.value=textcontent;

});
//select
var selection =document.getElementById("selection");
Selection .addEventListtener("change",()=>{
    textAtrea.value=Animations[selection.value];
});
//size
var animationSize=document.getElementById("animationSize");
animationSize.addEventListener("change",()=>{
    textArea.style.fontsize=animationSize.value;

});
//speed
var normalspeed=getElementById("Normal");
var slowspeed=getElementById("s1o-Mo");
var turbospeed=getElementById("Turbo");
var speed=normalspeed.Value;
normalspeed=addEventListener("change",()=>{
    speed=normalspeed.value;
});
slowspeed=addEventListener("change",()=>{
    speed=slowspeed.value;
});
turbospeed=addEventListener("change",()=>{
    speed=turbospeed.Value
});
//function
function animateNow(){
    animation=textArea.value;
    if(animation.indexof("=====/n")){
        frames=animation.split("=====");

    }
    initialIndex=0;
    showNextFrame();
}
function showNextFrame(){
    textArea.value=frames[initialIndex];
    initialIndex=(initialIndex+1)%frames.length;
    timer=setTimeout("showNext frame()",speed);

}
function stopAnimating(){
    clearTimeout(timer);
}