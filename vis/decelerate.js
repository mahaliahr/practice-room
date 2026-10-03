osc([5, 10, 15], 0.2, 0.9)
.color(10, [0, 5, 10].smooth(), 0).hue(0.4)
.modulate(noise([1, 2.5, 4, 5].smooth())).rotate(Math.PI/180*45, 0.05).scale(5)
  .modulate(src(o1), 1)
  .layer(src(o1)
    .luma([0.4, 0.7])
  )
  .out(o0)



noise([1.5, 2, 10, 25]).color([200, 180, 150, 100],[0, 2, 5, 10],0).hue(0.5).pixelate([10, 50, 100], ()=>a.fft[1]+2, ()=>a.fft[1]+1).scale(0.5)
.scrollX(0.2, 0.3)
.scrollY(0.2, 0.2)
// .diff(o3)
.out(o1)


src(o0).mask(src(o1).layer(src(o1))
.luma(0.9, 0.9).invert()).out(o2)

src(o1)
.layer(
  osc(20, 1, 0.8)
  // src(o0)
  .hue(0.7)
  .mask(o1).invert()).diff(o1).modulate(noise(2))
  .out(o3)

speed = 0.2



render(o3)

a.show()
