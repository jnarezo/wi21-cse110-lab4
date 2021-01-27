### Part 1 Answers

1. The console will print the `prices.length` since `i` was declared using `var`
   and is accessible within the entire function, even outside of the `for` block
   is was declared in.
2. The console will print `discountedPrice` which is
   `prices[prices.length-1] * (1 - discount)` since it was declared using `var`
   and is accessible throughout the entire function, even though it was declared
   in a `for` block.
3. The console will print `finalPrice` which is the discounted price rounded
   to 2 decimal places since it was declared using `var` inside the function
   (where it's accessible throughout the function).
4. The function will return `[50, 100, 150]` since, for each input in `prices`,
   it applies the `discount` on it, rounds the discounted price to 2 decimals
   places, then appends the final price to an output array. In other words,
   it calculates the prices given after the given discount is applied.

5. The script will throw a **ReferenceError** since `i` is defined using `let`
   inside a `for` block and is accessed by the console outside of that block.
   In other words, `i` is only scoped to inside that `for` block.
6. The script will throw a **ReferenceError** since `i` is defined using `let`
   inside a `for` block and is accessed outside of that block. `i` is only
   available within the `for` block it was defined in.
7. Line 13 will print `finalPrice` which was the last discounted price rounded
   to 2 decimal places, since `finalPrice` was declared using `let` before it
   was referenced and is inside the same block scope as line 13.
8. The function will return `[50, 100, 150]` since, for each input in `prices`,
   it applies the `discount` on it, rounds the discounted price to 2 decimals
   places, then appends the final price to an output array. In other words,
   it calculates the prices given after the given discount is applied. There
   are no errors with how the variables are used and declared.

9. The script will throw a **ReferenceError** since `i` is defined using `let`
   which has a block scope, inside the `for` loop it was declared in, and
   line 11 is outside of this scope. Therefore `i` is not accessible here.
10. The script will throw a **ReferenceError** since `discountedPrice` was
    defined using `const` which has a block scope, inside the `for` loop it was
    declared in. Line 12 is outside of the block `discountedPrice` was declared
    in and so it's inaccessible.
11. Assuming there are no errors throughout the function, the console will print
    `finalPrice` since it was declared using `const`, was declared before it was
    referenced, and is in the same block as line 13 (so it's within the same
    scope).
12. The function would crash from a **TypeError** since on line 8, it attempts
    to reassign `finalPrice`'s value, but `finalPrice` is a `const` and can't
    be given a different value. It is accessible, however, since it's within
    the block it was declared in. If there were no errors at all, the function
    should return `[50, 100, 150]`.

13. A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]
14. A. '32', since '3' is a string and JavaScript converts 2 to a string.
       Therefore, JS performs string concatenation.
    B. 1, since JS converts '3' to a number, since arithmetic subtration is
       the only operation that uses the minus sign.
    C. 3, since JS interprets `null` as 0 since 3 is a number and JS is performing
       addition (null is a falsy value).
    D. '3null', since '3' is a string and JS performs concatenation with `null`.
    E. 4, since 3 is a number and JS performs additions, converting true to 1
       like a boolean in most C languages.
    F. 0, since JS sees false as 0 and performs addition on null, converting it
       to 0 (since it's a falsy value).
    G. '3undefined', since '3' is a string and JS performs concatenation with `undefined`
    H. 3, since the minus sign can only mean subtraction. Then '3' is converted to
       a number and undefined is a falsy value, so it's converted to 0.
15. A. true, since the > comparison works on numbers only, so JavaScript converts
       '2' to n number.
    B. false, since both operands are strings, JavaScript using a string comparison
       and compares each character in both strings.
    C. true, since 2 is a number, so JavaScript is checking arithmetic equality
       and converts '2' to a number.
    D. false, since === is strict equality and 2 and '2' are different types.
    E. false, since 2 is a number, JavaScript checks arithmetic equality and
       converted true to 1. therefore 1 == 2 is false.
    F. true, since Boolean(2) typecasts 2 to true (where any number that's not
       0 is true). JavaScript then checks if `true === true` which is true since
       they also have matching types.
16. First, == allows the type conversion of values and can perform different types
    equality checks like comparing numbers versus strings. Otherwise, `===` is
    strict equality and JavaScript will not convert types. Therefore === is used
    to check if two values have the same type and then if these two values are
    equal.
17. The script prints 'How are you?', since JavaScript convert true to 1 and
    performs arithmetic equality (2 == 1), which is false. It skips the `if`
    and moves to the `else if`. JavaScripts converts 2 to a boolean which is
    true, since 2 is non-zero. Therefore it executs the `else if` block.

18. Check file

19. Result: [6, 8, 10]
    First, we can call `modifyArray` with [1, 2, 3] and `doSomething`. For each
    element in [1, 2, 3], we call `doSomething` on it with a function that multiplies
    the input by 2. Through substitution, `doSomething` will take the passed
    in element, add 2 to it, then pass it to the given function that multiplies
    it by 2. Therefore, `modifyArray` will return an array that's [1, 2, 3],
    except each element is increased by 2, then multiplied by 2.

20. Check file

21. 1
    4
    3
    2