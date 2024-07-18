function breakTheText(){


var h1 = document.querySelector("h1")
var h1Text = h1.textContent

var splittedText = h1Text.split("")
var halfValue = Math.floor(splittedText.length/2)
var clutter = ""

splittedText.forEach(function(elem,idx){
if(idx<halfValue){
clutter += `<span class = "firstHalf">${elem}</span>`
}else{
clutter += `<span class = "secondHalf">${elem}</span>`
}




})

h1.innerHTML = clutter

}

breakTheText()


gsap.from("h1 .firstHalf ",{
  y:80,
  opacity:0,
  duration:.6,
  delay:.5,
  stagger:-.15,

})

gsap.from("h1 .secondHalf ",{
  y:80,
  opacity:0,
  duration:.6,
  delay:.5,
  stagger:.15,

})