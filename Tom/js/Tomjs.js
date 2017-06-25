var timer;
window.onload = function()
{
	document.getElementById("cymbal").onclick= function(){
	     Allanimation(13,"cymbal");
	};
	document.getElementById("drink").onclick= function(){
	     Allanimation(81,"drink");
	};
	document.getElementById("eat").onclick= function(){
         Allanimation(40,"eat");
	};
	document.getElementById("fart").onclick= function(){
	     Allanimation(28,"fart");
	};
	document.getElementById("pie").onclick= function(){
		Allanimation(24,"pie");
	};
	document.getElementById("scratch").onclick= function(){
	    Allanimation(56,"scratch");
	};
};
function Allanimation(num,name)
{
	var index=0;
		clearInterval(timer);
		var player =document.getElementById("musicId");
			player.play();
		timer=setInterval(function(){
			var cat=document.getElementById("cat");
			index++;
			if(index<num){
				if(index<10)
				{
					index="0"+index;
				}
			cat.src="Animations/"+name+"/"+name+"_"+index+".jpg"
			}
			else{
				clearInterval(timer);
			}
		},80);
}
