s0.initImage("/Users/mhenryrichards/Downloads/eclipse/2013_0424_23114700.jpg")

s1.initImage("/Users/mhenryrichards/Downloads/eclipse/2013_0424_23150500.jpg")


speed = 0.1

// src(s0).blend(src(s1).pixelate(1000, [10, 1, 20]).luma([0.2, 0.4, 0.8])).diff(src(s2).scale(2, 2).scrollY(0.5))
// .layer(src(s0).mask(src(o1).scale(1.5))).out(o0)
//
//
// src(s2).scale(2,2).scrollX(0.1).scrollY(-0.2).luma(0.6).invert(0).thresh(0.2).out(o1)
//
// shape(100, 0.9).scrollX(0.1, 0.1).repeat( 8, 8).scale(2).luma([0, 0.2, 0]).diff(src(o2).scale(1)).diff(s1).out(o2)



render(o2)


src(s0).pixelate(1000, [10, 1, 20]).diff(src(s2).scale(2, 2).scrollY(0.5)).layer(src(s0).mask(src(o1).scale(1.5))).out(o0)


src(s2).scale(2,2).scrollX(0.1).scrollY(-0.2).luma(0.6).invert(0).thresh([0.7,0.8,0].smooth(3)).rotate(() => time%360*0.03).out(o1)

// src(s0).modulate(shape(100, 0.9).scrollX(0.1, 0.1).repeat( 8, 8).scale(20)).scrollX(0.1, 0.02).repeat( 8, 8).scale(2).luma([0, 0.2, 0]).mult(src


src(s1).scale(2)
  .modulateHue(src(s1).scale(1.01),10)
  .layer(src(s1).mask(src(o2))).modulate(shape(100, 0.9).scrollX(0.1, 0.1).repeat( 8, 8).scale(0.2)).scrollX(0.1, 0.001).scale(2).luma([0, 0.2, 0.9].smooth()).diff(src(o2).pixelate()).diff(s1).blend(o2).out(o2)
