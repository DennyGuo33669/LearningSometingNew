// 数组分割算法挑战
//    编写一个函数,把一个数组arr按照指定的数组大小size分割成若干个数组块。

// 例如:chunk([1,2,3,4],2)=[[1,2],[3,4]];

// chunk([1,2,3,4,5],2)=[[1,2],[3,4],[5]];

// *****************************************

// chunk(["a", "b", "c", "d"], 2) 应该返回 [["a", "b"], ["c", "d"]].
// chunk([0, 1, 2, 3, 4, 5], 3) 应该返回 [[0, 1, 2], [3, 4, 5]].
// chunk([0, 1, 2, 3, 4, 5], 2) 应该返回 [[0, 1], [2, 3], [4, 5]].
// chunk([0, 1, 2, 3, 4, 5], 4) 应该返回 [[0, 1, 2, 3], [4, 5]].
// chunk([0, 1, 2, 3, 4, 5, 6], 3) 应该返回 [[0, 1, 2], [3, 4, 5], [6]].
// chunk([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) 应该返回 [[0, 1, 2, 3], [4, 5, 6, 7], [8]].

function chunk (arr, size) {
  // Break it up.
  // for(var i = 0 ; i<2)
  var newArr = []

  for (var i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size))
  }

  return newArr
}

console.log(chunk([1, 2, 3, 4], 2))
