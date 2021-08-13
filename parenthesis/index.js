/**
 * Time Complexity: O(n)
 */

const string = "xyz[abc{def(ghi)jkl}mno]pqr"
const notValidString = "xyz[abc{def(ghi}jkl)mno]pqr"

function checkParenthesis(string) {
    const stack = []
    const open = new Set(['[', '{', '('])

    for (let i = 0; i < string.length; i++) {
        const s = string[i]
        if (open.has(s)) {
            stack.push(s)
            continue
        }

        if (s === ')') {
            const popped = stack.pop()
            if (popped !== '(') {
                return false
            }
        } else if (s === '}') {
            const popped = stack.pop()
            if (popped !== '{') {
                return false
            }
        } else if (s === ']') {
            const popped = stack.pop()
            if (popped !== '[') {
                return false
            }
        }
    }
    return true
}

console.log(checkParenthesis(string))
console.log(checkParenthesis(notValidString))

