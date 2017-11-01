console.log('Staring app');

setTimeout(() => console.log('Time out !!!'), 5000);

setTimeout(() => console.log('Second Time out !!'), 0);

console.log('Finishing app');



// output
/*
Staring app
Finishing app
Second Time out !!
Time out !!!
*/

// even though set time out called with no delay, finishing app first apperead