"""
cash.py

Calculates the minimum number of coins needed to give a user change,
inspired by the "Cash" exercise from CS50.

Purpose:
- Practice arithmetic operations and loops.
- Implement a simple greedy algorithm.
- Develop problem-solving skills in handling user input and calculations.
"""
#include <cs50.h>
#include <stdio.h>

int get_cents(void);
int calculate_quarters(int cents);
int calculate_dimes(int cents);
int calculate_nickels(int cents);
int calculate_pennies(int cents);

int main(void)
{
    // Ask how many cents the customer is owed
    int cents = get_cents();

    // Calculate the number of quarters to give the customer
    int quarters = calculate_quarters(cents);
    cents = cents - quarters * 25;

    // Calculate the number of dimes to give the customer
    int dimes = calculate_dimes(cents);
    cents = cents - dimes * 10;

    // Calculate the number of nickels to give the customer
    int nickels = calculate_nickels(cents);
    cents = cents - nickels * 5;

    // Calculate the number of pennies to give the customer
    int pennies = calculate_pennies(cents);
    cents = cents - pennies * 1;

    // Sum coins
    int coins = quarters + dimes + nickels + pennies;

    // Print total number of coins to give the customer
    printf("%i\n", coins);
}

int get_cents(void)
{
    // ask the user till we get positive integer (do/while)
    int cents;
    do{
        cents = get_int("Change owed: \n");
    }
    while (cents <= 0);
    return cents;
}

int calculate_quarters(int cents)
{
    // given cents devided by quaters
    int quarters = cents / 25;
    return quarters;
}

int calculate_dimes(int cents)
{
    // get the quarters off the amount, and devide the remainder by 10
    int dimes = cents / 10;
    return dimes;
}

int calculate_nickels(int cents)
{
    // get the quarters and the dimes off the amont, and devide the remainder by 5
    int nickels = cents / 5;
    return nickels;
}

int calculate_pennies(int cents)
{
    // get the quarters and the dimes and nickels off the amont, and devide the remainder by 1
    int pennies = cents / 1;
    return pennies;
}
