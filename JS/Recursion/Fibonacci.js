// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// function fib(num, arr = [1]){
//     if(num === arr.length){
//         return arr[num - 1];
//     }
//     if(arr.length == 1){
//         arr.push(1);
//     } else {
//         arr.push(arr[arr.length - 1] + arr[arr.length - 2])
//     }
//     return fib(num, arr)
// }
function fib(num){
    if(num <= 2){
        return 1;
    }
    return fib(num-1) + fib(num-2);
}
console.log(fib(4));