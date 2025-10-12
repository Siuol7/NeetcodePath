function    productExceptSelf(nums : number[]) : number[]
{
    let res = new Array(nums.length).fill(1);
    let front = new Array(nums.length).fill(1);
    let back = new Array(nums.length).fill(1);

    for (let i = 0; i < nums.length; i++)
    {
        if (i == 0) front[i] = nums[i];
        else
            front[i] = front[i - 1] * nums[i];
    }


    return res;
}