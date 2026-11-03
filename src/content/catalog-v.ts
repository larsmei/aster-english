import type { DocMeta } from "./catalog";

export const V_CATALOG = JSON.parse(`[
  {
    "id": "v0.00.000",
    "part": "V0",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v0/v0.00.000/index.html",
    "blurb": {
      "en": "Classification of Validation Documentation",
      "fr": "Classement de la documentation de Validation"
    }
  },
  {
    "id": "v0.01.001",
    "part": "V0",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v0/v0.01.001/index.html",
    "blurb": {
      "en": "MODEL01 - Title of test case (Model of a validation document)",
      "fr": "MODEL01 - Titre du cas test (Modèle d’un document de validation)"
    }
  },
  {
    "id": "v0.01.002",
    "part": "V0",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v0/v0.01.002/index.html",
    "blurb": {
      "en": "MODEL02 - Title of test case (Model of a brief validation document)",
      "fr": "MODEL02 - Titre du cas test (Modèle d’un document de validation succinct)"
    }
  },
  {
    "id": "v1.01.100",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.100/index.html",
    "blurb": {
      "en": "ZZZZ100 – Functions, sheets, formulas",
      "fr": "ZZZZ100 – Fonctions, nappes, formules"
    }
  },
  {
    "id": "v1.01.101",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.101/index.html",
    "blurb": {
      "en": "ZZZZ101 - Validation of AFFE_CARA_ELEM and POST_ELEM Operators",
      "fr": "ZZZZ101 - Validation des opérateurs AFFE_CARA_ELEM et POST_ELEM"
    }
  },
  {
    "id": "v1.01.102",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.102/index.html",
    "blurb": {
      "en": "ZZZZ102 - Read accelerogram and oscillator spectrum",
      "fr": "ZZZZ102 - Lire accélérogramme et spectre d'oscillateur"
    }
  },
  {
    "id": "v1.01.103",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.103/index.html",
    "blurb": {
      "en": "ZZZZ103 – Jeveux memory manager core function unit tests",
      "fr": "ZZZZ103 – Tests unitaires de fonctions de base du gestionnaire de mémoire Jeveux"
    }
  },
  {
    "id": "v1.01.104",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.104/index.html",
    "blurb": {
      "en": "ZZZZ104 – Validation of command variables in split commands with macro-elements",
      "fr": "ZZZZ104 – Validation des variables de commandes en commandes éclatées avec des macro-éléments"
    }
  },
  {
    "id": "v1.01.105",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.105/index.html",
    "blurb": {
      "en": "ZZZZ105 – VISC_ENDO_LEMA law IT validation",
      "fr": "ZZZZ105 – Validation informatique de la loi VISC_ENDO_LEMA"
    }
  },
  {
    "id": "v1.01.106",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.106/index.html",
    "blurb": {
      "en": "ZZZZ106 - Geometric criteria in DEFI_GROUP",
      "fr": "ZZZZ106 - Critères géométriques dans DEFI_GROUP"
    }
  },
  {
    "id": "v1.01.107",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.107/index.html",
    "blurb": {
      "en": "RCCM01 - Operator POST_RCCM",
      "fr": "RCCM01 - Opérateur POST_RCCM"
    }
  },
  {
    "id": "v1.01.108",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.108/index.html",
    "blurb": {
      "en": "ZZZZ108 - Code_Aster-MISS3D Interface Test",
      "fr": "ZZZZ108 - Test de l'interface Code_Aster-MISS3D"
    }
  },
  {
    "id": "v1.01.109",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.109/index.html",
    "blurb": {
      "en": "ZZZZ109 – Basic check of 'matr_asse.EXTR_MATR'",
      "fr": "ZZZZ109 – Vérification élémentaire de 'matr_asse.EXTR_MATR'"
    }
  },
  {
    "id": "v1.01.110",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.110/index.html",
    "blurb": {
      "en": "ZZZZ110 - Validation of PROJ_CHAMP / ELEM command (in 2D and wired)",
      "fr": "ZZZZ110 - Validation de la commande PROJ_CHAMP / ELEM (en 2D et en filaire)"
    }
  },
  {
    "id": "v1.01.111",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.111/index.html",
    "blurb": {
      "en": "ZZZZ111 - Validation of the DEFI_CABLE_BP operator",
      "fr": "ZZZZ111 - Validation de l’opérateur DEFI_CABLE_BP"
    }
  },
  {
    "id": "v1.01.112",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.112/index.html",
    "blurb": {
      "en": "ZZZZ112 - Cylinder under variable pressure. Validation of LIRE_PLEXUS",
      "fr": "ZZZZ112 - Cylindre sous pression variable. Validation de LIRE_PLEXUS"
    }
  },
  {
    "id": "v1.01.113",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.113/index.html",
    "blurb": {
      "en": "ZZZZ113 – Projection of boundary conditions on eigenmodes",
      "fr": "ZZZZ113 – Projection des conditions limites sur des modes propres"
    }
  },
  {
    "id": "v1.01.114",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.114/index.html",
    "blurb": {
      "en": "ZZZZ114 – Validation of PENTA18 printing and rereading in MED format",
      "fr": "ZZZZ114 – Validation de l’impression et de la relecture des PENTA18 au format MED"
    }
  },
  {
    "id": "v1.01.115",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.115/index.html",
    "blurb": {
      "en": "ZZZZ115 - Validation of the CALC_COUPURE command",
      "fr": "ZZZZ115 - Validation de la commande CALC_COUPURE"
    }
  },
  {
    "id": "v1.01.116",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.116/index.html",
    "blurb": {
      "en": "ZZZZ116 – Validation of the theta field calculation in CALC_G",
      "fr": "ZZZZ116 – Validation du calcul du champ theta dans CALC_G"
    }
  },
  {
    "id": "v1.01.117",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.117/index.html",
    "blurb": {
      "en": "ZZZZ314 – Validation of the calculation of the object .BASLOC for the sizes",
      "fr": "ZZZZ314 – Validation du calcul de l’objet .BASLOC pour les entailles"
    }
  },
  {
    "id": "v1.01.119",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.119/index.html",
    "blurb": {
      "en": "ZZZZ119 - PROJ_CHAMP for 3D surfaces",
      "fr": "ZZZZ119 - PROJ_CHAMP pour des surfaces en 3D"
    }
  },
  {
    "id": "v1.01.121",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.121/index.html",
    "blurb": {
      "en": "ZZZZ121 - mesh adaptation with HOMARD",
      "fr": "ZZZZ121 - Adaptation de maillage avec HOMARD"
    }
  },
  {
    "id": "v1.01.122",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.122/index.html",
    "blurb": {
      "en": "ZZZZ122 – Validation of the deformation calculation due to control variables",
      "fr": "ZZZZ122 – Validation du calcul des déformations dues aux variables de commandes"
    }
  },
  {
    "id": "v1.01.123",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.123/index.html",
    "blurb": {
      "en": "ZZZZ123 - Material properties verification of BETON_GLRC/CODIFICATION=",
      "fr": "ZZZZ123 - Vérification des propriétés matériau de BETON_GLRC/CODIFICATION=’EC2’"
    }
  },
  {
    "id": "v1.01.124",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.124/index.html",
    "blurb": {
      "en": "ZZZZ124 - Checking the EFGE_ELNO and SIEF_ELNO mark change.",
      "fr": "ZZZZ124 - Vérification du changement de repère des EFGE_ELNO et SIEF_ELNO."
    }
  },
  {
    "id": "v1.01.125",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.125/index.html",
    "blurb": {
      "en": "ZZZZ125 - POST_FM IT Validation",
      "fr": "ZZZZ125 - Validation informatique de POST_FM"
    }
  },
  {
    "id": "v1.01.126",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.126/index.html",
    "blurb": {
      "en": "ZZZZ126 - Validation of CREA_CHAMP OPERATION command: 'ASSE'",
      "fr": "ZZZZ126 - Validation de la commande CREA_CHAMP OPERATION : 'ASSE'"
    }
  },
  {
    "id": "v1.01.127",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.127/index.html",
    "blurb": {
      "en": "ZZZZ127 - Validation of keyword LIAISON_MAIL",
      "fr": "ZZZZ127 - Validation du mot clé LIAISON_MAIL"
    }
  },
  {
    "id": "v1.01.128",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.128/index.html",
    "blurb": {
      "en": "ZZZZ128 - Validation of LIRE_TABLE and IMPR_TABLE commands",
      "fr": "ZZZZ128 - Validation des commandes LIRE_TABLE et IMPR_TABLE"
    }
  },
  {
    "id": "v1.01.129",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.129/index.html",
    "blurb": {
      "en": "ZZZZ129 – Validating the CREA_RESU command key word factor PROL_RTZ",
      "fr": "ZZZZ129 – Validation de la commande CREA_RESU mot clé facteur PROL_RTZ"
    }
  },
  {
    "id": "v1.01.130",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.130/index.html",
    "blurb": {
      "en": "ZZZZ130 - Validation of the CREA_CHAMP/OPERATION command = 'EVAL' / 'DISC'",
      "fr": "ZZZZ130 - Validation de la commande CREA_CHAMP/OPERATION = 'EVAL' / 'DISC'"
    }
  },
  {
    "id": "v1.01.131",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.131/index.html",
    "blurb": {
      "en": "ZZZZ131 - CREA_RESU command validation key word factor PERM_CHAM",
      "fr": "ZZZZ131 - Validation de la commande CREA_RESU mot clé facteur PERM_CHAM"
    }
  },
  {
    "id": "v1.01.132",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.132/index.html",
    "blurb": {
      "en": "ZZZZ132 – non-regression validation of MED data playback",
      "fr": "ZZZZ132 – Validation de non régression de la lecture de données MED"
    }
  },
  {
    "id": "v1.01.133",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.133/index.html",
    "blurb": {
      "en": "ZZZZ133 – Validation of the correct consideration of the elastic control variables",
      "fr": "ZZZZ133 – Validation de la bonne prise en compte des variables de commande en élasticité"
    }
  },
  {
    "id": "v1.01.134",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.134/index.html",
    "blurb": {
      "en": "ZZZZ134 – Calculation and extraction of the discharge matrix",
      "fr": "ZZZZ134 – Calcul et extraction de la matrice de décharge"
    }
  },
  {
    "id": "v1.01.135",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.135/index.html",
    "blurb": {
      "en": "ZZZZ135 - Computer validation of SRM methods in CALC_STAB_PENTE macro-command",
      "fr": "ZZZZ135 - Validation informatique des méthodes SRM dans la macro-commande CALC_STAB_PENTE"
    }
  },
  {
    "id": "v1.01.136",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.136/index.html",
    "blurb": {
      "en": "ZZZZ136 - Validation of POST_RELEVE_T",
      "fr": "ZZZZ136 - Validation de POST_RELEVE_T"
    }
  },
  {
    "id": "v1.01.137",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.137/index.html",
    "blurb": {
      "en": "ZZZZ137 - AFFE_CHAR_MECA and AFFE_CHAR_THER Operators: validation of EVOL_CHAR, PRES_REP, FORCE_CONTOUR keywords",
      "fr": "ZZZZ137 - Opérateurs AFFE_CHAR_MECA et AFFE_CHAR_THER : validation des mots clés EVOL_CHAR, PRES_REP, FORCE_CONTOUR"
    }
  },
  {
    "id": "v1.01.138",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.138/index.html",
    "blurb": {
      "en": "ZZZZ138 – Validation of the mesh partitioner",
      "fr": "ZZZZ138 – Validation du partitionneur de maillages"
    }
  },
  {
    "id": "v1.01.139",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.139/index.html",
    "blurb": {
      "en": "ZZZZ139 - Validation of the CREA_COUPE command",
      "fr": "ZZZZ139 - Validation de la commande CREA_COUPE"
    }
  },
  {
    "id": "v1.01.140",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.140/index.html",
    "blurb": {
      "en": "ZZZZ140 – Validation of POST_MODE for MASS_EFFE and INER_EFFE calculation",
      "fr": "ZZZZ140 – Validation de POST_MODE pour le calcul de MASS_EFFE et INER_EFFE"
    }
  },
  {
    "id": "v1.01.142",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.142/index.html",
    "blurb": {
      "en": "ZZZZ142 – Computer validation of the calculation of potential energy",
      "fr": "ZZZZ142 – Validation informatique du calcul de l’énergie potentielle"
    }
  },
  {
    "id": "v1.01.143",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.143/index.html",
    "blurb": {
      "en": "ZZZZ143 – Computer validation of the equivalence between stationary and conditional transient calculations.",
      "fr": "ZZZZ143– Validation informatique de l'équivalence entre calculs stationnaires et transitoires sous condition."
    }
  },
  {
    "id": "v1.01.144",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.144/index.html",
    "blurb": {
      "en": "ZZZZ144 - Validation of LIAISON_SOLIDE and LIAISON_RBE3",
      "fr": "ZZZZ144 - Validation de LIAISON_SOLIDE et LIAISON_RBE3"
    }
  },
  {
    "id": "v1.01.145",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.145/index.html",
    "blurb": {
      "en": "ZZZZ145 – Validation of RIGI_PARASOL key word for AFFE_CARA_ELEM command",
      "fr": "ZZZZ145 – Validation du mot clef RIGI_PARASOL de la commande AFFE_CARA_ELEM"
    }
  },
  {
    "id": "v1.01.146",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.146/index.html",
    "blurb": {
      "en": "ZZZZ146 - Computer validation of LEM methods in CALC_STAB_PENTE macro-command",
      "fr": "ZZZZ146 - Validation informatique des méthodes LEM dans la macro-commande CALC_STAB_PENTE"
    }
  },
  {
    "id": "v1.01.147",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.147/index.html",
    "blurb": {
      "en": "ZZZZ147 – Validation of POST_COMBINAISON operation on simple geometry",
      "fr": "ZZZZ147 – Validation du fonctionnement de POST_COMBINAISON sur une géométrie simple"
    }
  },
  {
    "id": "v1.01.150",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.150/index.html",
    "blurb": {
      "en": "ZZZZ150 - Validation of the IMPR_FONCTION Operator",
      "fr": "ZZZZ150 - Validation de l'opérateur IMPR_FONCTION"
    }
  },
  {
    "id": "v1.01.151",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.151/index.html",
    "blurb": {
      "en": "ZZZZ151 – Validating the EXEC_LOGICIEL Operator when calling mesh Tools",
      "fr": "ZZZZ151 – Validation de l'opérateur EXEC_LOGICIEL lors de l'appel aux outils de maillage"
    }
  },
  {
    "id": "v1.01.152",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.152/index.html",
    "blurb": {
      "en": "ZZZZ152 – validation of features in DYNA_NON_LINE",
      "fr": "ZZZZ152 – validation des fonctionnalités dans DYNA_NON_LINE"
    }
  },
  {
    "id": "v1.01.153",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.153/index.html",
    "blurb": {
      "en": "ZZZZ153 – Validation of the AMOR_MECA option in the 3D_JOINT calculation",
      "fr": "ZZZZ153 – Validation de l'option AMOR_MECA dans le calcul 3D_JOINT"
    }
  },
  {
    "id": "v1.01.154",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.154/index.html",
    "blurb": {
      "en": "ZZZZ154 – Verification of composite types",
      "fr": "ZZZZ154 – Vérification des types « composites »"
    }
  },
  {
    "id": "v1.01.155",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.155/index.html",
    "blurb": {
      "en": "ZZZZ155 – mesh cutting machine verification",
      "fr": "ZZZZ155 – Vérification du découpeur de maillage"
    }
  },
  {
    "id": "v1.01.156",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.156/index.html",
    "blurb": {
      "en": "ZZZZ156 – REAC_NODA verification after DYNA_NON_LINE",
      "fr": "ZZZZ156 – Vérification du REAC_NODA après un DYNA_NON_LINE"
    }
  },
  {
    "id": "v1.01.161",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.161/index.html",
    "blurb": {
      "en": "ZZZZ161 - MED format exchange, computer control",
      "fr": "ZZZZ161 - Échange au format MED, contrôle informatique"
    }
  },
  {
    "id": "v1.01.162",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.162/index.html",
    "blurb": {
      "en": "ZZZZ162 – Validating the field writing and rereading in MED format",
      "fr": "ZZZZ162 – Validation de l'écriture et de la relecture des champs au format MED"
    }
  },
  {
    "id": "v1.01.163",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.163/index.html",
    "blurb": {
      "en": "ZZZZ163 – Validation of POST_BEREMIN Macro-Command",
      "fr": "ZZZZ163 – Validation de la macro-commande POST_BEREMIN"
    }
  },
  {
    "id": "v1.01.164",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.164/index.html",
    "blurb": {
      "en": "ZZZZ164 - Validation of keywords DEFORME, TRANSLATION, ROTATION, MODI_BASE and ECHELLE of the MODI_MAILLAGE command",
      "fr": "ZZZZ164 - Validation des mots clés DEFORME, TRANSLATION, ROTATION, MODI_BASE et ECHELLE de la commande MODI_MAILLAGE"
    }
  },
  {
    "id": "v1.01.165",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.165/index.html",
    "blurb": {
      "en": "ZZZZ165 - LIRE_RESU in 'IDEAS' format",
      "fr": "ZZZZ165 - LIRE_RESU au format 'IDEAS'"
    }
  },
  {
    "id": "v1.01.166",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.166/index.html",
    "blurb": {
      "en": "ZZZZ166 - Calculation of the heat flow",
      "fr": "ZZZZ166 - Calcul du flux en thermique"
    }
  },
  {
    "id": "v1.01.167",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.167/index.html",
    "blurb": {
      "en": "ZZZZ167 - CALC_THER_MULT command validation",
      "fr": "ZZZZ167 - validation de la commande CALC_THER_MULT"
    }
  },
  {
    "id": "v1.01.168",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.168/index.html",
    "blurb": {
      "en": "ZZZZ168 - Validation of the CALC_MECA_MULT command",
      "fr": "ZZZZ168 - Validation de la commande CALC_MECA_MULT"
    }
  },
  {
    "id": "v1.01.169",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.169/index.html",
    "blurb": {
      "en": "ZZZZ169 - Validation of the EXTR_COUPE command",
      "fr": "ZZZZ169 - Validation de la commande EXTR_COUPE"
    }
  },
  {
    "id": "v1.01.175",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.175/index.html",
    "blurb": {
      "en": "ZZZZ175 - Aster-Homard pairing on a STAT_NON_LINE calculation",
      "fr": "ZZZZ175 - Couplage Aster-Homard sur un calcul STAT_NON_LINE"
    }
  },
  {
    "id": "v1.01.176",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.176/index.html",
    "blurb": {
      "en": "ZZZZ176 – Validation of PRE_IDEAS, PRE_GMSH, PRE_GIBI, LIRE_RESU and IMPR_RESU Operators",
      "fr": "ZZZZ176 – Validation des opérateurs PRE_IDEAS, PRE_GMSH, PRE_GIBI, LIRE_RESU et IMPR_RESU"
    }
  },
  {
    "id": "v1.01.177",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.177/index.html",
    "blurb": {
      "en": "ZZZZ177 – Validation of Table Operations",
      "fr": "ZZZZ177 – Validation des opérations sur les tables"
    }
  },
  {
    "id": "v1.01.178",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.178/index.html",
    "blurb": {
      "en": "ZZZZ178- Validation of the thermo-mechanical chaining methodology in HPC",
      "fr": "ZZZZ178- Validation de la méthodologie de chaînage thermo-mécanique en HPC"
    }
  },
  {
    "id": "v1.01.180",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.180/index.html",
    "blurb": {
      "en": "ZZZZ180 - Analytical tests related to the generation of random signals with GENE_FONC_ALEA",
      "fr": "ZZZZ180 - Tests analytiques liés à la génération de signaux aléatoires avec GENE_FONC_ALEA"
    }
  },
  {
    "id": "v1.01.185",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.185/index.html",
    "blurb": {
      "en": "ZZZZ185 - Validation of MODI_MAILLAGE command associated with SYMETRIE and PROJ_CHAMP command associated with DISTANCE_MAX",
      "fr": "ZZZZ185 - Validation de la commande MODI_MAILLAGE associée à SYMETRIE et de la commande PROJ_CHAMP associée à DISTANCE_MAX"
    }
  },
  {
    "id": "v1.01.186",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.186/index.html",
    "blurb": {
      "en": "ZZZZ186 - Validation of the IMPR_OAR Operator",
      "fr": "ZZZZ186 - Validation de l'opérateur IMPR_OAR"
    }
  },
  {
    "id": "v1.01.189",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.189/index.html",
    "blurb": {
      "en": "ZZZZ189 – Circumferential orientation by a Python loop",
      "fr": "ZZZZ189 – Orientation circonférentielle par une boucle Python"
    }
  },
  {
    "id": "v1.01.191",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.191/index.html",
    "blurb": {
      "en": "ZZZZ191 – Validation of AFFE_CHAR_MECA and AFFE_CHAR_CINE Operators in the case of a required displacement",
      "fr": "ZZZZ191 – Validation des opérateurs AFFE_CHAR_MECA et AFFE_CHAR_CINE dans le cas d'un déplacement imposé"
    }
  },
  {
    "id": "v1.01.196",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.196/index.html",
    "blurb": {
      "en": "VOCAB01 – A fictional test to produce the vocabulary of the order catalog",
      "fr": "VOCAB01 – Test fictif pour produire le vocabulaire du catalogue de commandes"
    }
  },
  {
    "id": "v1.01.205",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.205/index.html",
    "blurb": {
      "en": "ZZZZ205 – Calculation of kinetic energy of a rectangular plate",
      "fr": "ZZZZ205 – Calcul de l'énergie cinétique d'une plaque rectangulaire"
    }
  },
  {
    "id": "v1.01.206",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.206/index.html",
    "blurb": {
      "en": "ZZZZ206 - CREA_MAILLAGE Operator: QUAD_LINE keyword validation",
      "fr": "ZZZZ206 - Opérateur CREA_MAILLAGE : validation du mot clé QUAD_LINE"
    }
  },
  {
    "id": "v1.01.208",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.208/index.html",
    "blurb": {
      "en": "ZZZZ208 – Validation of Generalized Terms Extraction and Recovery Methods",
      "fr": "ZZZZ208 – Validation des méthodes d'extraction et de récupération des termes généralisés"
    }
  },
  {
    "id": "v1.01.213",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.213/index.html",
    "blurb": {
      "en": "ZZZZ213 – Validation of AFFE_CHAR_MECA/AFFE_CHAR_CINE Operators with LDLT/MULT_FRONT/GCPC Solvers",
      "fr": "ZZZZ213 – Validation des opérateurs AFFE_CHAR_MECA/AFFE_CHAR_CINE avec les solveurs LDLT/MULT_FRONT/GCPC"
    }
  },
  {
    "id": "v1.01.215",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.215/index.html",
    "blurb": {
      "en": "ZZZZ215 – 3D chaining code_saturne-code_aster",
      "fr": "ZZZZ215 – Chaînage 3D code_saturne-code_aster"
    }
  },
  {
    "id": "v1.01.216",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.216/index.html",
    "blurb": {
      "en": "ZZZZ216 – Low 3D coupling code_saturne-code_aster",
      "fr": "ZZZZ216 – Couplage faible 3D code_saturne-code_aster"
    }
  },
  {
    "id": "v1.01.218",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.218/index.html",
    "blurb": {
      "en": "ZZZZ218 – Validation of the MACR_ECREVISSE command",
      "fr": "ZZZZ218 – Validation de la commande MACR_ECREVISSE"
    }
  },
  {
    "id": "v1.01.219",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.219/index.html",
    "blurb": {
      "en": "ZZZZ219 - AFFE_CHAR_MECA: keyword FACE_IMPO validation",
      "fr": "ZZZZ219 - AFFE_CHAR_MECA : validation du mot-clé FACE_IMPO"
    }
  },
  {
    "id": "v1.01.221",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.221/index.html",
    "blurb": {
      "en": "ZZZZ221 – Validation of a thermo-hydration chaining calculation",
      "fr": "ZZZZ221 – Validation d'un calcul de chainage thermo-hydradation"
    }
  },
  {
    "id": "v1.01.222",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.222/index.html",
    "blurb": {
      "en": "ZZZZ222 – Validation of AFFE_CHAR_CINE Overload Mechanism",
      "fr": "ZZZZ222 – Validation du mécanisme de surcharge d'AFFE_CHAR_CINE"
    }
  },
  {
    "id": "v1.01.223",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.223/index.html",
    "blurb": {
      "en": "ZZZZ223 - Validation of CREA_RESU/ASSE and AFFE_MATERIAU/AFFE_VARC/FONC_INST",
      "fr": "ZZZZ223 - Validation de CREA_RESU/ASSE et AFFE_MATERIAU/AFFE_VARC/FONC_INST"
    }
  },
  {
    "id": "v1.01.224",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.224/index.html",
    "blurb": {
      "en": "ERREU01 - CALCUL and PRERES Routine Error Messages Emissor Test",
      "fr": "ERREU01 - Test d'émisson des messages d'erreur des routines CALCUL et PRERES"
    }
  },
  {
    "id": "v1.01.225",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.225/index.html",
    "blurb": {
      "en": "ERREU02 - Checking the backstop if command variables are missing",
      "fr": "ERREU02 - Vérification des gardes-fou s'il manque des variables de commande"
    }
  },
  {
    "id": "v1.01.226",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.226/index.html",
    "blurb": {
      "en": "PYNL01 - Integration of VMIS_ISOT_LINE behavior by CALCUL command",
      "fr": "PYNL01 - Intégration du comportement VMIS_ISOT_LINE par la commande CALCUL"
    }
  },
  {
    "id": "v1.01.227",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.227/index.html",
    "blurb": {
      "en": "ZZZZ227 – Validation of the creation of the reference temperature map",
      "fr": "ZZZZ227 – Validation de la création de la carte de température de référence"
    }
  },
  {
    "id": "v1.01.228",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.228/index.html",
    "blurb": {
      "en": "ZZZZ228 – PREP_VARC Operator Option CREA_RESU Validation",
      "fr": "ZZZZ228 – Validation de l’option PREP_VARC de l'opérateur CREA_RESU"
    }
  },
  {
    "id": "v1.01.229",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.229/index.html",
    "blurb": {
      "en": "ZZZZ229 - Validation of the AFFE_CHAR_MECA / LIAISON_SOLIDE + TRAN + ANGL_NAUT command",
      "fr": "ZZZZ229 - Validation de la commande AFFE_CHAR_MECA / LIAISON_SOLIDE + TRAN + ANGL_NAUT"
    }
  },
  {
    "id": "v1.01.230",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.230/index.html",
    "blurb": {
      "en": "ZZZZ230 – Implementation of the \\"structural zoom\\" on a 2D problem",
      "fr": "ZZZZ230 – Mise en œuvre du « zoom structural » sur un problème 2D"
    }
  },
  {
    "id": "v1.01.231",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.231/index.html",
    "blurb": {
      "en": "ZZZZ231 – Validation of contact in initial geometry",
      "fr": "ZZZZ231 – Validation du contact en géométrie initiale"
    }
  },
  {
    "id": "v1.01.233",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.233/index.html",
    "blurb": {
      "en": "ZZZZ233 – keyword FRAGILITE validation of the POST_DYNA_ALEA command",
      "fr": "ZZZZ233 – Validation du mot-clé FRAGILITE de la commande POST_DYNA_ALEA"
    }
  },
  {
    "id": "v1.01.234",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.234/index.html",
    "blurb": {
      "en": "ZZZZ234 - Test reference values for elements beams, bars, cables, discreet.",
      "fr": "ZZZZ234 - Test des valeurs de référence pour les éléments poutres, barres, câbles, discrets."
    }
  },
  {
    "id": "v1.01.235",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.235/index.html",
    "blurb": {
      "en": "PLEXU01 – Basic CALC_EUROPLEXUS command validation",
      "fr": "PLEXU01 – Validation élémentaire de la commande CALC_EUROPLEXUS"
    }
  },
  {
    "id": "v1.01.236",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.236/index.html",
    "blurb": {
      "en": "ZZZZ236 – keyword RESTREINT validation of the CREA_MAILLAGE operator",
      "fr": "ZZZZ236 – Validation du mot-clé RESTREINT de l'opérateur CREA_MAILLAGE"
    }
  },
  {
    "id": "v1.01.237",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.237/index.html",
    "blurb": {
      "en": "ZZZZ237 – LIAISON_UNIL and TOLE_APPA elemental validation",
      "fr": "ZZZZ237 – Validation élémentaire de LIAISON_UNIL et TOLE_APPA"
    }
  },
  {
    "id": "v1.01.238",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.238/index.html",
    "blurb": {
      "en": "ZZZZ238 - Normal displacements imposed on curved faces of 20 and 27 nodes hexahedrons and 18 nodes pentahedrons",
      "fr": "ZZZZ238 - Déplacements normaux imposés sur des faces courbes d’hexaèdres à 20 et 27 nœuds et de pentaèdres à 18 nœuds"
    }
  },
  {
    "id": "v1.01.239",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.239/index.html",
    "blurb": {
      "en": "ZZZZ239 - Validation of the calculation of the non-symmetric matrix for elements DKT",
      "fr": "ZZZZ239 - Validation du calcul de la matrice non-symétrique pour les éléments DKT"
    }
  },
  {
    "id": "v1.01.240",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.240/index.html",
    "blurb": {
      "en": "ZZZZ240 – Validation of EXTR_RESU/RESTREINT",
      "fr": "ZZZZ240 – Validation de EXTR_RESU/RESTREINT"
    }
  },
  {
    "id": "v1.01.241",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.241/index.html",
    "blurb": {
      "en": "ZZZZ241 – Validation of Transfer Functions",
      "fr": "ZZZZ241 – Validation du calcul des fonctions de transfert"
    }
  },
  {
    "id": "v1.01.248",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.248/index.html",
    "blurb": {
      "en": "PLEXU02 – Multi-domain CALC_EUROPLEXUS command verification",
      "fr": "PLEXU02 – Vérification de la commande CALC_EUROPLEXUS en multi-domaine"
    }
  },
  {
    "id": "v1.01.249",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.249/index.html",
    "blurb": {
      "en": "ZZZZ249 – Validation of POST_ELEM/INTEGRALE",
      "fr": "ZZZZ249 – Validation de POST_ELEM/INTEGRALE"
    }
  },
  {
    "id": "v1.01.250",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.250/index.html",
    "blurb": {
      "en": "ZZZZ250 – Validation of ORIE_PEAU_2D/GROUP_MA_SURF and ORIE_PEAU_3D/GROUP_MA_VOLU",
      "fr": "ZZZZ250 – Validation de ORIE_PEAU_2D/GROUP_MA_SURF et de ORIE_PEAU_3D/GROUP_MA_VOLU"
    }
  },
  {
    "id": "v1.01.253",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.253/index.html",
    "blurb": {
      "en": "ZZZZ253 – Non-linear mechanical calculation with mesh change",
      "fr": "ZZZZ253 – Calcul non linéaire mécanique avec changement de maillage"
    }
  },
  {
    "id": "v1.01.254",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.254/index.html",
    "blurb": {
      "en": "ZZZZ254 – Validation of ORIE_INTERF_POU",
      "fr": "ZZZZ254 – Validation de ORIE_INTERF_POU"
    }
  },
  {
    "id": "v1.01.256",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.256/index.html",
    "blurb": {
      "en": "ZZZZ256 – Validation of the combination of non-symmetric matrices",
      "fr": "ZZZZ256 – Validation de la combinaison de matrices non symétriques"
    }
  },
  {
    "id": "v1.01.257",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.257/index.html",
    "blurb": {
      "en": "ZZZZ257 - Error Estimator in Interest Quantity for Breaking Mechanics",
      "fr": "ZZZZ257 - Estimateur d'erreur en quantité d'intérêt pour la mécanique de la rupture"
    }
  },
  {
    "id": "v1.01.258",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.258/index.html",
    "blurb": {
      "en": "ZZZZ258 - STAT_NON_LINE ETAT_INIT Keyword Validation",
      "fr": "ZZZZ258 - Validation du mot clé ETAT_INIT de STAT_NON_LINE"
    }
  },
  {
    "id": "v1.01.259",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.259/index.html",
    "blurb": {
      "en": "ZZZZ259 - mesh Adaptation and 2D Border Tracking",
      "fr": "ZZZZ259 - Adaptation de maillage et suivi de frontières 2D"
    }
  },
  {
    "id": "v1.01.260",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.260/index.html",
    "blurb": {
      "en": "ERREU07 - Error messages when changing behavior prohibited",
      "fr": "ERREU07 - Messages d'erreur lors d'un changement de comportement interdit"
    }
  },
  {
    "id": "v1.01.261",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.261/index.html",
    "blurb": {
      "en": "ZZZZ261 - Validation of PROJ_CHAMP in 2D for nodes fields",
      "fr": "ZZZZ261 - Validation de PROJ_CHAMP en 2D pour des champs aux noeuds"
    }
  },
  {
    "id": "v1.01.264",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.264/index.html",
    "blurb": {
      "en": "ZZZZ264 – Validation of the POST_ENDO_FISS command",
      "fr": "ZZZZ264 – Validation de la commande POST_ENDO_FISS"
    }
  },
  {
    "id": "v1.01.265",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.265/index.html",
    "blurb": {
      "en": "ZZZZ265 - Validation of DYNA_NON_LINE command in parallel",
      "fr": "ZZZZ265 - Validation de la commande DYNA_NON_LINE en parallèle"
    }
  },
  {
    "id": "v1.01.266",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.266/index.html",
    "blurb": {
      "en": "ZZZZ266 - Validation of COOR_ELGA option",
      "fr": "ZZZZ266 - Validation de l'option COOR_ELGA de CALC_CHAM_ELEM"
    }
  },
  {
    "id": "v1.01.268",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.268/index.html",
    "blurb": {
      "en": "ZZZZ268 - Validation of POST_BORDET in 2D and 3D",
      "fr": "ZZZZ268 - Validation de POST_BORDET en 2D et 3D"
    }
  },
  {
    "id": "v1.01.269",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.269/index.html",
    "blurb": {
      "en": "PYNL02 - STAT_NON_LINE in split commands for elasto-plastic calculation",
      "fr": "PYNL02 - STAT_NON_LINE en commandes éclatées pour un calcul élasto-plastique"
    }
  },
  {
    "id": "v1.01.270",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.270/index.html",
    "blurb": {
      "en": "ZZZZ270 – Testing error messages from DEFI_MATERIAU",
      "fr": "ZZZZ270 – Test des messages d’erreurs issus de DEFI_MATERIAU"
    }
  },
  {
    "id": "v1.01.271",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.271/index.html",
    "blurb": {
      "en": "ZZZZ271 - Validation of PROJ_CHAMP in 2D and 3D for Gauss dot fields",
      "fr": "ZZZZ271 - Validation de PROJ_CHAMP en 2D et en 3D pour des champs aux points de Gauss"
    }
  },
  {
    "id": "v1.01.274",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.274/index.html",
    "blurb": {
      "en": "ZZZZ274 - Validation for non-symmetric discretes",
      "fr": "ZZZZ274 - Validation pour les discrets non symétriques"
    }
  },
  {
    "id": "v1.01.275",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.275/index.html",
    "blurb": {
      "en": "DISTR01 – Example parametric study",
      "fr": "DISTR01 – Exemple d'étude paramétrique"
    }
  },
  {
    "id": "v1.01.276",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.276/index.html",
    "blurb": {
      "en": "ERREU08 - Error message in case of interpenetration",
      "fr": "ERREU08 - Message d'erreur en cas d'interpénétration"
    }
  },
  {
    "id": "v1.01.277",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.277/index.html",
    "blurb": {
      "en": "ERREU03 - Simple singularity detection in MECA_STATIQUE",
      "fr": "ERREU03 - Détection de singularité simple dans MECA_STATIQUE"
    }
  },
  {
    "id": "v1.01.278",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.278/index.html",
    "blurb": {
      "en": "ERREU04 - Simple singularity detection in broken commands",
      "fr": "ERREU04 - Détection de singularité simple en commandes éclatées"
    }
  },
  {
    "id": "v1.01.279",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.279/index.html",
    "blurb": {
      "en": "ERREU05 - Checking for Recovery of Fatal Errors in STAT_NON_LINE",
      "fr": "ERREU05 - Vérification de la récupération des erreurs fatales dans STAT_NON_LINE"
    }
  },
  {
    "id": "v1.01.280",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.280/index.html",
    "blurb": {
      "en": "ERREU06 - Checking the operation of the NaN in Code_Aster",
      "fr": "ERREU06 - Vérification du fonctionnement du NaN dans Code_Aster"
    }
  },
  {
    "id": "v1.01.282",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.282/index.html",
    "blurb": {
      "en": "ZZZZ282 – Validation of crack definition on a grid by DEFI_FISS_XFEM",
      "fr": "ZZZZ282 – Validation de la définition d'une fissure sur une grille par DEFI_FISS_XFEM"
    }
  },
  {
    "id": "v1.01.283",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.283/index.html",
    "blurb": {
      "en": "ZZZZ283 – Validation of the use of a grid with X-FEM crack on a mesh refined by Homard",
      "fr": "ZZZZ283 – Validation de l'utilisation d'une grille avec une fissure X-FEM sur un maillage raffiné par Homard"
    }
  },
  {
    "id": "v1.01.284",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.284/index.html",
    "blurb": {
      "en": "ZZZZ284 - Validation of CHAR_MECA_HYDR_R and CHAR_MECA_SECH_R options",
      "fr": "ZZZZ284 - Validation des options CHAR_MECA_HYDR_R et CHAR_MECA_SECH_R"
    }
  },
  {
    "id": "v1.01.285",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.285/index.html",
    "blurb": {
      "en": "ZZZZ285 - PROJ_CHAMP Validation / Collocation",
      "fr": "ZZZZ285 - Validation de PROJ_CHAMP / Collocation"
    }
  },
  {
    "id": "v1.01.286",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.286/index.html",
    "blurb": {
      "en": "ZZZZ286 – Validation of the shift imposed on a edge",
      "fr": "ZZZZ286 – Validation du déplacement imposé sur une arête"
    }
  },
  {
    "id": "v1.01.287",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.287/index.html",
    "blurb": {
      "en": "ZZZZ287 – Basic POST_RUPTURE Operator Validation",
      "fr": "ZZZZ287 – Validation élémentaire de l'opérateur POST_RUPTURE"
    }
  },
  {
    "id": "v1.01.289",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.289/index.html",
    "blurb": {
      "en": "ZZZZ289 - Validation of the calculations of the elementary matrices of incompressible elements",
      "fr": "ZZZZ289 - Validations des calculs des matrices élémentaires des éléments incompressibles"
    }
  },
  {
    "id": "v1.01.291",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.291/index.html",
    "blurb": {
      "en": "ZZZZ291 – keyword NORME POST_ELEM validation",
      "fr": "ZZZZ291 – Validation du mot-clé NORME de POST_ELEM"
    }
  },
  {
    "id": "v1.01.292",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.292/index.html",
    "blurb": {
      "en": "ZZZZ292 – SANS_GROUP_NO_FR elemental validation",
      "fr": "ZZZZ292 – Validation élémentaire de SANS_GROUP_NO_FR"
    }
  },
  {
    "id": "v1.01.293",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.293/index.html",
    "blurb": {
      "en": "ZZZZ293 – Validation of the position of the sub-points of multifibre beams",
      "fr": "ZZZZ293 – Validation de la position des sous-points des poutres multifibres"
    }
  },
  {
    "id": "v1.01.294",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.294/index.html",
    "blurb": {
      "en": "ZZZZ294 – Validation of the position of sub-points of 3D plates",
      "fr": "ZZZZ294 – Validation de la position des sous-points des plaques 3D"
    }
  },
  {
    "id": "v1.01.295",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.295/index.html",
    "blurb": {
      "en": "ZZZZ295 – Validation of the position of the sub-points of 2D plates",
      "fr": "ZZZZ295 – Validation de la position des sous-points des plaques 2D"
    }
  },
  {
    "id": "v1.01.296",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.296/index.html",
    "blurb": {
      "en": "ZZZZ296 – Validation of the position of the pipe sub-points",
      "fr": "ZZZZ296 – Validation de la position des sous-points des tuyaux"
    }
  },
  {
    "id": "v1.01.297",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.297/index.html",
    "blurb": {
      "en": "ZZZZ297 – Validation of LIAISON_PROJ key word for AFFE_CHAR_MECA command",
      "fr": "ZZZZ297 – Validation du mot clef LIAISON_PROJ de la commande AFFE_CHAR_MECA"
    }
  },
  {
    "id": "v1.01.298",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.298/index.html",
    "blurb": {
      "en": "ZZZZ298 – POST_K1_K2_K3 IT Validation",
      "fr": "ZZZZ298 – Validation informatique de POST_K1_K2_K3"
    }
  },
  {
    "id": "v1.01.299",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.299/index.html",
    "blurb": {
      "en": "ZZZZ299 - Checking Local Benchmarks",
      "fr": "ZZZZ299 - Vérification des repères locaux"
    }
  },
  {
    "id": "v1.01.301",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.301/index.html",
    "blurb": {
      "en": "SUPV001 – INCLUDE operation check",
      "fr": "SUPV001 – Vérification du fonctionnement de INCLUDE"
    }
  },
  {
    "id": "v1.01.302",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.302/index.html",
    "blurb": {
      "en": "SUPV002 – Checking message catalogues",
      "fr": "SUPV002 – Vérification des catalogues de messages"
    }
  },
  {
    "id": "v1.01.303",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.303/index.html",
    "blurb": {
      "en": "ERREU09 – Validation of Exceptions",
      "fr": "ERREU09 – Validation du traitement des exceptions"
    }
  },
  {
    "id": "v1.01.304",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.304/index.html",
    "blurb": {
      "en": "ZZZZ304 – Projection of a field by elements ELNO discontinu",
      "fr": "ZZZZ304 – Projection d'un champ par éléments ELNO discontinu"
    }
  },
  {
    "id": "v1.01.305",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.305/index.html",
    "blurb": {
      "en": "ZZZZ305 – Validation of DEFI_CABLE_BP",
      "fr": "ZZZZ305 – Validation de DEFI_CABLE_BP"
    }
  },
  {
    "id": "v1.01.306",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.306/index.html",
    "blurb": {
      "en": "ZZZZ306 – PROJ_CHAMP / ECLA_PG Check",
      "fr": "ZZZZ306 – Vérification de PROJ_CHAMP / ECLA_PG"
    }
  },
  {
    "id": "v1.01.307",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.307/index.html",
    "blurb": {
      "en": "ZZZZ307 - Computer validation of parallelism of elementary calculations and assemblies",
      "fr": "ZZZZ307 - Validation informatique du parallélisme des calculs élémentaires et des assemblages"
    }
  },
  {
    "id": "v1.01.308",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.308/index.html",
    "blurb": {
      "en": "ERREU10 - Stop validation for instability in STAT_NON_LINE",
      "fr": "ERREU10 - Validation de l'arrêt pour instabilité dans STAT_NON_LINE"
    }
  },
  {
    "id": "v1.01.309",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.309/index.html",
    "blurb": {
      "en": "ZZZZ309 - Validation of ZONE_MAJ and TORE topological options in DEFI_GROUP",
      "fr": "ZZZZ309 - Validation des options topologiques ZONE_MAJ et TORE dans DEFI_GROUP"
    }
  },
  {
    "id": "v1.01.312",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.312/index.html",
    "blurb": {
      "en": "PLEXU03 – Validation of prestress cables in CALC_EUROPLEXUS",
      "fr": "PLEXU03 – Validation des câbles de précontrainte dans CALC_EUROPLEXUS"
    }
  },
  {
    "id": "v1.01.313",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.313/index.html",
    "blurb": {
      "en": "ZZZZ313 – Test for verification of the rumpy/lapack",
      "fr": "ZZZZ313 – Test de vérification de numpy/lapack"
    }
  },
  {
    "id": "v1.01.314",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.314/index.html",
    "blurb": {
      "en": "ZZZZ314 – DEFI_FOND_FISS IT Validation",
      "fr": "ZZZZ314 – Validation informatique de DEFI_FOND_FISS"
    }
  },
  {
    "id": "v1.01.315",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.315/index.html",
    "blurb": {
      "en": "ZZZZ315 – Validating the PROD_MATR_CHAM command (actual matrix)",
      "fr": "ZZZZ315 – Validation de la commande PROD_MATR_CHAM (matrice réelle)"
    }
  },
  {
    "id": "v1.01.316",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.316/index.html",
    "blurb": {
      "en": "SUPV003 - Supervisor Test",
      "fr": "SUPV003 - Test du superviseur"
    }
  },
  {
    "id": "v1.01.318",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.318/index.html",
    "blurb": {
      "en": "ZZZZ318 – Validation of SOUS_POINT method of the PROJ_CHAMP command",
      "fr": "ZZZZ318 – Validation de la méthode SOUS_POINT de la commande PROJ_CHAMP"
    }
  },
  {
    "id": "v1.01.319",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.319/index.html",
    "blurb": {
      "en": "ZZZZ319 – MACR_ADAP_MAIL IT Validation",
      "fr": "ZZZZ319 – Validation informatique de MACR_ADAP_MAIL"
    }
  },
  {
    "id": "v1.01.320",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.320/index.html",
    "blurb": {
      "en": "PLEXU05 – Prestressed plate of reinforced concrete under uniform pressure with GLRC_DAMAGE law",
      "fr": "PLEXU05 – Plaque précontrainte de béton armé sous pression uniforme avec la loi GLRC_DAMAGE"
    }
  },
  {
    "id": "v1.01.321",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.321/index.html",
    "blurb": {
      "en": "EFICA01 - Graphic recipe for EFICAS tool",
      "fr": "EFICA01 - Recette graphique de l'outil EFICAS"
    }
  },
  {
    "id": "v1.01.322",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.322/index.html",
    "blurb": {
      "en": "ZZZZ322 – Validation of MED format rereading of ELGA field",
      "fr": "ZZZZ322 –Validation de la relecture au format MED d'un champ ELGA"
    }
  },
  {
    "id": "v1.01.323",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.323/index.html",
    "blurb": {
      "en": "ZZZZ323 – Validation of local marker printing by IMPR_RESU/CONCEPT",
      "fr": "ZZZZ323 – Validation de l’impression des repères locaux par IMPR_RESU/CONCEPT"
    }
  },
  {
    "id": "v1.01.324",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.324/index.html",
    "blurb": {
      "en": "ERREU11 – Validation of the DECOUPE action",
      "fr": "ERREU11 – Validation de l'action DECOUPE"
    }
  },
  {
    "id": "v1.01.325",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.325/index.html",
    "blurb": {
      "en": "ZZZZ325 – CALC_CHAMP / 'SIRO_ELEM'",
      "fr": "ZZZZ325 – CALC_CHAMP / 'SIRO_ELEM'"
    }
  },
  {
    "id": "v1.01.326",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.326/index.html",
    "blurb": {
      "en": "ZZZZ326 – Validation of Subpoint Printing in MED Format",
      "fr": "ZZZZ326 – Validation de l'impression des sous-points au format MED"
    }
  },
  {
    "id": "v1.01.328",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.328/index.html",
    "blurb": {
      "en": "ZZZZ328 – Validation of CALC_CHAMP / ENEL_ELEM",
      "fr": "ZZZZ328 – Validation de CALC_CHAMP / ENEL_ELEM"
    }
  },
  {
    "id": "v1.01.329",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.329/index.html",
    "blurb": {
      "en": "ERREU12 – CONTACT_INIT validation with cutting",
      "fr": "ERREU12 – Validation de CONTACT_INIT avec découpe"
    }
  },
  {
    "id": "v1.01.330",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.330/index.html",
    "blurb": {
      "en": "ZZZZ330 – Validation of the calculation of potential energy for elements beams",
      "fr": "ZZZZ330 – Validation du calcul de l’énergie potentielle pour les éléments de poutres"
    }
  },
  {
    "id": "v1.01.331",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.331/index.html",
    "blurb": {
      "en": "ZZZZ331 - Validating the definition of hull/grid characteristics by space functions.",
      "fr": "ZZZZ331 - Validation de la définition des caractéristiques de coques/grilles par des fonctions de l'espace."
    }
  },
  {
    "id": "v1.01.332",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.332/index.html",
    "blurb": {
      "en": "ZZZZ332 - Validation of crea_resu/evol_varc",
      "fr": "ZZZZ332 - Validation de crea_resu/evol_varc"
    }
  },
  {
    "id": "v1.01.333",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.333/index.html",
    "blurb": {
      "en": "ZZZZ333 – Validation of MODI_REPERE",
      "fr": "ZZZZ333 – Validation de MODI_REPERE"
    }
  },
  {
    "id": "v1.01.334",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.334/index.html",
    "blurb": {
      "en": "ERREU13 – Validation of VERI_BORNE",
      "fr": "ERREU13 – Validation de VERI_BORNE"
    }
  },
  {
    "id": "v1.01.335",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.335/index.html",
    "blurb": {
      "en": "ERREU14 - Error message emission test for command variables",
      "fr": "ERREU14 - Test d'émission des messages d'erreur pour les variables de commande"
    }
  },
  {
    "id": "v1.01.336",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.336/index.html",
    "blurb": {
      "en": "ZZZZ336 – Validation of subpoint command variables",
      "fr": "ZZZZ336 – Validation de la prise en compte des variables de commandes aux sous-points"
    }
  },
  {
    "id": "v1.01.337",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.337/index.html",
    "blurb": {
      "en": "ZZZZ337",
      "fr": "ZZZZ337 –"
    }
  },
  {
    "id": "v1.01.338",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.338/index.html",
    "blurb": {
      "en": "ZZZZ338 - Validation of the frequency band balancing algorithm",
      "fr": "ZZZZ338 - Validation de l'algorithme d'équilibrage de bandes de fréquence"
    }
  },
  {
    "id": "v1.01.339",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.339/index.html",
    "blurb": {
      "en": "ZZZZ339 - Validation of G calculation with 3D initial stresses",
      "fr": "ZZZZ339 - Validation du calcul de G avec contraintes initiales en 3D"
    }
  },
  {
    "id": "v1.01.340",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.340/index.html",
    "blurb": {
      "en": "ZZZZ340 – keyword TEMP_CONTINUE validation for AFFE_CHAR_THER",
      "fr": "ZZZZ340 – Validation du mot-clé TEMP_CONTINUE pour AFFE_CHAR_THER"
    }
  },
  {
    "id": "v1.01.341",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.341/index.html",
    "blurb": {
      "en": "ZZZZ341 - Validation of the following pressure space function",
      "fr": "ZZZZ341 - Validation de la pression suiveuse fonction de l'espace"
    }
  },
  {
    "id": "v1.01.342",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.342/index.html",
    "blurb": {
      "en": "ZZZZ342 - ELAS_HYPER validation in small disturbances",
      "fr": "ZZZZ342 - Validation de ELAS_HYPER en petites perturbations"
    }
  },
  {
    "id": "v1.01.343",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.343/index.html",
    "blurb": {
      "en": "SUPV004 - Python Unit Test Execution",
      "fr": "SUPV004 - Exécution des tests unitaires Python"
    }
  },
  {
    "id": "v1.01.344",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.344/index.html",
    "blurb": {
      "en": "ZZZZ344 – Validation of the calculation of angular deviations in DEFI_CABLE_BP",
      "fr": "ZZZZ344 – Validation du calcul des déviations angulaires dans DEFI_CABLE_BP"
    }
  },
  {
    "id": "v1.01.345",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.345/index.html",
    "blurb": {
      "en": "ZZZZ345 - Validation of the use of simple Lagrange",
      "fr": "ZZZZ345 - Validation de l'utilisation des simples Lagrange"
    }
  },
  {
    "id": "v1.01.346",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.346/index.html",
    "blurb": {
      "en": "ZZZZ346 – Bifurcation of a right XFEM interface with quadratic elements 2D",
      "fr": "ZZZZ346 – Bifurcation d'une interface droite XFEM avec des éléments 2D quadratiques"
    }
  },
  {
    "id": "v1.01.347",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.347/index.html",
    "blurb": {
      "en": "ZZZZ347 – Validation of the CABLE_GAINE rubbing cables",
      "fr": "ZZZZ347 – Validation des câbles frottants CABLE_GAINE"
    }
  },
  {
    "id": "v1.01.348",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.348/index.html",
    "blurb": {
      "en": "ZZZZ348 – Coupling of the Aster Code and Python Python Solver commands for time integration used in LEGOS tool",
      "fr": "ZZZZ348 – Couplage des commandes Code-Aster et le solveur en Python de l’intégration dans le temps employé dans l’outil LEGOS"
    }
  },
  {
    "id": "v1.01.349",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.349/index.html",
    "blurb": {
      "en": "ZZZZ349 - Validating ELGA and ELNO fields on elements COQUE_3D",
      "fr": "ZZZZ349 - Validation des champs ELGA et ELNO sur les éléments COQUE_3D"
    }
  },
  {
    "id": "v1.01.350",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.350/index.html",
    "blurb": {
      "en": "ZZZZ350 – Validation of DIST_ESCL/DIST_MAIT keywords with a time function",
      "fr": "ZZZZ350 – Validation des mot-clés DIST_ESCL/DIST_MAIT avec une fonction du temps"
    }
  },
  {
    "id": "v1.01.351",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.351/index.html",
    "blurb": {
      "en": "ZZZZ351 – Validation of the ELIM_LAGR command",
      "fr": "ZZZZ351 – Validation de la commande ELIM_LAGR"
    }
  },
  {
    "id": "v1.01.352",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.352/index.html",
    "blurb": {
      "en": "ZZZZ352 – Keyword validation SOLVEUR / ELIM_LAGR = 'OUI'",
      "fr": "ZZZZ352 – Validation du mot clé SOLVEUR / ELIM_LAGR = 'OUI'"
    }
  },
  {
    "id": "v1.01.353",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.353/index.html",
    "blurb": {
      "en": "ZZZZ353 - Validation of Code_Aster Operators for Salome-Meca Forced Pipe Calculation Plugin",
      "fr": "ZZZZ353 - Validation des opérateurs Code_Aster pour le plugin de calcul de conduites forcées de Salome-Meca"
    }
  },
  {
    "id": "v1.01.356",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.356/index.html",
    "blurb": {
      "en": "ZZZZ356 - Validation of the RAFF_GP command",
      "fr": "ZZZZ356 - Validation de la commande RAFF_GP"
    }
  },
  {
    "id": "v1.01.357",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.357/index.html",
    "blurb": {
      "en": "ASRUN01 - Validation of mesh converter",
      "fr": "ASRUN01 - Validation du convertisseur de maillages"
    }
  },
  {
    "id": "v1.01.358",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.358/index.html",
    "blurb": {
      "en": "ZZZZ358 – keyword MODELE_THER validation of the MODI_MODELE_XFEM operator",
      "fr": "ZZZZ358 – Validation du mot-clé MODELE_THER de l'opérateur MODI_MODELE_XFEM"
    }
  },
  {
    "id": "v1.01.359",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.359/index.html",
    "blurb": {
      "en": "ZZZZ359 – Validation of POST_CZM_FISS / OPTION macro-command = 'TRIAXIALITE'",
      "fr": "ZZZZ359 – Validation de la macro-commande POST_CZM_FISS / OPTION = 'TRIAXIALITE'"
    }
  },
  {
    "id": "v1.01.360",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.360/index.html",
    "blurb": {
      "en": "ZZZZ360 - Validation of the MODI_MAILLAGE / ABSC_CURV command",
      "fr": "ZZZZ360 - Validation de la commande MODI_MAILLAGE / ABSC_CURV"
    }
  },
  {
    "id": "v1.01.361",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.361/index.html",
    "blurb": {
      "en": "ZZZZ361 - Degenerate cutting case for elements XFEM 3D quadratic",
      "fr": "ZZZZ361 - Cas de découpe dégénérés pour les éléments XFEM 3D quadratique"
    }
  },
  {
    "id": "v1.01.362",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.362/index.html",
    "blurb": {
      "en": "ZZZZ362 - Checking the consistency of the fields produced by the X-FEM sub-cut",
      "fr": "ZZZZ362 - Vérification de la cohérence des champs produits par le sous-découpage X-FEM"
    }
  },
  {
    "id": "v1.01.363",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.363/index.html",
    "blurb": {
      "en": "ZZZZ363 – Dynamic damage to AXIS-cut test piece",
      "fr": "ZZZZ363 – Endommagement dynamique d'une éprouvette entaillée en AXIS"
    }
  },
  {
    "id": "v1.01.364",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.364/index.html",
    "blurb": {
      "en": "ZZZZ364 - Validation of large rotations",
      "fr": "ZZZZ364 - Validation des grandes rotations"
    }
  },
  {
    "id": "v1.01.365",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.365/index.html",
    "blurb": {
      "en": "ZZZZ365 - Validation of SIEF_R(3D) to SIEF_R(DKT)",
      "fr": "ZZZZ365 - Validation de la transformation d’un SIEF_R(3D) vers un SIEF_R(DKT)"
    }
  },
  {
    "id": "v1.01.366",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.366/index.html",
    "blurb": {
      "en": "ZZZZ366 - IMPR_RESU and LIRE_RESU Validation Test",
      "fr": "ZZZZ366 - Test de validation d'IMPR_RESU et LIRE_RESU"
    }
  },
  {
    "id": "v1.01.367",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.367/index.html",
    "blurb": {
      "en": "ZZZZ367 - COMPORTEMENT POST_INCR Keyword Validation",
      "fr": "ZZZZ367 - Validation du mot clé POST_INCR de COMPORTEMENT"
    }
  },
  {
    "id": "v1.01.368",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.368/index.html",
    "blurb": {
      "en": "PLEXU08 - Validation of new CALC_EUROPLEXUS features",
      "fr": "PLEXU08 - Validation des nouvelles fonctionnalités de CALC_EUROPLEXUS"
    }
  },
  {
    "id": "v1.01.369",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.369/index.html",
    "blurb": {
      "en": "ZZZZ369 – Validation of MASS_MECA option for elements MEMBRANE and GRILLE_MEMBRANE",
      "fr": "ZZZZ369 – Validation de l'option MASS_MECA pour les éléments MEMBRANE et GRILLE_MEMBRANE"
    }
  },
  {
    "id": "v1.01.370",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.370/index.html",
    "blurb": {
      "en": "PLEXU10 - Validation of slippery and rubbing cables in CALC_EUROPLEXUS",
      "fr": "PLEXU10 - Validation des câbles glissants et frottants dans CALC_EUROPLEXUS"
    }
  },
  {
    "id": "v1.01.372",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.372/index.html",
    "blurb": {
      "en": "PLEXU11 – Validation of the use of soil springs in CALC_EUROPLEXUS",
      "fr": "PLEXU11 – Validation de l'utilisation des ressorts de sol dans CALC_EUROPLEXUS"
    }
  },
  {
    "id": "v1.01.373",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.373/index.html",
    "blurb": {
      "en": "PLEXU07 – Transitional Response of a reinforced concrete slab: GLRC_DAMAGE model",
      "fr": "PLEXU07 – Réponse transitoire d'une dalle en béton armé : modèle GLRC_DAMAGE"
    }
  },
  {
    "id": "v1.01.379",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.379/index.html",
    "blurb": {
      "en": "ERREU15 - Error message emission test for HHO Modelling",
      "fr": "ERREU15 - Test d'émission des messages d'erreur pour la modélisation HHO"
    }
  },
  {
    "id": "v1.01.380",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.380/index.html",
    "blurb": {
      "en": "ZZZZ380 - Adding fictitious degrees of freedom for multigrill solvers",
      "fr": "ZZZZ380 - Ajout de degrés de liberté fictifs pour les solveurs multigrilles"
    }
  },
  {
    "id": "v1.01.381",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.381/index.html",
    "blurb": {
      "en": "ZZZZ381 – Validation of Multifibre Data Structure Concepts",
      "fr": "ZZZZ381 – Validation des concepts utilisant la structure de données multifibre"
    }
  },
  {
    "id": "v1.01.382",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.382/index.html",
    "blurb": {
      "en": "ZZZZ382 - Validation of CALC_CHAMP on beams with complex fields",
      "fr": "ZZZZ382 - Validation de CALC_CHAMP sur des poutres avec champs complexes"
    }
  },
  {
    "id": "v1.01.383",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.383/index.html",
    "blurb": {
      "en": "ZZZZ383 - Validation of the CREA_MAILLAGE / DECOUPE_LAC command",
      "fr": "ZZZZ383 - Validation de la commande CREA_MAILLAGE / DECOUPE_LAC"
    }
  },
  {
    "id": "v1.01.384",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.384/index.html",
    "blurb": {
      "en": "ZZZZ384 – Validation of MASS_REP key word for AFFE_CARA_ELEM command",
      "fr": "ZZZZ384 – Validation du mot clef MASS_REP de la commande AFFE_CARA_ELEM"
    }
  },
  {
    "id": "v1.01.385",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.385/index.html",
    "blurb": {
      "en": "ZZZZ385 – Validation of LIAISON_SOLIDE in 2D and with large rotations",
      "fr": "ZZZZ385 – Validation de LIAISON_SOLIDE en 2D et avec de grandes rotations"
    }
  },
  {
    "id": "v1.01.386",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.386/index.html",
    "blurb": {
      "en": "ZZZZ386 – Validation of LIAISON_SOLIDE in 3D and with large rotations",
      "fr": "ZZZZ386 – Validation de LIAISON_SOLIDE en 3D et avec de grandes rotations"
    }
  },
  {
    "id": "v1.01.387",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.387/index.html",
    "blurb": {
      "en": "ZZZZ387 - Validation of terminal management in the MFront interface",
      "fr": "ZZZZ387 - Validation de la gestion des bornes dans l'interface MFront"
    }
  },
  {
    "id": "v1.01.388",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.388/index.html",
    "blurb": {
      "en": "ZZZZ388 - Validation of nodes selective projection of an internal variable field",
      "fr": "ZZZZ388 - Validation de la projection sélective aux nœuds d'un champ de variables internes"
    }
  },
  {
    "id": "v1.01.389",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.389/index.html",
    "blurb": {
      "en": "ZZZZ389 - Validation of the proofreading of a power field in LIRE_RESU",
      "fr": "ZZZZ389 - Validation de la relecture d'un champ de force surfacique dans LIRE_RESU"
    }
  },
  {
    "id": "v1.01.391",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.391/index.html",
    "blurb": {
      "en": "PLEXU09 – Validation of VMIS_JOHN_COOK in CALC_EUROPLEXUS",
      "fr": "PLEXU09 – Validation de VMIS_JOHN_COOK dans CALC_EUROPLEXUS"
    }
  },
  {
    "id": "v1.01.392",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.392/index.html",
    "blurb": {
      "en": "ZZZZ392 – Validation of the CREA_RESU-based mode_meca concept for COMB_SISM_MODAL/MODE_CORR",
      "fr": "ZZZZ392 – Validation du concept mode_meca issu de CREA_RESU pour COMB_SISM_MODAL/MODE_CORR"
    }
  },
  {
    "id": "v1.01.393",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.393/index.html",
    "blurb": {
      "en": "ZZZZ393 - Pre-deformations by function for plates, grids and membranes",
      "fr": "ZZZZ393 - Pré-déformations par fonction pour plaques, grilles et membranes"
    }
  },
  {
    "id": "v1.01.394",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.394/index.html",
    "blurb": {
      "en": "ZZZZ394 – PRE_EPSI Check",
      "fr": "ZZZZ394 – Vérification de PRE_EPSI"
    }
  },
  {
    "id": "v1.01.395",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.395/index.html",
    "blurb": {
      "en": "ZZZZ395 - Model Reduction Operator Verification",
      "fr": "ZZZZ395 - Vérification des opérateurs de réduction de modèle"
    }
  },
  {
    "id": "v1.01.396",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.396/index.html",
    "blurb": {
      "en": "ZZZZ396 – Verification of the adjustment of quadratic level sets for segment cracks",
      "fr": "ZZZZ396 – Vérification de l'ajustement des levels sets quadratiques pour les fissures segments"
    }
  },
  {
    "id": "v1.01.398",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.398/index.html",
    "blurb": {
      "en": "ZZZZ398 - Verification of MFront's dependence on geometry",
      "fr": "ZZZZ398 - Vérification de la dépendance de MFront à la géométrie"
    }
  },
  {
    "id": "v1.01.399",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.399/index.html",
    "blurb": {
      "en": "ZZZZ399 – Frequency of a quantum harmonic oscillator to one dimension",
      "fr": "ZZZZ399 – Fréquences d'un oscillateur harmonique quantique à une dimension"
    }
  },
  {
    "id": "v1.01.400",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.400/index.html",
    "blurb": {
      "en": "ZZZZ400 - Validation of a field of internal variables with multiple behaviors in LIRE_RESU in MED format",
      "fr": "ZZZZ400 - Validation de la relecture d'un champ de variables internes avec plusieurs comportements dans LIRE_RESU au format MED"
    }
  },
  {
    "id": "v1.01.401",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.401/index.html",
    "blurb": {
      "en": "ZZZZ401 – Verification of Direct Linear Solver Renumbering Tools",
      "fr": "ZZZZ401 – Vérification des outils de renumérotation des solveurs linéaires directs"
    }
  },
  {
    "id": "v1.01.402",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.402/index.html",
    "blurb": {
      "en": "ZZZZ402 - Validation of POST_NEWMARK",
      "fr": "ZZZZ402 - Validation de l'utilisation de POST_NEWMARK"
    }
  },
  {
    "id": "v1.01.403",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.403/index.html",
    "blurb": {
      "en": "ZZZZ403 - Validation of POST_LIQUEFACTION use on a 2D dam case",
      "fr": "ZZZZ403 - Validation de l'utilisation de POST_LIQUEFACTION sur un cas de barrage en 2D"
    }
  },
  {
    "id": "v1.01.404",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.404/index.html",
    "blurb": {
      "en": "PLEXU13 – Validation of sending a dynamic initial state by CALC_EUROPLEXUS",
      "fr": "PLEXU13 – Validation de l’envoi d’un état initial dynamique par CALC_EUROPLEXUS"
    }
  },
  {
    "id": "v1.01.405",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.405/index.html",
    "blurb": {
      "en": "ZZZZ405 – Validation of wear and tear model",
      "fr": "ZZZZ405 – Validation du modèle d’usure"
    }
  },
  {
    "id": "v1.01.406",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.406/index.html",
    "blurb": {
      "en": "ZZZZ406 - Validation of the Merge of Loads in Operator CALC_G",
      "fr": "ZZZZ406 - Validation de la fusion des charges dans l’opérateur CALC_G"
    }
  },
  {
    "id": "v1.01.407",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.407/index.html",
    "blurb": {
      "en": "ZZZZ407 – Validation of MACR_CARA_POUTRE with TABLE_CARA='OUI'",
      "fr": "ZZZZ407 – Validation de MACR_CARA_POUTRE avec TABLE_CARA='OUI'"
    }
  },
  {
    "id": "v1.01.409",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.409/index.html",
    "blurb": {
      "en": "ZZZZ409- Validation of the code_aster-constitutive laws interface in UMAT format",
      "fr": "ZZZZ409- Validation de l'interface entre code_aster et les lois de comportement au format UMAT"
    }
  },
  {
    "id": "v1.01.410",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.410/index.html",
    "blurb": {
      "en": "PYNL03 – THER_NON_LINE in split commands",
      "fr": "PYNL03 – THER_NON_LINE en commandes éclatées"
    }
  },
  {
    "id": "v1.01.411",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.411/index.html",
    "blurb": {
      "en": "ZZZZ411- Calculation of nodes Fields for elements Structure",
      "fr": "ZZZZ411- Calcul des champs aux nœuds pour les éléments de structure"
    }
  },
  {
    "id": "v1.01.412",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.412/index.html",
    "blurb": {
      "en": "ZZZZ412 - Validation of DEFI_SOL_EQUI",
      "fr": "ZZZZ412 - Validation de l'utilisation de DEFI_SOL_EQUI"
    }
  },
  {
    "id": "v1.01.413",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.413/index.html",
    "blurb": {
      "en": "ZZZZ413 – MED print validation of sub-point elements",
      "fr": "ZZZZ413– Validation de l’impression au format MED des éléments à sous-points"
    }
  },
  {
    "id": "v1.01.414",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.414/index.html",
    "blurb": {
      "en": "ZZZZ414 - Checking the HIGHT Law on a hardware point",
      "fr": "ZZZZ414 - Vérification de la loi deHUJEUX sur un point matériel"
    }
  },
  {
    "id": "v1.01.415",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.415/index.html",
    "blurb": {
      "en": "MODEL01 - Title of test case (Model of a validation document)",
      "fr": "MODEL01 - Titre du cas test (Modèle d’un document de validation)"
    }
  },
  {
    "id": "v1.01.416",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.416/index.html",
    "blurb": {
      "en": "ZZZZ416 – mesh COQUE_SOLIDE modification test",
      "fr": "ZZZZ416 – Test de la modification de maillage COQUE_SOLIDE"
    }
  },
  {
    "id": "v1.01.418",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.418/index.html",
    "blurb": {
      "en": "ZZZZ418 – Multilayer and multifibre elements: verification of values at subpoints",
      "fr": "ZZZZ418 – Éléments multicouches et multifibres : vérification des valeurs aux sous-points"
    }
  },
  {
    "id": "v1.01.419",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.419/index.html",
    "blurb": {
      "en": "ZZZZ419 - LIAISON_MAIL verification with excreted shells.",
      "fr": "ZZZZ419 - Vérification de LIAISON_MAIL avec des coques excentrées."
    }
  },
  {
    "id": "v1.01.420",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.420/index.html",
    "blurb": {
      "en": "ZZZZ420 – Basic dynamic damping test",
      "fr": "ZZZZ420 – Test élémentaire de l’amortissement en dynamique"
    }
  },
  {
    "id": "v1.01.421",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.421/index.html",
    "blurb": {
      "en": "ZZZZ421 – AFFE_CHAR_MECA EFFE_FOND parallel HPC",
      "fr": "ZZZZ421 – Test AFFE_CHAR_MECA EFFE_FOND en parallèle HPC"
    }
  },
  {
    "id": "v1.01.501",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.501/index.html",
    "blurb": {
      "en": "ZZZZ501 – Object Removal Test",
      "fr": "ZZZZ501 – Test des suppression des objets"
    }
  },
  {
    "id": "v1.01.502",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.502/index.html",
    "blurb": {
      "en": "ZZZZ502 – Verification of Python extensions around loads",
      "fr": "ZZZZ502 – Vérification des extensions Python autour des chargements"
    }
  },
  {
    "id": "v1.01.503",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.503/index.html",
    "blurb": {
      "en": "ZZZZ503 – Verification of Python extensions around matrices",
      "fr": "ZZZZ503 – Vérification des extensions Python autour des matrices"
    }
  },
  {
    "id": "v1.01.505",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.505/index.html",
    "blurb": {
      "en": "ZZZZ505 – Field check",
      "fr": "ZZZZ505 – Vérification de l’API des champs"
    }
  },
  {
    "id": "v1.01.506",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.506/index.html",
    "blurb": {
      "en": "ZZZZ506 – MECA_NON_LINE Check",
      "fr": "ZZZZ506 – Vérification de MECA_NON_LINE"
    }
  },
  {
    "id": "v1.01.507",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.507/index.html",
    "blurb": {
      "en": "ZZZZ507 – Field Python Method Verification",
      "fr": "ZZZZ507 – Vérification des méthodes Python des champs"
    }
  },
  {
    "id": "v1.01.508",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.508/index.html",
    "blurb": {
      "en": "ZZZZ508 – THER_LINEAIRE Computer Check",
      "fr": "ZZZZ508 – Vérification informatique de THER_LINEAIRE"
    }
  },
  {
    "id": "v1.01.509",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.509/index.html",
    "blurb": {
      "en": "ZZZZ509 – MECA_NON_LINE Check",
      "fr": "ZZZZ509 – Vérification de MECA_NON_LINE"
    }
  },
  {
    "id": "v1.01.511",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.511/index.html",
    "blurb": {
      "en": "ZZZZ511 – Basic Test for Completing Certain GC Features",
      "fr": "ZZZZ511 – Test élémentaire de la complétude de certaines fonctionnalités GC"
    }
  },
  {
    "id": "v1.01.512",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.512/index.html",
    "blurb": {
      "en": "ZZZZ512 – HHO consistency test",
      "fr": "ZZZZ512 – Test de la consistance des méthodes HHO"
    }
  },
  {
    "id": "v1.01.513",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.513/index.html",
    "blurb": {
      "en": "ZZZZ513 – API python elemental test for HHO methods",
      "fr": "ZZZZ513 – Test élémentaire de l'API python pour les méthodes HHO"
    }
  },
  {
    "id": "v1.01.515",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.01.515/index.html",
    "blurb": {
      "en": "ZZZZ515 - CALC_ENDO Macro-Command Basic Test",
      "fr": "ZZZZ515 - Test élémentaire de la macro-commande CALC_ENDO"
    }
  },
  {
    "id": "v1.02.011",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.02.011/index.html",
    "blurb": {
      "en": "PERFE01 – non-regression of the homogenized BZ calculation of the PERFECT platform",
      "fr": "PERFE01 – Non régression du calcul homogénéisé de type BZ de la plate-forme PERFECT"
    }
  },
  {
    "id": "v1.02.013",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.02.013/index.html",
    "blurb": {
      "en": "PERFE03 – non-regression aggregate design of the PERFECT platform",
      "fr": "PERFE03 – Non régression du calcul de type agrégat de la plate-forme PERFECT"
    }
  },
  {
    "id": "v1.02.101",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.02.101/index.html",
    "blurb": {
      "en": "SSEP001 - Limit load calculation of a tube with sub-thickness",
      "fr": "SSEP001 - Calcul de charge limite d'un tube avec sous épaisseur"
    }
  },
  {
    "id": "v1.02.102",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.02.102/index.html",
    "blurb": {
      "en": "SSEP002 - Limit load calculation of a elbow with sub-thickness",
      "fr": "SSEP002 - Calcul de charge limite d'un coude avec sous épaisseur"
    }
  },
  {
    "id": "v1.02.202",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.02.202/index.html",
    "blurb": {
      "en": "RTOOL01 – Release of DDL s on SMART with Rtool",
      "fr": "RTOOL01 – Relâchement de DDLs sur la maquette SMART avec l’outil Rtool"
    }
  },
  {
    "id": "v1.03.124",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.03.124/index.html",
    "blurb": {
      "en": "UMAT001 – Test of the Code_Aster-Umat interface in thermo-linear elasticity",
      "fr": "UMAT001 – Test de l'interface Code_Aster-Umat en thermo-élasticité linéaire"
    }
  },
  {
    "id": "v1.03.125",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.03.125/index.html",
    "blurb": {
      "en": "UMAT002 – Code_Aster-Umat Multiaxially Loading Interface Test",
      "fr": "UMAT002 – Test de l'interface Code_Aster-Umat en élasticité linéaire sous chargement multiaxial"
    }
  },
  {
    "id": "v1.03.126",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.03.126/index.html",
    "blurb": {
      "en": "MFRON01 – code_aster-MFront interface test for elasto-visco-plastic laws",
      "fr": "MFRON01 – Test de l'interface code_aster-MFront pour des lois élasto-visco-plastiques"
    }
  },
  {
    "id": "v1.03.127",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.03.127/index.html",
    "blurb": {
      "en": "MFRON02 - Code_Aster-MFront interface test: for concrete and floor constitutive laws",
      "fr": "MFRON02 - Test de l'interface Code_Aster-MFront : pour des lois de comportement de béton et de sols"
    }
  },
  {
    "id": "v1.03.128",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.03.128/index.html",
    "blurb": {
      "en": "MFRON03 – Code_Aster-MFront Interface Test for Crystal Laws",
      "fr": "MFRON03 – Test de l'interface Code_Aster-MFront pour des lois cristallines"
    }
  },
  {
    "id": "v1.03.129",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.03.129/index.html",
    "blurb": {
      "en": "MFRON04 – Code_Aster-MFront interface test for anisotropic constitutive laws",
      "fr": "MFRON04 – Test de l'interface Code_Aster-MFront pour des lois de comportement anisotropes"
    }
  },
  {
    "id": "v1.03.130",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.03.130/index.html",
    "blurb": {
      "en": "MFRON05 – Code_Aster-MFront Interface Test: for laws with damage",
      "fr": "MFRON05 – Test de l'interface Code_Aster-MFront : pour des lois avec endommagement"
    }
  },
  {
    "id": "v1.03.132",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.03.132/index.html",
    "blurb": {
      "en": "MFRON06 – Code_Aster-MFront interface test for metallurgy laws for numerical welding simulation",
      "fr": "MFRON06 – Test de l'interface Code_Aster-MFront pour des lois avec métallurgie pour la simulation numérique du soudage"
    }
  },
  {
    "id": "v1.03.133",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.03.133/index.html",
    "blurb": {
      "en": "MFRON07 – Code_Aster-MF interface test for elements interface and joint",
      "fr": "MFRON07 – Test de l'interface Code_Aster-MFront pour les éléments d'interface et de joint"
    }
  },
  {
    "id": "v1.03.134",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.03.134/index.html",
    "blurb": {
      "en": "MFRON08 – Code_Aster-MF interface test for modellings GRAD_VARI",
      "fr": "MFRON08 – Test de l'interface Code_Aster-MFront pour les modélisations GRAD_VARI"
    }
  },
  {
    "id": "v1.04.101",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.04.101/index.html",
    "blurb": {
      "en": "GCPC001 - CTJ25 tester",
      "fr": "GCPC001 - Eprouvette CTJ25"
    }
  },
  {
    "id": "v1.04.102",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.04.102/index.html",
    "blurb": {
      "en": "GCPC002 - 3D cracked prism test",
      "fr": "GCPC002 - Éprouvette prismatique fissurée en 3D"
    }
  },
  {
    "id": "v1.04.111",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.04.111/index.html",
    "blurb": {
      "en": "MUMPS01 - Validation of the MUMPS solver",
      "fr": "MUMPS01 - Validation du solveur MUMPS"
    }
  },
  {
    "id": "v1.04.112",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.04.112/index.html",
    "blurb": {
      "en": "MUMPS02 - MUMPS solver validation for DPLAN_INCO_UPG",
      "fr": "MUMPS02 - Validation du solveur MUMPS pour un modèle DPLAN_INCO_UPG"
    }
  },
  {
    "id": "v1.04.113",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.04.113/index.html",
    "blurb": {
      "en": "MUMPS03 - Validation of the MUMPS solver for complex matrices",
      "fr": "MUMPS03 - Validation du solveur MUMPS pour les matrices complexes"
    }
  },
  {
    "id": "v1.04.115",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.04.115/index.html",
    "blurb": {
      "en": "MUMPS05 - Validation of the MUMPS solver in parallel with a centralized matrix",
      "fr": "MUMPS05 - Validation du solveur MUMPS en parallèle avec une matrice centralisée"
    }
  },
  {
    "id": "v1.04.116",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.04.116/index.html",
    "blurb": {
      "en": "PETSC01 - Validation of the PETS c solver in linear elasticity 3D",
      "fr": "PETSC01 - Validation du solveur PETSc en élasticité linéaire 3D"
    }
  },
  {
    "id": "v1.04.117",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.04.117/index.html",
    "blurb": {
      "en": "PETSC02- Validation of PETS c with the distribution of the assembly matrix",
      "fr": "PETSC02- Validation de PETSc avec la distribution de la matrice assemblée"
    }
  },
  {
    "id": "v1.04.118",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.04.118/index.html",
    "blurb": {
      "en": "PETSC03- Validation of the PETS c solver with a second level preconditioner",
      "fr": "PETSC03- Validation du solveur PETSc avec un préconditionneur de second niveau"
    }
  },
  {
    "id": "v1.04.119",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.04.119/index.html",
    "blurb": {
      "en": "PETSC04- FIELDSPLIT pre-conditioner validation c",
      "fr": "PETSC04- Validation du préconditionneur FIELDSPLIT de PETSc"
    }
  },
  {
    "id": "v1.04.120",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.04.120/index.html",
    "blurb": {
      "en": "PETSC05 – Use of user solver with petsc4py",
      "fr": "PETSC05 – Utilisation de solveur utilisateur avec petsc4py"
    }
  },
  {
    "id": "v1.04.417",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.04.417/index.html",
    "blurb": {
      "en": "PYNL04 – Validation of CALCUL command with elements plates and shells",
      "fr": "PYNL04 – Validation de la commande CALCUL avec des éléments plaques et coques"
    }
  },
  {
    "id": "v1.05.001",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.05.001/index.html",
    "blurb": {
      "en": "MESH001 – Verification of the API python for the mesh object",
      "fr": "MESH001 – Vérification de l’API python pour l’objet maillage"
    }
  },
  {
    "id": "v1.05.002",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.05.002/index.html",
    "blurb": {
      "en": "MESH002 – Checking mesh partitioner",
      "fr": "MESH002 – Vérification de partitionneur de maillages"
    }
  },
  {
    "id": "v1.05.003",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.05.003/index.html",
    "blurb": {
      "en": "MESH003 – mesh ConnectionMesh Check",
      "fr": "MESH003 – Vérification du maillage ConnectionMesh"
    }
  },
  {
    "id": "v1.06.001",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.06.001/index.html",
    "blurb": {
      "en": "HROM001 – Verification of the API python for the reduced base construction",
      "fr": "HROM001 – Vérification de l’API python pour la construction de base réduite"
    }
  },
  {
    "id": "v1.06.002",
    "part": "V1",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v1/v1.06.002/index.html",
    "blurb": {
      "en": "HROM002 – Verification of the API python for the construction of an empirical quadrature",
      "fr": "HROM002 – Vérification de l’API python pour la construction d'une quadrature empirique"
    }
  },
  {
    "id": "v2.01.001",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.01.001/index.html",
    "blurb": {
      "en": "SDLD01 - degree of freedom mass-spring system",
      "fr": "SDLD01 - Système masse-ressort à un degré de liberté"
    }
  },
  {
    "id": "v2.01.002",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.01.002/index.html",
    "blurb": {
      "en": "SDLD02 - 8 degrees of freedom mass-spring system",
      "fr": "SDLD02 - Système masse-ressort à 8 degrés de liberté"
    }
  },
  {
    "id": "v2.01.004",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.01.004/index.html",
    "blurb": {
      "en": "SDLD04 - Transitional response of a mass-spring system subject to an accelerated requirement",
      "fr": "SDLD04 - Réponse transitoire d'un système masses-ressorts soumis à une accélération imposée"
    }
  },
  {
    "id": "v2.01.021",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.01.021/index.html",
    "blurb": {
      "en": "SDLD21 - 8 degrees of freedom spring mass-system with viscous shock absorber",
      "fr": "SDLD21 - Système masse-ressort à 8 degrés de liberté avec amortisseur visqueux"
    }
  },
  {
    "id": "v2.01.022",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.01.022/index.html",
    "blurb": {
      "en": "SDLD22 - Transient of a mass-spring system with 8 degrees of freedom with viscous shock absorber",
      "fr": "SDLD22 - Transitoire d'un système masse-ressort à 8 degrés de liberté avec amortisseur visqueux"
    }
  },
  {
    "id": "v2.01.023",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.01.023/index.html",
    "blurb": {
      "en": "SDLD23 - Random Excitation Mass and Spring System",
      "fr": "SDLD23 - Système de masses et ressorts sous excitation aléatoire"
    }
  },
  {
    "id": "v2.01.024",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.01.024/index.html",
    "blurb": {
      "en": "SDLD24- Two independent spring mass system under forced harmonic pressure",
      "fr": "SDLD24- Système de deux masses-ressorts indépendants sous sollicitation harmonique forcée"
    }
  },
  {
    "id": "v2.01.025",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.01.025/index.html",
    "blurb": {
      "en": "SDLD25 - Mass-spring system with proportional viscous shock absorber (spectral response)",
      "fr": "SDLD25 - Système masse-ressort avec amortisseur visqueux proportionnel (réponse spectrale)"
    }
  },
  {
    "id": "v2.01.027",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.01.027/index.html",
    "blurb": {
      "en": "SDLD27 - 8 degrees of freedom spring mass-system with non-proportional viscous shock absorber (modal analysis)",
      "fr": "SDLD27 - Système masse-ressort à 8 degrés de liberté avec amortisseur visqueux non proportionnel (analyse modale)"
    }
  },
  {
    "id": "v2.01.029",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.01.029/index.html",
    "blurb": {
      "en": "SDLD29 - 8 degrees of freedom spring mass transitory and non-proportional viscous damping",
      "fr": "SDLD29 - Transitoire masse ressort à 8 degrés de liberté et amortissement visqueux non proportionnel"
    }
  },
  {
    "id": "v2.01.030",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.01.030/index.html",
    "blurb": {
      "en": "SDLD30 - Spectral seismic response of a 2 masses and 3 multi-supported springs system",
      "fr": "SDLD30 - Réponse sismique spectrale d’un système 2 masses et 3 ressorts multi-supporté"
    }
  },
  {
    "id": "v2.01.031",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.01.031/index.html",
    "blurb": {
      "en": "SDLD31 - Basic validation of dynamic time schemas",
      "fr": "SDLD31 - Validation élémentaire des schémas en temps en dynamique"
    }
  },
  {
    "id": "v2.01.032",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.01.032/index.html",
    "blurb": {
      "en": "SDLD32 - Basic Schema Validation in Time HHT",
      "fr": "SDLD32 - Validation élémentaire du schéma en temps HHT"
    }
  },
  {
    "id": "v2.01.033",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.01.033/index.html",
    "blurb": {
      "en": "SDLD33 - Spectral seismic response of a 2 masses system - 4 multi-support springs by 2 groups decorated with supports",
      "fr": "SDLD33 - Réponse sismique spectrale d’un système 2 masses - 4 ressorts multi-supporté par 2 groupes décorrélés d’appuis"
    }
  },
  {
    "id": "v2.01.034",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.01.034/index.html",
    "blurb": {
      "en": "SDLD34 – Dropping a single mass/spring",
      "fr": "SDLD34 – Lâcher d'un simple masse/ressort"
    }
  },
  {
    "id": "v2.01.035",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.01.035/index.html",
    "blurb": {
      "en": "SDLD35 – Parallel mass and spring system at 3 d.d.l.",
      "fr": "SDLD35 – Système de masses et ressorts à 3 d.d.l. en parallèle"
    }
  },
  {
    "id": "v2.01.101",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.01.101/index.html",
    "blurb": {
      "en": "SDLD101 - Simple Oscillator under Random Exciting",
      "fr": "SDLD101 - Oscillateur simple sous excitation aléatoire"
    }
  },
  {
    "id": "v2.01.102",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.01.102/index.html",
    "blurb": {
      "en": "SDLD102 - Transitional Under Structure: 3 Mass-4 Spring System",
      "fr": "SDLD102 - Sous structuration transitoire : Système 3 masses-4 ressorts"
    }
  },
  {
    "id": "v2.01.104",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.01.104/index.html",
    "blurb": {
      "en": "SDLD104 - Extrapolation of local measurements on a complete model (discreet)",
      "fr": "SDLD104 - Extrapolation de mesures locales sur un modèle complet (discret)"
    }
  },
  {
    "id": "v2.01.105",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.01.105/index.html",
    "blurb": {
      "en": "SDLD105 - Transition response from a mass-spring system to a mono-support earthquake with static correction",
      "fr": "SDLD105 - Réponse transitoire d'un système masses-ressorts à un séisme mono-appui avec correction statique"
    }
  },
  {
    "id": "v2.01.106",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.01.106/index.html",
    "blurb": {
      "en": "SDLD106 – Spring mass system with harmonic oscillation damping",
      "fr": "SDLD106 – Système masse ressort avec amortissement sous oscillation harmonique"
    }
  },
  {
    "id": "v2.01.107",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.01.107/index.html",
    "blurb": {
      "en": "SDLD107 - Minimization of an energy function of error type in relation to dynamic behaviour of structures",
      "fr": "SDLD107 - Minimisation d'une fonctionnelle énergétique de type erreur en relation de comportement en dynamique des structures"
    }
  },
  {
    "id": "v2.01.109",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.01.109/index.html",
    "blurb": {
      "en": "SDLD109 – Calculation of spectra with consideration of floor-material interaction",
      "fr": "SDLD109 – Calcul des spectres avec la prise en compte de l'interaction plancher-matériel"
    }
  },
  {
    "id": "v2.01.110",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.01.110/index.html",
    "blurb": {
      "en": "SDLD110 –Set of dynamic stiffness at 2 degrees of freedom",
      "fr": "SDLD110 –Système dynamique raide à 2 degrés de liberté"
    }
  },
  {
    "id": "v2.01.301",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.01.301/index.html",
    "blurb": {
      "en": "SDLD301 - Spectral seismic response of a 2 masses and 3 multi-supported springs system (corresponding or decorreal excitation)",
      "fr": "SDLD301 - Réponse sismique spectrale d’un système 2 masses et 3 ressorts multi-supporté (excitations corrélées ou décorrélées)"
    }
  },
  {
    "id": "v2.01.313",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.01.313/index.html",
    "blurb": {
      "en": "SDLD313 - Spring mass system with 2 degrees of freedom hysteretic damping",
      "fr": "SDLD313 - Système masse ressort à 2 degrés de liberté avec amortissement hystérétique"
    }
  },
  {
    "id": "v2.01.320",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.01.320/index.html",
    "blurb": {
      "en": "SDLD320 - Transient response of a free system of 3 masses and 2 springs under harmonic excitation",
      "fr": "SDLD320 - Réponse transitoire d’un système librede 3 masses et 2 ressorts sous excitation harmonique"
    }
  },
  {
    "id": "v2.01.321",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.01.321/index.html",
    "blurb": {
      "en": "SDLD321 - Dynamic transient response of a harmonic oscillator with variable damping",
      "fr": "SDLD321 - Réponse dynamique transitoire d’un oscillateur harmonique avec amortissement variable"
    }
  },
  {
    "id": "v2.01.325",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.01.325/index.html",
    "blurb": {
      "en": "SDLD325 - Transient dynamic response of a 2 degrees of freedom damped spring mass system",
      "fr": "SDLD325 - Réponse dynamique transitoire d’un système masse-ressort amorti à 2 degrés de liberté"
    }
  },
  {
    "id": "v2.01.400",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.01.400/index.html",
    "blurb": {
      "en": "SDLD400 – Star-shaped spring-mass system",
      "fr": "SDLD400 – Système étoilé masse-ressort"
    }
  },
  {
    "id": "v2.02.001",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.001/index.html",
    "blurb": {
      "en": "SDLL01 - Short beam on single supports",
      "fr": "SDLL01 - Poutre courte sur appuis simples"
    }
  },
  {
    "id": "v2.02.002",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.002/index.html",
    "blurb": {
      "en": "SDLL02 - slender beam, clamped-free, folded on itself",
      "fr": "SDLL02 - Poutre élancée, encastrée-libre, repliée sur elle même"
    }
  },
  {
    "id": "v2.02.003",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.003/index.html",
    "blurb": {
      "en": "SDLL03- slender beam clamped - clamped with different inertia",
      "fr": "SDLL03- Poutre élancée encastrée - encastrée avec inerties différentes"
    }
  },
  {
    "id": "v2.02.004",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.004/index.html",
    "blurb": {
      "en": "SDLL04 - slender beam on two supports, coupled with a mass-spring system",
      "fr": "SDLL04 - Poutre élancée sur deux appuis, couplée à un système masse-ressort"
    }
  },
  {
    "id": "v2.02.005",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.005/index.html",
    "blurb": {
      "en": "SDLL05- slender beam on 2 supports",
      "fr": "SDLL05- Poutre élancée sur 2 appuis"
    }
  },
  {
    "id": "v2.02.006",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.006/index.html",
    "blurb": {
      "en": "SDLL06 - Transient Response of a clamped-Free Post",
      "fr": "SDLL06 - Réponse transitoire d'un poteau encastré-libre"
    }
  },
  {
    "id": "v2.02.007",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.007/index.html",
    "blurb": {
      "en": "SDLL07- P with two support supports, subjected to a constant speed mobile charge",
      "fr": "SDLL07- P outre élancée sur deux appuis, soumise à une charge mobile de vitesse constante"
    }
  },
  {
    "id": "v2.02.008",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.008/index.html",
    "blurb": {
      "en": "SDLL08 - Grid plan of beams (metal profiles)",
      "fr": "SDLL08 - Grillage plan de poutres (profilés métalliques)"
    }
  },
  {
    "id": "v2.02.009",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.009/index.html",
    "blurb": {
      "en": "SDLL09 - Vibration of a variable rectangular cross section slender beam (clamped-free)",
      "fr": "SDLL09 - Vibration d'une poutre élancée de section rectangulaire variable (encastrée-libre)"
    }
  },
  {
    "id": "v2.02.010",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.010/index.html",
    "blurb": {
      "en": "SDLL10 - Variable rectangular cross section beam (clamped-clamped)",
      "fr": "SDLL10 - Poutre de section rectangulaire variable (encastrée-encastrée)"
    }
  },
  {
    "id": "v2.02.011",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.011/index.html",
    "blurb": {
      "en": "SDLL11 - Free-free thin circular ring",
      "fr": "SDLL11 - Anneau circulaire mince libre-libre"
    }
  },
  {
    "id": "v2.02.012",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.012/index.html",
    "blurb": {
      "en": "SDLL12- clamped circular ring in 2 points",
      "fr": "SDLL12- Anneau circulaire mince encastré en 2 points"
    }
  },
  {
    "id": "v2.02.013",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.013/index.html",
    "blurb": {
      "en": "SDLL13- Slim circular ring suspended by elastic leg",
      "fr": "SDLL13- Anneau circulaire mince suspendu par une patte élastique"
    }
  },
  {
    "id": "v2.02.014",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.014/index.html",
    "blurb": {
      "en": "SDLL14 - Vibration modes of a thin pipe elbow",
      "fr": "SDLL14 - Modes de vibration d’un coude de tuyauterie mince"
    }
  },
  {
    "id": "v2.02.015",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.015/index.html",
    "blurb": {
      "en": "SDLL15 - slender beam, clamped-free, with excreted mass or inertia",
      "fr": "SDLL15 - Poutre élancée, encastrée-libre, avec masse ou inertie excentrée"
    }
  },
  {
    "id": "v2.02.016",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.016/index.html",
    "blurb": {
      "en": "SDLL16- Free-free thin ring with point mass",
      "fr": "SDLL16- Anneau mince libre-libre avec une masse ponctuelle"
    }
  },
  {
    "id": "v2.02.017",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.017/index.html",
    "blurb": {
      "en": "SDLL17 - Large curved beam fixed on both ends",
      "fr": "SDLL17 - Large poutre courbée fixée sur les deux extrémités"
    }
  },
  {
    "id": "v2.02.018",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.018/index.html",
    "blurb": {
      "en": "SDLL18 - Vibration modes of a straight and thin hose clamped at both ends",
      "fr": "SDLL18 - Modes de vibration d’un tuyau droit et mince encastré aux deux extrémités"
    }
  },
  {
    "id": "v2.02.023",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.023/index.html",
    "blurb": {
      "en": "SDLL23 - clamped-free earthquake beam (spectral response)",
      "fr": "SDLL23 - Poutre encastrée-libre soumise à un séisme (réponse spectrale)"
    }
  },
  {
    "id": "v2.02.100",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.100/index.html",
    "blurb": {
      "en": "SDLL100 - Transient dynamic response of a single-tension beam",
      "fr": "SDLL100 - Réponse dynamique transitoire d'une poutre en traction simple"
    }
  },
  {
    "id": "v2.02.101",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.101/index.html",
    "blurb": {
      "en": "SDLL101 - Vibration of a beam with pre-stress",
      "fr": "SDLL101 - Vibration d'une poutre avec pré-contrainte"
    }
  },
  {
    "id": "v2.02.102",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.102/index.html",
    "blurb": {
      "en": "SDLL102 - Portico subjected to electrodynamic forces",
      "fr": "SDLL102 - Portique soumis à des forces électrodynamiques"
    }
  },
  {
    "id": "v2.02.104",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.104/index.html",
    "blurb": {
      "en": "SDLL104 - Primary and secondary structures subjected to random excitation",
      "fr": "SDLL104 - Structures primaire et secondaire soumises à une excitation aléatoire"
    }
  },
  {
    "id": "v2.02.105",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.105/index.html",
    "blurb": {
      "en": "SDLL105 - Pipe subjected to sources of random fluid excitation",
      "fr": "SDLL105 - Tuyau soumis à des sources d'excitations fluides aléatoires"
    }
  },
  {
    "id": "v2.02.106",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.106/index.html",
    "blurb": {
      "en": "SDLL106 - A beam subjected to a random, distributed excitation",
      "fr": "SDLL106 - Poutre soumise à une excitation aléatoire répartie"
    }
  },
  {
    "id": "v2.02.107",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.107/index.html",
    "blurb": {
      "en": "SDLL107 - Transitional calculation of a beam under random excitation",
      "fr": "SDLL107 - Calcul transitoire d'une poutre sous excitation aléatoire"
    }
  },
  {
    "id": "v2.02.108",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.108/index.html",
    "blurb": {
      "en": "SDLL108 - \\"Coffee Table\\" by NEUBERT",
      "fr": "SDLL108 - \\"Table à café\\" de NEUBERT"
    }
  },
  {
    "id": "v2.02.110",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.110/index.html",
    "blurb": {
      "en": "SDLL110 - Long beam in a false-to-fold beam under fluid-elastic and turbulent excitation: ANL tests",
      "fr": "SDLL110 - Poutre longue en porte-à-faux sous excitations fluide-élastique et turbulente : essais ANL"
    }
  },
  {
    "id": "v2.02.112",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.112/index.html",
    "blurb": {
      "en": "SDLL112 – Seismic analysis of a multi-supported beam (spectral response)",
      "fr": "SDLL112 – Analyse sismique d’une poutre multi-supportée (réponse spectrale)"
    }
  },
  {
    "id": "v2.02.113",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.113/index.html",
    "blurb": {
      "en": "SDLL113 - Transitional dynamic substructure: single-tension beam",
      "fr": "SDLL113 - Sous-structuration dynamique transitoire : poutre en traction simple"
    }
  },
  {
    "id": "v2.02.117",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.117/index.html",
    "blurb": {
      "en": "SDLL117 - Beam subjected to multiple areas of fluid-elastic and random transverse excitation",
      "fr": "SDLL117 - Poutre soumise à des zones multiples d'excitations fluide-élastiques et aléatoires transverses"
    }
  },
  {
    "id": "v2.02.118",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.118/index.html",
    "blurb": {
      "en": "SDLL118 - Axial fluid-elastic excitation beam",
      "fr": "SDLL118 - Poutre soumise à une excitation fluide‑élastique axiale"
    }
  },
  {
    "id": "v2.02.119",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.119/index.html",
    "blurb": {
      "en": "SDLL119 - Beams harness under fluid-elastic axial excitation",
      "fr": "SDLL119 - Faisceau de poutres sous excitation fluide-élastique axiale"
    }
  },
  {
    "id": "v2.02.123",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.123/index.html",
    "blurb": {
      "en": "SDLL123 - Frequency of a simplified tree line with gyroscopy",
      "fr": "SDLL123 - Fréquence d'une ligne d'arbre simplifiée avec gyroscopie"
    }
  },
  {
    "id": "v2.02.124",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.124/index.html",
    "blurb": {
      "en": "SDLL124 - Rotating beam with 3 discs subject to gyroscopy",
      "fr": "SDLL124 - Poutre en rotation avec 3 disques soumise à la gyroscopie"
    }
  },
  {
    "id": "v2.02.125",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.125/index.html",
    "blurb": {
      "en": "SDLL125 - Rotating beam with 2 non-symmetric discs and 2 bearings subject to gyroscopy",
      "fr": "SDLL125 - Poutre en rotation avec 2 disques et 2 paliers non symétriques soumise à la gyroscopie"
    }
  },
  {
    "id": "v2.02.126",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.126/index.html",
    "blurb": {
      "en": "SDLL126 – Transient dynamic response of a beam with 3 discs, subject to gyroscopic effect.",
      "fr": "SDLL126 – Réponse dynamique transitoire d’une poutre avec 3 disques, soumise à l’effet gyroscopique."
    }
  },
  {
    "id": "v2.02.127",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.127/index.html",
    "blurb": {
      "en": "SDLL127 - Shaft line with variable circular section rotor",
      "fr": "SDLL127 - Ligne d'arbres avec rotor à section circulaire variable"
    }
  },
  {
    "id": "v2.02.128",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.128/index.html",
    "blurb": {
      "en": "SDLL128 - Tree line with bearing characteristics dependent on rotational speed",
      "fr": "SDLL128 - Ligne d'arbres avec des caractéristiques de paliers dépendant de la vitesse de rotation"
    }
  },
  {
    "id": "v2.02.129",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.129/index.html",
    "blurb": {
      "en": "SDLL129 - Beam with 3 discs and 2 bearings with variable characteristics depending on the speed of rotation",
      "fr": "SDLL129 - Poutre avec 3 disques et 2 des paliers à caractéristiques variables en fonction de la vitesse de rotation"
    }
  },
  {
    "id": "v2.02.130",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.130/index.html",
    "blurb": {
      "en": "SDLL130 - Seismic response of a reinforced concrete beam (rectangular section) with linear behavior",
      "fr": "SDLL130 - Réponse sismique d’une poutre en béton armé (section rectangulaire) à comportement linéaire"
    }
  },
  {
    "id": "v2.02.132",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.132/index.html",
    "blurb": {
      "en": "SDLL132 - Eigenmodes of multifibre beam frame",
      "fr": "SDLL132 - Modes propres d’une charpente en poutres multifibres"
    }
  },
  {
    "id": "v2.02.133",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.133/index.html",
    "blurb": {
      "en": "SDLL133 - Calculation of own prestress modes of a bagged wheel",
      "fr": "SDLL133 - Calcul des modes propres précontraints d'une roue aubagée"
    }
  },
  {
    "id": "v2.02.136",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.136/index.html",
    "blurb": {
      "en": "SDLL136 - Earthquake portal",
      "fr": "SDLL136 - Portique sous séisme"
    }
  },
  {
    "id": "v2.02.137",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.137/index.html",
    "blurb": {
      "en": "SDLL137 – Structural modification of a beam",
      "fr": "SDLL137 – Modification structurale d’une poutre"
    }
  },
  {
    "id": "v2.02.140",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.140/index.html",
    "blurb": {
      "en": "SDLL140 – Calculation of the proper modes of a beam with 3 discs, subject to gyroscopic effect.",
      "fr": "SDLL140 – Calcul des modes propres d'une poutre avec 3 disques, soumise à l'effet gyroscopique."
    }
  },
  {
    "id": "v2.02.141",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.141/index.html",
    "blurb": {
      "en": "SDLL141 - Eigenfrequencies of a beam alone, subject to gyroscopic effect.",
      "fr": "SDLL141 - Fréquences propres d’une poutre seule, soumise à l’effet gyroscopique."
    }
  },
  {
    "id": "v2.02.144",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.144/index.html",
    "blurb": {
      "en": "SDLL144 – Speed transparency of a rotating beam with a disc",
      "fr": "SDLL144 – Transitoire de vitesse d'une poutre en rotation avec un disque"
    }
  },
  {
    "id": "v2.02.146",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.146/index.html",
    "blurb": {
      "en": "SDLL146 - Validation of elements \\"bars\\" in dynamic",
      "fr": "SDLL146 -Validation des éléments « barres » en dynamique"
    }
  },
  {
    "id": "v2.02.147",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.147/index.html",
    "blurb": {
      "en": "SDLL147 – Single vertical beam mounted on a spring subject to earthquake",
      "fr": "SDLL147 – Simple poutre verticale montée sur un ressort soumise à un séisme"
    }
  },
  {
    "id": "v2.02.148",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.148/index.html",
    "blurb": {
      "en": "SDLL148 – definition of an excitation analytical interspector on a beam and projection on a modal basis",
      "fr": "SDLL148 – définition d'un inter-spectre analytique d'excitation sur une poutre et projection sur base modale"
    }
  },
  {
    "id": "v2.02.149",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.149/index.html",
    "blurb": {
      "en": "SDLL149 – Seismic calculation of the BM3 piping (test NRC)",
      "fr": "SDLL149 – Calcul sismique de la tuyauterie BM3 (test NRC)"
    }
  },
  {
    "id": "v2.02.150",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.150/index.html",
    "blurb": {
      "en": "SDLL150 - Eigenmodes of an excreted core beam",
      "fr": "SDLL150 - Modes propres d’une poutre à âme excentrée"
    }
  },
  {
    "id": "v2.02.151",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.151/index.html",
    "blurb": {
      "en": "SDLL151 - Eigenmodes of a viscoelastic beam clamped - free",
      "fr": "SDLL151 - Modes propres d'une poutre viscoélastique encastrée - libre"
    }
  },
  {
    "id": "v2.02.153",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.153/index.html",
    "blurb": {
      "en": "SDLL153 - Eigenmodes of a thin elastic hose under different boundary conditions",
      "fr": "SDLL153 - Modes propres d'un tuyau élastique mince sous différentes conditions aux limites"
    }
  },
  {
    "id": "v2.02.154",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.154/index.html",
    "blurb": {
      "en": "SDLL154 - Simplified method seismic response Rock of straight pipe with constant cross section",
      "fr": "SDLL154 - Réponse sismique selon la méthode simplifiée Roche d'une tuyauterie droite à section constante"
    }
  },
  {
    "id": "v2.02.155",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.155/index.html",
    "blurb": {
      "en": "SDLL155 - Simplified seismic response Rock of a straight pipe with variable cross-section",
      "fr": "SDLL155 - Réponse sismique selon la méthode simplifiée Roche d'une tuyauterie droite à section variable"
    }
  },
  {
    "id": "v2.02.156",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.156/index.html",
    "blurb": {
      "en": "SDLL156 - Sismic response using simplified method Tee rock",
      "fr": "SDLL156 - Réponse sismique selon la méthode simplifiée Roche d'un té"
    }
  },
  {
    "id": "v2.02.158",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.158/index.html",
    "blurb": {
      "en": "SDLL158 – Validation of beam modal parameters",
      "fr": "SDLL158 – Validation des paramètres modaux de poutre"
    }
  },
  {
    "id": "v2.02.159",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.159/index.html",
    "blurb": {
      "en": "SDLL159 – Seismic Calculation of the BM3 Pipe",
      "fr": "SDLL159 – Calcul sismique de la tuyauterie BM3"
    }
  },
  {
    "id": "v2.02.302",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.302/index.html",
    "blurb": {
      "en": "SDLL302 – A beam subject to the \\"El Centro\\" accelerogram at each end, one step away from the other",
      "fr": "SDLL302 – Poutre soumise à l'accélérogramme « El Centro » à chacune de ses extrémités, l'une déphasée par rapport à l'autre"
    }
  },
  {
    "id": "v2.02.311",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.311/index.html",
    "blurb": {
      "en": "SDLL311 - Transient dynamic response of a beam in traction under pressure",
      "fr": "SDLL311 - Réponse dynamique transitoire d’une poutre en traction sous déplacement imposé"
    }
  },
  {
    "id": "v2.02.400",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.400/index.html",
    "blurb": {
      "en": "SDLL400 - Vibration beam with center of torsion excentrated",
      "fr": "SDLL400 - Poutre en vibration avec centre de torsion excentré"
    }
  },
  {
    "id": "v2.02.401",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.401/index.html",
    "blurb": {
      "en": "SDLL401 - straight beam inclined to 20°, subjected to sinusoidal tensile and twisting forces",
      "fr": "SDLL401 - Poutre droite inclinée à 20°, soumise à des efforts sinusoïdaux de traction et de torsion"
    }
  },
  {
    "id": "v2.02.403",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.02.403/index.html",
    "blurb": {
      "en": "SDLL403 - Vibration of a rotating pendulum",
      "fr": "SDLL403 - Vibrations d’un pendule en rotation"
    }
  },
  {
    "id": "v2.03.001",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.001/index.html",
    "blurb": {
      "en": "SDLS01 - Slim square plate, free or clamped at the edge",
      "fr": "SDLS01 - Plaque carrée mince, libre ou encastrée au bord"
    }
  },
  {
    "id": "v2.03.002",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.002/index.html",
    "blurb": {
      "en": "SDLS02 - clamped thin diamond plate at the edge",
      "fr": "SDLS02 - Plaque losange mince encastrée au bord"
    }
  },
  {
    "id": "v2.03.003",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.003/index.html",
    "blurb": {
      "en": "SDLS03 - Rectangular thin plate simply pressed on the edges",
      "fr": "SDLS03 - Plaque rectangulaire mince simplement appuyée sur les bords"
    }
  },
  {
    "id": "v2.03.004",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.004/index.html",
    "blurb": {
      "en": "SDLS04 - Cyclical substructure: clamped ring thin plate in its hub",
      "fr": "SDLS04 - Sous-structuration cyclique : Plaque mince annulaire encastrée en son moyeu"
    }
  },
  {
    "id": "v2.03.007",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.007/index.html",
    "blurb": {
      "en": "SDLS07 - Eigenmodes of a thin spherical envelope",
      "fr": "SDLS07 - Modes propres d'une enveloppe sphérique mince"
    }
  },
  {
    "id": "v2.03.008",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.008/index.html",
    "blurb": {
      "en": "SDLS08 - Eigenmodes of a square plate calculated on a reduced basis",
      "fr": "SDLS08 - Modes propres d'une plaque carrée calculés sur base réduite"
    }
  },
  {
    "id": "v2.03.100",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.100/index.html",
    "blurb": {
      "en": "SDLS100 - Study of mesh sizes on a thin square plate",
      "fr": "SDLS100 - Etude de maillages sur une plaque carrée mince"
    }
  },
  {
    "id": "v2.03.102",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.102/index.html",
    "blurb": {
      "en": "SDLS102 - Free vibrations of a compression blade",
      "fr": "SDLS102 - Vibrations libres d'une aube de compression"
    }
  },
  {
    "id": "v2.03.103",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.103/index.html",
    "blurb": {
      "en": "SDLS103 - Coaxial rings under ring flow: inertial coupling between modes",
      "fr": "SDLS103 - Coques coaxiales sous écoulement annulaire : couplage inertiel entre modes"
    }
  },
  {
    "id": "v2.03.104",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.104/index.html",
    "blurb": {
      "en": "SDLS104 - Coaxial shells under ring flow",
      "fr": "SDLS104 - Coques coaxiales sous écoulement annulaire"
    }
  },
  {
    "id": "v2.03.105",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.105/index.html",
    "blurb": {
      "en": "SDLS105 - Flat plate subjected to homogeneous turbulence",
      "fr": "SDLS105 - Plaque plane soumise à une turbulence homogène"
    }
  },
  {
    "id": "v2.03.106",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.106/index.html",
    "blurb": {
      "en": "SDLS106 - Modal calculation of a rectangular plate simply pressed on all its edges",
      "fr": "SDLS106 - Calcul modal d'une plaque rectangulaire simplement appuyée sur tous ses bords"
    }
  },
  {
    "id": "v2.03.107",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.107/index.html",
    "blurb": {
      "en": "SDLS107 – Turbulent Cylinder in axial ring flow",
      "fr": "SDLS107 – Cylindre soumis à une turbulence en écoulement annulaire axial"
    }
  },
  {
    "id": "v2.03.109",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.109/index.html",
    "blurb": {
      "en": "SDLS109 - eigenfrequencies of a thick cylindrical ring",
      "fr": "SDLS109 - Fréquences propres d’un anneau cylindrique épais"
    }
  },
  {
    "id": "v2.03.111",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.111/index.html",
    "blurb": {
      "en": "SDLS111 - Dynamic substructure: triangular plate",
      "fr": "SDLS111 - Sous-structuration dynamiques : plaque triangulaire"
    }
  },
  {
    "id": "v2.03.112",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.112/index.html",
    "blurb": {
      "en": "SDLS112 - Extrapolation of measurements on a 2D model (test of GARTEUR)",
      "fr": "SDLS112 - Extrapolation de mesures sur un modèle 2D (test de GARTEUR)"
    }
  },
  {
    "id": "v2.03.113",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.113/index.html",
    "blurb": {
      "en": "SDLS113 – Flat-plated deformation under harmonic pressure",
      "fr": "SDLS113 – Plaque en déformation plane sous pression harmonique"
    }
  },
  {
    "id": "v2.03.114",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.114/index.html",
    "blurb": {
      "en": "SDLS114 - Calculation of stress intensity factors of a modal recombinant cracked plate",
      "fr": "SDLS114 - Calcul des facteurs d’intensité de contrainte d’une plaque fissurée par recombinaison modale"
    }
  },
  {
    "id": "v2.03.115",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.115/index.html",
    "blurb": {
      "en": "SDLS115 – Comparison with analytical solution of a traction plate",
      "fr": "SDLS115 – Comparaison avec la solution analytique d’une plaque en traction"
    }
  },
  {
    "id": "v2.03.116",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.116/index.html",
    "blurb": {
      "en": "SDLS116 – Transient loading plate, processed in explicit dynamic",
      "fr": "SDLS116 – Plaque en chargement transitoire, traitée en dynamique explicite"
    }
  },
  {
    "id": "v2.03.118",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.118/index.html",
    "blurb": {
      "en": "SDLS118 - Response of a rigid circular foundation to space-variable seismic excitation",
      "fr": "SDLS118 - Réponse d’une fondation circulaire rigide à une excitation sismique variable en espace"
    }
  },
  {
    "id": "v2.03.119",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.119/index.html",
    "blurb": {
      "en": "SDLS119 - Plate on supports subject to Ricker acceleration (time-frequency method)",
      "fr": "SDLS119 - Plaque sur appuis soumise à une accélération de Ricker (méthode temps-fréquence)"
    }
  },
  {
    "id": "v2.03.120",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.120/index.html",
    "blurb": {
      "en": "SDLS120 – 2D cracked plate subjected to loading in Mode I. Validation of modal calculation with X-FEM",
      "fr": "SDLS120 – Plaque 2D fissurée soumise à un chargement en Mode I. Validation du calcul modal avec X-FEM"
    }
  },
  {
    "id": "v2.03.122",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.122/index.html",
    "blurb": {
      "en": "SDLS122 - Modal analysis of a plate pressed on its corners – Under structuring",
      "fr": "SDLS122 - Analyse modale d'une plaque appuyée sur ses coins – Sous structuration"
    }
  },
  {
    "id": "v2.03.123",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.123/index.html",
    "blurb": {
      "en": "SDLS123 – straight beam with Rayleigh damping (elastic behaviour)",
      "fr": "SDLS123 – Poutre droite avec amortissement de Rayleigh (comportement élastique)"
    }
  },
  {
    "id": "v2.03.124",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.124/index.html",
    "blurb": {
      "en": "SDLS124 – Exhaust plate in flexion under dynamic loading",
      "fr": "SDLS124 – Plaque excentrée en flexion sous chargement dynamique"
    }
  },
  {
    "id": "v2.03.127",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.127/index.html",
    "blurb": {
      "en": "SDLS127 - Harmonic response of a viscoelastic sandwich plate clamped on one edge",
      "fr": "SDLS127 - Réponse harmonique d'une plaque sandwich viscoélastique encastrée sur un bord"
    }
  },
  {
    "id": "v2.03.129",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.129/index.html",
    "blurb": {
      "en": "SDLS129 - CALCUL MODAL D'UNE ETOILE A 3 BRANCHES",
      "fr": "SDLS129 - CALCUL MODAL D'UNE ETOILE A 3 BRANCHES"
    }
  },
  {
    "id": "v2.03.130",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.130/index.html",
    "blurb": {
      "en": "SDLS130 – Natural frequency of a laminated composite plate consisting of 8 folds",
      "fr": "SDLS130 – Fréquence naturelle d'une plaque composite stratifiée composée de 8 plis"
    }
  },
  {
    "id": "v2.03.139",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.139/index.html",
    "blurb": {
      "en": "SDLS139 - Identification of fluid forces on wired structure",
      "fr": "SDLS139 - Identification d’efforts fluides sur une structure filaire"
    }
  },
  {
    "id": "v2.03.200",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.200/index.html",
    "blurb": {
      "en": "SDLP200 – Comparison of the holding of a homogeneous embankment between POST_NEWMARK and GeoSlope",
      "fr": "SDLP200 – Comparaison de la tenue au séisme d’un remblai homogène entre POST_NEWMARK et GeoSlope"
    }
  },
  {
    "id": "v2.03.201",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.201/index.html",
    "blurb": {
      "en": "SDLP201 – Using the CALM method for Modelling the propagation of a compression wave in an elastic bar",
      "fr": "SDLP201 – Utilisation de la méthode CALM pour la modélisation de la propagation d'une onde de compression dans un barreau élastique"
    }
  },
  {
    "id": "v2.03.300",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.300/index.html",
    "blurb": {
      "en": "SDLS300 - Ground-excited air refrigerant",
      "fr": "SDLS300 - Aéroréfrigérant soumis à une excitation sol"
    }
  },
  {
    "id": "v2.03.501",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.501/index.html",
    "blurb": {
      "en": "SDLS501 - Free vibrations of a corrugated sheet in its plane",
      "fr": "SDLS501 - Vibrations libres d’une tôle ondulée dans son plan"
    }
  },
  {
    "id": "v2.03.502",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.502/index.html",
    "blurb": {
      "en": "SDLS502 - Square plate \\"solid\\" simply supported",
      "fr": "SDLS502 - Plaque carrée « solide » simplement supportée"
    }
  },
  {
    "id": "v2.03.503",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.503/index.html",
    "blurb": {
      "en": "SDLS503 - Bending vibrations of a sandwich beam",
      "fr": "SDLS503 - Vibrations de flexion d’une poutre sandwich"
    }
  },
  {
    "id": "v2.03.504",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.504/index.html",
    "blurb": {
      "en": "SDLS504 - Side flame of a beam (overturn)",
      "fr": "SDLS504 - Flambement latéral d’une poutre (déversement)"
    }
  },
  {
    "id": "v2.03.505",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.505/index.html",
    "blurb": {
      "en": "SDLS505 - Flaming of an externally pressurized cylindrical casing",
      "fr": "SDLS505 - Flambement d’une enveloppe cylindrique sous pression externe"
    }
  },
  {
    "id": "v2.03.506",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.03.506/index.html",
    "blurb": {
      "en": "SDLS506 – Square plate in transient dynamic",
      "fr": "SDLS506 – Plaque carrée en dynamique transitoire"
    }
  },
  {
    "id": "v2.04.100",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.04.100/index.html",
    "blurb": {
      "en": "SDLV100 - Vibration of a variable rectangular cross section slender beam (clamped-free)",
      "fr": "SDLV100 - Vibration d'une poutre élancée de section rectangulaire variable (encastrée-libre)"
    }
  },
  {
    "id": "v2.04.101",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.04.101/index.html",
    "blurb": {
      "en": "SDLV101 –Dynamic substructure beam",
      "fr": "SDLV101 –Poutre en sous-structuration dynamique"
    }
  },
  {
    "id": "v2.04.102",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.04.102/index.html",
    "blurb": {
      "en": "SDLV102 –Lyre with IFS in dynamic substructure",
      "fr": "SDLV102 –Lyre avec IFS en sous-structuration dynamique"
    }
  },
  {
    "id": "v2.04.103",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.04.103/index.html",
    "blurb": {
      "en": "SDLV103 – Closed with IFS in dynamic substructure",
      "fr": "SDLV103 –Lyre fermée avec IFS en sous-structuration dynamique"
    }
  },
  {
    "id": "v2.04.104",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.04.104/index.html",
    "blurb": {
      "en": "SDLV104 - fix DEFI_BASE_MODALE Developer Error with the option \\"ORTHO=OUI\\"",
      "fr": "SDLV104 - Correction Erreur Développeur DEFI_BASE_MODALE avec l'option \\"ORTHO=OUI\\""
    }
  },
  {
    "id": "v2.04.111",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.04.111/index.html",
    "blurb": {
      "en": "SDLV111 - Homogenization of a beam network in an incompressible fluid",
      "fr": "SDLV111 - Homogénéisation d’un réseau de poutres dans un fluide incompressible"
    }
  },
  {
    "id": "v2.04.120",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.04.120/index.html",
    "blurb": {
      "en": "SDLV120 - Absorption of compression wave in elastic bar",
      "fr": "SDLV120 - Absorption d'une onde de compression dans un barreau élastique"
    }
  },
  {
    "id": "v2.04.122",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.04.122/index.html",
    "blurb": {
      "en": "SDLV122 - Extrapolation of local measurements to a complete model (3D)",
      "fr": "SDLV122 - Extrapolation de mesures locales sur un modèle complet (3D)"
    }
  },
  {
    "id": "v2.04.123",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.04.123/index.html",
    "blurb": {
      "en": "SDLV123 - Calculation of Elastodynamic G in infinite medium for a flat crack of finite length",
      "fr": "SDLV123 - Calcul de G élastodynamique en milieu infini pour une fissure plane de longueur finie"
    }
  },
  {
    "id": "v2.04.124",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.04.124/index.html",
    "blurb": {
      "en": "SDLV124 – Volumetric Paving subject to harmonic pressure",
      "fr": "SDLV124 – Pavé volumique soumis à une pression harmonique"
    }
  },
  {
    "id": "v2.04.126",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.04.126/index.html",
    "blurb": {
      "en": "SDLV126 – Viscoelastic damping Modelling with RIGI_MECA_HYST",
      "fr": "SDLV126 – Modélisation de l’amortissement viscoélastique avec RIGI_MECA_HYST"
    }
  },
  {
    "id": "v2.04.128",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.04.128/index.html",
    "blurb": {
      "en": "SDLV128 - Modal expansion on a 3D cylindrical tube from extensiometric measurements",
      "fr": "SDLV128 - Expansion modale sur un tube cylindrique 3D à partir de mesures extensiométriques"
    }
  },
  {
    "id": "v2.04.129",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.04.129/index.html",
    "blurb": {
      "en": "SDLV129 - Vibrating fat of a fan blade",
      "fr": "SDLV129 - Fatigue vibratoire d'une aube de ventilateur"
    }
  },
  {
    "id": "v2.04.130",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.04.130/index.html",
    "blurb": {
      "en": "SDLV130 - Cracked 3D plate subjected to loading in Mode I. Validation of modal calculation with X-FEM",
      "fr": "SDLV130 - Plaque 3D fissurée soumise à un chargement en Mode I. Validation du calcul modal avec X-FEM"
    }
  },
  {
    "id": "v2.04.131",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.04.131/index.html",
    "blurb": {
      "en": "SDLV131 - Simulation of a strain gauge by the OBSERVATION command",
      "fr": "SDLV131 - Simulation d'une jauge de déformation par la commande OBSERVATION"
    }
  },
  {
    "id": "v2.04.132",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.04.132/index.html",
    "blurb": {
      "en": "SDLV132 - Substructured consideration of a generalized mass in a tree line modal calculation",
      "fr": "SDLV132 - Prise en compte, par sous-structuration, d'un massif généralisé dans un calcul modal de ligne d'arbres"
    }
  },
  {
    "id": "v2.04.134",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.04.134/index.html",
    "blurb": {
      "en": "SDLV134 - Cyclic substructure: Cantilever beam – free nodes on the axis",
      "fr": "SDLV134 - Sous-structuration cyclique : Poutre cantilever – présence de nœuds libres sur l'axe"
    }
  },
  {
    "id": "v2.04.301",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.04.301/index.html",
    "blurb": {
      "en": "SDLV301 – Cyclical substructure: pump wheel",
      "fr": "SDLV301 – Sous-structuration cyclique : rouet de pompe"
    }
  },
  {
    "id": "v2.04.302",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.04.302/index.html",
    "blurb": {
      "en": "SDLV302 – Modal substructure analysis: two-wired beam",
      "fr": "SDLV302 – Analyse modale par sous-structuration : poutre bi-appuyée"
    }
  },
  {
    "id": "v2.04.401",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.04.401/index.html",
    "blurb": {
      "en": "SDLV401 - Free-Free Full Sphere",
      "fr": "SDLV401 - Sphère pleine libre-libre"
    }
  },
  {
    "id": "v2.04.402",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.04.402/index.html",
    "blurb": {
      "en": "SDLV402 - Dynamic Substructure: mesh incompatible and mode",
      "fr": "SDLV402 - Sous-structuration dynamiques : maillage incompatible et mode"
    }
  },
  {
    "id": "v2.05.001",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.05.001/index.html",
    "blurb": {
      "en": "SDLX01 - Flexion of a symmetrical portal",
      "fr": "SDLX01 - Flexion d'un portique symétrique"
    }
  },
  {
    "id": "v2.05.002",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.05.002/index.html",
    "blurb": {
      "en": "SDLX02 - Pipe: Hovgaard problem. Spectral analysis",
      "fr": "SDLX02 - Tuyauterie : Problème de Hovgaard. Analyse spectrale"
    }
  },
  {
    "id": "v2.05.003",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.05.003/index.html",
    "blurb": {
      "en": "SDLX03 - Assembly of thin rectangular plates",
      "fr": "SDLX03 - Assemblage de plaques rectangulaires minces entretoisées"
    }
  },
  {
    "id": "v2.05.102",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.05.102/index.html",
    "blurb": {
      "en": "SDLX102 – Structure - ground interaction - parametric structure between two level buildings",
      "fr": "SDLX102 – Interaction structure - sol - structure paramétrique entre deux bâtiments de niveau"
    }
  },
  {
    "id": "v2.05.103",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.05.103/index.html",
    "blurb": {
      "en": "SDLX103 – Structure - ground interaction - structure between two buried buildings",
      "fr": "SDLX103 – Interaction structure - sol - structure entre deux bâtiments enfouis"
    }
  },
  {
    "id": "v2.05.106",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.05.106/index.html",
    "blurb": {
      "en": "SDLX106 – Soil impedances under a rectangular foundation embedded in a homogeneous medium",
      "fr": "SDLX106 – Impédances de sol sous une fondation rectangulaire enfoncée dans un milieu homogène"
    }
  },
  {
    "id": "v2.05.201",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.05.201/index.html",
    "blurb": {
      "en": "SDLX201 - non-regression Test: eigenmodes",
      "fr": "SDLX201 - Test de non-régression : modes propres"
    }
  },
  {
    "id": "v2.05.300",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.05.300/index.html",
    "blurb": {
      "en": "SDLX300 - Pipes subjected to excitation while moving, speed, acceleration",
      "fr": "SDLX300 - Tuyauterie soumise à une excitation en déplacement, vitesse, accélération"
    }
  },
  {
    "id": "v2.05.301",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.05.301/index.html",
    "blurb": {
      "en": "SDLX301 - Unsymmetrical floor-column building with horizontal excitation",
      "fr": "SDLX301 - Bâtiment à plancher-colonnes dissymétrique soumis à une excitation horizontale"
    }
  },
  {
    "id": "v2.05.302",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.05.302/index.html",
    "blurb": {
      "en": "SDLX302 - clamped beam and concentrated mass subjected to transverse random force",
      "fr": "SDLX302 - Poutre encastrée et masse concentrée soumise à une force aléatoire transverse"
    }
  },
  {
    "id": "v2.05.400",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.05.400/index.html",
    "blurb": {
      "en": "SDLX400 – Articulated beam on elastic support",
      "fr": "SDLX400 – Poutre articulée sur appui élastique"
    }
  },
  {
    "id": "v2.06.100",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.06.100/index.html",
    "blurb": {
      "en": "SHLL100 - Harmonic response of a bar by dynamic substructure",
      "fr": "SHLL100 - Réponse harmonique d'une barre par sous-structuration dynamique"
    }
  },
  {
    "id": "v2.06.101",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.06.101/index.html",
    "blurb": {
      "en": "SHLL101 - straight beam. Harmonic Analysis",
      "fr": "SHLL101 - Poutre droite. Analyse harmonique"
    }
  },
  {
    "id": "v2.06.102",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.06.102/index.html",
    "blurb": {
      "en": "SHLL102 – Harmonic response of a beam with 3 discs, subject to gyroscopic effect.",
      "fr": "SHLL102 – Réponse harmonique d’une poutre avec 3 disques, soumise à l’effet gyroscopique."
    }
  },
  {
    "id": "v2.06.103",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.06.103/index.html",
    "blurb": {
      "en": "SHLL103 – Harmonic response of a rotor with two non-symmetric discs and two bearings, subject to gyroscopic effect",
      "fr": "SHLL103 – Réponse harmonique d'un rotor avec deux disques et deux paliers non symétriques, soumis à l'effet gyroscopique"
    }
  },
  {
    "id": "v2.07.100",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.07.100/index.html",
    "blurb": {
      "en": "SHLV100 - Harmonic response of a hollow cylinder to flat deformations",
      "fr": "SHLV100 - Réponse harmonique d’un cylindre creux en déformations planes"
    }
  },
  {
    "id": "v2.07.101",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.07.101/index.html",
    "blurb": {
      "en": "SHLV101 - Harmonic response subject to a linear relationship in fluid-structure intereaction",
      "fr": "SHLV101 - Réponse harmonique soumise à une relation linéaire en intereaction fluide-structure"
    }
  },
  {
    "id": "v2.07.200",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.07.200/index.html",
    "blurb": {
      "en": "SHLP200 - Harmonic response of a bar subjected to a non-homogenous linear relationship",
      "fr": "SHLP200 - Réponse harmonique d’une barre soumise à une relation linéaire non-homogène"
    }
  },
  {
    "id": "v2.07.301",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.07.301/index.html",
    "blurb": {
      "en": "SHLV301 – Harmonic response by substructure: two-wired beam",
      "fr": "SHLV301 – Réponse harmonique par sous-structuration : poutre bi-appuyée"
    }
  },
  {
    "id": "v2.08.011",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.08.011/index.html",
    "blurb": {
      "en": "FORMA11 - Practical work of the \\"dynamic analysis\\" training: modal analysis",
      "fr": "FORMA11 - Travaux pratiques de la formation « Analyse dynamique » : analyse modale"
    }
  },
  {
    "id": "v2.08.012",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.08.012/index.html",
    "blurb": {
      "en": "FORMA12 – Practical work of the training \\"Introduction to linear & nonlinear dynamic analysis\\"",
      "fr": "FORMA12 – Travaux pratiques de la formation « introduction à l'analyse dynamique linéaire & non-linéaire »"
    }
  },
  {
    "id": "v2.08.013",
    "part": "V2",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v2/v2.08.013/index.html",
    "blurb": {
      "en": "FORMA13 - Practical work of the dynamic analysis training: dynamic substructure",
      "fr": "FORMA13 - Travaux pratiques de la formation «Analyse dynamique» : sous-structuration dynamique"
    }
  },
  {
    "id": "v3.01.001",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.001/index.html",
    "blurb": {
      "en": "SSLL01 - slender beam on 2 clamped supports",
      "fr": "SSLL01 - Poutre élancée sur 2 appuis encastrés"
    }
  },
  {
    "id": "v3.01.002",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.002/index.html",
    "blurb": {
      "en": "SSLL02 - Short beam on two articulated supports",
      "fr": "SSLL02 - Poutre courte sur deux appuis articulés"
    }
  },
  {
    "id": "v3.01.003",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.003/index.html",
    "blurb": {
      "en": "SSLL03 - slender beam on 3 supports",
      "fr": "SSLL03 - Poutre élancée sur 3 appuis"
    }
  },
  {
    "id": "v3.01.004",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.004/index.html",
    "blurb": {
      "en": "SSLL04 - Space structure on elastic supports",
      "fr": "SSLL04 - Structure spatiale sur appuis élastiques"
    }
  },
  {
    "id": "v3.01.005",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.005/index.html",
    "blurb": {
      "en": "SSLL05 – Bilame: clamped beams connected by an unformable element",
      "fr": "SSLL05 – Bilame : poutres encastrées reliées par un élément indéformable"
    }
  },
  {
    "id": "v3.01.006",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.006/index.html",
    "blurb": {
      "en": "SSLL06- clamped thin arc in flat bending",
      "fr": "SSLL06- Arc mince encastré en flexion plane"
    }
  },
  {
    "id": "v3.01.007",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.007/index.html",
    "blurb": {
      "en": "SSLL0 7 - clamped thin arc in off-plane bending",
      "fr": "SSLL0 7 - Arc mince encastré en flexion hors plan"
    }
  },
  {
    "id": "v3.01.008",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.008/index.html",
    "blurb": {
      "en": "SSLL08- Bi-articulated thin arc in flat bending",
      "fr": "SSLL08- Arc mince bi-articulé en flexion plane"
    }
  },
  {
    "id": "v3.01.009",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.009/index.html",
    "blurb": {
      "en": "SSLL09- 2-bar system with 3 ball bars",
      "fr": "SSLL09- Système de 2 barres à 3 rotules"
    }
  },
  {
    "id": "v3.01.010",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.010/index.html",
    "blurb": {
      "en": "SSLL10 - Side restraints portal",
      "fr": "SSLL10 - Portique à liaisons latérales"
    }
  },
  {
    "id": "v3.01.011",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.011/index.html",
    "blurb": {
      "en": "SSLL11 - Threads of articulated bars under point load",
      "fr": "SSLL11 - Treillis de barres articulées sous charge ponctuelle"
    }
  },
  {
    "id": "v3.01.012",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.012/index.html",
    "blurb": {
      "en": "SSLL12 - Three-switched bar trim",
      "fr": "SSLL12 - Treillis de barres sous trois sollicitations"
    }
  },
  {
    "id": "v3.01.013",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.013/index.html",
    "blurb": {
      "en": "SSLL13 – Calculation of beam fittings",
      "fr": "SSLL13 – Calcul du ferraillage des poutres"
    }
  },
  {
    "id": "v3.01.014",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.014/index.html",
    "blurb": {
      "en": "SSLL14 - Foot-articulated plan portico",
      "fr": "SSLL14 - Portique plan articulé en pied"
    }
  },
  {
    "id": "v3.01.015",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.015/index.html",
    "blurb": {
      "en": "SSLL15- Beam on elastic floor, free ends",
      "fr": "SSLL15- Poutre sur sol élastique, extrémités libres"
    }
  },
  {
    "id": "v3.01.016",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.016/index.html",
    "blurb": {
      "en": "SSLL16- Beam on elastic floor, articulated ends",
      "fr": "SSLL16- Poutre sur sol élastique, extrémités articulées"
    }
  },
  {
    "id": "v3.01.017",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.017/index.html",
    "blurb": {
      "en": "SSLL17- Subtended beam",
      "fr": "SSLL17- Poutre sous-tendue"
    }
  },
  {
    "id": "v3.01.018",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.018/index.html",
    "blurb": {
      "en": "SSLL18- CALC_FERRAILLAGE Operator Validation Compared to SECTION_ARMATURES Tool",
      "fr": "SSLL18- Validation de l’opérateur CALC_FERRAILLAGE par comparaison avec l’outil SECTION_ARMATURES"
    }
  },
  {
    "id": "v3.01.100",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.100/index.html",
    "blurb": {
      "en": "SSLL100 - Symmetrical structure of beams with one elbow",
      "fr": "SSLL100 - Structure symétrique de poutres avec un coude"
    }
  },
  {
    "id": "v3.01.101",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.101/index.html",
    "blurb": {
      "en": "SSLL101 - Pipes : HOVGAARD problem",
      "fr": "SSLL101 - Tuyauterie : Problème de HOVGAARD"
    }
  },
  {
    "id": "v3.01.102",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.102/index.html",
    "blurb": {
      "en": "SSLL102 - straight beam subjected to unitary effort",
      "fr": "SSLL102 - Poutre droite soumise à des efforts unitaires"
    }
  },
  {
    "id": "v3.01.103",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.103/index.html",
    "blurb": {
      "en": "SSLL103 - Elastical flame of a corneal",
      "fr": "SSLL103 - Flambement élastique d'une cornière"
    }
  },
  {
    "id": "v3.01.104",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.104/index.html",
    "blurb": {
      "en": "SSLL104 - Pre-deformations in a straight beam",
      "fr": "SSLL104 - Pré-déformations dans une poutre droite"
    }
  },
  {
    "id": "v3.01.105",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.105/index.html",
    "blurb": {
      "en": "SSLL105 - Elastic flame of a L-shaped structure",
      "fr": "SSLL105 - Flambement élastique d'une structure en L"
    }
  },
  {
    "id": "v3.01.106",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.106/index.html",
    "blurb": {
      "en": "SSLL106 - Right hose",
      "fr": "SSLL106 - Tuyau droit"
    }
  },
  {
    "id": "v3.01.107",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.107/index.html",
    "blurb": {
      "en": "SSLL107 - Validation of MACR_CARA_POUTRE",
      "fr": "SSLL107 - Validation de MACR_CARA_POUTRE"
    }
  },
  {
    "id": "v3.01.108",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.108/index.html",
    "blurb": {
      "en": "SSLL108 - Discrete elements 2D",
      "fr": "SSLL108 - Éléments discrets 2D"
    }
  },
  {
    "id": "v3.01.109",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.109/index.html",
    "blurb": {
      "en": "SSLL109 - Balance in distorted configuration of a multifibre beam",
      "fr": "SSLL109 - Équilibre en configuration déformée d’une poutre multi-fibres"
    }
  },
  {
    "id": "v3.01.110",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.110/index.html",
    "blurb": {
      "en": "SSLL110 - 3 bar U-shaped system under clean weight",
      "fr": "SSLL110 - Système de 3 barres en U sous poids propre"
    }
  },
  {
    "id": "v3.01.111",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.111/index.html",
    "blurb": {
      "en": "SSLL111 - Static response of a reinforced concrete beam (T-section) with linear behaviour",
      "fr": "SSLL111 - Réponse statique d’une poutre béton armé (section en T) à comportement linéaire"
    }
  },
  {
    "id": "v3.01.112",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.112/index.html",
    "blurb": {
      "en": "SSLL112 - Circular vault under uniform pressure",
      "fr": "SSLL112 - Voûte circulaire sous pression uniforme"
    }
  },
  {
    "id": "v3.01.116",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.116/index.html",
    "blurb": {
      "en": "SSLL116 - 3D reinforced trellis",
      "fr": "SSLL116 - Treillis 3D renforcé"
    }
  },
  {
    "id": "v3.01.117",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.117/index.html",
    "blurb": {
      "en": "SSLL117 – Validation of modellings second gradient",
      "fr": "SSLL117 – Validation des modélisations second gradient"
    }
  },
  {
    "id": "v3.01.118",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.118/index.html",
    "blurb": {
      "en": "SSLL118 – clamped beam subject to displacements defined in a local marker",
      "fr": "SSLL118 – Poutre encastrée soumise à des déplacements définis dans un repère local"
    }
  },
  {
    "id": "v3.01.119",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.119/index.html",
    "blurb": {
      "en": "SSLL119 – POWERS SUBMITTED AT A FIXED TIME",
      "fr": "SSLL119 – Poutres soumises à des moments répartis"
    }
  },
  {
    "id": "v3.01.120",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.120/index.html",
    "blurb": {
      "en": "SSLL120 – Internal force calculation beams at nodes: EFGE_ELNO",
      "fr": "SSLL120 – Poutres calcul des efforts internes aux nœuds : EFGE_ELNO"
    }
  },
  {
    "id": "v3.01.121",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.121/index.html",
    "blurb": {
      "en": "SSLL121 – Pressures: Calculation of nodes SIPO_ELNO stress",
      "fr": "SSLL121 – Poutres : Calcul des contraintes aux noeuds SIPO_ELNO"
    }
  },
  {
    "id": "v3.01.400",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.400/index.html",
    "blurb": {
      "en": "SSLL400 - Variable section beam, subject to one-off or distributed forces",
      "fr": "SSLL400 - Poutre de section variable, soumise à des efforts ponctuels ou répartis"
    }
  },
  {
    "id": "v3.01.402",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.402/index.html",
    "blurb": {
      "en": "SSLL402 - Dynamometric ring",
      "fr": "SSLL402 - Anneau dynamométrique"
    }
  },
  {
    "id": "v3.01.403",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.403/index.html",
    "blurb": {
      "en": "SSLL403 - Flaming of a beam under the effect of its own weight",
      "fr": "SSLL403 - Flambement d’une poutre sous l’effet de son poids propre"
    }
  },
  {
    "id": "v3.01.404",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.01.404/index.html",
    "blurb": {
      "en": "SSLL404 - Flaming of an arch",
      "fr": "SSLL404 - Flambement d’une arche"
    }
  },
  {
    "id": "v3.02.001",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.001/index.html",
    "blurb": {
      "en": "SSLP01 – Plate in bending and shear in its plane",
      "fr": "SSLP01 – Plaque en flexion et cisaillement dans son plan"
    }
  },
  {
    "id": "v3.02.002",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.002/index.html",
    "blurb": {
      "en": "SSLP02 – Simple Traction of Perforated Plate",
      "fr": "SSLP02 – Traction simple d'une plaque perforée"
    }
  },
  {
    "id": "v3.02.100",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.100/index.html",
    "blurb": {
      "en": "SSLP100 - Static substructure cross",
      "fr": "SSLP100 - Crosse en sous-structure statique"
    }
  },
  {
    "id": "v3.02.101",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.101/index.html",
    "blurb": {
      "en": "SSLP101 - Rate of return of energy in flat stresses",
      "fr": "SSLP101 - Taux de restitution d'énergie en contraintes planes"
    }
  },
  {
    "id": "v3.02.102",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.102/index.html",
    "blurb": {
      "en": "SSLP102 - energy release rate with thermal original state",
      "fr": "SSLP102 - Taux de restitution de l'énergie avec état initial d'origine thermique"
    }
  },
  {
    "id": "v3.02.103",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.103/index.html",
    "blurb": {
      "en": "SSLP103 - Calculation of stress intensity coefficients KI and KII for a linear elasticity cracked circular plate",
      "fr": "SSLP103 - Calcul des coefficients d’intensité de contraintes KI et KII pour une plaque circulaire fissurée en élasticité linéaire"
    }
  },
  {
    "id": "v3.02.104",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.104/index.html",
    "blurb": {
      "en": "SSLP104 - Cook Membrane in Elasticity",
      "fr": "SSLP104 - Membrane de Cook en élasticité"
    }
  },
  {
    "id": "v3.02.105",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.105/index.html",
    "blurb": {
      "en": "SSLP105 - Excavation of a circular tunnel in a linear elastic massif",
      "fr": "SSLP105 - Excavation d’un tunnel circulaire dans un massif élastique linéaire"
    }
  },
  {
    "id": "v3.02.106",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.106/index.html",
    "blurb": {
      "en": "SSLP106 – Rectangular pure bending massif (test of elements QUAD4 embedded)",
      "fr": "SSLP106 – Massif rectangulaire en flexion pure (test des éléments QUAD4 sous intégrés)"
    }
  },
  {
    "id": "v3.02.108",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.108/index.html",
    "blurb": {
      "en": "SSLP108 - clamped Arche in elasticity",
      "fr": "SSLP108 - Arche encastrée en élasticité"
    }
  },
  {
    "id": "v3.02.109",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.109/index.html",
    "blurb": {
      "en": "SSLP109 - Validation of a feature of the DDL_STAB option",
      "fr": "SSLP109 - Validation d'une fonctionnalité de l'option DDL_STAB"
    }
  },
  {
    "id": "v3.02.111",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.111/index.html",
    "blurb": {
      "en": "FORMA05 - Practical work of the \\"Rupture Mechanics\\" training: Traction cracked plate (SENT)",
      "fr": "FORMA05 - Travaux pratiques de la formation « Mécanique de la Rupture » : Plaque fissurée en traction (SENT)"
    }
  },
  {
    "id": "v3.02.112",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.112/index.html",
    "blurb": {
      "en": "FORMA06 - Practical work of the \\"Advanced use\\" training: multi-cracked traction plate",
      "fr": "FORMA06 - Travaux pratiques de la formation « Utilisation avancée » : plaque multi-fissurée en traction"
    }
  },
  {
    "id": "v3.02.113",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.113/index.html",
    "blurb": {
      "en": "SSLP113 – RBE3-type relationships between a square and a discrete",
      "fr": "SSLP113 – Relations de type RBE3 entre un carré et un discret"
    }
  },
  {
    "id": "v3.02.114",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.114/index.html",
    "blurb": {
      "en": "SSLP114 - Semi-infinite flat fissure",
      "fr": "SSLP114 - Fissure plane semi-infinie"
    }
  },
  {
    "id": "v3.02.115",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.115/index.html",
    "blurb": {
      "en": "SSLP115 - Calculation of the energy return rate of a cracked disc in the presence of initial stresses",
      "fr": "SSLP115 - Calcul du taux de restitution d'énergie d'un disque fissuré en présence de contraintes initiales"
    }
  },
  {
    "id": "v3.02.116",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.116/index.html",
    "blurb": {
      "en": "SSLP116 – Square flexion plate – constant temperature gradient",
      "fr": "SSLP116 – Plaque carrée en flexion – gradient de température constant"
    }
  },
  {
    "id": "v3.02.117",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.117/index.html",
    "blurb": {
      "en": "SSLP117 – Square flexion plate – variable temperature gradient",
      "fr": "SSLP117 – Plaque carrée en flexion – gradient de température variable"
    }
  },
  {
    "id": "v3.02.119",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.119/index.html",
    "blurb": {
      "en": "SSLP119 – Calculation of the static safety factor of a homogeneous embankment with POST_NEWMARK",
      "fr": "SSLP119 – Calcul du facteur de sécurité statique d’un remblai homogène avec POST_NEWMARK"
    }
  },
  {
    "id": "v3.02.200",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.200/index.html",
    "blurb": {
      "en": "SSLP200 - Linear D_PLAN Mechanics",
      "fr": "SSLP200 - Mécanique Linéaire D_PLAN"
    }
  },
  {
    "id": "v3.02.201",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.201/index.html",
    "blurb": {
      "en": "SSLP201 - Linear C_PLAN Mechanics",
      "fr": "SSLP201 - Mécanique Linéaire C_PLAN"
    }
  },
  {
    "id": "v3.02.300",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.300/index.html",
    "blurb": {
      "en": "SSLP300 – Rectangular, false-point plate",
      "fr": "SSLP300 – Plaque rectangulaire en porte-à-faux"
    }
  },
  {
    "id": "v3.02.301",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.301/index.html",
    "blurb": {
      "en": "SSLP301 – Trapezoidal plate under clean weight",
      "fr": "SSLP301 – Plaque trapézoïdale sous poids propre"
    }
  },
  {
    "id": "v3.02.303",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.303/index.html",
    "blurb": {
      "en": "SSLP303 - Faux plate loaded at its end",
      "fr": "SSLP303 - Plaque en porte-à-faux chargée à son extrémité"
    }
  },
  {
    "id": "v3.02.304",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.304/index.html",
    "blurb": {
      "en": "SSLP304 - Square orthotropic plate in uniaxial traction out of the axes d-orthotropy",
      "fr": "SSLP304 - Plaque carrée orthotrope en traction uniaxiale hors des axes d’orthotropie"
    }
  },
  {
    "id": "v3.02.305",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.305/index.html",
    "blurb": {
      "en": "SSLP305 - Slim disc in concentrated load support",
      "fr": "SSLP305 - Disque mince en appui sous charge concentrée"
    }
  },
  {
    "id": "v3.02.306",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.306/index.html",
    "blurb": {
      "en": "SSLP306 - clamped plate subjected to polynomial transverse charge",
      "fr": "SSLP306 - Plaque encastrée soumise à une charge transverse polynomiale"
    }
  },
  {
    "id": "v3.02.307",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.307/index.html",
    "blurb": {
      "en": "SSLP307 - Thin plate with two opposite edges in single support",
      "fr": "SSLP307 - Plaque mince dont les deux bords opposés sont en appui simple"
    }
  },
  {
    "id": "v3.02.311",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.311/index.html",
    "blurb": {
      "en": "SSLP311 - Central slash in a rectangular, two-material, uniformly tensile plate",
      "fr": "SSLP311 - Fissure centrale oblique dans une plaque rectangulaire finie, à deux matériaux, soumise à traction uniforme"
    }
  },
  {
    "id": "v3.02.313",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.313/index.html",
    "blurb": {
      "en": "SSLP313 - Stitched in unlimited plate, subjected to uniform tensile infinity",
      "fr": "SSLP313 - Fissure inclinée dans une plaque illimitée, soumise à une traction uniforme à l’infini"
    }
  },
  {
    "id": "v3.02.314",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.314/index.html",
    "blurb": {
      "en": "SSLP314 – Fissure deviated at the interface between two elastic half-planes",
      "fr": "SSLP314 – Fissure déviée à l'interface entre deux demi-plans élastiques"
    }
  },
  {
    "id": "v3.02.315",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.315/index.html",
    "blurb": {
      "en": "SSLP315 - Propagation of crack opening in a 2D hole plate of finished width with XFEM",
      "fr": "SSLP315 - Propagation de fissure débouchante dans une plaque trouée 2D de largeur finie avec XFEM"
    }
  },
  {
    "id": "v3.02.316",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.316/index.html",
    "blurb": {
      "en": "SSLP316 - Error estimate on a cracked plate with X-FEM",
      "fr": "SSLP316 - Estimateur d’erreur sur une plaque fissurée avec X-FEM"
    }
  },
  {
    "id": "v3.02.317",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.317/index.html",
    "blurb": {
      "en": "SSLP317- Validation of RAFF_XFEM macro-command on multi-fissed plate",
      "fr": "SSLP317- Validation de la macro-commande RAFF_XFEM sur une plaque multi-fissurée"
    }
  },
  {
    "id": "v3.02.318",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.318/index.html",
    "blurb": {
      "en": "SSLP318 - Propagation of a non-invasive X-FEM crack in I mode",
      "fr": "SSLP318 - Propagation d'une fissure X-FEM non débouchante sollicitée en mode I"
    }
  },
  {
    "id": "v3.02.319",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.319/index.html",
    "blurb": {
      "en": "SSLP319 - Propagation of two X-FEM cracks for the I-mode",
      "fr": "SSLP319 - Propagation de deux fissures X-FEM débouchantes sollicitées en mode I"
    }
  },
  {
    "id": "v3.02.320",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.320/index.html",
    "blurb": {
      "en": "SSLP320 - Propagation of a X-FEM crack for the requested outlet in Mode I",
      "fr": "SSLP320 - Propagation d'une fissure X-FEM débouchante sollicitée en Mode I"
    }
  },
  {
    "id": "v3.02.321",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.321/index.html",
    "blurb": {
      "en": "SSLP321 - Propagation of a X-FEM crack in a 3-point bending plate",
      "fr": "SSLP321 - Propagation d'une fissure X-FEM dans une plaque en flexion 3 points"
    }
  },
  {
    "id": "v3.02.322",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.322/index.html",
    "blurb": {
      "en": "SSLP322 - Propagation of a X-FEM crack in a 3-point bending plate with 3 holes",
      "fr": "SSLP322 - Propagation d'une fissure X-FEM dans une plaque en flexion 3 points avec 3 trous"
    }
  },
  {
    "id": "v3.02.323",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.323/index.html",
    "blurb": {
      "en": "SSLP323 - Propagation of radial crack leading to rotating disc",
      "fr": "SSLP323 - Propagation d'une fissure radiale débouchante sur un disque en rotation"
    }
  },
  {
    "id": "v3.02.326",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.02.326/index.html",
    "blurb": {
      "en": "FORMA01 - Practical work of the \\"Initiation\\" training: Modelling of a linear elasticity hole plate and adaptation of mesh",
      "fr": "FORMA01 - Travaux pratiques de la formation « Initiation » : modélisation d’une plaque trouée en élasticité linéaire et adaptation de maillage"
    }
  },
  {
    "id": "v3.03.004",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.004/index.html",
    "blurb": {
      "en": "SSLS04 – Z-section beam",
      "fr": "SSLS04 – Poutre à section en Z"
    }
  },
  {
    "id": "v3.03.007",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.007/index.html",
    "blurb": {
      "en": "SSLS07 - Slim Cylinder Under Uniform Axial Load",
      "fr": "SSLS07 - Cylindre mince sous charge axiale uniforme"
    }
  },
  {
    "id": "v3.03.009",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.009/index.html",
    "blurb": {
      "en": "SSLS09 - Cylinder thin under clean weight",
      "fr": "SSLS09 - Cylindre mince sous poids propre"
    }
  },
  {
    "id": "v3.03.010",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.010/index.html",
    "blurb": {
      "en": "SSLS10 – Tore under uniform internal pressure",
      "fr": "SSLS10 – Tore sous pression interne uniforme"
    }
  },
  {
    "id": "v3.03.011",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.011/index.html",
    "blurb": {
      "en": "SSLS11 - Combination of static loads on a plate",
      "fr": "SSLS11 - Combinaison de cas de charges statiques exercées sur une plaque"
    }
  },
  {
    "id": "v3.03.012",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.012/index.html",
    "blurb": {
      "en": "SSLS12 - Combination of static and seismic loads on a plate",
      "fr": "SSLS12 - Combinaison de cas de charges statiques et sismique exercées sur une plaque"
    }
  },
  {
    "id": "v3.03.013",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.013/index.html",
    "blurb": {
      "en": "SSLL13 - Combination of static and seismic loads on finely meshed plate",
      "fr": "SSLL13 - Combinaison de cas de charges statiques et sismique exercées sur une plaque finement maillée"
    }
  },
  {
    "id": "v3.03.014",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.014/index.html",
    "blurb": {
      "en": "SSLS14 - Combination of static and seismic loads on the SMART model",
      "fr": "SSLS14 - Combinaison de cas de charges statiques et sismiques exercées sur la maquette SMART"
    }
  },
  {
    "id": "v3.03.020",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.020/index.html",
    "blurb": {
      "en": "SSLS20 - Pinched cylindrical shell with free edges",
      "fr": "SSLS20 - Coque cylindrique pincée à bords libre"
    }
  },
  {
    "id": "v3.03.027",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.027/index.html",
    "blurb": {
      "en": "SSLS27 - Thin, twisted or bent plate",
      "fr": "SSLS27 - Plaque mince vrillée ou fléchie"
    }
  },
  {
    "id": "v3.03.100",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.100/index.html",
    "blurb": {
      "en": "SSLS100 - clamped circular plate under uniform pressure",
      "fr": "SSLS100 - Plaque circulaire encastrée soumise à une pression uniforme"
    }
  },
  {
    "id": "v3.03.101",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.101/index.html",
    "blurb": {
      "en": "SSLS101 - Circular plate placed under uniform pressure",
      "fr": "SSLS101 - Plaque circulaire posée soumise à une pression uniforme"
    }
  },
  {
    "id": "v3.03.104",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.104/index.html",
    "blurb": {
      "en": "SSLS104 - Pinched cylindrical shell with diaphragm",
      "fr": "SSLS104 - Coque cylindrique pincée avec diaphragme"
    }
  },
  {
    "id": "v3.03.105",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.105/index.html",
    "blurb": {
      "en": "SSLS105 - Double-punched Hemisphere",
      "fr": "SSLS105 - Hémisphère doublement pincé"
    }
  },
  {
    "id": "v3.03.106",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.106/index.html",
    "blurb": {
      "en": "SSLS106 - Pungged spherical shell with hole",
      "fr": "SSLS106 - Coque sphérique pincée avec trou"
    }
  },
  {
    "id": "v3.03.107",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.107/index.html",
    "blurb": {
      "en": "SSLS107 - Cylindrical panel subject to its own weight",
      "fr": "SSLS107 - Panneau cylindrique soumis à son propre poids"
    }
  },
  {
    "id": "v3.03.108",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.108/index.html",
    "blurb": {
      "en": "SSLS108 - Concentrated charge helical shell",
      "fr": "SSLS108 - Coque hélicoïdale sous charges concentrées"
    }
  },
  {
    "id": "v3.03.110",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.110/index.html",
    "blurb": {
      "en": "SSLS110 - Stability of a compressed square plate",
      "fr": "SSLS110 - Stabilité d’une plaque carrée comprimée"
    }
  },
  {
    "id": "v3.03.111",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.111/index.html",
    "blurb": {
      "en": "SSLS111 - Single plate excentering",
      "fr": "SSLS111 - Excentrement de plaque simple"
    }
  },
  {
    "id": "v3.03.112",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.112/index.html",
    "blurb": {
      "en": "SSLS112 - Decomposition of composite plates",
      "fr": "SSLS112 - Excentrement de plaques composites"
    }
  },
  {
    "id": "v3.03.113",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.113/index.html",
    "blurb": {
      "en": "SSLS113 - Decommissioning homogenized plates",
      "fr": "SSLS113 - Excentrement de plaques homogénéisées"
    }
  },
  {
    "id": "v3.03.114",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.114/index.html",
    "blurb": {
      "en": "SSLS114 - non-regression on cylindrical virole quarter",
      "fr": "SSLS114 - Non régression sur quart de virole cylindrique"
    }
  },
  {
    "id": "v3.03.115",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.115/index.html",
    "blurb": {
      "en": "SSLS115 - Square composite plate under uniform pressure",
      "fr": "SSLS115 - Plaque carrée composite sous pression uniforme"
    }
  },
  {
    "id": "v3.03.116",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.116/index.html",
    "blurb": {
      "en": "SSLS116 - Membrane loading of an excreted plate",
      "fr": "SSLS116 - Chargement membranaire d’une plaque excentrée"
    }
  },
  {
    "id": "v3.03.117",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.117/index.html",
    "blurb": {
      "en": "SSLS117 - Non-symmetric plate excentering",
      "fr": "SSLS117 - Excentrement de plaques non symétriques"
    }
  },
  {
    "id": "v3.03.118",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.118/index.html",
    "blurb": {
      "en": "SSLS118 - Square plate placed under sinusoidal pressure",
      "fr": "SSLS118 - Plaque carrée posée soumise à une pression sinusoïdale"
    }
  },
  {
    "id": "v3.03.119",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.119/index.html",
    "blurb": {
      "en": "SSLS119 - clamped Crochet Subjected to shear force at its End",
      "fr": "SSLS119 - Crochet encastré soumis à un effort tranchant à son extrémité"
    }
  },
  {
    "id": "v3.03.120",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.120/index.html",
    "blurb": {
      "en": "SSLS120 - Cylindrical thin shell under hydrostatic pressure",
      "fr": "SSLS120 - Coque mince cylindrique sous pression hydrostatique"
    }
  },
  {
    "id": "v3.03.121",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.121/index.html",
    "blurb": {
      "en": "SSLS121 - Laminate plate subjected to elemental loading",
      "fr": "SSLS121 - Plaque stratifiée soumise à des chargements élémentaires"
    }
  },
  {
    "id": "v3.03.122",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.122/index.html",
    "blurb": {
      "en": "SSLS122 - isotropic rectangular isotropic plate excreted",
      "fr": "SSLS122 - Plaque homogène isotrope rectangulaire excentrée"
    }
  },
  {
    "id": "v3.03.123",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.123/index.html",
    "blurb": {
      "en": "SSLS123 - Uniform external pressure sphere",
      "fr": "SSLS123 - Sphère sous pression externe uniforme"
    }
  },
  {
    "id": "v3.03.124",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.124/index.html",
    "blurb": {
      "en": "SSLS124 - Internal pressure sphere in perfect plasticity",
      "fr": "SSLS124 - Sphere sous pression interne en plasticité parfaite"
    }
  },
  {
    "id": "v3.03.125",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.125/index.html",
    "blurb": {
      "en": "SSLS125 - Flaming of a free cylinder under external pressure",
      "fr": "SSLS125 - Flambement d’un cylindre libre sous pression externe"
    }
  },
  {
    "id": "v3.03.126",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.126/index.html",
    "blurb": {
      "en": "SSLS126 – Flexion of a reinforced concrete slab (model GLRC_DAMAGE) with two sides: elastic beam speed",
      "fr": "SSLS126 – Flexion d'une dalle en béton armé (modèle GLRC_DAMAGE) appuyée sur deux cotés: régime de poutre élastique"
    }
  },
  {
    "id": "v3.03.127",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.127/index.html",
    "blurb": {
      "en": "SSLS127 – Flexion of a reinforced concrete slab (model GLRC_DAMAGE) pressed on 4 sides: elastic plate speed",
      "fr": "SSLS127 – Flexion d'une dalle en béton armé (modèle GLRC_DAMAGE) appuyée sur 4 cotés : régime de plaque élastique"
    }
  },
  {
    "id": "v3.03.128",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.128/index.html",
    "blurb": {
      "en": "SSLS128 - Static calculation of a plate composed of layers",
      "fr": "SSLS128 - Calcul statique d'une plaque composée de couches"
    }
  },
  {
    "id": "v3.03.129",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.129/index.html",
    "blurb": {
      "en": "SSLS129 – Sine-shaped corrugated plate subjected to linear loadings",
      "fr": "SSLS129 – Plaque ondulée sinusoïdale soumise à des chargements forces linéiques"
    }
  },
  {
    "id": "v3.03.130",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.130/index.html",
    "blurb": {
      "en": "SSLS130 - Structural Zoom: hole plate subjected to normal stress on a edge",
      "fr": "SSLS130 - Zoom structural : plaque trouée soumise à un effort normal sur un bord"
    }
  },
  {
    "id": "v3.03.131",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.131/index.html",
    "blurb": {
      "en": "SSLS131 – Optimization of curvature radius of a bent pipe",
      "fr": "SSLS131 – Optimisation du rayon de courbure d’une tuyauterie coudée"
    }
  },
  {
    "id": "v3.03.132",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.132/index.html",
    "blurb": {
      "en": "SSLS132 – Reinforced concrete console plate under bending loading, elastic",
      "fr": "SSLS132 – Plaque console en béton armé sous chargement de flexion, en élasticité"
    }
  },
  {
    "id": "v3.03.134",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.134/index.html",
    "blurb": {
      "en": "SSLS134 – Calculation of plate clasping",
      "fr": "SSLS134 – Calcul du ferraillage des plaques"
    }
  },
  {
    "id": "v3.03.135",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.135/index.html",
    "blurb": {
      "en": "SSLS135 - Ferry of a square tank according to the method of Capra and Maury",
      "fr": "SSLS135 - Ferraillage d'une cuve carrée selon la méthode de Capra et Maury"
    }
  },
  {
    "id": "v3.03.136",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.136/index.html",
    "blurb": {
      "en": "SSLS136 – RBE3-type relationships between a plate and a discrete",
      "fr": "SSLS136 – Relations de type RBE3 entre une plaque et un discret"
    }
  },
  {
    "id": "v3.03.137",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.137/index.html",
    "blurb": {
      "en": "SSLS137 - Prestressed concrete plate with a flexion cable",
      "fr": "SSLS137 - Plaque de béton précontraint avec un câble excentré en flexion"
    }
  },
  {
    "id": "v3.03.138",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.138/index.html",
    "blurb": {
      "en": "SSLS138 – Request for a membrane",
      "fr": "SSLS138 – Sollicitation d'une membrane"
    }
  },
  {
    "id": "v3.03.139",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.139/index.html",
    "blurb": {
      "en": "SSLS139 – Flexion of a plate with simplified representation of the frames",
      "fr": "SSLS139 – Flexion d'une plaque avec représentation simplifiée des armatures"
    }
  },
  {
    "id": "v3.03.140",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.140/index.html",
    "blurb": {
      "en": "FORMA40 - Practical work - Civil engineering training: study of a console plate submitted to the gravity and flexion",
      "fr": "FORMA40 - Travaux pratiques - formation « Génie Civil » : étude d'une plaque console soumise à la pesanteur et à la flexion"
    }
  },
  {
    "id": "v3.03.141",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.141/index.html",
    "blurb": {
      "en": "SSLS141 – Flexion and shear plate",
      "fr": "SSLS141 – Plaque en Flexion et cisaillement"
    }
  },
  {
    "id": "v3.03.142",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.142/index.html",
    "blurb": {
      "en": "SSLS142 – Calculation of M-N interaction diagram of reinforced concrete plates",
      "fr": "SSLS142 – Calcul du diagramme d'interaction M-N des plaques en béton armé"
    }
  },
  {
    "id": "v3.03.143",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.143/index.html",
    "blurb": {
      "en": "SSLS143 - Cantilever beam with excreted core",
      "fr": "SSLS143 - Poutre cantilever à âme excentrée"
    }
  },
  {
    "id": "v3.03.144",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.144/index.html",
    "blurb": {
      "en": "SSLS144 - Internal pressure cylinder",
      "fr": "SSLS144 - Cylindre sous pression interne"
    }
  },
  {
    "id": "v3.03.145",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.145/index.html",
    "blurb": {
      "en": "SSLS145 - Calculation of the securing of a flat plate loaded in its plane",
      "fr": "SSLS145 - Calcul de ferraillage d'une plaque plane chargée dans son plan"
    }
  },
  {
    "id": "v3.03.146",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.146/index.html",
    "blurb": {
      "en": "SSLS146 - Calculation of railing on a portal",
      "fr": "SSLS146 - Calcul de ferraillage sur un portique"
    }
  },
  {
    "id": "v3.03.147",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.147/index.html",
    "blurb": {
      "en": "SSLS147 - Shafting of a twisted ribbon",
      "fr": "SSLS147 - Cisaillement d'un ruban torsadé"
    }
  },
  {
    "id": "v3.03.150",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.150/index.html",
    "blurb": {
      "en": "SSLS150 – Verification of the securing of reinforced concrete plates",
      "fr": "SSLS150 – Vérification de ferraillage des plaques en béton armé"
    }
  },
  {
    "id": "v3.03.200",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.200/index.html",
    "blurb": {
      "en": "SSLS200 - Linear modellings hull mechanics",
      "fr": "SSLS200 - Mécanique Linéaire modélisations de coque"
    }
  },
  {
    "id": "v3.03.311",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.311/index.html",
    "blurb": {
      "en": "SSLA311 – Circular fissure subject to an annular charge",
      "fr": "SSLA311 – Fissure circulaire soumise a une charge annulaire"
    }
  },
  {
    "id": "v3.03.502",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.502/index.html",
    "blurb": {
      "en": "SSLS502 - Orthotropic cylinder subjected to a charging line",
      "fr": "SSLS502 - Cylindre orthotrope soumis à une ligne de charge"
    }
  },
  {
    "id": "v3.03.503",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.503/index.html",
    "blurb": {
      "en": "SSLS503 - Laminate sheet in flexion antisymmetric stacking simply supported",
      "fr": "SSLS503 - Plaque stratifiée en flexion empilement antisymétrique simplement appuyée"
    }
  },
  {
    "id": "v3.03.504",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.504/index.html",
    "blurb": {
      "en": "SSLS504 - 3 layer composite square plate, double-sine loading",
      "fr": "SSLS504 - Plaque carrée composite constituée de 3 couches, soumise à un chargement doublement sinusoïdale"
    }
  },
  {
    "id": "v3.03.505",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.03.505/index.html",
    "blurb": {
      "en": "SSLS505 – Composite plate subjected to purely thermal mechanical deformations",
      "fr": "SSLS505 – Plaque composite soumise à des déformations mécaniques d'origine purement thermique"
    }
  },
  {
    "id": "v3.04.001",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.001/index.html",
    "blurb": {
      "en": "SSLV01 – Traction / compression of an oblique interface with CZM_ELAS_MIX behavior",
      "fr": "SSLV01 – Traction / compression d’une interface oblique à comportement CZM_ELAS_MIX"
    }
  },
  {
    "id": "v3.04.002",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.002/index.html",
    "blurb": {
      "en": "SSLV002 – Definition of local markers of massive elements by an orientation field",
      "fr": "SSLV002 – Définition des repères locaux des éléments massifs par un champ d’orientation"
    }
  },
  {
    "id": "v3.04.004",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.004/index.html",
    "blurb": {
      "en": "SSLV04 - Hollow, flat-stressed cylinder",
      "fr": "SSLV04 - Cylindre creux en contraintes planes"
    }
  },
  {
    "id": "v3.04.007",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.007/index.html",
    "blurb": {
      "en": "SSLV07 - Stretching a parallelepiped under its own weight",
      "fr": "SSLV07 - Étirement d'un parallélépipède sous son propre poids"
    }
  },
  {
    "id": "v3.04.100",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.100/index.html",
    "blurb": {
      "en": "SSLV100 - Hollow cylinder in flat deformations",
      "fr": "SSLV100 - Cylindre creux en déformations planes"
    }
  },
  {
    "id": "v3.04.101",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.101/index.html",
    "blurb": {
      "en": "SSLV101 - Application of the industrial declination of the Beremin model to a CT test piece",
      "fr": "SSLV101 - Application de la déclinaison industrielle du modèle de Beremin à une éprouvette CT"
    }
  },
  {
    "id": "v3.04.104",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.104/index.html",
    "blurb": {
      "en": "SSLV104 - Rotating beam",
      "fr": "SSLV104 - Poutre en rotation"
    }
  },
  {
    "id": "v3.04.105",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.105/index.html",
    "blurb": {
      "en": "SSLV105 - Centrifugal raid of a rotating beam",
      "fr": "SSLV105 - Raidissement centrifuge d'une poutre en rotation"
    }
  },
  {
    "id": "v3.04.109",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.109/index.html",
    "blurb": {
      "en": "SSLV109 - Full Cylinder in non-standard pressure mode 1",
      "fr": "SSLV109 - Cylindre plein en pression non uniforme mode 1"
    }
  },
  {
    "id": "v3.04.110",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.110/index.html",
    "blurb": {
      "en": "SSLV110 - Elliptical fissure in infinite medium",
      "fr": "SSLV110 - Fissure elliptique dans un milieu infini"
    }
  },
  {
    "id": "v3.04.111",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.111/index.html",
    "blurb": {
      "en": "SSLV111 - Error estimate on linear elasticity hole plate",
      "fr": "SSLV111 - Estimateur d'erreur sur une plaque trouée en élasticité linéaire"
    }
  },
  {
    "id": "v3.04.113",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.113/index.html",
    "blurb": {
      "en": "SSLV113 - Error estimate on a two-material hollow cylinder",
      "fr": "SSLV113 - Estimateur d'erreur sur un cylindre creux bi-matériaux"
    }
  },
  {
    "id": "v3.04.114",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.114/index.html",
    "blurb": {
      "en": "SSLV114 - Solid body movements 2D and 3D",
      "fr": "SSLV114 - Mouvements de corps solide 2D et 3D"
    }
  },
  {
    "id": "v3.04.115",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.115/index.html",
    "blurb": {
      "en": "SSLV115 - element prestressed concrete compression and gravity",
      "fr": "SSLV115 - Élément de béton précontraint en compression et pesanteur"
    }
  },
  {
    "id": "v3.04.117",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.117/index.html",
    "blurb": {
      "en": "SSLV117 – Validation of the second 3D expansion gradient model",
      "fr": "SSLV117 – Validation de la modélisation second gradient de dilatation en 3D"
    }
  },
  {
    "id": "v3.04.120",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.120/index.html",
    "blurb": {
      "en": "SSLV120 - Orthotropic parallelepipeda stretched under its own weight",
      "fr": "SSLV120 - Étirement d'un parallélépipède orthotrope sous son propre poids"
    }
  },
  {
    "id": "v3.04.121",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.121/index.html",
    "blurb": {
      "en": "SSLV121 - Etirage of a transverse isotropic parallelepiped under its own weight",
      "fr": "SSLV121 - Etirement d'un parallélépipède isotrope transverse sous son propre poids"
    }
  },
  {
    "id": "v3.04.130",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.130/index.html",
    "blurb": {
      "en": "SSLV130 - Hollow cylinder in incompressible",
      "fr": "SSLV130 - Cylindre creux en incompressible"
    }
  },
  {
    "id": "v3.04.131",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.131/index.html",
    "blurb": {
      "en": "SSLV131 - Orthotropy in any marker",
      "fr": "SSLV131 - Orthotropie dans un repère quelconque"
    }
  },
  {
    "id": "v3.04.134",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.134/index.html",
    "blurb": {
      "en": "SSLV134 - Circular fissure in infinite medium",
      "fr": "SSLV134 - Fissure circulaire en milieu infini"
    }
  },
  {
    "id": "v3.04.139",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.139/index.html",
    "blurb": {
      "en": "SSLV139 - Flaming of a circular plate with a compression force evenly distributed over its contour",
      "fr": "SSLV139 - Flambement d’une plaque circulaire soumise à une force de compression uniformément répartie sur son contour"
    }
  },
  {
    "id": "v3.04.140",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.140/index.html",
    "blurb": {
      "en": "SSLV140 - Calculation of actual modules by Python method",
      "fr": "SSLV140 - Calcul de modules effectifs par une méthode Python"
    }
  },
  {
    "id": "v3.04.147",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.147/index.html",
    "blurb": {
      "en": "RCCM09 - POST_RCCM Operator: Calculation of the boot factor",
      "fr": "RCCM09 - Opérateur POST_RCCM : calcul du facteur d’amorçage"
    }
  },
  {
    "id": "v3.04.148",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.148/index.html",
    "blurb": {
      "en": "SSLV146 – Full Cube reinforced by triaxially loaded reinforcements",
      "fr": "SSLV146 – Cube plein renforcé par des armatures sous chargement triaxial"
    }
  },
  {
    "id": "v3.04.153",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.153/index.html",
    "blurb": {
      "en": "SSLV153 - Error indicators – mesh cells volumetrics and functions",
      "fr": "SSLV153 - Indicateurs d'erreur – Mailles volumiques et fonctions"
    }
  },
  {
    "id": "v3.04.154",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.154/index.html",
    "blurb": {
      "en": "SSLV154 – Circular joint in mixed mode",
      "fr": "SSLV154 – Fissure circulaire en mode mixte"
    }
  },
  {
    "id": "v3.04.155",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.155/index.html",
    "blurb": {
      "en": "SSLV155 – Tensile lens crack",
      "fr": "SSLV155 – Fissure lentille en traction"
    }
  },
  {
    "id": "v3.04.156",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.156/index.html",
    "blurb": {
      "en": "FORMA07 - Practical work of the Advanced Use Training: Circular crack in infinite medium",
      "fr": "FORMA07 - Travaux pratiques de la formation « Utilisation avancée » : fissure circulaire en milieu infini"
    }
  },
  {
    "id": "v3.04.157",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.157/index.html",
    "blurb": {
      "en": "SSLV157 – RBE3-type relationships between a cube and a discrete",
      "fr": "SSLV157 – Relations de type RBE3 entre un cube et un discret"
    }
  },
  {
    "id": "v3.04.159",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.159/index.html",
    "blurb": {
      "en": "SSLV159 - Cantilever beam subject to static deflection loading",
      "fr": "SSLV159 - Poutre cantilever soumise à un chargement de type flèche statique"
    }
  },
  {
    "id": "v3.04.160",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.160/index.html",
    "blurb": {
      "en": "SSLV160 - Two-sided beam subjected to nodal force on its neutral fibre",
      "fr": "SSLV160 - Poutre bi-appuyée soumise à une force nodale sur sa fibre neutre"
    }
  },
  {
    "id": "v3.04.161",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.161/index.html",
    "blurb": {
      "en": "RCCM13 – Pipe analysis with POST_RCCM in ZE200",
      "fr": "RCCM13 – Analyse de tuyauterie avec POST_RCCM en ZE200"
    }
  },
  {
    "id": "v3.04.162",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.162/index.html",
    "blurb": {
      "en": "RCCM14 – POST_RCCM B3200 analysis: sharing groups, passing situations",
      "fr": "RCCM14 – Analyse avec POST_RCCM en B3200 : groupes de partage, situations de passage"
    }
  },
  {
    "id": "v3.04.163",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.163/index.html",
    "blurb": {
      "en": "RCCM15 - POST_RCCM B3600 validation",
      "fr": "RCCM15 - Validation de POST_RCCM en B3600"
    }
  },
  {
    "id": "v3.04.200",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.200/index.html",
    "blurb": {
      "en": "SSLV200 - 3D Linear Mechanics",
      "fr": "SSLV200 - Mécanique Linéaire 3D"
    }
  },
  {
    "id": "v3.04.301",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.301/index.html",
    "blurb": {
      "en": "SSLV301 - Cylindrical beam console under linearly distributed load",
      "fr": "SSLV301 - Poutre cylindrique console sous charge linéairement répartie"
    }
  },
  {
    "id": "v3.04.303",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.303/index.html",
    "blurb": {
      "en": "SSLV303 - clamped Cylinder under clean weight and pressure",
      "fr": "SSLV303 - Cylindre encastré sous poids propre et pression"
    }
  },
  {
    "id": "v3.04.304",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.304/index.html",
    "blurb": {
      "en": "SSLV304 – Cylinder under variable external pressure",
      "fr": "SSLV304 – Cylindre sous pression extérieure variable"
    }
  },
  {
    "id": "v3.04.305",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.305/index.html",
    "blurb": {
      "en": "SSLV305 - Calculation of pressure of an earthquake tank according to Eurocode 8",
      "fr": "SSLV305 - Calcul de la pression d'un réservoir sous séisme suivant l'Eurocode 8"
    }
  },
  {
    "id": "v3.04.306",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.306/index.html",
    "blurb": {
      "en": "SSLV306 - 3D beam on required travel",
      "fr": "SSLV306 - Poutre 3D en déplacements imposés"
    }
  },
  {
    "id": "v3.04.307",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.307/index.html",
    "blurb": {
      "en": "SSLV307 - Uniform axially charged oblique cylinder",
      "fr": "SSLV307 - Cylindre oblique sous charge axiale uniforme"
    }
  },
  {
    "id": "v3.04.311",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.311/index.html",
    "blurb": {
      "en": "SSLV311 - Murakami 9.39. A round-dellipse quarter-clip crack at the corner of a thick rotating disc",
      "fr": "SSLV311 - Murakami 9.39. Fissure en quart d’ellipse au coin d’un disque épais en rotation"
    }
  },
  {
    "id": "v3.04.312",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.312/index.html",
    "blurb": {
      "en": "SSLV312 – Semi-elliptic fissure perpendicular to the interface of a bi-material",
      "fr": "SSLV312 – Fissure semi-elliptique perpendiculaire à l'interface d'un bi-matériau"
    }
  },
  {
    "id": "v3.04.314",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.314/index.html",
    "blurb": {
      "en": "SSLV314 - Flat spreading of an opening crack with X-FEM",
      "fr": "SSLV314 - Propagation plane d'une fissure débouchante avec X-FEM"
    }
  },
  {
    "id": "v3.04.315",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.315/index.html",
    "blurb": {
      "en": "SSLV315 – Unflattering crack propagation with X-FEM",
      "fr": "SSLV315 – Propagation non plane d'une fissure débouchante avec X-FEM"
    }
  },
  {
    "id": "v3.04.316",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.316/index.html",
    "blurb": {
      "en": "SSLV316 – Spread crack imposed with X-FEM",
      "fr": "SSLV316 – Fissuration à propagation imposée avec X-FEM"
    }
  },
  {
    "id": "v3.04.318",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.318/index.html",
    "blurb": {
      "en": "SSLV318 – Validation of the X-FEM Tridimental Crack Catalogue",
      "fr": "SSLV318 – Validation du catalogue de fissures X-FEM tridimentionnelles"
    }
  },
  {
    "id": "v3.04.319",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.319/index.html",
    "blurb": {
      "en": "SSLV319 - Flat spread of semi-elliptic crack",
      "fr": "SSLV319 - Propagation plane d'une fissure semi-elliptique"
    }
  },
  {
    "id": "v3.04.320",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.320/index.html",
    "blurb": {
      "en": "SSLV320 - Flat spread of a 3D crack dividing and merging with X-FEM",
      "fr": "SSLV320 - Propagation plane d'une fissure 3D se divisant et fusionnant avec X-FEM"
    }
  },
  {
    "id": "v3.04.321",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.04.321/index.html",
    "blurb": {
      "en": "SSLV321 - XFEM pre-conditioning validation for a shaved interface",
      "fr": "SSLV321 - Validation du pré-conditionnement XFEM pour une interface rasante"
    }
  },
  {
    "id": "v3.05.100",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.05.100/index.html",
    "blurb": {
      "en": "SSLX100 - 3D Mix - Cover - Bend beam",
      "fr": "SSLX100 - Mélange 3D - Coque - Poutre en flexion"
    }
  },
  {
    "id": "v3.05.101",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.05.101/index.html",
    "blurb": {
      "en": "SSLX101 - Straight pipe modeled in shell and beams",
      "fr": "SSLX101 - Tuyau droit modélisé en coques et en poutres"
    }
  },
  {
    "id": "v3.05.102",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.05.102/index.html",
    "blurb": {
      "en": "SSLX102 - bended bending hose",
      "fr": "SSLX102 - Tuyauterie coudée en flexion"
    }
  },
  {
    "id": "v3.05.103",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.05.103/index.html",
    "blurb": {
      "en": "SSLX103 – Flexion of a 3D reinforced concrete beam with bar-modelled reinforcements",
      "fr": "SSLX103 – Flexion d'une poutre en béton armé 3D avec armatures modélisées par des barres"
    }
  },
  {
    "id": "v3.05.104",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.05.104/index.html",
    "blurb": {
      "en": "SSLX104 - Discreet: expansion due to a temperature field",
      "fr": "SSLX104 - Discrets : dilatation due à un champ de température"
    }
  },
  {
    "id": "v3.05.200",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.05.200/index.html",
    "blurb": {
      "en": "SSLX200 – 3D_POU connection: Simple and pure bending of a clamped-free beam",
      "fr": "SSLX200 – Raccord 3D_POU: Traction simple et flexion pure d'une poutre encastrée-libre"
    }
  },
  {
    "id": "v3.05.201",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.05.201/index.html",
    "blurb": {
      "en": "SSLX201 – Validation of connection2D_POU",
      "fr": "SSLX201 – Validation du raccord2D_POU"
    }
  },
  {
    "id": "v3.06.100",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.06.100/index.html",
    "blurb": {
      "en": "SSLA100 - Infinite cylinder subject to a field of density and superfacial forces",
      "fr": "SSLA100 - Cylindre infini soumis à un champ de forces volumiques et surfaciques"
    }
  },
  {
    "id": "v3.06.103",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.06.103/index.html",
    "blurb": {
      "en": "SSLA103 - Calculation of desiccation removal and endogenous removal on a cylinder",
      "fr": "SSLA103 - Calcul du retrait de dessiccation et du retrait endogène sur un cylindre"
    }
  },
  {
    "id": "v3.06.104",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.06.104/index.html",
    "blurb": {
      "en": "FORMA00 - Thin Cylinder Under Hydrostatic Pressure",
      "fr": "FORMA00 - Cylindre mince sous pression hydrostatique"
    }
  },
  {
    "id": "v3.06.200",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.06.200/index.html",
    "blurb": {
      "en": "SSLA200 - Linear 2D AXIS Mechanics",
      "fr": "SSLA200 - Mécanique Linéaire en 2D AXIS"
    }
  },
  {
    "id": "v3.06.310",
    "part": "V3",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v3/v3.06.310/index.html",
    "blurb": {
      "en": "SSLA310 – Radial crack in a bimaterial subjected to internal pressure",
      "fr": "SSLA310 – Fissure radiale dans un bimatériau soumise a une pression interne"
    }
  },
  {
    "id": "v4.01.001",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.01.001/index.html",
    "blurb": {
      "en": "TPLA01 - Infinite hollow thermal balance cylinder",
      "fr": "TPLA01 - Cylindre creux infini en équilibre thermique"
    }
  },
  {
    "id": "v4.01.004",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.01.004/index.html",
    "blurb": {
      "en": "TPLA04 - Power flow in a hollow cylinder",
      "fr": "TPLA04 - Dégagement de puissance dans un cylindre creux"
    }
  },
  {
    "id": "v4.01.005",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.01.005/index.html",
    "blurb": {
      "en": "TPLA05 - Cylindrical bar with flow density",
      "fr": "TPLA05 - Barre cylindrique avec densité de flux"
    }
  },
  {
    "id": "v4.01.006",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.01.006/index.html",
    "blurb": {
      "en": "TPLA06 - Cylindrical bar with convection",
      "fr": "TPLA06 - Barre cylindrique avec convection"
    }
  },
  {
    "id": "v4.01.007",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.01.007/index.html",
    "blurb": {
      "en": "TPLA07 - Orthotropic hollow cylinder",
      "fr": "TPLA07 - Cylindre creux orthotrope"
    }
  },
  {
    "id": "v4.01.300",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.01.300/index.html",
    "blurb": {
      "en": "TPLA300 - Circular plate subjected to a volumetric heat source",
      "fr": "TPLA300 - Plaque circulaire soumise à une source de chaleur volumique"
    }
  },
  {
    "id": "v4.01.301",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.01.301/index.html",
    "blurb": {
      "en": "TPLA301 - Temperature distribution in a short cylinder",
      "fr": "TPLA301 - Distribution de température dans un cylindre court"
    }
  },
  {
    "id": "v4.02.001",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.02.001/index.html",
    "blurb": {
      "en": "TPLL01 - Infinite linear thermal wall",
      "fr": "TPLL01 - Mur plan infini en thermique linéaire"
    }
  },
  {
    "id": "v4.02.100",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.02.100/index.html",
    "blurb": {
      "en": "TPLL100 - steady-state thermal analysis anisotropic wall",
      "fr": "TPLL100 - Mur plan anisotrope en thermique stationnaire"
    }
  },
  {
    "id": "v4.02.101",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.02.101/index.html",
    "blurb": {
      "en": "TPLL101 - Heating by effect Joule of a hollow cylinder",
      "fr": "TPLL101 - Chauffage par effet Joule d'un cylindre creux"
    }
  },
  {
    "id": "v4.03.100",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.03.100/index.html",
    "blurb": {
      "en": "TPLS100 - Infinite plate subjected to antisymmetric fluxes",
      "fr": "TPLS100 - Plaque infinie soumise à des flux antisymétriques"
    }
  },
  {
    "id": "v4.03.101",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.03.101/index.html",
    "blurb": {
      "en": "TPLS101 - Infinite plate subjected to a symmetrical heat exchange with the outside",
      "fr": "TPLS101 - Plaque infinie soumise à un échange thermique symétrique avec l'extérieur"
    }
  },
  {
    "id": "v4.03.102",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.03.102/index.html",
    "blurb": {
      "en": "TPLS102 – Thick beam in flat stresses – linear temperature variation according to width",
      "fr": "TPLS102 – Poutre épaisse en contraintes planes – variation de température linéaire suivant la largeur"
    }
  },
  {
    "id": "v4.03.302",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.03.302/index.html",
    "blurb": {
      "en": "TPLS302 - Temperature distribution in thin plate",
      "fr": "TPLS302 - Distribution de température dans une plaque mince"
    }
  },
  {
    "id": "v4.04.006",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.04.006/index.html",
    "blurb": {
      "en": "TPLV06 - Power flow in a hollow sphere",
      "fr": "TPLV06 - Dégagement de puissance dans une sphère creuse"
    }
  },
  {
    "id": "v4.04.007",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.04.007/index.html",
    "blurb": {
      "en": "TPLV07 - Cube orthotrope",
      "fr": "TPLV07 - Cube orthotrope"
    }
  },
  {
    "id": "v4.04.100",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.04.100/index.html",
    "blurb": {
      "en": "TPLV100 - Cylinder subject to boundary conditions not axisymmetric",
      "fr": "TPLV100 - Cylindre soumis à des conditions aux limites non axisymétriques"
    }
  },
  {
    "id": "v4.04.101",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.04.101/index.html",
    "blurb": {
      "en": "TPLV101 - steady-state thermal analysis with exchange condition between walls vis-à-vis",
      "fr": "TPLV101 - Thermique stationnaire avec condition d'échange entre parois en vis-à-vis"
    }
  },
  {
    "id": "v4.04.102",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.04.102/index.html",
    "blurb": {
      "en": "TPLV102 - Convection heat transport in a parallelepiped",
      "fr": "TPLV102 - Transport de chaleur par convection dans un parallélépipède"
    }
  },
  {
    "id": "v4.04.103",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.04.103/index.html",
    "blurb": {
      "en": "TPLV103 - Infinite Cylinder steady-state thermal analysis Anisotropic",
      "fr": "TPLV103 - Cylindre infini en thermique stationnaire anisotrope"
    }
  },
  {
    "id": "v4.04.105",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.04.105/index.html",
    "blurb": {
      "en": "TPLV105 - Stationary nonlinear thermal in a moving marker: Varestrain test simulation",
      "fr": "TPLV105 - Thermique non linéaire stationnaire en repère mobile : simulation de l'essai Varestrain"
    }
  },
  {
    "id": "v4.04.106",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.04.106/index.html",
    "blurb": {
      "en": "TPLV106 - Stationary nonlinear thermal in mobile marker",
      "fr": "TPLV106 - Thermique non linéaire stationnaire en repère mobile"
    }
  },
  {
    "id": "v4.04.304",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.04.304/index.html",
    "blurb": {
      "en": "TPLV304 - Temperature distribution in a square cross-section bar",
      "fr": "TPLV304 - Distribution de la température dans une barre de section carrée"
    }
  },
  {
    "id": "v4.04.305",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.04.305/index.html",
    "blurb": {
      "en": "TPLV305 - Thermal Gradient in a Cylinders (Fourier)",
      "fr": "TPLV305 - Gradient thermique dans un cylindre (Fourier)"
    }
  },
  {
    "id": "v4.05.001",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.05.001/index.html",
    "blurb": {
      "en": "TPLP01 - L domain with geometric singularity",
      "fr": "TPLP01 - Domaine en L avec singularité géométrique"
    }
  },
  {
    "id": "v4.05.002",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.05.002/index.html",
    "blurb": {
      "en": "TPLP02 - Orthotropic square",
      "fr": "TPLP02 - Carré orthotrope"
    }
  },
  {
    "id": "v4.05.107",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.05.107/index.html",
    "blurb": {
      "en": "TPLP107 – 2D thermal manufactured solutions method",
      "fr": "TPLP107 – Méthode des solutions manufacturées en thermique 2D"
    }
  },
  {
    "id": "v4.05.300",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.05.300/index.html",
    "blurb": {
      "en": "TPLP300 - Rectangular plate: convection, temperature imposed",
      "fr": "TPLP300 - Plaque rectangulaire : convection, température imposée"
    }
  },
  {
    "id": "v4.05.301",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.05.301/index.html",
    "blurb": {
      "en": "TPLP301 - Square plate with sinusoidally distributed temperature imposed",
      "fr": "TPLP301 - Plaque carrée avec température imposée répartie sinusoïdalement"
    }
  },
  {
    "id": "v4.05.302",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.05.302/index.html",
    "blurb": {
      "en": "TPLP302 - Rectangular plate with temperature imposed",
      "fr": "TPLP302 - Plaque rectangulaire avec température imposée"
    }
  },
  {
    "id": "v4.05.303",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.05.303/index.html",
    "blurb": {
      "en": "TPLP303 - Temperature distribution in the section of a chimney duct",
      "fr": "TPLP303 - Distribution de la température dans la section d’un conduit de cheminée"
    }
  },
  {
    "id": "v4.05.305",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.05.305/index.html",
    "blurb": {
      "en": "TPLP305 – Temperature bar with X-FEM adiabatic interface",
      "fr": "TPLP305 – Barreau à températures imposées avec interface adiabatique de type X-FEM"
    }
  },
  {
    "id": "v4.19.203",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.19.203/index.html",
    "blurb": {
      "en": "TTLA203 - Cylinder with temperature imposed with adiabatic crack",
      "fr": "TTLA203 - Cylindre à températures imposées avec fissure adiabatique"
    }
  },
  {
    "id": "v4.20.200",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.20.200/index.html",
    "blurb": {
      "en": "TTNA200 - Linear and nonlinear thermal 2D AXIS",
      "fr": "TTNA200 - Thermique linéaire et non-linéaire 2D AXIS"
    }
  },
  {
    "id": "v4.21.001",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.21.001/index.html",
    "blurb": {
      "en": "TTLL01 - Thermal shock on an infinite wall",
      "fr": "TTLL01 - Choc thermique sur un mur infini"
    }
  },
  {
    "id": "v4.21.100",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.21.100/index.html",
    "blurb": {
      "en": "TTLL100 - Thermal shock on a flat wall with exchange condition",
      "fr": "TTLL100 - Choc thermique sur un mur plan avec condition d’échange"
    }
  },
  {
    "id": "v4.21.301",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.21.301/index.html",
    "blurb": {
      "en": "TTLL301 - Thermal transfer into a bar with imposed temperature (sinusoid)",
      "fr": "TTLL301 - Transfert thermique dans une barre avec température imposée (sinusoïde)"
    }
  },
  {
    "id": "v4.21.303",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.21.303/index.html",
    "blurb": {
      "en": "TTLL303 - Thermal transfer in a bar with internal heat generation",
      "fr": "TTLL303 - Transfert thermique dans une barre avec génération de chaleur interne"
    }
  },
  {
    "id": "v4.22.002",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.22.002/index.html",
    "blurb": {
      "en": "TTNL02 - Thermal transition with phase change",
      "fr": "TTNL02 - Transitoire thermique avec changement de phase"
    }
  },
  {
    "id": "v4.22.003",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.22.003/index.html",
    "blurb": {
      "en": "TTNL03 - Thermo-hydration. Simulation of an adiabatic trial",
      "fr": "TTNL03 - Thermo-hydratation. Simulation d’un essai adiabatique"
    }
  },
  {
    "id": "v4.22.004",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.22.004/index.html",
    "blurb": {
      "en": "TTNL04 – Thermal with nonlinear 2D transient flux",
      "fr": "TTNL04 – Thermique avec flux non-linéaire en transitoire 2D"
    }
  },
  {
    "id": "v4.22.100",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.22.100/index.html",
    "blurb": {
      "en": "TTNL100 - Nonlinear thermal source, homogeneous solution in space",
      "fr": "TTNL100 - Source thermique non-linéaire, solution homogène en espace"
    }
  },
  {
    "id": "v4.22.101",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.22.101/index.html",
    "blurb": {
      "en": "TTNL101 - Nonlinear thermal source in a bar",
      "fr": "TTNL101 - Source thermique non-linéaire dans un barreau"
    }
  },
  {
    "id": "v4.22.302",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.22.302/index.html",
    "blurb": {
      "en": "TTNL302 - Infinite wall subjected to constant flow with variable properties",
      "fr": "TTNL302 - Mur infini soumis à un flux constant avec propriétés variables"
    }
  },
  {
    "id": "v4.22.303",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.22.303/index.html",
    "blurb": {
      "en": "TTNL303 - Infinite wall subjected to temperature jump with variable properties",
      "fr": "TTNL303 - Mur infini soumis à un saut de température avec propriétés variables"
    }
  },
  {
    "id": "v4.22.304",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.22.304/index.html",
    "blurb": {
      "en": "TTNL304 - Infinite wall subjected to temperature leap with variable orthotropic properties",
      "fr": "TTNL304 - Mur infini soumis à un saut de température avec propriétés orthotropes variables"
    }
  },
  {
    "id": "v4.23.100",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.23.100/index.html",
    "blurb": {
      "en": "TTLP100 – transient thermal analysis Paroi Exchange",
      "fr": "TTLP100 – Échange-paroi en thermique transitoire"
    }
  },
  {
    "id": "v4.23.101",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.23.101/index.html",
    "blurb": {
      "en": "TTLP101 - Frusted plate at prescribed temperatures with exchange condition through crack lips",
      "fr": "TTLP101 - Plaque fissurée à températures imposées avec condition d'échange à travers les lèvres de la fissure"
    }
  },
  {
    "id": "v4.23.300",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.23.300/index.html",
    "blurb": {
      "en": "TTLP300 - Thermal transfer into an orthotropic metal bar",
      "fr": "TTLP300 - Transfert thermique dans une barre métallique orthotrope"
    }
  },
  {
    "id": "v4.23.301",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.23.301/index.html",
    "blurb": {
      "en": "TTLP301 - Heat transfer in perforated plate",
      "fr": "TTLP301 - Transfert de chaleur dans une plaque perforée"
    }
  },
  {
    "id": "v4.23.302",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.23.302/index.html",
    "blurb": {
      "en": "TTLP302 - Thermal transfer in a Plan domain with geometric singularity",
      "fr": "TTLP302 - Transfert thermique dans un domaine Plan avec singularité géométrique"
    }
  },
  {
    "id": "v4.23.303",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.23.303/index.html",
    "blurb": {
      "en": "TTLP303 - Heat transfer in an orthotropic plate: temperature imposed",
      "fr": "TTLP303 - Transfert de chaleur dans une plaque orthotrope : températures imposées"
    }
  },
  {
    "id": "v4.23.304",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.23.304/index.html",
    "blurb": {
      "en": "TTLP304 - Heat transfer in an orthotropic plate: flow imposed",
      "fr": "TTLP304 - Transfert de chaleur dans une plaque orthotrope : flux imposés"
    }
  },
  {
    "id": "v4.24.001",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.24.001/index.html",
    "blurb": {
      "en": "TTNP01 – STEFAN problem with elements Dumping - QUAD9",
      "fr": "TTNP01 – Problème de STEFAN avec éléments lumpés - QUAD9"
    }
  },
  {
    "id": "v4.24.200",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.24.200/index.html",
    "blurb": {
      "en": "TTNP200 - Linear and nonlinear thermal 2D PLAN",
      "fr": "TTNP200 - Thermique linéaire et non-linéaire 2D PLAN"
    }
  },
  {
    "id": "v4.24.201",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.24.201/index.html",
    "blurb": {
      "en": "TTNP201-Thermal transfer with time-dependent conductivity",
      "fr": "TTNP201-Transfert thermique avec conductivité dépendante du temps"
    }
  },
  {
    "id": "v4.25.001",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.25.001/index.html",
    "blurb": {
      "en": "TTLV01 – Sphere: heat exchange by convection",
      "fr": "TTLV01 – Sphère : échange de chaleur par convection"
    }
  },
  {
    "id": "v4.25.100",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.25.100/index.html",
    "blurb": {
      "en": "TTLV100 - Thermal shock in a pipe with exchange condition",
      "fr": "TTLV100 - Choc thermique dans un tuyau avec condition d’échange"
    }
  },
  {
    "id": "v4.25.300",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.25.300/index.html",
    "blurb": {
      "en": "TTLV300 - Parallelepiped subjected to flux density on its faces",
      "fr": "TTLV300 - Parallélépipède soumis à une densité de flux sur ses faces"
    }
  },
  {
    "id": "v4.25.301",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.25.301/index.html",
    "blurb": {
      "en": "TTLV301 - Parallelepiped under a temperature imposed on its faces",
      "fr": "TTLV301 - Parallélépipède soumis à une température imposée sur ses faces"
    }
  },
  {
    "id": "v4.26.101",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.26.101/index.html",
    "blurb": {
      "en": "TTNV101 – Concrete drying – Identification of parameters on the mass loss curve",
      "fr": "TTNV101 – Séchage du béton – identification des paramètres sur la courbe de perte de masse"
    }
  },
  {
    "id": "v4.41.001",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.41.001/index.html",
    "blurb": {
      "en": "TPNA01 - Steady axisymmetric problem with radiation",
      "fr": "TPNA01 - Problème axisymétrique stationnaire avec rayonnement"
    }
  },
  {
    "id": "v4.41.002",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.41.002/index.html",
    "blurb": {
      "en": "TPNA02 - Flat thermal problem with radiation",
      "fr": "TPNA02 - Problème thermique plan avec rayonnement"
    }
  },
  {
    "id": "v4.41.300",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.41.300/index.html",
    "blurb": {
      "en": "TPNA300 - Heat generator tube with variable conductivity",
      "fr": "TPNA300 - Tube générateur de chaleur avec conductivité variable"
    }
  },
  {
    "id": "v4.42.300",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.42.300/index.html",
    "blurb": {
      "en": "TPNL300 - One-dimensional heat transfer with radiation",
      "fr": "TPNL300 - Transfert de chaleur unidimensionnel avec rayonnement"
    }
  },
  {
    "id": "v4.43.001",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.43.001/index.html",
    "blurb": {
      "en": "TPNV01 - Hollow sphere: convection, radiation",
      "fr": "TPNV01 - Sphère creuse : convection, rayonnement"
    }
  },
  {
    "id": "v4.43.002",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.43.002/index.html",
    "blurb": {
      "en": "TPNV02 - Nonlinear laplacien in cubic domain",
      "fr": "TPNV02 - Laplacien non-linéaire dans domaine cubique"
    }
  },
  {
    "id": "v4.61.100",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.61.100/index.html",
    "blurb": {
      "en": "MTLP100 - Heating and soaking of an infinite bar with square cross section",
      "fr": "MTLP100 - Chauffage et trempe d'un barreau infini à section carrée"
    }
  },
  {
    "id": "v4.61.101",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.61.101/index.html",
    "blurb": {
      "en": "MTLP101 - Metallurgical calculation for a zircaloy",
      "fr": "MTLP101 - Calcul métallurgique pour un zircaloy"
    }
  },
  {
    "id": "v4.61.102",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.61.102/index.html",
    "blurb": {
      "en": "MTLP102 - Metallurgical calculation for a steel with grain size consideration",
      "fr": "MTLP102 - Calcul métallurgique pour un acier avec prise en compte de la taille de grain"
    }
  },
  {
    "id": "v4.61.103",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.61.103/index.html",
    "blurb": {
      "en": "MTLP103 - Trempe of a 16MND5 steel cylindrical bar",
      "fr": "MTLP103 - Trempe d'un barreau cylindrique en acier 16MND5"
    }
  },
  {
    "id": "v4.61.104",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.61.104/index.html",
    "blurb": {
      "en": "MTLP104 - Steel Income Model",
      "fr": "MTLP104 - Modèle de revenu de l'acier"
    }
  },
  {
    "id": "v4.61.200",
    "part": "V4",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v4/v4.61.200/index.html",
    "blurb": {
      "en": "MTLP200 – Multi-pass simulation of welding on line RIS",
      "fr": "MTLP200 – Simulation multi-passes du soudage sur la ligne RIS"
    }
  },
  {
    "id": "v5.01.100",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.01.100/index.html",
    "blurb": {
      "en": "SDND100 - Drop frictional slider with Coulomb friction",
      "fr": "SDND100 - Lâcher d’un patin frottant avec frottement de type Coulomb"
    }
  },
  {
    "id": "v5.01.101",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.01.101/index.html",
    "blurb": {
      "en": "SDND101 - Drop a spring mass system with impact",
      "fr": "SDND101 - Lâcher d'un système masse ressort avec choc"
    }
  },
  {
    "id": "v5.01.102",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.01.102/index.html",
    "blurb": {
      "en": "SDND102 - Seismic response of a multi-supported non-linear mass-spring system",
      "fr": "SDND102 - Réponse sismique d’un système masse-ressort non linéaire multi-supporté"
    }
  },
  {
    "id": "v5.01.103",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.01.103/index.html",
    "blurb": {
      "en": "SDND103 - Axial dynamically-sustained pole",
      "fr": "SDND103 - Poteau soumis à une sollicitation dynamique axiale"
    }
  },
  {
    "id": "v5.01.104",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.01.104/index.html",
    "blurb": {
      "en": "SDND104 - Calculation of wear power of a rubbing mass under harmonic seismic excitation",
      "fr": "SDND104 - Calcul de la puissance d’usure d’une masse frottante sous excitation sismique harmonique"
    }
  },
  {
    "id": "v5.01.105",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.01.105/index.html",
    "blurb": {
      "en": "SDND105 – Shock from point material against a wall with plastic blazing",
      "fr": "SDND105 – Choc d’un point matériel contre une paroi avec flambage plastique"
    }
  },
  {
    "id": "v5.01.106",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.01.106/index.html",
    "blurb": {
      "en": "SDND106 – frictional slider with static and dynamic friction coefficients",
      "fr": "SDND106 – Patin frottant avec coefficients de frottement statique et dynamique"
    }
  },
  {
    "id": "v5.01.107",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.01.107/index.html",
    "blurb": {
      "en": "SDND107 - Seismic release and excitation of a system with non-linear \\"Zener\\" viscous shock absorber",
      "fr": "SDND107 - Lâcher et excitation sismique d’un système avec amortisseur visqueux non linéaire de type \\"Zener\\""
    }
  },
  {
    "id": "v5.01.108",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.01.108/index.html",
    "blurb": {
      "en": "SDND108 - constitutive law DIS_CONTACT in dynamic",
      "fr": "SDND108 - Loi de comportement DIS_CONTACT en dynamique"
    }
  },
  {
    "id": "v5.01.109",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.01.109/index.html",
    "blurb": {
      "en": "SDND109 - constitutive law CHOC_ENDO, in nonlinear dynamics",
      "fr": "SDND109 - Loi de comportement CHOC_ENDO, en dynamique non-linéaire"
    }
  },
  {
    "id": "v5.01.110",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.01.110/index.html",
    "blurb": {
      "en": "SDND110 – Seismic Excitation of a Discreet Affected Behaviour CHOC_ELAS_TRAC",
      "fr": "SDND110 – Excitation sismique d’un discret affecté du comportement CHOC_ELAS_TRAC"
    }
  },
  {
    "id": "v5.01.111",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.01.111/index.html",
    "blurb": {
      "en": "SDND111 - DIS_CHOC, with contact managed in the global reference, in nonlinear dynamics",
      "fr": "SDND111 - DIS_CHOC, avec contact géré dans le repère global, en dynamique non-linéaire"
    }
  },
  {
    "id": "v5.01.120",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.01.120/index.html",
    "blurb": {
      "en": "SDND120 - Transitional response of an anti-seismic patch",
      "fr": "SDND120 - Réponse transitoire d’un dispositif anti-sismique"
    }
  },
  {
    "id": "v5.01.121",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.01.121/index.html",
    "blurb": {
      "en": "SDND121 – Spring mass-responding system with forced excitation shock",
      "fr": "SDND121 – Système masse-ressort avec chocs sous excitation forcée"
    }
  },
  {
    "id": "v5.01.122",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.01.122/index.html",
    "blurb": {
      "en": "SDND122 – Nonlinear mode calculation – 1 degree of freedom system impacting an elastic stop",
      "fr": "SDND122 – Calcul de mode non-linéaire – système à 1 degré de liberté impactant une butée élastique"
    }
  },
  {
    "id": "v5.01.123",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.01.123/index.html",
    "blurb": {
      "en": "SDND123 – Linear mode calculation for a 2 degrees of freedom system with a bilateral elastic stop",
      "fr": "SDND123 – Calcul de mode linéaire pour un système à 2 degrés de liberté avec une butée bilatérale élastique"
    }
  },
  {
    "id": "v5.01.124",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.01.124/index.html",
    "blurb": {
      "en": "SDND124 – Seismic Excitation of a Discreet Affected Behaviour DIS_ECRO_TRAC",
      "fr": "SDND124 – Excitation sismique d’un discret affecté du comportement DIS_ECRO_TRAC"
    }
  },
  {
    "id": "v5.01.125",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.01.125/index.html",
    "blurb": {
      "en": "SDND125 – Treatment of localized nonlinear behaviors with DYNA_VIBRA",
      "fr": "SDND125 – Traitement des comportements non-linéaires localisés avec DYNA_VIBRA"
    }
  },
  {
    "id": "v5.01.126",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.01.126/index.html",
    "blurb": {
      "en": "SDND126 - Validation of DIS_ECRO_CINE in DYNA_VIBRA",
      "fr": "SDND126 - Validation de DIS_ECRO_CINE dans DYNA_VIBRA"
    }
  },
  {
    "id": "v5.02.032",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.02.032/index.html",
    "blurb": {
      "en": "SDNL32 - Impact of an articulated beam on elastic support",
      "fr": "SDNL32 - Impact d'une poutre articulée sur appui élastique"
    }
  },
  {
    "id": "v5.02.100",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.02.100/index.html",
    "blurb": {
      "en": "SDNL100 - Single pen in large oscillation",
      "fr": "SDNL100 - Pendule simple en grande oscillation"
    }
  },
  {
    "id": "v5.02.102",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.02.102/index.html",
    "blurb": {
      "en": "SDNL102 - Bracket subject to a wind speed field",
      "fr": "SDNL102 - Poutre soumise à un champ de vitesse de vent"
    }
  },
  {
    "id": "v5.02.103",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.02.103/index.html",
    "blurb": {
      "en": "SDNL103 - Dynamic of a portal modeled by elements beam in high rotation. Comparison with a small rotation analysis",
      "fr": "SDNL103 - Dynamique d'un portique modélisé par des éléments de poutre en grande rotation. Comparaison avec une analyse en petite rotation"
    }
  },
  {
    "id": "v5.02.104",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.02.104/index.html",
    "blurb": {
      "en": "SDNL104 - Non-linear transitional substructure: impact of a beam on 1 support",
      "fr": "SDNL104 - Sous-structuration transitoire non linéaire : choc d’une poutre sur 1 appui"
    }
  },
  {
    "id": "v5.02.105",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.02.105/index.html",
    "blurb": {
      "en": "SDNL105 - Non-linear transitional substructure: shock of 3 beams between them",
      "fr": "SDNL105 - Sous-structuration transitoire non linéaire : choc de 3 poutres entre elles"
    }
  },
  {
    "id": "v5.02.112",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.02.112/index.html",
    "blurb": {
      "en": "SDNL112 - Vibration damage to a steam generator hanger",
      "fr": "SDNL112 - Endommagement d'origine vibratoire d'un cintre de générateur de vapeur"
    }
  },
  {
    "id": "v5.02.113",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.02.113/index.html",
    "blurb": {
      "en": "SDNL113 - Lyre-shaped pipework (ELSA tests) under seismic loading",
      "fr": "SDNL113 - Tuyauterie en forme de lyre (essais ELSA) sous chargement sismique"
    }
  },
  {
    "id": "v5.02.130",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.02.130/index.html",
    "blurb": {
      "en": "SDNL130 - Seismic response of a reinforced concrete beam (rectangular section) with nonlinear behaviour",
      "fr": "SDNL130 - Réponse sismique d’une poutre en béton armé (section rectangulaire) à comportement non linéaire"
    }
  },
  {
    "id": "v5.02.133",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.02.133/index.html",
    "blurb": {
      "en": "SDNL133 – Rotor rotating cracked, subjected to bending effort",
      "fr": "SDNL133 – Rotor fissuré tournant, soumis à un effort de flexion"
    }
  },
  {
    "id": "v5.02.137",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.02.137/index.html",
    "blurb": {
      "en": "SDNL137 – Calculation of nonlinear modes of a curved tube with two nonlinearity ring contact type",
      "fr": "SDNL137 – Calcul de modes non-linéaires d'un tube cintré avec deux non-linéarités de type contact annulaire"
    }
  },
  {
    "id": "v5.02.138",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.02.138/index.html",
    "blurb": {
      "en": "SDNL138 - Frequency and clean vibration modes of a self-contraning frame",
      "fr": "SDNL138 - Fréquences et modes propres de vibration d’un cadre auto-contraint"
    }
  },
  {
    "id": "v5.02.139",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.02.139/index.html",
    "blurb": {
      "en": "SDNL139 - 1D-3D non-intrusive switch of a two-screwed beam",
      "fr": "SDNL139 - Bascule non intrusive 1D-3D d'une poutre bi-appuyée"
    }
  },
  {
    "id": "v5.02.140",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.02.140/index.html",
    "blurb": {
      "en": "SDNL140 – Shrinking vibration of two contact-frost beams",
      "fr": "SDNL140 – Vibration amortie de deux poutres en contact-frottant"
    }
  },
  {
    "id": "v5.02.141",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.02.141/index.html",
    "blurb": {
      "en": "SDNL141 – Oscillating submerged beam subject to wave field",
      "fr": "SDNL141 – Poutre immergée oscillante soumise à un champ de vague"
    }
  },
  {
    "id": "v5.02.142",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.02.142/index.html",
    "blurb": {
      "en": "SDNL142 – Submerged cable subject to wave field",
      "fr": "SDNL142 – Câble immergé soumis à un champ de vagues"
    }
  },
  {
    "id": "v5.02.143",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.02.143/index.html",
    "blurb": {
      "en": "SDNL143 – Wave field pile",
      "fr": "SDNL143 – Pile soumise à un champ de vagues"
    }
  },
  {
    "id": "v5.02.301",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.02.301/index.html",
    "blurb": {
      "en": "SDNL301 – Vibration of a beam with multi-point impact",
      "fr": "SDNL301 – Vibration d'une poutre avec impact multi-points"
    }
  },
  {
    "id": "v5.03.100",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.03.100/index.html",
    "blurb": {
      "en": "SDNV100 - Impact of a beam on a rigid wall",
      "fr": "SDNV100 - Impact d'une poutre sur une paroi rigide"
    }
  },
  {
    "id": "v5.03.106",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.03.106/index.html",
    "blurb": {
      "en": "SDNV106 – Analysis with DYNA_NON_LINE own values (stability and vibration modes)",
      "fr": "SDNV106 – Analyse aux valeurs propres dans DYNA_NON_LINE (stabilité et modes vibratoires)"
    }
  },
  {
    "id": "v5.03.108",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.03.108/index.html",
    "blurb": {
      "en": "SDNV108 – Density cylinder rotating around its axis, taking into account gyroscopy",
      "fr": "SDNV108 – Cylindre volumique creux en rotation autour de son axe, prise en compte de la gyroscopie"
    }
  },
  {
    "id": "v5.03.109",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.03.109/index.html",
    "blurb": {
      "en": "SDNV109 – Full volumetric cylinder rotating around its axis, taking into account gyroscopy",
      "fr": "SDNV109 – Cylindre volumique plein en rotation autour de son axe, prise en compte de la gyroscopie"
    }
  },
  {
    "id": "v5.03.110",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.03.110/index.html",
    "blurb": {
      "en": "SDNV110 – Rotor volume in rotation around its axis, taking into account gyroscopy",
      "fr": "SDNV110 – Rotor volumique en rotation autour de son axe, prise en compte de la gyroscopie"
    }
  },
  {
    "id": "v5.03.112",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.03.112/index.html",
    "blurb": {
      "en": "SDNV112 - Multi-support seismically-sustained civil engineering building",
      "fr": "SDNV112 - Bâtiment de génie civil sous sollicitation sismique de type multi-appui"
    }
  },
  {
    "id": "v5.05.101",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.05.101/index.html",
    "blurb": {
      "en": "SDNX101 - MISS3D‐Code_Aster Chain Verification for ISS Dynamic Foundation Detachment",
      "fr": "SDNX101 - Vérification du chaînage MISS3D‑Code_Aster pour le décollement dynamique de fondation en ISS"
    }
  },
  {
    "id": "v5.05.102",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.05.102/index.html",
    "blurb": {
      "en": "SDNX102 - Verification of Miss3D-code_aster Chaining for a rigid foundation beam",
      "fr": "SDNX102 - Vérification du chaînage Miss3D-code_aster pour une poutre sur fondation rigide"
    }
  },
  {
    "id": "v5.06.105",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.06.105/index.html",
    "blurb": {
      "en": "SDNS105 – Simulation of a dynamic pull-out test with cohesive elements",
      "fr": "SDNS105 – Simulation d'un essai d'arrachement en dynamique avec des éléments cohésifs"
    }
  },
  {
    "id": "v5.06.106",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.06.106/index.html",
    "blurb": {
      "en": "SDNS106 – Transitional Response of a reinforced concrete slab: GLRC_DAMAGE and GLRC_DM models",
      "fr": "SDNS106 – Réponse transitoire d'une dalle en béton armé : modèles GLRC_DAMAGE et GLRC_DM"
    }
  },
  {
    "id": "v5.06.107",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.06.107/index.html",
    "blurb": {
      "en": "SDNS107 – Transitional Response of a reinforced concrete slab: model with GRILLE_EXCENTRE",
      "fr": "SDNS107 – Réponse transitoire d'une dalle en béton armé : modèle avec GRILLE_EXCENTRE"
    }
  },
  {
    "id": "v5.06.109",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.06.109/index.html",
    "blurb": {
      "en": "PLEXU04: Cylinder with internal pressure prestress cables in transient dynamics",
      "fr": "PLEXU04 : Cylindre avec câbles de précontrainte sous pression interne en dynamique transitoire"
    }
  },
  {
    "id": "v5.06.110",
    "part": "V5",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v5/v5.06.110/index.html",
    "blurb": {
      "en": "PLEXU06 – Validation of the Code_Aster chaining - Europlexus",
      "fr": "PLEXU06 – Validation du chaînage Code_Aster - Europlexus"
    }
  },
  {
    "id": "v6.01.001",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.01.001/index.html",
    "blurb": {
      "en": "SSNA01 - Infinite cylinder under pressure: Lemaître viscoelasticity",
      "fr": "SSNA01 - Cylindre infini sous pression : viscoélasticité de Lemaître"
    }
  },
  {
    "id": "v6.01.102",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.01.102/index.html",
    "blurb": {
      "en": "SSNA102 - Multibody elastic contact",
      "fr": "SSNA102 - Contact multicorps élastiques"
    }
  },
  {
    "id": "v6.01.103",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.01.103/index.html",
    "blurb": {
      "en": "SSNA103 - Calibration of Weibull Model Parameters",
      "fr": "SSNA103 - Calage des paramètres du modèle de Weibull"
    }
  },
  {
    "id": "v6.01.104",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.01.104/index.html",
    "blurb": {
      "en": "SSNA104 - Pressured hollow cylinder, linear viscoelasticity",
      "fr": "SSNA104 - Cylindre creux soumis à une pression, viscoélasticité linéaire"
    }
  },
  {
    "id": "v6.01.105",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.01.105/index.html",
    "blurb": {
      "en": "SSNA105 - Pressured hollow cylinder, linear viscoelasticity, contact",
      "fr": "SSNA105 - Cylindre creux soumis à une pression, viscoélasticité linéaire, contact"
    }
  },
  {
    "id": "v6.01.106",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.01.106/index.html",
    "blurb": {
      "en": "SSNA106 - Hollow cylinder subjected to thermoviscoelastic behaviour",
      "fr": "SSNA106 - Cylindre creux soumis à un comportement thermoviscoélastique"
    }
  },
  {
    "id": "v6.01.107",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.01.107/index.html",
    "blurb": {
      "en": "SSNA107 – Non-linear hollow viscoelasticity cylinder",
      "fr": "SSNA107 – Cylindre creux en viscoélasticité non linéaire"
    }
  },
  {
    "id": "v6.01.108",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.01.108/index.html",
    "blurb": {
      "en": "SSNA108 - Weibull, Bordet and Rice and Tracey models",
      "fr": "SSNA108 - Modèles de Weibull, Bordet et de Rice et Tracey"
    }
  },
  {
    "id": "v6.01.109",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.01.109/index.html",
    "blurb": {
      "en": "SSNA109 - Tensile test with VISC_CIN2_CHAB",
      "fr": "SSNA109 - Essai de traction avec le modèle VISC_CIN2_CHAB"
    }
  },
  {
    "id": "v6.01.110",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.01.110/index.html",
    "blurb": {
      "en": "SSNA110 - Parameter matching with VISC_CIN2_CHAB",
      "fr": "SSNA110 - Recalage de paramètres avec le modèle VISC_CIN2_CHAB"
    }
  },
  {
    "id": "v6.01.111",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.01.111/index.html",
    "blurb": {
      "en": "SSNA111 - Indentation of a solid by a punch",
      "fr": "SSNA111 - Indentation d’un massif par un poinçon"
    }
  },
  {
    "id": "v6.01.112",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.01.112/index.html",
    "blurb": {
      "en": "SSNA112 – axisymmetric tear-out test for restraint steel-concrete study: JOINT_BA law",
      "fr": "SSNA112 – Test d’arrachement axisymétrique pour l’étude de la liaison acier-béton : loi JOINT_BA"
    }
  },
  {
    "id": "v6.01.114",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.01.114/index.html",
    "blurb": {
      "en": "SSNA114 - Drained triaxial test with VISC_MAXWELL",
      "fr": "SSNA114 - Essai triaxial drainé avec le modèle VISC_MAXWELL"
    }
  },
  {
    "id": "v6.01.115",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.01.115/index.html",
    "blurb": {
      "en": "SSNA115 – Scratch of a rigid frame with cohesive elements",
      "fr": "SSNA115 – Arrachement d’une armature rigide avec des éléments cohésifs"
    }
  },
  {
    "id": "v6.01.116",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.01.116/index.html",
    "blurb": {
      "en": "SSNA116 - Triaxial test with the Hoek-Brown model modified to axisymmetric",
      "fr": "SSNA116 - Essai triaxial avec le modèle de Hoek-Brown modifié en axisymétrique"
    }
  },
  {
    "id": "v6.01.119",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.01.119/index.html",
    "blurb": {
      "en": "SSNA119 – Damage to AXIS-cut test piece",
      "fr": "SSNA119 – Endommagement d'une éprouvette entaillée en AXIS"
    }
  },
  {
    "id": "v6.01.120",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.01.120/index.html",
    "blurb": {
      "en": "SSNA120 – axisymmetric tester with elements seal and interface",
      "fr": "SSNA120 – Eprouvette axisymétrique entaillée (AE) avec éléments de joint et d'interface"
    }
  },
  {
    "id": "v6.01.121",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.01.121/index.html",
    "blurb": {
      "en": "SSNA121 - Concrete tube subjected to internal pressure with model BETON_UMLV",
      "fr": "SSNA121 - Tube de béton soumis à une pression interne avec le modèle BETON_UMLV"
    }
  },
  {
    "id": "v6.01.122",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.01.122/index.html",
    "blurb": {
      "en": "SSNA122 – Contact Validation Benchmark NAFEMS 2: punch (rounded edges)",
      "fr": "SSNA122 – Benchmark NAFEMS de validation du contact 2 : punch (rounded edges)"
    }
  },
  {
    "id": "v6.01.123",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.01.123/index.html",
    "blurb": {
      "en": "SSNA123 – constitutive law validation of axisymmetric-irradiated steels",
      "fr": "SSNA123 – Validation de la loi de comportement des aciers sous irradiations en axisymétrique"
    }
  },
  {
    "id": "v6.01.125",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.01.125/index.html",
    "blurb": {
      "en": "SSNA125 - Near-incompressible hollow sphere with internal and external pressure",
      "fr": "SSNA125 - Sphère creuse quasi-incompressible avec pression interne et externe"
    }
  },
  {
    "id": "v6.01.129",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.01.129/index.html",
    "blurb": {
      "en": "SSNA129 - Elastoplastic tubes subjected to internal/external pressures axisymmetric",
      "fr": "SSNA129 - Tubes élastoplastiques soumis à des pressions interne/externe axisymétriques"
    }
  },
  {
    "id": "v6.01.301",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.01.301/index.html",
    "blurb": {
      "en": "SSNA301 - Pressurized thick tank bottom",
      "fr": "SSNA301 - Fond de réservoir épais pressurisé"
    }
  },
  {
    "id": "v6.01.302",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.01.302/index.html",
    "blurb": {
      "en": "SSNA302 - Circular plate simply pressed under pressure",
      "fr": "SSNA302 - Plaque circulaire simplement appuyée soumise à pression"
    }
  },
  {
    "id": "v6.01.303",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.01.303/index.html",
    "blurb": {
      "en": "SSNA303 : Elastoplastic-tipped test piece in large deformations",
      "fr": "SSNA303 : Éprouvette entaillée élastoplastique en grandes déformations"
    }
  },
  {
    "id": "v6.02.100",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.100/index.html",
    "blurb": {
      "en": "SSNL100 - Laying of a double-gauge line township",
      "fr": "SSNL100 - Pose d'un canton de ligne à deux portées égales"
    }
  },
  {
    "id": "v6.02.101",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.101/index.html",
    "blurb": {
      "en": "SSNL101 - Non-linear behavior of a line arming element",
      "fr": "SSNL101 - Comportement non-linéaire d'un élément d'armement de ligne"
    }
  },
  {
    "id": "v6.02.102",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.102/index.html",
    "blurb": {
      "en": "SSNL102 - Nonlinear behaviour of a corneal assembly",
      "fr": "SSNL102 - Comportement non-linéaire d'un assemblage de cornières"
    }
  },
  {
    "id": "v6.02.103",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.103/index.html",
    "blurb": {
      "en": "SSNL103 - Cantilever beam in large rotations subject to one moment",
      "fr": "SSNL103 - Poutre Cantilever en grandes rotations soumise à un moment"
    }
  },
  {
    "id": "v6.02.105",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.105/index.html",
    "blurb": {
      "en": "SSNL105 - Hooped frame",
      "fr": "SSNL105 - Cadre haubané"
    }
  },
  {
    "id": "v6.02.106",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.106/index.html",
    "blurb": {
      "en": "SSNL106 - Elastoplastic beam in pure traction and bending",
      "fr": "SSNL106 - Poutre élastoplastique en tractionet flexion pure"
    }
  },
  {
    "id": "v6.02.107",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.107/index.html",
    "blurb": {
      "en": "SSNL107 - clamped plate, flexed by beams in contact with the free edge",
      "fr": "SSNL107 - Plaque encastrée soumise à une flexion par des poutres en contact avec le bord libre"
    }
  },
  {
    "id": "v6.02.109",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.109/index.html",
    "blurb": {
      "en": "SSNL109 – VMIS_ISOT_NL 1D Law on finite element Bar",
      "fr": "SSNL109 – Loi VMIS_ISOT_NL en 1D sur élément fini de barre"
    }
  },
  {
    "id": "v6.02.110",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.110/index.html",
    "blurb": {
      "en": "SSNL110 - finite element from traction bar",
      "fr": "SSNL110 - Élément fini de barre en traction"
    }
  },
  {
    "id": "v6.02.111",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.111/index.html",
    "blurb": {
      "en": "SSNL111 - Three thermo-elastic bars Von Perfect bets",
      "fr": "SSNL111 - Trois barres thermo-élastoplastiques Von Mises parfait"
    }
  },
  {
    "id": "v6.02.112",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.112/index.html",
    "blurb": {
      "en": "SSNL112 - Bar subjected to a cyclic thermal charge",
      "fr": "SSNL112 - Barre soumise a un chargement thermique cyclique"
    }
  },
  {
    "id": "v6.02.114",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.114/index.html",
    "blurb": {
      "en": "SSNL114 - Weighing cable with thermal expansion",
      "fr": "SSNL114 - Câble pesant avec dilatation thermique"
    }
  },
  {
    "id": "v6.02.115",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.115/index.html",
    "blurb": {
      "en": "SSNL115 - Cable with thermal expansion",
      "fr": "SSNL115 - Câble avec dilatation thermique"
    }
  },
  {
    "id": "v6.02.116",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.116/index.html",
    "blurb": {
      "en": "SSNL116 - Gas-insulated cable strand",
      "fr": "SSNL116 - Tronçon de câble à isolation gazeuse"
    }
  },
  {
    "id": "v6.02.117",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.117/index.html",
    "blurb": {
      "en": "SSNL117 - Elastoplastic flexion cover",
      "fr": "SSNL117 - Coude en flexion en élastoplasticité"
    }
  },
  {
    "id": "v6.02.118",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.118/index.html",
    "blurb": {
      "en": "SSNL118 - Wind speed field bar",
      "fr": "SSNL118 - Barre soumise à un champ de vitesse de vent"
    }
  },
  {
    "id": "v6.02.119",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.119/index.html",
    "blurb": {
      "en": "SSNL119 - Static response of a reinforced concrete beam (rectangular section) with nonlinear behaviour",
      "fr": "SSNL119 - Réponse statique d’une poutre en béton armé (section rectangulaire) à comportement non linéaire"
    }
  },
  {
    "id": "v6.02.120",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.120/index.html",
    "blurb": {
      "en": "SSNL120 - Cyclical Response of 1D Concrete Behaviour Laws",
      "fr": "SSNL120 - Réponse cyclique de lois decomportement du béton en 1D"
    }
  },
  {
    "id": "v6.02.122",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.122/index.html",
    "blurb": {
      "en": "SSNL122 - Multifibre cantilever beam under stress",
      "fr": "SSNL122 - Poutre cantilever multifibre soumise à un effort"
    }
  },
  {
    "id": "v6.02.123",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.123/index.html",
    "blurb": {
      "en": "SSNL123 - Flaming of a Multi-Fibres beam",
      "fr": "SSNL123 - Flambement d'une poutre Multi-Fibres"
    }
  },
  {
    "id": "v6.02.124",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.124/index.html",
    "blurb": {
      "en": "SSNL124 - element HEXA8 axial fluage with LEMAITRE_IRRA behavior",
      "fr": "SSNL124 - Fluage axial d'un élément HEXA8 avec un comportement de LEMAITRE_IRRA"
    }
  },
  {
    "id": "v6.02.125",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.125/index.html",
    "blurb": {
      "en": "SSNL125 - Traction of a fragile bar: gradient damage",
      "fr": "SSNL125 - Traction d’un barreau fragile : endommagement à gradient"
    }
  },
  {
    "id": "v6.02.126",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.126/index.html",
    "blurb": {
      "en": "SSNL126 - Elastoplastic flame of an straight beam",
      "fr": "SSNL126 - Flambement élastoplastique d'une poutre droite"
    }
  },
  {
    "id": "v6.02.127",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.127/index.html",
    "blurb": {
      "en": "SSNL127 - Tensile test with CORR_ACIER",
      "fr": "SSNL127 - Essai de traction avec le modèle CORR_ACIER"
    }
  },
  {
    "id": "v6.02.129",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.129/index.html",
    "blurb": {
      "en": "SSNL129 – Validation of VISC_ISOT_TRAC and VISC_ISOT_LINE laws on a traction test",
      "fr": "SSNL129 – Validation des lois VISC_ISOT_TRAC et VISC_ISOT_LINE sur un essai de traction"
    }
  },
  {
    "id": "v6.02.130",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.130/index.html",
    "blurb": {
      "en": "SSNL130 – Unformable plate on a spring mat",
      "fr": "SSNL130 – Plaque indéformable sur un tapis de ressorts"
    }
  },
  {
    "id": "v6.02.133",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.133/index.html",
    "blurb": {
      "en": "SSNL133 – Post-elastically-flooded L-shaped structure",
      "fr": "SSNL133 – Post-flambement élastique d’une structure en L"
    }
  },
  {
    "id": "v6.02.134",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.134/index.html",
    "blurb": {
      "en": "SSNL134 - Elasto-plastic Ruin of Lee's Gate",
      "fr": "SSNL134 - Ruine élasto-plastique du portique de Lee"
    }
  },
  {
    "id": "v6.02.135",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.135/index.html",
    "blurb": {
      "en": "SSNL135 – Determination of MEKELEC console ruin loads",
      "fr": "SSNL135 – Détermination des charges de ruine de la console MEKELEC"
    }
  },
  {
    "id": "v6.02.136",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.136/index.html",
    "blurb": {
      "en": "SSNL136 - Large displacement of the arc at angle of opening 45°",
      "fr": "SSNL136 - Grands déplacements de l’arc à angle d’ouverture 45°"
    }
  },
  {
    "id": "v6.02.137",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.137/index.html",
    "blurb": {
      "en": "SSNL137 - Elastoplasticity Traction Bars with IMPLEX Method",
      "fr": "SSNL137 - Barres en traction en élastoplasticité avec la méthode IMPLEX"
    }
  },
  {
    "id": "v6.02.139",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.139/index.html",
    "blurb": {
      "en": "SSNL139 – Validation of the re-update of the angle of the beam spin",
      "fr": "SSNL139 – Validation de la ré-actualisation de l'angle de vrille des poutres"
    }
  },
  {
    "id": "v6.02.141",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.141/index.html",
    "blurb": {
      "en": "SSNL141 - Multifibre and multimaterial P-rings",
      "fr": "SSNL141 - P outres multifibres et multimatériaux"
    }
  },
  {
    "id": "v6.02.142",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.142/index.html",
    "blurb": {
      "en": "FORMA43 - Practical work of the Civil Engineering training: 3 point flexion of a reinforced concrete beam.",
      "fr": "FORMA43 - Travaux pratiques de la formation « Génie Civil » : Flexion 3 points d’une poutre en béton armé."
    }
  },
  {
    "id": "v6.02.143",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.143/index.html",
    "blurb": {
      "en": "SSNL143 – Validation of relaxation law for pre-stressed steel cables",
      "fr": "SSNL143 – Validation de la loi de relaxation pour les câbles acier pré-contraints"
    }
  },
  {
    "id": "v6.02.501",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.501/index.html",
    "blurb": {
      "en": "SSNL501 - clamped beam at both ends under uniform pressure",
      "fr": "SSNL501 - Poutre encastrée aux deux extrémités soumise à une pression uniforme"
    }
  },
  {
    "id": "v6.02.502",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.502/index.html",
    "blurb": {
      "en": "SSNL502 - Torch beam",
      "fr": "SSNL502 - Poutre en flambement"
    }
  },
  {
    "id": "v6.02.503",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.503/index.html",
    "blurb": {
      "en": "SSNL503 - Elasto-plastic Ruin of a thin sewn pipe",
      "fr": "SSNL503 - Ruine élasto-plastique d’un tuyau coudé mince"
    }
  },
  {
    "id": "v6.02.504",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.02.504/index.html",
    "blurb": {
      "en": "SSNL504 – Assembling skeleton element",
      "fr": "SSNL504 – Elément squelette d’assemblage"
    }
  },
  {
    "id": "v6.03.002",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.002/index.html",
    "blurb": {
      "en": "SSNP02 - element plate in flat deformation and biaxial traction (law of Norton)",
      "fr": "SSNP02 - Élément de plaque en déformations planes et traction biaxiale (loi de Norton)"
    }
  },
  {
    "id": "v6.03.005",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.005/index.html",
    "blurb": {
      "en": "SSNP05 - Traction-slicing plate: Lemaître viscoelasticity",
      "fr": "SSNP05 - Plaque en traction-cisaillement : viscoélasticité de Lemaître"
    }
  },
  {
    "id": "v6.03.006",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.006/index.html",
    "blurb": {
      "en": "SSNP006 – Stability analysis of a homogeneous slope using Bishop method",
      "fr": "SSNP006 – Analyse de stabilité d’une pente homogène par la méthode Bishop"
    }
  },
  {
    "id": "v6.03.007",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.007/index.html",
    "blurb": {
      "en": "SSNP007 - Stability analysis of an undrained slope with low layer by Morgenstern-Price method",
      "fr": "SSNP007 - Analyse de stabilité d’une pente non-drainée avec couche faible par la méthode Morgenstern-Price"
    }
  },
  {
    "id": "v6.03.008",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.008/index.html",
    "blurb": {
      "en": "SSNP008 - Stability of a two-tiered slope with waterline and matrix suction",
      "fr": "SSNP008 - Stabilité d'une pente à deux niveaux avec ligne phréatique et succion matricielle"
    }
  },
  {
    "id": "v6.03.009",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.009/index.html",
    "blurb": {
      "en": "SSNP009 - Stability of a homogeneous slope with suction evaluated by the water retention curve",
      "fr": "SSNP009 - Stabilité d'une pente homogène avec la succion évaluée par la courbe de rétention d'eau"
    }
  },
  {
    "id": "v6.03.010",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.010/index.html",
    "blurb": {
      "en": "SSNP010 - Stability of a slope sustained at seismic inertial force",
      "fr": "SSNP010 - Stabilité d'une pente subie à la force inertielle sismique"
    }
  },
  {
    "id": "v6.03.011",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.011/index.html",
    "blurb": {
      "en": "SSNP011 - Calculation of the critical acceleration coefficient of homogeneous and stratified slopes",
      "fr": "SSNP011 - Calcul du coefficient d'accélération critique des pentes homogènes et stratifiées"
    }
  },
  {
    "id": "v6.03.014",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.014/index.html",
    "blurb": {
      "en": "SSNP14 - Traction-slicing plate - Von Plating (Cinematic hardening)",
      "fr": "SSNP14 - Plaque en traction-cisaillement - Von Mises (écrouissage cinématique)"
    }
  },
  {
    "id": "v6.03.015",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.015/index.html",
    "blurb": {
      "en": "SSNP15 - Traction-slicing plate - Von Plating (isotropic hardening)",
      "fr": "SSNP15 - Plaque en traction-cisaillement - Von Mises (écrouissage isotrope)"
    }
  },
  {
    "id": "v6.03.101",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.101/index.html",
    "blurb": {
      "en": "SSNP101 - Traction-slicing plate: Lemaître viscoelasticity (D_PLAN)",
      "fr": "SSNP101 - Plaque en traction-cisaillement : viscoélasticité de Lemaître (D_PLAN)"
    }
  },
  {
    "id": "v6.03.103",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.103/index.html",
    "blurb": {
      "en": "SSNP103 - Calculation of the nonlinear energy yield rate",
      "fr": "SSNP103 - Calcul du taux de restitution d’énergie en élasticité non linéaire"
    }
  },
  {
    "id": "v6.03.107",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.107/index.html",
    "blurb": {
      "en": "SSNP107 - Traction-slicing plate: Lemaître viscoelasticity and isotropic hardening",
      "fr": "SSNP107 - Plaque en traction-cisaillement : viscoélasticité de Lemaître et écrouissage isotrope"
    }
  },
  {
    "id": "v6.03.108",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.108/index.html",
    "blurb": {
      "en": "SSNP108 - element prestressed concrete in compression",
      "fr": "SSNP108 - Élément de béton précontraint en compression"
    }
  },
  {
    "id": "v6.03.109",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.109/index.html",
    "blurb": {
      "en": "SSNP109 - Prestress cable excreted in a concrete straight beam",
      "fr": "SSNP109 - Câble de précontrainte excentré dans une poutre droite en béton"
    }
  },
  {
    "id": "v6.03.110",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.110/index.html",
    "blurb": {
      "en": "SSNP110 - Edge crack in a rectangular, finished elastoplastic plate",
      "fr": "SSNP110 - Fissure de bord dans une plaque rectangulaire finie en élastoplasticité"
    }
  },
  {
    "id": "v6.03.111",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.111/index.html",
    "blurb": {
      "en": "SSNP111 - Switching from Gauss to nodes points to quadratic elements points",
      "fr": "SSNP111 - Passage des points de Gauss aux nœuds sur des éléments quadratiques"
    }
  },
  {
    "id": "v6.03.112",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.112/index.html",
    "blurb": {
      "en": "FORMA10 - Practical work of Advanced Use Training: Loading route",
      "fr": "FORMA10 - Travaux pratiques de la formation « Utilisation avancée » : trajet de chargement"
    }
  },
  {
    "id": "v6.03.113",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.113/index.html",
    "blurb": {
      "en": "SSNP113 - Rotation of main constraints (law of MAZARS)",
      "fr": "SSNP113 - Rotation des contraintes principales (loi de MAZARS)"
    }
  },
  {
    "id": "v6.03.114",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.114/index.html",
    "blurb": {
      "en": "FORMA03 - Practical work of the \\"Advanced use\\" training: limit load of a hole plate",
      "fr": "FORMA03 - Travaux pratiques de la formation « Utilisation avancée » : charge limite d’une plaque trouée"
    }
  },
  {
    "id": "v6.03.116",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.116/index.html",
    "blurb": {
      "en": "SSNP116 - Fluid/crack coupling - Uniaxial Traction",
      "fr": "SSNP116 - Couplage fluage/fissuration - Traction uniaxiale"
    }
  },
  {
    "id": "v6.03.117",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.117/index.html",
    "blurb": {
      "en": "SSNP117 - 2D Sliding Model - DP",
      "fr": "SSNP117 - Modèle de Rousselier en 2D - DP"
    }
  },
  {
    "id": "v6.03.118",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.118/index.html",
    "blurb": {
      "en": "SSNP118 - Validation of elements joint and interface in 2D plane and 3D",
      "fr": "SSNP118 - Validation des éléments de joint et d’interface en 2D plan et 3D"
    }
  },
  {
    "id": "v6.03.119",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.119/index.html",
    "blurb": {
      "en": "FORMA20 - mesh mechanical adaptive on a bending beam",
      "fr": "FORMA20 - Maillage adaptatif mécanique sur une poutre en flexion"
    }
  },
  {
    "id": "v6.03.120",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.120/index.html",
    "blurb": {
      "en": "FORMA21 - mesh thermomechanical adaptive on cracked head",
      "fr": "FORMA21 - Maillage adaptatif thermo-mécanique sur une culasse fissurée"
    }
  },
  {
    "id": "v6.03.121",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.121/index.html",
    "blurb": {
      "en": "SSNP121 – Integration of contact terms in 2D and 3D",
      "fr": "SSNP121 – Intégration des termes de contact en 2D et 3D"
    }
  },
  {
    "id": "v6.03.122",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.122/index.html",
    "blurb": {
      "en": "SSNP122 - Traction. Model of Rousselier in local and non-local versions",
      "fr": "SSNP122 - Traction. Modèle de Rousselier en versions locale et non locale"
    }
  },
  {
    "id": "v6.03.123",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.123/index.html",
    "blurb": {
      "en": "SSNP123 - Elastoplasticity plate",
      "fr": "SSNP123 - Plaque entaillée en élastoplasticité"
    }
  },
  {
    "id": "v6.03.124",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.124/index.html",
    "blurb": {
      "en": "SSNP124 – Drained Biaxial Test with Softening DRUCK_PRAGER Behaviour",
      "fr": "SSNP124 – Essai biaxial drainé avec un comportement DRUCK_PRAGER adoucissant"
    }
  },
  {
    "id": "v6.03.125",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.125/index.html",
    "blurb": {
      "en": "SSNP125 - test case for the validation of the INDL_ELGA option",
      "fr": "SSNP125 - Cas-test pour la validation de l'option INDL_ELGA"
    }
  },
  {
    "id": "v6.03.126",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.126/index.html",
    "blurb": {
      "en": "SSNP126 - Validation of constitutive law JOINT_BA (restraint steel- concrete) in 2D plan",
      "fr": "SSNP126 - Validation de la loi de comportement JOINT_BA (liaison acier- béton) en 2D plan"
    }
  },
  {
    "id": "v6.03.128",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.128/index.html",
    "blurb": {
      "en": "SSNP128 - Discontinuity validation of the element on a flat plate",
      "fr": "SSNP128 - Validation de l’élément à discontinuité sur une plaque plane"
    }
  },
  {
    "id": "v6.03.129",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.129/index.html",
    "blurb": {
      "en": "SSNP129 - Validation of the constitutive law regulatory BETON_REGLE_PR",
      "fr": "SSNP129 - Validation de la loi de comportement réglementaire BETON_REGLE_PR"
    }
  },
  {
    "id": "v6.03.130",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.130/index.html",
    "blurb": {
      "en": "SSNP130 - Detection of singularities in cracked plate",
      "fr": "SSNP130 - Détection des singularités dans une plaque fissurée"
    }
  },
  {
    "id": "v6.03.131",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.131/index.html",
    "blurb": {
      "en": "SSNP131 - Energy parameter identification Gp in 2D and 3D",
      "fr": "SSNP131 - Identification du paramètre énergétique Gp en 2D et en 3D"
    }
  },
  {
    "id": "v6.03.133",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.133/index.html",
    "blurb": {
      "en": "SSNP133 - Frustration of a hole plate with cohesive models",
      "fr": "SSNP133 - Fissuration d'une plaque trouée avec les modèles cohésifs"
    }
  },
  {
    "id": "v6.03.136",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.136/index.html",
    "blurb": {
      "en": "SSNP136 – Threading foundation test with Cam-Clay-type elastoplastic law",
      "fr": "SSNP136 – Test de fondation filanteavec une loi élastoplastique de type Cam-Clay"
    }
  },
  {
    "id": "v6.03.138",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.138/index.html",
    "blurb": {
      "en": "SSNP138 - 2D inclined crack with X-FEM",
      "fr": "SSNP138 - Fissure inclinée en 2D avec X-FEM"
    }
  },
  {
    "id": "v6.03.140",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.140/index.html",
    "blurb": {
      "en": "SSNP140 - Tensile test on an elastoplastic hole plane by the IMPLEX method",
      "fr": "SSNP140 - Essai de traction sur un plan troué élastoplastique par la méthode IMPLEX"
    }
  },
  {
    "id": "v6.03.143",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.143/index.html",
    "blurb": {
      "en": "SSNP143 – Validation of clavage/sawing for dam seal law",
      "fr": "SSNP143 – Validation du clavage/sciage pour la loi de joint de plot des barrages"
    }
  },
  {
    "id": "v6.03.144",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.144/index.html",
    "blurb": {
      "en": "SSNP144 – Using a cohesive zone model with the X-FEM method",
      "fr": "SSNP144 – Utilisation d'un modèle à zones cohésives avec la méthode X-FEM"
    }
  },
  {
    "id": "v6.03.145",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.145/index.html",
    "blurb": {
      "en": "SSNP145 – PRED_ELAS plasticity piloting validation",
      "fr": "SSNP145 – Validation du pilotage PRED_ELAS en plasticité"
    }
  },
  {
    "id": "v6.03.147",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.147/index.html",
    "blurb": {
      "en": "SSNP147 – Modelling of crack initiation with ENDO_HETEROGENE",
      "fr": "SSNP147 – Modélisation de l'amorçage de fissure avec le modèle ENDO_HETEROGENE"
    }
  },
  {
    "id": "v6.03.148",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.148/index.html",
    "blurb": {
      "en": "SSNP148 - Calculation of stress intensity factor by stress regularization with ENDO_HETEROGENE",
      "fr": "SSNP148 - Calcul du facteur d'intensité de contraintes par la régularisation des contraintes avec ENDO_HETEROGENE"
    }
  },
  {
    "id": "v6.03.150",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.150/index.html",
    "blurb": {
      "en": "SSNP150 – 2D contact manufactured solutions method and large deformations",
      "fr": "SSNP150 – Méthode des solutions manufacturées en contact 2D et grandes déformations"
    }
  },
  {
    "id": "v6.03.151",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.151/index.html",
    "blurb": {
      "en": "SSNP151 – Compact Tension (CT) Test in 2D and 3D with CZM_TRA_MIX law",
      "fr": "SSNP151 – Eprouvette Compact Tension (CT) en 2D et en 3D avec la loi CZM_TRA_MIX"
    }
  },
  {
    "id": "v6.03.152",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.152/index.html",
    "blurb": {
      "en": "SSNP152 – Inclusion of two crowns",
      "fr": "SSNP152 – Inclusion de deux couronnes"
    }
  },
  {
    "id": "v6.03.153",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.153/index.html",
    "blurb": {
      "en": "SSNP153 - frictional contact deformable-deformable 2D in large deformations (shallow ironing)",
      "fr": "SSNP153 - Contact frottant déformable-déformable 2D en grandes déformations (shallow ironing)"
    }
  },
  {
    "id": "v6.03.154",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.154/index.html",
    "blurb": {
      "en": "SSNP154 – Contact validation Benchmark NAFEMS 1: cylinder roller contact",
      "fr": "SSNP154 – Benchmark NAFEMS de validation du contact 1 : cylinder roller contact"
    }
  },
  {
    "id": "v6.03.156",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.156/index.html",
    "blurb": {
      "en": "SSNP156 – Contact Validation Benchmark NAFEMS 4: loaded pin",
      "fr": "SSNP156 – Benchmark NAFEMS de validation du contact 4 : loaded pin"
    }
  },
  {
    "id": "v6.03.158",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.158/index.html",
    "blurb": {
      "en": "SSNP158 – Non-linear adaptation of mesh",
      "fr": "SSNP158 – Adaptation de maillage en non-linéaire"
    }
  },
  {
    "id": "v6.03.159",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.159/index.html",
    "blurb": {
      "en": "SSNP159 – Elastic energy in large plastic deformations of a tensile bar",
      "fr": "SSNP159 – Energie élastique en grandes déformations plastiques d'un barreau en traction"
    }
  },
  {
    "id": "v6.03.160",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.160/index.html",
    "blurb": {
      "en": "SSNP160 – Hydrogen diffusion in elastoplastic steel",
      "fr": "SSNP160 – Diffusion d'hydrogène dans un acier élastoplastique"
    }
  },
  {
    "id": "v6.03.161",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.161/index.html",
    "blurb": {
      "en": "SSNP161 – Kupfer Biaxial Tests",
      "fr": "SSNP161 – Essais biaxiaux de Kupfer"
    }
  },
  {
    "id": "v6.03.162",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.162/index.html",
    "blurb": {
      "en": "SSNP162 – 2D and 3D seals for JOINT_MECA_RUPT and JOINT_MECA_FROT laws",
      "fr": "SSNP162 – Joints 2D et 3D pour les lois JOINT_MECA_RUPT et JOINT_MECA_FROT"
    }
  },
  {
    "id": "v6.03.163",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.163/index.html",
    "blurb": {
      "en": "SSNP163 – constitutive law validation of flat-stressed steels",
      "fr": "SSNP163 – Validation de la loi de comportement des aciers sous irradiations en contraintes planes"
    }
  },
  {
    "id": "v6.03.164",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.164/index.html",
    "blurb": {
      "en": "SSNP164 – 2D and 3D joints for JOINT_MECA_ENDO law",
      "fr": "SSNP164 – Joints 2D et 3D pour la loi JOINT_MECA_ENDO"
    }
  },
  {
    "id": "v6.03.165",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.165/index.html",
    "blurb": {
      "en": "SSNP165 – Ring on block",
      "fr": "SSNP165 – Ring on block"
    }
  },
  {
    "id": "v6.03.166",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.166/index.html",
    "blurb": {
      "en": "SSNP166 - Three-point bending beam",
      "fr": "SSNP166 - Poutre entaillée en flexion trois points"
    }
  },
  {
    "id": "v6.03.167",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.167/index.html",
    "blurb": {
      "en": "SSNP167 - Inclusion of two non-uniform pressurized crowns",
      "fr": "SSNP167 - Inclusion de deux couronnes sous pression non uniforme"
    }
  },
  {
    "id": "v6.03.169",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.169/index.html",
    "blurb": {
      "en": "SSNP169 – Full disk through an ununiform X-FEM interface",
      "fr": "SSNP169 – Disque plein traversé par une interface X-FEM sous pression non uniforme"
    }
  },
  {
    "id": "v6.03.170",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.170/index.html",
    "blurb": {
      "en": "SSNP170 – Taylor Patch Test",
      "fr": "SSNP170 – Patch test de Taylor"
    }
  },
  {
    "id": "v6.03.171",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.171/index.html",
    "blurb": {
      "en": "SSNP171 - Closing of a flexing crack",
      "fr": "SSNP171 - Fermeture d'une fissure en flexion"
    }
  },
  {
    "id": "v6.03.173",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.173/index.html",
    "blurb": {
      "en": "SSNP173 - Contact between two concentric spheres",
      "fr": "SSNP173 - Contact entre deux sphères concentriques"
    }
  },
  {
    "id": "v6.03.175",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.175/index.html",
    "blurb": {
      "en": "SSNP175 – Taylor Patch Test - Solution Connection",
      "fr": "SSNP175 – Patch test de Taylor - Raccord de solutions"
    }
  },
  {
    "id": "v6.03.176",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.176/index.html",
    "blurb": {
      "en": "SSNP176 – modellings D_PLAN_INCO_* type of near-incompressible elasticity",
      "fr": "SSNP176 – Modélisations de type D_PLAN_INCO_* en élasticité quasi-incompressible"
    }
  },
  {
    "id": "v6.03.178",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.178/index.html",
    "blurb": {
      "en": "SSNP178 – Cook Membrane in small plastic deformations",
      "fr": "SSNP178 – Membrane de Cook en petites déformations plastiques"
    }
  },
  {
    "id": "v6.03.179",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.179/index.html",
    "blurb": {
      "en": "SSNP179 – Cook Membrane in Large Plastic Deformities",
      "fr": "SSNP179 – Membrane de Cook en grandes déformations plastiques"
    }
  },
  {
    "id": "v6.03.180",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.180/index.html",
    "blurb": {
      "en": "SSNP180 - SCIENCE test Modelling with ENDO_LOCA_TC",
      "fr": "SSNP180 - Modélisation des essais SCIENCE avec ENDO_LOCA_TC"
    }
  },
  {
    "id": "v6.03.302",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.302/index.html",
    "blurb": {
      "en": "SSNP302 - element thermally charged - Appearance of parasitic stresses",
      "fr": "SSNP302 - Élément chargé en thermique - Apparition des contraintes parasites"
    }
  },
  {
    "id": "v6.03.303",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.303/index.html",
    "blurb": {
      "en": "SSNP303 - element in flat stress and traction - Perfect plasticity",
      "fr": "SSNP303 - Élément en contrainte plane et traction - Plasticité parfaite"
    }
  },
  {
    "id": "v6.03.305",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.305/index.html",
    "blurb": {
      "en": "SSNP305 - element compression bar - Appearing of a negative pivot",
      "fr": "SSNP305 - Élément de barre en compression - Apparition d’un pivot négatif"
    }
  },
  {
    "id": "v6.03.306",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.306/index.html",
    "blurb": {
      "en": "SSNP306 - Validation of the criterion for flaming by selective search of own values",
      "fr": "SSNP306 - Validation du critère de flambement par recherche sélective des valeurs propres"
    }
  },
  {
    "id": "v6.03.311",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.311/index.html",
    "blurb": {
      "en": "SSNP311 - Biblio_131. Fissure in mode II of an elastoplastic test piece",
      "fr": "SSNP311 - Biblio_131. Fissuration en mode II d’une éprouvette élastoplastique"
    }
  },
  {
    "id": "v6.03.312",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.312/index.html",
    "blurb": {
      "en": "SSNP312 - DMT94.132 Interface-parallel crack in bimetallic CT test piece",
      "fr": "SSNP312 - DMT94.132 Fissure parallèle à l’interface dans une éprouvette CT bimétallique"
    }
  },
  {
    "id": "v6.03.501",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.501/index.html",
    "blurb": {
      "en": "SSNP501 - Crushing of a polyurethane ring between two non-frictionable plates",
      "fr": "SSNP501 - Écrasement d'un anneau en polyuréthanne entre deux plaques indéformables sans frottement"
    }
  },
  {
    "id": "v6.03.502",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.502/index.html",
    "blurb": {
      "en": "SSNP502 - Crushing of a polyurethane ring between two non-reformable plates with friction",
      "fr": "SSNP502 - Écrasement d'un anneau en polyuréthane entre deux plaques indéformables avec frottement"
    }
  },
  {
    "id": "v6.03.504",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.504/index.html",
    "blurb": {
      "en": "SSNP504 – Large sliding contact for compliant slashes",
      "fr": "SSNP504 – Contact en grands glissements pour des fissures obliques conformes"
    }
  },
  {
    "id": "v6.03.505",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.505/index.html",
    "blurb": {
      "en": "SSNP505 - Multi-cracked bi-crack plate with X-FEM",
      "fr": "SSNP505 - Plaque multi-fissurée en bitraction-cisaillement avec X-FEM"
    }
  },
  {
    "id": "v6.03.506",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.506/index.html",
    "blurb": {
      "en": "SSNP506 – Non-linear Excentering Verification",
      "fr": "SSNP506 – Vérification de l'excentrement en non linéaire"
    }
  },
  {
    "id": "v6.03.507",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.03.507/index.html",
    "blurb": {
      "en": "SSNP507 - Stability of an undrained clay slope on the low foundation",
      "fr": "SSNP507 - Stabilité d’une pente argileuse non-drainée sur la fondation faible"
    }
  },
  {
    "id": "v6.04.102",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.102/index.html",
    "blurb": {
      "en": "SSNV102 - Tensile shear test with TAHERI model",
      "fr": "SSNV102 - Essai de traction cisaillement avec le modèle de TAHERI"
    }
  },
  {
    "id": "v6.04.103",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.103/index.html",
    "blurb": {
      "en": "SSNV103 - Swivel Model Traction Test",
      "fr": "SSNV103 - Essai de traction cisaillement modèle de Rousselier"
    }
  },
  {
    "id": "v6.04.104",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.104/index.html",
    "blurb": {
      "en": "SSNV104 - Contact of two spheres",
      "fr": "SSNV104 - Contact de deux sphères"
    }
  },
  {
    "id": "v6.04.105",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.105/index.html",
    "blurb": {
      "en": "SSNV105 - BETON_GRANGER_V model: creep test with consideration of relative humidity and ageing.",
      "fr": "SSNV105 - Modèle BETON_GRANGER_V : essai de fluage avec prise en compte de l'humidité relative et du vieillissement."
    }
  },
  {
    "id": "v6.04.106",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.106/index.html",
    "blurb": {
      "en": "SSNV106 - 2 piece screw assembly with frictional contact HPC",
      "fr": "SSNV106 - Assemblage de 2 pièces par une vis avec prise en compte du contact frottant en HPC"
    }
  },
  {
    "id": "v6.04.108",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.108/index.html",
    "blurb": {
      "en": "SSNV108 - European Robin CT-Round Test in Rupture Mechanics (1985)",
      "fr": "SSNV108 - Éprouvette CT-Round Robin Européen en Mécanique de la Rupture (1985)"
    }
  },
  {
    "id": "v6.04.109",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.109/index.html",
    "blurb": {
      "en": "SSNV109 - Evaluation of cracking time (corrosion stress initiation) by BabY (Barbier-Bystricky)",
      "fr": "SSNV109 - Évaluation du temps à fissuration (amorçage par corrosion sous contrainte) par le modèle BabY (Barbier-Bystricky)"
    }
  },
  {
    "id": "v6.04.112",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.112/index.html",
    "blurb": {
      "en": "SSNV112 - Incompressible hollow cylinder (large deformations)",
      "fr": "SSNV112 - Cylindre creux en incompressible (grandes déformations)"
    }
  },
  {
    "id": "v6.04.115",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.115/index.html",
    "blurb": {
      "en": "SSNV115 - Corrugated sheet in nonlinear behaviour",
      "fr": "SSNV115 - Tôle ondulée en comportement non linéaire"
    }
  },
  {
    "id": "v6.04.116",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.116/index.html",
    "blurb": {
      "en": "SSNV116 – POLYCRISTAL steel UMAT law – benchmark with Abaqus",
      "fr": "SSNV116 – POLYCRISTAL steel UMAT law – benchmark with Abaqus"
    }
  },
  {
    "id": "v6.04.118",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.118/index.html",
    "blurb": {
      "en": "SSNV118 - Tensile shear test with Shaboche viscoplastic model",
      "fr": "SSNV118 - Essai de traction cisaillement avec le modèle viscoplastique de Chaboche"
    }
  },
  {
    "id": "v6.04.121",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.121/index.html",
    "blurb": {
      "en": "SSNV121 - Hyper-elastic rotation and traction of a bar",
      "fr": "SSNV121 - Rotation et traction hyper-élastique d'un barreau"
    }
  },
  {
    "id": "v6.04.122",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.122/index.html",
    "blurb": {
      "en": "SSNV122 - Hyper-elastic tracker and traction of a bar",
      "fr": "SSNV122 - Rotation et traction suiveuse hyper-élastique d'un barreau"
    }
  },
  {
    "id": "v6.04.124",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.124/index.html",
    "blurb": {
      "en": "SSNV124 - Regularized limit analysis. Norton-Hoff Law",
      "fr": "SSNV124 - Analyse limite régularisée. Loi de Norton‑Hoff"
    }
  },
  {
    "id": "v6.04.126",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.126/index.html",
    "blurb": {
      "en": "SSNV126 - Anisothermal traction-relaxation test with VENDOCHAB",
      "fr": "SSNV126 - Éprouvette en traction-relaxation anisotherme avec le modèle VENDOCHAB"
    }
  },
  {
    "id": "v6.04.127",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.127/index.html",
    "blurb": {
      "en": "SSNV127 - Cylinder in a contact and friction bore",
      "fr": "SSNV127 - Cylindre dans un alésage avec contact et frottement"
    }
  },
  {
    "id": "v6.04.128",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.128/index.html",
    "blurb": {
      "en": "SSNV128 - Plate with contact and friction on a rigid plane",
      "fr": "SSNV128 - Plaque avec contact et frottement sur un plan rigide"
    }
  },
  {
    "id": "v6.04.129",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.129/index.html",
    "blurb": {
      "en": "SSNV129 - Contact of 2 plates in single support, one of which is pressure-controlled",
      "fr": "SSNV129 - Contact de 2 plaques en appui simple dont une est soumise à pression"
    }
  },
  {
    "id": "v6.04.130",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.130/index.html",
    "blurb": {
      "en": "SSNV130 –Flexible-plasticized straight pipe",
      "fr": "SSNV130 –Tuyau droit fissuré en élasto-plasticité soumis à une flexion"
    }
  },
  {
    "id": "v6.04.131",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.131/index.html",
    "blurb": {
      "en": "SSNV131 –Functured right pipe in elastic-plasticity combined loading",
      "fr": "SSNV131 –Tuyau droit fissuré en élasto-plasticité sous chargement combiné"
    }
  },
  {
    "id": "v6.04.133",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.133/index.html",
    "blurb": {
      "en": "SSNV133 - Uniaxial compression-traction. Mixed scrubbing",
      "fr": "SSNV133 - Traction-compression uniaxiale. Ecrouissage mixte"
    }
  },
  {
    "id": "v6.04.135",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.135/index.html",
    "blurb": {
      "en": "SSNV135 - Triaxial drained test with CJS (level 1)",
      "fr": "SSNV135 - Essai triaxial drainé avec le modèle CJS (niveau 1)"
    }
  },
  {
    "id": "v6.04.136",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.136/index.html",
    "blurb": {
      "en": "SSNV136 - Triaxial drained test with CJS (level 2)",
      "fr": "SSNV136 - Essai triaxial drainé avec le modèle CJS (niveau 2)"
    }
  },
  {
    "id": "v6.04.137",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.137/index.html",
    "blurb": {
      "en": "SSNV137 - Prestress cable in a concrete straight beam",
      "fr": "SSNV137 - Câble de précontrainte dans une poutre droite en béton"
    }
  },
  {
    "id": "v6.04.138",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.138/index.html",
    "blurb": {
      "en": "SSNV138 - Cantilever plate in large rotations subject to one moment",
      "fr": "SSNV138 - Plaque Cantilever en grandes rotations soumise à un moment"
    }
  },
  {
    "id": "v6.04.139",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.139/index.html",
    "blurb": {
      "en": "SSNV139 - Bias plate",
      "fr": "SSNV139 - Plaque biaise"
    }
  },
  {
    "id": "v6.04.140",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.140/index.html",
    "blurb": {
      "en": "SSNV140 - clamped cylindrical panel",
      "fr": "SSNV140 - Panneau cylindrique encastré"
    }
  },
  {
    "id": "v6.04.141",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.141/index.html",
    "blurb": {
      "en": "SSNV141 - Plucked spherical tank",
      "fr": "SSNV141 - Calotte sphérique pincée"
    }
  },
  {
    "id": "v6.04.142",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.142/index.html",
    "blurb": {
      "en": "SSNV142 - Clean creep test: Granger model",
      "fr": "SSNV142 - Essai de fluage propre : modèle Granger"
    }
  },
  {
    "id": "v6.04.143",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.143/index.html",
    "blurb": {
      "en": "SSNV143 - Biaxial Traction with constitutive law BETON_DOUBLE_DP",
      "fr": "SSNV143 - Traction biaxiale avec la loi de comportement BETON_DOUBLE_DP"
    }
  },
  {
    "id": "v6.04.144",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.144/index.html",
    "blurb": {
      "en": "SSNV144 - Flexion Cute in Large Travels",
      "fr": "SSNV144 - Coude en flexion en grands déplacements"
    }
  },
  {
    "id": "v6.04.145",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.145/index.html",
    "blurb": {
      "en": "SSNV145 - Cantilever plate in large rotations subjected to a follow-up pressure",
      "fr": "SSNV145 - Plaque cantilever en grandes rotations soumise à une pression suiveuse"
    }
  },
  {
    "id": "v6.04.146",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.146/index.html",
    "blurb": {
      "en": "SSNV146 - Regularized limit analysis. Torispheric tank",
      "fr": "SSNV146 - Analyse limite régularisée. Réservoir à fond torisphérique"
    }
  },
  {
    "id": "v6.04.147",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.147/index.html",
    "blurb": {
      "en": "SSNV147 - Traction of a damaged bar: validation of the steering",
      "fr": "SSNV147 - Traction d’un barreau endommageable : validation du pilotage"
    }
  },
  {
    "id": "v6.04.148",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.148/index.html",
    "blurb": {
      "en": "SSNV148 - 3D and landfill models of Weibull and Rice-Tracey",
      "fr": "SSNV148 - Modèles de Weibull et Rice-Tracey en 3D et en décharge"
    }
  },
  {
    "id": "v6.04.149",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.149/index.html",
    "blurb": {
      "en": "SSNV149 - ENDO_ISOT_BETON Test",
      "fr": "SSNV149 - Test de ENDO_ISOT_BETON"
    }
  },
  {
    "id": "v6.04.150",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.150/index.html",
    "blurb": {
      "en": "SSNV150 - Triaxial Traction with constitutive law BETON_DOUBLE_DP",
      "fr": "SSNV150 - Traction triaxiale avec la loi de comportement BETON_DOUBLE_DP"
    }
  },
  {
    "id": "v6.04.151",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.151/index.html",
    "blurb": {
      "en": "SSNV151 - Traction / Compression with constitutive law BETON_DOUBLE_DP",
      "fr": "SSNV151 - Traction / Compression avec la loi de comportement BETON_DOUBLE_DP"
    }
  },
  {
    "id": "v6.04.152",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.152/index.html",
    "blurb": {
      "en": "SSNV152- Elastic Traction. Calculation of Cauchy stress",
      "fr": "SSNV152- Traction élastique. Calcul des contraintes de Cauchy"
    }
  },
  {
    "id": "v6.04.153",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.153/index.html",
    "blurb": {
      "en": "SSNV153 - Contact pulley-corde",
      "fr": "SSNV153 - Contact poulie-corde"
    }
  },
  {
    "id": "v6.04.154",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.154/index.html",
    "blurb": {
      "en": "SSNV154 - Triaxial drained test with CJS (level 3)",
      "fr": "SSNV154 - Essai triaxial drainé avec le modèle CJS (niveau 3)"
    }
  },
  {
    "id": "v6.04.155",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.155/index.html",
    "blurb": {
      "en": "SSNV155 - Triaxial drained test on a turned sample at an angle of –PI/6 compared to the x axis with the CJS model (level 2)",
      "fr": "SSNV155 - Essai triaxial drainé sur un échantillon tourné d’un angle de –PI/6 par rapport à l’axe x avec le modèle CJS (niveau 2)"
    }
  },
  {
    "id": "v6.04.158",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.158/index.html",
    "blurb": {
      "en": "SSNV158 - Triaxial drained test with the Laigle model",
      "fr": "SSNV158 - Essai triaxial drainé avec le modèle de Laigle"
    }
  },
  {
    "id": "v6.04.159",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.159/index.html",
    "blurb": {
      "en": "FORMA08 - Practical work of the \\"Creation mechanics\\" formation: circular crack in mixed mode",
      "fr": "FORMA08 - Travaux pratiques de la formation « Mécanique de la rupture » : fissure circulaire en mode mixte"
    }
  },
  {
    "id": "v6.04.160",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.160/index.html",
    "blurb": {
      "en": "SSNV160 - Hydrostatic testing with CAM_CLAY, MCC and CSSM behavior models",
      "fr": "SSNV160 - Essai hydrostatique avec les modèles de comportement CAM_CLAY, MCC et CSSM"
    }
  },
  {
    "id": "v6.04.163",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.163/index.html",
    "blurb": {
      "en": "SSNV163 - Clean creep calculation with BETON_UMLV and BETON_BURGER models",
      "fr": "SSNV163 - Calcul de fluage propre avec les modèles BETON_UMLV et BETON_BURGER"
    }
  },
  {
    "id": "v6.04.164",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.164/index.html",
    "blurb": {
      "en": "SSNV164 - Tensioning of prestress cables in a 3D beam",
      "fr": "SSNV164 - Mise en tension de câbles de précontrainte dans une poutre 3D"
    }
  },
  {
    "id": "v6.04.165",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.165/index.html",
    "blurb": {
      "en": "FORMA42 - Practical work of the Civil Engineering training: tensioning a variable section prestressed beam",
      "fr": "FORMA42 - Travaux pratiques de la formation « Génie Civil » : mise en tension d'une poutre précontrainte à section variable"
    }
  },
  {
    "id": "v6.04.166",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.166/index.html",
    "blurb": {
      "en": "SSNV166 – Cylinder cracked under multiple loadings",
      "fr": "SSNV166 – Cylindre fissuré sous chargements multiples"
    }
  },
  {
    "id": "v6.04.167",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.167/index.html",
    "blurb": {
      "en": "SSNV167 – Contact for Quadratic elements",
      "fr": "SSNV167 – Contact pour les éléments quadratiques"
    }
  },
  {
    "id": "v6.04.168",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.168/index.html",
    "blurb": {
      "en": "SSNV168 – Triaxial drained test with softening DRUCK_PRAGER behavior",
      "fr": "SSNV168 – Essai triaxial drainé avec un comportement DRUCK_PRAGER adoucissant"
    }
  },
  {
    "id": "v6.04.169",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.169/index.html",
    "blurb": {
      "en": "SSNV169 - Fluid coupling – damage",
      "fr": "SSNV169 - Couplage fluage – endommagement"
    }
  },
  {
    "id": "v6.04.170",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.170/index.html",
    "blurb": {
      "en": "SSNV170 - Elasto-viscoplastic single tensile cube (constant deformation speed)",
      "fr": "SSNV170 - Cube élasto-viscoplastique en traction simple (vitesse de déformation constante)"
    }
  },
  {
    "id": "v6.04.171",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.171/index.html",
    "blurb": {
      "en": "SSNV171 – Intercomparison of behaviors MONOCRISTAL AND POLYCRISTAL",
      "fr": "SSNV171 – Inter-comparaison des comportements MONOCRISTAL ET POLYCRISTAL"
    }
  },
  {
    "id": "v6.04.172",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.172/index.html",
    "blurb": {
      "en": "SSNV172 – Single crystal viscoplastic behaviors",
      "fr": "SSNV172 – Comportements viscoplastiques monocristallins"
    }
  },
  {
    "id": "v6.04.173",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.173/index.html",
    "blurb": {
      "en": "SSNV173 – Bar cracked with X-FEM",
      "fr": "SSNV173 – Barreau fissuré avec X-FEM"
    }
  },
  {
    "id": "v6.04.174",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.174/index.html",
    "blurb": {
      "en": "SSNV174 - Consideration of endogenous withdrawal and desiccation removal in BETON_UMLV and BETON_BURGER models",
      "fr": "SSNV174 - Prise en compte du retrait endogène et du retrait de dessiccation dans les modèles BETON_UMLV et BETON_BURGER"
    }
  },
  {
    "id": "v6.04.176",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.176/index.html",
    "blurb": {
      "en": "SSNV176 – Law Identification ENDO_ORTH_BETON",
      "fr": "SSNV176 – Identification de la loi ENDO_ORTH_BETON"
    }
  },
  {
    "id": "v6.04.177",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.177/index.html",
    "blurb": {
      "en": "SSNV177 - Willam Test with ENDO_ORTH_BETON Law",
      "fr": "SSNV177 - Test de Willam avec la loi ENDO_ORTH_BETON"
    }
  },
  {
    "id": "v6.04.178",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.178/index.html",
    "blurb": {
      "en": "SSNV178 – Cylinder with pressure-reinforced frame",
      "fr": "SSNV178 – Cylindre avec armature sous pression"
    }
  },
  {
    "id": "v6.04.179",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.179/index.html",
    "blurb": {
      "en": "SSNV179 - Fluid Cube via LEMA_SEUIL Law",
      "fr": "SSNV179 - Cube sous fluage via la loi LEMA_SEUIL"
    }
  },
  {
    "id": "v6.04.180",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.180/index.html",
    "blurb": {
      "en": "SSNV180 - Taking into account thermal expansion and drying creep in BETON_UMLV and BETON_BURGER models",
      "fr": "SSNV180 - Prise en compte de la dilatation thermique et du fluage de dessiccation dans les modèles BETON_UMLV et BETON_BURGER"
    }
  },
  {
    "id": "v6.04.181",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.181/index.html",
    "blurb": {
      "en": "SSNV181 - Checking the correct account of shear in BETON_UMLV and BETON_BURGER models",
      "fr": "SSNV181 - Vérification de la bonne prise en compte du cisaillement dans les modèles BETON_UMLV et BETON_BURGER"
    }
  },
  {
    "id": "v6.04.182",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.182/index.html",
    "blurb": {
      "en": "SSNV182 – Block with frictional contact interface with X-FEM",
      "fr": "SSNV182 – Bloc avec interface en contact frottant avec X-FEM"
    }
  },
  {
    "id": "v6.04.183",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.183/index.html",
    "blurb": {
      "en": "SSNV183 - Fluid test with VENDOCHAB",
      "fr": "SSNV183 - Essai de fluage avec le modèle VENDOCHAB"
    }
  },
  {
    "id": "v6.04.184",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.184/index.html",
    "blurb": {
      "en": "SSNV184 - Triaxial test with modified Hoek-Brown model",
      "fr": "SSNV184 - Essai triaxial avec le modèle de Hoek-Brown modifié"
    }
  },
  {
    "id": "v6.04.186",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.186/index.html",
    "blurb": {
      "en": "SSNV186 – LBB condition and frictional contact with X-FEM",
      "fr": "SSNV186 – LBB condition et contact frottant avec X-FEM"
    }
  },
  {
    "id": "v6.04.187",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.187/index.html",
    "blurb": {
      "en": "SSNV187 - Validation of ELAS_HYPER Law on a Cube",
      "fr": "SSNV187 - Validation de la loi ELAS_HYPER sur un cube"
    }
  },
  {
    "id": "v6.04.189",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.189/index.html",
    "blurb": {
      "en": "SSNV189 - Validation of ELAS_HYPER law on a tab",
      "fr": "SSNV189 - Validation de la loi ELAS_HYPER sur une languette"
    }
  },
  {
    "id": "v6.04.191",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.191/index.html",
    "blurb": {
      "en": "SSNV191 – Validation of Neumann conditions with X-FEM in 2D and 3D",
      "fr": "SSNV191 – Validation des conditions de Neumann avec X-FEM en 2D et 3D"
    }
  },
  {
    "id": "v6.04.193",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.193/index.html",
    "blurb": {
      "en": "SSNV193 – Contact with static macroelements",
      "fr": "SSNV193 – Contact avec macro-élements statiques"
    }
  },
  {
    "id": "v6.04.195",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.195/index.html",
    "blurb": {
      "en": "SSNV195 - Multi-crack bar with X-FEM",
      "fr": "SSNV195 - Barreau en multi-fissuration avec X-FEM"
    }
  },
  {
    "id": "v6.04.196",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.196/index.html",
    "blurb": {
      "en": "SSNV196 – 3D bending beam (elements HEXA8 stabilized under-integrated)",
      "fr": "SSNV196 – Poutre 3D en flexion (éléments HEXA8 sous-intégrés stabilisés)"
    }
  },
  {
    "id": "v6.04.197",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.197/index.html",
    "blurb": {
      "en": "SSNV197 - Drained triaxials with Hujeux law",
      "fr": "SSNV197 - Triaxiaux drainés avec la loi de Hujeux"
    }
  },
  {
    "id": "v6.04.198",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.198/index.html",
    "blurb": {
      "en": "SSNV198 – Dirichlet conditions with X-FEM in 3D",
      "fr": "SSNV198 – Conditions de Dirichlet avec X-FEM en 3D"
    }
  },
  {
    "id": "v6.04.200",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.200/index.html",
    "blurb": {
      "en": "SSNV200 - Tensile shear test with VISC_TAHERI",
      "fr": "SSNV200 - Essai de traction cisaillement avec le modèle VISC_TAHERI"
    }
  },
  {
    "id": "v6.04.201",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.201/index.html",
    "blurb": {
      "en": "SSNV201 – Block with slide contact interface with X-FEM",
      "fr": "SSNV201 – Bloc avec interface en contact glissière avec X-FEM"
    }
  },
  {
    "id": "v6.04.202",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.202/index.html",
    "blurb": {
      "en": "SSNV202 – Drained oedometric test with CAM_CLAY and MCC behavior models",
      "fr": "SSNV202 – Essai œdométrique drainé avec les modèles de comportement CAM_CLAY et MCC"
    }
  },
  {
    "id": "v6.04.203",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.203/index.html",
    "blurb": {
      "en": "SSNV203 – Application of lip pressure of crack with X-FEM",
      "fr": "SSNV203 – Application d’une pression sur les lèvres d’une fissure avec X-FEM"
    }
  },
  {
    "id": "v6.04.204",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.204/index.html",
    "blurb": {
      "en": "SSNV204 – Isotropic cyclic drained compression test on sand d",
      "fr": "SSNV204 – Test de compression isotrope drainé cyclique sur sable d’Hostun"
    }
  },
  {
    "id": "v6.04.205",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.205/index.html",
    "blurb": {
      "en": "SSNV205 – Constant isotropic pressure drained cyclic shear test",
      "fr": "SSNV205 – Essai de cisaillement cyclique drainé à pression isotrope constante"
    }
  },
  {
    "id": "v6.04.206",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.206/index.html",
    "blurb": {
      "en": "SSNV206 - Triaxial test: LETK, LKR and NLH_CSRM models",
      "fr": "SSNV206 - Essai triaxial : modèles LETK, LKR et NLH_CSRM"
    }
  },
  {
    "id": "v6.04.207",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.207/index.html",
    "blurb": {
      "en": "SSNV207 – Cyclic shear test including micro-discharges",
      "fr": "SSNV207 – Essai de cisaillement cyclique incluant des micro-décharges"
    }
  },
  {
    "id": "v6.04.208",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.208/index.html",
    "blurb": {
      "en": "SSNV208 – Drained Biaxial Test with Hujeux Law",
      "fr": "SSNV208 – Essai biaxial drainé avec la loi de Hujeux"
    }
  },
  {
    "id": "v6.04.210",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.210/index.html",
    "blurb": {
      "en": "SSNV210 – Drained shear test with Hujeux law",
      "fr": "SSNV210 – Essai de cisaillement drainé avec la loi de Hujeux"
    }
  },
  {
    "id": "v6.04.211",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.211/index.html",
    "blurb": {
      "en": "SSNV211 - Drained triaxial test with VISC_DRUC_PRAG",
      "fr": "SSNV211 - Essai triaxial drainé avec le modèle VISC_DRUC_PRAG"
    }
  },
  {
    "id": "v6.04.214",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.214/index.html",
    "blurb": {
      "en": "SSNV214 - constitutive law BETON_RAG: cyclic loading of a concrete test piece",
      "fr": "SSNV214 - Loi de comportement BETON_RAG : chargement cyclique d’une éprouvette en béton"
    }
  },
  {
    "id": "v6.04.215",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.215/index.html",
    "blurb": {
      "en": "SSNV215 - constitutive law BETON_RAG: rotation test of the main directions",
      "fr": "SSNV215 - Loi de comportement BETON_RAG : test de rotation des directions principales"
    }
  },
  {
    "id": "v6.04.217",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.217/index.html",
    "blurb": {
      "en": "SSNV217 - Single Traction Cube and Compression with ENDO_ORTH_BETON Law",
      "fr": "SSNV217 - Cube en traction simple et compression avec la loi ENDO_ORTH_BETON"
    }
  },
  {
    "id": "v6.04.218",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.218/index.html",
    "blurb": {
      "en": "SSNV218 – Calculation of the energy parameter Gp in 3D",
      "fr": "SSNV218 – Calcul du paramètre énergétique Gp en 3D"
    }
  },
  {
    "id": "v6.04.219",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.219/index.html",
    "blurb": {
      "en": "SSNV219 – 3D contact manufactured solutions method and large deformations",
      "fr": "SSNV219 – Méthode des solutions manufacturées en contact 3D et grandes déformations"
    }
  },
  {
    "id": "v6.04.221",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.221/index.html",
    "blurb": {
      "en": "SSNV221 – Hydrostatic test with linear and parabolic DRUCK_PRAGER behavior",
      "fr": "SSNV221 – Essai hydrostatique avec un comportement DRUCK_PRAGER linéaire et parabolique"
    }
  },
  {
    "id": "v6.04.222",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.222/index.html",
    "blurb": {
      "en": "FORMA04 - Practical work of the \\"Advanced use\\" training: Hertz contact",
      "fr": "FORMA04 - Travaux pratiques de la formation « Utilisation avancée » : contact de Hertz"
    }
  },
  {
    "id": "v6.04.223",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.223/index.html",
    "blurb": {
      "en": "SSNV223 - Basic ENDO_SCALAIRE Law and PRED_ELAS Modelling Pilotage Validation",
      "fr": "SSNV223 - Validation élémentaire de la loi ENDO_SCALAIRE et du pilotage PRED_ELAS pour la modélisation GRAD_VARI"
    }
  },
  {
    "id": "v6.04.225",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.225/index.html",
    "blurb": {
      "en": "SSNV225 – constitutive law HAYHURST: creep test",
      "fr": "SSNV225 – Loi de comportement HAYHURST : test de fluage"
    }
  },
  {
    "id": "v6.04.226",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.226/index.html",
    "blurb": {
      "en": "SSNV226 – Validation of Critical Stress Break criteria",
      "fr": "SSNV226 – Validation du critère de rupture en contrainte critique"
    }
  },
  {
    "id": "v6.04.228",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.228/index.html",
    "blurb": {
      "en": "SSNV228 – Pre-voltage of a stud",
      "fr": "SSNV228 – Mise en pré-tension d’un goujon"
    }
  },
  {
    "id": "v6.04.229",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.229/index.html",
    "blurb": {
      "en": "SSNV229 - Validation of ETCC formulas in DEFI_CABLE_BP and failure of a cable",
      "fr": "SSNV229 - Validation des formules ETCC dans DEFI_CABLE_BPet de la rupture d’un câble"
    }
  },
  {
    "id": "v6.04.230",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.230/index.html",
    "blurb": {
      "en": "SSNV230 - Validation of the constitutive law of 300 steels under 3D irradiation",
      "fr": "SSNV230 - Validation de la loi de comportement des aciers 300 sous irradiations en 3D"
    }
  },
  {
    "id": "v6.04.231",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.231/index.html",
    "blurb": {
      "en": "SSNV231 – Internal pressure hollow sphere in large deformations",
      "fr": "SSNV231 – Sphère creuse sous pression interne en grandes déformations"
    }
  },
  {
    "id": "v6.04.232",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.232/index.html",
    "blurb": {
      "en": "SSNV232 – Triaxial drained test with MOHR_COULOMB and MohrCoulombAS laws",
      "fr": "SSNV232 – Essai triaxial drainé avec les lois MOHR_COULOMB et MohrCoulombAS"
    }
  },
  {
    "id": "v6.04.233",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.233/index.html",
    "blurb": {
      "en": "SSNV233 – Torsion test with Mohr-Coulomb law",
      "fr": "SSNV233 – Essai de torsion avec la loi de Mohr-Coulomb"
    }
  },
  {
    "id": "v6.04.234",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.234/index.html",
    "blurb": {
      "en": "SSNV234 - Basic ENDO_FISS_EXP Law and PRED_ELAS Modelling Pilotage Validation",
      "fr": "SSNV234 - Validation élémentaire de la loi ENDO_FISS_EXP et du pilotage PRED_ELAS pour la modélisation GRAD_VARI"
    }
  },
  {
    "id": "v6.04.244",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.244/index.html",
    "blurb": {
      "en": "SSNV244 - constitutive law FLUA_PORO_BETON, ENDO_PORO_BETON, FLUA_ENDO_PORO et RGI_BETON",
      "fr": "SSNV244 - Loi de comportement FLUA_PORO_BETON, ENDO_PORO_BETON, FLUA_ENDO_PORO et RGI_BETON"
    }
  },
  {
    "id": "v6.04.245",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.245/index.html",
    "blurb": {
      "en": "SSNV245 - Imposition of Dirichlet conditions on elements XFEM Heaviside using a space function",
      "fr": "SSNV245 - Imposition de conditions de Dirichlet sur des éléments XFEM Heaviside à l'aide d'une fonction de l'espace"
    }
  },
  {
    "id": "v6.04.246",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.246/index.html",
    "blurb": {
      "en": "SSNV246 - Application of a pressure distributed over the lips of a XFEM curved interface through a column",
      "fr": "SSNV246 - Application d'une pression répartie sur les lèvres d'une interface XFEM courbe traversant une colonne"
    }
  },
  {
    "id": "v6.04.247",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.247/index.html",
    "blurb": {
      "en": "SSNV247 - Application of a pressure distributed over the lips of a curved XFEM interface through a spherical cap",
      "fr": "SSNV247 - Application d'une pression répartie sur les lèvres d'une interface XFEM courbe traversant une calotte sphérique"
    }
  },
  {
    "id": "v6.04.250",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.250/index.html",
    "blurb": {
      "en": "SSNV250 – Basic validation of the GTN damage law in the xisymetric case",
      "fr": "SSNV250 – Validation élémentaire de la loi d'endommagement GTN dans le cas a xisymétrique"
    }
  },
  {
    "id": "v6.04.251",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.251/index.html",
    "blurb": {
      "en": "SSNV25 1 – Basic validation of GTN flat deformation damage law with simulations of a element volume in dual-axial traction e",
      "fr": "SSNV25 1 – Validation élémentaire de la loi d'endommagement GTN en déformation plane avec des simulation s d'un élément volume en traction biaxial e"
    }
  },
  {
    "id": "v6.04.252",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.252/index.html",
    "blurb": {
      "en": "SSNV25 2 – Basic validation of GTN flat deformation damage law with simulations of a element single shear volume",
      "fr": "SSNV25 2 – Validation élémentaire de la loi d'endommagement GTN en déformation plane avec des simulations d'un élément volume en cisaillement simple"
    }
  },
  {
    "id": "v6.04.253",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.253/index.html",
    "blurb": {
      "en": "SSNV25 3 – Basic validation of GTN flat deformation damage law with element pure shear volume simulations",
      "fr": "SSNV25 3 – Validation élémentaire de la loi d'endommagement GTN en déformation plane avec des simulations d'un élément volume en cisaillement pur"
    }
  },
  {
    "id": "v6.04.254",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.254/index.html",
    "blurb": {
      "en": "SSNV25 4 – Basic validation of GTN flat deformation damage law with simulations of a single element volume traction",
      "fr": "SSNV25 4 – Validation élémentaire de la loi d'endommagement GTN en déformation plane avec des simulations d'un élément volume en traction simple"
    }
  },
  {
    "id": "v6.04.255",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.255/index.html",
    "blurb": {
      "en": "SSNV25 5 – Validation of GTN gradient damage law with flat deformation bar simulations",
      "fr": "SSNV25 5 – Validation de la loi d'endommagement GTN à gradient avec des simulations d'unbarreau en déformations planes"
    }
  },
  {
    "id": "v6.04.256",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.256/index.html",
    "blurb": {
      "en": "SSNV25 6 – Validation of GTN gradient damage law with axisymmetric bar simulations",
      "fr": "SSNV25 6 – Validation de la loi d'endommagement GTN à gradient avec des simulations d'un barreau en axisymétrique"
    }
  },
  {
    "id": "v6.04.259",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.259/index.html",
    "blurb": {
      "en": "SSNV259– Circular crack in a solid cylinder under tension",
      "fr": "SSNV259– Circular crack in a solid cylinder under tension"
    }
  },
  {
    "id": "v6.04.261",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.261/index.html",
    "blurb": {
      "en": "SSNV261 – Tensile ENDO_LOCA_EXP behavior – contained uniaxial compression",
      "fr": "SSNV261 – Comportement ENDO_LOCA_EXP en traction – compression uniaxiale confinée"
    }
  },
  {
    "id": "v6.04.262",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.262/index.html",
    "blurb": {
      "en": "SSNV262 – Validation of viscous regularization REGU_VISC by viscoelastic simulation",
      "fr": "SSNV262 – Validation de la régularisation visqueuse REGU_VISC par simulation viscoélastique"
    }
  },
  {
    "id": "v6.04.263",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.263/index.html",
    "blurb": {
      "en": "SSNV263 – Non-linear isotropic plasticity VMIS_ISOT_NL under triaxial loading and shearing",
      "fr": "SSNV263 – Plasticité à écrouissage isotrope non linéaire VMIS_ISOT_NL sous chargement triaxial et cisaillement"
    }
  },
  {
    "id": "v6.04.264",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.264/index.html",
    "blurb": {
      "en": "SSNV264 – Non-linear isotropic hardening viscoplasticity VISC_ISOT_NL under triaxial loading and shearing",
      "fr": "SSNV264 – Viscoplasticité à écrouissage isotrope non linéaire VISC_ISOT_NL sous chargement triaxial et cisaillement"
    }
  },
  {
    "id": "v6.04.265",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.265/index.html",
    "blurb": {
      "en": "SSNV265 – GTN model: germination under deviator loading",
      "fr": "SSNV265 – Modèle GTN : germination sous chargement déviatorique"
    }
  },
  {
    "id": "v6.04.266",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.266/index.html",
    "blurb": {
      "en": "SSNV266 – Validation of the GTN gradient viscoplastic damage law with bar simulations",
      "fr": "SSNV266 – Validation de la loi d'endommagement GTN viscoplastique à gradient avec des simulations d'un barreau"
    }
  },
  {
    "id": "v6.04.267",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.267/index.html",
    "blurb": {
      "en": "SSNV267 – Multiaxial request for KICHENIN_NL law: viscoelastic part",
      "fr": "SSNV267 – Sollicitation multiaxiale de la loi KICHENIN_NL : partie viscoélastique"
    }
  },
  {
    "id": "v6.04.268",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.268/index.html",
    "blurb": {
      "en": "SSNV268 – Multiaxial request for KICHENIN_NL law: plastic part",
      "fr": "SSNV268 – Sollicitation multiaxiale de la loi KICHENIN_NL : partie plastique"
    }
  },
  {
    "id": "v6.04.269",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.269/index.html",
    "blurb": {
      "en": "SSNV269 – Law validationRGI_BETON_BA: Cyclical loading of a concrete test piece",
      "fr": "SSNV269 – Validation de la loiRGI_BETON_BA : Chargement cyclique d’une éprouvette en béton"
    }
  },
  {
    "id": "v6.04.272",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.272/index.html",
    "blurb": {
      "en": "SSNV272 - Tensile test - homogeneous and confined compression, without viscosity",
      "fr": "SSNV272 - Essai de traction - compression homogène et confinée, sans viscosité"
    }
  },
  {
    "id": "v6.04.273",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.273/index.html",
    "blurb": {
      "en": "SSNV273 - Uniform and confined traction test, with viscosity",
      "fr": "SSNV273 - Essai de traction homogène et confinée, avec viscosité"
    }
  },
  {
    "id": "v6.04.301",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.301/index.html",
    "blurb": {
      "en": "SSNV301 - Rotating cylindrical ring subjected to thermal shock and internal pressure – Von Mises (isotropic scrubbing)",
      "fr": "SSNV301 - Anneau cylindrique en rotation soumis à un choc thermique et à une pression interne – Von Mises (Écrouissage isotrope)"
    }
  },
  {
    "id": "v6.04.302",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.302/index.html",
    "blurb": {
      "en": "SSNV302 – Nonlinear clamped beam",
      "fr": "SSNV302 – Poutre encastrée non-linéaire"
    }
  },
  {
    "id": "v6.04.303",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.303/index.html",
    "blurb": {
      "en": "SSNV303 – Nonlinear clamped beam",
      "fr": "SSNV303 – Poutre encastrée non-linéaire"
    }
  },
  {
    "id": "v6.04.400",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.400/index.html",
    "blurb": {
      "en": "SSNV400 – constitutive law BETON_RAG Check: Damageable mechanical",
      "fr": "SSNV400 – Vérification de la loi de comportement BETON_RAG : mécanique endommageable"
    }
  },
  {
    "id": "v6.04.401",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.401/index.html",
    "blurb": {
      "en": "SSNV401 – constitutive law BETON_RAG and BETON_BURGER verification: creep phenomenon",
      "fr": "SSNV401 – Vérification de la loi de comportement BETON_RAG et BETON_BURGER : phénomène de fluage"
    }
  },
  {
    "id": "v6.04.402",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.402/index.html",
    "blurb": {
      "en": "SSNV402 – constitutive law BETON_RAG verification: phenomena coupling",
      "fr": "SSNV402 – Vérification de la loi de comportement BETON_RAG : couplage des phénomènes"
    }
  },
  {
    "id": "v6.04.501",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.501/index.html",
    "blurb": {
      "en": "SSNV501 – Stamping of a sheet metal by a hemispheric punch (Wagonner test)",
      "fr": "SSNV501 – Emboutissage d'une tôle par un poinçon hémisphérique (test de Wagonner)"
    }
  },
  {
    "id": "v6.04.503",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.503/index.html",
    "blurb": {
      "en": "SSNV503 - slider slippery on a rigid plane",
      "fr": "SSNV503 - Patin glissant sur un plan rigide"
    }
  },
  {
    "id": "v6.04.504",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.504/index.html",
    "blurb": {
      "en": "SSNV504 - Extrusion of a lopin",
      "fr": "SSNV504 - Extrusion d'un lopin"
    }
  },
  {
    "id": "v6.04.506",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.506/index.html",
    "blurb": {
      "en": "SSNV506 - Elasto-plastic indentation of a block by an elastic spherical indenter",
      "fr": "SSNV506 - Indentation élasto-plastique d'un bloc par un indenteur sphérique élastique"
    }
  },
  {
    "id": "v6.04.508",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.508/index.html",
    "blurb": {
      "en": "SSNV508 – Flat-stressed block with interface, traction and side compression, for quadratic elements X-FEM",
      "fr": "SSNV508 – Bloc en contraintes planes avec interface, en traction et compression latérale, pour éléments X-FEM quadratiques"
    }
  },
  {
    "id": "v6.04.509",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.509/index.html",
    "blurb": {
      "en": "SSNV509 – frictional contact chain with quadratic X- FEM",
      "fr": "SSNV509 – Chaînette en contact frottant avec X- FEM quadratiques"
    }
  },
  {
    "id": "v6.04.510",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.510/index.html",
    "blurb": {
      "en": "SSNV510 - Uniaxial compression of a multi-fissed block",
      "fr": "SSNV510 - Compression uniaxiale d'un bloc multi-fissuré"
    }
  },
  {
    "id": "v6.04.511",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.511/index.html",
    "blurb": {
      "en": "SSNV511 – Block cut by two intersect interfaces with X-FEM",
      "fr": "SSNV511 – Bloc découpé par deux interfaces intersectées avec X-FEM"
    }
  },
  {
    "id": "v6.04.512",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.512/index.html",
    "blurb": {
      "en": "SSNV512 – Block cut by a vertical crack connecting between 2 horizontal cracks with X-FEM",
      "fr": "SSNV512 – Bloc découpé par une fissure verticale se branchant entre 2 fissures horizontales avec X-FEM"
    }
  },
  {
    "id": "v6.04.513",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.513/index.html",
    "blurb": {
      "en": "SSNV513 – Block cut by three interfaces sequentially plugging with X-FEM",
      "fr": "SSNV513 – Bloc découpé par trois interfaces se branchant séquentiellement avec X-FEM"
    }
  },
  {
    "id": "v6.04.515",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.515/index.html",
    "blurb": {
      "en": "SSNV515 – Traction test with Rankine law",
      "fr": "SSNV515 – Essai de traction avec la loi de Rankine"
    }
  },
  {
    "id": "v6.04.518",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.518/index.html",
    "blurb": {
      "en": "SSNV518 - Modelling a relaxation trial with visco-hyperelastic law (ELAS_HYPER_VISC)",
      "fr": "SSNV518 - Modélisation d'un essai de relaxation avec la loi visco-hyper-élastique (ELAS_HYPER_VISC)"
    }
  },
  {
    "id": "v6.04.519",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.519/index.html",
    "blurb": {
      "en": "SSNV519 - Modelling a creep test with visco-hyper-elastic law (ELAS_HYPER_VISC)",
      "fr": "SSNV519 - Modélisation d'un essai de fluage avec la loi visco-hyper-élastique (ELAS_HYPER_VISC)"
    }
  },
  {
    "id": "v6.04.520",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.04.520/index.html",
    "blurb": {
      "en": "SSNV520 - Modelling a compression test with HILL hyperelastic law (HYPER_HILL)",
      "fr": "SSNV520 - Modélisation d'un essai de compression avec la loi hyperélastique de HILL (HYPER_HILL)"
    }
  },
  {
    "id": "v6.05.100",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.05.100/index.html",
    "blurb": {
      "en": "SSNS100 - Non-linear behaviour of a thermally loaded rebar",
      "fr": "SSNS100 - Comportement non linéaire d’une nappe d’armatures sous chargement thermique"
    }
  },
  {
    "id": "v6.05.105",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.05.105/index.html",
    "blurb": {
      "en": "SSNS105 – Non-linear behaviour of a rebar table",
      "fr": "SSNS105 – Comportement non linéaire d'une nappe d'armatures"
    }
  },
  {
    "id": "v6.05.106",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.05.106/index.html",
    "blurb": {
      "en": "SSNS106 – Degradation of a reinforced concrete plate under various stresses with global laws GLRC_DM and DHRC",
      "fr": "SSNS106 – Dégradation d’une plaque en béton armé sous sollicitations variées avec les lois globales GLRC_DM et DHRC"
    }
  },
  {
    "id": "v6.05.107",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.05.107/index.html",
    "blurb": {
      "en": "SSNS107 – Cylinder with pressure-rebar",
      "fr": "SSNS107 – Cylindre avec armatures sous pression"
    }
  },
  {
    "id": "v6.05.108",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.05.108/index.html",
    "blurb": {
      "en": "SSNS108 – Simulation of SAFE Test by Progressive Push",
      "fr": "SSNS108 – Simulation de l'essai SAFE par la poussée progressive"
    }
  },
  {
    "id": "v6.05.109",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.05.109/index.html",
    "blurb": {
      "en": "SSNS109 – shear force-subposed console beam",
      "fr": "SSNS109 – Poutre console soumise à un effort tranchant"
    }
  },
  {
    "id": "v6.05.110",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.05.110/index.html",
    "blurb": {
      "en": "SSNS110 – Extraction of a rebar table represented by a membrane",
      "fr": "SSNS110 – Extraction d'une nappe d'armature représentée par une membrane"
    }
  },
  {
    "id": "v6.05.112",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.05.112/index.html",
    "blurb": {
      "en": "SSNS112 – Compression test and alternating traction of a reinforced concrete pole",
      "fr": "SSNS112 – Essai de compression et traction alternée d’un poteau de béton armé"
    }
  },
  {
    "id": "v6.05.114",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.05.114/index.html",
    "blurb": {
      "en": "SSNS114 – Degradation of a reinforced concrete plate under various stresses with BETON_REGLE_PR law",
      "fr": "SSNS114 – Dégradation d’une plaque en béton armé sous sollicitations variées avec la loi BETON_REGLE_PR"
    }
  },
  {
    "id": "v6.05.115",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.05.115/index.html",
    "blurb": {
      "en": "SSNS115 - Swelling of a flexible membrane",
      "fr": "SSNS115 - Gonflement d’une membrane souple"
    }
  },
  {
    "id": "v6.05.116",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.05.116/index.html",
    "blurb": {
      "en": "SSNS116 – Soft membrane under clean weight",
      "fr": "SSNS116 – Membrane souple sous poids propre"
    }
  },
  {
    "id": "v6.05.501",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.05.501/index.html",
    "blurb": {
      "en": "SSNS501 - Large displacements of a cylindrical panel simply supported",
      "fr": "SSNS501 - Grands déplacements d’un panneau cylindrique simplement supporté"
    }
  },
  {
    "id": "v6.06.101",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.06.101/index.html",
    "blurb": {
      "en": "SSNX101 – Non-linear loading pilot",
      "fr": "SSNX101 – Pilotage du chargement en non-linéaire"
    }
  },
  {
    "id": "v6.06.102",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.06.102/index.html",
    "blurb": {
      "en": "SSNX102 - element 3D_INTERF_POU Calculation Options",
      "fr": "SSNX102 - Options de calcul de l'élément 3D_INTERF_POU"
    }
  },
  {
    "id": "v6.06.103",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.06.103/index.html",
    "blurb": {
      "en": "SSNX103 - SP_* behaviors for elements 3D_INTERF_POU",
      "fr": "SSNX103 - Comportements SP_* pour les éléments 3D_INTERF_POU"
    }
  },
  {
    "id": "v6.06.200",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.06.200/index.html",
    "blurb": {
      "en": "CONT200 - Projection-intersection for beam-launch pairing for linear 2D mesh cells",
      "fr": "CONT200 - Projection-intersection pour l'appariement par lancer de rayon pour des mailles linéaires en 2D"
    }
  },
  {
    "id": "v6.06.201",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.06.201/index.html",
    "blurb": {
      "en": "CONT201 - Projection-intersection for 3D linear mesh cells beam matching",
      "fr": "CONT201 - Projection-intersection pour l'appariement par lancer de rayon pour des mailles linéaires en 3D"
    }
  },
  {
    "id": "v6.06.202",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.06.202/index.html",
    "blurb": {
      "en": "CONT202 - 3D mortar pairing for two slightly offset screw cubes",
      "fr": "CONT202 - Appariement 3D mortar pour deux cubes en vis-à-vis légèrement décalés"
    }
  },
  {
    "id": "v6.06.203",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.06.203/index.html",
    "blurb": {
      "en": "CONT203 - 2D mortar pairing for two squares in vis-à-vis slightly offset",
      "fr": "CONT203 - Appariement 2D mortar pour deux carrés en vis-à-vis légèrement décalés"
    }
  },
  {
    "id": "v6.06.204",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.06.204/index.html",
    "blurb": {
      "en": "CONT204 - 2D mortar pairing for two slightly offset screw circles",
      "fr": "CONT204 - Appariement 2D mortar pour deux cercles en vis-à-vis légèrement décalés"
    }
  },
  {
    "id": "v6.06.205",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.06.205/index.html",
    "blurb": {
      "en": "CONT205 - 3D mortar pairing for a sphere above a paved",
      "fr": "CONT205 - Appariement 3D mortar pour une sphère au dessus d'un pavé"
    }
  },
  {
    "id": "v6.06.206",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.06.206/index.html",
    "blurb": {
      "en": "CONT206 - 3D mortar pairing between two spheres",
      "fr": "CONT206 - Appariement 3D mortar entre deux sphères"
    }
  },
  {
    "id": "v6.07.101",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.07.101/index.html",
    "blurb": {
      "en": "COMP001 – Test for elasto-plastic behavior. Simulation in one point hardware",
      "fr": "COMP001 – Test de comportements élasto-plastiques. Simulation en un point matériel"
    }
  },
  {
    "id": "v6.07.102",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.07.102/index.html",
    "blurb": {
      "en": "COMP002 – Visco-elastic-plastic behavior test. Simulation in one point hardware",
      "fr": "COMP002 – Test de comportements visco-élasto-plastiques. Simulation en un point matériel"
    }
  },
  {
    "id": "v6.07.103",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.07.103/index.html",
    "blurb": {
      "en": "COMP003 – Test of concrete-specific behaviors. Simulation in one point hardware",
      "fr": "COMP003 – Test de comportements spécifiques aux bétons. Simulation en un point matériel"
    }
  },
  {
    "id": "v6.07.104",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.07.104/index.html",
    "blurb": {
      "en": "COMP004 - constitutive law VISC_ISOT_PLAS applied to a hardware point",
      "fr": "COMP004 - Loi de comportement VISC_ISOT_PLAS appliquée à un point matériel"
    }
  },
  {
    "id": "v6.07.105",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.07.105/index.html",
    "blurb": {
      "en": "COMP005 – Validation of GRAD_VARI formulations with ENDO_ISOT_BETON law",
      "fr": "COMP005 – Validation des formulations GRAD_VARI avec la loi ENDO_ISOT_BETON"
    }
  },
  {
    "id": "v6.07.107",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.07.107/index.html",
    "blurb": {
      "en": "COMP007 – Thermomechanical validation of nonlinear elastic laws (COMPORTEMENT)",
      "fr": "COMP007 – Validation thermo-mécanique des lois élastiques non-linéaires (COMPORTEMENT)"
    }
  },
  {
    "id": "v6.07.108",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.07.108/index.html",
    "blurb": {
      "en": "COMP008 – Thermo-mechanical validation of elasto-plastic laws",
      "fr": "COMP008 – Validation thermo-mécanique des lois élasto-plastiques"
    }
  },
  {
    "id": "v6.07.109",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.07.109/index.html",
    "blurb": {
      "en": "COMP009 – Thermomechanical validation of BARRE Modelling",
      "fr": "COMP009 – Validation thermo-mécanique de la modélisation BARRE"
    }
  },
  {
    "id": "v6.07.110",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.07.110/index.html",
    "blurb": {
      "en": "COMP010 – Thermomechanical validation of elastoviscoplastic laws",
      "fr": "COMP010 – Validation thermo-mécanique des lois élastoviscoplastiques"
    }
  },
  {
    "id": "v6.07.111",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.07.111/index.html",
    "blurb": {
      "en": "COMP011 – Thermomechanical validation of concrete laws",
      "fr": "COMP011 – Validation thermo-mécanique des lois pour le béton"
    }
  },
  {
    "id": "v6.07.112",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.07.112/index.html",
    "blurb": {
      "en": "COMP012 – Validation of CALC_ESSAI_GEOMECA macro-command with multiple constitutive laws",
      "fr": "COMP012 – Validation de la macro-commande CALC_ESSAI_GEOMECA avec plusieurs lois de comportement"
    }
  },
  {
    "id": "v6.07.113",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.07.113/index.html",
    "blurb": {
      "en": "COMP013 – incremental isotropic and hyperelastic elasticity",
      "fr": "COMP013 – Elasticité isotrope incrémentale et hyperélastique"
    }
  },
  {
    "id": "v6.08.101",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.08.101/index.html",
    "blurb": {
      "en": "SSND101 – constitutive law for viscous shock absorbers on discreet elements",
      "fr": "SSND101 – Loi de comportement pour des amortisseurs visqueux sur des éléments discrets"
    }
  },
  {
    "id": "v6.08.102",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.08.102/index.html",
    "blurb": {
      "en": "SSND102 – constitutive law non-linear kinematic for discreet elements",
      "fr": "SSND102 – Loi de comportement cinématique non-linéaire pour des éléments discrets"
    }
  },
  {
    "id": "v6.08.103",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.08.103/index.html",
    "blurb": {
      "en": "SSND103 - Validation of a bilinear constitutive law on a discreet element (application to bolted assemblies)",
      "fr": "SSND103 - Validation d'une loi de comportement bilinéaire sur un élément discret (application aux assemblages boulonnés)"
    }
  },
  {
    "id": "v6.08.104",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.08.104/index.html",
    "blurb": {
      "en": "SSND104 - Validation of the DRUCK_PRAG_N_A behavior",
      "fr": "SSND104 - Validation du comportement DRUCK_PRAG_N_A"
    }
  },
  {
    "id": "v6.08.105",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.08.105/index.html",
    "blurb": {
      "en": "SSND105 - constitutive law visco-elastic-plastic with memory effect",
      "fr": "SSND105 - Loi de comportement visco-élasto-plastique avec effet de mémoire"
    }
  },
  {
    "id": "v6.08.106",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.08.106/index.html",
    "blurb": {
      "en": "SSND106: Multiple rotations in large deformations, isotropic hardening",
      "fr": "SSND106 : Tractions rotations multiples en grandes déformations, écrouissage isotrope"
    }
  },
  {
    "id": "v6.08.107",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.08.107/index.html",
    "blurb": {
      "en": "SSND107: Multiple rotations in large deformations, kinematic and mixed hardening",
      "fr": "SSND107 : Tractions rotations multiples en grandes déformations, écrouissage cinématique et mixte"
    }
  },
  {
    "id": "v6.08.109",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.08.109/index.html",
    "blurb": {
      "en": "SSND109 - Cyclical loading on a single crystal",
      "fr": "SSND109 - Chargement cyclique sur un monocristal"
    }
  },
  {
    "id": "v6.08.110",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.08.110/index.html",
    "blurb": {
      "en": "SSND110 – Validation of monocrystalline laws from Dislocation Dynamics",
      "fr": "SSND110 – Validation des lois monocristallines issues de la Dynamique des Dislocations"
    }
  },
  {
    "id": "v6.08.111",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.08.111/index.html",
    "blurb": {
      "en": "SSND111 - Memory effect in a cyclic test",
      "fr": "SSND111 - Effet de mémoire dans un essai cyclique"
    }
  },
  {
    "id": "v6.08.112",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.08.112/index.html",
    "blurb": {
      "en": "SSND112 – Network rotation and large deformations on a single crystal",
      "fr": "SSND112 – Rotation de réseau et grandes déformations sur un monocristal"
    }
  },
  {
    "id": "v6.08.113",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.08.113/index.html",
    "blurb": {
      "en": "SSND113 - SIMU_POINT_MAT in large deformations, required transformation gradient",
      "fr": "SSND113 - SIMU_POINT_MAT en grandes déformations, gradient de transformation imposé"
    }
  },
  {
    "id": "v6.08.114",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.08.114/index.html",
    "blurb": {
      "en": "SSND114 – constitutive law for flexion damageable elastoplastic junctions with discrete elements",
      "fr": "SSND114 – Loi de comportement pour des jonctionsélastoplastiques endommageables en flexion avec des éléments discrets"
    }
  },
  {
    "id": "v6.08.115",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.08.115/index.html",
    "blurb": {
      "en": "SSND115 - constitutive law elasto-plastic with non-radiality effect",
      "fr": "SSND115 - Loi de comportement élasto-plastique avec effet de non radialité"
    }
  },
  {
    "id": "v6.08.116",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.08.116/index.html",
    "blurb": {
      "en": "SSND116 - constitutive law DIS_CONTACT static",
      "fr": "SSND116 - Loi de comportement DIS_CONTACT en statique"
    }
  },
  {
    "id": "v6.08.117",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.08.117/index.html",
    "blurb": {
      "en": "SSND117 – Validation of DIS_ECRO_TRAC behavior",
      "fr": "SSND117 – Validation du comportement DIS_ECRO_TRAC"
    }
  },
  {
    "id": "v6.08.118",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.08.118/index.html",
    "blurb": {
      "en": "SSND118 - constitutive law DIS_CONTACT, initial contact management",
      "fr": "SSND118 - Loi de comportement DIS_CONTACT, gestion du contact initial"
    }
  },
  {
    "id": "v6.08.119",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.08.119/index.html",
    "blurb": {
      "en": "SSND119 - Validation of DASHPOT Relationship for Discreet elements",
      "fr": "SSND119 - Validation de la relation DASHPOT pour les éléments discrets"
    }
  },
  {
    "id": "v6.08.120",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.08.120/index.html",
    "blurb": {
      "en": "SSND120 - constitutive law CHOC_ENDO, nonlinear static.",
      "fr": "SSND120 - Loi de comportement CHOC_ENDO, en statique non-linéaire."
    }
  },
  {
    "id": "v6.08.121",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.08.121/index.html",
    "blurb": {
      "en": "SSND121 – Validation of non-linear behaviourCHOC_ELAS_TRAC",
      "fr": "SSND121 – Validation du comportement non-linéaireCHOC_ELAS_TRAC"
    }
  },
  {
    "id": "v6.08.122",
    "part": "V6",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v6/v6.08.122/index.html",
    "blurb": {
      "en": "SSND122 - DIS_CHOC, with contact managed in the global reference, in nonlinear static",
      "fr": "SSND122 - DIS_CHOC, avec contact géré dans le repère global, en statique non-linéaire"
    }
  },
  {
    "id": "v7.01.100",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.01.100/index.html",
    "blurb": {
      "en": "HPLA100 - Hollow thermoelastic cylinder with uniform rotation",
      "fr": "HPLA100 - Cylindre creux thermoélastique pesant en rotation uniforme"
    }
  },
  {
    "id": "v7.01.310",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.01.310/index.html",
    "blurb": {
      "en": "HPLA310 - Biblio_49 External radial crack in a circular bar subjected to thermal shock",
      "fr": "HPLA310 - Biblio_49 Fissure radiale externe dans un barreau circulaire soumis à un choc thermique"
    }
  },
  {
    "id": "v7.01.311",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.01.311/index.html",
    "blurb": {
      "en": "HPLA311 - Murakami 11.39. Circular fissure in the center of a sphere subjected to a uniform temperature on the lips",
      "fr": "HPLA311 - Murakami 11.39. Fissure circulaire au centre d’une sphère soumise à une température uniforme sur les lèvres"
    }
  },
  {
    "id": "v7.02.100",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.02.100/index.html",
    "blurb": {
      "en": "HPLP100 - Calculation of energy release rate of a thermo-elasticity cracked plate",
      "fr": "HPLP100 - Calcul du taux de restitution de l’énergie d’une plaque fissurée en thermo-élasticité"
    }
  },
  {
    "id": "v7.02.101",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.02.101/index.html",
    "blurb": {
      "en": "HPLP101 - Frustrated plate in thermoelasticity (flat-tension)",
      "fr": "HPLP101 - Plaque fissurée en thermoélasticité (contraintes planes)"
    }
  },
  {
    "id": "v7.02.300",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.02.300/index.html",
    "blurb": {
      "en": "HPLP300 - Plate with Young's modulus temperature function",
      "fr": "HPLP300 - Plaque avec module d’Young fonction de la température"
    }
  },
  {
    "id": "v7.02.310",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.02.310/index.html",
    "blurb": {
      "en": "HPLP310 – Biblio_35 Internal radial crack in thick cylinder under pressure and thermal loading",
      "fr": "HPLP310 – Biblio_35 Fissure radiale interne dans un cylindre épais sous pression et chargement thermique"
    }
  },
  {
    "id": "v7.02.311",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.02.311/index.html",
    "blurb": {
      "en": "HPLP311 - Murakami 11.17 Central fissure of a rectangular thin plate that prevents uniform heat flow in isotropic medium",
      "fr": "HPLP311 - Murakami 11.17 Fissure au centre d’une plaque mince rectangulaire faisant obstacle à un flux de chaleur uniforme en milieu isotrope"
    }
  },
  {
    "id": "v7.03.100",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.03.100/index.html",
    "blurb": {
      "en": "HPLV100 - Parallelepiped with temperature-dependent Young's modulus",
      "fr": "HPLV100 - Parallélépipède dont le module d'Young est fonction de la température"
    }
  },
  {
    "id": "v7.03.101",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.03.101/index.html",
    "blurb": {
      "en": "HPLV101 - Uniformization of homogeneous material",
      "fr": "HPLV101 - Homogénéisation d'un matériau homogène"
    }
  },
  {
    "id": "v7.03.102",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.03.102/index.html",
    "blurb": {
      "en": "HPLV102 - Calculation of thermo-elastic G in infinite medium for a circular crack",
      "fr": "HPLV102 - Calcul de G thermo-élastique en milieu infini pour une fissure circulaire"
    }
  },
  {
    "id": "v7.03.103",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.03.103/index.html",
    "blurb": {
      "en": "HPLV103 - Calculation of KI and 3D thermo-elastic G for circular cracking",
      "fr": "HPLV103 - Calcul de KI et de G thermo-élastique 3D pour une fissure circulaire"
    }
  },
  {
    "id": "v7.03.106",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.03.106/index.html",
    "blurb": {
      "en": "HPLV106 – Homogenized parameters of a glass resin-fibre composite with hexagonal cell",
      "fr": "HPLV106 – Paramètres homogénéisés d’un composite résine-fibres en verre à cellule hexagonale"
    }
  },
  {
    "id": "v7.03.108",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.03.108/index.html",
    "blurb": {
      "en": "HPLV108 – Verification of homogenized parameters of a breakthrough plate",
      "fr": "HPLV108 – Vérification des paramètres homogénéisés d’une plaque percée"
    }
  },
  {
    "id": "v7.03.109",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.03.109/index.html",
    "blurb": {
      "en": "HPLV109 – Calculation of local fields of a plate pierced from a homogenized model",
      "fr": "HPLV109 – Calcul des champs locaux d’une plaque percée à partir d’un modèle homogénéisé"
    }
  },
  {
    "id": "v7.03.111",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.03.111/index.html",
    "blurb": {
      "en": "HPLV111 – Verification of homogenized parameters of a breakthrough plate",
      "fr": "HPLV111 – Vérification des paramètres homogénéisés d’une plaque percée"
    }
  },
  {
    "id": "v7.11.001",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.11.001/index.html",
    "blurb": {
      "en": "HSLS01 - Slim square plate subjected to thermal gradient in thickness",
      "fr": "HSLS01 - Plaque carrée mince soumise à un gradient thermique dans l’épaisseur"
    }
  },
  {
    "id": "v7.12.303",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.12.303/index.html",
    "blurb": {
      "en": "HSLA303 - Pressure Cylinder and Thermal Dilation",
      "fr": "HSLA303 - Cylindre sous pression et dilatation thermique"
    }
  },
  {
    "id": "v7.14.103",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.14.103/index.html",
    "blurb": {
      "en": "EPICU03 - Validation of the POST_KCP command correction β in the case of a semi-elliptic defect.",
      "fr": "EPICU03 - Validation de la commande POST_KCP correction β dans le cas d'un défaut semi-elliptique."
    }
  },
  {
    "id": "v7.14.303",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.14.303/index.html",
    "blurb": {
      "en": "HSLV303 – CALC_THERMECA_MULT operator verification on a hollow cylinder subjected to thermal shock",
      "fr": "HSLV303 – Vérification de l’opérateur CALC_THERMECA_MULT sur un cylindre creux soumis à un choc thermique"
    }
  },
  {
    "id": "v7.14.304",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.14.304/index.html",
    "blurb": {
      "en": "HSLV304 - Cylinder under thermal loading",
      "fr": "HSLV304 - Cylindre sous chargement thermique"
    }
  },
  {
    "id": "v7.15.100",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.15.100/index.html",
    "blurb": {
      "en": "FORMA02 - Practical work of the \\"Initiation\\" training: thermomechanical and dynamically-sold pipe",
      "fr": "FORMA02 - Travaux pratiques de la formation « Initiation » : tuyau coudé sous sollicitation thermo-mécanique et dynamique"
    }
  },
  {
    "id": "v7.16.100",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.16.100/index.html",
    "blurb": {
      "en": "HSLL100 – Bi-clamped multifibre beam subject to a temperature field",
      "fr": "HSLL100 – Poutre multi-fibres bi-encastrée soumise à un champ de température"
    }
  },
  {
    "id": "v7.20.100",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.20.100/index.html",
    "blurb": {
      "en": "HSNA100 - Drying of a concrete enclosure wall",
      "fr": "HSNA100 - Séchage d'un mur d'enceinte en béton"
    }
  },
  {
    "id": "v7.20.101",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.20.101/index.html",
    "blurb": {
      "en": "FORMA30 - Hollow thermal elastic cylinder",
      "fr": "FORMA30 - Cylindre creux thermoélastique"
    }
  },
  {
    "id": "v7.20.102",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.20.102/index.html",
    "blurb": {
      "en": "HSNA102 - Validation of drying laws on a concrete cylindrical test piece",
      "fr": "HSNA102 - Validation des lois de séchage sur une éprouvette cylindrique en béton"
    }
  },
  {
    "id": "v7.20.105",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.20.105/index.html",
    "blurb": {
      "en": "HSNA105 - Expansion of an infinite hollow cylinder with consideration of thermal dissipations due to mechanical deformations",
      "fr": "HSNA105 - Expansion d'un cylindre creux infini avec prise en compte des dissipations thermiques dues aux déformations mécaniques"
    }
  },
  {
    "id": "v7.20.106",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.20.106/index.html",
    "blurb": {
      "en": "HSNA106 – Model META_LEMA_ANI: full single-trail cylinder with variable temperature",
      "fr": "HSNA106 – Modèle META_LEMA_ANI : cylindre plein en traction simple avec température variable"
    }
  },
  {
    "id": "v7.22.100",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.22.100/index.html",
    "blurb": {
      "en": "HSNV100 - Thermoplasticity in single traction",
      "fr": "HSNV100 - Thermoplasticité en traction simple"
    }
  },
  {
    "id": "v7.22.101",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.22.101/index.html",
    "blurb": {
      "en": "HSNV101 - Single Tensile Decoupled Thermo-plasticity and Metallurgy",
      "fr": "HSNV101 - Thermo-plasticité et métallurgie découplées en traction simple"
    }
  },
  {
    "id": "v7.22.102",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.22.102/index.html",
    "blurb": {
      "en": "HSNV102 - Thermo-metallo-plasticity coupled in single traction",
      "fr": "HSNV102 - Thermo-métallo-plasticité couplée en traction simple"
    }
  },
  {
    "id": "v7.22.103",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.22.103/index.html",
    "blurb": {
      "en": "HSNV103 - Thermoplasticity and Metallurgy in flat deformations",
      "fr": "HSNV103 - Thermo-plasticité et métallurgie en déformations planes"
    }
  },
  {
    "id": "v7.22.104",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.22.104/index.html",
    "blurb": {
      "en": "HSNV104 - Thermoplasticity and metallurgy in flat deformations with nut-restore",
      "fr": "HSNV104 - Thermo-plasticité et métallurgie en déformations planes avec restauration d’écrouissage"
    }
  },
  {
    "id": "v7.22.105",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.22.105/index.html",
    "blurb": {
      "en": "HSNV105 - Traction-slicing plate: elasto-viscoplasticity with metallurgy",
      "fr": "HSNV105 - Plaque en traction-cisaillement : élasto-viscoplasticité avec métallurgie"
    }
  },
  {
    "id": "v7.22.120",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.22.120/index.html",
    "blurb": {
      "en": "HSNV120 - Hyperelastic Traction of a Bar under Thermal Loading",
      "fr": "HSNV120 - Traction hyperélastique d'un barreau sous chargement thermique"
    }
  },
  {
    "id": "v7.22.121",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.22.121/index.html",
    "blurb": {
      "en": "HSNV121 - Traction in plastic deformations of a bar under thermal loading",
      "fr": "HSNV121 - Traction en déformations plastiques d'un barreau sous chargement thermique"
    }
  },
  {
    "id": "v7.22.122",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.22.122/index.html",
    "blurb": {
      "en": "HSNV122 - Thermoplasticity and metallurgy in large deformations in single tensile",
      "fr": "HSNV122 - Thermo-plasticité et métallurgie en grandes déformations en traction simple"
    }
  },
  {
    "id": "v7.22.123",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.22.123/index.html",
    "blurb": {
      "en": "HSNV123 - Thermo-metal-mechanical EDGAR",
      "fr": "HSNV123 - Thermo-métallo-mécanique EDGAR"
    }
  },
  {
    "id": "v7.22.124",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.22.124/index.html",
    "blurb": {
      "en": "HSNV124 - Voltage and temperature variable elements",
      "fr": "HSNV124 - Elément de volume en traction et température variables"
    }
  },
  {
    "id": "v7.22.126",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.22.126/index.html",
    "blurb": {
      "en": "HSNV126 - Thermo-metal-mechanical single-tension",
      "fr": "HSNV126 - Thermo-métallo-mécanique en traction simple"
    }
  },
  {
    "id": "v7.22.127",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.22.127/index.html",
    "blurb": {
      "en": "HSNV127 – Traction-slicing plate: viscoplasticity with isotropic hardening",
      "fr": "HSNV127 – Plaque en traction-cisaillement : viscoplasticité avec écrouissage isotrope"
    }
  },
  {
    "id": "v7.22.128",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.22.128/index.html",
    "blurb": {
      "en": "HSNV128 – Traction-slicing plate: viscoplasticity with kinematic nutring",
      "fr": "HSNV128 – Plaque en traction-cisaillement : viscoplasticité avec écrouissage cinématique"
    }
  },
  {
    "id": "v7.22.129",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.22.129/index.html",
    "blurb": {
      "en": "HSNV129 - Compression-Dilation Test for Thermal-Fissure Coupling Study",
      "fr": "HSNV129 - Essai de compression-dilatation pour étude du couplage thermique-fissuration"
    }
  },
  {
    "id": "v7.22.132",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.22.132/index.html",
    "blurb": {
      "en": "HSNV132 - X-FEM thermal elasticity",
      "fr": "HSNV132 - Fissure X-FEM en thermo-élasticité"
    }
  },
  {
    "id": "v7.22.133",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.22.133/index.html",
    "blurb": {
      "en": "HSNV133 - Thermoplastic Traction in Large Deformities VMIS_ISOT_PUIS",
      "fr": "HSNV133 - Traction thermoplastique en grandes déformations VMIS_ISOT_PUIS"
    }
  },
  {
    "id": "v7.22.135",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.22.135/index.html",
    "blurb": {
      "en": "HSNV135 – Model META_LEMA_ANI: Pressure tube and variable temperature",
      "fr": "HSNV135 – Modèle META_LEMA_ANI : tube sous pression et température variable"
    }
  },
  {
    "id": "v7.22.136",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.22.136/index.html",
    "blurb": {
      "en": "HSNV136 - META_LEMA_ANI model degeneration in Norton law: single traction in large deformations",
      "fr": "HSNV136 - Dégénérescence du modèle META_LEMA_ANI en loi de Norton : traction simple en grandes déformations"
    }
  },
  {
    "id": "v7.22.137",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.22.137/index.html",
    "blurb": {
      "en": "FORMA41 - Practical work of the Civil Engineering training: taking into account withdrawals in the study of a 3 point bending beam",
      "fr": "FORMA41 - Travaux pratiques de la formation « Génie Civil » : prise en compte des retraits dans l'étude d'une poutre en flexion 3 points"
    }
  },
  {
    "id": "v7.22.139",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.22.139/index.html",
    "blurb": {
      "en": "HSNV139 - Traction-slicing plate: elastic-plasticity with metallurgy",
      "fr": "HSNV139 - Plaque en traction-cisaillement : élasto-plasticité avec métallurgie"
    }
  },
  {
    "id": "v7.23.101",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.23.101/index.html",
    "blurb": {
      "en": "HSNS101 - Square plate in variable traction and temperature. Flat constraints integrated by the method of DE BORST and a direct method.",
      "fr": "HSNS101 - Plaque carrée en traction et température variables. Contraintes planes intégrées par la méthode de DE BORST et une méthode directe."
    }
  },
  {
    "id": "v7.23.102",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.23.102/index.html",
    "blurb": {
      "en": "HSNS102 - Reinforced concrete plate with thermal loading",
      "fr": "HSNS102 - Plaque en béton armé avec chargement thermique"
    }
  },
  {
    "id": "v7.30.100",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.30.100/index.html",
    "blurb": {
      "en": "WTNL100 - Consolidation of a saturated poro-elastic soil column (Terzaghi)",
      "fr": "WTNL100 - Consolidation d’une colonne de sol poro-élastique saturé (Terzaghi)"
    }
  },
  {
    "id": "v7.30.101",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.30.101/index.html",
    "blurb": {
      "en": "WTNL101 – Coupled Saturated THM Problem",
      "fr": "WTNL101 – Problème THMsaturé couplé"
    }
  },
  {
    "id": "v7.30.102",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.30.102/index.html",
    "blurb": {
      "en": "WTNL102 - Single Dimensional Forced Convection Problem",
      "fr": "WTNL102 - Problème mono dimensionnel de convection forcée"
    }
  },
  {
    "id": "v7.31.100",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.100/index.html",
    "blurb": {
      "en": "WTNV100 - Undrained triaxial test with CJS (Level 1)",
      "fr": "WTNV100 - Essai triaxial non drainé avec le modèle CJS (niveau 1)"
    }
  },
  {
    "id": "v7.31.101",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.101/index.html",
    "blurb": {
      "en": "WTNV101 - Undrained triaxial test with Laigle model and hydraulic coupling",
      "fr": "WTNV101 - Essai triaxial non drainé avec le modèle de Laigle et avec couplage hydraulique"
    }
  },
  {
    "id": "v7.31.102",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.102/index.html",
    "blurb": {
      "en": "WTNV102 - Undrained triaxial test with VISC_MAXWELL and VISC_MAXWELL_MT models",
      "fr": "WTNV102 - Essai triaxial non drainé avec les modèles VISC_MAXWELL et VISC_MAXWELL_MT"
    }
  },
  {
    "id": "v7.31.103",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.103/index.html",
    "blurb": {
      "en": "WTNV103 – 3D Modelling of unforced swelling with GonfElas",
      "fr": "WTNV103 – Modélisation 3D du gonflement non contraint avec le modèle GonfElas"
    }
  },
  {
    "id": "v7.31.104",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.104/index.html",
    "blurb": {
      "en": "WTNV104 – Calculation of clean creep and desiccation creep in 3D Modelling with BETON_AGEING",
      "fr": "WTNV104 – Calcul de fluage propre et de fluage de dessication en modélisation 3D avec le modèle BETON_AGEING"
    }
  },
  {
    "id": "v7.31.109",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.109/index.html",
    "blurb": {
      "en": "WTNV109 - Water and mechanical loading of saturated porous medium",
      "fr": "WTNV109 - Chargement hydrique et mécanique d’un milieu poreux saturé"
    }
  },
  {
    "id": "v7.31.111",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.111/index.html",
    "blurb": {
      "en": "WTNV111 – Heat flow over saturated porous medium",
      "fr": "WTNV111 – Flux thermique sur un milieu poreux saturé"
    }
  },
  {
    "id": "v7.31.112",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.112/index.html",
    "blurb": {
      "en": "WTNV112 – Gravitory flow in unsaturated porous medium",
      "fr": "WTNV112 – Ecoulement gravitaire dans un milieu poreux non saturé"
    }
  },
  {
    "id": "v7.31.113",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.113/index.html",
    "blurb": {
      "en": "WTNV113 – Gravitory discharge into saturated porous medium",
      "fr": "WTNV113 – Écoulement gravitaire dans un milieu poreux saturé"
    }
  },
  {
    "id": "v7.31.114",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.114/index.html",
    "blurb": {
      "en": "WTNV114 - Water flow over saturated porous medium",
      "fr": "WTNV114 - Flux hydrique sur un milieu poreux saturé"
    }
  },
  {
    "id": "v7.31.121",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.121/index.html",
    "blurb": {
      "en": "WTNV121- Concrete Wetting with Damage Law",
      "fr": "WTNV121- Mouillage du béton avec une loi d’endommagement"
    }
  },
  {
    "id": "v7.31.122",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.122/index.html",
    "blurb": {
      "en": "WTNV122 - Undrained triaxial test with CAM_CLAY, MCC and CSSM behavioral models",
      "fr": "WTNV122 - Essai triaxial non drainé avec les modèles de comportement CAM_CLAY, MCC et CSSM"
    }
  },
  {
    "id": "v7.31.123",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.123/index.html",
    "blurb": {
      "en": "WTNV123 - Triaxial suction test fixed with Barcelona model",
      "fr": "WTNV123 - Essai triaxial à succion fixée avec le modèle de Barcelone"
    }
  },
  {
    "id": "v7.31.124",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.124/index.html",
    "blurb": {
      "en": "WTNV124 - Deaturation-Consolidation Test with Barcelona Model",
      "fr": "WTNV124 - Essai de désaturation-consolidation avec le modèle de Barcelone"
    }
  },
  {
    "id": "v7.31.125",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.125/index.html",
    "blurb": {
      "en": "WTNV125 –Hair rebalancing calculus of a bi-material",
      "fr": "WTNV125 –Calcul de rééquilibrage capillaire d’un bi-matériaux"
    }
  },
  {
    "id": "v7.31.126",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.126/index.html",
    "blurb": {
      "en": "WTNV126 – Response to mixed saturation-consolidation paths with the Barcelona model",
      "fr": "WTNV126 – Réponse à des chemins mixtes de saturation-consolidation avec le modèle de Barcelone"
    }
  },
  {
    "id": "v7.31.127",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.127/index.html",
    "blurb": {
      "en": "WTNV127 – Desaturation of a porous medium without air (3D_THV Modelling)",
      "fr": "WTNV127 –Désaturation d’un milieu poreux sans air (modélisation 3D_THV)"
    }
  },
  {
    "id": "v7.31.128",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.128/index.html",
    "blurb": {
      "en": "WTNV128 - Undrained triaxial test with Hoek-Brown model modified to actual stresses",
      "fr": "WTNV128 - Essai triaxial non drainé avec le modèle de Hoek-Brown modifié en contraintes effectives"
    }
  },
  {
    "id": "v7.31.129",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.129/index.html",
    "blurb": {
      "en": "WTNV129 - Undrained triaxial test with Hoek-Brown model modified in total stresses",
      "fr": "WTNV129 - Essai triaxial non drainé avec le modèle de Hoek-Brown modifié en contraintes totales"
    }
  },
  {
    "id": "v7.31.130",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.130/index.html",
    "blurb": {
      "en": "WTNV130 - Heating of a desaturated porous medium with dissolved air (3D)",
      "fr": "WTNV130 - Chauffage d’un milieu poreux désaturé avec air dissous (3D)"
    }
  },
  {
    "id": "v7.31.131",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.131/index.html",
    "blurb": {
      "en": "WTNV131 - Dispersal of dissolved air in water (3D)",
      "fr": "WTNV131 - Diffusion d’air dissous dans l’eau (3D)"
    }
  },
  {
    "id": "v7.31.132",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.132/index.html",
    "blurb": {
      "en": "WTNV132 - Construction of a floor column with Hujeux law",
      "fr": "WTNV132 - Construction d’une colonne de sol avec la loi de Hujeux"
    }
  },
  {
    "id": "v7.31.133",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.133/index.html",
    "blurb": {
      "en": "WTNV133 – Undrained Triaxial with Hujeux Law",
      "fr": "WTNV133 – Triaxial non drainé avec la loi de Hujeux"
    }
  },
  {
    "id": "v7.31.134",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.134/index.html",
    "blurb": {
      "en": "WTNV134 – Undrained triaxial cyclic with Hujeux law",
      "fr": "WTNV134 – Triaxial non drainé cycliqueavec la loi de Hujeux"
    }
  },
  {
    "id": "v7.31.135",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.135/index.html",
    "blurb": {
      "en": "WTNV135 - Drained triaxial test: LETK, LKR and NLH_CSRM models",
      "fr": "WTNV135 - Essai triaxial drainé : modèles LETK, LKR et NLH_CSRM"
    }
  },
  {
    "id": "v7.31.136",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.136/index.html",
    "blurb": {
      "en": "WTNV136 – 3D Modelling of clay swelling with GonfElas",
      "fr": "WTNV136 – Modélisation 3D du gonflement d’une argile avec le modèle GonfElas"
    }
  },
  {
    "id": "v7.31.137",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.137/index.html",
    "blurb": {
      "en": "WTNV137 - Drained triaxial test with VISC_DRUC_PRAG",
      "fr": "WTNV137 - Essai triaxial drainé avec le modèle VISC_DRUC_PRAG"
    }
  },
  {
    "id": "v7.31.138",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.138/index.html",
    "blurb": {
      "en": "WTNV138 - Undrained triaxial test with VISC_DRUC_PRAG",
      "fr": "WTNV138 - Essai triaxial non drainé avec le modèle VISC_DRUC_PRAG"
    }
  },
  {
    "id": "v7.31.139",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.139/index.html",
    "blurb": {
      "en": "WTNV139 – Modelling a well dug in a water saturated transverse isotropic formation",
      "fr": "WTNV139 – Modélisation d'un puits creusé dans une formation isotrope transverse saturée en eau"
    }
  },
  {
    "id": "v7.31.140",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.140/index.html",
    "blurb": {
      "en": "WTNV140 - Anisotropic drained elastic triaxial test",
      "fr": "WTNV140 - Essai triaxial élastique drainé anisotrope"
    }
  },
  {
    "id": "v7.31.141",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.141/index.html",
    "blurb": {
      "en": "WTNV141 – Validation of an evolutionary load for a saturated hydromechanical problem",
      "fr": "WTNV141 – Validation d'un chargement évolutif pour un problème hydromécanique saturé"
    }
  },
  {
    "id": "v7.31.142",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.142/index.html",
    "blurb": {
      "en": "WTNV142 - Triaxial undrained test with Mohr-Coulomb law",
      "fr": "WTNV142 - Essai triaxial non-drainé avec la loi de Mohr-Coulomb"
    }
  },
  {
    "id": "v7.31.143",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.143/index.html",
    "blurb": {
      "en": "WTNV143 - Application of a distributed pressure on the lips of a XFEM crack in a hydro-mechanical model",
      "fr": "WTNV143 - Application d'une pression répartie sur les lèvres d'une fissure XFEM dans un modèle hydro-mécanique"
    }
  },
  {
    "id": "v7.31.144",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.144/index.html",
    "blurb": {
      "en": "WTNV144 - Consolidation of a saturated and fractured poro-elastic soil column: use of the XFEM method",
      "fr": "WTNV144 - Consolidation d'une colonne de sol poro-élastique saturée et fracturée :utilisation de la méthode XFEM"
    }
  },
  {
    "id": "v7.31.145",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.145/index.html",
    "blurb": {
      "en": "WTNV145 - Application of a distributed pressure on the lips of a XFEM crack junction for hydromechanical cases",
      "fr": "WTNV145 - Application d'une pression répartie sur les lèvres d'une jonction de fissure XFEM pour le cas hydromécanique"
    }
  },
  {
    "id": "v7.31.146",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.146/index.html",
    "blurb": {
      "en": "WTNV146- Validation of a cohesive law model for hydromechanical case coupled with XFEM",
      "fr": "WTNV146- Validation d'un modèle de loi cohésive pour le cas hydromécanique couplé avec XFEM"
    }
  },
  {
    "id": "v7.31.147",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.147/index.html",
    "blurb": {
      "en": "WTNV147- Hydromechanical coupling in poro-elastic and fractured column: use of the XFEM method",
      "fr": "WTNV147- Couplagehydromécanique dans une colonne poro-élastique et fracturée : utilisation de la méthodeXFEM"
    }
  },
  {
    "id": "v7.31.148",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.148/index.html",
    "blurb": {
      "en": "WTNV148 – Flowing into an interface within a porous mass: using the XFEM method",
      "fr": "WTNV148 – Écoulement dans une interface au sein d'un massif poreux : utilisation de la méthode XFEM"
    }
  },
  {
    "id": "v7.31.149",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.149/index.html",
    "blurb": {
      "en": "WTNV149 – Contact at a cohesive interface junction for hydromechanical cases",
      "fr": "WTNV149 – Contact au niveau d'une jonction d'interfaces cohésives pour le cas hydromécanique"
    }
  },
  {
    "id": "v7.31.150",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.150/index.html",
    "blurb": {
      "en": "WTNV150 – Flowing into a interface junction within a porous mass: using the XFEM method",
      "fr": "WTNV150 – Écoulement dans une jonction d'interfaces au sein d'un massif poreux : utilisation de la méthode XFEM"
    }
  },
  {
    "id": "v7.31.151",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.151/index.html",
    "blurb": {
      "en": "WTNV151 – Consideration of an unsaturated water exchange condition",
      "fr": "WTNV151 – Prise en compte d'une condition d'échange hydrique en non saturé"
    }
  },
  {
    "id": "v7.31.152",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.31.152/index.html",
    "blurb": {
      "en": "WTNV152 - Dispersion of water vapour in a gas mixture",
      "fr": "WTNV152 - Diffusion de la vapeur d'eau dans un mélange gazeux"
    }
  },
  {
    "id": "v7.32.102",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.32.102/index.html",
    "blurb": {
      "en": "WTNP102 - Flat heating Modelling of an element initially saturated with water. account for steam.",
      "fr": "WTNP102 - Modélisation plane du chauffage d’un élément initialement saturé en eau. Prise en compte de la vapeur."
    }
  },
  {
    "id": "v7.32.103",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.32.103/index.html",
    "blurb": {
      "en": "WTNP103 - Dispersal of dissolved air in water (plan)",
      "fr": "WTNP103 - Diffusion d’air dissous dans l’eau (plan)"
    }
  },
  {
    "id": "v7.32.104",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.32.104/index.html",
    "blurb": {
      "en": "WTNP104 - Dispersal of dissolved air in water (plane THH2M)",
      "fr": "WTNP104 - Diffusion d’air dissous dans l’eau (plan THH2M)"
    }
  },
  {
    "id": "v7.32.105",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.32.105/index.html",
    "blurb": {
      "en": "WTNP105 - Dispersal of dissolved air in water (plane HH2M)",
      "fr": "WTNP105 - Diffusion d’air dissous dans l’eau (plan HH2M)"
    }
  },
  {
    "id": "v7.32.106",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.32.106/index.html",
    "blurb": {
      "en": "WTNP106 - Heating a desaturated porous medium with dissolved air",
      "fr": "WTNP106 - Chauffage d’un milieu poreux désaturé avec air dissous"
    }
  },
  {
    "id": "v7.32.107",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.32.107/index.html",
    "blurb": {
      "en": "WTNP107 – Modelling drying of a concrete bar with different sorption isotherms",
      "fr": "WTNP107 – Modélisation du séchage d’un barreau de béton avec différentes isothermes de sorption"
    }
  },
  {
    "id": "v7.32.110",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.32.110/index.html",
    "blurb": {
      "en": "WTNP110 - Saturated orthotropic flow 2D",
      "fr": "WTNP110 - Ecoulement orthotrope saturé 2D"
    }
  },
  {
    "id": "v7.32.112",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.32.112/index.html",
    "blurb": {
      "en": "WTNP112 - Resaturation of a column",
      "fr": "WTNP112 - Resaturation d’une colonne"
    }
  },
  {
    "id": "v7.32.113",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.32.113/index.html",
    "blurb": {
      "en": "WTNP113 - Resaturation of a cell",
      "fr": "WTNP113 - Resaturation d’une alvéole"
    }
  },
  {
    "id": "v7.32.114",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.32.114/index.html",
    "blurb": {
      "en": "WTNP114 - test case reference for the calculation of mechanical deformations",
      "fr": "WTNP114 - Cas test de référence pour le calcul des déformations mécaniques"
    }
  },
  {
    "id": "v7.32.115",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.32.115/index.html",
    "blurb": {
      "en": "WTNP115 – Unsaturation of a airless porous medium on unit cell",
      "fr": "WTNP115 – Désaturation d’un milieu poreux sans air sur cellule unitaire"
    }
  },
  {
    "id": "v7.32.116",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.32.116/index.html",
    "blurb": {
      "en": "WTNP116 - Consolidation problem for the permanent HM model",
      "fr": "WTNP116 - Problème de consolidation pour le modèle HM permanent"
    }
  },
  {
    "id": "v7.32.117",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.32.117/index.html",
    "blurb": {
      "en": "WTNP117 – Hair Rebalancing of a Bi-materials described by laws of Van-Genuchten Mualem",
      "fr": "WTNP117 – Rééquilibrage capillaire d’un bi-matériaux décrit par des lois de Van-Genuchten Mualem"
    }
  },
  {
    "id": "v7.32.118",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.32.118/index.html",
    "blurb": {
      "en": "WTNP118 - Gravial rebalancing of a column saturation",
      "fr": "WTNP118 - Rééquilibrage gravitaire de la saturation d’une colonne"
    }
  },
  {
    "id": "v7.32.119",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.32.119/index.html",
    "blurb": {
      "en": "WTNP119 – Flat Modelling of clay swelling with GonfElas",
      "fr": "WTNP119 – Modélisation plane du gonflement d’une argile avec le modèle GonfElas"
    }
  },
  {
    "id": "v7.32.120",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.32.120/index.html",
    "blurb": {
      "en": "WTNP120 - Phase Appearance/Disappearance in a Diphasic Flow: Gas Injection in a Bar Saturated in Pure Water",
      "fr": "WTNP120 - Apparition/disparition de phase dans un écoulement diphasique : Injection de gaz dans un barreau saturé en eau pure"
    }
  },
  {
    "id": "v7.32.121",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.32.121/index.html",
    "blurb": {
      "en": "WTNP121 – Modelling a straight-line compressible liquid (single phase flow) saturated bar",
      "fr": "WTNP121 – Modélisation d'un barreau saturé en liquide compressible linéaire (écoulement monophasique) soumis à un choc de pression"
    }
  },
  {
    "id": "v7.32.122",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.32.122/index.html",
    "blurb": {
      "en": "WTNP122 - Modelling a low-linear compressible gas saturated bar (single-phase flow) subjected to pressure shock",
      "fr": "WTNP122 - Modélisation d'un barreau saturé en gaz compressible faiblement non-linéaire (écoulement monophasique) soumis à un choc de pression"
    }
  },
  {
    "id": "v7.32.123",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.32.123/index.html",
    "blurb": {
      "en": "WTN123 - Phase Appearance/Disappearance in a Diphasic Flow: Gas Injection Around a Gallery in a Saturated Domain",
      "fr": "WTN123 - Apparition/disparition de phase dans un écoulement diphasique : Injection de gaz autour d'une galerie dans un domaine saturé"
    }
  },
  {
    "id": "v7.32.124",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.32.124/index.html",
    "blurb": {
      "en": "WTNP124 – test case from Liakopoulos: Draining a water column by gravity force only",
      "fr": "WTNP124 – Cas test de Liakopoulos : Drainage d'une colonne d'eau par la seule force de gravité"
    }
  },
  {
    "id": "v7.32.125",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.32.125/index.html",
    "blurb": {
      "en": "WTNP125 - Expansion of a tank",
      "fr": "WTNP125 - Déplétion d'un réservoir"
    }
  },
  {
    "id": "v7.32.126",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.32.126/index.html",
    "blurb": {
      "en": "WTNP126 - Gas injection into a fractured porous massif",
      "fr": "WTNP126 - Injection de gaz dans un massif poreux fracturé"
    }
  },
  {
    "id": "v7.32.127",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.32.127/index.html",
    "blurb": {
      "en": "WTNP127 – Modelling a water flow in a saturated bar, establishing a permanent regime",
      "fr": "WTNP127 – Modélisation d'un écoulement d'eau dans un barreau saturé, établissement d'un régime permanent"
    }
  },
  {
    "id": "v7.32.128",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.32.128/index.html",
    "blurb": {
      "en": "WTNP128 – Fluid-pressure concrete-coupling test",
      "fr": "WTNP128 – Essai de fendage par coindu béton sous pression fluide"
    }
  },
  {
    "id": "v7.32.129",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.32.129/index.html",
    "blurb": {
      "en": "WTNP129 – HM Modelling of a compressed liquid saturated bar",
      "fr": "WTNP129 – Modélisation HM d'un barreau saturé en liquide compressible"
    }
  },
  {
    "id": "v7.32.130",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.32.130/index.html",
    "blurb": {
      "en": "WTNP130 – Calculation of hydraulic and thermal nodal forces on a bar",
      "fr": "WTNP130 – Calcul des forces nodales hydrauliques et thermiques sur un barreau"
    }
  },
  {
    "id": "v7.33.100",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.33.100/index.html",
    "blurb": {
      "en": "WTNA100 –Hair rebalancing calculus of a bi-material",
      "fr": "WTNA100 –Calcul de rééquilibrage capillaire d’un bi-matériaux"
    }
  },
  {
    "id": "v7.33.101",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.33.101/index.html",
    "blurb": {
      "en": "WTNA101 – Non-drained triaxial test with softening Drucker Prager-like behavior",
      "fr": "WTNA101 – Essai triaxial non-drainé avec un comportement de type Drucker Prager adoucissant"
    }
  },
  {
    "id": "v7.33.102",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.33.102/index.html",
    "blurb": {
      "en": "WTNA102 - Dissolved air diffusion (axi)",
      "fr": "WTNA102 - Diffusion d’air dissous (axi)"
    }
  },
  {
    "id": "v7.33.105",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.33.105/index.html",
    "blurb": {
      "en": "WTNA105 – Injection of gas into a quasi-saturated clay-type material described by Van-Genuchten/Mualem laws",
      "fr": "WTNA105 – Injection de gaz dans un matériau quasi-saturé de type argile décrit par des lois de Van-Genuchten/Mualem"
    }
  },
  {
    "id": "v7.33.106",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.33.106/index.html",
    "blurb": {
      "en": "WTNA106 - axisymmetric heating Modelling of the element initially saturated with water. account for steam.",
      "fr": "WTNA106 - Modélisation axisymétrique du chauffage d’un élément initialement saturé en eau. Prise en compte de la vapeur."
    }
  },
  {
    "id": "v7.33.107",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.33.107/index.html",
    "blurb": {
      "en": "WTNA107 - axisymmetric heating Modelling of water saturated element",
      "fr": "WTNA107 - Modélisation axisymétrique du chauffage d’un élément saturé en eau"
    }
  },
  {
    "id": "v7.33.109",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.33.109/index.html",
    "blurb": {
      "en": "WTNA109 - Unsaturation of airless porous medium on unit cell",
      "fr": "WTNA109 - Désaturation d’un milieu poreux sans air sur cellule unitaire"
    }
  },
  {
    "id": "v7.33.110",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.33.110/index.html",
    "blurb": {
      "en": "WTNA110 – axisymmetric Modelling of clay swelling with GonfElas",
      "fr": "WTNA110 – Modélisation axisymétrique du gonflement d’une argile avec le modèle GonfElas"
    }
  },
  {
    "id": "v7.33.111",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.33.111/index.html",
    "blurb": {
      "en": "WTNA111 - axisymmetric Modelling of a joint with hydro-mechanical coupling",
      "fr": "WTNA111 - Modélisation axisymétrique d'un joint avec couplage hydro-mécanique"
    }
  },
  {
    "id": "v7.33.112",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.33.112/index.html",
    "blurb": {
      "en": "WTNA112 – Thermal pressure of undrained saturated cylindrical test piece",
      "fr": "WTNA112 – Pressurisation thermique d'une éprouvette cylindrique saturée non drainée"
    }
  },
  {
    "id": "v7.33.113",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.33.113/index.html",
    "blurb": {
      "en": "WTNA113 – Modelling of incompressible water injection in saturated media",
      "fr": "WTNA113 – Modélisation d'injection d'eau incompressible dans un milieu saturé"
    }
  },
  {
    "id": "v7.34.102",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.34.102/index.html",
    "blurb": {
      "en": "WDNP102 – Reflection and absorption of a compression wave along a poroelastic column",
      "fr": "WDNP102 – Réflexion et absorption d'une onde de compression le long d'une colonne poroélastique"
    }
  },
  {
    "id": "v7.35.100",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.35.100/index.html",
    "blurb": {
      "en": "WSLP100 - Test for deaturation by ointment in an unsaturated porous sample",
      "fr": "WSLP100 - Essai de désaturation par suintement dans un échantillon poreux non saturé"
    }
  },
  {
    "id": "v7.36.101",
    "part": "V7",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v7/v7.36.101/index.html",
    "blurb": {
      "en": "WSNP101– Modelling drying of a concrete sample with model HYDR_TABBAL",
      "fr": "WSNP101– Modélisation du séchage d’un échantillon en béton avec le modèle HYDR_TABBAL"
    }
  },
  {
    "id": "v8.01.100",
    "part": "V8",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v8/v8.01.100/index.html",
    "blurb": {
      "en": "FDLV100 - Piston coupled to an incompressible fluid column",
      "fr": "FDLV100 - Piston couplé à une colonne de fluide incompressible"
    }
  },
  {
    "id": "v8.01.101",
    "part": "V8",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v8/v8.01.101/index.html",
    "blurb": {
      "en": "FDLV101 - Two cylinders separated by an incompressible fluid",
      "fr": "FDLV101 - Deux cylindres séparés par un fluide incompressible"
    }
  },
  {
    "id": "v8.01.102",
    "part": "V8",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v8/v8.01.102/index.html",
    "blurb": {
      "en": "FDLV102 - Weight added calculated on a generalized model",
      "fr": "FDLV102 - Masse ajoutée calculée sur un modèle généralisé"
    }
  },
  {
    "id": "v8.01.103",
    "part": "V8",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v8/v8.01.103/index.html",
    "blurb": {
      "en": "FDLV103 - Concentric spheres separated by an incompressible fluid",
      "fr": "FDLV103 - Sphères concentriques séparées par un fluide incompressible"
    }
  },
  {
    "id": "v8.01.104",
    "part": "V8",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v8/v8.01.104/index.html",
    "blurb": {
      "en": "FDLV104 - mass-added calculation on 3D model",
      "fr": "FDLV104 - Calcul de masse ajoutée sur modèle généralisé 3D"
    }
  },
  {
    "id": "v8.01.105",
    "part": "V8",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v8/v8.01.105/index.html",
    "blurb": {
      "en": "FDLV105 - Adding mass on axisymmetric piston coupled to an incompressible fluid column",
      "fr": "FDLV105 - Masse ajoutée sur piston axisymétrique couplé à une colonne de fluide incompressible"
    }
  },
  {
    "id": "v8.01.106",
    "part": "V8",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v8/v8.01.106/index.html",
    "blurb": {
      "en": "FDLV106 - Calculation of depreciation added in ring flow",
      "fr": "FDLV106 - Calcul d'amortissement ajouté en écoulement annulaire"
    }
  },
  {
    "id": "v8.01.107",
    "part": "V8",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v8/v8.01.107/index.html",
    "blurb": {
      "en": "FDLV107 - Rigidities added under ring flow",
      "fr": "FDLV107 - Rigidités ajoutées sous écoulement annulaire"
    }
  },
  {
    "id": "v8.01.108",
    "part": "V8",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v8/v8.01.108/index.html",
    "blurb": {
      "en": "FDLV108 - Calculation of an additional depreciation in ring flow (variable volume mass)",
      "fr": "FDLV108 - Calcul d'amortissement ajouté en écoulement annulaire (masse volumique variable)"
    }
  },
  {
    "id": "v8.01.109",
    "part": "V8",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v8/v8.01.109/index.html",
    "blurb": {
      "en": "FDLV109 - Calculation of coefficients added in flat flow",
      "fr": "FDLV109 - Calcul de coefficients ajoutés en écoulement plan"
    }
  },
  {
    "id": "v8.01.110",
    "part": "V8",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v8/v8.01.110/index.html",
    "blurb": {
      "en": "FDLV110 - Calculation of mass added on substructured modes",
      "fr": "FDLV110 - Calcul de masse ajoutée sur modes obtenus par sous-structuration"
    }
  },
  {
    "id": "v8.01.111",
    "part": "V8",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v8/v8.01.111/index.html",
    "blurb": {
      "en": "FDLV111 - Absorption of a pressure wave in a fluid column",
      "fr": "FDLV111 - Absorption d'une onde de pression dans une colonne fluide"
    }
  },
  {
    "id": "v8.01.113",
    "part": "V8",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v8/v8.01.113/index.html",
    "blurb": {
      "en": "FDLV113 - Pressure source in a fluid-filled ball in soil interaction - fluid - structure",
      "fr": "FDLV113 - Source de pression dans une boule pleine de fluide en interaction sol - fluide - structure"
    }
  },
  {
    "id": "v8.01.114",
    "part": "V8",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v8/v8.01.114/index.html",
    "blurb": {
      "en": "FDLV114 - Seismic response of a cylindrical tank",
      "fr": "FDLV114 - Réponse sismique d'un réservoir cylindrique"
    }
  },
  {
    "id": "v8.01.115",
    "part": "V8",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v8/v8.01.115/index.html",
    "blurb": {
      "en": "FDLV115 - Harmonic response of a visco-elastic ring in fluid-structure coupling for model reduction",
      "fr": "FDLV115 - Réponse harmonique d'un anneau visco-élastique en couplage fluide-structure pour la réduction de modèle"
    }
  },
  {
    "id": "v8.01.116",
    "part": "V8",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v8/v8.01.116/index.html",
    "blurb": {
      "en": "FDLV116 - Dynamic response of a dam with fluid-structure coupling",
      "fr": "FDLV116 - Réponse dynamique d’un barrage avec couplage fluide-structure"
    }
  },
  {
    "id": "v8.03.100",
    "part": "V8",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v8/v8.03.100/index.html",
    "blurb": {
      "en": "FDNV100 - Balking a water tank with elastic deformable wall",
      "fr": "FDNV100 - Ballottement d’un réservoir d’eau avec paroi déformable élastique"
    }
  },
  {
    "id": "v8.21.100",
    "part": "V8",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v8/v8.21.100/index.html",
    "blurb": {
      "en": "ADLV100 - Piston coupled to a fluid column",
      "fr": "ADLV100 - Piston couplé à une colonne de fluide"
    }
  },
  {
    "id": "v8.21.101",
    "part": "V8",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v8/v8.21.101/index.html",
    "blurb": {
      "en": "ADLV101 - Balking and acoustic modes of a water-filled parallelepipedic tank",
      "fr": "ADLV101 - Modes de ballottement et acoustiques d'une cuve parallélépipédique remplie d'eau"
    }
  },
  {
    "id": "v8.21.102",
    "part": "V8",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v8/v8.21.102/index.html",
    "blurb": {
      "en": "ADLS102 - Meridian fluid-elastic oscillator",
      "fr": "ADLS102 - Oscillateur fluide-élastique méridien"
    }
  },
  {
    "id": "v8.21.200",
    "part": "V8",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v8/v8.21.200/index.html",
    "blurb": {
      "en": "FDLL200 - clamped pipework and free by fluid beam-structure",
      "fr": "FDLL200 - Tuyauterie encastrée et libre par poutre fluide-structure"
    }
  },
  {
    "id": "v8.21.301",
    "part": "V8",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v8/v8.21.301/index.html",
    "blurb": {
      "en": "ADLV301 – Cavity-plate coupling problem",
      "fr": "ADLV301 – Problème de couplage cavité-plaque"
    }
  },
  {
    "id": "v8.21.312",
    "part": "V8",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v8/v8.21.312/index.html",
    "blurb": {
      "en": "ADLV312 – Water-filled flexible cylindrical tank",
      "fr": "ADLV312 – Réservoir cylindrique souple rempli d'eau"
    }
  },
  {
    "id": "v8.22.100",
    "part": "V8",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v8/v8.22.100/index.html",
    "blurb": {
      "en": "AHLV100 - Anechoic output waveguide",
      "fr": "AHLV100 - Guide d'onde à sortie anéchoïque"
    }
  },
  {
    "id": "v8.22.101",
    "part": "V8",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v8/v8.22.101/index.html",
    "blurb": {
      "en": "AHLV101 - Anechoic output waveguide",
      "fr": "AHLV101 - Guide d'onde à sortie anéchoïque"
    }
  },
  {
    "id": "v8.22.302",
    "part": "V8",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v8/v8.22.302/index.html",
    "blurb": {
      "en": "AHLV302 – Vibro-absorbent input anechoic wave guide",
      "fr": "AHLV302 – Guide d'onde anéchoïque à entrée vibro-absorbante"
    }
  },
  {
    "id": "v8.22.303",
    "part": "V8",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v8/v8.22.303/index.html",
    "blurb": {
      "en": "AHLV303 - linear elasticity hollow sphere immersed in infinite fluid",
      "fr": "AHLV303 - Sphère creuse en élasticité linéaire immergée dans un fluide infini"
    }
  },
  {
    "id": "v9.01.100",
    "part": "V9",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v9/v9.01.100/index.html",
    "blurb": {
      "en": "SZLZ100 - Fatigue on a Decent Cycle",
      "fr": "SZLZ100 - Fatigue sur un cycle décentré"
    }
  },
  {
    "id": "v9.01.101",
    "part": "V9",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v9/v9.01.101/index.html",
    "blurb": {
      "en": "SZLZ101 - Damage Calculation/RAINFLOW Method",
      "fr": "SZLZ101 - Calcul du dommage/Méthode RAINFLOW"
    }
  },
  {
    "id": "v9.01.102",
    "part": "V9",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v9/v9.01.102/index.html",
    "blurb": {
      "en": "SZLZ102 - Fatigue with different counting methods",
      "fr": "SZLZ102 - Fatigue avec différentes méthodes de comptage"
    }
  },
  {
    "id": "v9.01.103",
    "part": "V9",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v9/v9.01.103/index.html",
    "blurb": {
      "en": "SZLZ103 - RAINFLOW Method",
      "fr": "SZLZ103 - Méthode RAINFLOW"
    }
  },
  {
    "id": "v9.01.105",
    "part": "V9",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v9/v9.01.105/index.html",
    "blurb": {
      "en": "SZLZ105 - Cycle count by RAINFLOW and damage calculation",
      "fr": "SZLZ105 - Comptage de cycles par RAINFLOW et calcul du dommage"
    }
  },
  {
    "id": "v9.01.106",
    "part": "V9",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v9/v9.01.106/index.html",
    "blurb": {
      "en": "SZLZ106 - Fatigue under random solicitation",
      "fr": "SZLZ106 - Fatigue sous sollicitation aléatoire"
    }
  },
  {
    "id": "v9.01.107",
    "part": "V9",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v9/v9.01.107/index.html",
    "blurb": {
      "en": "SZLZ107 - Multi-axial loading fatigue initiation criteria for critical structure location",
      "fr": "SZLZ107 - Critères d'amorçage en fatigue sous chargements multi-axiaux pour une localisation critique de la structure"
    }
  },
  {
    "id": "v9.01.108",
    "part": "V9",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v9/v9.01.108/index.html",
    "blurb": {
      "en": "SZLZ108 - Damage by TAHERI(TAHERI_MANSON and TAHERI_MIXTE) methods",
      "fr": "SZLZ108 - Dommage par les méthodes de TAHERI(TAHERI_MANSON et TAHERI_MIXTE)"
    }
  },
  {
    "id": "v9.01.109",
    "part": "V9",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v9/v9.01.109/index.html",
    "blurb": {
      "en": "SZLZ109 - Lemaitre damage to post-processing",
      "fr": "SZLZ109 - Dommage de Lemaitre en post-traitement"
    }
  },
  {
    "id": "v9.01.110",
    "part": "V9",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v9/v9.01.110/index.html",
    "blurb": {
      "en": "SZLZ110 - Generalized Lemaître damage in post-processing",
      "fr": "SZLZ110 - Dommage de Lemaître généralisé en post-traitement"
    }
  },
  {
    "id": "v9.01.111",
    "part": "V9",
    "sourceUrl": "https://codeaster.gitlab.io/doc/docaster/manuals/man_v/v9/v9.01.111/index.html",
    "blurb": {
      "en": "SZLZ111 - Damage to Lemaître-Sermageen post-processing POST_FATIGUE",
      "fr": "SZLZ111 - Dommage de Lemaître-Sermageen post-traitement POST_FATIGUE"
    }
  }
]`) as DocMeta[];
