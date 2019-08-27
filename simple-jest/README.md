#Testing Javascript

## Simple Unit Testing with Jest

Refer to the [Jest getting started guide](https://jestjs.io/docs/en/getting-started) to set up and install jest and babel. Otherwise run ``pm install --dev`` on this repo.

Tests are located in ``_tests__`` and test files are named after modules they are testing. ``interfaces.ts`` is the trivial example given on Jest site to test that the project was configured correctly. ``cart.ts``has a simple example of a function to add an item to a cart.

### What is Unit Testing?
In this context we consider ``cart.test.ts`` to contain unit tests because each test only has a single reason to fail. Each test also only makes a single assertion (not always possible for a unit test but a good indication).

Firstly, we test that given an empty cart, adding an item to it returns a list one element long.

Secondly, we test that adding the same item to a cart twice will increment the quantity of the ``cartItem``. 

Thirdly, we test that the same setUp and scenario as case two, however we assert that the cart still only has a single element. Some would argue that the assertions for test two and three could have been in the same test. However, I like to make tests as small as possible and give them only one reason to fail.

### What would be an example integration test
I usually define an integration (or integrated) test as something that has more than one reason to fail.


In our ``cart.test.ts`` imagine we had a test that calculates the cart total. We could test this via a unit test or an integrated test. In a unit test I would initialise a cart with preset items in the test. I would then just assert that a ``cartTotal`` function returned the correct total. 

An example of an integration test would be a test that initialised an empty cart, added several items to it via the `addItemToCart` method and **then** made an assertion on the cart total. We can see that in this case the test could fail for two reasons. Either the `addItemToCart` function could be not working as expected, or the `cartTotal` function.
