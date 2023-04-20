//your code here
function mincosttoformrope(a) {
	a.preventDefault();//to stop vanishing data on refreshing page 
var inputElement=document.querySelector('input').value;
var arr=inputElement.split(',');// to convert into array
	arr.sort(function(a,b) {return a-b});//a-b sort in increasing order b-a for decreeazing
	var cost=0;
	while(arr.length>1)
		{
			var res= Number(arr[0])+Number(arr[1]);
			arr.shift();
			arr.shift();//arr.splice(0,2);
			arr.push(res);
			cost+=res;
			
			arr.sort(function(a,b){return a-b});//data is being sort again and again so that i get the minimum element at front after push
			
		}
	document.getElementById("result").textContent=cost;

	
}