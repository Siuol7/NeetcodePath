function evalRPN(tokens) {
    var stack = [];
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var c = tokens_1[_i];
        if (c === "+") {
            if (stack.length !== 2) {
                console.log("Error : not enough numbers");
                return 0;
            }
            stack.push(stack.pop() + stack.pop());
        }
        else if (c === "-") {
            if (stack.length !== 2) {
                console.log("Error : not enough numbers");
                return 0;
            }
            stack.push(Math.abs(stack.pop() - stack.pop()));
        }
        else if (c === "*") {
            if (stack.length !== 2) {
                console.log("Error : not enough numbers");
                return 0;
            }
            stack.push(stack.pop() * stack.pop());
        }
        else if (c === "/") {
            if (stack.length !== 2) {
                console.log("Error : not enough numbers");
                return 0;
            }
            stack.push(stack.pop() / stack.pop());
        }
        else {
            if (!isNaN(parseInt(c)) && c.trim() !== "")
                stack.push(parseInt(c));
            else {
                console.log("Error : wrong characters");
                return 0;
            }
        }
    }
    if (stack.length !== 1) {
        console.log("Error : wrong input");
        return 0;
    }
    return stack[0];
}
console.log(evalRPN(["1", "2", "+", "3", "*", "4", "-"]));
