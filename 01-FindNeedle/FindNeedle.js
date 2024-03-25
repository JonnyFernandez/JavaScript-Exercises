function FindNeedle(haystack, needle) {
    // Your code here:
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            if (haystack.slice(i, i + needle.length) === needle) return i
        }

    }
    return -1

}



module.exports = FindNeedle;