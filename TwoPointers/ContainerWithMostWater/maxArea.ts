function    maxArea(heights : number[]) : number
{
    let left = 0;
    let right = heights.length - 1;
    let res = 0;

    while (left < right)
    {
        res = Math.max(res, Math.min(heights[left], heights[right]) * (right - left));
        if (heights[left] <= heights[right]) left++;
        else if (heights[left] > heights[right]) right--;
    }
    return res;
}

console.log(maxArea([1,7,2,5,4,7,3,6]));
console.log(maxArea([2,2,2]));
console.log(maxArea([1,7,2,5,12,3,500,500,7,8,4,7,3,6]));