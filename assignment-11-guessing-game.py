import random
random.seed()   #Prepare random number generator


# Jane Pugh
# CTI-110.2236
value = int(random.random() * 9)
print("Guess a value between 0 and 9")
number = int(input())
while number != value and number != 999:
    if number > value:
        print("Too high")
    else:
        print("Too low")
    print("Guess again")
    number = int(input())
if number == value:
    print("Congrats! You won!")
else:
    print("Game Over! Goodbye!")
