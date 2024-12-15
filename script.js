const sortButton = document.getElementById("sort");

const bubbleSort = (numbers) => {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[j] > numbers[j + 1]) {
        [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
      }
    }
  }
  console.log(numbers);
  return numbers;
};
const selectionSort = (numbers) => {
  for (let i = 0; i < numbers.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[minIndex] > numbers[j]) {
        minIndex = j;
      }
    }
    [numbers[i], numbers[minIndex]] = [numbers[minIndex], numbers[i]];
  }
  return numbers;
};
const insertionSort = (numbers) => {
  for (let i = 1; i < numbers.length; i++) {
    const currValue = numbers[i];
    let j = i - 1;
    while (j >= 0 && numbers[j] > currValue) {
      numbers[j + 1] = numbers[j];
      j--;
    }
    numbers[j + 1] = currValue;
  }
  return numbers;
};
const merge = (arrayFirst, arraySecond) => {
  let iFirst = 0;
  let iSecond = 0;
  const mergedArray = [];
  while (iFirst < arrayFirst.length && iSecond < arraySecond.length) {
    if (arrayFirst[iFirst] > arraySecond[iSecond]) {
      mergedArray.push(arraySecond[iSecond]);
      iSecond++;
    } else {
      mergedArray.push(arrayFirst[iFirst]);
      iFirst++;
    }
  }
  if (iFirst == arrayFirst.length) {
    const leftArray = arraySecond.slice(iSecond);
    leftArray.forEach((el) => {
      mergedArray.push(el);
    });
  } else {
    const leftArray = arrayFirst.slice(iFirst);
    leftArray.forEach((el) => {
      mergedArray.push(el);
    });
  }
  return mergedArray;
};

const mergeSort = (list) => {
  if (list.length <= 1) {
    return list;
  }
  const arrayFirst = list.slice(0, Math.floor(list.length / 2));
  const arraySecond = list.slice(Math.floor(list.length / 2));
  const sortedArrayFirst = mergeSort(arrayFirst);
  const sortedArraySecond = mergeSort(arraySecond);
  return merge(sortedArrayFirst, sortedArraySecond);
};

sortButton.addEventListener("click", () => {
  const numbers = [...document.querySelectorAll(".selector-for-tens")].map(
    (el) => Number(el.value)
  );
  //    numbers.sort((a,b)=> a-b)

  mergeSort(numbers).forEach((el, index) => {
    document.getElementById(`span-${index}`).textContent = el;
  });
});
