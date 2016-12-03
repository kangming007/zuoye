function Animate(name,type){
	this.name=name;
	this.type=type;
}
Animate.prototype.say=function(){
	alert("我是"+this.name)
}
Animate.prototype.do=function(){
	
}
var cat=new Animate("kitty","猫")
var dog=new Animate("gou","狗")