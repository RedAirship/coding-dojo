# ISBN Validator
## Description
ISBN's ([International Standard Book Numbers](https://en.wikipedia.org/wiki/International_Standard_Book_Number#Check_digits)) are identifiers for books. Given the correct sequence of digits, one book can be identified out of millions of others thanks to this ISBN. But when is an ISBN not just a random slurry of digits? That's for you to find out.

## Rules
Given the following constraints of the ISBN number, you should write a function that can return True if a number is a valid ISBN and False otherwise.

An ISBN is a ten digit code which identifies a book. The first nine digits represent the book and the last digit is used to make sure the ISBN is correct.

To verify an ISBN you :
- obtain the sum of 10 times the first digit, 9 times the second digit, 8 times the third digit... all the way till you add 1 times the last digit. 
- If the sum leaves no remainder when divided by 11 the code is a valid ISBN.

For example :

`0-7475-3269-9` is Valid because

`(10 * 0) + (9 * 7) + (8 * 4) + (7 * 7) + (6 * 5) + (5 * 3) + (4 * 2) + (3 * 6) + (2 * 9) + (1 * 9) = 242` which can be divided by 11 and have no remainder.

For the cases where the last digit has to equal to ten, the last digit is written as `X`. For example `156881111X`.

## Bonus
Write an ISBN generator. That is, a programme that will output a valid ISBN number (bonus if you output an ISBN that is already in use :P )

## 13 Digit Validator
Appendix 1 of the International ISBN Agency's official user manual describes how the [13-digit ISBN check digit is calculated](https://en.wikipedia.org/wiki/International_Standard_Book_Number#ISBN-13_check_digit_calculation). The ISBN-13 check digit, which is the last digit of the ISBN, must range from 0 to 9 and must be such that the sum of all the thirteen digits, each multiplied by its (integer) weight, alternating between 1 and 3, is a multiple of 10.

### Rules
The calculation of an ISBN-13 check digit begins with the first twelve digits of the 13-digit ISBN (thus excluding the check digit itself). Each digit, from left to right, is alternately multiplied by 1 or 3, then those products are summed modulo 10 to give a value ranging from 0 to 9. Subtracted from 10, that leaves a result from 1 to 10. A zero (0) replaces a ten (10), so, in all cases, a single check digit results.

For example, the ISBN-13 check digit of `978-0-306-40615-?` is calculated as follows:

```
s = 9×1 + 7×3 + 8×1 + 0×3 + 3×1 + 0×3 + 6×1 + 4×3 + 0×1 + 6×3 + 1×1 + 5×3
  = 9 + 21 + 8 + 0 + 3 + 0 + 6 + 12 + 0 + 18 + 1 + 15
  = 93
93 / 10 = 9 remainder 3
10 – 3 = 7
```
Thus, the check digit is `7`, and the complete sequence is ISBN `978-0-306-40615-7`.

### Bonus: ISBN-10 to ISBN-13 conversion
An ISBN-10 is converted to ISBN-13 by prepending "978" to the ISBN-10 and recalculating the final checksum digit using the ISBN-13 algorithm. The reverse process can also be performed, but not for numbers commencing with a prefix other than 978, which have no 10-digit equivalent.

**Write a function that shows both the ISBN-10 and ISBN-13 value for a given input.**

## Source
This kata is based on [Challenge #197 [Easy] ISBN Validator](https://www.reddit.com/r/dailyprogrammer/comments/2s7ezp/20150112_challenge_197_easy_isbn_validator/)
