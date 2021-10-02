// Check failure of by-index access of string characters (IE < 9) and failure of `0 in boxedString` (Rhino)
const boxedString = Object('a')
export const hasBoxedString = boxedString[0] === 'a' && 0 in boxedString
