import { createGzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import { pipeline } from "node:stream/promises";

const distDir = path.resolve("dist");
const compressibleExtensions = new Set([
  ".css",
  ".html",
  ".js",
  ".json",
  ".svg",
  ".txt",
  ".xml",
]);
const minSizeBytes = 256;

const walk = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });

  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        await walk(entryPath);
        return;
      }

      if (entry.name.endsWith(".gz")) {
        return;
      }

      const extension = path.extname(entry.name).toLowerCase();
      if (!compressibleExtensions.has(extension)) {
        return;
      }

      const fileStat = await stat(entryPath);
      if (fileStat.size < minSizeBytes) {
        return;
      }

      await pipeline(
        createReadStream(entryPath),
        createGzip({ level: 9 }),
        createWriteStream(`${entryPath}.gz`),
      );
    }),
  );
};

await walk(distDir);
