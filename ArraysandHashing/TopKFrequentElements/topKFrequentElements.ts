function topKFrequent(nums : number[], k : number) : number[]
{
    const   count = new Map<number, number>();
    const   freq : number[][] = Array.from({length : nums.length + 1}, () => []);
    const   res : number[] = [];

    for (let n of nums)
    {
        if (!count.has(n))
            count.set(n, 0);
        count.set(n, count.get(n)! + 1);
    }
    for (const [key, value] of count)
        freq[value].push(key);

    for (let i = freq.length; i > 0; i--)
    {
        if (!k)
            break;
        for (let j = 0; j < freq[i].length; j++)
        {
            if (!k)
                break;
            res.push(freq[i][j]);
            k--;
        }
    }
    return res;
}