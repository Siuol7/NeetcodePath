function isAnagram(s : string, t : string) : boolean 
{
       const window = new Array(26).fill(0);
       
       if (s.length !== t.length)
            return false;
       for (let i = 0; i < s.length; i++)
       {
        window[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        window[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
       }
       return window.every((val) => val === 0);
};

console.log(isAnagram("abc", "bca"));
console.log(isAnagram("abc", "f"));