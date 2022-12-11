# @param {Integer[]} nums
# @return {Integer[]}
def running_sum(nums)
    sum = 0
    running_sum = Array.new
    nums.each_with_index do |num, index|
        sum += num
        running_sum[index] = sum
    end
    return running_sum
end

puts running_sum([1,2,3,4])