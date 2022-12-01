const shitSort = (array: number[]): number[] => {
    let index = 0;

    while (index < array.length) {
        const minIndex = minimalIndex(array.slice(index));
        const temp = array[minIndex];

        array[minIndex] = array[index];
        array[index] = temp;

        index++;
    }

    return array;
}

// [1, 2, 3, 4]
// O(n^2)

const minimalIndex = (array: number[]): number => {
    let minimal = Number.MAX_VALUE;
    let index: number | null = null;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < minimal) {
            minimal = array[i];
            index = i
        }
    }

    return index!;
}
