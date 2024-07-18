window.addEventListener("wheel", function(dets){
  if(dets.deltaY>0){

    gsap.to(".marque",{
      transform:'translateX(-200%)',
      // delay:1,
      duration:4,
      repeat:-1,
      ease:"none",

    })
    gsap.to(".marque img",{
      rotate:180
    })

  }else{


    gsap.to(".marque",{
      transform:'translateX(0%)',
      // delay:1,
      duration:4,
      repeat:-1,
      ease:"none",


    })

    gsap.to(".marque img",{
      rotate:0,
      duration:1,

    })
  }

})

