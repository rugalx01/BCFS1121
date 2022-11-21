var expect = require("chai").expect;
var should = require("chai").should;
var numbers = [1,2,3,4,5]
//var numbers = 5
describe("使用expect的api",()=>{
    it("是一個陣列",()=>{
        expect(numbers).to.be.an("array");
    })
    it("to be an array include",()=>{
        expect(numbers).that.includes(2);
    })
    it("to be an array includes",()=>{
        expect(numbers).to.be.an("array").that.includes(2);
    })
    it("to have length",()=>{
        expect(numbers).to.have.lengthOf(5);
    })
})