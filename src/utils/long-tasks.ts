const scheduler = (window as any).scheduler;

export function myLongTask() {
    // priority: "user-blocking", "user-visible", "background".
    scheduler.postTask(heavyCalculation1, { priority: 'background' })
    scheduler.postTask(heavyCalculation2, { priority: 'background' })
    scheduler.postTask(heavyCalculation3, { priority: 'background' })
    scheduler.postTask(heavyCalculation4, { priority: 'background' })
}

const heavyCalculation1 = () => {
    heavyCalculation()
}
const heavyCalculation2 = () => {
    heavyCalculation()
}
const heavyCalculation3 = () => {
    heavyCalculation()
}

const heavyCalculation4 = () => {
    heavyCalculation()
}

const heavyCalculation = () => {
    let a
    for (let i of [...new Array(1000000)]) {
        a += Math.sin(i) + Math.cos(i)
    }
    return a
}
