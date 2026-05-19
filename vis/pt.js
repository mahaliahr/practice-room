osc(5).color(0,1,5).out(o0)

await loadScript("https://cdn.jsdelivr.net/npm/p5.glitch@latest/p5.glitch.js") //loads p5glitch library in Hydra

//generate a variable for glitch
let glitch;

p = new P5() //load p5 in Hydra
glitch = new Glitch(p); //loads glitch lib. It's important to link p5's variable here (p).
//load any URL's image here
p.loadImage('https://upload.wikimedia.org/wikipedia/commons/1/1b/Triangulo_HSV.png', function(im) {
glitch.loadImage(im);
});

//this should be load before p5's draw function
glitch.loadType('jpg'); //define type of glitch file
glitch.loadQuality(0.1); //define glitch quality
p.imageMode(p.CENTER);

p.draw = () => {
	p.clear();
	glitch.resetBytes();
	glitch.replaceBytes(100, 104);
	glitch.randomBytes(100);
	glitch.limitBytes(0.1);
	glitch.buildImage();
	p.image(glitch.image, p.width/2,p.height/2)
}
//hide p5's canvas
p.hide();

//load p5 source to use it in Hydra
s0.init({src: p.canvas})

osc(10).layer(src(s0).modulate(noise(2))).out()
