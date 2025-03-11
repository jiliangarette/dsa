# two sum
# 2 paramaters 1 is the arrays of number , 2 is the target number that is the total of a 2 numbers in array if exist



def twoSum(arrayOfNumbers, targetTotal):
    answer = []
    for i in range(len(arrayOfNumbers)):
        for j in range (1,len(arrayOfNumbers)):
            if arrayOfNumbers[i] + arrayOfNumbers[j] == targetTotal:
                return [i, j] 
           
    return answer

arrayOfNumbers = [1,2,3,4,5,6,7]

print(twoSum(arrayOfNumbers, 9))