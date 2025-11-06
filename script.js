
let tl =gsap.timeline()
tl.from(".front",{
    y:1000,
    duration:1,
})
tl.from("#coffee",{
    y:800,
    duration:1,
    scale:2
})
tl.from(".front h1",{
    y:1000,
    duration:1,
})
tl.from("#coffeeb1",{
    y:800,
    duration:1,
    scale:1
})
tl.from("#coffeeb2",{
    y:800,
    duration:1,
    scale:1
})
tl.from("#coffeeb3",{
    y:800,
    duration:1,
    scale:1
})
tl.from("#coffeeb4",{
    y:800,
    duration:1,
    scale:1
})
tl.from("#coffeeb5",{
    y:800,
    duration:1,
    scale:1
})

let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        scrub:2,
        // markers:true,
        start:"0% 90%",
        end:"50% 50%"
    }
})

tl2.to("#coffee",{
    top:855,
    left:9,
    scale:0.8,
},"hi")
tl2.to("#coffeeb1",{
  left:188,
  top:825,
  scale:0.8,
  rotate:142
},"hi")

let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#menu",
        scroller:"body",
        scrub:2,
        // markers:true,
        start:"0% 90%",
        end:"50% 50%"
    }
})
tl3.to("#coffee",{
    top:1500,
    left:517,
    scale:0.8,
    duration:1
},"hi")
tl3.to("#coffeeb1",{
  left:777,
  top:1502,
  scale:0.9,
  rotate:221,
  duration:1,

},"hi")
tl3.from("#image1",{
    x:-300,
    duration:1
},"hi")
tl3.from("#image2",{
    x:300,
    duration:1
},"hi")
tl3.from("#bean1",{
    x:-300,
    duration:1,
    rotate:200

},"hi")
tl3.from("#bean2",{
    x:300,
    duration:1,
    rotate:200,

},"hi")


let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:"#contact",
        scroller:"body",
        scrub:2,
        // markers:true,
        start:"0% 90%",
        end:"50% 50%"
    }
})
tl4.to("#coffee",{
    top:2275,
    left:750,
    duration:1,
    zIndex:3,
},"hi")
tl4.to("#coffeeb1",{
  left:980,
  top:2283,
  rotate:-20,
  zIndex:2,
  duration:1
},"hi")
tl4.to("#image1",{
    left:515,
    top:651,
    duration:1,
    rotate:-20

},"hi")
tl4.to("#image2",{
    left:92,
    top:540,
    duration:1,
    rotate:20
},"hi")





