function findInArray(n,arr){
	for (var i=0; i<arr.length; i++) {
		if(arr[i] == n){
			return true;
		}
	}
	return false;
}

function setStyle(){
	if(arguments.length == 3){
		arguments[0].style[arguments[1]] = arguments[2];
	}else if(arguments.length == 2){
		for(var name in arguments[1]){
			arguments[0].style[name] = arguments[1][name];
		}
	}else{
		alert('请输入正确的参数');
	}
}

function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}

function findMinIndex(arr,index){ //返回数组中从index算起最小值的索引值
	var min = arr[index];
	var ind = index;
	for (var i=index; i<arr.length; i++) {
		if(arr[i]<min){
			min = arr[i];
			ind = i;
		}
	}
	return ind;
}

function rnd(m,n){
	return parseInt(Math.random()*(n-m+1)+m);
}

function toDou(n){
	return n<10?'0'+n:''+n;
}
//通过class获取元素
function getByClass(obj,classname){
	if(obj.getElementsByClassName){
		return obj.getElementsByClassName(classname);
	}else{
		var aEl = obj.getElementsByTagName('*');
		var newArr = [];
		for (var i=0; i<aEl.length; i++) {
			var arr = aEl[i].className.split(' ');
			for (var j=0; j<arr.length; j++) {
				if(arr[j] == classname){
					newArr.push(aEl[i]);
				}
			}
		}
		return newArr;
	}
}
//添加事件
function addEvent(obj,eventname,fn){
	if(obj.addEventListener){
		obj.addEventListener(eventname,fn,false);
	}else{
		obj.attachEvent('on'+eventname,function(){
			fn.call(obj);
		});
	}
}
//解绑事件
function removeEvent(obj,eventname,fn){
	if(obj.removeEventListener){
		obj.removeEventListener(eventname,fn,false);
	}else{
		obj.detachEvent('on'+eventname,fn);
	}
}
//碰撞函数
function testColl(obj1,obj2){
	var l1 = obj1.offsetLeft;
	var r1 = l1 + obj1.offsetWidth;
	var t1 = obj1.offsetTop;
	var b1 = t1 + obj1.offsetHeight;
	var l2 = obj2.offsetLeft;
	var r2 = l2 + obj2.offsetWidth;
	var t2 = obj2.offsetTop;
	var b2 = t2 + obj2.offsetHeight;
	
	if(l1>r2 || r1<l2 || t1>b2 || b1<t2){
		return false;
	}else{
		return true;
	}
}
//获取2个块元素的中心点间的距离
function getDis(obj1,obj2){
	var a = obj2.offsetLeft - obj1.offsetLeft;
	var b = obj2.offsetTop - obj1.offsetTop;
	return Math.sqrt(a*a+b*b);
}
//将aA中index最大的那个排除，其他的都放到一个新数组中，这么做是因为，新添加的a标签在aA中肯定排在后面，为了一直能选中带加号的a，就一直让它的index是最大的
function getArrayByIndex(aA){
	var arr = [];
	for(var i=0; i<aA.length; i++){
		if(aA[i].index != aA.length-1){
			arr.push(aA[i]);
		}
	}
	return arr;
}
//查看obj的是否包含classname的类
function findHasClass(obj,classname){
	var arr = obj.className.split(' ');
	for (var i=0; i<arr.length; i++) {
		if(arr[i] == classname){
			return true;
		}
	}
	return false;
}













