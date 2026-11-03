# Aster English

Unofficial bilingual reading edition of the [Code_Aster](https://www.code-aster.org/) **User’s manual** and **Reference manual**. French is the DocAster text of 22 October 2026. English is a reading translation.

This is not an EDF publication. Command names, keywords and concept types stay in their original form.

## What is included

| Book | Booklets | Languages |
| --- | --- | --- |
| User’s manual | U0, U1, U2, U3, U4, U7 | French and English |
| Reference manual | R0, R3, R4, R5, R6, R7 | French and English |

U5, U6, R1 and R2 are not part of this edition. The A, D and V manuals are not included.

## Static copy

The latest zip is on the [releases page](https://github.com/larsmei/aster-english/releases/latest). Unpack it onto any web space by FTP or SFTP. No Node, PHP or rewrite rules are required. The folder may sit at the site root or in a subdirectory.

- Home: `index.html`
- A User document: `index.html#/doc/u0.00.01`
- A Reference document: `index.html#/doc/r3.01.00`

French and English are switched in the page header. Addresses use a `#` so a plain file host can serve the site.

Build that zip yourself with:

```bash
npm install
npm run build:static
```

The archive is written to `release/aster-english-static.zip`.

## Development

```bash
npm install
npm run dev
```

French sources live in `src/content/fr/`, English texts in `src/content/en/`. Each file is loaded only when its page is opened.

## Sources

- [User’s manual, DocAster](https://codeaster.gitlab.io/doc/docaster/manuals/man_u/other_pages/list/index.html)
- [Reference manual list, v17](https://code-aster.org/doc/v17/manuals/man_r/other_pages/list/index.html)

The texts in this repository follow the DocAster edition, because some v17 pages have no source text.
