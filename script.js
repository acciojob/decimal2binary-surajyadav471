function threeSum(arr, target) {
// write your code here
	let target=[];
  for(let a = 0;a<arr.length;a++){
	  target.push(arr[a].toString(2));
  }
	return target;
}

module.exports = threeSum;