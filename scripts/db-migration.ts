import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";

// Get migration name from arguments or use default
const name: string = process.argv[2] || "prisma_migration";

// Generate timestamp in YYYYMMDDHHMMSS format
const now: Date = new Date();
const timestamp: string =
  now.getFullYear().toString() +
  (now.getMonth() + 1).toString().padStart(2, "0") +
  now.getDate().toString().padStart(2, "0") +
  now.getHours().toString().padStart(2, "0") +
  now.getMinutes().toString().padStart(2, "0") +
  now.getSeconds().toString().padStart(2, "0");

const filename: string = `${timestamp}_${name}.sql`;
const migrationsDir: string = path.join(
  process.cwd(),
  "supabase",
  "migrations"
);

// Ensure migrations directory exists
if (!fs.existsSync(migrationsDir)) {
  fs.mkdirSync(migrationsDir, { recursive: true });
}

const filepath: string = path.join(migrationsDir, filename);

console.log("Generating migration SQL from Prisma schema...");
try {
  // Use prisma migrate diff to get the SQL between the current DB state and the Prisma schema file
  const sql: string = execSync(
    "npx prisma migrate diff --from-schema-datasource prisma/schema.prisma --to-schema-datamodel prisma/schema.prisma --script",
    { encoding: "utf8" }
  );

  // Check if the migration is empty
  const lines: string[] = sql
    .split("\n")
    .filter((line) => line.trim() && !line.startsWith("--"));
  if (lines.length === 0) {
    console.log("No schema changes detected. Migration file not created.");
  } else {
    fs.writeFileSync(filepath, sql);
    console.log(`Migration created successfully: ${filepath}`);
  }
} catch (error: any) {
  console.error("Error generating migration:", error.stderr || error.message);
  process.exit(1);
}
