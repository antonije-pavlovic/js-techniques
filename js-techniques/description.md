# Closures
A closure is the combination of a function bundled together (enclosed) with references to its
surrounding state (the **lexical environment**).

In other words, a closure gives you access to an outer function’s scope from an inner function.
In JavaScript, closures are created every time a function is created, at function creation time.

Closures are useful because they let you associate data (the lexical environment) 
with a function that operates on that data. This has obvious parallels to object-oriented programming,
where objects allow you to associate data (the object's properties) with one or more methods.

The inner function will have access to the variables in the outer function scope,
even after the outer function has returned.

Consequently, you can use a closure anywhere that you might normally use an object with only a single method.

#### Closure scope
  Every closure has three scopes:
  * Local Scope (Own scope)
  * Outer Functions Scope
  * Global Scope
 ```
    // global scope
    var e = 10;
    function sum(a){
      return function(b){
        return function(c){
          // outer functions scope
          return function(d){
            // local scope
            return a + b + c + d + e;
          }
        }
      }
    }
```

#### Closures in loops: A common mistake
```
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    }
  }
}

setupHelp();
```
> If you try this code out, you'll see that it doesn't work as expected.
> No matter what field you focus on, the message about your age will be displayed.

**This is because the variable `item` is declared with var and thus has function scope due to hoisting.**

The value of `item.help` is determined when the onfocus callbacks are executed.
Because the loop has already run its course by that time, the item variable object (shared by all three closures) has been left pointing to the last entry in the `helpText` list.

Solution for this problem is to simply use `let` and then we would have block scope variable, or to wrap calling into
another function (e.q IIFE)

---
# Currying

# Debounce

# Trampoline 

A trampoline function basically wraps our recursive function in a loop.
Under the hood, it calls the recursive function piece by piece until it no longer produces recursive calls.
What’s happening under the hood of this `trampoline` function?
It takes a function `(fn)` as its argument—this is the recursive function it is going to wrap—and
returns a new function. Within this new function, the recursive function is called.
We keep the loop running as long as `fn `returns another function.
Once `fn` resolves into a value, we stop running the loop and return the value.

Since our recursive function now returns a new function without actually calling itself yet,
we get to control when the next call to `func` happens inside our `trampoline` function.
This allows us to continue calling `func` without blowing up the call stack.

#### PTC or Proper Tail Calls
 
#### TCO or Tail Calls Optimizations
