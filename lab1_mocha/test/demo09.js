const chai = require("chai")
const expect = chai.expect;
const should = chai.should();
const chaiAsPromised = require("chai-as-promised")
chai.use(chaiAsPromised)
function async1() {
    return new Promise(
        resolve => {
            setTimeout(() => {
                resolve(50);
            }, 2000)
        }
    )
}

describe("async測試使用chai as promised", () => {
    it("should do test", () => {
        return expect(async1()).to.eventually.equal(50);
    })
    // it("should fail test", () => {
    //     return expect(async1()).to.eventually.equal(60);
    // })
    it("使用should", () => {
        return async1().should.eventually.equal(50);
    })
    // it("使用should fail", () => {
    //     return async1().should.eventually.equal(60);
    // })
})