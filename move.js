function getStyle(obj,attr){
	return (obj.currentStyle || getComputedStyle(obj,false))[attr];
}
//同时运动的代码
function startMove(obj,json,optional){ //attr变成json，那里面的值都要变成json,attr和iTarget合并成json
	
	//运动的时间和回调函数都是可选的参数，所以将它们作为一个json传入{duration:--,complete:--}
	optional = optional || {}; //当这个optional的json如果不穿，函数里会建立
	optional.duration = optional.duration || 500; //没有设定duration时，会将它默认设置成500毫秒
	optional.complete = optional.complete || null; //如果没有回调函数，就将它设置为空对象null
	optional.easing = optional.easing || 'ease-out'; //默认是减速运动
	clearInterval(obj.timer);
	var start = {};
	var dis = {};
	for (var key in json){
		start[key] = parseFloat(getStyle(obj,key));
		if(isNaN(start[key])){
			switch (key){
				case 'width':
				start[key] = obj.offsetWidth;
					break;
				case 'height':
				start[key] = obj.offsetHeight;
					break;
				case 'opacity':
				start[key] = 1;
					break;
				case 'left':
				start[key] = 0;
					break;
				case 'top':
				start[key] = 0;
					break;
				//marginLeft/top...	padding
			}
		}
		dis[key] = json[key] - start[key];
	}
	var n = 0;
	var count = Math.round( optional.duration /30);
	obj.timer = setInterval(function(){
		n++;
		for(var key in json){	
			switch(optional.easing){
				case 'linear':
				var iCur = start[key] + n/count*dis[key];
					break;
				case 'ease-in':
				var a = n/count;
				var iCur = start[key] + Math.pow(a,5)*dis[key]; //加速运动
					break;
				case 'ease-out':
				var a = 1 - n/count;
				var iCur = start[key] + (1-Math.pow(a,5))*dis[key]; //减速运动
					break;
			}
			if(key == 'opacity'){
				obj.style.opacity = iCur;
				obj.style.filter = 'alpha(opacity:'+ iCur*100 +')';
			}else{
				obj.style[key] = iCur + 'px';
			}
		}
		if(n == count){
			clearInterval(obj.timer);
			optional.complete && optional.complete();
		}
	},30);
}
function startMove2(obj,json,optional){
	optional = optional || {};
	optional.duration = optional.duration || 500;
	optional.complete = optional.complete || null;
	optional.easing = optional.easing || 'ease-out';
	
	var start = {};
	var dis = {};
	
	for (var key in json) {
		start[key] = parseFloat(getStyle(obj,key));
		if(isNaN(start[key])){
			switch (key){
				case 'height':
				start[key] = obj.offsetHeight;
				break;
				case 'width':
				start[key] = obj.offsetWidth;
				break;
				case 'top':
				start[key] = 0;
				break;
				case 'opacity':
				start[key] = 1;
				break;
			}
		}
		dis[key] = json[key] - start[key];
	}
	var n = 0;
	var count = Math.round(optional.duration/30);
	
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		n++;
		for(var key in json){
			switch (optional.easing){
				case 'linear':
				var iCur = start[key] + n/count*dis[key];
					break;
				case 'ease-in':
				var a = n/count;
				iCur = start[key] + Math.pow(a,5)*dis[key];
					break;
				case 'ease-out':
				var a = 1-n/count;
				iCur = start[key] + (1 - Math.pow(a,5))*dis[key];
					break;
			}
			
			if(key == 'opacity'){
				obj.style.opacity = iCur;
				obj.style.filter = 'alpha(opacity:'+ iCur*100 +')';
			}else{
				obj.style[key] = iCur + 'px';
			}
			if(n == count){
				clearInterval(obj.timer);
				optional.complete && optional.complete();
			}
		}
	},30);
}

function startMove3(obj,json,optional){
	optional = optional || {};
	optional.duration = optional.duration || 500;
	optional.complete = optional.complete || null;
	optional.easing = optional.easing || 'ease-out';
	
	var start = {};
	var dis = {};
	
	for(var key in json){
		start[key] = parseFloat(getStyle(obj,key));
		if (isNaN(start[key])){
			switch (key){
				case 'opacity':
				start[key] = 1;
					break;
				case 'top':
				start[key] = 0;
					break;
				case 'left':
				start[key] = 0;
					break;
			}
		}
		dis[key] = json[key] - start[key];
	}
	var n = 0;
	var count = Math.round(optional.duration / 30);
	
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		n++;
		switch (optional.easing){
			case 'linear':
			var iCur = start[key] + n/count*dis[key];
				break;
			case 'ease-in':
			var a = n/count;
			var iCur = start[key] + a*a*a*dis[key];
				break;
			case 'ease-out':
			var iCur = n/count*dis[key];
				break;
		}
	},30);
}































































