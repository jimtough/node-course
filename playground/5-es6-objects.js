
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Object property shorthand
//
const name = 'Jim'
const userAge = 69
// old verbose syntax
const user1 = {
    name: name,
    age: userAge,
    location: 'Halifax'
}
// ES6 concise syntax
const user2 = {
    // object property name and variable name must exactly match for this to work
    name,
    age: userAge,
    location: 'Dartmouth'
}
console.log(user1)
console.log(user2)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Object destructuring
//
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// This can be a lot of code if the object has a lot of properties
//const label = product.label
//const stock = product.stock

// Use 'destructuring' syntax instead
const {label, stock, rating} = product
console.log(label)
console.log(stock)
// Note that any properties that do not exist in the source object will be undefined
console.log(rating)

// Destructuring also supports renaming the source object property,
// and ability to set a default value is the source object does not have the property
const {label: productLabel, stock: numberInStock = 0, rating: productRating = 5} = product
console.log(productLabel)
console.log(numberInStock)
console.log(productRating)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

