# @param {Integer[]} nums
# @return {Integer}
def pivot_index(nums)
    nums.each_index do |i|
        left_sum = nums[0...i].sum
        right_sum = nums[(i+1)..-1].sum
        return i if left_sum == right_sum 
    end

    return -1
end

puts pivot_index([1,7,3,6,5,6]) # 3
puts pivot_index([1,2,3]) # -1
puts pivot_index([2,1,-1]) # 0