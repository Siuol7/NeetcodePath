function    isValid(s : string) : boolean
{
    let open = [];
    let close = new Map ([[')', '('], [']', '['], ['}','{']]);

    for (let c of s)
    {
        if (close.has(c))
        {
            if (open.length === 0 || close.get(c) !== open.pop())
                return false;
        }
        else
            open.push(c);
    }
    if (open.length !== 0)
        return false
    return true;
}

console.log(isValid("[]"));
console.log(isValid("([{}])"));
console.log(isValid("[(])"));