var mouseEvent="empty";
var last_x,last_y;

var canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="black";

width=20;

canvas.addEventListener("mousedown" ,My_Mouse_Down);
function My_Mouse_Down(e)
{
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    mouseEvent="mouseDown";

}
canvas.addEventListener("mousemove" ,My_Mouse_Move);
function My_Mouse_Move(e)
{
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;

    if(mouseEvent =="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width ;
        ctx.moveTo(last_x,last_y);
        ctx.lineTo(current_x,current_y);
        ctx.stroke();
    }
last_x=current_x;
last_y=current_y;
}

  
canvas.addEventListener("mouseup" ,My_Mouse_up);
function My_Mouse_up(e)
{
    mouseEvent="mouseUp";

}  

    
canvas.addEventListener("mouseleave" ,My_Mouse_leave);
function My_Mouse_leave(e)
{
    mouseEvent="mouseLeave";
}

function cleararea()
{
ctx.clearRect(0,0,canvas.width,canvas.height);

}


