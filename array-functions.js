const arr = [1,2,3,4,5,6,7,9,4,1,56,7,651,68,4,51,68];

/*
for(let i = 0; i<arr.length; i++){
    if(arr[i]%2 === 0) console.log('even');
    else console.log('odd');
}
*/

const callback = (element) => {
    if(element%2 === 0) return ['Callback','Even'];
    return ['Callback','Odd'];
}

/*
const map = (input, callback) => {
    let output = [];
    for(let i = 0; i<input.length; i++){
        output.push(callback(input[i]));
    }
    return output;
}
*/

/*
const mapped = arr.map(callback);   //forEach

console.log(mapped);
*/

/*
console.log(map(arr, callback));
*/

/*
const filter = arr.filter(
    (element) => element%2!==0
);

console.log(filter);
*/

/*
const parseObject = (user) => {
    const props = Object.keys(user);
    console.log(user.hasOwnProperty(props[0]));
    console.log(user.hasOwnProperty('city'));
    console.log(props);
}

parseObject({name: "mihir", age: 22});

*/

/*
console.log(Object.keys(arr));
*/