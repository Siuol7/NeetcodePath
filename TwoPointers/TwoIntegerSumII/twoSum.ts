function    twoSum(numbers : number[], target : number) : number[]
{
    let back = numbers.length - 1;
    let front = 0;

    while (front < back)
    {
        if (numbers[front] + numbers[back] === target)
            return [front + 1, back + 1];
        if (numbers[front] + numbers[back] < target)
            front++;
        else
            back--;
    }
    return [];
}

console.log(twoSum([1,2,3,4], 3));