//Create a modified version of ex4 that prepends "corrupt" where an error occurs

//Examples ()
// 2 3 5 67
// corrupt : 2 3 5 67

//Actually this one will not result in an error unless you throw one:
// 3 5 hello: 1 2 3 4 5 6 7 8 9
// corrupt : 3 5 hello: 1 2 3 4 5 6 7 8 9

//Create a further version that will output the answer omitting corrupted values
//or "corrupt" if it cannot be resolved

// 3 5 hello: 1 2 3 4 5 6 7 8 9
// 23 : 3 5 hello: 1 2 3 4 5 6 7 8 9

//this cannot be fixed - actually this is the only one that will throw errors
// 2 3 5 67
// corrupt : 2 3 5 67

