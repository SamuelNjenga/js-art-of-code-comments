// BAD COMMENTS DOES
// (i) JUST SAY WHAT IT'S ALREADY DOING -> Results in mental overhead rather than being helpful
// EXAMPLE
// if var_a equals var_b
if (var_a === var_b) {
}

// (ii) It wasn't well maintained
// Bad documentation can be worse than no documentation
// Comment says something different from what code beneath it does
// It is  a developer's task to work on the comment even if it means deleting it

// (iii) Hoarders but for code -> You don't feel like you can get rid of that old code, so you replace it with the new code you like and comment on old code. Waow!
// For Example;
// this.removeExtraItem()
this.addItemsFromCart();
// However writing good commit messages can help in the above situation.

// (iv) Instead of writing a comment to explain what a variable name can do
// For example:
g.addToCart();
// Use a better variable name instead
// For example:
geometry.addToCart();
// I like the rule in Functional Programming (FP) that if it's hard to name, maybe you are giving the function too much responsibility. Refactoring has helped me name and likewise, trying to name has also helped me make my functions smaller.

// The comments are an excuse for not writing the code better to begin with.

//  Write thoughful comments that are good for the maintainer to read
// Try to envision that you are both the author and the reader when you are looking at that code -> What information do you need to be as productive as possible.
