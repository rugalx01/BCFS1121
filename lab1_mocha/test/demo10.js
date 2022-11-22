const chai = require("chai")
const expect = chai.expect;
const should = chai.should();
const chaiAsPromised = require("chai-as-promised")
chai.use(chaiAsPromised)
function async1() {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                //resolve(50);
                reject(new Error("HAHA"));
            }, 2000)
        }
    )
}
describe("async更多的測試", () => {

    // step1 passawy error, because not use the return, will passing
    it("應該能抓到錯誤，但是因為沒有return 所以一定不會發生任何事情", function () {
        async1().catch(err => assert.ifError(err))
    })

    // step 2 get and handle error
    it("也該抓到錯誤", async function(){
        await expect(async1()).to.be.rejectedWith("HAHA");
    })

    it("也該抓到錯誤，與預期的錯誤不相同", async function(){
        await expect(async1()).to.be.rejectedWith("HAHAXX");
    })
})