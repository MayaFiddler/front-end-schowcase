"""
deep.py

Responds to the user's answer to the "Great Question of Life, the Universe, and Everything".

Purpose:
- Practice conditionals
- Handle different valid user inputs
"""


x = str(input("What is the Answer to the Great Question of Life, the Universe, and Everything?")).strip().lower()

if x == "42":
    print("yes")

elif x == "forty two":
    print("yes")

elif x == "forty-two":
    print("yes")

else:
    print("no")

