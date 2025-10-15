function    isPalindrome(s : string) : boolean
{
    let back = s.length - 1;
    let str = s.toUpperCase();

    for (let i = 0; i < str.length/2; i++)
    {
        if (str[i].match(/[a-z0-9]/ig) === null) continue;
        while (str[back].match(/[a-z0-9]/ig) === null) back--;   
        if (str[i] !== str[back])
            return false;
        back--;
    } 
    return true;
}

console.log(`${"Was it a car or a cat I saw?"} -> ${isPalindrome("Was it a car or a cat I saw?")}`);
console.log(`${"tab a cat"} -> ${isPalindrome("tab a cat")}`);
