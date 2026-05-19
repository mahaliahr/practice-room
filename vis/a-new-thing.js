osc(2,0.2,9).modulate(noise()).modulate(shape([2]).color(10,0,0).repeat([2],[2]).scale(() => a.fft[2]*2)).out()

src(o1)
 .scale(0.8)
  .scrollX(0, 0.3).diff(osc(5, 10).luma(0.01,7)).diff(osc(4, 2, 0.6))
.out(o1)

src(o1).rotate().mult(o0).modulateScale(o1).scale([.5]).out(o2)

render()
