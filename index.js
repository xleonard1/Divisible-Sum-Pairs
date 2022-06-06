function divisibleSumPairs(n, k, arr) {
    // Write your code here
   let count = 0
   for(let i = 0; i < n; i++) {
       for(let j = i+1; j < n; j++) {
           if((i < j) && (((arr[i] + arr[j]) % k) === 0)) {
               count++
           }
       }
   }
  return count;
}