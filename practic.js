// <Write code in js to find out the most frequent item of an array>
// var arr1=[2,6,8,3,5,7,8, "a","b","e","u",'y','z', 'i','o',8,8];
// var mf = 1;
// var m = 0;
// var item;
// for (var i=0; i<arr1.length; i++){
//         for (var j=i; j<arr1.length; j++){
//                 if (arr1[i] == arr1[j])
//                  m++;
//                 if (mf<m){
//                   mf=m; 
//                   item = arr1[i];
//                 }
//         }
//         m=0;
// }
// console.log(item+" ( " +mf +" times ) ") ;




// <find out which numbers are prime and which are even, >}
// let  array= [2,6,8,3,5,7,8,8];
// array = array.filter((number) => {
//   for (var i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) 
//     // return false;
//   console.log("odd number :"+number);
//   }
//   // return true;
//   console.log("even number :"+number);
// });



// find out vowels and consonants from the same array
// let str = [ "a","b","e","u",'y','z', 'i','o'];
// let vowelarr = ['a','e','i','o','u'];
// let strArr = [...str];
// var a='';
// var b='';
// for (i = 0; i < strArr.length; i++){
//    let field='';
//    for (j = 0; j < vowelarr.length; j++){
//       if(strArr[i]==vowelarr[j]){
//       field=strArr[i];
//           b += strArr[i]+','
//       }
//     }
//     if(strArr[i]!=field){
//       a += strArr[i]+','
//     }
// }
// console.log("consonent : "+a);
// console.log("voule : "+b);




//array sort
// const users =j= [
//     {id: 1, name: 'A', mark: 80},
//     {id: 2, name: 'B', mark: 40},
//     {id: 3, name: 'C', mark: 90},
//     {id: 4, name: 'D', mark: 30},
//     {id: 5, name: 'E', mark: 70},
//     {id: 6, name: 'F', mark: 50},
//     {id: 7, name: 'G', mark: 60},
//      ];
//     let marks=users.sort((p1, p2)=>(p1.mark > p2.mark)? 1 : (p1.mark < p2.mark) ? -1 : 0);
//     console.log(marks);


// pelandrom
// function sum(){
//     const string="aoa"
// const len = string.length; 
// for (let i=0;i<len/2;i++) {  
//     if (string[i] !== string[len-1-i]) {  
//        return false 
//     }  else{
//       return true 
//     }
//      }  
//       }

//    console.log(sum())