# FizzBuzz 
# if the number is divisible by 3 and 5, it returns 'FizzBuzz'
# if the number is divisible by 3 it returns 'Fizz'
# if the number is divisible by 5 it returns 'Buzz'
# if the number is not divisible by either 3 and 5 it returns the number

def fizzBuzz(totalNumber):
    resultList = []
    for number in range(1, totalNumber + 1):
        if number % 3 == 0 and number % 5 == 0:
            resultList.append("FizzBuzz")
        elif number % 3 == 0:
            resultList.append("Fizz")
        elif number % 5 == 0:
            resultList.append("Buzz")
        else:
            resultList.append(number)
    return resultList

print(fizzBuzz(15));