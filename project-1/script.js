var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var image = document.querySelector("#image")



main.addEventListener("mousemove", function(dets){
gsap.to(cursor,{
  x:dets.x,
  y:dets.y,
  duration:0.6,
  ease: "power4.out",

})
}
)

image.addEventListener("mouseenter",function(){
  cursor.innerHTML = "View More";
  gsap.to(cursor,{
    scale:4,
    backgroundColor:"#ffffff8a"

    // duration:0.5,
    // ease: "power4.out",
  })
})

image.addEventListener("mouseleave",function(){
  cursor.innerHTML = "";
  gsap.to(cursor,{
    scale:1,
     backgroundColor:"white"
    // duration:0.5,
    // ease: "power4.out",
  })
})