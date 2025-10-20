function    trap(height : number[]) : number
{
    let res = 0;
    let Lcol = 0;
    let Rcol = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right)
    {
        if (height[left] < height[right])
        {
            Lcol = Math.max(Lcol, height[left]);
            res += (Lcol === 0 ? 0 : Lcol - height[left]);
            left++;
        }
        else
        {
            Rcol = Math.max(Rcol, height[right]);
            res += (Rcol === 0 ? 0 : Rcol - height[right]);
            right--;
        }
    }
    return res;
}

console.log(trap([0,2,0,3,1,0,1,3,2,1]));