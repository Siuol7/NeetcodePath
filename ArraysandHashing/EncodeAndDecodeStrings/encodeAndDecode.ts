function    encode(strs: string[]) : string
{
    return strs.map(s => `${s.length}#${s}`).join('');   
}

function    decode(strs: string) : string[]
{
    let res : string[] = [];
    let i   : number = 0;

    while (i < strs.length)
    {
        let deliIndex = strs.indexOf('#', i);
        let slength = strs.substring(i , deliIndex);
    
        let length = Number.parseInt(slength);
        let start = deliIndex + 1;
    
        res.push(strs.substring(start, start + length));
        i = start + length;
    }
    return res;
}
