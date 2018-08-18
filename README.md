# Homework Assignment

This assignment covers the first week of the Intermediate Bootcamp. This repository contains 3 test files, each covering a single task. The order of the tasks does not matter. **You can complete them in any order.** Try to complete as many of them as you can. 

First run `yarn install` to install the dependencies.
Run the tests with the command `yarn test`. Read the instructions in this document to know what is expected of you. The tests are meant to _help_ and _guide_ you. Passing tests do **NOT** automatically mean a successful implementation. You can and should read the tests to see exactly what it's expecting, especially if you're getting errors. However, do **not** change the tests.

_Note: we'll use the results of this homework assignment for a formal evaluation and as such you should write the code individually. **Plagiarism is a violation of the Academy contract and is not in your best interest. Do not discuss the contents of the assignment with your fellow students.**_

## How to submit your results

**Send your homework to teachers@codaisseur.com before Saturday 22:00**

Clean up your code:

- Fix the formatting/indentation
- Remove unnecessary code.

The app should be runnable simply by cloning the repository and running `yarn test`

## Instructions

### Assignment 1: ShoppingCart

1.  You must create a module named `ShoppingCart`. The module must export a `class`, as its default export!
1.  Given a brand new instance of the class `cart`, when calling `cart.getItems()`, should return an empty array.
1.  The class should have a method `cart.addItem(itemName, quantity, price)`, which adds a new item to an internal array. 
1. After adding items, a call to `cart.getItems()` should return the added items. 
1. Items in the array should be in this format:
    ```js
    {
      name: "Name of the item",
      quantity: 1,
      pricePerUnit: 99.99
    }
    ```
1.  Calling `cart.clear()` should remove all items from the items array.
1.  Calling `cart.clone()` should return a _new_ `ShoppingCart` object that contains all the same items. However, the items array and all the items inside should be **copied** so that any changes to one of the carts does not affect the other.

### Assignment 2: path finder

1.  You must create a module named `pathFind`. The test imports it with
    ```js
    const { pathFind } = require("./pathFind")
    ```
    _Note: This is a named export_
1.  The exported `pathFind` should be a function. Declare this function with the `function` keyword (otherwise the tests cannot check if your function is recursive).
1.  The function will be called with two parameters: `pathFind(path, object)`. Where `path` is an array of strings and the `object` parameter is an object. The array of strings refer to a sequence of properties on the object and its nested objects. Here are some examples of how it should work:
    ```js
    pathFind(["foo"], { foo: "bar" }) // === "bar"
    pathFind(["name"], { name: "Dave" }) // === "Dave"
    pathFind(["author", "name"], { year: 1988, author: { name: "Stephen" } }) // === "Stephen"
    pathFind(["book", "author", "name"], {
      book: {
        author: {
          name: "Yuval"
        },
        year: 2015
      },
      category: "Science"
    }) // === "Yuval"
    ```
1.  The function should be a pure function, neither of the inputs should be mutated.
1.  The function should be recursive. If you don't manage making it recursive, it's more important that it returns the expected outputs.

### Assignment 3: Asynchronous code

1. You must create a module named `async-functions`. The test imports it with
    ```js
    const {
      giveItBackLater,
      addSomePromises,
      promiseToGiveItBackLater
    } = require("./async-functions")
    ```
    _Note: There should be **3** named exports that should all be functions_
1. The function `giveItBackLater` will be called with two parameters:
   ```js
   giveItBackLater(value, callback)
   ```
   The `callback` function should be called and given the `value` as a parameter. It should **NOT** do this right away, but later (asynchronously) using `setTimeout`.
1. The function `promiseToGiveItBackLater(value)` should return a promise that will resolve with the `value` later. **It should use `giveItBackLater`.** Meaning, you will wrap your callback-style function `giveItBackLater` with a promise-style version. 
1. Calling `addSomePromises(somePromise)` should chain some promises and return a new one. Your code should add both a fulfillment handler and a rejection handler.

     - When `somePromise` resolves with a string `"foo"`, the returned promise should resolve with a string `"foofoo"`.
     - When `somePromise` is rejected with the value `"bar"`, the returned promise should resolve with `"barbarbar"`.

   So, your fulfillment handler should double the string and the rejection handler should triple the string.
