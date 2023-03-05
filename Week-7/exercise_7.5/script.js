// program for "pair with given difference"

// The function assumes that the array is sorted
function findPair(arr, size, n) {
  let i = 0;
  let j = 1;

  while (i < size && j < size) {
    if (i != j && arr[j] - arr[i] == n) {
      document.write("Pair Found: (" + arr[i] + ", " + arr[j] + ")");
      return true;
    } else if (arr[j] - arr[i] < n) j++;
    else i++;
  }

  document.write("No such pair");
  return false;
}

let arr = [1, 8, 30, 40, 100];
let size = arr.length;
let n = 70;
findPair(arr, size, n);
