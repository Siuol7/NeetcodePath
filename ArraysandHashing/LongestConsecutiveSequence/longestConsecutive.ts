function    longestConsecutive(nums : number[]) : number
{
    let     res : number;
    const   map = new Map();

    for (let n of nums)
    {
        if (!map.has(n))
            map.set(n, map.get(n - 1) + map.get(n + 1) + 1);
        
    }

    return res;
}
