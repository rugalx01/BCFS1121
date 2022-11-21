const should = require("chai").should();
const numbers = [1, 2, 3, 4, 5];

describe("說明should",()=>{
    it("是一個陣列",()=>{
        numbers.should.be.an("array");
    })
    it("有包含某個元件",()=>{
        numbers.should.includes(2);
    })
    it("是一個陣列並且包含",()=>{
        numbers.should.be.an("array").that.includes(2);
    })
    it("陣列長度為",()=>{
        numbers.should.have.lengthOf(5);
    })
    it("陣列長度為",()=>{
        numbers.should.be.an("array").that.have.lengthOf(5);
    })
})