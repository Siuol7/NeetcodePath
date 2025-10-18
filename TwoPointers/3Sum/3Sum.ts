function    threeSum(nums : number[]) : number[][]
{
    let res : number[][] = [];

    nums.sort((a,b) => a - b);
    for (let first = 0; first < nums.length; first++)
    {
        if (nums[first] > 0) break;
        if (first > 0 && nums[first] === nums[first - 1]) continue;

        let next = first + 1;
        let last = nums.length - 1;
        while (next < last)
        {
            let sum = nums[first] + nums[next] + nums[last]
            if (sum < 0) next++;
            else if (sum > 0) last--;
            else
            {
                res.push([nums[first], nums[next], nums[last]]);
                next++;
                last--;
                while (next < last &&  nums[next] === nums[next - 1]) next++;
            }
        }
    }
    return res;
}

console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([0,1,1]));
console.log(threeSum([0,0,0]));