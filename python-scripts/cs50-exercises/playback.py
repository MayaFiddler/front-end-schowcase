
"""
playback.py

Reads user input and outputs it with slowed-down spacing between characters.

Purpose:
- Practice string manipulation
- Work with basic input/output formatting
"""

#call user for an input
slow_words = str(input())

#slow it down, with ...== 1space
print(slow_words.replace(" ", "..."))