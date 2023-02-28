// function sumInArray(arr, sum) {
//     var returnArr = [];

//     for (var i = 0; i < arr.length - 1; i++) {
//         for (var j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] == sum) {
//                 returnArr.push(i);
//                 returnArr.push(j);
//                 return returnArr;
//             }
//         }
//     }

//     return "no sum in the array can be found";
// }



function returnTriplet(arr,sum){
    arr.sort((a,b) => a-b);
    returnArr = [];

    for (var i = 0; i < arr.length - 2; i++) {
        var temp = sum - arr[i];
        for (var j = i + 1; j < arr.length - 1; j++) {
            for(var k = j + 1; k < arr.length; k++){
                if (arr[k] + arr[j] == temp) {
                    returnArr.push([arr[i],arr[j],arr[k]]);            
                }
            }            
        }
    }
    if(returnArr.length > 0){
        return returnArr;
    }
    else{
        return  "No three numbers sum up to the target sum"
    }

}

console.log(returnTriplet([12,3,1,2,-6,5,-8,6],0));