const assert = require("chai").assert;
const numbers = [1, 2, 3, 4, 5];
describe("陣列的操作", () => {
    it("檢視了型態", () => {
        assert.isArray(numbers, "numbers應該是array的型態")
    })
    it("檢查包含了某一個元素", () => {
        assert.include(numbers, 2, "array應該包含2")
    })

    it("檢查沒有包含了某一個元素", () => {
        assert.include(numbers, 12, "array應該沒有包含12")
    })

    it("應該要有長度",()=>{
        assert.lengthOf(numbers, 5, "array應該要有五個元件")
    })
})