const assert = require("assert")

// 透過啟動mocha的時候加上時間的延長等待才能使用超過1秒(因為預設是不能超過1秒的)

function async1() {
    return new Promise(
        resolve => {
            setTimeout(() => {
                resolve(50);
            }, 2000)
        }
    )

}

describe("開始async test", () => {
    it("direct test notStrictEqual", () => {
        assert.notStrictEqual(60, async1)
    })

    it("direct test strictEqual", () => {
        assert.strictEqual(60, async1)
    })

    // 如果不使用 return 就一定都會過
    it("use async to make it work not return1", () => {
        async1().then(r => assert.strictEqual(r, 50))
    })
    // 如果不使用 return 就一定都會過
    it("use async to make it work not return2", () => {
        async1().then(r => assert.strictEqual(r, 60))
    })
    it("use async to make it work correct", () => {
        return async1().then(r => assert.strictEqual(r, 50))
    })
    it("use async to make it work fail", () => {
        return async1().then(r => assert.strictEqual(r, 60))
    })
    it("use async to make it work", () => {
        return async1().then(r => assert.notStrictEqual(r, 60))
    })

    it("可以用async,await的方式 correct", async function () {
        const result = await async1();
        assert.strictEqual(result, 50);
    })
    it("可以用async,await的方式 fail", async function () {
        const result = await async1();
        assert.strictEqual(result, 60);
    })
})