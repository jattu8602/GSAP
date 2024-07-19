function page1Animation() {
  // gsap.from("nav h1",{
  //   y:-30,
  //   opacity:0,
  //   delay:1,
  //   duration:1,

  // })
  // gsap.from("nav h4 ,nav button , nav i",{
  //   y:-30,
  //   opacity:0,
  //   delay:1,
  //   duration:1,

  // })

  var tl = gsap.timeline()
  tl.from(' nav i, nav h1 ,nav h4, nav button ', {
    y: -40,
    duration: 0.8,
    opacity: 0,
    delay: 1,
    stagger: 0.15,
  })

  tl.from(
    '.center-part1 h1 ',
    {
      x: -300,
      opacity: 0,
      duration: 0.5,
    },
    '-=0.3'
  )
  tl.from(' .center-part1 p', {
    x: -100,
    opacity: 0,
    duration: 0.4,
  })
  tl.from(' .center-part1 button', {
    x: -100,
    opacity: 0,
    duration: 0.4,
  })
  tl.from(
    ' .center-part2 img',
    {
      x: 200,
      opacity: 0,
      duration: 0.5,
    },
    '-=0.7'
  )

  tl.from('.section1bottom img', {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.6,
  })
}

function page2Animation() {
  // gsap.from(".services h3",{
  //   x:-100,
  //   opacity:0,
  //   duration:.5,
  //   scrollTrigger:{
  //     trigger:".services h3",
  //     scroller:"body",
  //     markers:true,
  //     start:"top 50%"

  //   }

  // })

  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.section2',
      scroller: 'body',
      // markers: true,
      start: 'top 50%',
      end: 'top 0%',
      // pin:true,
      scrub: 2,
    },
  })
  tl2.from('.services', {
    y: 30,

    opacity: 0,
    duration: 0.5,
  })
  tl2.from(
    '.elem.left1',
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    'jatin'
  )
  tl2.from(
    '.elem.left2',
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    'cha'
  )
  tl2.from(
    '.elem.right1',
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    'jatin'
  )
  tl2.from(
    '.elem.right2',
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    'cha'
  )
}

page1Animation()
page2Animation()
