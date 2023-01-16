
/**
 * return an array with random values.
 */
export function createArray<T>(length: number): Array<T> {

}

/**
 * 
 */
function sortArray<T>(arr: Array<T>): Array<T> {

}

function searchArray<T>(arr: Array<T>, searchParam: T): boolean {

}

function main(action) {
    const arr = createArray<number>(50000)
    sortArray(arr)
    console.log("123: " + searchArray(arr, 123))
    searchArray(arr, 45654)
    searchArray(arr, 5656)
    searchArray(arr, 56565)
    searchArray(arr, 123)
}

export default main;