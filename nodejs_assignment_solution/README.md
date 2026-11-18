# Node.js Programming Assignment

This folder contains solutions for all five questions in the assignment.

## Requirements
- Node.js installed
- npm (comes with Node.js)
- VS Code or any code editor

## Setup
Open a terminal in this folder and run:

```bash
npm install
```

## Run each question

```bash
npm run q1
npm run q2
npm run q3
npm run q4
npm run q5
```

Run only one server question at a time if you prefer. The server ports are:
- Q3: http://localhost:3000
- Q4: http://localhost:3001
- Q5: http://localhost:3002

## Testing Q4 (To-do API)

Start the server with `npm run q4`. Then use Postman or curl:

- GET all tasks:
  `curl http://localhost:3001/tasks`

- POST a task:
  `curl -X POST http://localhost:3001/tasks -H "Content-Type: application/json" -d '{"title":"Complete assignment"}'`

- PUT (mark task 1 completed):
  `curl -X PUT http://localhost:3001/tasks/1`

- DELETE task 1:
  `curl -X DELETE http://localhost:3001/tasks/1`

Tasks are stored in memory, so they reset when the server restarts, as required by the assignment.

## GitHub upload

Create a new GitHub repository, then run these commands from this folder:

```bash
git init
git add .
git commit -m "Complete Node.js programming assignment"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the remote URL with your own repository URL.
