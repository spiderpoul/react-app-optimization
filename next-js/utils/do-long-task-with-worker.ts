export const doLongTaskWithWorker = () => {
    const workerUrl = new URL('./web-worker.js', import.meta.url)
    const worker = new Worker(workerUrl);

    worker.postMessage({ doWork: true })

    return new Promise((resolve) => {
        worker.onmessage = (event => {
            worker.terminate()
            resolve(event.data)
        })
    })
}