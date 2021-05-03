//sigma

function sigma(a){
        var sum=0
        for(var i=0;i<=a;i++){
        sum+=i;
        
        }
    

    return sum;
    }

console.log(sigma(6));


//Factorial
function factorial(num){
    var result=1;
    for(var i=1;i<=num;i++){
        result*=i; 
    }
    return result;
    }
    
    console.log(factorial(9))



//Fibonacci
function  fibonacci(num){
    var array=[0,1];
    for(var i=2 ;i<=num;i++){
        array.push(array[i-2]+ array[i-1]);
    }  
    return array;  
}
console.log( fibonacci(4));



//Array: Second-to-Last

function  SecondtoLast(arr){
    var index=arr.length;

        if(index<=3){
    console.log("return null");
            

        }
        else 

        console.log(arr[index-2]);


return index ;
}
var a=[1,2,3,4];
SecondtoLast(a);

//Array: Nth-to-Last

function nthtolast (arr,n){
    var index=arr.length;
    
        if(index>=4)
        console.log(arr[index-n]);
        else 
        console.log("return null");


return index ;
}
nthtolast([2,3,4,5,7,8,10,11,12,13],3);

//Array: Second-Largest

function secondlargest(arr){
    var max1=0,max2=0;
    var index=arr.length;
    
    for(var i=0;i<arr.length;i++){

        if(index>=4){
            if(arr[i]>max1)
            max2=max1;
            max1=arr[i];
        }
        else{
        console.log("return null")  
    }  
    }
    console.log(max2);
}

secondlargest([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]);


//Double Trouble
function double(arr){
    var newarr=[];
    for(var i=0;i<arr.length;i++){
        newarr.push(arr[i]) ;
        newarr.push(arr[i]);
    
    }
    return newarr;
    }
    var a=[2,4,6,8];
    console.log(double(a));
    