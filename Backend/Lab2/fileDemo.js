import fs from "node:fs/promises";

const filepath = "userData.txt";

export async function createFile(content) {
    try {
        await fs.writeFile(filepath, content, "utf8");
        console.log("File created successfully!");
    } catch (err) {
        console.error("Error creating file:", err);
    }
}

export async function readFile() {
    try {
        const data = await fs.readFile(filepath, "utf8");
        console.log("File Content:\n", data);
        return data;
    } catch (err) {
        console.error("Error reading file:", err);
    }
}

export async function updateFile(newContent) {
    try {
        await fs.appendFile(filepath, "\n" + newContent, "utf8");
        console.log("File updated successfully!");
    } catch (err) {
        console.error("Error updating file:", err);
    }
}

export async function deleteFile() {
    try {
        await fs.unlink(filepath);
        console.log("File deleted successfully!");
    } catch (err) {
        console.error("Error deleting file:", err);
    }
}