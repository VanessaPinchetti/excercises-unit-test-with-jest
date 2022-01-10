
const { sum, fromEuroToDollar, fromDollarToYen, fromDollarToPound } = require('./app.js');


test('adds 14 + 9 to equal 23', () => {
    
    let total = sum(14, 9);

   
    expect(total).toBe(23);
});


test("One euro should be 1.206 dollars", function(){        
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
})

test("1 dollar should be 108.25 yen", function(){        
    expect(fromDollarToYen(1)).toBe(106.58); 
})

 test("Two dollar should be 1.33 pound", function(){        
     expect(fromDollarToPound(1)).toBe(0.67); 
 })