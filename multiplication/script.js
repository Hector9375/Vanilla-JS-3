const Number = ['3' ,'5' , '624' ,'636473' , '23', '2','1']

let max = Math.max.apply(null,Number);
console.log(max);
let min = Math.min.apply(null,Number);
console.log(min);






// function findsmalllastElement(arr){
//     if(arr.length === 0){
//         return 0; 
//     }else{
//         let min = arr[0];
//         for( i = 0; i < arr.length; i++){
//             if(arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     } return min;
// }
// findsmalllastElement([3,5,624,636473,23,2,1])




// console.log(Math.min('3','5','624','636473','23','2','1'));
// console.log(Math.max('3','5','624','636473','23','2','1')); 

// 1. 목표설정
// 2. 환경세팅
// 3. 계획 
// 4. 코딩 = 개발