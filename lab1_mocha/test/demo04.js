const assert = require("assert");
const demo1 = require("../demo01")

describe("使用其它自己的程式", () => {
    it("呼叫模組中的函數", () => {
        assert.strictEqual(demo1.x3(), 499);
    })
    it("呼叫模組中的函數2", () => {
        assert.strictEqual(demo1.x3(), 500);
    })

})