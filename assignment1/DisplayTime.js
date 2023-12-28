//used to display time at current in format HH.MM.SS
function calculateTime()
{
    var d = new Date();
var n = d.toLocaleTimeString();
console.log(n);
}
calculateTime();