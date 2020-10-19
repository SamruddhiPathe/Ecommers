
exports.checkPrime=function(no){
var isPrime=true;
 for (let i = 2; i < no; i++) {
        if (no % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
       return true;
    } 
    else {
        return false;
    }
}

exports.calFact=function(no){
var fact=1;
while(no>0)
{
fact=fact*no;
no--;
}
return fact;
}

exports.isPerfect=function(no){
var temp = 0;
   for(var i=1;i<=no/2;i++)
     {
         if(no%i === 0)
          {
            temp += i;
          }
     }
if(temp === no && temp !== 0)
        {
       return true;
        } 
     else
        {
       return false;
        }  




}


   
     















