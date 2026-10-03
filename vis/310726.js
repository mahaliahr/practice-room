osc([1], 0.8, [0.9, 1]).color(0, 0.5, 0.9).modulate(osc(20).rotate()).modulate(noise([1, 2])).scale(()=> a.fft[1]*2).out()

gradient().kaleid(4).layer(shape([2, 4, 2]).kaleid(2).scrollY(0.1, 0.3).scrollX(0.3, 0.2).scale(()=>a.fft[0]*0.5).color(1, 0, 0)).out(o1)

src(o0).blend(o1).out(o2)

render(o2)

render(o0)


a.show()

speed = 0.3
