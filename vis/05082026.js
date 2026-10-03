
osc(20, 0.1, 0.9).color(0, 0, 0.9).modulate(noise([2, 3, 5])).modulate(osc([5, 20, 50]).rotate([30, 60, 40])).out(o0)



src(o0).layer(noise(2)).modulateScale(o1, 0.5).out(o1)


src(o1).diff(o0).color(0.7,0,0.9).out(o2)


src(o2).out(o3)



render()
