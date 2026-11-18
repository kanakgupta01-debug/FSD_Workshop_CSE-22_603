// Q2: Student Attendance List using the fs module
// The names are stored in attendance.txt in the same folder.

const fs = require("fs");
const path = require("path");
const readline = require("readline");

const filePath = path.join(__dirname, "attendance.txt");

function readNames() {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, "");
    }

    const content = fs.readFileSync(filePath, "utf8");
    return content.split(/\r?\n/).filter(name => name.trim() !== "");
}

function saveNames(names) {
    fs.writeFileSync(filePath, names.join("\n"), "utf8");
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question) {
    return new Promise(resolve => rl.question(question, resolve));
}

async function main() {
    while (true) {
        console.log("\n===== Student Attendance Menu =====");
        console.log("1. Add a student's name");
        console.log("2. Show all names");
        console.log("3. Update a name");
        console.log("4. Delete a name");
        console.log("5. Exit");

        const choice = (await ask("Enter your choice: ")).trim();
        let names = readNames();

        if (choice === "1") {
            const name = (await ask("Enter student name: ")).trim();

            if (!name) {
                console.log("Name cannot be empty.");
            } else {
                names.push(name);
                saveNames(names);
                console.log("Student added successfully.");
            }
        } else if (choice === "2") {
            if (names.length === 0) {
                console.log("Attendance list is empty.");
            } else {
                console.log("\nAttendance List:");
                names.forEach((name, index) => {
                    console.log(`${index + 1}. ${name}`);
                });
            }
        } else if (choice === "3") {
            names.forEach((name, index) => console.log(`${index + 1}. ${name}`));
            const number = Number(await ask("Enter the number of the name to update: "));
            if (!Number.isInteger(number) || number < 1 || number > names.length) {
                console.log("Invalid student number.");
            } else {
                const newName = (await ask("Enter the new name: ")).trim();
                if (!newName) {
                    console.log("Name cannot be empty.");
                } else {
                    names[number - 1] = newName;
                    saveNames(names);
                    console.log("Name updated successfully.");
                }
            }
        } else if (choice === "4") {
            names.forEach((name, index) => console.log(`${index + 1}. ${name}`));
            const number = Number(await ask("Enter the number of the name to delete: "));
            if (!Number.isInteger(number) || number < 1 || number > names.length) {
                console.log("Invalid student number.");
            } else {
                const removedName = names.splice(number - 1, 1);
                saveNames(names);
                console.log(`${removedName[0]} deleted successfully.`);
            }
        } else if (choice === "5") {
            console.log("Exiting attendance system. Goodbye!");
            rl.close();
            return;
        } else {
            console.log("Invalid choice. Please enter a number from 1 to 5.");
        }
    }
}

main().catch(error => {
    console.error("An error occurred:", error);
    rl.close();
});
