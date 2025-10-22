function    evalRPN(tokens : string[]) : number
{
    let stack : number[] = [];

    for (let c of tokens)
    {
        if (c === "+")
        {
            stack.push(stack.pop()! + stack.pop()!);
        }
        else if (c === "-")
        {
            stack.push(Math.abs(stack.pop()! - stack.pop()!));
        }
        else if (c === "*")
        {
            stack.push(stack.pop()! * stack.pop()!);
        }
        else if (c === "/")
        {
            let a = stack.pop()!;
            let b = stack.pop()!;
            stack.push(Math.floor(Math.max(a, b) / Math.min(a, b)));
        }
        else
        {
            if (!isNaN(parseInt(c)) && c.trim() !== "")
                stack.push(parseInt(c));
            else
            {
                console.log("Error : wrong characters");
                return 0;
            }
        }
    }
    if (stack.length !== 1)
    {
        console.log("Error : wrong input");
        return 0;
    }
    return stack[0];
}

console.log(evalRPN(["1","2","+","3","*","4","-"]));
console.log(evalRPN(["4","13","5","/","+"]));