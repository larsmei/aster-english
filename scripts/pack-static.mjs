import { access, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const dist = path.join(root, "dist-static");
const nested = path.join(dist, "static", "index.html");
const index = path.join(dist, "index.html");
const zip = path.join(root, "release", "aster-english-static.zip");

async function exists(file) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

if (await exists(nested)) {
  const html = (await readFile(nested, "utf8")).replaceAll("../assets/", "./assets/");
  await writeFile(index, html);
  await rm(path.join(dist, "static"), { recursive: true, force: true });
}

await rm(path.join(dist, "__grok"), { recursive: true, force: true });
await rm(path.join(dist, "og.jpg"), { force: true });

await writeFile(
  path.join(dist, "LIESMICH.txt"),
  [
    "Aster English — statische Ausgabe",
    "",
    "Den Inhalt dieses Ordners auf einen Webspace kopieren (FTP oder SFTP).",
    "Es wird kein Server, kein Node und kein PHP benötigt.",
    "Der Ordner darf im Stammverzeichnis oder in einem Unterordner liegen.",
    "",
    "Startseite: index.html",
    "Beispiel: index.html#/doc/u4.01.00",
    "",
    "Die Adressen benutzen ein #, damit der Webspace keine Umschreiberegeln braucht.",
    "Französisch und Englisch lassen sich in der Seitenleiste umschalten.",
    "",
  ].join("\n"),
);

await mkdir(path.join(root, "release"), { recursive: true });
await rm(zip, { force: true });
const packed = spawnSync(
  "python3",
  [
    "-c",
    `
import pathlib, zipfile
root = pathlib.Path(${JSON.stringify(dist)})
out = pathlib.Path(${JSON.stringify(zip)})
with zipfile.ZipFile(out, "w", compression=zipfile.ZIP_DEFLATED) as z:
    for path in root.rglob("*"):
        if path.is_file():
            z.write(path, path.relative_to(root).as_posix())
print(f"{out.stat().st_size} bytes, {len(z.namelist())} files")
`,
  ],
  { stdio: "inherit" },
);
if (packed.status !== 0) process.exit(packed.status ?? 1);
