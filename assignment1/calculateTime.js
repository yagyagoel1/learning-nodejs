//this function helps to calculate time taken from calling settimeout function and the inner function actually running

console.time('setTimeout');
setTimeout(a,1000);

function a()
{
    console.timeEnd('setTimeout');
 
}

