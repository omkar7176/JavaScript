// Example 1: 
(function code(){
    console.log(`DB Connected`);
})(); //Semi-colon is neccessary
// OP: DB Connected


// Example 2:
( (name) => {
    console.log(`${name}, DB is Connected`);
})("Omkar")
// OP: Omkar, DB is Connected