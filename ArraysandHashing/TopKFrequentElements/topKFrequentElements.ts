function topKFrequent(nums : number[], k : number) : number[]
{
    const   count = new Map<number, number>();
    const   freq : number[][] = Array.from({length : nums.length + 1}, () => []);
    const   res : number[] = [];

    for (let n of nums)
        count.set(n, (count.get(n)|| 0) + 1);

    for (const [key, value] of count)
        freq[value].push(key);

    for (let i = freq.length - 1; i > 0; i--)
    {
        if (!k)
            break;
        for (const num of freq[i])
        {
            res.push(num);
            if (res.length == k)
                return res;
        }
    }
    return res;
}