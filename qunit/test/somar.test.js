const somar = require("../public/assets/js/somar");

QUnit.test("somar", assert => {
    assert.equal(somar(5, 5), null, "É necessario ser do tipo number");
});
