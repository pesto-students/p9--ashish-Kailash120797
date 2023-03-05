//program to sort an array of 0, 1 and 2

// Sort the input array, the array is assumed to
// have values in {0, 1, 2}
function sort012(a, arr_size) {
  let low = 0;
  let high = arr_size - 1;
  let mid = 0;
  let temp = 0;
  // Iterate till all the elements
  // are sorted
  while (mid <= high) {
    // If the element is 0
    if (a[mid] == 0) {
      temp = a[low];
      a[low] = a[mid];
      a[mid] = temp;
      low++;
      mid++;
    }
    // If the element is 1
    else if (a[mid] == 1) {
      mid++;
    }
    // If the element is 2
    else {
      temp = a[mid];
      a[mid] = a[high];
      a[high] = temp;
      high--;
    }
  }
}

/* function to print array arr[] */
function printArray(arr, arr_size) {
  let i;
  for (i = 0; i < arr_size; i++) {
    document.write(arr[i] + " ");
  }
  document.write("<br>");
}

let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 1];

let arr_size = arr.length;
sort012(arr, arr_size);
printArray(arr, arr_size);

document.write("<br> Time complexity: O(n)");
document.write("<br> Space complexity: O(1)");
