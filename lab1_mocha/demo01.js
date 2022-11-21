function x1() {
    return "Hi"
}
async function x2() {
    return "Hi v2"
}
const p = x1()
console.log(p)
const q = x2()
console.log(q)
q.then((result) => console.log("非同步等完是:", result))

module.exports = {
    x3: function () {
        return 500
    }
}


// const z = x3()
// console.log( z )