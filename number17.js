// && AND

let result = ((1 === 6) && (3 ===5));
console.log (result);
// Expected result 'false'
/* Both expressions are false therefore the compound expression
is false */

result = ((1 === 6) && (5 ===5));
console.log (result);
// Expected result 'false'
/* One expression is false and the other is true. Both parts of the
compound expression must be true for the compound expression to be
true */

result = ((1 === 1) && (5 ===5));
console.log (result);
// Expected result 'true'
/* Both parts of the compound expression are true therefore the compound
expession is true */

// The above statement if the results are true can trigger an event

result = ((1 === 1) && (5 ===5));{
    console.log ("Both parts of the statement equate to true");
}

// Expected result 'Both parts of the statement equate to true'

//  || OR
// One of both parts of the statement have to be true for program to execute

if ((2===2) || (6===6)) {
    console.log ("One or the other or both are true");
}

/* If part of the statement is true and the other false the program still executes.
It doesn't execute to false*/
if ((2===3) || (6===6)) {
    console.log ("One or the other is true")
} 
// Expected result 'One or the other is true'

if ((2===3) || (6===7)) {
    console.log ("Both are false");
}
/* Expected result 'null' the console log string won't execute because both 
are false */

