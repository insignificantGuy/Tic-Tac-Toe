// Variable to toggle the Player
var i=0;
//Array to Store the block number.
var arr=[-1,-1,-1,-1,-1,-1,-1,-1,-1];

//Function that generates the X or O sign in the Game
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
	var x=check(index);
	if(x==1){
		if(arr[index]==1){
			alert("Player A has Won");
		}
		else{
			alert("Player B has Won");
		}
		setInterval(()=>{},3000);
		window.location.reload();
	}
	if(x!=1&&i==9){
		alert("Match Ended in a Draw");
		setInterval(()=>{},3000);
		window.location.reload();
	}
};

// Function that Checks if any person won the game or not.
function check(x){
	var bet=0;
	if(x==0||x==1||x==2){
		if(arr[0]==arr[1]&&arr[1]==arr[2]){
			bet=1;
		}
	}
	if(x==0||x==3||x==6){
		if(arr[0]==arr[3]&&arr[3]==arr[6]){
			bet=1;
		}
	}
	if(x==0||x==4||x==8){
		if(arr[0]==arr[4]&&arr[4]==arr[8]){
			bet=1;
		}
	}
	if(x==1||x==4||x==7){
		if(arr[1]==arr[4]&&arr[4]==arr[7]){
			bet=1;
		}
	}
	if(x==2||x==5||x==8){
		if(arr[2]==arr[5]&&arr[5]==arr[8]){
			bet=1;
		}
	}
	if(x==2||x==4||x==6){
		if(arr[2]==arr[4]&&arr[4]==arr[6]){
			bet=1;
		}
	}
	if(x==3||x==4||x==5){
		if(arr[3]==arr[4]&&arr[4]==arr[5]){
			bet=1;
		}
	}
	if(x==6||x==7||x==8){
		if(arr[6]==arr[7]&&arr[7]==arr[8]){
			bet=1;
		}
	}
	return bet;
}