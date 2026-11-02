# Translation glossary — Code_Aster User's manual (U0–U1)

Translate French technical prose into clear, precise engineering English.
Do not summarise. Do not add notes. Preserve Markdown structure.

## Leave unchanged

- Software names: `code_aster`, `Code_Aster`, `Aster`, `Salomé`, `AsterStudy`, `astk`, `EFICAS`, `JEVEUX`, `MUMPS`, `MED`, `HDF5`, `Homard`, `Europlexus`, `Miss3D`, `SCOTCH`, `METIS`
- Command names and keywords in capitals or with underscores: `DEBUT`, `FIN`, `LIRE_MAILLAGE`, `AFFE_MODELE`, `MECA_STATIQUE`, `PAR_LOT`, `GROUP_MA`, `MODELISATION`, `PHENOMENE`, `_F`, and every similar token
- Keyword values: `'OUI'`, `'NON'`, `'MECANIQUE'`, `'AXIS'`, `'MED'`, and similar
- Data-structure type names: `evol_elas`, `matr_asse`, `maillage`, `table`, `fonction`, `nappe`, `resultat`, `tran_gene`, `melasflu`, `cham_mater`
- Document keys: `U1.03.00`, `V7.90.04`, `A0…`. Link targets `doc:u1.03.00` stay exactly
- Test-case names: `FORMA00`, `HNSV100`, …
- Paths, logical units, file names, version numbers
- Math between `$` signs, character for character
- Fenced code blocks, character for character (including broken quotes and French inside the code)
- Image lines `![...](...)`, character for character
- Heading numbers: `## 1`, `### 1.1`, `#### 1.1.1` stay; translate only the words after the number

## Repair only obvious conversion damage

- `Code_Ast er` / `Code_Ast* er` → `Code_Aster`
- A keyword glued to a following French word (`NON_LINEou`, `LDAcontient`, `mailcontenant`) → split the keyword from the word, then translate the word
- Do not invent missing technical content

## Terms

| French | English |
| --- | --- |
| Résumé | Summary |
| Avertissement | Warning |
| Remarque | Note |
| commande | command |
| fichier de commandes | command file |
| mot-clé | keyword |
| mot-clé facteur | factor keyword |
| concept | concept |
| opérateur | operator |
| superviseur | supervisor |
| macro-commande | macro-command |
| maillage | mesh |
| maille | mesh cell (never "element" alone — reserve element for élément fini) |
| élément fini | finite element |
| nœud | node |
| groupe de mailles | mesh-cell group |
| groupe de nœuds | node group |
| degré de liberté / ddl | degree of freedom |
| chargement | loading |
| charge | load |
| condition aux limites | boundary condition |
| comportement (matériau) | constitutive behaviour |
| phénomène | phenomenon |
| modélisation | modeling; keep `MODELISATION` as the keyword |
| notice d'utilisation | user's guide |
| cas test | test case |
| étude | study |
| base (mémoire JEVEUX, glob, volatile) | database |
| poursuite / POURSUITE | restart |
| pas de temps | time step |
| instant | time instant |
| résultat | result |
| impression / imprimer | printout / print |
| fichier de messages | message file |
| unité logique | logical unit |
| règle de surcharge | overloading rule |
| règle de rémanence | persistence rule |
| grandeur | quantity (grandeur) |
| post-traitement | post-processing |
| solveur | solver |
| matrice tangente | tangent matrix |
| contact-frottant | frictional contact |
| qualité / assurance qualité / AQ | quality / quality assurance |
| version d'exploitation | production version (version d'exploitation) |
| version de développement | development version |
| fiche qualité | quality sheet |
| manuel d'utilisation | User's manual |
| manuel de référence | Reference manual |
| manuel de descriptif informatique | Programmer's manual (Descriptif informatique) |
| manuel de validation | Validation manual |
| manuel d'administration | Administration manual |
| mise en données | data setup |
| champ | field |
| contrainte | stress |
| déformation | strain |
| déplacement | displacement |
| matériau | material |
| loi de comportement | constitutive law |
| calcul | analysis, or run when the subject is a job's time and memory |
| lancement | launching |
| parallèle / parallélisme | parallel / parallelism |
| mémoire vive / RAM | RAM |
| temps CPU / elapsed | CPU time / elapsed time |

Blockquote labels: `> **Résumé.**` becomes `> **Summary.**` and the following paragraph stays a normal paragraph (or is merged into the blockquote if it clearly is the summary body — either is acceptable if the words are all there).

British spelling is fine (`behaviour`, `modelling`) if used consistently inside a document. Prefer `modeling` and `behavior` only if the whole document uses American spelling — pick one per document and stick to it. Use **British** spelling throughout: behaviour, modelling.

Tone: an engineer writing for an engineer. No marketing voice, no "welcome", no emoji.
