/* eslint-disable no-restricted-globals */
function myLongTask() {
  heavyCalculation1();
  heavyCalculation2();
  heavyCalculation3();
  heavyCalculation4();
}

const heavyCalculation1 = () => {
  heavyCalculation();
};
const heavyCalculation2 = () => {
  heavyCalculation();
};
const heavyCalculation3 = () => {
  heavyCalculation();
};

const heavyCalculation4 = () => {
  heavyCalculation();
};

const heavyCalculation = () => {
  let a;
  for (let i of [...new Array(1000000)]) {
    a += Math.sin(i) + Math.cos(i);
  }
  return a;
};

self.onmessage = function (event) {
  const data = event;
  
  if (data.doWork) {
    myLongTask();
  }

  self.postMessage({ success: true });
};
