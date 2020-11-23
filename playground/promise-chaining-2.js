require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5f92c5e18b0313d40837c145').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((results) => {
//     console.log(results)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const user = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments( { completed: false })
    return count
}

deleteTaskAndCount("5fabe2348a673aaccd855fe5").then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})