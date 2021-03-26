var i=0;
var arr=[-1,-1,-1,-1,-1,-1,-1,-1,-1];

function generate(el){
	var index = Array.from(document.getElementsByClassName('box')).findIndex(x => x === el);
	if(arr[index]==-1){
		if(i%2==0){
			document.getElementsByClassName('symbol')[index].innerHTML="X";
			arr[index]=1;
		}
		else{
			document.getElementsByClassName('symbol')[index].innerHTML="0";
			arr[index]=0;
		}
		i++;
	}
	check(index);
};

function check(x){
	var victory=""+arr[x]+arr[x]+arr[x];
	
}