console.log('Starting')

// Commonly used asynchronous function: setTimeout()
// Executes the function provided after X milliseconds have elapsed
setTimeout(()=> {
    console.log('2 second timer')
}, 2000)

setTimeout(()=>{
    console.log('0 second timer')
}, 0)

console.log('Stopping')
