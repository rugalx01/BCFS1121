const assert = require("assert");

describe("檢視equal", function () {
    it("test should equal", () => {
        assert.equal("123", 123)
    })
    it("test strict equal", () => {
        assert.notStrictEqual("123", 123);
    })
    describe("關於陣列", function () {
        it("找得到物件的索引", () => {
            assert.strictEqual([1, 2, 3].indexOf(1), 0)
        })
        it("找不到應該是-1",()=>{
            assert.strictEqual([1,2,3].indexOf(4), -1)
        })
    })
})