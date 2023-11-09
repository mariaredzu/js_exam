// Exercise 2

// 1./2./3. This function that gets a parameter "A" of table type with 9 positions as input.
function F21(A) {
    // This for goes through the entire array, from the positions 0 to 8, until 9, when it stops
    for (var i = 0; i < A.length; i++) {
        // This if checks if A[i] is a number, if said number has a value lower than 1 or higher than 9, if it repeats itself on the array or if the legth of it is different from 9
        // In any of those cases, the return of this function would be false
        if (isNaN(A[i]) || A[i] < 1 || A[i] > 9 || A.indexOf(A[i]) !== A.lastIndexOf(A[i]) || A.length != 9) {
            return false;
        }
    }
    // If there is no issue, the return would be true
    return true;
}