// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410608#overview
// find min len of contiguous subarr where sum of its els is greater than or equal to integer argument

const minSubArrayLen = (arr, targ) => {
    let currMin = Infinity;
    let currSum;

    for (let i = 0, j = 0; j < arr.length;) {
        if (i === j)
            currSum = arr[i];
        if (currSum >= targ) {
            if (i === j)
                return 1;
            currMin = Math.min(currMin, j - i + 1);
            currSum -= arr[i];
            i++;
        } else {
            j++;
            currSum += arr[j];
        }
    }

    return currMin === Infinity ? 0 : currMin;
};

// improved my way
const minSubArrayLen = (arr, targ) => {
    let currMin = Infinity;
    let currSum = 0;

    for (let i = 0, j = 0; j <= arr.length;) {
        if (currSum >= targ) {
            if (i === j) return 1; // short circuit
            currMin = Math.min(currMin, j - i);
            currSum -= arr[i];
            i++;
        } else {
            currSum += arr[j];
            j++;
        }
    }
    return currMin === Infinity ? 0 : currMin;
};

// their way
function minSubArrayLen(arr, targ) {
    let currSum = 0;
    let i = 0;
    let j = 0;
    let currMin = Infinity;

    while (j <= arr.length) {
        if (currSum < targ){
            currSum += arr[j];
            j++;
        } else {
            currMin = Math.min(currMin, j - i);
            currSum -= arr[i];
            i++;
        }
    }
    return currMin === Infinity ? 0 : currMin;
}