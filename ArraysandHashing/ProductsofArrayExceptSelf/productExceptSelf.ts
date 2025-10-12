function    productExceptSelf(nums : number[]) : number[]
{
    let res = Array(nums.length).fill(1);

    res[0] = 1;
    for (let i = 1; i < nums.length; i++)
        res[i] = nums[i - 1] * res[i - 1];
    let back = 1;
    for (let i = nums.length - 1; i >= 0; i--)
    {
        res[i] *= back;
        back *= nums[i];
    }
    return res;
}

console.log(productExceptSelf([-1,0,1,2,3]));