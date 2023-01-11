const UpDown = (arr) => {
let swap = false
for(let i = 0;i<arr.length;i++){
    for(let j = 1;arr.length;j++){
        if(arr[j]>arr[i]&&arr[i+1]>arr[j+1]){
            swap=true
        }else {
            swap=false
        }
    }
 }
console.log(swap);
}

UpDown([0,3,2,1])