
// You should implement your task here.

module.exports = function towelSort (matrix) {
	let arr=[];
	if(matrix){
		for(let i=0;i<matrix.length;i++){
			if(i%2==0){
				arr.push(matrix[i]);
			}
			else{
				arr.push(matrix[i].reverse());
			}
		}
		let newArr =[];
		for(let i=0;i<arr.length;i++){
			for(let j=0;j<=arr.length;j++){
				newArr.push(Number(arr[i][j]));
			}
		}
		let filtered = newArr.filter(function(el) { return el; });
		return filtered;
	}
	else{
		return arr;
	}
}