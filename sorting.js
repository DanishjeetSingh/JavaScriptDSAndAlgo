//-----------------------------------------------------------------------------------------------
//------------------------------------- BUBBLE SORT ----------------------------------------
//-----------------------------------------------------------------------------------------------

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    let len = array.length;
    for (i = 0; i < len; i++) {
        for (j = 0; j < len; j++) {
            if(array[j] > array[j + 1]) {
                let swap = array[j];
                array[j] = array[j + 1];
                array[j + 1] = swap;
            }
        }
    }
    return array;
}

console.log(bubbleSort(numbers));

//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------
//------------------------------------- SELECTION SORT ----------------------------------------
//-----------------------------------------------------------------------------------------------

function selectionSort(array) {
  let len = array.length;
  for (i = 0; i < len; i++) {
      let min = i;
      let temp = array[i];
      for (let j = i + 1; j < len; j++) {
          if (array[j] < array[min]){
            min = j;
          }
          array[i] = array[min];
          array[min] = temp;
      }
      return array;
  }
}

console.log(selectionSort(numbers));

//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------
//------------------------------------- INSERTION SORT ----------------------------------------
//-----------------------------------------------------------------------------------------------

function insertionSort(array) {
    const len = array.length;
    for (let i = 0; i < len; i++) {
        let j = i;
        while (j > 0 && array[j] < array[j - 1]) {
            [array[j], array[j - 1]] = [array[j - 1], array[j]];
            j--; 
        }
        //console.log(array);
    }
    return array;
}

console.log(insertionSort(numbers));

//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------
//------------------------------------- MERGE SORT ----------------------------------------
//-----------------------------------------------------------------------------------------------

function mergeSort (array) {
    if (array.length < 2) {
      return array
    }
    let mid = Math.floor(array.length/2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);
    // Split Array in into right and left
  
    return merge(
      mergeSort(left),
      mergeSort(right)
    )
  }
  
  function merge(left, right){
    let sorted = [];

    while (left.length && right.length) {
        if(left[0] < right[0]){
            sorted.push(left.shift());
        }else {
            sorted.push(right.shift());
        };
        return sorted.concat(left.slice().concat(right.slice()));
    }
  }
  
  
  const answer = mergeSort(numbers);
  console.log(answer);

//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------
//------------------------------------- QUICK SORT ----------------------------------------
//-----------------------------------------------------------------------------------------------

function swap(array, left, right) {
    var temp = array[left];
    array[left] = array[right];
    array[right] = temp;
}

function partition(array, left, right) {
    var pivot = array[Math.floor((left + right) / 2)]
    i = left;
    j = right;
    
    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(array, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(array, left, right) {
    var index;
    if (array.length > 1) {
        index = partition(array, left, right);
        if (left < index - 1) {
            quickSort(array, left, index - 1);
        }
        if (right > index) {
            quickSort(array, index, right);
        }
    }
    return array;
}

console.log(quickSort(numbers, 0, numbers.length - 1));
//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------