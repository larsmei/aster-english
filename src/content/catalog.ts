export type Lang = "en" | "fr";

export type PartId =
  | "U0"
  | "U1"
  | "U2"
  | "U3"
  | "U4"
  | "U7"
  | "R0"
  | "R3"
  | "R4"
  | "R5"
  | "R6"
  | "R7";

export type DocMeta = {
  id: string;
  part: PartId;
  sourceUrl: string;
  blurb: Record<Lang, string>;
};

export const PARTS: { id: PartId; book: "U" | "R"; en: string; fr: string }[] = [
  { id: "U0", book: "U", en: "How to read the manual", fr: "Guide de lecture" },
  { id: "U1", book: "U", en: "Getting started", fr: "Prise en main" },
  { id: "U2", book: "U", en: "Methodology", fr: "Méthodologie" },
  { id: "U3", book: "U", en: "Data files", fr: "Fichiers de données" },
  { id: "U4", book: "U", en: "Commands", fr: "Commandes" },
  { id: "U7", book: "U", en: "External interfaces", fr: "Interfaces externes" },
  { id: "R0", book: "R", en: "How to read the reference", fr: "Guide de la référence" },
  { id: "R3", book: "R", en: "Finite-element models", fr: "Modèles éléments finis" },
  { id: "R4", book: "R", en: "Physical formulations", fr: "Formulations physiques" },
  { id: "R5", book: "R", en: "Analysis methods", fr: "Méthodes de résolution" },
  { id: "R6", book: "R", en: "Linear solvers", fr: "Solveurs linéaires" },
  { id: "R7", book: "R", en: "Constitutive laws", fr: "Lois de comportement" },
];

export const CATALOG: DocMeta[] = [
  {
    id: "u0.00.01",
    part: "U0",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u0/u0.00.01/index.html",
    blurb: {
      en: "How the U, R, D, V and A manuals are organised, and where to look before a first study.",
      fr: "Organisation des manuels U, R, D, V et A, et par où commencer une première étude.",
    },
  },
  {
    id: "u1.02.00",
    part: "U1",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u1/u1.02.00/index.html",
    blurb: {
      en: "What code_aster is for: phenomena, finite elements, solvers, and the tools around a mechanical study.",
      fr: "À quoi sert code_aster : phénomènes, éléments finis, solveurs et outils d’une étude mécanique.",
    },
  },
  {
    id: "u1.03.00",
    part: "U1",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u1/u1.03.00/index.html",
    blurb: {
      en: "Mesh, command file, supervisor, and the main stages of an analysis.",
      fr: "Maillage, fichier de commandes, superviseur et grandes étapes d’une étude.",
    },
  },
  {
    id: "u1.03.01",
    part: "U1",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u1/u1.03.01/index.html",
    blurb: {
      en: "How the supervisor runs a command file, and the syntax of the command language.",
      fr: "Rôle du superviseur et syntaxe du langage de commande.",
    },
  },
  {
    id: "u1.03.02",
    part: "U1",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u1/u1.03.02/index.html",
    blurb: {
      en: "Python methods that read tables, functions, meshes and results from the command file.",
      fr: "Méthodes Python pour lire tables, fonctions, maillages et résultats depuis le fichier de commandes.",
    },
  },
  {
    id: "u1.03.03",
    part: "U1",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u1/u1.03.03/index.html",
    blurb: {
      en: "How to read the time and memory figures of a run, including JEVEUX and MUMPS.",
      fr: "Lire les indicateurs de temps et de mémoire, y compris JEVEUX et MUMPS.",
    },
  },
  {
    id: "u1.04.00",
    part: "U1",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u1/u1.04.00/index.html",
    blurb: {
      en: "AsterStudy, astk, run_aster, run_sbatch and run_ctest — how a study is actually launched.",
      fr: "AsterStudy, astk, run_aster, run_sbatch et run_ctest : lancer une étude.",
    },
  },
  {
    id: "u1.05.00",
    part: "U1",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u1/u1.05.00/index.html",
    blurb: {
      en: "The FORMA00 thin tank under hydrostatic pressure, command by command.",
      fr: "Le réservoir mince FORMA00 sous pression hydrostatique, commande par commande.",
    },
  },
  {
    id: "u2.00.01",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.00.01/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "u2.01.02",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.01.02/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "u2.01.04",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.01.04/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "u2.01.05",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.01.05/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u2.01.09",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.01.09/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "u2.01.10",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.01.10/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u2.01.11",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.01.11/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u2.02.01",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.02.01/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "u2.02.02",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.02.02/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u2.02.03",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.02.03/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u2.03.04",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.03.04/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "u2.03.05",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.03.05/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "u2.03.06",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.03.06/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u2.03.07",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.03.07/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u2.03.08",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.03.08/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u2.03.09",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.03.09/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u2.03.10",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.03.10/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u2.03.11",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.03.11/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "u2.04.01",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.04.01/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "u2.04.02",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.04.02/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "u2.04.03",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.04.03/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "u2.04.04",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.04.04/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u2.04.05",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.04.05/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u2.04.06",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.04.06/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u2.04.07",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.04.07/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "u2.05.00",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.05.00/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "u2.05.01",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.05.01/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u2.05.02",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.05.02/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "u2.05.04",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.05.04/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "u2.05.05",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.05.05/index.html",
    blurb: {
      en: "Ce document a pour but de décrire la mise en œuvre d'un calcul de structure en fatigue vibratoire. Il s'agit plus précisément d'estimer l'amplitude maximale de vibration…",
      fr: "Ce document a pour but de décrire la mise en œuvre d'un calcul de structure en fatigue vibratoire. Il s'agit plus précisément d'estimer l'amplitude maximale de vibration…",
    },
  },
  {
    id: "u2.05.06",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.05.06/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u2.05.07",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.05.07/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "u2.05.08",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.05.08/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "u2.06.01",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.06.01/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "u2.06.03",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.06.03/index.html",
    blurb: {
      en: "Les analyses dynamiques linéaires et non-linéaires, pour l'étude de la réponse vibratoire avec une excitation en force ou en mouvement imposé ou pour l'analyse modale complexe,…",
      fr: "Les analyses dynamiques linéaires et non-linéaires, pour l'étude de la réponse vibratoire avec une excitation en force ou en mouvement imposé ou pour l'analyse modale complexe,…",
    },
  },
  {
    id: "u2.06.04",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.06.04/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u2.06.10",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.06.10/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u2.06.11",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.06.11/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u2.06.13",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.06.13/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "u2.06.14",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.06.14/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "u2.06.31",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.06.31/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u2.06.32",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.06.32/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u2.06.41",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.06.41/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "u2.06.42",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.06.42/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u2.07.01",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.07.01/index.html",
    blurb: {
      en: "L’analyse de Fourier est destinée à calculer la réponse de structures à géométrie axisymétrique sollicitées par des chargements non axisymétriques décomposés en séries de Fourier.",
      fr: "L’analyse de Fourier est destinée à calculer la réponse de structures à géométrie axisymétrique sollicitées par des chargements non axisymétriques décomposés en séries de Fourier.",
    },
  },
  {
    id: "u2.07.02",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.07.02/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "u2.07.03",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.07.03/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u2.07.04",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.07.04/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u2.07.05",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.07.05/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u2.07.07",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.07.07/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u2.08.01",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.08.01/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u2.08.03",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.08.03/index.html",
    blurb: {
      en: "Les solveurs linéaires sont en fait omniprésents dans le déroulement des opérateurs de Code_Aster car ils sont souvent enfouis au plus profond d'autres algorithmes numériques:…",
      fr: "Les solveurs linéaires sont en fait omniprésents dans le déroulement des opérateurs de Code_Aster car ils sont souvent enfouis au plus profond d'autres algorithmes numériques:…",
    },
  },
  {
    id: "u2.08.04",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.08.04/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "u2.08.05",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.08.05/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "u2.08.06",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.08.06/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u2.08.07",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.08.07/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u2.08.08",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.08.08/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "u2.08.09",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.08.09/index.html",
    blurb: {
      en: "Illustration 2: Marche en temps avec adaptation de maillage",
      fr: "Illustration 2: Marche en temps avec adaptation de maillage",
    },
  },
  {
    id: "u2.09.02",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.09.02/index.html",
    blurb: {
      en: "Cette note concerne, la réalisation du maillage et du calcul global d’un assemblage goujon-bride avec *Code_Aster* .",
      fr: "Cette note concerne, la réalisation du maillage et du calcul global d’un assemblage goujon-bride avec *Code_Aster* .",
    },
  },
  {
    id: "u2.10.01",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.10.01/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u2.10.02",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.10.02/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u2.11.01",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.11.01/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u2.51.01",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.51.01/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u2.51.02",
    part: "U2",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u2/u2.51.02/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "u3.01.00",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.01.00/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "u3.02.01",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.02.01/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u3.03.01",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.03.01/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u3.04.01",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.04.01/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u3.11.01",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.11.01/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u3.11.02",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.11.02/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "u3.11.03",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.11.03/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "u3.11.04",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.11.04/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "u3.11.05",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.11.05/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "u3.11.06",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.11.06/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "u3.11.07",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.11.07/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u3.12.01",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.12.01/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "u3.12.02",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.12.02/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u3.12.03",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.12.03/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "u3.12.04",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.12.04/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u3.13.01",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.13.01/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "u3.13.02",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.13.02/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u3.13.03",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.13.03/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u3.13.05",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.13.05/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "u3.13.07",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.13.07/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u3.13.08",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.13.08/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u3.13.09",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.13.09/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "u3.13.12",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.13.12/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u3.13.13",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.13.13/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u3.13.14",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.13.14/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u3.14.01",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.14.01/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u3.14.02",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.14.02/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u3.14.06",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.14.06/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u3.14.07",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.14.07/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u3.14.09",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.14.09/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u3.14.10",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.14.10/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u3.22.01",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.22.01/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u3.23.01",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.23.01/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u3.23.02",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.23.02/index.html",
    blurb: {
      en: "Organisme(s): EDF-R&D/AMA, DeltaCAD",
      fr: "Organisme(s): EDF-R&D/AMA, DeltaCAD",
    },
  },
  {
    id: "u3.24.01",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.24.01/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u3.33.01",
    part: "U3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u3/u3.33.01/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u4.01.00",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.01.00/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "u4.01.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.01.02/index.html",
    blurb: {
      en: "Organisme(s): EDF-R&D/AMA",
      fr: "Organisme(s): EDF-R&D/AMA",
    },
  },
  {
    id: "u4.01.03",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.01.03/index.html",
    blurb: {
      en: "Organisme(s): EDF-R&D/AMA",
      fr: "Organisme(s): EDF-R&D/AMA",
    },
  },
  {
    id: "u4.01.04",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.01.04/index.html",
    blurb: {
      en: "Organisme(s): EDF-R&D/AMA",
      fr: "Organisme(s): EDF-R&D/AMA",
    },
  },
  {
    id: "u4.01.05",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.01.05/index.html",
    blurb: {
      en: "Organisme(s): EDF-R&D/AMA",
      fr: "Organisme(s): EDF-R&D/AMA",
    },
  },
  {
    id: "u4.01.06",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.01.06/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u4.01.09",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.01.09/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u4.01.13",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.01.13/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u4.01.14",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.01.14/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u4.03.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.03.01/index.html",
    blurb: {
      en: "Définir un titre ou un sous-titre lors de l'exécution d'une commande *Aster* .",
      fr: "Définir un titre ou un sous-titre lors de l'exécution d'une commande *Aster* .",
    },
  },
  {
    id: "u4.11.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.11.01/index.html",
    blurb: {
      en: "Affecter les ressources mémoire, disque et fichiers.",
      fr: "Affecter les ressources mémoire, disque et fichiers.",
    },
  },
  {
    id: "u4.11.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.11.02/index.html",
    blurb: {
      en: "Cette commande termine proprement l'exécution d'un calcul. De cette manière, on indique au gestionnaire de mémoire que les objets peuvent être libérés et écrits sur disque dans…",
      fr: "Cette commande termine proprement l'exécution d'un calcul. De cette manière, on indique au gestionnaire de mémoire que les objets peuvent être libérés et écrits sur disque dans…",
    },
  },
  {
    id: "u4.11.03",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.11.03/index.html",
    blurb: {
      en: "Poursuivre une étude à partir de la sauvegarde de la base effectuée par FIN.",
      fr: "Poursuivre une étude à partir de la sauvegarde de la base effectuée par FIN.",
    },
  },
  {
    id: "u4.12.03",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.12.03/index.html",
    blurb: {
      en: "Ouvrir ou fermer un fichier associé à un numéro d’unité logique. Ce numéro peut être indiqué dans la procédure ou bien obtenu en retour de cette dernière. Cette action peut…",
      fr: "Ouvrir ou fermer un fichier associé à un numéro d’unité logique. Ce numéro peut être indiqué dans la procédure ou bien obtenu en retour de cette dernière. Cette action peut…",
    },
  },
  {
    id: "u4.13.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.13.01/index.html",
    blurb: {
      en: "Il s'agit d'insérer une suite de commandes qui seront exécutées *presque* telles qu'elles sont écrites. Il n'y a pas de possibilité de passer d'arguments.",
      fr: "Il s'agit d'insérer une suite de commandes qui seront exécutées *presque* telles qu'elles sont écrites. Il n'y a pas de possibilité de passer d'arguments.",
    },
  },
  {
    id: "u4.13.04",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.13.04/index.html",
    blurb: {
      en: "Créer une table contenant des informations propres à l’exécution en cours, consultable depuis le fichier de commandes.",
      fr: "Créer une table contenant des informations propres à l’exécution en cours, consultable depuis le fichier de commandes.",
    },
  },
  {
    id: "u4.14.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.14.01/index.html",
    blurb: {
      en: "Détruire des concepts utilisateurs.",
      fr: "Détruire des concepts utilisateurs.",
    },
  },
  {
    id: "u4.14.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.14.02/index.html",
    blurb: {
      en: "Dupliquer un concept utilisateur sous un autre nom.",
      fr: "Dupliquer un concept utilisateur sous un autre nom.",
    },
  },
  {
    id: "u4.15.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.15.01/index.html",
    blurb: {
      en: "Compilation du catalogue d'éléments (scripts de l'agla associés : ccat92-py et ccat‑ele.csh).",
      fr: "Compilation du catalogue d'éléments (scripts de l'agla associés : ccat92-py et ccat‑ele.csh).",
    },
  },
  {
    id: "u4.15.12",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.15.12/index.html",
    blurb: {
      en: "Permet d'activer ou de désactiver les fonctionnalités de déverminage entre les différentes commandes.",
      fr: "Permet d'activer ou de désactiver les fonctionnalités de déverminage entre les différentes commandes.",
    },
  },
  {
    id: "u4.21.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.21.01/index.html",
    blurb: {
      en: "Créer un maillage par lecture sur un fichier.",
      fr: "Créer un maillage par lecture sur un fichier.",
    },
  },
  {
    id: "u4.22.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.22.01/index.html",
    blurb: {
      en: "Définir dans un maillage existant, de nouveaux groupes de nœuds ou de mailles. Ceci peut faciliter la définition de nouveaux lieux géométriques pour des entrées de données ou…",
      fr: "Définir dans un maillage existant, de nouveaux groupes de nœuds ou de mailles. Ceci peut faciliter la définition de nouveaux lieux géométriques pour des entrées de données ou…",
    },
  },
  {
    id: "u4.23.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.23.01/index.html",
    blurb: {
      en: "Définir un maillage à l’aide de macro-éléments.",
      fr: "Définir un maillage à l’aide de macro-éléments.",
    },
  },
  {
    id: "u4.23.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.23.02/index.html",
    blurb: {
      en: "Créer une structure de données de type maillage à partir d’un autre maillage. Le nouveau maillage est créé à partir d’un maillage existant en dupliquant, en détruisant, en…",
      fr: "Créer une structure de données de type maillage à partir d’un autre maillage. Le nouveau maillage est créé à partir d’un maillage existant en dupliquant, en détruisant, en…",
    },
  },
  {
    id: "u4.23.03",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.23.03/index.html",
    blurb: {
      en: "Assembler deux maillages pour en former un nouveau.",
      fr: "Assembler deux maillages pour en former un nouveau.",
    },
  },
  {
    id: "u4.23.04",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.23.04/index.html",
    blurb: {
      en: "Effectuer des modifications sur un maillage existant. Les possibilités de modifications sont:",
      fr: "Effectuer des modifications sur un maillage existant. Les possibilités de modifications sont:",
    },
  },
  {
    id: "u4.24.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.24.01/index.html",
    blurb: {
      en: "Définir le maillage de visualisation des résultats d’une sous-structuration dynamique.",
      fr: "Définir le maillage de visualisation des résultats d’une sous-structuration dynamique.",
    },
  },
  {
    id: "u4.24.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.24.02/index.html",
    blurb: {
      en: "Définir une grille à partir d'un maillage.",
      fr: "Définir une grille à partir d'un maillage.",
    },
  },
  {
    id: "u4.25.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.25.01/index.html",
    blurb: {
      en: "Définir les caractéristiques nécessaires à l’étude dynamique d’une structure sous écoulement.",
      fr: "Définir les caractéristiques nécessaires à l’étude dynamique d’une structure sous écoulement.",
    },
  },
  {
    id: "u4.26.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.26.01/index.html",
    blurb: {
      en: "Dans le cadre d’une modélisation de type multifibres, il y a deux “niveaux” de modélisation :",
      fr: "Dans le cadre d’une modélisation de type multifibres, il y a deux “niveaux” de modélisation :",
    },
  },
  {
    id: "u4.31.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.31.01/index.html",
    blurb: {
      en: "Définir la valeur d'une grandeur invariante.",
      fr: "Définir la valeur d'une grandeur invariante.",
    },
  },
  {
    id: "u4.31.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.31.02/index.html",
    blurb: {
      en: "Définir une fonction réelle ou complexe d’une variable réelle. Cet opérateur permet de définir, par exemple, des caractéristiques matériaux fonction de la température, ou des…",
      fr: "Définir une fonction réelle ou complexe d’une variable réelle. Cet opérateur permet de définir, par exemple, des caractéristiques matériaux fonction de la température, ou des…",
    },
  },
  {
    id: "u4.31.03",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.31.03/index.html",
    blurb: {
      en: "Définir une fonction réelle de deux variables réelles. Une nappe définit N fonctions pour N valeurs d’un paramètre.",
      fr: "Définir une fonction réelle de deux variables réelles. Une nappe définit N fonctions pour N valeurs d’un paramètre.",
    },
  },
  {
    id: "u4.31.05",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.31.05/index.html",
    blurb: {
      en: "Définir une formule à valeur réelle ou complexe à partir de son expression mathématique.",
      fr: "Définir une formule à valeur réelle ou complexe à partir de son expression mathématique.",
    },
  },
  {
    id: "u4.32.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.32.01/index.html",
    blurb: {
      en: "Construire un concept de type fonction ou fonction_c à partir d'une fonction FORMULE à 1 ou 2 variables. Peuvent être définies des fonctions réelles à variables réelles, des…",
      fr: "Construire un concept de type fonction ou fonction_c à partir d'une fonction FORMULE à 1 ou 2 variables. Peuvent être définies des fonctions réelles à variables réelles, des…",
    },
  },
  {
    id: "u4.32.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.32.02/index.html",
    blurb: {
      en: "Lire un fichier de données contenant des valeurs réelles représentant une fonction. Produit un concept de type fonction U4.31.02 ou nappe U4.31.03.",
      fr: "Lire un fichier de données contenant des valeurs réelles représentant une fonction. Produit un concept de type fonction U4.31.02 ou nappe U4.31.03.",
    },
  },
  {
    id: "u4.32.03",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.32.03/index.html",
    blurb: {
      en: "Extraire sous forme d'une fonction l’évolution d’une grandeur en fonction d’une autre.",
      fr: "Extraire sous forme d'une fonction l’évolution d’une grandeur en fonction d’une autre.",
    },
  },
  {
    id: "u4.32.04",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.32.04/index.html",
    blurb: {
      en: "Effectuer des opérations mathématiques sur des structures de données de type fonction.",
      fr: "Effectuer des opérations mathématiques sur des structures de données de type fonction.",
    },
  },
  {
    id: "u4.32.05",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.32.05/index.html",
    blurb: {
      en: "Effectuer des opérations mathématiques sur des structures de données de type fonction.",
      fr: "Effectuer des opérations mathématiques sur des structures de données de type fonction.",
    },
  },
  {
    id: "u4.32.11",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.32.11/index.html",
    blurb: {
      en: "Cette macro-commande permet un calcul de post-traitement rapide et efficace pour déterminer les spectres de plancher de tout bâtiment après une analyse dynamique sismique.",
      fr: "Cette macro-commande permet un calcul de post-traitement rapide et efficace pour déterminer les spectres de plancher de tout bâtiment après une analyse dynamique sismique.",
    },
  },
  {
    id: "u4.32.12",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.32.12/index.html",
    blurb: {
      en: "Cette macro-commande permet un calcul de post-traitement rapide et efficace pour déterminer les spectres de plancher de tout bâtiment après une analyse dynamique sismique en…",
      fr: "Cette macro-commande permet un calcul de post-traitement rapide et efficace pour déterminer les spectres de plancher de tout bâtiment après une analyse dynamique sismique en…",
    },
  },
  {
    id: "u4.32.13",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.32.13/index.html",
    blurb: {
      en: "Cette macro-commande permet d’effectuer des lissages de spectres à partir de tables issues de MACR_SPECTRE ou de nappes définies par l’utilisateur, grâce à des appels à…",
      fr: "Cette macro-commande permet d’effectuer des lissages de spectres à partir de tables issues de MACR_SPECTRE ou de nappes définies par l’utilisateur, grâce à des appels à…",
    },
  },
  {
    id: "u4.32.21",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.32.21/index.html",
    blurb: {
      en: "Construire tout ou partie d’une matrice inter spectrale ou de transfert à partir de fonctions ou d’une table de fonctions.",
      fr: "Construire tout ou partie d’une matrice inter spectrale ou de transfert à partir de fonctions ou d’une table de fonctions.",
    },
  },
  {
    id: "u4.33.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.33.01/index.html",
    blurb: {
      en: "Imprimer le contenu d’objets de type fonction ou liste de réels dans un fichier destiné à un traceur de courbes.",
      fr: "Imprimer le contenu d’objets de type fonction ou liste de réels dans un fichier destiné à un traceur de courbes.",
    },
  },
  {
    id: "u4.33.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.33.02/index.html",
    blurb: {
      en: "Créer une table.",
      fr: "Créer une table.",
    },
  },
  {
    id: "u4.33.03",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.33.03/index.html",
    blurb: {
      en: "Manipuler les données des tables à la manière d'un tableur.",
      fr: "Manipuler les données des tables à la manière d'un tableur.",
    },
  },
  {
    id: "u4.34.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.34.01/index.html",
    blurb: {
      en: "Créer une liste de réels strictement croissante.",
      fr: "Créer une liste de réels strictement croissante.",
    },
  },
  {
    id: "u4.34.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.34.02/index.html",
    blurb: {
      en: "Créer une liste d'entiers strictement croissants.",
      fr: "Créer une liste d'entiers strictement croissants.",
    },
  },
  {
    id: "u4.34.03",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.34.03/index.html",
    blurb: {
      en: "Définir la liste d'instants de calcul, ainsi que sa gestion pour les algorithmes de résolution itératifs (commandes STAT_NON_LINE, DYNA_NON_LINE, MECA_NON_LINE et THER_NON_LINE )",
      fr: "Définir la liste d'instants de calcul, ainsi que sa gestion pour les algorithmes de résolution itératifs (commandes STAT_NON_LINE, DYNA_NON_LINE, MECA_NON_LINE et THER_NON_LINE )",
    },
  },
  {
    id: "u4.34.04",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.34.04/index.html",
    blurb: {
      en: "Créer une liste de réels en raffinant éventuellement autour de valeurs de fréquences renseignées par l'utilisateur.",
      fr: "Créer une liste de réels en raffinant éventuellement autour de valeurs de fréquences renseignées par l'utilisateur.",
    },
  },
  {
    id: "u4.35.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.35.01/index.html",
    blurb: {
      en: "Définir un profil de vitesse d'écoulement fluide le long d'une poutre. Profils correspondants à des profils \"types\" issus de résultats expérimentaux et utilisés dans le cadre…",
      fr: "Définir un profil de vitesse d'écoulement fluide le long d'une poutre. Profils correspondants à des profils \"types\" issus de résultats expérimentaux et utilisés dans le cadre…",
    },
  },
  {
    id: "u4.35.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.35.02/index.html",
    blurb: {
      en: "Créer une fonction constante paramétrée par l’abscisse curviligne. Cette fonction donne la valeur du coefficient de masse ajoutée pour une configuration du type «faisceau de…",
      fr: "Créer une fonction constante paramétrée par l’abscisse curviligne. Cette fonction donne la valeur du coefficient de masse ajoutée pour une configuration du type «faisceau de…",
    },
  },
  {
    id: "u4.36.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.36.01/index.html",
    blurb: {
      en: "Lire sur un fichier externe des fonctions complexes pour créer une matrice interspectrale.",
      fr: "Lire sur un fichier externe des fonctions complexes pour créer une matrice interspectrale.",
    },
  },
  {
    id: "u4.36.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.36.02/index.html",
    blurb: {
      en: "Définir une matrice de densité spectrale (on dit aussi: matrice interspectrale).",
      fr: "Définir une matrice de densité spectrale (on dit aussi: matrice interspectrale).",
    },
  },
  {
    id: "u4.36.03",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.36.03/index.html",
    blurb: {
      en: "Calculer une fonction de densité spectrale à partir d’un signal temporel (fonction du temps). La densité spectrale (ou autospectre) est la moyenne arithmétique d'un certain…",
      fr: "Calculer une fonction de densité spectrale à partir d’un signal temporel (fonction du temps). La densité spectrale (ou autospectre) est la moyenne arithmétique d'un certain…",
    },
  },
  {
    id: "u4.36.04",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.36.04/index.html",
    blurb: {
      en: "Cet opérateur permet de générer des accélérogrammes sismiques artificiels pour des calculs dynamiques transitoires. Il permet de générer deux types de signaux:",
      fr: "Cet opérateur permet de générer des accélérogrammes sismiques artificiels pour des calculs dynamiques transitoires. Il permet de générer deux types de signaux:",
    },
  },
  {
    id: "u4.36.05",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.36.05/index.html",
    blurb: {
      en: "Générer une trajectoire d'un processus stochastique multi-varié mono-dimensionnel (i.e. à plusieurs composantes et indexé sur une seule variable), stationnaire, de moyenne…",
      fr: "Générer une trajectoire d'un processus stochastique multi-varié mono-dimensionnel (i.e. à plusieurs composantes et indexé sur une seule variable), stationnaire, de moyenne…",
    },
  },
  {
    id: "u4.36.08",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.36.08/index.html",
    blurb: {
      en: "Cette macro-commande vise à automatiser le post-traitement des données issues de la commande GENE_ACCE_SEISME. Elle effectue les tâches suivantes:",
      fr: "Cette macro-commande vise à automatiser le post-traitement des données issues de la commande GENE_ACCE_SEISME. Elle effectue les tâches suivantes:",
    },
  },
  {
    id: "u4.36.09",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.36.09/index.html",
    blurb: {
      en: "Cet opérateur permet de définir des champs aléatoires pour prendre en compte la variabilité spatiale des propriétés mécanique comme le module d'Young (par exemple du sol ou du…",
      fr: "Cet opérateur permet de définir des champs aléatoires pour prendre en compte la variabilité spatiale des propriétés mécanique comme le module d'Young (par exemple du sol ou du…",
    },
  },
  {
    id: "u4.41.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.41.01/index.html",
    blurb: {
      en: "Définir le phénomène physique modélisé (mécanique, thermique ou acoustique) et le type d’éléments finis.",
      fr: "Définir le phénomène physique modélisé (mécanique, thermique ou acoustique) et le type d’éléments finis.",
    },
  },
  {
    id: "u4.41.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.41.02/index.html",
    blurb: {
      en: "Cet opérateur permet de redéfinir le mode de répartition des éléments finis d'un modèle pour le calcul parallèle.",
      fr: "Cet opérateur permet de redéfinir le mode de répartition des éléments finis d'un modèle pour le calcul parallèle.",
    },
  },
  {
    id: "u4.41.11",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.41.11/index.html",
    blurb: {
      en: "Créer un nouveau modèle par l’introduction d’éléments finis spécifiques pouvant être traversés par une fissure de type X-FEM à partir d'un modèle existant.",
      fr: "Créer un nouveau modèle par l’introduction d’éléments finis spécifiques pouvant être traversés par une fissure de type X-FEM à partir d'un modèle existant.",
    },
  },
  {
    id: "u4.42.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.42.01/index.html",
    blurb: {
      en: "Affecter à des éléments de structure des caractéristiques géométriques et matérielles. Les données géométriques affectées sont complémentaires aux données de maillage.",
      fr: "Affecter à des éléments de structure des caractéristiques géométriques et matérielles. Les données géométriques affectées sont complémentaires aux données de maillage.",
    },
  },
  {
    id: "u4.42.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.42.02/index.html",
    blurb: {
      en: "Cette macro commande permet de calculer les caractéristiques d’une section transversale de poutre à partir d’un maillage 2D de sa section transversale.",
      fr: "Cette macro commande permet de calculer les caractéristiques d’une section transversale de poutre à partir d’un maillage 2D de sa section transversale.",
    },
  },
  {
    id: "u4.42.03",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.42.03/index.html",
    blurb: {
      en: "Déterminer les caractéristiques matériaux homogénéisées d’une coque multi-couche à partir des caractéristiques de chaque couche. Sont prises en compte les caractéristiques…",
      fr: "Déterminer les caractéristiques matériaux homogénéisées d’une coque multi-couche à partir des caractéristiques de chaque couche. Sont prises en compte les caractéristiques…",
    },
  },
  {
    id: "u4.42.04",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.42.04/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "u4.42.05",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.42.05/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "u4.42.06",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.42.06/index.html",
    blurb: {
      en: "L'opérateur DEFI_GLRC permet de définir les paramètres des modèles de comportement de béton armé GLRC_DAMAGE[R7.01.31] et GLRC_DM[R7.01.32].",
      fr: "L'opérateur DEFI_GLRC permet de définir les paramètres des modèles de comportement de béton armé GLRC_DAMAGE[R7.01.31] et GLRC_DM[R7.01.32].",
    },
  },
  {
    id: "u4.42.07",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.42.07/index.html",
    blurb: {
      en: "L’opérateur DEFI_MATER_GC permet de définir les paramètres de matériaux utilisés pour des études de génie civil.",
      fr: "L’opérateur DEFI_MATER_GC permet de définir les paramètres de matériaux utilisés pour des études de génie civil.",
    },
  },
  {
    id: "u4.42.08",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.42.08/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "u4.43.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.43.01/index.html",
    blurb: {
      en: "Définir les paramètres ou caractéristiques physiques d’un matériau, qui serviront à l’expression des lois de comportement, ou les paramètres associés à la fatigue, au dommage,…",
      fr: "Définir les paramètres ou caractéristiques physiques d’un matériau, qui serviront à l’expression des lois de comportement, ou les paramètres associés à la fatigue, au dommage,…",
    },
  },
  {
    id: "u4.43.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.43.02/index.html",
    blurb: {
      en: "Récupérer les caractéristiques d’un matériau prédéfini dans le Catalogue Matériaux.",
      fr: "Récupérer les caractéristiques d’un matériau prédéfini dans le Catalogue Matériaux.",
    },
  },
  {
    id: "u4.43.03",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.43.03/index.html",
    blurb: {
      en: "Affecter des matériaux à des zones géométriques d’un maillage ou d'un modèle. Il peut y avoir jusqu'à 26 matériaux sur une même maille (ce qui est nécessaire pour les poutres…",
      fr: "Affecter des matériaux à des zones géométriques d’un maillage ou d'un modèle. Il peut y avoir jusqu'à 26 matériaux sur une même maille (ce qui est nécessaire pour les poutres…",
    },
  },
  {
    id: "u4.43.04",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.43.04/index.html",
    blurb: {
      en: "Définir un diagramme TRC (Transformations en Refroidissement Continu) de référence pour les calculs métallurgiques.",
      fr: "Définir un diagramme TRC (Transformations en Refroidissement Continu) de référence pour les calculs métallurgiques.",
    },
  },
  {
    id: "u4.43.06",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.43.06/index.html",
    blurb: {
      en: "Définir le comportement d’un monocristal, d’un polycristal ou d’une poutre multifibres.",
      fr: "Définir le comportement d’un monocristal, d’un polycristal ou d’une poutre multifibres.",
    },
  },
  {
    id: "u4.43.07",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.43.07/index.html",
    blurb: {
      en: "Commande dédiée aux calculs des propriétés thermiques et thermoélastiques linéaires homogénéisées pour des structures hétérogènes périodiques à pas rectangulaire avec des…",
      fr: "Commande dédiée aux calculs des propriétés thermiques et thermoélastiques linéaires homogénéisées pour des structures hétérogènes périodiques à pas rectangulaire avec des…",
    },
  },
  {
    id: "u4.43.08",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.43.08/index.html",
    blurb: {
      en: "Cette commande permet de reconstruire les champs locaux après un calcul 3D dont les paramètres ont été préalablement homogénéisés à l'aide de la commande CALC_MATE_HOMO.",
      fr: "Cette commande permet de reconstruire les champs locaux après un calcul 3D dont les paramètres ont été préalablement homogénéisés à l'aide de la commande CALC_MATE_HOMO.",
    },
  },
  {
    id: "u4.43.09",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.43.09/index.html",
    blurb: {
      en: "Créer un champ d'orientation CHAM_ELEM de la quantité CAMA_R à partir du modèle.",
      fr: "Créer un champ d'orientation CHAM_ELEM de la quantité CAMA_R à partir du modèle.",
    },
  },
  {
    id: "u4.44.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.44.01/index.html",
    blurb: {
      en: "Affecter des chargements et des conditions aux limites sur un modèle mécanique.",
      fr: "Affecter des chargements et des conditions aux limites sur un modèle mécanique.",
    },
  },
  {
    id: "u4.44.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.44.02/index.html",
    blurb: {
      en: "Affecter des chargements et des conditions aux limites thermiques sur un modèle.",
      fr: "Affecter des chargements et des conditions aux limites thermiques sur un modèle.",
    },
  },
  {
    id: "u4.44.03",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.44.03/index.html",
    blurb: {
      en: "Définir un chargement de type \"degrés de liberté imposés\".",
      fr: "Définir un chargement de type \"degrés de liberté imposés\".",
    },
  },
  {
    id: "u4.44.04",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.44.04/index.html",
    blurb: {
      en: "Affecter des conditions aux limites acoustiques constantes. Les valeurs affectées ne dépendent d'aucun paramètre et sont des valeurs complexes.",
      fr: "Affecter des conditions aux limites acoustiques constantes. Les valeurs affectées ne dépendent d'aucun paramètre et sont des valeurs complexes.",
    },
  },
  {
    id: "u4.44.05",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.44.05/index.html",
    blurb: {
      en: "Affecter des chargements et des conditions aux limites sur un modèle de calcul de séchage.",
      fr: "Affecter des chargements et des conditions aux limites sur un modèle de calcul de séchage.",
    },
  },
  {
    id: "u4.44.06",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.44.06/index.html",
    blurb: {
      en: "Affecter des conditions aux limites sur un modèle généralisé.",
      fr: "Affecter des conditions aux limites sur un modèle généralisé.",
    },
  },
  {
    id: "u4.44.11",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.44.11/index.html",
    blurb: {
      en: "Affecter des conditions de contact unilatéral et de frottement en mécanique ou des conditions unilatérales sur les degrés de liberté. On détaille:",
      fr: "Affecter des conditions de contact unilatéral et de frottement en mécanique ou des conditions unilatérales sur les degrés de liberté. On détaille:",
    },
  },
  {
    id: "u4.44.12",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.44.12/index.html",
    blurb: {
      en: "Créer ou enrichir une structure de données resultat à partir de champs aux nœuds ou par éléments. Affectation possible des champs pour différents numéros d’ordre.",
      fr: "Créer ou enrichir une structure de données resultat à partir de champs aux nœuds ou par éléments. Affectation possible des champs pour différents numéros d’ordre.",
    },
  },
  {
    id: "u4.44.13",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.44.13/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "u4.44.21",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.44.21/index.html",
    blurb: {
      en: "Définir la géométrie des lieux de chocs d'une structure filaire. Ces lieux sont définis dans un plan perpendiculaire à la structure modélisée par des poutres POU_D_T et…",
      fr: "Définir la géométrie des lieux de chocs d'une structure filaire. Ces lieux sont définis dans un plan perpendiculaire à la structure modélisée par des poutres POU_D_T et…",
    },
  },
  {
    id: "u4.44.31",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.44.31/index.html",
    blurb: {
      en: "Définir un spectre d’excitation turbulente. Différents types de spectres sont disponibles:",
      fr: "Définir un spectre d’excitation turbulente. Différents types de spectres sont disponibles:",
    },
  },
  {
    id: "u4.50.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.50.01/index.html",
    blurb: {
      en: "Le mot clé facteur SOLVEUR est commun à toutes les commandes qui résolvent des systèmes d'équations linéaires (STAT_NON_LINE, CALC_MODES, ...). Pour résoudre ces systèmes…",
      fr: "Le mot clé facteur SOLVEUR est commun à toutes les commandes qui résolvent des systèmes d'équations linéaires (STAT_NON_LINE, CALC_MODES, ...). Pour résoudre ces systèmes…",
    },
  },
  {
    id: "u4.51.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.51.01/index.html",
    blurb: {
      en: "Résoudre un problème de mécanique statique linéaire.",
      fr: "Résoudre un problème de mécanique statique linéaire.",
    },
  },
  {
    id: "u4.51.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.51.02/index.html",
    blurb: {
      en: "Le rôle de la commande est de calculer des réponses statiques linéaires pour différents cas de charges ou modes de Fourier.",
      fr: "Le rôle de la commande est de calculer des réponses statiques linéaires pour différents cas de charges ou modes de Fourier.",
    },
  },
  {
    id: "u4.51.03",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.51.03/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "u4.51.04",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.51.04/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "u4.51.05",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.51.05/index.html",
    blurb: {
      en: "Le rôle de la commande CALC_MECA_MULT est de calculer les réponses thermomécaniques d’un modèle mécanique pour différents cas de sollicitations thermiques. Pour cela, on…",
      fr: "Le rôle de la commande CALC_MECA_MULT est de calculer les réponses thermomécaniques d’un modèle mécanique pour différents cas de sollicitations thermiques. Pour cela, on…",
    },
  },
  {
    id: "u4.51.10",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.51.10/index.html",
    blurb: {
      en: "Pour la mécanique:",
      fr: "Pour la mécanique:",
    },
  },
  {
    id: "u4.51.11",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.51.11/index.html",
    blurb: {
      en: "Ce document décrit les comportements non linéaires introduits par l’intermédiaire du mot-clé COMPORTEMENT dans les opérateurs de calcul non linéaire: STAT_NON_LINE,…",
      fr: "Ce document décrit les comportements non linéaires introduits par l’intermédiaire du mot-clé COMPORTEMENT dans les opérateurs de calcul non linéaire: STAT_NON_LINE,…",
    },
  },
  {
    id: "u4.51.12",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.51.12/index.html",
    blurb: {
      en: "Calculer l'évolution mécanique d'un point matériel, en quasi-statique non linéaire.",
      fr: "Calculer l'évolution mécanique d'un point matériel, en quasi-statique non linéaire.",
    },
  },
  {
    id: "u4.51.21",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.51.21/index.html",
    blurb: {
      en: "La macro-commande CALC_STABILITE permet de déterminer la stabilité de solutions périodiques obtenues par MODE_NON_LINE, en se basant sur la théorie de Floquet, par un schéma…",
      fr: "La macro-commande CALC_STABILITE permet de déterminer la stabilité de solutions périodiques obtenues par MODE_NON_LINE, en se basant sur la théorie de Floquet, par un schéma…",
    },
  },
  {
    id: "u4.52.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.52.01/index.html",
    blurb: {
      en: "Cette commande permet de compter et de sauvegarder (dans une sd_table) le nombre de valeurs propres comprises dans:",
      fr: "Cette commande permet de compter et de sauvegarder (dans une sd_table) le nombre de valeurs propres comprises dans:",
    },
  },
  {
    id: "u4.52.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.52.02/index.html",
    blurb: {
      en: "Calculer les modes propres de vibrations ou les modes de flambement d'Euler, d'une structure mécanique.",
      fr: "Calculer les modes propres de vibrations ou les modes de flambement d'Euler, d'une structure mécanique.",
    },
  },
  {
    id: "u4.52.05",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.52.05/index.html",
    blurb: {
      en: "Calculer les modes propres d’une structure à symétrie cyclique.",
      fr: "Calculer les modes propres d’une structure à symétrie cyclique.",
    },
  },
  {
    id: "u4.52.06",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.52.06/index.html",
    blurb: {
      en: "L'opérateur MODE_NON_LINE permet de calculer un mode non-linéaire d'un système linéaire conservatif autonome dotées de non-linéarités de choc localisées.",
      fr: "L'opérateur MODE_NON_LINE permet de calculer un mode non-linéaire d'un système linéaire conservatif autonome dotées de non-linéarités de choc localisées.",
    },
  },
  {
    id: "u4.52.11",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.52.11/index.html",
    blurb: {
      en: "Le rôle de la commande est de normer des modes propres en fonction d’un critère choisi par l’utilisateur.",
      fr: "Le rôle de la commande est de normer des modes propres en fonction d’un critère choisi par l’utilisateur.",
    },
  },
  {
    id: "u4.52.12",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.52.12/index.html",
    blurb: {
      en: "Extraire sélectivement des modes des structures de données modale. Les modes sont sélectionnés selon un critère de valeur de paramètre modal supérieur à un certain seuil, puis…",
      fr: "Extraire sélectivement des modes des structures de données modale. Les modes sont sélectionnés selon un critère de valeur de paramètre modal supérieur à un certain seuil, puis…",
    },
  },
  {
    id: "u4.52.13",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.52.13/index.html",
    blurb: {
      en: "Créer une liste d'amortissements modaux calculés selon la règle du RCC-G. Le calcul s'effectue en post-traitement du calcul modal d'une structure de type bâtiment dont le…",
      fr: "Créer une liste d'amortissements modaux calculés selon la règle du RCC-G. Le calcul s'effectue en post-traitement du calcul modal d'une structure de type bâtiment dont le…",
    },
  },
  {
    id: "u4.52.14",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.52.14/index.html",
    blurb: {
      en: "Calculer des modes statiques pour un déplacement, une force ou une accélération unitaire imposé. On peut également calculer des modes de couplages (modes d'interface) pour…",
      fr: "Calculer des modes statiques pour un déplacement, une force ou une accélération unitaire imposé. On peut également calculer des modes de couplages (modes d'interface) pour…",
    },
  },
  {
    id: "u4.52.15",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.52.15/index.html",
    blurb: {
      en: "L’opérateur MAC_MODES permet de calculer une matrice de corrélation entre deux bases modales. Le coefficient de corrélation entre deux vecteurs de cette base est d’autant plus…",
      fr: "L’opérateur MAC_MODES permet de calculer une matrice de corrélation entre deux bases modales. Le coefficient de corrélation entre deux vecteurs de cette base est d’autant plus…",
    },
  },
  {
    id: "u4.52.16",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.52.16/index.html",
    blurb: {
      en: "Estimer la qualité des modèles réduits dans le cadre de l'analyse modale. Cette commande permet de calculer les travaux des efforts résiduels de couplage au niveau de chacune…",
      fr: "Estimer la qualité des modèles réduits dans le cadre de l'analyse modale. Cette commande permet de calculer les travaux des efforts résiduels de couplage au niveau de chacune…",
    },
  },
  {
    id: "u4.52.17",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.52.17/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "u4.52.51",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.52.51/index.html",
    blurb: {
      en: "Calculer les modes et les fréquences du système suivant en fonction des vitesses de rotation,",
      fr: "Calculer les modes et les fréquences du système suivant en fonction des vitesses de rotation,",
    },
  },
  {
    id: "u4.53.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.53.01/index.html",
    blurb: {
      en: "Calculer l'évolution dynamique d'une structure dont le matériau ou la géométrie ont un comportement non linéaire ou de contact/frottement. La syntaxe de cette commande est très…",
      fr: "Calculer l'évolution dynamique d'une structure dont le matériau ou la géométrie ont un comportement non linéaire ou de contact/frottement. La syntaxe de cette commande est très…",
    },
  },
  {
    id: "u4.53.03",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.53.03/index.html",
    blurb: {
      en: "DYNA_VIBRA permet de réaliser un calcul de réponse transitoire ou harmonique sur un modèle linéaire sur base physique ou sur base modale. Il peut également traiter les…",
      fr: "DYNA_VIBRA permet de réaliser un calcul de réponse transitoire ou harmonique sur un modèle linéaire sur base physique ou sur base modale. Il peut également traiter les…",
    },
  },
  {
    id: "u4.53.04",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.53.04/index.html",
    blurb: {
      en: "Cette commande permet de calculer les modes propres réels ou complexes, ainsi que la réponse harmonique (déplacement, vitesse, accélération) d’une structure comportant des…",
      fr: "Cette commande permet de calculer les modes propres réels ou complexes, ainsi que la réponse harmonique (déplacement, vitesse, accélération) d’une structure comportant des…",
    },
  },
  {
    id: "u4.53.05",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.53.05/index.html",
    blurb: {
      en: "DYNA_LINE est l’opérateur unifié permettant de réaliser un calcul de réponse transitoire ou harmonique sur base physique ou généralisée. Il peut également traiter les…",
      fr: "DYNA_LINE est l’opérateur unifié permettant de réaliser un calcul de réponse transitoire ou harmonique sur base physique ou généralisée. Il peut également traiter les…",
    },
  },
  {
    id: "u4.53.22",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.53.22/index.html",
    blurb: {
      en: "Cet opérateur permet de calculer la matrice de densité spectrale de la réponse d’une structure linéaire sous une excitation dont on connaît la matrice de densité spectrale (on…",
      fr: "Cet opérateur permet de calculer la matrice de densité spectrale de la réponse d’une structure linéaire sous une excitation dont on connaît la matrice de densité spectrale (on…",
    },
  },
  {
    id: "u4.53.23",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.53.23/index.html",
    blurb: {
      en: "Calculer la réponse par recombinaison modale d'une structure linéaire à une excitation aléatoire. Cette excitation est définie sous forme d'interspectres de puissance d'efforts…",
      fr: "Calculer la réponse par recombinaison modale d'une structure linéaire à une excitation aléatoire. Cette excitation est définie sous forme d'interspectres de puissance d'efforts…",
    },
  },
  {
    id: "u4.53.31",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.53.31/index.html",
    blurb: {
      en: "Cet opérateur permet de calculer la réponse d’une structure soumise à un mouvement sismique variable en espace à partir d’une fonction de cohérence, de la matrice d’impédance…",
      fr: "Cet opérateur permet de calculer la réponse d’une structure soumise à un mouvement sismique variable en espace à partir d’une fonction de cohérence, de la matrice d’impédance…",
    },
  },
  {
    id: "u4.53.41",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.53.41/index.html",
    blurb: {
      en: "Pour le cas de la dynamique linéaire, il permet d'obtenir les champs solution d'un problème de minimisation d'une fonctionnelle énergétique de type erreur en relation en…",
      fr: "Pour le cas de la dynamique linéaire, il permet d'obtenir les champs solution d'un problème de minimisation d'une fonctionnelle énergétique de type erreur en relation en…",
    },
  },
  {
    id: "u4.53.51",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.53.51/index.html",
    blurb: {
      en: "Cet opérateur permet de calculer la matrice de fonctions de transfert dynamique d'un système mécanique linéaire entre deux points du modèle numérique. Les fonctions de…",
      fr: "Cet opérateur permet de calculer la matrice de fonctions de transfert dynamique d'un système mécanique linéaire entre deux points du modèle numérique. Les fonctions de…",
    },
  },
  {
    id: "u4.54.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.54.01/index.html",
    blurb: {
      en: "Résoudre un problème de thermique linéaire en régime stationnaire ou évolutif.",
      fr: "Résoudre un problème de thermique linéaire en régime stationnaire ou évolutif.",
    },
  },
  {
    id: "u4.54.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.54.02/index.html",
    blurb: {
      en: "Calculer la réponse thermique avec des non linéarités de comportements et de conditions aux limites.",
      fr: "Calculer la réponse thermique avec des non linéarités de comportements et de conditions aux limites.",
    },
  },
  {
    id: "u4.54.03",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.54.03/index.html",
    blurb: {
      en: "Calculer la réponse thermique stationnaire non linéaire avec chargement mobile.",
      fr: "Calculer la réponse thermique stationnaire non linéaire avec chargement mobile.",
    },
  },
  {
    id: "u4.54.04",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.54.04/index.html",
    blurb: {
      en: "Le rôle de la commande est de calculer les réponses thermiques de différents cas de chargement et de les stocker dans une même structure de données résultat. Ces chargements…",
      fr: "Le rôle de la commande est de calculer les réponses thermiques de différents cas de chargement et de les stocker dans une même structure de données résultat. Ces chargements…",
    },
  },
  {
    id: "u4.55.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.55.01/index.html",
    blurb: {
      en: "Factoriser une matrice assemblée ou fabriquer une matrice de pré-conditionnement .",
      fr: "Factoriser une matrice assemblée ou fabriquer une matrice de pré-conditionnement .",
    },
  },
  {
    id: "u4.55.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.55.02/index.html",
    blurb: {
      en: "Résoudre un système d’équations linéaires (méthode directe ou itérative)",
      fr: "Résoudre un système d’équations linéaires (méthode directe ou itérative)",
    },
  },
  {
    id: "u4.55.03",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.55.03/index.html",
    blurb: {
      en: "Supprimer les équations de Lagrange dans une matrice qui en possède.",
      fr: "Supprimer les équations de Lagrange dans une matrice qui en possède.",
    },
  },
  {
    id: "u4.56.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.56.01/index.html",
    blurb: {
      en: "Cet opérateur permet de résoudre les problèmes de séchage (non linéaires) en résolvant l'équation de la chaleur où la concentration en eau $C$ est assimilée à une température.",
      fr: "Cet opérateur permet de résoudre les problèmes de séchage (non linéaires) en résolvant l'équation de la chaleur où la concentration en eau $C$ est assimilée à une température.",
    },
  },
  {
    id: "u4.61.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.61.01/index.html",
    blurb: {
      en: "Calculer des matrices élémentaires que l'on pourra assembler par la commande ASSE_MATRICE.",
      fr: "Calculer des matrices élémentaires que l'on pourra assembler par la commande ASSE_MATRICE.",
    },
  },
  {
    id: "u4.61.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.61.02/index.html",
    blurb: {
      en: "Calculer un ensemble de vecteurs élémentaires que l'on pourra assembler avec ASSE_VECTEUR.",
      fr: "Calculer un ensemble de vecteurs élémentaires que l'on pourra assembler avec ASSE_VECTEUR.",
    },
  },
  {
    id: "u4.61.03",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.61.03/index.html",
    blurb: {
      en: "Calculer le champ aux nœuds correspondant aux degrés de liberté imposés par AFFE_CHAR_CINE.",
      fr: "Calculer le champ aux nœuds correspondant aux degrés de liberté imposés par AFFE_CHAR_CINE.",
    },
  },
  {
    id: "u4.61.11",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.61.11/index.html",
    blurb: {
      en: "Numéroter les inconnues d’un système d’équations linéaires. Cet opérateur \"prépare\" également l’assemblage de la matrice associée à ce système d’équations.",
      fr: "Numéroter les inconnues d’un système d’équations linéaires. Cet opérateur \"prépare\" également l’assemblage de la matrice associée à ce système d’équations.",
    },
  },
  {
    id: "u4.61.21",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.61.21/index.html",
    blurb: {
      en: "Calculer une ou plusieurs matrices assemblées (rigidité, masse, amortissement …) ainsi que un ou plusieurs vecteurs assemblés.",
      fr: "Calculer une ou plusieurs matrices assemblées (rigidité, masse, amortissement …) ainsi que un ou plusieurs vecteurs assemblés.",
    },
  },
  {
    id: "u4.61.22",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.61.22/index.html",
    blurb: {
      en: "Créer une matrice par assemblage de matrices élémentaires.",
      fr: "Créer une matrice par assemblage de matrices élémentaires.",
    },
  },
  {
    id: "u4.61.23",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.61.23/index.html",
    blurb: {
      en: "Construire un champ aux nœuds par assemblage de vecteurs élémentaires.",
      fr: "Construire un champ aux nœuds par assemblage de vecteurs élémentaires.",
    },
  },
  {
    id: "u4.62.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.62.01/index.html",
    blurb: {
      en: "Créer des macro-éléments pour les calculs de \"sous-structuration statique\" ou pour les calculs de \"modification structurale\".",
      fr: "Créer des macro-éléments pour les calculs de \"sous-structuration statique\" ou pour les calculs de \"modification structurale\".",
    },
  },
  {
    id: "u4.62.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.62.02/index.html",
    blurb: {
      en: "Calculer le champ à l'intérieur d'un macro-élément. Deux cas de figure peuvent exister : le macro-élément a été obtenu par *sous-structuration statique* , ou le macro-élément a…",
      fr: "Calculer le champ à l'intérieur d'un macro-élément. Deux cas de figure peuvent exister : le macro-élément a été obtenu par *sous-structuration statique* , ou le macro-élément a…",
    },
  },
  {
    id: "u4.63.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.63.01/index.html",
    blurb: {
      en: "Établir le chargement sismique (forces d’inertie d'entraînement unitaires) pour un calcul de réponse en mouvement relatif par rapport aux mouvements des appuis. Pour une…",
      fr: "Établir le chargement sismique (forces d’inertie d'entraînement unitaires) pour un calcul de réponse en mouvement relatif par rapport aux mouvements des appuis. Pour une…",
    },
  },
  {
    id: "u4.63.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.63.02/index.html",
    blurb: {
      en: "Cet opérateur a pour but de simplifier la mise en œuvre de la méthode Laplace-Temps en permettant la réalisation de calculs non-linéaires avec des impédances produites par MISS3D.",
      fr: "Cet opérateur a pour but de simplifier la mise en œuvre de la méthode Laplace-Temps en permettant la réalisation de calculs non-linéaires avec des impédances produites par MISS3D.",
    },
  },
  {
    id: "u4.63.03",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.63.03/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "u4.63.11",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.63.11/index.html",
    blurb: {
      en: "Projeter des matrices et/ou vecteurs assemblés sur une base modale ou sur une base de RITZ. Les matrices et vecteurs projetés résultats seront utilisés par les algorithmes de…",
      fr: "Projeter des matrices et/ou vecteurs assemblés sur une base modale ou sur une base de RITZ. Les matrices et vecteurs projetés résultats seront utilisés par les algorithmes de…",
    },
  },
  {
    id: "u4.63.12",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.63.12/index.html",
    blurb: {
      en: "Projeter une matrice assemblée sur une base de modes propres mécaniques ou une base de RITZ. La matrice projetée résultat sera utilisée par les algorithmes de calcul en…",
      fr: "Projeter une matrice assemblée sur une base de modes propres mécaniques ou une base de RITZ. La matrice projetée résultat sera utilisée par les algorithmes de calcul en…",
    },
  },
  {
    id: "u4.63.13",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.63.13/index.html",
    blurb: {
      en: "Projeter un vecteur assemblé sur une base de modes propres mécaniques ou une base de Ritz. Le vecteur projeté pourra être utilisé par les algorithmes de calcul en composantes…",
      fr: "Projeter un vecteur assemblé sur une base de modes propres mécaniques ou une base de Ritz. Le vecteur projeté pourra être utilisé par les algorithmes de calcul en composantes…",
    },
  },
  {
    id: "u4.63.14",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.63.14/index.html",
    blurb: {
      en: "Projeter un ou plusieurs spectres de turbulence sur une (ou plusieurs) base(s) modale(s). Les spectres sont définis par l'opérateur DEFI_SPEC_TURB U4.44.31. La (ou les) base(s)…",
      fr: "Projeter un ou plusieurs spectres de turbulence sur une (ou plusieurs) base(s) modale(s). Les spectres sont définis par l'opérateur DEFI_SPEC_TURB U4.44.31. La (ou les) base(s)…",
    },
  },
  {
    id: "u4.63.22",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.63.22/index.html",
    blurb: {
      en: "Calculer la réponse d'une structure dans la base physique. Le calcul est effectué à partir d'un interspectre de réponse modale, en certains nœuds sélectionnés du maillage.",
      fr: "Calculer la réponse d'une structure dans la base physique. Le calcul est effectué à partir d'un interspectre de réponse modale, en certains nœuds sélectionnés du maillage.",
    },
  },
  {
    id: "u4.63.31",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.63.31/index.html",
    blurb: {
      en: "Restituer dans la base physique des résultats en coordonnées généralisées.",
      fr: "Restituer dans la base physique des résultats en coordonnées généralisées.",
    },
  },
  {
    id: "u4.63.32",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.63.32/index.html",
    blurb: {
      en: "Restituer dans la base physique des résultats en coordonnées généralisées.",
      fr: "Restituer dans la base physique des résultats en coordonnées généralisées.",
    },
  },
  {
    id: "u4.63.33",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.63.33/index.html",
    blurb: {
      en: "Restituer dans la base physique de modèles complets des résultats d'évolutions transitoires sur des modèles condensés.",
      fr: "Restituer dans la base physique de modèles complets des résultats d'évolutions transitoires sur des modèles condensés.",
    },
  },
  {
    id: "u4.63.34",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.63.34/index.html",
    blurb: {
      en: "Retour de champs de résultats, en coordonnées généralisées ou dans la base physique, du fréquentiel vers le temporel et inversement, par transformée de Fourier rapide (FFT).",
      fr: "Retour de champs de résultats, en coordonnées généralisées ou dans la base physique, du fréquentiel vers le temporel et inversement, par transformée de Fourier rapide (FFT).",
    },
  },
  {
    id: "u4.63.35",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.63.35/index.html",
    blurb: {
      en: "L'opérateur REST_MODE_NONL permet de restituer dans le domaine temporel ou dans le domaine de Fourier une solution périodique issue d'un calcul avec MODE_NON_LINE.",
      fr: "L'opérateur REST_MODE_NONL permet de restituer dans le domaine temporel ou dans le domaine de Fourier une solution périodique issue d'un calcul avec MODE_NON_LINE.",
    },
  },
  {
    id: "u4.63.36",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.63.36/index.html",
    blurb: {
      en: "Restituer dans la base physique d'une partie des résultats en coordonnées généralisées.",
      fr: "Restituer dans la base physique d'une partie des résultats en coordonnées généralisées.",
    },
  },
  {
    id: "u4.64.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.64.01/index.html",
    blurb: {
      en: "Définir les interfaces d’une structure et leur affecter un type.",
      fr: "Définir les interfaces d’une structure et leur affecter un type.",
    },
  },
  {
    id: "u4.64.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.64.02/index.html",
    blurb: {
      en: "Le but de l'opérateur est de définir:",
      fr: "Le but de l'opérateur est de définir:",
    },
  },
  {
    id: "u4.65.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.65.01/index.html",
    blurb: {
      en: "Définir un macro-élément de sous-structuration dynamique.",
      fr: "Définir un macro-élément de sous-structuration dynamique.",
    },
  },
  {
    id: "u4.65.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.65.02/index.html",
    blurb: {
      en: "Créer la structure globale à partir des sous-structures en sous-structuration dynamique (cf R4.06.02).",
      fr: "Créer la structure globale à partir des sous-structures en sous-structuration dynamique (cf R4.06.02).",
    },
  },
  {
    id: "u4.65.03",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.65.03/index.html",
    blurb: {
      en: "Numéroter les degrés de liberté de la structure globale à partir de la numérotation des sous-structures.",
      fr: "Numéroter les degrés de liberté de la structure globale à partir de la numérotation des sous-structures.",
    },
  },
  {
    id: "u4.65.04",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.65.04/index.html",
    blurb: {
      en: "Assembler la matrice de rigidité ou de masse globale à partir des sous-structures.",
      fr: "Assembler la matrice de rigidité ou de masse globale à partir des sous-structures.",
    },
  },
  {
    id: "u4.65.05",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.65.05/index.html",
    blurb: {
      en: "Projeter les chargements sur la base modale d’une sous-structure.",
      fr: "Projeter les chargements sur la base modale d’une sous-structure.",
    },
  },
  {
    id: "u4.65.11",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.65.11/index.html",
    blurb: {
      en: "Cet opérateur a pour objectif de faciliter la tâche de l'utilisateur pour la création d'un macro-élément dynamique. CREA_ELEM_SSD calcule les vecteurs de base de projection,…",
      fr: "Cet opérateur a pour objectif de faciliter la tâche de l'utilisateur pour la création d'un macro-élément dynamique. CREA_ELEM_SSD calcule les vecteurs de base de projection,…",
    },
  },
  {
    id: "u4.65.12",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.65.12/index.html",
    blurb: {
      en: "Cet opérateur a pour objectif de faciliter la tâche de l'utilisateur pour l'assemblage des macro-éléments dynamiques. Il enchaîne les commandes suivantes: DEFI_MODELE_GENE,…",
      fr: "Cet opérateur a pour objectif de faciliter la tâche de l'utilisateur pour l'assemblage des macro-éléments dynamiques. Il enchaîne les commandes suivantes: DEFI_MODELE_GENE,…",
    },
  },
  {
    id: "u4.66.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.66.01/index.html",
    blurb: {
      en: "Calculer des matrices de masse R4.07.03, d’amortissement ou de rigidité ajoutés.",
      fr: "Calculer des matrices de masse R4.07.03, d’amortissement ou de rigidité ajoutés.",
    },
  },
  {
    id: "u4.66.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.66.02/index.html",
    blurb: {
      en: "Calculer les paramètres modaux d'une structure soumise à un écoulement. Permet de tenir compte des forces fluide-élastiques qui sont représentées par une matrice de transfert…",
      fr: "Calculer les paramètres modaux d'une structure soumise à un écoulement. Permet de tenir compte des forces fluide-élastiques qui sont représentées par une matrice de transfert…",
    },
  },
  {
    id: "u4.66.03",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.66.03/index.html",
    blurb: {
      en: "Cette commande permet de calculer l’effet de surpression hydrodynamique due au mouvement d’entraînement de la structure en analyse sismique où on décompose le mouvement total…",
      fr: "Cette commande permet de calculer l’effet de surpression hydrodynamique due au mouvement d’entraînement de la structure en analyse sismique où on décompose le mouvement total…",
    },
  },
  {
    id: "u4.66.04",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.66.04/index.html",
    blurb: {
      en: "Calculer des champs de potentiel fluide associés à la théorie de la masse ajoutée R4.07.03,",
      fr: "Calculer des champs de potentiel fluide associés à la théorie de la masse ajoutée R4.07.03,",
    },
  },
  {
    id: "u4.66.11",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.66.11/index.html",
    blurb: {
      en: "Calculer de façon plus condensée qu’avec CALC_MATR_AJOU des matrices de masse, d’amortissement ou de rigidité ajoutés R4.07.03. Les matrices sont induites par un fluide…",
      fr: "Calculer de façon plus condensée qu’avec CALC_MATR_AJOU des matrices de masse, d’amortissement ou de rigidité ajoutés R4.07.03. Les matrices sont induites par un fluide…",
    },
  },
  {
    id: "u4.66.21",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.66.21/index.html",
    blurb: {
      en: "Définir la base modale d’une structure sous écoulement. Cette base est obtenue après un calcul de couplage fluide-élastique réalisé à l’aide de l’opérateur CALC_FLUI_STRU…",
      fr: "Définir la base modale d’une structure sous écoulement. Cette base est obtenue après un calcul de couplage fluide-élastique réalisé à l’aide de l’opérateur CALC_FLUI_STRU…",
    },
  },
  {
    id: "u4.67.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.67.01/index.html",
    blurb: {
      en: "Le but de l'opérateur est de construire la base réduite à partir d'un calcul non-linéaire (thermique ou mécanique) ou d'un calcul linéaire paramétrique.",
      fr: "Le but de l'opérateur est de construire la base réduite à partir d'un calcul non-linéaire (thermique ou mécanique) ou d'un calcul linéaire paramétrique.",
    },
  },
  {
    id: "u4.67.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.67.02/index.html",
    blurb: {
      en: "Le but de l'opérateur est d'enrichir un maillage existant par des groupes (de mailles ou de nœuds) qui définissent un sous-domaine appelé domaine réduit d'intégration (RID) .",
      fr: "Le but de l'opérateur est d'enrichir un maillage existant par des groupes (de mailles ou de nœuds) qui définissent un sous-domaine appelé domaine réduit d'intégration (RID) .",
    },
  },
  {
    id: "u4.67.03",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.67.03/index.html",
    blurb: {
      en: "Le but de l'opérateur est de reconstruire les solutions sur un modèle complet à partir d'un modèle réduit.",
      fr: "Le but de l'opérateur est de reconstruire les solutions sur un modèle complet à partir d'un modèle réduit.",
    },
  },
  {
    id: "u4.71.00",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.71.00/index.html",
    blurb: {
      en: "Description des mots-clés d’accès aux champs de grandeurs d’une structure de données de type resultat.",
      fr: "Description des mots-clés d’accès aux champs de grandeurs d’une structure de données de type resultat.",
    },
  },
  {
    id: "u4.71.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.71.02/index.html",
    blurb: {
      en: "Permet de récupérer dans une table les valeurs d’un paramètre d’une structure de données résultat, ou bien, d’extraire une table contenue dans une autre structure de données…",
      fr: "Permet de récupérer dans une table les valeurs d’un paramètre d’une structure de données résultat, ou bien, d’extraire une table contenue dans une autre structure de données…",
    },
  },
  {
    id: "u4.71.03",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.71.03/index.html",
    blurb: {
      en: "Extraire un vecteur de déplacements, vitesses ou accélérations généralisés à partir d’un résultat lui-même en coordonnées généralisées. Leur extraction a lieu pour des…",
      fr: "Extraire un vecteur de déplacements, vitesses ou accélérations généralisés à partir d’un résultat lui-même en coordonnées généralisées. Leur extraction a lieu pour des…",
    },
  },
  {
    id: "u4.71.04",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.71.04/index.html",
    blurb: {
      en: "Extraire des champs au sein d’une structure de données de type resultat.",
      fr: "Extraire des champs au sein d’une structure de données de type resultat.",
    },
  },
  {
    id: "u4.71.05",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.71.05/index.html",
    blurb: {
      en: "Organisme(s): EDF-R&D/AMA",
      fr: "Organisme(s): EDF-R&D/AMA",
    },
  },
  {
    id: "u4.71.06",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.71.06/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "u4.71.07",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.71.07/index.html",
    blurb: {
      en: "Extraction d’un concept résultat sur un ensemble de coupes droites unidimensionnelles à partir du résultat d’un calcul 2D ou 3D.",
      fr: "Extraction d’un concept résultat sur un ensemble de coupes droites unidimensionnelles à partir du résultat d’un calcul 2D ou 3D.",
    },
  },
  {
    id: "u4.72.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.72.01/index.html",
    blurb: {
      en: "Combiner linéairement, avec coefficients réels ou complexes, des concepts de type matr_asse_* .",
      fr: "Combiner linéairement, avec coefficients réels ou complexes, des concepts de type matr_asse_* .",
    },
  },
  {
    id: "u4.72.04",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.72.04/index.html",
    blurb: {
      en: "Créer un champ de type cham_no, carte ou cham_elem. On peut créer un champ :",
      fr: "Créer un champ de type cham_no, carte ou cham_elem. On peut créer un champ :",
    },
  },
  {
    id: "u4.72.05",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.72.05/index.html",
    blurb: {
      en: "Le but de l’opérateur est de projeter les champs d’une structure de données résultat sur un autre maillage. Cette commande peut servir par exemple à transférer sur un maillage…",
      fr: "Le but de l’opérateur est de projeter les champs d’une structure de données résultat sur un autre maillage. Cette commande peut servir par exemple à transférer sur un maillage…",
    },
  },
  {
    id: "u4.72.06",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.72.06/index.html",
    blurb: {
      en: "Effectuer le produit d’une matrice par un vecteur.",
      fr: "Effectuer le produit d’une matrice par un vecteur.",
    },
  },
  {
    id: "u4.73.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.73.01/index.html",
    blurb: {
      en: "Extrapoler des mesures expérimentales sur un modèle numérique en dynamique.",
      fr: "Extrapoler des mesures expérimentales sur un modèle numérique en dynamique.",
    },
  },
  {
    id: "u4.73.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.73.02/index.html",
    blurb: {
      en: "Recaler des résultats de calculs sur des résultats expérimentaux ou sur d’autres résultats de calculs.",
      fr: "Recaler des résultats de calculs sur des résultats expérimentaux ou sur d’autres résultats de calculs.",
    },
  },
  {
    id: "u4.74.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.74.01/index.html",
    blurb: {
      en: "Cet opérateur permet de modifier le repère dans lequel s’expriment des champs portés des éléments de milieu continu et des éléments de structure (coques, plaques, poutres, ...).",
      fr: "Cet opérateur permet de modifier le repère dans lequel s’expriment des champs portés des éléments de milieu continu et des éléments de structure (coques, plaques, poutres, ...).",
    },
  },
  {
    id: "u4.75.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.75.01/index.html",
    blurb: {
      en: "But :",
      fr: "But :",
    },
  },
  {
    id: "u4.81.03",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.81.03/index.html",
    blurb: {
      en: "Calculer un champ élémentaire aux points de Gauss contenant les coordonnées et le poids des points de Gauss.",
      fr: "Calculer un champ élémentaire aux points de Gauss contenant les coordonnées et le poids des points de Gauss.",
    },
  },
  {
    id: "u4.81.04",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.81.04/index.html",
    blurb: {
      en: "Créer ou compléter un résultat en calculant des champs par élément ou aux nœuds (contraintes, déformations, …).",
      fr: "Créer ou compléter un résultat en calculant des champs par élément ou aux nœuds (contraintes, déformations, …).",
    },
  },
  {
    id: "u4.81.05",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.81.05/index.html",
    blurb: {
      en: "Post-traitements spécifiques pour les éléments de structure (coques, poutres, …):",
      fr: "Post-traitements spécifiques pour les éléments de structure (coques, poutres, …):",
    },
  },
  {
    id: "u4.81.06",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.81.06/index.html",
    blurb: {
      en: "Créer ou compléter un résultat en calculant des champs par élément d'erreur de discrétisation.",
      fr: "Créer ou compléter un résultat en calculant des champs par élément d'erreur de discrétisation.",
    },
  },
  {
    id: "u4.81.07",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.81.07/index.html",
    blurb: {
      en: "Calculer l'erreur relative entre une solution obtenue par un calcul éléments finis et une solution analytique de référence en termes d'une norme donnée, dans le but d'évaluer…",
      fr: "Calculer l'erreur relative entre une solution obtenue par un calcul éléments finis et une solution analytique de référence en termes d'une norme donnée, dans le but d'évaluer…",
    },
  },
  {
    id: "u4.81.08",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.81.08/index.html",
    blurb: {
      en: "L'objet de cette commande est de calculer, en post-traitement d'un calcul de mécanique non linéaire élasto-plastique :",
      fr: "L'objet de cette commande est de calculer, en post-traitement d'un calcul de mécanique non linéaire élasto-plastique :",
    },
  },
  {
    id: "u4.81.13",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.81.13/index.html",
    blurb: {
      en: "Extraction dans une table des valeurs d’un résultat sur des lignes de coupe définies par deux points et un intervalle ou des groupes de nœuds.",
      fr: "Extraction dans une table des valeurs d’un résultat sur des lignes de coupe définies par deux points et un intervalle ou des groupes de nœuds.",
    },
  },
  {
    id: "u4.81.21",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.81.21/index.html",
    blurb: {
      en: "Extraire des valeurs de composantes de champs de grandeurs et effectuer des calculs de moyennes et d’invariants. Les valeurs sont relevées sur des nœuds, mailles, lignes…",
      fr: "Extraire des valeurs de composantes de champs de grandeurs et effectuer des calculs de moyennes et d’invariants. Les valeurs sont relevées sur des nœuds, mailles, lignes…",
    },
  },
  {
    id: "u4.81.22",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.81.22/index.html",
    blurb: {
      en: "Calculer des quantités sur tout ou partie de la structure. Les quantités calculées correspondent à des options de calcul particulières de la modélisation affectée.",
      fr: "Calculer des quantités sur tout ou partie de la structure. Les quantités calculées correspondent à des options de calcul particulières de la modélisation affectée.",
    },
  },
  {
    id: "u4.81.23",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.81.23/index.html",
    blurb: {
      en: "Extraire des efforts ou des déformations sur les éléments coques à un instant donné. Ces extractions ont lieu sur des ensembles de points introduits par l'utilisateur par leurs…",
      fr: "Extraire des efforts ou des déformations sur les éléments coques à un instant donné. Ces extractions ont lieu sur des ensembles de points introduits par l'utilisateur par leurs…",
    },
  },
  {
    id: "u4.81.24",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.81.24/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u4.81.41",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.81.41/index.html",
    blurb: {
      en: "L'objet de cette commande est de calculer, en post-traitement d'un calcul de mécanique non linéaire élasto-plastique, la probabilité de clivage issue du modèle de Bordet ainsi…",
      fr: "L'objet de cette commande est de calculer, en post-traitement d'un calcul de mécanique non linéaire élasto-plastique, la probabilité de clivage issue du modèle de Bordet ainsi…",
    },
  },
  {
    id: "u4.81.42",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.81.42/index.html",
    blurb: {
      en: "Calculer les densités de ferraillage dans des éléments coques et plaques en fonction des sollicitations : les efforts généralisés, préalablement obtenus par l'option EFGE_ELNO.",
      fr: "Calculer les densités de ferraillage dans des éléments coques et plaques en fonction des sollicitations : les efforts généralisés, préalablement obtenus par l'option EFGE_ELNO.",
    },
  },
  {
    id: "u4.81.43",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.81.43/index.html",
    blurb: {
      en: "Compléter un résultat en calculant un champ nodal correspondant à la densité des efforts normaux et tangentiels d'interface sur une zone définie. L'amplitude de ces efforts est…",
      fr: "Compléter un résultat en calculant un champ nodal correspondant à la densité des efforts normaux et tangentiels d'interface sur une zone définie. L'amplitude de ces efforts est…",
    },
  },
  {
    id: "u4.81.44",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.81.44/index.html",
    blurb: {
      en: "Le but de cet opérateur est de calculer les densités de ferraillage dans des éléments surfaciques (2D) et linéiques (1D) en fonction des sollicitations pour plusieurs…",
      fr: "Le but de cet opérateur est de calculer les densités de ferraillage dans des éléments surfaciques (2D) et linéiques (1D) en fonction des sollicitations pour plusieurs…",
    },
  },
  {
    id: "u4.81.45",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.81.45/index.html",
    blurb: {
      en: "Le but de cette macro-commande est de combiner différentes grandeurs physiques à la suite de calculs aux éléments finis réalisés en amont. Cette commande ne réalisera que des…",
      fr: "Le but de cette macro-commande est de combiner différentes grandeurs physiques à la suite de calculs aux éléments finis réalisés en amont. Cette commande ne réalisera que des…",
    },
  },
  {
    id: "u4.81.46",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.81.46/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "u4.81.47",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.81.47/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "u4.81.52",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.81.52/index.html",
    blurb: {
      en: "Procéder à des post-traitements des tables de résultats issues des opérateurs CALC_Get de paramètres matériaux pour le calcul de facteurs de marges.",
      fr: "Procéder à des post-traitements des tables de résultats issues des opérateurs CALC_Get de paramètres matériaux pour le calcul de facteurs de marges.",
    },
  },
  {
    id: "u4.81.53",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.81.53/index.html",
    blurb: {
      en: "Création d'un tableau représentant des coupes droites unidimensionnelles. Ce tableau décrit les coupes à l'aide de leurs extrémités. On impose aux extrémités d'être localisées…",
      fr: "Création d'un tableau représentant des coupes droites unidimensionnelles. Ce tableau décrit les coupes à l'aide de leurs extrémités. On impose aux extrémités d'être localisées…",
    },
  },
  {
    id: "u4.82.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.82.01/index.html",
    blurb: {
      en: "Définir les éléments géométriques relatifs à une fissure, notamment le fond de fissure et les lèvres supérieure et inférieure de cette fissure, dans un maillage 2D ou 3D.",
      fr: "Définir les éléments géométriques relatifs à une fissure, notamment le fond de fissure et les lèvres supérieure et inférieure de cette fissure, dans un maillage 2D ou 3D.",
    },
  },
  {
    id: "u4.82.03",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.82.03/index.html",
    blurb: {
      en: "Cet opérateur calcule les grandeurs de mécanique de la rupture suivantes, en 2D et en 3D:",
      fr: "Cet opérateur calcule les grandeurs de mécanique de la rupture suivantes, en 2D et en 3D:",
    },
  },
  {
    id: "u4.82.04",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.82.04/index.html",
    blurb: {
      en: "Procéder à des post-traitements des tables de résultats issues des opérateurs CALC_G et POST_K1_K2_K3.",
      fr: "Procéder à des post-traitements des tables de résultats issues des opérateurs CALC_G et POST_K1_K2_K3.",
    },
  },
  {
    id: "u4.82.05",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.82.05/index.html",
    blurb: {
      en: "Calculer les facteurs d’intensité des contraintes en 2D et 3D .",
      fr: "Calculer les facteurs d’intensité des contraintes en 2D et 3D .",
    },
  },
  {
    id: "u4.82.06",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.82.06/index.html",
    blurb: {
      en: "Recaler les paramètres du modèle de WEIBULL sur des données expérimentales. Ces données sont constituées d’une (ou plusieurs) liste d’instants de rupture déterminés…",
      fr: "Recaler les paramètres du modèle de WEIBULL sur des données expérimentales. Ces données sont constituées d’une (ou plusieurs) liste d’instants de rupture déterminés…",
    },
  },
  {
    id: "u4.82.07",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.82.07/index.html",
    blurb: {
      en: "Analyse de nocivité de défaut par la méthode Kcp correction β pour un défaut semi-elliptique situé sous le revêtement des cuves des réacteurs à eau pressurisée.",
      fr: "Analyse de nocivité de défaut par la méthode Kcp correction β pour un défaut semi-elliptique situé sous le revêtement des cuves des réacteurs à eau pressurisée.",
    },
  },
  {
    id: "u4.82.08",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.82.08/index.html",
    blurb: {
      en: "Définir une fissure ou un interface 2D ou 3D par le biais de fonctions de niveaux.",
      fr: "Définir une fissure ou un interface 2D ou 3D par le biais de fonctions de niveaux.",
    },
  },
  {
    id: "u4.82.09",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.82.09/index.html",
    blurb: {
      en: "L'objet de cette macro-commande est de calculer, en post-traitement d'un calcul de mécanique non linéaire élasto-plastique, le paramètre de mécanique de la rupture énergétique…",
      fr: "L'objet de cette macro-commande est de calculer, en post-traitement d'un calcul de mécanique non linéaire élasto-plastique, le paramètre de mécanique de la rupture énergétique…",
    },
  },
  {
    id: "u4.82.10",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.82.10/index.html",
    blurb: {
      en: "Cet opérateur calcule les grandeurs de mécanique de la rupture suivantes, en 2D et en 3D pour des fissures non maillées (méthode X-FEM):",
      fr: "Cet opérateur calcule les grandeurs de mécanique de la rupture suivantes, en 2D et en 3D pour des fissures non maillées (méthode X-FEM):",
    },
  },
  {
    id: "u4.82.11",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.82.11/index.html",
    blurb: {
      en: "Le but de l’opérateur PROPA_FISS est de faire propager une fissure, cette fissure étant définie avec la méthode X-FEM. Trois types de méthodes sont disponibles:",
      fr: "Le but de l’opérateur PROPA_FISS est de faire propager une fissure, cette fissure étant définie avec la méthode X-FEM. Trois types de méthodes sont disponibles:",
    },
  },
  {
    id: "u4.82.21",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.82.21/index.html",
    blurb: {
      en: "Créer le maillage fissuré d’une structure selon la méthode X-FEM.",
      fr: "Créer le maillage fissuré d’une structure selon la méthode X-FEM.",
    },
  },
  {
    id: "u4.82.22",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.82.22/index.html",
    blurb: {
      en: "Créer une SD Résultat contenant les champs à post-traiter de la méthode X-FEM.",
      fr: "Créer une SD Résultat contenant les champs à post-traiter de la méthode X-FEM.",
    },
  },
  {
    id: "u4.82.30",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.82.30/index.html",
    blurb: {
      en: "Calculer les facteurs d’intensité des contraintes d’un problème dynamique transitoire résolu par décomposition sur une base modale.",
      fr: "Calculer les facteurs d’intensité des contraintes d’un problème dynamique transitoire résolu par décomposition sur une base modale.",
    },
  },
  {
    id: "u4.82.41",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.82.41/index.html",
    blurb: {
      en: "This operator aims at calculating the modified *J* -integral in 3D (‘3D’modeling) using the domain integral method based on the work Rice 1 (standard or without initial state)…",
      fr: "This operator aims at calculating the modified *J* -integral in 3D (‘3D’modeling) using the domain integral method based on the work Rice 1 (standard or without initial state)…",
    },
  },
  {
    id: "u4.83.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.83.01/index.html",
    blurb: {
      en: "Calculer, en un point, le dommage de fatigue d’une structure soumise à une histoire de chargement.",
      fr: "Calculer, en un point, le dommage de fatigue d’une structure soumise à une histoire de chargement.",
    },
  },
  {
    id: "u4.83.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.83.02/index.html",
    blurb: {
      en: "Calculer un champ de dommage de fatigue subi par une structure ; un plan critique dans lequel le cisaillement est maximal ; ou une amplitude maximale de vibration admissible.",
      fr: "Calculer un champ de dommage de fatigue subi par une structure ; un plan critique dans lequel le cisaillement est maximal ; ou une amplitude maximale de vibration admissible.",
    },
  },
  {
    id: "u4.83.11",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.83.11/index.html",
    blurb: {
      en: "Vérifier des critères du RCC-M. Il s'agit notamment :",
      fr: "Vérifier des critères du RCC-M. Il s'agit notamment :",
    },
  },
  {
    id: "u4.83.31",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.83.31/index.html",
    blurb: {
      en: "Recombiner les modes de FOURIER d'une structure de données resultat dans des directions particulières. Les modes sont produits pour un modèle 'AXIS_FOURIER' par la macro…",
      fr: "Recombiner les modes de FOURIER d'une structure de données resultat dans des directions particulières. Les modes sont produits pour un modèle 'AXIS_FOURIER' par la macro…",
    },
  },
  {
    id: "u4.84.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.84.01/index.html",
    blurb: {
      en: "Calculer la réponse à un chargement sismique, via l’approche modale spectrale, basée sur le cumul des réponses modales, sous hypothèse de comportement linéaire élastique.…",
      fr: "Calculer la réponse à un chargement sismique, via l’approche modale spectrale, basée sur le cumul des réponses modales, sous hypothèse de comportement linéaire élastique.…",
    },
  },
  {
    id: "u4.84.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.84.02/index.html",
    blurb: {
      en: "Post-traiter les résultats en coordonnées généralisées produits par DYNA_VIBRA. Deux options sont disponibles: post traitement des non linéarités de choc ou des relations…",
      fr: "Post-traiter les résultats en coordonnées généralisées produits par DYNA_VIBRA. Deux options sont disponibles: post traitement des non linéarités de choc ou des relations…",
    },
  },
  {
    id: "u4.84.03",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.84.03/index.html",
    blurb: {
      en: "Calculer le dommage de fatigue subi par une structure soumise à une sollicitation de type aléatoire.",
      fr: "Calculer le dommage de fatigue subi par une structure soumise à une sollicitation de type aléatoire.",
    },
  },
  {
    id: "u4.84.04",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.84.04/index.html",
    blurb: {
      en: "POST_DYNA_ALEA permet d’effectuer deux types de post-traitement à l’issue d’un calcul de dynamique stochastique:",
      fr: "POST_DYNA_ALEA permet d’effectuer deux types de post-traitement à l’issue d’un calcul de dynamique stochastique:",
    },
  },
  {
    id: "u4.84.05",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.84.05/index.html",
    blurb: {
      en: "Calculer volume et profondeur d’usure d’après la puissance d’usure.",
      fr: "Calculer volume et profondeur d’usure d’après la puissance d’usure.",
    },
  },
  {
    id: "u4.84.11",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.84.11/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u4.84.21",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.84.21/index.html",
    blurb: {
      en: "Créer un nouveau résultat de forces nodales complémentaires à utiliser dans la commande DYNA_VIBRA sous le mot-clé EXCIT_RESU.",
      fr: "Créer un nouveau résultat de forces nodales complémentaires à utiliser dans la commande DYNA_VIBRA sous le mot-clé EXCIT_RESU.",
    },
  },
  {
    id: "u4.84.31",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.84.31/index.html",
    blurb: {
      en: "Caractériser la variation des caractéristiques mécaniques de couches de sol stratifié au cours d'un séisme à partir de leur niveau de déformation de cisaillement.",
      fr: "Caractériser la variation des caractéristiques mécaniques de couches de sol stratifié au cours d'un séisme à partir de leur niveau de déformation de cisaillement.",
    },
  },
  {
    id: "u4.84.32",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.84.32/index.html",
    blurb: {
      en: "Produire une charge utilisable dans les opérateurs de résolution dynamique DYNA_VIBRA et DYNA_NON_LINE pour pouvoir prendre en compte des charges sismiques aux frontières de…",
      fr: "Produire une charge utilisable dans les opérateurs de résolution dynamique DYNA_VIBRA et DYNA_NON_LINE pour pouvoir prendre en compte des charges sismiques aux frontières de…",
    },
  },
  {
    id: "u4.84.44",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.84.44/index.html",
    blurb: {
      en: "Cette commande permet de calculer la valeur d'un critère ${r}_{u}$ évaluant les zones de liquéfaction dans un ouvrage géotechnique, modélisé par un milieu poreux saturé. Quatre…",
      fr: "Cette commande permet de calculer la valeur d'un critère ${r}_{u}$ évaluant les zones de liquéfaction dans un ouvrage géotechnique, modélisé par un milieu poreux saturé. Quatre…",
    },
  },
  {
    id: "u4.84.45",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.84.45/index.html",
    blurb: {
      en: "Vérifier la stabilité d'un ouvrage en remblai en 2D (digue/barrage) selon le critère de déplacement horizontal maximal admissible lors d'un chargement sismique via la méthode…",
      fr: "Vérifier la stabilité d'un ouvrage en remblai en 2D (digue/barrage) selon le critère de déplacement horizontal maximal admissible lors d'un chargement sismique via la méthode…",
    },
  },
  {
    id: "u4.84.46",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.84.46/index.html",
    blurb: {
      en: "L’objectif de cette macro-commande est d’effectuer des post-traitements de calculs élastiques linéaires, rendant compte du comportement élasto-plastique des lignes de…",
      fr: "L’objectif de cette macro-commande est d’effectuer des post-traitements de calculs élastiques linéaires, rendant compte du comportement élasto-plastique des lignes de…",
    },
  },
  {
    id: "u4.84.47",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.84.47/index.html",
    blurb: {
      en: "Vérifier la stabilité statique des ouvrages en remblai modélisés en 2D, comme les barrages en remblai, les talus et les digues autour des réservoirs, *etc*.",
      fr: "Vérifier la stabilité statique des ouvrages en remblai modélisés en 2D, comme les barrages en remblai, les talus et les digues autour des réservoirs, *etc*.",
    },
  },
  {
    id: "u4.85.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.85.01/index.html",
    blurb: {
      en: "Calcule l’évolution métallurgique associée à une histoire thermique.",
      fr: "Calcule l’évolution métallurgique associée à une histoire thermique.",
    },
  },
  {
    id: "u4.86.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.86.01/index.html",
    blurb: {
      en: "La commande POST_ENDO_FISS effectue un post-traitement sur un résultat issu de la mécanique des milieux continus. Le but est de trouver la courbe qui représente la fissure à…",
      fr: "La commande POST_ENDO_FISS effectue un post-traitement sur un résultat issu de la mécanique des milieux continus. Le but est de trouver la courbe qui représente la fissure à…",
    },
  },
  {
    id: "u4.86.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.86.02/index.html",
    blurb: {
      en: "Cette macro-commande permet de réaliser les deux types de post-traitements suivants:",
      fr: "Cette macro-commande permet de réaliser les deux types de post-traitements suivants:",
    },
  },
  {
    id: "u4.90.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.90.01/index.html",
    blurb: {
      en: "Lancement de la macro-commande CALC_ESSAI, qui permet de lancer des calculs d’identification et d’expansion sur des structures filaires filaires et de lancer des calculs de…",
      fr: "Lancement de la macro-commande CALC_ESSAI, qui permet de lancer des calculs d’identification et d’expansion sur des structures filaires filaires et de lancer des calculs de…",
    },
  },
  {
    id: "u4.90.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.90.02/index.html",
    blurb: {
      en: "La macro-commande MACRO_EXPANS permet de réaliser l’expansion de données expérimentales sur un modèle numérique à partir d’une base d’expansion. Elle consiste en la succession…",
      fr: "La macro-commande MACRO_EXPANS permet de réaliser l’expansion de données expérimentales sur un modèle numérique à partir d’une base d’expansion. Elle consiste en la succession…",
    },
  },
  {
    id: "u4.90.03",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.90.03/index.html",
    blurb: {
      en: "La macro-commande OBSERVATION utilise les opérateurs PROJ_CHAMP, CREA_CHAMP, CREA_RESU, MODI_REPERE et POST_RELEVE_T pour:",
      fr: "La macro-commande OBSERVATION utilise les opérateurs PROJ_CHAMP, CREA_CHAMP, CREA_RESU, MODI_REPERE et POST_RELEVE_T pour:",
    },
  },
  {
    id: "u4.90.11",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.90.11/index.html",
    blurb: {
      en: "Macro-commande dédiée aux assemblages combustibles. Le but est d'évaluer:",
      fr: "Macro-commande dédiée aux assemblages combustibles. Le but est d'évaluer:",
    },
  },
  {
    id: "u4.90.12",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.90.12/index.html",
    blurb: {
      en: "Macro-commande dédiée au post-traitement de CALC_MAC3COEUR., pour extraire au format tableau les valeurs ou des analyses du résultat.",
      fr: "Macro-commande dédiée au post-traitement de CALC_MAC3COEUR., pour extraire au format tableau les valeurs ou des analyses du résultat.",
    },
  },
  {
    id: "u4.90.13",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.90.13/index.html",
    blurb: {
      en: "Macro-commande permettant de définir le chargement d'un cœur à partir de résultats antérieurs.",
      fr: "Macro-commande permettant de définir le chargement d'un cœur à partir de résultats antérieurs.",
    },
  },
  {
    id: "u4.90.21",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.90.21/index.html",
    blurb: {
      en: "Cette macro-commande permet de simuler pour un point matériel différents trajets de chargement caractéristiques d'essais géomécaniques, et de post-traiter les résultats…",
      fr: "Cette macro-commande permet de simuler pour un point matériel différents trajets de chargement caractéristiques d'essais géomécaniques, et de post-traiter les résultats…",
    },
  },
  {
    id: "u4.91.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.91.01/index.html",
    blurb: {
      en: "Écrire le maillage ou les résultats d’un calcul dans un fichier au format 'RESULTAT' ou le maillage au format 'ASTER'.",
      fr: "Écrire le maillage ou les résultats d’un calcul dans un fichier au format 'RESULTAT' ou le maillage au format 'ASTER'.",
    },
  },
  {
    id: "u4.91.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.91.02/index.html",
    blurb: {
      en: "Ecrire le résultat d'un calcul dynamique en variables généralisées sur un fichier, au format 'RESULTAT'.",
      fr: "Ecrire le résultat d'un calcul dynamique en variables généralisées sur un fichier, au format 'RESULTAT'.",
    },
  },
  {
    id: "u4.91.03",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.91.03/index.html",
    blurb: {
      en: "Imprimer le contenu d'une table dans un fichier.",
      fr: "Imprimer le contenu d'une table dans un fichier.",
    },
  },
  {
    id: "u4.91.04",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.91.04/index.html",
    blurb: {
      en: "Imprimersous une forme visualisable des champs de «données»à partir de concepts affectées par l’utilisateur avec les commandes AFFE_MATERIAU, AFFE_CARA_ELEM et AFFE_CHAR_MECA.",
      fr: "Imprimersous une forme visualisable des champs de «données»à partir de concepts affectées par l’utilisateur avec les commandes AFFE_MATERIAU, AFFE_CARA_ELEM et AFFE_CHAR_MECA.",
    },
  },
  {
    id: "u4.91.11",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.91.11/index.html",
    blurb: {
      en: "Imprimer tous les objets JEVEUX qui constituent un concept existant.",
      fr: "Imprimer tous les objets JEVEUX qui constituent un concept existant.",
    },
  },
  {
    id: "u4.91.12",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.91.12/index.html",
    blurb: {
      en: "Imprimer la liste des champs et des composantes de ces champs présents dans une structure de donnée résultat.",
      fr: "Imprimer la liste des champs et des composantes de ces champs présents dans une structure de donnée résultat.",
    },
  },
  {
    id: "u4.91.21",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.91.21/index.html",
    blurb: {
      en: "Imprimer le contenu des objets créés par le Gestionnaire de mémoire JEVEUX. Utile pour la maintenance et le déverminage des nouveaux développements.",
      fr: "Imprimer le contenu des objets créés par le Gestionnaire de mémoire JEVEUX. Utile pour la maintenance et le déverminage des nouveaux développements.",
    },
  },
  {
    id: "u4.92.01",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.92.01/index.html",
    blurb: {
      en: "Comparer une valeur extraite d’une structure de données à une valeur de référence fournie par l’utilisateur.",
      fr: "Comparer une valeur extraite d’une structure de données à une valeur de référence fournie par l’utilisateur.",
    },
  },
  {
    id: "u4.92.02",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.92.02/index.html",
    blurb: {
      en: "Extraire une valeur numérique ou un attribut d’une fonction pour comparaison à une valeur de référence. La fonction est une structure de données du type fonction ou nappe.",
      fr: "Extraire une valeur numérique ou un attribut d’une fonction pour comparaison à une valeur de référence. La fonction est une structure de données du type fonction ou nappe.",
    },
  },
  {
    id: "u4.92.03",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.92.03/index.html",
    blurb: {
      en: "Tester une \"cellule\" (ou une colonne entière) d'un concept de type table.",
      fr: "Tester une \"cellule\" (ou une colonne entière) d'un concept de type table.",
    },
  },
  {
    id: "u4.92.04",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.92.04/index.html",
    blurb: {
      en: "Cette macro-commande permet de tester la non régression de fichiers produits par les commandes Code_Aster, principalement IMPR_RESU, mais on peut l’utiliser sur n’importe quel…",
      fr: "Cette macro-commande permet de tester la non régression de fichiers produits par les commandes Code_Aster, principalement IMPR_RESU, mais on peut l’utiliser sur n’importe quel…",
    },
  },
  {
    id: "u4.92.06",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.92.06/index.html",
    blurb: {
      en: "Cette macro-commande permet de tester les lois de comportement mécaniques du point de vue de la robustesse et de la fiabilité :",
      fr: "Cette macro-commande permet de tester les lois de comportement mécaniques du point de vue de la robustesse et de la fiabilité :",
    },
  },
  {
    id: "u4.92.11",
    part: "U4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u4/u4.92.11/index.html",
    blurb: {
      en: "Écrire un \"morceau de fichier\" pour vérifier la non-régression ultérieure du code.",
      fr: "Écrire un \"morceau de fichier\" pour vérifier la non-régression ultérieure du code.",
    },
  },
  {
    id: "u7.00.01",
    part: "U7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u7/u7.00.01/index.html",
    blurb: {
      en: "Le but de cet opérateur est d'exécuter un logiciel externe sur la machine locale. Cela peut être n'importe quel programme ou script exécutable.",
      fr: "Le but de cet opérateur est d'exécuter un logiciel externe sur la machine locale. Cela peut être n'importe quel programme ou script exécutable.",
    },
  },
  {
    id: "u7.01.01",
    part: "U7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u7/u7.01.01/index.html",
    blurb: {
      en: "Cette commande est dépréciée.",
      fr: "Cette commande est dépréciée.",
    },
  },
  {
    id: "u7.01.11",
    part: "U7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u7/u7.01.11/index.html",
    blurb: {
      en: "Cette commande est dépréciée.",
      fr: "Cette commande est dépréciée.",
    },
  },
  {
    id: "u7.01.31",
    part: "U7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u7/u7.01.31/index.html",
    blurb: {
      en: "Cette commande est dépréciée.",
      fr: "Cette commande est dépréciée.",
    },
  },
  {
    id: "u7.02.01",
    part: "U7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u7/u7.02.01/index.html",
    blurb: {
      en: "Lire des champs et les stocker dans une structure de données de type resultat",
      fr: "Lire des champs et les stocker dans une structure de données de type resultat",
    },
  },
  {
    id: "u7.02.02",
    part: "U7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u7/u7.02.02/index.html",
    blurb: {
      en: "Lire un champ dans un fichier au format MED et le stocker dans un concept de type champ.",
      fr: "Lire un champ dans un fichier au format MED et le stocker dans un concept de type champ.",
    },
  },
  {
    id: "u7.02.03",
    part: "U7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u7/u7.02.03/index.html",
    blurb: {
      en: "Lire un fichier contenant une table.",
      fr: "Lire un fichier contenant une table.",
    },
  },
  {
    id: "u7.02.11",
    part: "U7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u7/u7.02.11/index.html",
    blurb: {
      en: "Lire le fichier de résultats au format IDEAS produit par le logiciel EUROPLEXUS.",
      fr: "Lire le fichier de résultats au format IDEAS produit par le logiciel EUROPLEXUS.",
    },
  },
  {
    id: "u7.02.32",
    part: "U7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u7/u7.02.32/index.html",
    blurb: {
      en: "Construire une matrice assemblée projetée sur une base de RITZ à partir d’un fichier d’impédances de sol calculées par le logiciel MISS3D. La matrice projetée résultat sera…",
      fr: "Construire une matrice assemblée projetée sur une base de RITZ à partir d’un fichier d’impédances de sol calculées par le logiciel MISS3D. La matrice projetée résultat sera…",
    },
  },
  {
    id: "u7.02.33",
    part: "U7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u7/u7.02.33/index.html",
    blurb: {
      en: "Construire un vecteur assemblé projeté sur une base de RITZ à partir d’un fichier de forces sismiques de sol calculées par le logiciel MISS3D. Le vecteur projeté résultat sera…",
      fr: "Construire un vecteur assemblé projeté sur une base de RITZ à partir d’un fichier de forces sismiques de sol calculées par le logiciel MISS3D. Le vecteur projeté résultat sera…",
    },
  },
  {
    id: "u7.02.34",
    part: "U7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u7/u7.02.34/index.html",
    blurb: {
      en: "Produire une table contenant des informations nécessaires à la description d'un fichier de sol pour le logiciel MISS3D.",
      fr: "Produire une table contenant des informations nécessaires à la description d'un fichier de sol pour le logiciel MISS3D.",
    },
  },
  {
    id: "u7.03.01",
    part: "U7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u7/u7.03.01/index.html",
    blurb: {
      en: "Adapter un maillage avec le logiciel HOMARD.",
      fr: "Adapter un maillage avec le logiciel HOMARD.",
    },
  },
  {
    id: "u7.03.02",
    part: "U7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u7/u7.03.02/index.html",
    blurb: {
      en: "Donner des informations sur la qualité d’un maillage.",
      fr: "Donner des informations sur la qualité d’un maillage.",
    },
  },
  {
    id: "u7.03.03",
    part: "U7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u7/u7.03.03/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u7.03.04",
    part: "U7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u7/u7.03.04/index.html",
    blurb: {
      en: "Construire une bibliothèque de loi de comportement à partir d'un fichier `*.mfront`.",
      fr: "Construire une bibliothèque de loi de comportement à partir d'un fichier `*.mfront`.",
    },
  },
  {
    id: "u7.03.12",
    part: "U7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u7/u7.03.12/index.html",
    blurb: {
      en: "L'objet de cette commande est de préparer les données, d'exécuter le logiciel Miss3D, puis de post-traiter les résultats de celui-ci pour produire des concepts exploitables…",
      fr: "L'objet de cette commande est de préparer les données, d'exécuter le logiciel Miss3D, puis de post-traiter les résultats de celui-ci pour produire des concepts exploitables…",
    },
  },
  {
    id: "u7.03.41",
    part: "U7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u7/u7.03.41/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "u7.03.51",
    part: "U7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u7/u7.03.51/index.html",
    blurb: {
      en: "Effectuer le calcul du critère d'erreur préalable à un raffinement de maillage pour les fissures et interfaces modélisées par la méthode X-FEM.",
      fr: "Effectuer le calcul du critère d'erreur préalable à un raffinement de maillage pour les fissures et interfaces modélisées par la méthode X-FEM.",
    },
  },
  {
    id: "u7.03.71",
    part: "U7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u7/u7.03.71/index.html",
    blurb: {
      en: "L'objet de cette macro-commande est de raffiner un maillage bidimensionnel comportant un défaut représenté par une entaille; le raffinement est effectué dans la zone en aval de…",
      fr: "L'objet de cette macro-commande est de raffiner un maillage bidimensionnel comportant un défaut représenté par une entaille; le raffinement est effectué dans la zone en aval de…",
    },
  },
  {
    id: "u7.04.33",
    part: "U7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u7/u7.04.33/index.html",
    blurb: {
      en: "Imprimer aux formats IDEAS et MISS_3D une structure de données macr_elem_dyna.",
      fr: "Imprimer aux formats IDEAS et MISS_3D une structure de données macr_elem_dyna.",
    },
  },
  {
    id: "u7.04.51",
    part: "U7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u7/u7.04.51/index.html",
    blurb: {
      en: "Écrire le résultat d’un calcul mécanique ou thermomécanique ASTER au format OAR.",
      fr: "Écrire le résultat d’un calcul mécanique ou thermomécanique ASTER au format OAR.",
    },
  },
  {
    id: "u7.05.01",
    part: "U7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u7/u7.05.01/index.html",
    blurb: {
      en: "Organisme(s): EDF-R&D/AMA",
      fr: "Organisme(s): EDF-R&D/AMA",
    },
  },
  {
    id: "u7.05.21",
    part: "U7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u7/u7.05.21/index.html",
    blurb: {
      en: "Écrire le résultat d’un calcul dans un fichier au format MED. On décrit l’ensemble des mots clés de la commande IMPR_RESU U4.91.01 pour ce qui concerne ce format de sortie…",
      fr: "Écrire le résultat d’un calcul dans un fichier au format MED. On décrit l’ensemble des mots clés de la commande IMPR_RESU U4.91.01 pour ce qui concerne ce format de sortie…",
    },
  },
  {
    id: "u7.05.32",
    part: "U7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/u7/u7.05.32/index.html",
    blurb: {
      en: "Écrire un champ de grandeur ou un concept résultat au format 'GMSH'.",
      fr: "Écrire un champ de grandeur ou un concept résultat au format 'GMSH'.",
    },
  },
  {
    id: "r0.00.01",
    part: "R0",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r0/r0.00.01/index.html",
    blurb: {
      en: "Ce document est un inventaire des documents de référence. Ceux-ci sont regroupés par fonctionnalités .",
      fr: "Ce document est un inventaire des documents de référence. Ceux-ci sont regroupés par fonctionnalités .",
    },
  },
  {
    id: "r0.00.02",
    part: "R0",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r0/r0.00.02/index.html",
    blurb: {
      en: "Ce document constitue un inventaire évolutif des références externes publiées valorisant code_aster sur des applications représentatives de dossiers industriels. Celles-ci sont…",
      fr: "Ce document constitue un inventaire évolutif des références externes publiées valorisant code_aster sur des applications représentatives de dossiers industriels. Celles-ci sont…",
    },
  },
  {
    id: "r3.01.00",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.01.00/index.html",
    blurb: {
      en: "Ce document présente les fondements des éléments finis iso-paramétriques introduits dans *Code_Aster* pour la modélisation des milieux continus 2D et 3D. On rappelle tout…",
      fr: "Ce document présente les fondements des éléments finis iso-paramétriques introduits dans *Code_Aster* pour la modélisation des milieux continus 2D et 3D. On rappelle tout…",
    },
  },
  {
    id: "r3.01.01",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.01.01/index.html",
    blurb: {
      en: "On décrit la géométrie et la topologie des éléments finis; pour chaque élément de référence, l’expression des fonctions de forme et les différentes familles de points…",
      fr: "On décrit la géométrie et la topologie des éléments finis; pour chaque élément de référence, l’expression des fonctions de forme et les différentes familles de points…",
    },
  },
  {
    id: "r3.03.01",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.03.01/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r3.03.02",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.03.02/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r3.03.03",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.03.03/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r3.03.04",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.03.04/index.html",
    blurb: {
      en: "Un chargement de pression en grands déplacements est un chargement suiveur. En employant des éléments de peau, on est amené à calculer, d'une part, un second membre dont le…",
      fr: "Un chargement de pression en grands déplacements est un chargement suiveur. En employant des éléments de peau, on est amené à calculer, d'une part, un second membre dont le…",
    },
  },
  {
    id: "r3.03.05",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.03.05/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r3.03.06",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.03.06/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r3.03.07",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.03.07/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r3.03.08",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.03.08/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r3.03.09",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.03.09/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r3.06.02",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.06.02/index.html",
    blurb: {
      en: "On décrit l'expression des termes élémentaires intervenant dans la modélisation linéaire de l'équation de la chaleur et dans les post-traitements. On donne l'expression…",
      fr: "On décrit l'expression des termes élémentaires intervenant dans la modélisation linéaire de l'équation de la chaleur et dans les post-traitements. On donne l'expression…",
    },
  },
  {
    id: "r3.06.03",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.06.03/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r3.06.04",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.06.04/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r3.06.07",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.06.07/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r3.06.08",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.06.08/index.html",
    blurb: {
      en: "Dans certaines situations, le comportement mécanique du matériau impose que la dilatation volumique reste nulle, autrement dit que la déformation se fasse à volume constant :…",
      fr: "Dans certaines situations, le comportement mécanique du matériau impose que la dilatation volumique reste nulle, autrement dit que la déformation se fasse à volume constant :…",
    },
  },
  {
    id: "r3.06.09",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.06.09/index.html",
    blurb: {
      en: "Cette documentation porte sur la description des éléments finis de joint mécanique linéaire et quadratique. Les modélisations en mécanique pure (xxx_JOINT) supportent les deux…",
      fr: "Cette documentation porte sur la description des éléments finis de joint mécanique linéaire et quadratique. Les modélisations en mécanique pure (xxx_JOINT) supportent les deux…",
    },
  },
  {
    id: "r3.06.10",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.06.10/index.html",
    blurb: {
      en: "Malgré tout le potentiel de l’élément quadrilatère isoparamétrique linéaire pour le calcul par éléments finis, l’application d'une formulation bilinéaire classique pour définir…",
      fr: "Malgré tout le potentiel de l’élément quadrilatère isoparamétrique linéaire pour le calcul par éléments finis, l’application d'une formulation bilinéaire classique pour définir…",
    },
  },
  {
    id: "r3.06.11",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.06.11/index.html",
    blurb: {
      en: "L'élément hexaédrique à 8 nœuds sous-intégré standard à 1 point d'intégration introduit des modes parasites associés à une énergie nulle (modes de sablier) et peut conduire à…",
      fr: "L'élément hexaédrique à 8 nœuds sous-intégré standard à 1 point d'intégration introduit des modes parasites associés à une énergie nulle (modes de sablier) et peut conduire à…",
    },
  },
  {
    id: "r3.06.13",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.06.13/index.html",
    blurb: {
      en: "Ce document présente un élément fini d’interface mixte pour des modèles de zone cohésive. Les mots clés correspondant pour les modélisations dans *Code_Aster* sont…",
      fr: "Ce document présente un élément fini d’interface mixte pour des modèles de zone cohésive. Les mots clés correspondant pour les modélisations dans *Code_Aster* sont…",
    },
  },
  {
    id: "r3.06.14",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.06.14/index.html",
    blurb: {
      en: "Ce document présente les méthodes HHO pour les problèmes en mécanique non-linéaire (petites et grandes déformations) et thermique linéaire et non-linéaire. Les mots clés…",
      fr: "Ce document présente les méthodes HHO pour les problèmes en mécanique non-linéaire (petites et grandes déformations) et thermique linéaire et non-linéaire. Les mots clés…",
    },
  },
  {
    id: "r3.06.15",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.06.15/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r3.07.02",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.07.02/index.html",
    blurb: {
      en: "On présente une formulation numérique pour la modélisation des structures à surface moyenne de géométrie particulière: coques à symétrie de révolution autour de l’axe…",
      fr: "On présente une formulation numérique pour la modélisation des structures à surface moyenne de géométrie particulière: coques à symétrie de révolution autour de l’axe…",
    },
  },
  {
    id: "r3.07.03",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.07.03/index.html",
    blurb: {
      en: "Ces modélisations d’éléments finis de plaque sont destinées aux calculs en petites déformations et petits déplacements de structures minces courbes ou planes. Ce sont des…",
      fr: "Ces modélisations d’éléments finis de plaque sont destinées aux calculs en petites déformations et petits déplacements de structures minces courbes ou planes. Ce sont des…",
    },
  },
  {
    id: "r3.07.04",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.07.04/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r3.07.05",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.07.05/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r3.07.06",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.07.06/index.html",
    blurb: {
      en: "Les éléments de plaque R3.07.03 sont destinés aux calculs de structures minces tridimensionnelles. Le feuillet moyen de ces structures ne coïncide pas toujours avec le plan…",
      fr: "Les éléments de plaque R3.07.03 sont destinés aux calculs de structures minces tridimensionnelles. Le feuillet moyen de ces structures ne coïncide pas toujours avec le plan…",
    },
  },
  {
    id: "r3.07.09",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.07.09/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r3.07.10",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.07.10/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r3.07.11",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.07.11/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r3.08.01",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.08.01/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r3.08.02",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.08.02/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r3.08.03",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.08.03/index.html",
    blurb: {
      en: "On présente le principe du calcul des différentes grandeurs caractéristiques des sections de poutres. Celles-ci sont établies à partir des caractéristiques géométriques de la…",
      fr: "On présente le principe du calcul des différentes grandeurs caractéristiques des sections de poutres. Celles-ci sont établies à partir des caractéristiques géométriques de la…",
    },
  },
  {
    id: "r3.08.04",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.08.04/index.html",
    blurb: {
      en: "Ce document présente l’élément POU_D_TG qui est un élément fini de poutre droite avec prise en compte du gauchissement des sections. Il permet le calcul des poutres à sections…",
      fr: "Ce document présente l’élément POU_D_TG qui est un élément fini de poutre droite avec prise en compte du gauchissement des sections. Il permet le calcul des poutres à sections…",
    },
  },
  {
    id: "r3.08.05",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.08.05/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r3.08.06",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.08.06/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r3.08.07",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.08.07/index.html",
    blurb: {
      en: "Ce document décrit la formulation et l’implantation dans *Code_Aster* des éléments MEMBRANE et GRILLE_MEMBRANE. Les éléments MEMBRANE permettent de modéliser un comportement…",
      fr: "Ce document décrit la formulation et l’implantation dans *Code_Aster* des éléments MEMBRANE et GRILLE_MEMBRANE. Les éléments MEMBRANE permettent de modéliser un comportement…",
    },
  },
  {
    id: "r3.08.08",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.08.08/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r3.08.09",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.08.09/index.html",
    blurb: {
      en: "Ce document présente le traitement des grands déplacements de l'élément de poutre multi-fibres POU_D_TGM activé par le mot-clé DEFORMATION='GROT_GDEP'.",
      fr: "Ce document présente le traitement des grands déplacements de l'élément de poutre multi-fibres POU_D_TGM activé par le mot-clé DEFORMATION='GROT_GDEP'.",
    },
  },
  {
    id: "r3.08.10",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.08.10/index.html",
    blurb: {
      en: "L'élément CABLE_GAINE présenté dans ce document a pour but de modéliser des câbles de précontrainte pouvant frotter ou glisser dans leurs gaines et donc ne suivant pas…",
      fr: "L'élément CABLE_GAINE présenté dans ce document a pour but de modéliser des câbles de précontrainte pouvant frotter ou glisser dans leurs gaines et donc ne suivant pas…",
    },
  },
  {
    id: "r3.11.01",
    part: "R3",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r3/r3.11.01/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r4.01.01",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.01.01/index.html",
    blurb: {
      en: "On étend les résultats de la théorie des éléments de plaques exposés dans la documentation r3.07.03 au cas des matériaux orthotropes multi-couches. La documentation proposée…",
      fr: "On étend les résultats de la théorie des éléments de plaques exposés dans la documentation r3.07.03 au cas des matériaux orthotropes multi-couches. La documentation proposée…",
    },
  },
  {
    id: "r4.01.02",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.01.02/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r4.02.01",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.02.01/index.html",
    blurb: {
      en: "Ce document décrit en acoustique linéaire stationnaire à basse fréquence en milieu borné les équations utilisées, les formulations variationnelles qui en découlent ainsi que la…",
      fr: "Ce document décrit en acoustique linéaire stationnaire à basse fréquence en milieu borné les équations utilisées, les formulations variationnelles qui en découlent ainsi que la…",
    },
  },
  {
    id: "r4.02.02",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.02.02/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r4.02.03",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.02.03/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r4.02.04",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.02.04/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r4.02.05",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.02.05/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r4.03.05",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.03.05/index.html",
    blurb: {
      en: "Ce document décrit deux approches probabilistes, l'une paramétrique et l'autre non paramétrique afin de prendre en compte les incertitudes de modèle et de modélisation pour les…",
      fr: "Ce document décrit deux approches probabilistes, l'une paramétrique et l'autre non paramétrique afin de prendre en compte les incertitudes de modèle et de modélisation pour les…",
    },
  },
  {
    id: "r4.03.06",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.03.06/index.html",
    blurb: {
      en: "Dans ce document on présente les algorithmes de recalage implémentés dans MACR_RECAL. Il s’agit d'abord d’un algorithme de Levenberg-Marquardt avec bornes et ensuite d'un…",
      fr: "Dans ce document on présente les algorithmes de recalage implémentés dans MACR_RECAL. Il s’agit d'abord d’un algorithme de Levenberg-Marquardt avec bornes et ensuite d'un…",
    },
  },
  {
    id: "r4.04.01",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.04.01/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r4.04.02",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.04.02/index.html",
    blurb: {
      en: "Ce document présente la modélisation mise en place dans *code_aster* pour l'analyse mécanique d’opérations générant des transformations métallurgiques. On présente les…",
      fr: "Ce document présente la modélisation mise en place dans *code_aster* pour l'analyse mécanique d’opérations générant des transformations métallurgiques. On présente les…",
    },
  },
  {
    id: "r4.04.03",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.04.03/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r4.04.04",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.04.04/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r4.04.05",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.04.05/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r4.05.01",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.05.01/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r4.05.02",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.05.02/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r4.05.03",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.05.03/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r4.05.04",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.05.04/index.html",
    blurb: {
      en: "Ce document est une notice théorique décrivant les méthodes développées dans l'opérateur DYNA_ISS_VARI. Cet opérateur permet de traiter des problèmes d'interaction…",
      fr: "Ce document est une notice théorique décrivant les méthodes développées dans l'opérateur DYNA_ISS_VARI. Cet opérateur permet de traiter des problèmes d'interaction…",
    },
  },
  {
    id: "r4.05.05",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.05.05/index.html",
    blurb: {
      en: "Dans les études sismiques «best-estimate», on est souvent amené à effectuer des analyses dynamiques transitoires. Le signal sismique est alors modélisé par un processus…",
      fr: "Dans les études sismiques «best-estimate», on est souvent amené à effectuer des analyses dynamiques transitoires. Le signal sismique est alors modélisé par un processus…",
    },
  },
  {
    id: "r4.05.06",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.05.06/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r4.05.07",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.05.07/index.html",
    blurb: {
      en: "Ce document est une notice théorique décrivant la méthode Laplace-Temps ( *cf* . U2.06.05) développée dans l'opérateur CALC_MISS ( *cf* . U7.03.12) pour le type de résultat…",
      fr: "Ce document est une notice théorique décrivant la méthode Laplace-Temps ( *cf* . U2.06.05) développée dans l'opérateur CALC_MISS ( *cf* . U7.03.12) pour le type de résultat…",
    },
  },
  {
    id: "r4.05.08",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.05.08/index.html",
    blurb: {
      en: "Dans les études sismiques, on est souvent amené à réaliser des spectres de plancher pour des bâtiments où les équipements sont modélisés par des masses ajoutées au plancher.…",
      fr: "Dans les études sismiques, on est souvent amené à réaliser des spectres de plancher pour des bâtiments où les équipements sont modélisés par des masses ajoutées au plancher.…",
    },
  },
  {
    id: "r4.06.02",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.06.02/index.html",
    blurb: {
      en: "Ce rapport présente les bases théoriques des méthodes de calcul par synthèse modale. Nous débutons par la description de la transformation de RITZ et des méthodes de…",
      fr: "Ce rapport présente les bases théoriques des méthodes de calcul par synthèse modale. Nous débutons par la description de la transformation de RITZ et des méthodes de…",
    },
  },
  {
    id: "r4.06.03",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.06.03/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r4.07.02",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.07.02/index.html",
    blurb: {
      en: "On décrit la modélisation des excitations turbulentes disponible dans *Code_Aster* et la manière dont ces dernières sont prises en compte dans un calcul de dynamique. Les…",
      fr: "On décrit la modélisation des excitations turbulentes disponible dans *Code_Aster* et la manière dont ces dernières sont prises en compte dans un calcul de dynamique. Les…",
    },
  },
  {
    id: "r4.07.03",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.07.03/index.html",
    blurb: {
      en: "Ce document présente un aspect du couplage fluide/structure: lorsqu'une structure vibrante se trouve baignée par un fluide qu'on suppose sans écoulement, incompressible et non…",
      fr: "Ce document présente un aspect du couplage fluide/structure: lorsqu'une structure vibrante se trouve baignée par un fluide qu'on suppose sans écoulement, incompressible et non…",
    },
  },
  {
    id: "r4.07.04",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.07.04/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r4.07.05",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.07.05/index.html",
    blurb: {
      en: "Cette note décrit un modèle obtenu par une méthode d’homogénéisation pour caractériser le comportement vibratoire d’un réseau périodique de tubes baignés par un fluide…",
      fr: "Cette note décrit un modèle obtenu par une méthode d’homogénéisation pour caractériser le comportement vibratoire d’un réseau périodique de tubes baignés par un fluide…",
    },
  },
  {
    id: "r4.07.07",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.07.07/index.html",
    blurb: {
      en: "La macro-commande CALC_ESSAI rassemble les fonctionnalités de Code_Aster pour la corrélation calcul-essais. On décrit dans le cadre de cette documentation la fonctionnalité…",
      fr: "La macro-commande CALC_ESSAI rassemble les fonctionnalités de Code_Aster pour la corrélation calcul-essais. On décrit dans le cadre de cette documentation la fonctionnalité…",
    },
  },
  {
    id: "r4.08.01",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.08.01/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r4.09.01",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.09.01/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r4.10.01",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.10.01/index.html",
    blurb: {
      en: "On expose dans ce document la méthode d'estimation de l'erreur de discrétisation proposée par ZHU‑ZIENKIEWICZ.",
      fr: "On expose dans ce document la méthode d'estimation de l'erreur de discrétisation proposée par ZHU‑ZIENKIEWICZ.",
    },
  },
  {
    id: "r4.10.02",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.10.02/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r4.10.03",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.10.03/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r4.10.04",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.10.04/index.html",
    blurb: {
      en: "On propose ici une méthode qui vise à améliorer le traitement des singularités dans les stratégies d’adaptation de maillage avec le logiciel HOMARD (dans le cas du raffinement)…",
      fr: "On propose ici une méthode qui vise à améliorer le traitement des singularités dans les stratégies d’adaptation de maillage avec le logiciel HOMARD (dans le cas du raffinement)…",
    },
  },
  {
    id: "r4.10.05",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.10.05/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r4.10.06",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.10.06/index.html",
    blurb: {
      en: "Dans ce document, on présente le cadre de l'estimation d'erreur en quantité d'intérêt. Ce cadre est utilisé avec des estimateurs en résidu explicites ainsi qu'avec des…",
      fr: "Dans ce document, on présente le cadre de l'estimation d'erreur en quantité d'intérêt. Ce cadre est utilisé avec des estimateurs en résidu explicites ainsi qu'avec des…",
    },
  },
  {
    id: "r4.10.07",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.10.07/index.html",
    blurb: {
      en: "Ce document présente le principe du calcul de l'erreur en relation de comportement (ERC). Dans ce document, la résolution d'un tel problème est restreint au cas de la dynamique…",
      fr: "Ce document présente le principe du calcul de l'erreur en relation de comportement (ERC). Dans ce document, la résolution d'un tel problème est restreint au cas de la dynamique…",
    },
  },
  {
    id: "r4.20.01",
    part: "R4",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r4/r4.20.01/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r5.01.01",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.01.01/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r5.01.02",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.01.02/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r5.01.03",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.01.03/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r5.01.04",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.01.04/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r5.02.01",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.02.01/index.html",
    blurb: {
      en: "On présente l'algorithme de thermique transitoire linéaire implanté au sein de la commande THER_LINEAIRE U4.33.01 . Les différentes options de calcul nécessaires ont été…",
      fr: "On présente l'algorithme de thermique transitoire linéaire implanté au sein de la commande THER_LINEAIRE U4.33.01 . Les différentes options de calcul nécessaires ont été…",
    },
  },
  {
    id: "r5.02.02",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.02.02/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r5.02.04",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.02.04/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r5.03.01",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.01/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r5.03.02",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.02/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r5.03.03",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.03/index.html",
    blurb: {
      en: "Ce document décrit une méthode générale d’intégration des modèles de comportements non linéaires (élastoplastiques, viscoplastiques, endommageants,...) en contraintes planes.",
      fr: "Ce document décrit une méthode générale d’intégration des modèles de comportements non linéaires (élastoplastiques, viscoplastiques, endommageants,...) en contraintes planes.",
    },
  },
  {
    id: "r5.03.04",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.04/index.html",
    blurb: {
      en: "Ce document décrit l’intégration du modèle de comportement élasto-visco-plastique de Chaboche à écrouissage cinématique non linéaire et isotrope, avec prise en compte possible…",
      fr: "Ce document décrit l’intégration du modèle de comportement élasto-visco-plastique de Chaboche à écrouissage cinématique non linéaire et isotrope, avec prise en compte possible…",
    },
  },
  {
    id: "r5.03.05",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.05/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r5.03.06",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.06/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r5.03.07",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.07/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r5.03.08",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.08/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r5.03.09",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.09/index.html",
    blurb: {
      en: "Ce document décrit les quantités calculées par l’opérateur STAT_NON_LINE nécessaires à la mise en œuvre de l’algorithme non linéaire quasi statique décrit en R5.03.01 dans le…",
      fr: "Ce document décrit les quantités calculées par l’opérateur STAT_NON_LINE nécessaires à la mise en œuvre de l’algorithme non linéaire quasi statique décrit en R5.03.01 dans le…",
    },
  },
  {
    id: "r5.03.11",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.11/index.html",
    blurb: {
      en: "Integration of single-crystal and polycrystalline elastoviscoplastic laws, explicit or implicit, for aggregates and homogenised polycrystals.",
      fr: "Résumé :",
    },
  },
  {
    id: "r5.03.12",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.12/index.html",
    blurb: {
      en: "Ce document décrit l’intégration du modèle de comportement élasto-visco-plastique de Chaboche avec un écrouissage isotrope comportant un effet mémoire d’écrouissage et deux…",
      fr: "Ce document décrit l’intégration du modèle de comportement élasto-visco-plastique de Chaboche avec un écrouissage isotrope comportant un effet mémoire d’écrouissage et deux…",
    },
  },
  {
    id: "r5.03.13",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.13/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r5.03.14",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.14/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r5.03.15",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.15/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r5.03.16",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.16/index.html",
    blurb: {
      en: "Ce document décrit une loi de comportement élastoplastique à écrouissage mixte, cinématique linéaire et isotrope non linéaire. Les équations à résoudre pour intégrer…",
      fr: "Ce document décrit une loi de comportement élastoplastique à écrouissage mixte, cinématique linéaire et isotrope non linéaire. Les équations à résoudre pour intégrer…",
    },
  },
  {
    id: "r5.03.17",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.17/index.html",
    blurb: {
      en: "Ce document décrit les comportements non linéaires des éléments discrets qui sont appelés par les opérateurs de résolution de problèmes non linéaires STAT_NON_LINE ou…",
      fr: "Ce document décrit les comportements non linéaires des éléments discrets qui sont appelés par les opérateurs de résolution de problèmes non linéaires STAT_NON_LINE ou…",
    },
  },
  {
    id: "r5.03.19",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.19/index.html",
    blurb: {
      en: "On décrit ici des lois de comportement hyper-élastique adoptées pour les élastomères. Les cas compressible et incompressible sont présentés.",
      fr: "On décrit ici des lois de comportement hyper-élastique adoptées pour les élastomères. Les cas compressible et incompressible sont présentés.",
    },
  },
  {
    id: "r5.03.20",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.20/index.html",
    blurb: {
      en: "On se propose de décrire ici une relation de comportement élastique non linéaire qui coïncide avec la loi élastoplastique de Hencky-VonMises (écrouissage isotrope) dans le cas…",
      fr: "On se propose de décrire ici une relation de comportement élastique non linéaire qui coïncide avec la loi élastoplastique de Hencky-VonMises (écrouissage isotrope) dans le cas…",
    },
  },
  {
    id: "r5.03.21",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.21/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r5.03.22",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.22/index.html",
    blurb: {
      en: "On décrit ici la formulation adoptée pour traiter des grandes rotations et des petites déformations. Cette formulation est valable pour toutes les lois de comportement définies…",
      fr: "On décrit ici la formulation adoptée pour traiter des grandes rotations et des petites déformations. Cette formulation est valable pour toutes les lois de comportement définies…",
    },
  },
  {
    id: "r5.03.23",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.23/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r5.03.24",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.24/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r5.03.25",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.25/index.html",
    blurb: {
      en: "Ce document décrit le modèle de comportement élastique fragile ENDO_SCALAIRE disponible seulement pour la modélisation non locale à gradient d'endommagement GRAD_VARI.…",
      fr: "Ce document décrit le modèle de comportement élastique fragile ENDO_SCALAIRE disponible seulement pour la modélisation non locale à gradient d'endommagement GRAD_VARI.…",
    },
  },
  {
    id: "r5.03.27",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.27/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r5.03.28",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.28/index.html",
    blurb: {
      en: "Ce document décrit le modèle de comportement élastique fragile ENDO_FISS_EXP, disponible en modélisation non locale à gradient d'endommagement GRAD_VARI. L’endommagement y est…",
      fr: "Ce document décrit le modèle de comportement élastique fragile ENDO_FISS_EXP, disponible en modélisation non locale à gradient d'endommagement GRAD_VARI. L’endommagement y est…",
    },
  },
  {
    id: "r5.03.29",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.29/index.html",
    blurb: {
      en: "Ce document décrit le modèle d’endommagement ductilede Gurson – Tvergaard – Needleman (GTN). Il est disponible en version locale et à gradient de variables internes (GRAD_VARI…",
      fr: "Ce document décrit le modèle d’endommagement ductilede Gurson – Tvergaard – Needleman (GTN). Il est disponible en version locale et à gradient de variables internes (GRAD_VARI…",
    },
  },
  {
    id: "r5.03.31",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.31/index.html",
    blurb: {
      en: "Ce document décrit le comportement élasto-plastique non linéaire d’une fondation superficielle rectangulaire soumise à une sollicitation tridimensionnelle statique ou sismique.…",
      fr: "Ce document décrit le comportement élasto-plastique non linéaire d’une fondation superficielle rectangulaire soumise à une sollicitation tridimensionnelle statique ou sismique.…",
    },
  },
  {
    id: "r5.03.32",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.32/index.html",
    blurb: {
      en: "Ce document décrit le comportement non linéaire des assemblages non linéaires de cornières de pylônes modélisés par des éléments discrets DIS_TR. Cette loi de comportement est…",
      fr: "Ce document décrit le comportement non linéaire des assemblages non linéaires de cornières de pylônes modélisés par des éléments discrets DIS_TR. Cette loi de comportement est…",
    },
  },
  {
    id: "r5.03.33",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.33/index.html",
    blurb: {
      en: "Ce document décrit le modèle de comportement élasto-visco-plastique à écrouissage isotrope non linéaire, disponible en version locale et à gradient de variables internes…",
      fr: "Ce document décrit le modèle de comportement élasto-visco-plastique à écrouissage isotrope non linéaire, disponible en version locale et à gradient de variables internes…",
    },
  },
  {
    id: "r5.03.34",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.34/index.html",
    blurb: {
      en: "Pour régulariser certaines formes d’instabilités quasi-statiques, une technique de régularisation accessible dans STAT_NON_LINEvia le mot-clé REGU_VISC s’appuie sur la…",
      fr: "Pour régulariser certaines formes d’instabilités quasi-statiques, une technique de régularisation accessible dans STAT_NON_LINEvia le mot-clé REGU_VISC s’appuie sur la…",
    },
  },
  {
    id: "r5.03.35",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.35/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r5.03.36",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.36/index.html",
    blurb: {
      en: "Ce document décrit le modèle de comportement KICHENIN_NL, destiné à décrire la réponse mécanique du polyéthylène. Il combine une branche élastoplastique à écrouissage…",
      fr: "Ce document décrit le modèle de comportement KICHENIN_NL, destiné à décrire la réponse mécanique du polyéthylène. Il combine une branche élastoplastique à écrouissage…",
    },
  },
  {
    id: "r5.03.37",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.37/index.html",
    blurb: {
      en: "On expose les hypothèses et les méthodes employées dans la commande CALC_MATE_HOMO qui effectue le calcul des propriétés thermiques et thermoélastiques linéaires homogénéisées…",
      fr: "On expose les hypothèses et les méthodes employées dans la commande CALC_MATE_HOMO qui effectue le calcul des propriétés thermiques et thermoélastiques linéaires homogénéisées…",
    },
  },
  {
    id: "r5.03.38",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.38/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r5.03.40",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.40/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r5.03.50",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.50/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r5.03.52",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.52/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "r5.03.54",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.54/index.html",
    blurb: {
      en: "Ce document présente une nouvelle approche pour traiter les problèmes de contact en petits glissements avec la eXtended Finite Element Method (X-FEM) [bib1]. On considère la…",
      fr: "Ce document présente une nouvelle approche pour traiter les problèmes de contact en petits glissements avec la eXtended Finite Element Method (X-FEM) [bib1]. On considère la…",
    },
  },
  {
    id: "r5.03.55",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.55/index.html",
    blurb: {
      en: "Résumé:",
      fr: "Résumé:",
    },
  },
  {
    id: "r5.03.80",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.80/index.html",
    blurb: {
      en: "Ce document décrit les méthodes de pilotage du chargement disponibles dans *Code_Aster* (par un degré de liberté, par longueur d’arc, par incrément de déformation et par…",
      fr: "Ce document décrit les méthodes de pilotage du chargement disponibles dans *Code_Aster* (par un degré de liberté, par longueur d’arc, par incrément de déformation et par…",
    },
  },
  {
    id: "r5.03.81",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.03.81/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r5.04.01",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.04.01/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r5.04.03",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.04.03/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r5.05.01",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.05.01/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r5.05.02",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.05.02/index.html",
    blurb: {
      en: "Ce document décrit les schémas d'intégration temporelle qui sont utilisés pour résoudre de façon directe des problèmes de dynamique en mécanique linéaire transitoire . Les…",
      fr: "Ce document décrit les schémas d'intégration temporelle qui sont utilisés pour résoudre de façon directe des problèmes de dynamique en mécanique linéaire transitoire . Les…",
    },
  },
  {
    id: "r5.05.03",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.05.03/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r5.05.04",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.05.04/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r5.05.05",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.05.05/index.html",
    blurb: {
      en: "L’opérateur DYNA_NON_LINE DYNA_NON_LINE s’emploie pour l’analyse dynamique non linéaire des structures par une intégration directe en temps. Les non-linéarités peuvent provenir…",
      fr: "L’opérateur DYNA_NON_LINE DYNA_NON_LINE s’emploie pour l’analyse dynamique non linéaire des structures par une intégration directe en temps. Les non-linéarités peuvent provenir…",
    },
  },
  {
    id: "r5.05.07",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.05.07/index.html",
    blurb: {
      en: "Ce document présente la formulation des matrices d'amortissement et de raideur gyroscopiques des éléments poutres, volumiques et discrets.",
      fr: "Ce document présente la formulation des matrices d'amortissement et de raideur gyroscopiques des éléments poutres, volumiques et discrets.",
    },
  },
  {
    id: "r5.05.08",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.05.08/index.html",
    blurb: {
      en: "Ce document décrit une méthode de prise en compte des fissures dans les rotors modélisés en 1D.",
      fr: "Ce document décrit une méthode de prise en compte des fissures dans les rotors modélisés en 1D.",
    },
  },
  {
    id: "r5.05.09",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.05.09/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r5.05.10",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.05.10/index.html",
    blurb: {
      en: "Overview:",
      fr: "Overview:",
    },
  },
  {
    id: "r5.06.01",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.06.01/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r5.06.03",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.06.03/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r5.06.04",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.06.04/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r5.07.01",
    part: "R5",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r5/r5.07.01/index.html",
    blurb: {
      en: "L'opérateur MODE_NON_LINE permet de calculer les modes non-linéaires d'un système linéaire conservatif autonome doté de non-linéarités de choc localisées. On décrit ici les…",
      fr: "L'opérateur MODE_NON_LINE permet de calculer les modes non-linéaires d'un système linéaire conservatif autonome doté de non-linéarités de choc localisées. On décrit ici les…",
    },
  },
  {
    id: "r6.01.02",
    part: "R6",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r6/r6.01.02/index.html",
    blurb: {
      en: "Dans le cadre des simulations thermo-mécaniques, l’essentiel des coûts calcul provient souvent de la construction et de la résolution des systèmes linéaires . Le choix du bon…",
      fr: "Dans le cadre des simulations thermo-mécaniques, l’essentiel des coûts calcul provient souvent de la construction et de la résolution des systèmes linéaires . Le choix du bon…",
    },
  },
  {
    id: "r6.02.01",
    part: "R6",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r6/r6.02.01/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r6.02.02",
    part: "R6",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r6/r6.02.02/index.html",
    blurb: {
      en: "La méthode multifrontale MULT_FRONT est une méthode directe particulièrement adaptée à la résolution des systèmes linéaires dont la matrice est creuse. Cette méthode comprend…",
      fr: "La méthode multifrontale MULT_FRONT est une méthode directe particulièrement adaptée à la résolution des systèmes linéaires dont la matrice est creuse. Cette méthode comprend…",
    },
  },
  {
    id: "r6.02.03",
    part: "R6",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r6/r6.02.03/index.html",
    blurb: {
      en: "Direct sparse linear solvers in Code_Aster, and the numerical and software integration of the MUMPS package.",
      fr: "Résumé",
    },
  },
  {
    id: "r6.03.01",
    part: "R6",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r6/r6.03.01/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r7.01.01",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.01/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r7.01.02",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.02/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r7.01.03",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.03/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r7.01.04",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.04/index.html",
    blurb: {
      en: "Cette documentation présente l’écriture théorique et l’intégration numérique de la loi de comportement ENDO_ISOT_BETON qui décrit un mécanisme d’endommagement local asymétrique…",
      fr: "Cette documentation présente l’écriture théorique et l’intégration numérique de la loi de comportement ENDO_ISOT_BETON qui décrit un mécanisme d’endommagement local asymétrique…",
    },
  },
  {
    id: "r7.01.06",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.06/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r7.01.08",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.08/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r7.01.09",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.09/index.html",
    blurb: {
      en: "Cette documentation présente l’écriture théorique et l’intégration numérique de la loi de comportement ENDO_ORTH_BETON développée par [bib1], qui décrit l’anisotropie induite…",
      fr: "Cette documentation présente l’écriture théorique et l’intégration numérique de la loi de comportement ENDO_ORTH_BETON développée par [bib1], qui décrit l’anisotropie induite…",
    },
  },
  {
    id: "r7.01.10",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.10/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r7.01.11",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.11/index.html",
    blurb: {
      en: "Cette note présente une famille de lois de comportement THM pour les milieux saturés et non saturés. On y décrit les relations permettant de calculer les quantités hydrauliques…",
      fr: "Cette note présente une famille de lois de comportement THM pour les milieux saturés et non saturés. On y décrit les relations permettant de calculer les quantités hydrauliques…",
    },
  },
  {
    id: "r7.01.12",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.12/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r7.01.13",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.13/index.html",
    blurb: {
      en: "On présente ici la loi CJS qui s’applique à la mécanique des sols. On précise:",
      fr: "On présente ici la loi CJS qui s’applique à la mécanique des sols. On précise:",
    },
  },
  {
    id: "r7.01.14",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.14/index.html",
    blurb: {
      en: "Le modèle de Cam-Clay est un des modèles élastoplastiques le plus connu et le plus utilisé en mécanique des sols. Il est spécialement adapté aux matériaux argileux. Il y a…",
      fr: "Le modèle de Cam-Clay est un des modèles élastoplastiques le plus connu et le plus utilisé en mécanique des sols. Il est spécialement adapté aux matériaux argileux. Il y a…",
    },
  },
  {
    id: "r7.01.15",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.15/index.html",
    blurb: {
      en: "Le modèle rhéologique de Laigle permet d’analyser le comportement mécanique des roches. Le développement de ce modèle de comportement a été initié suite à la difficulté…",
      fr: "Le modèle rhéologique de Laigle permet d’analyser le comportement mécanique des roches. Le développement de ce modèle de comportement a été initié suite à la difficulté…",
    },
  },
  {
    id: "r7.01.16",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.16/index.html",
    blurb: {
      en: "Ce document décrit les principes de plusieurs développements concernant la loi de comportement élastoplastique de Drucker-Prager en version associée (DRUCK_PRAGER)et…",
      fr: "Ce document décrit les principes de plusieurs développements concernant la loi de comportement élastoplastique de Drucker-Prager en version associée (DRUCK_PRAGER)et…",
    },
  },
  {
    id: "r7.01.17",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.17/index.html",
    blurb: {
      en: "Ce document présente la formulation et l’intégration numérique du modèle de comportement élastoplastique de Barcelone [bib2]__, conçu pour décrire le comportement mécanique des…",
      fr: "Ce document présente la formulation et l’intégration numérique du modèle de comportement élastoplastique de Barcelone [bib2]__, conçu pour décrire le comportement mécanique des…",
    },
  },
  {
    id: "r7.01.18",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.18/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r7.01.19",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.19/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r7.01.20",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.20/index.html",
    blurb: {
      en: "Cette documentation présente le modèle de comportement de l’acier soumis à la corrosion qui permet de décrire le comportement mécanique de renforcement corrodé dans les…",
      fr: "Cette documentation présente le modèle de comportement de l’acier soumis à la corrosion qui permet de décrire le comportement mécanique de renforcement corrodé dans les…",
    },
  },
  {
    id: "r7.01.21",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.21/index.html",
    blurb: {
      en: "La loi de comportement JOINT_BA décrit le phénomène de dégradation et de rupture de la liaison entre les barres d’acier et le béton, dans les structures en béton armé. Cette…",
      fr: "La loi de comportement JOINT_BA décrit le phénomène de dégradation et de rupture de la liaison entre les barres d’acier et le béton, dans les structures en béton armé. Cette…",
    },
  },
  {
    id: "r7.01.22",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.22/index.html",
    blurb: {
      en: "Ce document décrit la loi de comportement viscoplastique VISC_DRUC_PRAG basée sur le modèle élastoplastique de Drucker-Prager et prenant en compte la viscosité selon une loi…",
      fr: "Ce document décrit la loi de comportement viscoplastique VISC_DRUC_PRAG basée sur le modèle élastoplastique de Drucker-Prager et prenant en compte la viscosité selon une loi…",
    },
  },
  {
    id: "r7.01.23",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.23/index.html",
    blurb: {
      en: "Le modèle de comportement dit de «Hujeux», conçu au laboratoire MSSMat de l’ECP , est un des modèles élastoplastiques cycliques de mécanique des sols (géomatériaux granulaires:…",
      fr: "Le modèle de comportement dit de «Hujeux», conçu au laboratoire MSSMat de l’ECP , est un des modèles élastoplastiques cycliques de mécanique des sols (géomatériaux granulaires:…",
    },
  },
  {
    id: "r7.01.24",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.24/index.html",
    blurb: {
      en: "La loi L&K décrit un comportement élasto-visco-plastique des roches. L’élastoplasticité se caractérise par un écrouissage positif en pré-pic et un comportement adoucissant au…",
      fr: "La loi L&K décrit un comportement élasto-visco-plastique des roches. L’élastoplasticité se caractérise par un écrouissage positif en pré-pic et un comportement adoucissant au…",
    },
  },
  {
    id: "r7.01.25",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.25/index.html",
    blurb: {
      en: "Ce document décrit des lois surfaciques permettant de modéliser la rupture et le frottement entre les lèvres d'une fissure ou d'un joint. La loi JOINT_MECA_RUPT ne représente…",
      fr: "Ce document décrit des lois surfaciques permettant de modéliser la rupture et le frottement entre les lèvres d'une fissure ou d'un joint. La loi JOINT_MECA_RUPT ne représente…",
    },
  },
  {
    id: "r7.01.26",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.26/index.html",
    blurb: {
      en: "Ce document présente le modèle de comportement BETON_RAG, utilisé pour estimer le comportement à long terme des structures affectées par la réaction alcali-granulat.",
      fr: "Ce document présente le modèle de comportement BETON_RAG, utilisé pour estimer le comportement à long terme des structures affectées par la réaction alcali-granulat.",
    },
  },
  {
    id: "r7.01.27",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.27/index.html",
    blurb: {
      en: "Cette documentation présente la loi BETON_REGLE_PR implantée par la société Sixense-NECS dans le cadre de la communauté code_aster libre. Il s'agit d'une loi réglementaire…",
      fr: "Cette documentation présente la loi BETON_REGLE_PR implantée par la société Sixense-NECS dans le cadre de la communauté code_aster libre. Il s'agit d'une loi réglementaire…",
    },
  },
  {
    id: "r7.01.28",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.28/index.html",
    blurb: {
      en: "Ce document présente la méthode de résolution de la loi de Mohr-Coulomb dans *Code_Aster* .",
      fr: "Ce document présente la méthode de résolution de la loi de Mohr-Coulomb dans *Code_Aster* .",
    },
  },
  {
    id: "r7.01.29",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.29/index.html",
    blurb: {
      en: "Cette documentation présente l’écriture théorique et l’intégration numérique de la loi de comportement ENDO_HETEROGENE qui prend en compte l'effet de l'hétérogénéité de la…",
      fr: "Cette documentation présente l’écriture théorique et l’intégration numérique de la loi de comportement ENDO_HETEROGENE qui prend en compte l'effet de l'hétérogénéité de la…",
    },
  },
  {
    id: "r7.01.31",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.31/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r7.01.32",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.32/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r7.01.33",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.33/index.html",
    blurb: {
      en: "Ce document présente une méthode de couplage d’un modèle élasto-plastique avec un modèle d’endommagement, laquelle est implantée dans le cadre du KIT_DDI. La méthode utilise…",
      fr: "Ce document présente une méthode de couplage d’un modèle élasto-plastique avec un modèle d’endommagement, laquelle est implantée dans le cadre du KIT_DDI. La méthode utilise…",
    },
  },
  {
    id: "r7.01.34",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.34/index.html",
    blurb: {
      en: "Cette note présente brièvement les schémas volumes finis développés dans Code_Aster. Un bref rappel des équations de comportement concernées est effectué puis les schémas…",
      fr: "Cette note présente brièvement les schémas volumes finis développés dans Code_Aster. Un bref rappel des équations de comportement concernées est effectué puis les schémas…",
    },
  },
  {
    id: "r7.01.35",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.35/index.html",
    blurb: {
      en: "Ce document présente les modèles de comportement BETON_BURGER et BETON_AGEING, permettant de représenter le fluage du béton (propre et de dessiccation). Ces modèles s'inspirent…",
      fr: "Ce document présente les modèles de comportement BETON_BURGER et BETON_AGEING, permettant de représenter le fluage du béton (propre et de dessiccation). Ces modèles s'inspirent…",
    },
  },
  {
    id: "r7.01.37",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.37/index.html",
    blurb: {
      en: "Abstract :",
      fr: "Abstract :",
    },
  },
  {
    id: "r7.01.38",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.38/index.html",
    blurb: {
      en: "Le modèle de comportement d'Iwan [ 1 ], [ 2 ] est un modèle élastoplastique multimécanisme classique pour la description du comportement déviatorique cyclique de matériaux et…",
      fr: "Le modèle de comportement d'Iwan [ 1 ], [ 2 ] est un modèle élastoplastique multimécanisme classique pour la description du comportement déviatorique cyclique de matériaux et…",
    },
  },
  {
    id: "r7.01.39",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.39/index.html",
    blurb: {
      en: "Ce document présente la méthode de résolution de la loi de Rankine.",
      fr: "Ce document présente la méthode de résolution de la loi de Rankine.",
    },
  },
  {
    id: "r7.01.40",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.40/index.html",
    blurb: {
      en: "Le modèle de comportement LKR est une évolution thermomécanique du modèle élasto(visco)plastique LETK [1] et [2]. Son développement et son intégration numérique sont le fruit…",
      fr: "Le modèle de comportement LKR est une évolution thermomécanique du modèle élasto(visco)plastique LETK [1] et [2]. Son développement et son intégration numérique sont le fruit…",
    },
  },
  {
    id: "r7.01.41",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.41/index.html",
    blurb: {
      en: "Le modèle de GonfElas est un modèle initialement proposé par D. Hoxan et F. Colin [ 1 ]pour décrire le comportement gonflant de certains types d'argile. Il s'agit d'un modèle…",
      fr: "Le modèle de GonfElas est un modèle initialement proposé par D. Hoxan et F. Colin [ 1 ]pour décrire le comportement gonflant de certains types d'argile. Il s'agit d'un modèle…",
    },
  },
  {
    id: "r7.01.42",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.42/index.html",
    blurb: {
      en: "Ce document décrit le modèle de comportement élastique fragile ENDO_LOCA_EXP, disponible en modélisation locale uniquement (par opposition à une formulation non locale type…",
      fr: "Ce document décrit le modèle de comportement élastique fragile ENDO_LOCA_EXP, disponible en modélisation locale uniquement (par opposition à une formulation non locale type…",
    },
  },
  {
    id: "r7.01.43",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.43/index.html",
    blurb: {
      en: "Ce document présente la méthode de résolution de la loi élastoplastique non associée avec surface de charge lissée de Mohr-Coulomb dédiée particulièrement aux géo-matériaux…",
      fr: "Ce document présente la méthode de résolution de la loi élastoplastique non associée avec surface de charge lissée de Mohr-Coulomb dédiée particulièrement aux géo-matériaux…",
    },
  },
  {
    id: "r7.01.44",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.44/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r7.01.45",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.45/index.html",
    blurb: {
      en: "Le modèle présenté dans ce document est un enrichissement d’un modèle déjà effectif dans Code_Aster: RGI_BETON (cf. R7.01.30). Il permet de considérer des armatures réparties…",
      fr: "Le modèle présenté dans ce document est un enrichissement d’un modèle déjà effectif dans Code_Aster: RGI_BETON (cf. R7.01.30). Il permet de considérer des armatures réparties…",
    },
  },
  {
    id: "r7.01.46",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.46/index.html",
    blurb: {
      en: "Résumé: Ce document présente les principales équations de la loi de comportement NLH_CSRM (Non-Linear Hardening Critical State Rock Model) ainsi que son algorithme…",
      fr: "Résumé: Ce document présente les principales équations de la loi de comportement NLH_CSRM (Non-Linear Hardening Critical State Rock Model) ainsi que son algorithme…",
    },
  },
  {
    id: "r7.01.47",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.47/index.html",
    blurb: {
      en: "Ce document décrit le modèle de comportement isotrope quasi-fragile ENDO_LOCA_TC. Il reprend les fondamentaux des modèles ENDO_ISOT_BETON R7.01.04 et ENDO_LOCA_EXP R7.01.42 et…",
      fr: "Ce document décrit le modèle de comportement isotrope quasi-fragile ENDO_LOCA_TC. Il reprend les fondamentaux des modèles ENDO_ISOT_BETON R7.01.04 et ENDO_LOCA_EXP R7.01.42 et…",
    },
  },
  {
    id: "r7.01.48",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.48/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r7.01.49",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.49/index.html",
    blurb: {
      en: "Ce document présente un élément fini d’interaction entre matrice et renforcement. Le mot-clé correspondant pour la modélisation est `3D_INTERF_POU`.",
      fr: "Ce document présente un élément fini d’interaction entre matrice et renforcement. Le mot-clé correspondant pour la modélisation est `3D_INTERF_POU`.",
    },
  },
  {
    id: "r7.01.50",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.01.50/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r7.02.01",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.02.01/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r7.02.03",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.02.03/index.html",
    blurb: {
      en: "On présente le calcul du taux de restitution de l'énergie par la méthode thêta en 2D ou en 3D pour un problème thermo-élastique non-linéaire. La relation de comportement…",
      fr: "On présente le calcul du taux de restitution de l'énergie par la méthode thêta en 2D ou en 3D pour un problème thermo-élastique non-linéaire. La relation de comportement…",
    },
  },
  {
    id: "r7.02.04",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.02.04/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r7.02.05",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.02.05/index.html",
    blurb: {
      en: "On présente la méthode de calcul des facteurs d'intensité de contraintes ${K}_{I}$ , ${K}_{\\mathrm{II}}$ et ${K}_{\\mathrm{III}}$ en thermoélasticité linéaire. La formulation…",
      fr: "On présente la méthode de calcul des facteurs d'intensité de contraintes ${K}_{I}$ , ${K}_{\\mathrm{II}}$ et ${K}_{\\mathrm{III}}$ en thermoélasticité linéaire. La formulation…",
    },
  },
  {
    id: "r7.02.06",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.02.06/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r7.02.08",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.02.08/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r7.02.09",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.02.09/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r7.02.10",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.02.10/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r7.02.11",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.02.11/index.html",
    blurb: {
      en: "Les lois de comportement cohésives :",
      fr: "Les lois de comportement cohésives :",
    },
  },
  {
    id: "r7.02.12",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.02.12/index.html",
    blurb: {
      en: "Ce document présente la méthode X-FEM (eXtended Finite Element Method) qui permet principalement de considérer des fissures ne respectant pas le maillage pour traiter les…",
      fr: "Ce document présente la méthode X-FEM (eXtended Finite Element Method) qui permet principalement de considérer des fissures ne respectant pas le maillage pour traiter les…",
    },
  },
  {
    id: "r7.02.13",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.02.13/index.html",
    blurb: {
      en: "Crack-propagation algorithms in X-FEM: how the level-sets are updated from the advance of the crack front.",
      fr: "Ce document présente les algorithmes de propagation de fissures dans le cadre de la méthode X-FEM R7.02.12. La fissure est alors représentée par des level-sets. La propagation…",
    },
  },
  {
    id: "r7.02.14",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.02.14/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r7.02.15",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.02.15/index.html",
    blurb: {
      en: "On propose un nouvel élément de joint permettant de modéliser en 2D les discontinuités avec couplage-hydromécanique. Cet élément est utilisé pour mailler une fissure ou un…",
      fr: "On propose un nouvel élément de joint permettant de modéliser en 2D les discontinuités avec couplage-hydromécanique. Cet élément est utilisé pour mailler une fissure ou un…",
    },
  },
  {
    id: "r7.02.16",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.02.16/index.html",
    blurb: {
      en: "Résumé",
      fr: "Résumé",
    },
  },
  {
    id: "r7.02.17",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.02.17/index.html",
    blurb: {
      en: "La commande POST_ENDO_FISS effectue un post-traitement sur un résultat issu de la mécanique des milieux continus. Le but est de trouver la courbe qui représente la fissure à…",
      fr: "La commande POST_ENDO_FISS effectue un post-traitement sur un résultat issu de la mécanique des milieux continus. Le but est de trouver la courbe qui représente la fissure à…",
    },
  },
  {
    id: "r7.02.18",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.02.18/index.html",
    blurb: {
      en: "Dans ce document nous présentons la formulation d'un nouveau type d'éléments finis. Il s'agit d'un élément hydromécanique traversé par une discontinuité (une interface ou une…",
      fr: "Dans ce document nous présentons la formulation d'un nouveau type d'éléments finis. Il s'agit d'un élément hydromécanique traversé par une discontinuité (une interface ou une…",
    },
  },
  {
    id: "r7.02.19",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.02.19/index.html",
    blurb: {
      en: "Ce document présente les différents éléments cohésifs disponibles avec la méthode des éléments finis étendus (X-FEM). Trois types de lois cohésives sont disponibles. La loi…",
      fr: "Ce document présente les différents éléments cohésifs disponibles avec la méthode des éléments finis étendus (X-FEM). Trois types de lois cohésives sont disponibles. La loi…",
    },
  },
  {
    id: "r7.02.20",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.02.20/index.html",
    blurb: {
      en: "Abstract:",
      fr: "Abstract:",
    },
  },
  {
    id: "r7.02.21",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.02.21/index.html",
    blurb: {
      en: "La loi de comportement cohésive CZM_TURON permet de modéliser l'endommagement d'une interface fissurante telle que l'ouverture de la fissure génère des forces de cohésion entre…",
      fr: "La loi de comportement cohésive CZM_TURON permet de modéliser l'endommagement d'une interface fissurante telle que l'ouverture de la fissure génère des forces de cohésion entre…",
    },
  },
  {
    id: "r7.02.22",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.02.22/index.html",
    blurb: {
      en: "Summary:",
      fr: "Summary:",
    },
  },
  {
    id: "r7.02.23",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.02.23/index.html",
    blurb: {
      en: "Ce document décrit la loi de comportement cohésive CZM_FROT_MIX, modélisant l’ouverture et le glissement d’une interface selon la loi de frottement de Coulomb. CZM_FROT_MIX…",
      fr: "Ce document décrit la loi de comportement cohésive CZM_FROT_MIX, modélisant l’ouverture et le glissement d’une interface selon la loi de frottement de Coulomb. CZM_FROT_MIX…",
    },
  },
  {
    id: "r7.04.01",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.04.01/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r7.04.02",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.04.02/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r7.04.03",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.04.03/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r7.04.04",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.04.04/index.html",
    blurb: {
      en: "Dans cette note nous proposons une formulation des critères de MATAKE, de DANG VAN et de FATEMI-SOCIE et des critères en formule adaptée au cadre du cumul de dommage sous…",
      fr: "Dans cette note nous proposons une formulation des critères de MATAKE, de DANG VAN et de FATEMI-SOCIE et des critères en formule adaptée au cadre du cumul de dommage sous…",
    },
  },
  {
    id: "r7.04.05",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.04.05/index.html",
    blurb: {
      en: "On présente l'algorithme de calcul des densités de ferraillage des éléments en béton armé, tel qu'implanté au sein de la commande CALC_FERRAILLAGE.",
      fr: "On présente l'algorithme de calcul des densités de ferraillage des éléments en béton armé, tel qu'implanté au sein de la commande CALC_FERRAILLAGE.",
    },
  },
  {
    id: "r7.04.10",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.04.10/index.html",
    blurb: {
      en: "Cette note présente trois lois d'usure qui permettent d'évaluer le volume usé à partir des quantités issues d'un calcul dynamique effectué avec l'opérateur DYNA_VIBRA U4.54.03…",
      fr: "Cette note présente trois lois d'usure qui permettent d'évaluer le volume usé à partir des quantités issues d'un calcul dynamique effectué avec l'opérateur DYNA_VIBRA U4.54.03…",
    },
  },
  {
    id: "r7.05.01",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.05.01/index.html",
    blurb: {
      en: "Ce document présente les différents critères de stabilité mécanique disponibles dans *Code_Aster* . On peut les classer suivant deux catégories:",
      fr: "Ce document présente les différents critères de stabilité mécanique disponibles dans *Code_Aster* . On peut les classer suivant deux catégories:",
    },
  },
  {
    id: "r7.05.02",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.05.02/index.html",
    blurb: {
      en: "La commande CALC_STAB_PENTE permet d’analyser la stabilité statique des pentes en remblai modélisées en 2D dans les ouvrages hydrauliques tels que les barrages, les talus et…",
      fr: "La commande CALC_STAB_PENTE permet d’analyser la stabilité statique des pentes en remblai modélisées en 2D dans les ouvrages hydrauliques tels que les barrages, les talus et…",
    },
  },
  {
    id: "r7.07.01",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.07.01/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r7.10.01",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.10.01/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r7.10.02",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.10.02/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r7.10.03",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.10.03/index.html",
    blurb: {
      en: "Résumé :",
      fr: "Résumé :",
    },
  },
  {
    id: "r7.10.04",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.10.04/index.html",
    blurb: {
      en: "L’opérateur POST_ROCHE est un post-traitement de calculs purement linéaires élastiques, qui utilise la méthode Roche pour évaluer la réponse d'une ligne de tuyauteries sous…",
      fr: "L’opérateur POST_ROCHE est un post-traitement de calculs purement linéaires élastiques, qui utilise la méthode Roche pour évaluer la réponse d'une ligne de tuyauteries sous…",
    },
  },
  {
    id: "r7.20.01",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.20.01/index.html",
    blurb: {
      en: "La commande PROJ_CHAMP permet de \"projeter\" des champs (connus sur un maillage $\\mathit{ma1}$ ) sur un autre maillage $\\mathit{ma2}$ .",
      fr: "La commande PROJ_CHAMP permet de \"projeter\" des champs (connus sur un maillage $\\mathit{ma1}$ ) sur un autre maillage $\\mathit{ma2}$ .",
    },
  },
  {
    id: "r7.20.02",
    part: "R7",
    sourceUrl: "https://codeaster.gitlab.io/doc/docaster/manuals/man_r/r7/r7.20.02/index.html",
    blurb: {
      en: "Une démarche d’extrapolation de résultats de mesures expérimentales en dynamique (déplacements, vitesses, accélérations, déformations, contraintes) sur un modèle numérique est…",
      fr: "Une démarche d’extrapolation de résultats de mesures expérimentales en dynamique (déplacements, vitesses, accélérations, déformations, contraintes) sur un modèle numérique est…",
    },
  },
];

export function docById(id: string): DocMeta | undefined {
  return CATALOG.find((d) => d.id === id);
}
