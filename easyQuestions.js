//1.Print numbers from 1 to 10 using a loop.
// for(i=0;i<=10;i++){
//     console.log(i);
// }

//2.Print even numbers between 1 and 50
// for(i=0;i<=50;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

//3.Find the sum of numbers in an array.
// let sum=0;
// arr=[1,2,3,4,5,6,7,8,9,10]
// for(i=0;i<arr.length;i++){
//    sum+=arr[i]
// }
// console.log(sum);

//4.Find the largest number in an array.
// let largest=0;
// arr=[1,2,3,4,5,6,7,82,9,10]
// for(i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//         largest=arr[i];
//     }
// }
// console.log(largest);


//5.Reverse an array.
//Method-1
// let reverse=[];
// arr=[1,2,3,4,5,6,7,8,9,10]
// for( let i=arr.length-1,j=0;i>=0;i--,j++){
//         reverse[j]=arr[i];
//         }
//     console.log(reverse);
//----------------------------------

// let reverse=[];
// arr=[1,2,3,4,5,6,7,8,9,10]
// for(let i=arr.length-1;i>=0;i--){
//     reverse[reverse.length]=arr[i]
// }
// console.log(reverse);

//6.reverse a string

// let aString="devika";
// let reverse="";
// for(let i=aString.length-1;i>=0;i--){
//     reverse+=aString[i];
// }
// console.log(reverse);

//7.Check if a number is even or odd.
// function evenOdd(num){
//     if(num%2===0){
//         console.log(`${num} is an even number`);
//     }else{
//         console.log(`${num} is an odd number`);
//     }
// }
// console.log(evenOdd(2));
//---------------------------------------------------

// let evenOdd=(num)=>num%2==0?"even":"odd";
// console.log(evenOdd(5));


//8.Count vowels in a string
 
//  let vowels=["a,e,i,o,u"];
//  let word="question";
//  let areVowel=[];
// //  for(let i=0;i<vowels.length;i++){
//     for(let i=0;i<word.length;i++){
//        if(word[i]=="a",word[i]=="e", word[i]=="i",word[i]=="o",word[i]=="u"){
//         areVowel.push(word[i]);
//        }
//     }
// //  }
//  console.log(areVowel);

//--------------------------------------------


//9.convert "Mahatma Gandhi" to "amtahaM ihdnaG"

// let aString="Mahatma Gandhi";
// let newArray=aString.split(" ");
// let result=[];
// for(let i=0;i<newArray.length;i++){
//    let temp;
// let word=[];
//     word=newArray[i].split('');
//    let l=0;
//    let r=word.length-1;
//    while(l<r){
//       temp=word[l];
//       word[l]=word[r];
//       word[r]=temp;
//       l++;
//       r--;
//    }
// result.push(word.join());
// }
// console.log(result);


//10. largest number using reduce
// arr=[3,5,1,7,0,4,6]
// let largest=arr.reduce((acc,cur)=>{
// if(cur>acc){
//   return cur;
// }else{
//     return acc;
// }
// },0)
// console.log(largest);


//11.second smallest using reduce
// arr=[3,5,1,7,0,4,6]
// let scndSmall=arr.reduce((acc,curr)=>{
//     if
// },0)

//12.second largest element----------------
// let arr=[3,5,1,7,0,4,6]
// arr.sort((a,b)=>a-b);
// let scndlarg=arr[arr.length-2];
// console.log(scndlarg);
// let largest;
// let secondLarges;
// for(let i=0;i<arr.length;i++){
//     if(a[i]>largest){
//         largest=a[i];
//         secondLarges=largest;
//     }
// }

// --------------------------------

//13.Print numbers from 10 to 1 (reverse order).

// for(let i=10;i>=0;i--){
//     console.log(i);
    
// }

//14.Print odd numbers from 1 to 20.

// for(let i=1;i<20;i++){
//     if(i%2!=0){
//         console.log(i);
        
//     }
// }

//15.Find the sum of numbers from 1 to 100.

// let sum=0;
// for(let i=0;i<=100;i++){
//     sum+=i;
// }
// console.log(sum);

//16.Print all elements of an array using a loop.

// let arr=[4,8,6,7,3,2,9];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
    
// }

//17.Count how many elements are in an array without using .length.
//  let arr=[4,8,6,7,3,2,9];
// let count=0;
// for(let items of arr){
//     count++;
// }
// console.log(count);

//18.Print each character of a string using a loop.

// let aString="malayalam";
// for(let i=0;i<aString.length;i++){
//     console.log(aString[i]);
    
// }

//19.Find the sum of elements in an array.
//  let arr=[4,8,6,7,3,2,9];
//  let sum=0;
//  for(let i=0;i<arr.length;i++){
//     sum+=arr[i];

//  }

// console.log(sum);


//20.Find the largest number in an array
//  let arr=[4,8,6,7,3,2,9];
// let largest=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//         largest=arr[i];
//     }
// }
// console.log(largest);

//21.Print the multiplication table of 5.
// let productOfFive=0;
// for(let i=0;i<=10;i++){
//     console.log(productOfFive=i*5);
     
// }

//22.Check whether a given number is positive, negative, or zero using a loop.
// let arr=[4,-8,6,0,-3,2,-9];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>0){
//             console.log("its a positive number");
            
//         }else if(arr[i]<0){
//             console.log("its a negative number");
            
//         }else if(arr[i]==0){
//             console.log("its zero");

//         }
//     }

//23.Count the number of vowels in a string.
// let vowels="aeiou";
// let aString="maehioogu";
// let count=0;

// for(let i=0;i<vowels.length;i++){

//     for(let j=0;j<aString.length;j++ ){
//         if(vowels[i]==aString[j]){
//             count++;
            
//         }
//     }
// }
// console.log(count);

//24.Reverse a string using a loop.
//  let aString="maehioogu";
// for(let i=aString.length-1;i>=0;i--){
//   console.log(aString[i]);
// }

//25.Count how many even numbers are present in an array.
//   let arr=[4,8,6,7,3,2,9];
//   let count=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         count++;
//     }
// }
// console.log(count);






    