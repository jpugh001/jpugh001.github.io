# Basic JavaScript

### Objective
- basic JavaScript concepts
- backend development

### Prerequisites
- Understanding of basic programming concepts like variables, loops, and conditional statements from any programming language or tool (e.g., Flowgorithm).
- Node.js and npm installed. Download from [Node.js official website](https://nodejs.org/).

### Tools and Technologies
- Node.js
- Any text editor (e.g., Visual Studio Code, Atom)

## Step-by-Step Instructions

### 1. Introduction to JavaScript
- **What is JavaScript?** versatile language used both on the client-side and server-side.


### 2. Setting up Your Environment
- **Installing Node.js**: Guide on installing Node.js and setting up a simple development environment.
- **Creating your first JavaScript file**: How to create and run a `.js` file.

### 3. Basic Syntax and Concepts
1. **Variables and Data Types**
   - Declaring variables using `let` and `const`.
   - Basic data types in JavaScript: Numbers, Strings, Booleans, and Arrays.

### Run Frontend (browser)

Running JavaScript directly in a web browser is straightforward and one of the primary ways to execute JavaScript code. 

### Step 1: Create an HTML File

First, you'll need to create an HTML file where you can include your JavaScript code. You can use any text editor like Notepad, Visual Studio Code, Sublime Text, etc.

1. Open your text editor.
2. Create a new file and save it with an `.html` extension, for example, `index.html`.

### Step 2: Write HTML and JavaScript Code

In your HTML file, you will write standard HTML structure and include JavaScript within `<script>` tags. Here’s a basic example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Test</title>
</head>
<body>
    <h1>Testing JavaScript in Browser</h1>

    <!-- Container for displaying JavaScript variables -->
    <div id="js-output"></div>

    <script>
        // JavaScript variables
        let number = 5;
        const greeting = "Hello, World!";
        let isTrue = false;
        let scores = [90, 85, 88];

        // Logging to console
        console.log('Number:', number);
        console.log('Greeting:', greeting);
        console.log('Boolean Value:', isTrue);
        console.log('Scores:', scores);

        // Function to display variables on the webpage
        function displayVariables() {
            const outputDiv = document.getElementById('js-output');
            outputDiv.innerHTML = `
                <p>Number: ${number}</p>
                <p>Greeting: ${greeting}</p>
                <p>Boolean Value: ${isTrue}</p>
                <p>Scores: ${scores.join(', ')}</p>
            `;
        }

        // Call the function to update the DOM
        displayVariables();
    </script>
</body>
</html>

```

### Step 3: Save and Open the File in a Browser

After writing your HTML and JavaScript code:
1. Save your file.
2. Open the file in any web browser (like Chrome, Firefox, Safari, or Edge) by right-clicking the file and selecting "Open with" and then choosing your browser. Alternatively, you can drag and drop the file into the browser window.

### What Happens in the Browser?

- The browser will read the HTML content and execute the JavaScript code between the `<script>` tags.
- Any `console.log` statements will output to the browser's JavaScript console. You can view this by right-clicking on the page, selecting "Inspect" or "Inspect Element," and then navigating to the "Console" tab.
- The `alert()` function will display a popup message box.
- JavaScript can also manipulate the HTML content (the DOM), as shown where it adds a paragraph to the body of the document.

- **Testing and Debugging**: Use the browser’s developer tools (commonly opened with F12) for debugging. The "Console" tab is particularly useful for viewing outputs and errors.

### Run Backend

### Backend JavaScript with Node.js
- Node.js does not directly manipulate HTML as it does in the browser. 
- Backend JavaScript primarily deals with server-side logic, database operations, request handling, and response sending. 
- When you want to use JavaScript variables or any server-side data in your HTML, you typically do this through templating engines or by sending data via API responses that the frontend can then render.

#### Basic (using terminal)
```javascript
let number = 5;
const greeting = "Hello, World!";
let isTrue = false;
let scores = [90, 85, 88];

console.log(number);
console.log(greeting);
console.log(isTrue);
console.log(scores);
```

**Terminal** node `script-name.js` 


2. **Control Structures**
   - **Sequence**: Writing statements that execute in sequence.
   - **Selection** (Conditional Statements):
     ```javascript
     if (number > 0) {
       console.log("Positive number");
     } else {
       console.log("Non-positive number");
     }
     ```
   - **Iteration** (Loops):
     ```javascript
     for (let i = 0; i < scores.length; i++) {
       console.log(scores[i]);
     }
     ```

### 4. Functions
- Introduce functions as a way to encapsulate code.
- Writing a simple function:
  ```javascript
  function greet(name) {
    return `Hello, ${name}!`;
  }
  console.log(greet("Alice"));
  ```

### 5. Introduction to Node.js
- **What is Node.js?** Explain Node.js as a JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Creating a Simple Server**: Writing a basic HTTP server using Node.js.
  ```javascript
  const http = require('http');

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
  });

  server.listen(3000, () => {
    console.log(`Server running at http://localhost:3000/`);
  });
  ```


