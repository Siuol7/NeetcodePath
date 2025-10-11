function    hasDuplicate(nums : number[]) : boolean 
{
    return nums.length > new Set(nums).size;
}

console.log(hasDuplicate([1, 2, 3])); // false
console.log(hasDuplicate([1, 2, 2]));