# Express Routing Exercise
- Springboard Bootcamp project that requires students to create Express routes named __mean__, __median__, and __mode__.
  - The routes are meant to take in a query string parameter of nums that includes an array of numbers.
  - Since the query string produces an array of strings we have to create a helper function that converts each item of the area to type Number.
  - Once converted to numbers we are meant to incorporate functions into each route that performs the action such as mean, median, and mode on the array of numbers.
  - The routes should respond with JSON of the name of the operation and final value after the math is calculated.
  - To finish up the project I created simple tests for each math function using Jest.

## Running Locally
- First clone the repo into a directory of your choice using:
```
git clone https://github.com/paytontaylor/express-routing
```

- Secondly, install dependencies:
```
npm install
```

- Lastly, I used the npm package __dotenv__ which will be installed using the past command. The only step you need to take is creating a file within the project called __.env__ and add your designated port number into the file, example below.
```
PORT=<port>
```
