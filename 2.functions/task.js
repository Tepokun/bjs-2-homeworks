function getArrayParams(...arr) {
  let min = Infiniti;
  let max = -Infinity;
  let sum = 0;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];

    }

    if (arr[i] < min) {
      min = arr[i];

    }
    
    sum += arr[i];
  }

  let avg = (sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}


  //Напишите функцию summElementsWorker, которая должна находить сумму элементов массива и возвращать её. 
  //Суммирование элементов можно реализовать аналогично первому заданию c помощью цикла или метода reduce.

function summElementsWorker(...arr) {

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

  // Напишите функцию `differenceMaxMinWorker` для вычисления разницы максимального и минимального элементов.
  //   C помощью цикла или методов `Math.max` и `Math.min` найдите максимальное и минимальное значения.
  //   Возвращайте разницу этих значений.

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = - Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max - min;
}

//Напишите функцию `differenceEvenOddWorker` вычисления разницы сумм чётных и нечётных элементов.
//  * Объявите две переменные, например, `sumEvenElement` и `sumOddElement`, в которых будут накапливаться чётные и нечётные элементы. 
//  Инициализируйте эти переменные начальными значениями — нулями.
//  * Реализуйте цикл для перебора всех элементов массива.
//  * При переборе каждый элемент проверяйте с помощью конструкции `if / else`.
//  * Если элемент чётный, то увеличивайте одну переменную (`sumEvenElement`), а если нечётный, то другую (`sumOddElement`).
//  * После выполнения цикла выполняйте возвращение разницы двух элементов.

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if(Math.abs(arr[i]) % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
