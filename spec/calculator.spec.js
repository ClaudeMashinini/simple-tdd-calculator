var adders = require('../calculations');
var  adder = adders.add;
var multiplier = adders.multiply;

describe("carrying out calculations", function(){
    describe("carrying out addition", function(){
        it("can add two numbers", function(){
            expect(adder(2, 7)).toBe(9);
            expect(adder(0, 0)).toBe(0);
            expect(adder(-1, -1)).toBe(-2);
        });
        it("can add multiple numbers", function(){
            expect(adder(2, 7, 6, 8)).toBe(23);
        });
    });
    describe("carrying out multiplication", function(){
        it("can multiply two numbers", function(){
            expect(multiplier(2, 4)).toBe(8);
        });
        it("can multiply multiple numbers", function(){
            expect(multiplier(2, 4, 6, 2)).toBe(96);
        });
    });
});