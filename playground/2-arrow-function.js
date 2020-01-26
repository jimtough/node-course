// Standard function declaration syntax
// const square = function (x) {
//     return x * x
// }

// Arrow function syntax (long form)
// const square = (x) => {
//     return x * x
// }

// Arrow function syntax (short form)
// The short form can only be used when the function body is a single statement.
// The result of the single statement is returned.
const square = (x) => x * x

console.log(square(2))

//------------------------------------------------

const event = {
    name: 'Birthday Party',
    guestList : ['Andrew', 'Jen', 'Mike'],
    // printGuestList: function () {
    //     console.log('Guest list for ' + this.name)
    // }
    // NOT AN ARROW FUNCTION!
    // This is ES6 alternate syntax for a class method
    printGuestList() {
        console.log('Guest list for ' + this.name)
        // The arrow function passed to 'forEach' inherits its
        // 'this' value from the context in which it is created
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    } 
}

event.printGuestList()
