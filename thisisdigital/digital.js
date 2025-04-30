var tl = gsap.timeline()

tl.from("#nav h1",{
    y:-100,
    opacity:0,
    delay:0.5,
    stagger:0.25
})
// .from("#nav2 h1",{
//     x:-800,
//     opacity:0,
//     delay:0.5,
//     stagger:0.25,    
// })
.from("#main h2 ,p",{
    opacity:0,
    delay:0.5,
    stagger:0.25
})
.from("img",{
    x:800,
    opacity:0,
    stagger:0.2,
    rotate:45
    
})
.to("h1,h2",{
    
    duration:0.1,
})
.from("#main3",{
    x:-100,
    opacity:0,
    delay:0,
})
// .from("#main2",{
//     opacity:0,
//     delay:0.5,
//     duration:0.25,
// })
gsap.from("#main2" ,"#brands",{
    scale:0,
    duration:1,
    delay:1,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
        trigger:"#main2",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:3
    }
})