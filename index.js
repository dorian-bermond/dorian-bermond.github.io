//document.getElementById('Head').addEventListener("onmouseover", Hover) ;
//console.log("Get") ;

function Hover()
{
  console.log("Hovered") ;
  document.getElementById("leftArm").setAttribute("y2", 150) ;
  document.getElementById("rightArm").setAttribute("y2", 150) ;
  document.getElementById("mouth").setAttribute("d", "M 150 140 C 150 120, 200 120, 200 140") ;
}

function notHover()
{
  console.log("Not hovered") ;
  document.getElementById("leftArm").setAttribute("y2", 200) ;
  document.getElementById("rightArm").setAttribute("y2", 200) ;
  document.getElementById("mouth").setAttribute("d", "M 150 120 C 150 140, 200 140, 200 120") ;
}
