const matchingScore = require("./intersectionArray");

describe("matching score  test", () => {
    it("should give score 1 for matching words", () => {
        const response = matchingScore(["abc", "abc"]);

        expect(response).toEqual(1);
    })

    it("should give score 0 for matching words", () => {
        const response = matchingScore(["abc", "xyz"]);

        expect(response).toEqual(0);
    })


    it("should give score 0 for matching words", () => {
        const response = matchingScore(["abc", "xbc"]);

        //expect(response).toEqual(0.33);
    })
})