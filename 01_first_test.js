// JS Code to be tested

function Addition(x,y) {
  return x+y;
}

function Subtraction(x,y) {
  return x-y;
}

function getFalsValue(x) {
  return !x;
}

// Jasmine Test Code

// "describe" is Jasmine function and it requires to function 1) string 2) call back function
describe(" Vanilla JavaScript Test cases", () => {
     let num1, num2;

    // beforeEach function will be executed before "it" function starts executed
    beforeEach( () => {
      num1 = 10;
      num2 = 20;
    });
    
    // like beforeEach you can use beforeAll, afterAll, afterEach
    
  // "it" is another function to be executed and it requires same functions as "describe"
  it("Addition test case", () => {
      const result = Addition(num1, num2);
      
      expect(result).toBe(30);
      // expect(false).not.toBe(true);
      // expect(result).toEqual(30);
      // expect(result).toBeGreaterThan(10);
  })
  
  it("Subtraction test case", () => {
      const result = Subtraction(num1, num2);
      
      expect(result).toBe(-10);
  })
  
  it("Check Falsy test case", () => {
      const bool = false;
      const result = getFalsValue(bool);
      
      expect(result).toBe(true);
  })
  
  it("should work for objects", function() {
      var foo = {
        a: 12,
        b: 34
      };
      var bar = {
        a: 12,
        b: 34
      };
      expect(foo).toEqual(bar);
    });
  
  
  

})
