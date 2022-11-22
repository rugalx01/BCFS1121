// const { expect } = require("chai")

describe("#sum() - root", function(){
    context(" no argument", function(){
        it("reutrn 0", function(){
            expect( sum()).to.equal(0)
        })
    })

    context("多個參數", function () {
        it("可以吃多個參數", () => {
            expect(sum(1,2,3,4,5)).to.equal(15);
         })
        it("可以吃一個參數", () => { 
            expect(sum(5)).to.equal(5);
        })
    })

    context("有多個其它型態的參數", function () {
        it("應該有例外", function () {
            expect(function () { sum(1, 2, "3", [4], 5) }).to.throw(TypeError, "sum() expects only numbers");
        })
    })
})