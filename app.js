counter = 0;
function recursiveFunction(){
    counter ++; 
    if (counter === 15000){
            console.log(counter);
    }
    recursiveFunction()
}

try {
    recursiveFunction()
} catch (error) {
    console.log(error)
}


let testArray = [1, 2, 3 [[5, 6, 7, 8], [9, 10]]]

function flattenArray (array){
    result = [];

    for (let i = 0; i < array.length; i++){
        if(Array.isArray(array[i])){
            result = result.concat(flattenArray(array[i]))
        } else{
            result.push(array[i])
        }
    } return result 
}

console.log(flattenArray(testArray));
