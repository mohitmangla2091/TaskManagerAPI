require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5f92c535d124d8d3eb41171b' , { age: 2}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 2})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments( { age })
    return count
}

updateAgeAndCount("5f92c535d124d8d3eb41171b", 4).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})