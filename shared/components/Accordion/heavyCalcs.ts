export function longLayoutCalculations() {
  heavyCalculation1();
}

const heavyCalculation1 = () => {
  heavyCalculation();
};

const heavyCalculation = () => {
  let a;
  for (let i of [...new Array(1000000)]) {
    a += Math.sin(i) + Math.cos(i);
  }
  return a;
};
