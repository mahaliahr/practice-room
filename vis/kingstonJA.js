s1.initVideo("/Users/mhenryrichards/Downloads/20250711_123257.mp4");

// screenRatio = () => innerHeight/innerWidth

s2.initVideo("/Users/mhenryrichards/Downloads/20250711_123318.mp4");

a.start()


a.setBins(5)
a.show()

setResolution(600, 600)

osc(2,0.2,9).modulate(noise()).modulate(shape(10).color(10,0,0).repeat(4,4).scale(() => a.fft[1]+2)).out()

src(s1)
  .scale(0.8)
  .scrollX(0, 0.03).diff(osc(20).luma(0.01,7)
).mult(o0)
.out(o1)

src(s2).rotate().out(o2)

render()
