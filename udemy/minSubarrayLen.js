// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410608#overview
// find min len of contiguous subarr where sum of its els is greater than or equal to integer argument

const minSubArrayLen = (arr, targ) => {
    let minLength = Infinity;
    let currSum = 0;

    for (let i = 0, j = 0; j <= arr.length;) {
        if (arr[j] >= targ)
            return 1;
        if (currSum >= targ) {
            minLength = Math.min(minLength, j - i);
            currSum -= arr[i];
            i++;
        } else {
            currSum += arr[j];
            j++;
        }
    }
    return minLength === Infinity ? 0 : minLength;
};


// alternate-but-similar approach
const minSubArrayLen = (arr, targ) => {
    let minLength = Infinity;

    let i = 0;
    let curSum = 0;

    for (let j = 0; j < arr.length; j++) {
        curSum += arr[j];

        while (curSum >= targ) {
            minLength = Math.min(minLength, j - i + 1);
            curSum -= arr[i];
            i++;
        }
    }
    return minLength === Infinity ? 0 : minLength;
};

const arr1 = [ 2, 3, 1, 2, 4, 3 ];
const num1 = 7;
console.log('res:', minSubArrayLen(arr1, num1)); // 2
// const arr2 = [ 1, 4, 16, 22, 5, 7, 8, 9, 10 ];
// const num2 = 55;
// console.log('res:', minSubArrayLen(arr2, num2)); // 5
