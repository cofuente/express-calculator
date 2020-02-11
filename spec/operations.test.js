const operations = require("../operations.js")


test('tests add function with 1 + 2 = 3',  () => {
    expect(operations.add(1, 2)).toBe(3)
})

test('tests add function with strings',  () => {
    expect(operations.add("dog", "cat")).toBe("dogcat")
})