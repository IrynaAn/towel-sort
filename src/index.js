
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let resArr = [];
  if (matrix===undefined) {return []}
  else {matrix.map((item,i)=> { i%2===1 ? resArr.push(item.reverse()) : resArr.push(item)}) }
  return resArr.flat();
}
