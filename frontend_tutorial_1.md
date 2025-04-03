
# Using Javascript: A Beginners Guide

## Objectives

- What HTML tables are and how they’re structured
- Why we use JavaScript with HTML
- What function stubs are and how they help us build logic step-by-step
- How to “think like a developer” when you’re preparing a page to become dynamic

---

## 🧱 1. What Is an HTML Table?

An HTML table is a way to **visually organize data into rows and columns**. Think of it like a spreadsheet — each cell can hold a name, a grade, a date, or any other piece of information.

### 🧩 The Basic Parts of a Table:

| Element | What It Does |
|--------|---------------|
| `<table>` | Wraps the entire table |
| `<thead>` | Holds the **column labels** (like “Student Name” or “Assignment 1”) |
| `<tbody>` | Holds the **data rows** (like the names and grades of students) |
| `<tr>` | A table row |
| `<td>` | A table cell (used inside `<tr>`) |
| `<th>` | A header cell (usually used inside `<thead>`) |

**Why split `<thead>` and `<tbody>`?**  
It keeps the table *organized*. This matters when you want to **style it differently** or let JavaScript **add more rows without touching the headers**.

---

## 🔌 2. What Is JavaScript Doing Here?

HTML gives us the structure, but **JavaScript gives us interactivity**.

We can do things like:

- **Get data** (e.g., from a database)
- **Insert that data into the table**

JavaScript lets you change the page *after it loads*. This is how websites display new content without refreshing.

Instead of hardcoding everything in HTML, we use JavaScript to:

✅ Fetch that data 
✅ Loop through it
✅ Insert it into the table’s <tbody> one row at a time

You can use JavaScript to:
- Find the table using its ID
- Add new rows inside the `<tbody>`
- Format and update data visually

---

## 🧪 3. What Are JavaScript Stubs?

Stubs are **placeholder functions** — they don’t *do* the work yet, but they define what the work *will be*.

Here’s why stubs are helpful:
| Reason | Example |
|--------|---------|
| 🧠 Plan your logic | You know you’ll need a `fetchData()` function, even if it’s empty for now |
| 🧪 Test your connections | You can make sure your function runs and logs a message |
| 🔄 Work in stages | Build one piece at a time, without needing everything finished |

You’ll often see a stub like:

```js
function fetchData() {
    console.log("Fetching data...");
}
```

Even if it doesn’t return anything, it proves your file is connected and working.

---

## 🛠 4. What Is the Browser Console and Why Should You Use It?

The console is your command center for debugging and confirming things are working. Every time you see console.log(...) in JavaScript, it's writing a message in the console.

It shows:
- Output from your `console.log()` calls
- Errors in your code
- Messages that help you understand what’s happening

**Why Use It?**

✅ Helps you check if your functions are running

✅ Shows what data is being passed between functions

✅ Reveals errors (and where to fix them)

✅ Lets you interact directly with your web page

You’ll often use it to trace the “story” of your program. Example:

```js
function fetchGradeData() {
    console.log("📡 Getting grade data from the database...");
}
```
In the console, that message tells you: “Yes! The function ran!”

### How to Open the Console
- **Chrome or Firefox**: Right-click → Inspect → Console tab
- **Shortcut (Windows/Linux)**: `Ctrl + Shift + J`
- **Shortcut (Mac)**: `Cmd + Option + J`

You’ll see messages like:
```
Fetching data...
Populating gradebook with data: undefined
```

Which tells you: "Hey, these functions were called correctly."

---

## 🧠 5. How Does It All Fit Together?

Here’s the big picture of what you’re learning:

| Piece | What You’re Learning |
|-------|------------------------|
| HTML Table | How to structure data for display |
| `<thead>` / `<tbody>` | Why we separate headers from dynamic content |
| JavaScript File | How behavior (scripts) are separated from structure |
| Function Stubs | How to plan and test future code |
| Console Logs | How to confirm your code is working as expected |

This is a **real-world process** used by developers every day: start small, build in layers, and test each step before moving on.

---

## 🧭 What’s Next?

Now that you understand the purpose behind the tools, your upcoming lab will give you the **starter code in pieces**. You’ll apply everything you just learned by:

- Working with a table
- Writing and connecting stub functions
- Preparing your app to use real data in the future

