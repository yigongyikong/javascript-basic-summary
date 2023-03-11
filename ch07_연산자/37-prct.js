/**
 * 음수를 거듭제곱의 밑으로 사용해 계산하려면 다음과 같이 괄호로 묶어야 한다.
 */

-5 ** 2;
// SyntaxError: Unary operator used immediately before exponentiation expression.
// Parenthesis must be used to disambiguate operator precedence

(-5) ** 2; // -> 25