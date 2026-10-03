noise()
.color(() => a.fft[2]*2,0,.6)
.modulate(noise(() => a.fft[0]*10))
.scale(()=> a.fft[2]*5)
.layer(
  src(o0)
  .mask(osc(10).modulateRotate(osc(),90,0))
  .scale(() => a.fft[0]*2)
  .luma(0.2,0.3)
)
.blend(o0)
.out(o0)

osc([15, 30, 5])
.modulate(noise(() => a.fft[1]+5))
.color(0.8,0.2,0.5)
.out(o1)

src(o0)
.modulate(o1)
.layer(
  src(o1)
  .mask(o1)
  // .saturate(7)
)
.modulateRotate(o1)
.rotate(({time}) => time%360*0.05)
// .modulatePixelate(o2)
.out(o2)

speed = 0.1

render(o2)

a.show()
