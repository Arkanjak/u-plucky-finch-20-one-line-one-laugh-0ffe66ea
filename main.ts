import { mkdirSync, writeFileSync } from "node:fs";

const entry = "I told my Wi-Fi we needed space, so now it only connects after I leave the room.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
