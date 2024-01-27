// Canvas : dessiner dans un canvas

const canvas = document.getElementById("art")
const ctx = canvas.getContext("2d");

//obtenir la position de la souris
function getMousePos(e){
  const rect = canvas.getBoundingClientRect();
  return{
    x : e.clientX - rect.left,
    y: e.clientY - rect.top
  }
}

// mousemove : dessiner
function mouseMove(e){
  const mousePos = getMousePos(e);
  ctx.lineTo(mousePos.x, mousePos.y)
  ctx.stroke()
  ctx.strokeStyle = "salmon";
  ctx.lineWidth = 7;
}

//mousedown : commencer à dessiner
canvas.addEventListener("mousedown", (e)=>{
  e.preventDefault();
  const mousePos = getMousePos(e);
  ctx.beginPath()
  ctx.moveTo(mousePos.x, mousePos.y)
  
  canvas.addEventListener("mousemove", mouseMove);
  canvas.addEventListener("mouseup",() => {
    canvas.removeEventListener("mousemove", mouseMove)})
})

reset.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
})