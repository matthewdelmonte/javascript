const nums = [15, 24, 8, 3, 32, 12, 9, "a"];

const binarySearch = (array, target) => {

    if (!Array.isArray(array) || array.some(item => typeof item !== 'number')) {
        throw new TypeError("Invalid argument type. 'array' must be an array of numbers.");
    }

    if (typeof target !== "number") {
        throw new TypeError("Invalid argument type. 'target' must be a number.");
    }

    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (array[mid] === target) {
            return `The target number is: ${array[mid]}!`
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid -1
        }
    }
    
    return `The target number: ${target} was not found in the array.`
}

try {
    const result = binarySearch(nums, 12);
    if (result) {
    console.log(result);
    }
} catch (e) {
    if (e instanceof TypeError) {
        console.error(e.message);
    } else {
        throw e;
    }
}