// program to print
// next greater elements in a given array

function nextGreater(arr, n) {
  var next, i, j;
  for (i = 0; i < n; i++) {
    next = -1;
    for (j = i + 1; j < n; j++) {
      if (arr[i] < arr[j]) {
        next = arr[j];
        break;
      }
    }
    document.write(arr[i] + " => " + next);
    document.write("<br>");
  }
}

var arr = [9, 14, 22, 2];
var n = arr.length;
nextGreater(arr, n);
