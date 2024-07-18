var initialPath = `M 10 250 Q 760 250 1570 250`


var finalPath = `M 10 250 Q 760 250 1570 250`

var string = document.querySelector("#string")



string.addEventListener("mousemove", function(dets){
  path = `M 10 250 Q ${dets.x} ${dets.y} 1570 250`
  gsap.to("svg path",{
    attr:{
      d:path
    },
    duration:0.2,
    ease:"power3.out"
  })
})

string.addEventListener("mouseleave",function(dets){
  gsap.to("svg path",{
    attr:{
      d:finalPath
    },
    duration:1.5,
    ease:"elastic.out(1,0.2"
  })
})






















































// gsap.to("#page2 h1",{
//   transform:"translateX(-190%)",
//   scrollTrigger:{
//     trigger:"#page2 h1",
//     scroller:"body",
//     markers:true,
//     start:"top 50%",
//     start:"top 0%",
//     end:"top -100%",
//     scrub:2,
//     pin:true,
//   }

// })















































// gsap.from("#page2 #box",{
//   scale:0,
//   opacity:0,
//   duration:1,
//   rotate:720,
//   scrollTrigger:{
//     trigger:"#page2 #box",
//     scroller:"body",
//     markers:true,
//     start:"top 60%",
//     end:"top 30%",
//     scrub:2,


//   }
// })







































// gsap.from("#page2 h1",{
//   opacity:0,
//   duration:2,
//   x:500,
//   scrollTrigger:{
//     trigger:"#page2 h1",
//     scroller:"body",
//     markers:true,
//     start:"top 50%"
//   }
// })
// gsap.from("#page2 h2",{
//   opacity:0,
//   duration:2,
//   x:-500,
//   scrollTrigger:{
//     trigger:"#page2 h2",
//     scroller:"body",
//     markers:true,
//     start:"top 50%"
//   }
// })














































// gsap.from("#page1 #box",{
//   scale:0,
//   delay:1,
//   duration:2,
//   rotate:360,

// })
// gsap.from("#page2 #box",{
//   scale:0,
//   delay:1,
//   duration:2,
//   rotate:360,
//   // scrollTrigger:"#page2 #box"
//   scrollTrigger:{
//     trigger:"#page2 #box",
//     scroller:"body",
//     markers:true,
//     start:"top 60%",

//   }

// })

// gsap.from("#page3 #box",{
//   scale:0,
//   delay:1,
//   duration:2,
//   rotate:360,
//   scrollTrigger:"#page3 #box"

// })




































// var a= 12;

// module.exports = a;

// var a = 12;
// var b = 12344555;

// module.exports = { first:a,second: b };