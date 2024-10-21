const someCalculations = () => {
  let a;
  for (let i of [...new Array(1000000)]) {
    a += Math.sin(i) + Math.cos(i);
  }
  return a;
}

export function myLayoutCalculations() {
  someCalculations()
}

export const myRenderCalculation = () => {
  someCalculations()
}