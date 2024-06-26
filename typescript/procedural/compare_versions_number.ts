/**
 * Given two version numbers, version1 and version2, compare them.
 *
 * Version numbers consist of one or more revisions joined by a dot '.'.
 * Each revision consists of digits and may contain leading zeros.
 * Every revision contains at least one character. Revisions are 0-indexed from left to right,
 * with the leftmost revision being revision 0, the next revision being revision 1, and so on.
 * For example 2.5.33 and 0.1 are valid version numbers.
 *
 * To compare version numbers, compare their revisions in left-to-right order.
 * Revisions are compared using their integer value ignoring any leading zeros.
 * This means that revisions 1 and 001 are considered equal.
 * If a version number does not specify a revision at an index, then treat the revision as 0.
 * For example, version 1.0 is less than version 1.1 because their revision 0s are the same,
 * but their revision 1s are 0 and 1 respectively, and 0 < 1.
 *
 * If version1 < version2, return -1.
 * If version1 > version2, return 1.
 * Otherwise, return 0.
 */

function compareVersion(version1: string, version2: string): number {
    const firstVersionArray: number[] = version1.split(".").map(Number)
    const secondVersionArray: number[] = version2.split(".").map(Number)
    const maxLength = Math.max(firstVersionArray.length, secondVersionArray.length)

    for (let i = 0; i < maxLength; i++) {
        const firstIteration = firstVersionArray[i] || 0
        const secondIteration = secondVersionArray[i] || 0

        if (firstIteration !== secondIteration) {
            return firstIteration < secondIteration ? -1 : 1
        }
    }
    return 0;
}

console.log(compareVersion("1.01", "1.001"))