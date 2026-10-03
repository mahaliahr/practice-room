
a.show()
a.setScale(10)



a.setSmooth(.4)
a.setBins(6)
a.setCutoff(3)


speed = 1.5


osc(1,0.05,0.9).modulate(gradient().hue(0.9).scrollX(0.03, 0.03).modulate(o0))
.scale(10).out(o0)




osc(5, .01, 1).scale(()=>a.fft[3]*5)
.color(0,0.5,10)
// .hue(0.1)
.luma(0.95).modulate(osc(()=>a.fft[0]*30,0).rotate(90))
.scale(()=>a.fft[3]+1.5)
.diff(src(o1)) // later remove
.mult(o1) // remove
.out(o1)

render(o1)




src(o1)
// src(o0)
.layer(src(o1).kaleid([2, 3, 4]).luma(0.3).scale([1, 3, 5]))
// .repeat(2,2)
.blend(o0).out(o2)

// transition viz
src(o1).blend(src(o2)).out(o3)



render(o3)


// outro viz

// src(o1)
src(o0)
.layer(src(o1).kaleid([2, 3, 4]).luma(0.3).scale([1, 3, 5]))
// .repeat(2,2)
.blend(o0).out(o2)

render(o2)
