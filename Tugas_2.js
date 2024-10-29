const arr = [1, 1, 1, 2, 2, 2, 3, 4, 4, 4, 5, 5, 5, 6];

const uniqueElements = arr.filter((element, index) => {
    return arr.indexOf(element) === index && arr.lastIndexOf(element) === index;
  });
  
  console.log(uniqueElements);
  