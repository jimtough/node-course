
// first arg is the node executable
console.log(process.argv[0])
// second arg is the .js file that was the entry point
console.log(process.argv[1])
// this will be the first user-supplied command line parameter,
// or undefined if there are none
console.log(process.argv[2])

// We could also use a forEach() to output the array contents
process.argv.forEach((element, index)=>{
    console.log('argv[' + index + '] = ' + element)
})
