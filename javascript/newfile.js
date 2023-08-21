// let count = 0
// let countEl = document.getElementById("count-el")
// let saveEl = document.getElementById("save-el")
// function increment() {
//     count = count + 1
//     countEl.innerText = count
// }
// function save() {
//     let countAdd = count + " - "
//     saveEl.textContent += countAdd
//     countEl.textContent = 0
//     count = 0
// }
let myPoints = 3

function add3Points() {
    myPoints += 3
}

function remove1Point() {
    myPoints -= 1
}
add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()

console.log(myPoints)