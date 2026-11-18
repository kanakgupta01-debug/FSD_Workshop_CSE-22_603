// Q4: To-Do List API using GET, POST, PUT and DELETE
// Tasks are stored in an array (no database required).

const http = require("http");

let tasks = [];
let nextId = 1;

function sendJSON(res, statusCode, data) {
    res.writeHead(statusCode, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
}

function readRequestBody(req) {
    return new Promise((resolve, reject) => {
        let body = "";
        req.on("data", chunk => body += chunk);
        req.on("end", () => {
            try {
                resolve(body ? JSON.parse(body) : {});
            } catch (error) {
                reject(error);
            }
        });
        req.on("error", reject);
    });
}

const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const parts = url.pathname.split("/").filter(Boolean);

    // GET /tasks - display all tasks
    if (req.method === "GET" && url.pathname === "/tasks") {
        return sendJSON(res, 200, tasks);
    }

    // POST /tasks - add a new task
    if (req.method === "POST" && url.pathname === "/tasks") {
        try {
            const body = await readRequestBody(req);
            if (typeof body.title !== "string" || !body.title.trim()) {
                return sendJSON(res, 400, { message: "Please provide a task title." });
            }

            const task = {
                id: nextId++,
                title: body.title.trim(),
                completed: false
            };
            tasks.push(task);
            return sendJSON(res, 201, task);
        } catch (error) {
            return sendJSON(res, 400, { message: "Invalid JSON body." });
        }
    }

    // PUT /tasks/:id - mark a task as completed
    if (req.method === "PUT" && parts.length === 2 && parts[0] === "tasks") {
        const id = Number(parts[1]);
        const task = tasks.find(item => item.id === id);

        if (!task) {
            return sendJSON(res, 404, { message: "Task not found." });
        }

        task.completed = true;
        return sendJSON(res, 200, task);
    }

    // DELETE /tasks/:id - remove a task
    if (req.method === "DELETE" && parts.length === 2 && parts[0] === "tasks") {
        const id = Number(parts[1]);
        const index = tasks.findIndex(item => item.id === id);

        if (index === -1) {
            return sendJSON(res, 404, { message: "Task not found." });
        }

        const deletedTask = tasks.splice(index, 1)[0];
        return sendJSON(res, 200, {
            message: "Task deleted successfully.",
            task: deletedTask
        });
    }

    return sendJSON(res, 404, { message: "Route not found." });
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`To-do API is running at http://localhost:${PORT}`);
    console.log("Use the /tasks endpoint to manage tasks.");
});
