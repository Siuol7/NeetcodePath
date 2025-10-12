function    productExceptSelf(nums : number[]) : number[]
{
    let res = new Array(nums.length);
    let front = new Array(nums.length).fill(1);
    let back = new Array(nums.length).fill(1);

    for (let i = 0; i < nums.length; i++)
    {
        if (i === 0) front[i] = nums[i];
        else
            front[i] = front[i - 1] * nums[i];
    }
    for (let i = nums.length - 1; i > 0; i--)
    {
        if (i === nums.length - 1)
        {
            back[i] = nums[i];
            res[i] = front[i - 1];
        }
        else
        {
            back[i] = back[i + 1] * nums[i];
            res[i] = front[i - 1] * back[i + 1];
        }
    }
    res[0] = back[1];
    return res;
}

console.log(productExceptSelf([-1,0,1,2,3]));