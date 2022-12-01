const mergeSort = (array: number[]): number[] => {
    if (array.length > 2) {
        const leftSide = mergeSort(array.slice(0, Math.floor(array.length / 2)));
        const rightSide = mergeSort(array.slice(Math.floor(array.length / 2)));

        let i = 0;
        let j = 0;

        const result = [];

        while (i < leftSide.length || j < rightSide.length) {
            if (i === leftSide.length) {
                result.push(rightSide[j++]);
            } else if (j === rightSide.length) {
                result.push(leftSide[i++]);
            } else if (leftSide[i] < rightSide[j]) {
                result.push(leftSide[i++]);
            } else {
                result.push(rightSide[j++]);
            }
        }

        return result;

    } else if (array.length === 2) {
        if (array[0] < array[1])
            return [...array];
        else
            return [array[1], array[0]];
    } else {
        return array;
    }
}

// n*logn

const array = [3, 2, 1, 4, 7, 6];

console.log(array);
console.log(mergeSort(array));