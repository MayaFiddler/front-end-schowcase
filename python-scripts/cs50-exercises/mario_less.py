"""
mario.py

A console-based program that prints a pyramid of a specified height, 
inspired by the "Mario" exercise from CS50's Introduction to Computer Science course.

Purpose:
- Practice loops, conditional logic, and string manipulation in Python.
- Demonstrate algorithmic thinking by constructing a pyramid pattern based on user input.
"""


#include <cs50.h>
#include <stdio.h>

void print_row(int spaces, int bricks);

int main(void)
{
    // Prompt the user for the pyramid's height
    // the pyramids height must be bewteen 1 and 8
    int n;
    do
    {
        n = get_int("Height (1-8): ");
    }
    while (n < 1 || n > 8);

    // Print a pyramid of that height
    for (int i = 0; i < n; i++)
    {
        // space = total height - current row -
        int spaces = n - i - 1;
        int bricks = i + 1;
        print_row(spaces, bricks);
    }
}

void print_row(int spaces, int bricks)
{
    // Print spaces
    for (int i = 0; i < spaces; i++)
    {
        printf(" ");
    }

    // Print bricks
    for (int i = 0; i < bricks; i++)
    {
        printf("#");
    }

    printf("\n");
}