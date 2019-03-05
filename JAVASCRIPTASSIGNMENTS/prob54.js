
function factorial(n) {
   if(n!=1)
   {
       n=n*factorial(n-1);
   }else{
       return 1;
   }
   return n;
}
console.log(factorial(5));