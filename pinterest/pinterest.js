var tl = gsap.timeline()

tl.from("#nav h2",{
    y:-100,
    opacity:0,
    delay:0.5,
    stagger:0.25
})
.from("h1",{
    x:-500,
    opacity:0,
    stagger:0.24,
    duration:0.7
})
.from("img",{
    x:800,
    opacity:0,
    stagger:0.5,
    rotate:135
})
.to("#main",{
    backgroundColor: "white",
    duration:0.5,

})
.to("h1,h2",{
    color:"#000",
    duration:0.1,
})