function    longestConsecutive(nums : number[]) : number
{
    let     res = 0;
    const   map = new Map();

    for (let n of nums)
    {
        if (!map.has(n))
        {

            map.set(n, (map.get(n - 1) || 0) + (map.get(n + 1) || 0) + 1);
        }
        map.set(n - map.get(n - 1), map.get(n));
        map.set(n + map.get(n + 1), map.get(n));
        res = Math.max(map.get(n), res);        
    }
    return res;
}
console.log(longestConsecutive([2,20,4,10,3,4,5]));
console.log(longestConsecutive([0,3,2,5,4,6,1,1]));
