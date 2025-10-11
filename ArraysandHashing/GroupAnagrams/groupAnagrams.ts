//Object

function    GroupAnagram(strs : string[]) : string[][]
{
    const   track = {} as Record<string, string[]>;

    for (let s of strs)
    {
        const count = new Array(26).fill(0);
        for (let c of s)
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        let key = count.join(',');
        if (!track[key])
            track[key] = [];
        track[key].push(s);
    }

    return Object.values(track);
}

//Map

function    GroupAnagram(strs : string[]) : string[][]
{
    const track = new Map<string, string[]>();

    for (let s of strs)
    {
        const count = new Array(26).fill(0);
        for (let c of s)
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        let key = count.join(',');
        if (!track.has(key))
            track.set(key, []);
        track.get(key)!.push(s);
    }

    return Array.from(track.values());
}