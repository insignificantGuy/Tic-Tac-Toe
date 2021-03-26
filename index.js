var i=0;
var ar=[0,0,0,0,0,0,0,0,0];

function generate(el){
	var index = Array.from(document.getElementsByClassName('box')).findIndex(x => x === el);
	if(ar[index]==0){
		if(i%2==0){
			document.getElementsByClassName('symbol')[index].innerHTML="X";
		}
		else{
			document.getElementsByClassName('symbol')[index].innerHTML="0";
		}
		ar[index]=1;
		i++;
	}
};