function    dailyTemperatures(temperatures : number[]) : number[]
{
    let stack : number[] = [];
    let l : number = temperatures.length;
    let res : number[] = Array(l).fill(0);

    for (let i = 0; i < l; i++)
    {
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i])
        {
            let id = stack.pop()!;
            res[id] = i - id;
        }
        stack.push(i);
    }
    return res;
}

console.log(dailyTemperatures([30,38,30,36,35,40,28])); 
console.log(dailyTemperatures([22,21,20]));