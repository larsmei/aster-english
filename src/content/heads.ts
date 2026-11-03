export type Head = { frTitle: string; enTitle: string; frLead: string; enLead: string };

export const HEADS: Record<string, Head> = {
  "r0.00.01": {
    "frTitle": "Guide de lecture de la documentation de référence",
    "frLead": "r0.00.01 Guide de lecture de la documentation de référence Résumé: Ce document est un inventaire des documents de référence. Ceux-ci sont regroupés par fonctionnalités . 1 Algorithmes et méthodologies 1.1 Analyse modale R5.01.01 Solveurs modaux et résolution du problème généralisé (GEP) R5.01.02 Résolution du problème modal quadratique (QEP) R5.01.03 Paramèt",
    "enTitle": "Reading guide to the Reference documentation",
    "enLead": "r0.00.01 Reading guide to the Reference documentation Summary: This document is an inventory of the reference documents. These are grouped by features . 1 Algorithms and methodologies 1.1 Modal analysis R5.01.01 Modal solvers and solution of the generalised problem (GEP) R5.01.02 Solution of the quadratic modal problem (QEP) R5.01.03 Modal parameters and nor"
  },
  "r0.00.02": {
    "frTitle": "Références externes publiées",
    "frLead": "r0.00.02 Références externes publiées Résumé: Ce document constitue un inventaire évolutif des références externes publiées valorisant code aster sur des applications représentatives de dossiers industriels. Celles-ci sont regroupées par fonctionnalités . Il reprend la même classification que le document [R0,00,01]. 1 Algorithmes et méthodologies 1.1 Analyse",
    "enTitle": "Published external references",
    "enLead": "r0.00.02 Published external references Summary: This document is an evolving inventory of published external references demonstrating code aster on applications representative of industrial studies. They are grouped by features . It follows the same classification as document [R0,00,01]. 1 Algorithms and methodologies 1.1 Modal analysis 1.2 Transient dynamic"
  },
  "r3.01.00": {
    "frTitle": "La méthode des éléments finis isoparamétriques",
    "frLead": "r3.01.00 La méthode des éléments finis isoparamétriques Résumé: Ce document présente les fondements des éléments finis iso-paramétriques introduits dans Code Aster pour la modélisation des milieux continus 2D et 3D. On rappelle tout d'abord le passage d'une formulation forte à une formulation variationnelle, puis on détaille la discrétisation par éléments fi",
    "enTitle": "The isoparametric finite-element method",
    "enLead": "r3.01.00 The isoparametric finite-element method Summary: This document presents the foundations of the isoparametric finite elements introduced in Code Aster for the modelling of 2D and 3D continuous media. One first recalls the passage from a strong formulation to a variational formulation, then one details the discretisation by finite elements: use of a r"
  },
  "r3.01.01": {
    "frTitle": "Fonctions de forme et points d’intégration des éléments finis",
    "frLead": "r3.01.01 Fonctions de forme et points d’intégration des éléments finis Résumé: On décrit la géométrie et la topologie des éléments finis; pour chaque élément de référence, l’expression des fonctions de forme et les différentes familles de points d’intégration ainsi que les poids associés sont détaillés. 1 Introduction On appelle élément fini , un triplet (ph",
    "enTitle": "Shape functions and integration points of the finite elements",
    "enLead": "r3.01.01 Shape functions and integration points of the finite elements Summary: The geometry and the topology of the finite elements are described; for each reference element, the expression of the shape functions and the various families of integration points, together with the associated weights, are detailed. 1 Introduction One calls a finite element a tr"
  },
  "r3.03.01": {
    "frTitle": "Dualisation des conditions aux limites",
    "frLead": "r3.03.01 Dualisation des conditions aux limites Résumé : On explique le principe des multiplicateurs de Lagrange pour résoudre les systèmes linéaires sous contraintes affines issues de l’imposition des conditions aux limites de type cinématique. La matrice de rigidité obtenue n'étant plus définie positive, certains algorithmes de résolution deviennent donc i",
    "enTitle": "Dualisation of the boundary conditions",
    "enLead": "r3.03.01 Dualisation of the boundary conditions Summary: The principle of the Lagrange multipliers is explained in order to solve linear systems under affine constraints arising from the imposition of boundary conditions of kinematic type. The stiffness matrix obtained no longer being positive definite, certain solution algorithms therefore become unusable. "
  },
  "r3.03.02": {
    "frTitle": "Conditions de liaison de corps solide",
    "frLead": "r3.03.02 Conditions de liaison de corps solide Résumé On présente dans cette documentation une manière de modéliser des parties indéformables de structure, grâce au mot clé LIAISON SOLIDE de AFFE CHAR MECA. Table des matières 1 Introduction Le mot clé LIAISON SOLIDE des commandes AFFE CHAR MECA permet de modéliser une partie indéformable d’une structure. Le ",
    "enTitle": "Linkage conditions of a solid body",
    "enLead": "r3.03.02 Linkage conditions of a solid body Summary This documentation presents a way of modelling non-deformable parts of a structure, by means of the keyword LIAISON SOLIDE of AFFE CHAR MECA. Contents 1 Introduction The keyword LIAISON SOLIDE of the commands AFFE CHAR MECA makes it possible to model a non-deformable part of a structure. The principle adopt"
  },
  "r3.03.03": {
    "frTitle": "Raccords 3D – Poutre, 2D – Poutre, Coque - 3D, 3D-3D, 2D-2D",
    "frLead": "r3.03.03 Raccords 3D – Poutre, 2D – Poutre, Coque - 3D, 3D-3D, 2D-2D Résumé : Ce document explique le principe retenu dans pour relier : - une modélisation milieu continu 3D ou 2D et une modélisation poutre, - une modélisation milieu continu 3D et une modélisation coque ou plaque. - une modélisation milieu continu et une modélisation milieu continu de même d",
    "enTitle": "3D–beam, 2D–beam, shell–3D, 3D–3D and 2D–2D connections",
    "enLead": "r3.03.03 3D–beam, 2D–beam, shell–3D, 3D–3D and 2D–2D connections Summary: This document explains the principle adopted for connecting: - a 3D or 2D continuum modelling and a beam modelling, - a 3D continuum modelling and a shell or plate modelling. - a continuum modelling and a continuum modelling of the same dimension. For the 3D-beam or 2D-beam modelling, "
  },
  "r3.03.04": {
    "frTitle": "Efforts extérieurs de pression en grands déplacements",
    "frLead": "r3.03.04 Efforts extérieurs de pression en grands déplacements Résumé: Un chargement de pression en grands déplacements est un chargement suiveur. En employant des éléments de peau, on est amené à calculer, d'une part, un second membre dont le calcul est proche de celui en petits déplacements, et d'autre part, un terme de rigidité supplémentaire qui n'est, e",
    "enTitle": "External pressure forces in large displacements",
    "enLead": "r3.03.04 External pressure forces in large displacements Summary: A pressure loading in large displacements is a follower loading. By employing skin elements, one is led to compute, on the one hand, a right-hand side whose computation is close to that in small displacements and, on the other hand, an additional stiffness term which is, in general, not symmet"
  },
  "r3.03.05": {
    "frTitle": "Élimination des conditions aux limites dualisées",
    "frLead": "r3.03.05 Élimination des conditions aux limites dualisées Résumé : La prise en compte des conditions aux limites dans c ode aster peut être réalisée soit par une technique directe d'élimination dans des cas simples (AFFE CHAR CINE), soit grâce à une technique de dualisation (AFFE CHAR MECA), et à l'introduction de multiplicateurs de Lagrange, pour les cas le",
    "enTitle": "Elimination of the dualised boundary conditions",
    "enLead": "r3.03.05 Elimination of the dualised boundary conditions Summary : The taking into account of the boundary conditions in code aster may be carried out either by a direct elimination technique in simple cases (AFFE CHAR CINE), or by means of a dualisation technique (AFFE CHAR MECA), and by the introduction of Lagrange multipliers, for the most general cases. "
  },
  "r3.03.06": {
    "frTitle": "Liaison coque-poutre",
    "frLead": "r3.03.06 Liaison coque-poutre Résumé : On décrit ici la liaison coque-poutre, qui permet de raccorder deux parties de maillage, l’une constituée d’éléments de poutres (ou d’un élément discret) , et l’autre maillée en éléments de coques (pour représenter des phénomènes hors cinématique de poutre). Ce développement fonctionne donc sous des hypothèses traduisan",
    "enTitle": "Shell–beam connection",
    "enLead": "r3.03.06 Shell–beam connection Summary: The shell–beam connection is described here. It makes it possible to join two parts of a mesh, one made up of beam elements (or of a discrete element), and the other meshed with shell elements (in order to represent phenomena lying outside beam kinematics). This development therefore operates under assumptions which ex"
  },
  "r3.03.07": {
    "frTitle": "Pression suiveuse pour les éléments de coques volumiques",
    "frLead": "r3.03.07 Pression suiveuse pour les éléments de coques volumiques Résumé : Nous présentons dans ce document, le modèle utilisé pour calculer le chargement de type pression suiveuse agissant sur la surface moyenne des éléments finis de coques volumiques correspondant à la modélisation COQUE 3D. La discrétisation du chargement conduit à un vecteur nodal des fo",
    "enTitle": "Follower pressure for the volumetric shell elements",
    "enLead": "r3.03.07 Follower pressure for the volumetric shell elements Summary: We present in this document the model used to compute the follower-pressure loading acting on the middle surface of the volumetric shell finite elements corresponding to the COQUE 3D modelling. The discretisation of the loading leads to a nodal vector of the external forces and to a non-sy"
  },
  "r3.03.08": {
    "frTitle": "Relations cinématiques linéaires de type RBE3",
    "frLead": "r3.03.08 Relations cinématiques linéaires de type RBE3 Résumé : Ce document décrit la manière dont les relations cinématiques linéaires de type RBE3 sont calculées. 1 Introduction 1.1 Principe général Une relation cinématique linéaire de type RBE3 implique un nœud dit maître et plusieurs nœud dits esclaves. La relation a pour effet de distribuer le torseur d",
    "enTitle": "Linear kinematic relations of RBE3 type",
    "enLead": "r3.03.08 Linear kinematic relations of RBE3 type Summary: This document describes the way in which the linear kinematic relations of RBE3 type are computed. 1 Introduction 1.1 General principle A linear kinematic relation of RBE3 type involves a node said to be master and several nodes said to be slaves. The relation has the effect of distributing the force "
  },
  "r3.03.09": {
    "frTitle": "Raccord Arlequin 3D – Poutre",
    "frLead": "r3.03.09 Raccord Arlequin 3D – Poutre Résumé : Ce document explique la méthode Arlequin développée dans Code Aster pour relier une modélisation milieu continu 3D et une modélisation poutre. En 3D, ce raccord se traduit par des relations linéaires reliant les déplacements de l'ensemble de nœuds 3D (3 degrés de liberté par nœud) liés avec l'ensemble des nœuds ",
    "enTitle": "Arlequin 3D–beam connection",
    "enLead": "r3.03.09 Arlequin 3D–beam connection Summary: This document explains the Arlequin method developed in Code Aster in order to connect a 3D continuum modelling and a beam modelling. In 3D, this connection takes the form of linear relations linking the displacements of the set of 3D nodes (3 degrees of freedom per node) tied to the set of beam nodes (6 degrees "
  },
  "r3.06.02": {
    "frTitle": "Modélisation linéaire des éléments de milieu continu en thermique",
    "frLead": "r3.06.02 Modélisation linéaire des éléments de milieu continu en thermique Résumé: On décrit l'expression des termes élémentaires intervenant dans la modélisation linéaire de l'équation de la chaleur et dans les post-traitements. On donne l'expression mathématique de l'intégrale à évaluer, et pour chaque élément on fournit le nombre de points d'intégration u",
    "enTitle": "Linear modelling of continuum elements in thermal analysis",
    "enLead": "r3.06.02 Linear modelling of continuum elements in thermal analysis Summary: One describes the expression of the elementary terms entering into the linear modelling of the heat equation and into the post-processings. One gives the mathematical expression of the integral to be evaluated, and for each element one supplies the number of integration points used."
  },
  "r3.06.03": {
    "frTitle": "Calcul des contraintes aux nœuds par lissage local",
    "frLead": "r3.06.03 Calcul des contraintes aux nœuds par lissage local Résumé : On présente une méthode locale de calcul de contraintes aux nœuds à partir des contraintes aux points de GAUSS. Elle est utilisée dans les options SIGM ELNO et SIEF ELNO. Cette méthode se résume à calculer les contraintes aux sommets d'un élément en multipliant les contraintes aux points de",
    "enTitle": "Computation of stresses at the nodes by local smoothing",
    "enLead": "r3.06.03 Computation of stresses at the nodes by local smoothing Summary: A local method is presented for computing stresses at the nodes from the stresses at the GAUSS points. It is used in the options SIGM ELNO and SIEF ELNO. This method amounts to computing the stresses at the vertices of an element by multiplying the stresses at the GAUSS points by a smo"
  },
  "r3.06.04": {
    "frTitle": "Éléments de Fourier pour les structures axisymétriques",
    "frLead": "r3.06.04 Éléments de Fourier pour les structures axisymétriques Résumé Les éléments de Fourier sont destinés à calculer la réponse de structure à géométrie axisymétrique sollicitées par des chargements non axisymétriques décomposés en séries de Fourier. On expose dans ce document une théorie générale d’Analyse de Fourier avec couplage des modes symétriques e",
    "enTitle": "Fourier elements for axisymmetric structures",
    "enLead": "r3.06.04 Fourier elements for axisymmetric structures Summary Fourier elements are intended to compute the response of a structure of axisymmetric geometry subjected to non-axisymmetric loadings decomposed into Fourier series. This document sets out a general theory of Fourier analysis with coupling of the symmetric and antisymmetric modes in the anisotropic"
  },
  "r3.06.07": {
    "frTitle": "Diagonalisation de la matrice de masse thermique",
    "frLead": "r3.06.07 Diagonalisation de la matrice de masse thermique Résumé : Pour améliorer la régularité de la solution dans les problèmes de thermique transitoire, une des solutions consiste à \"lumper\" (c’est-à-dire: condenser sur la diagonale) la matrice de masse thermique (matrice de capacité). Cette possibilité est accessible par les modélisations PLAN DIAG, AXIS",
    "enTitle": "Diagonalisation of the thermal mass matrix",
    "enLead": "r3.06.07 Diagonalisation of the thermal mass matrix Summary: In order to improve the regularity of the solution in transient thermal problems, one solution consists in “lumping” (that is: condensing onto the diagonal) the thermal mass matrix (capacity matrix). This possibility is accessible through the modellings PLAN DIAG, AXIS DIAG and 3D DIAG for the phen"
  },
  "r3.06.08": {
    "frTitle": "Éléments finis traitant la quasi-incompressibilité",
    "frLead": "r3.06.08 Éléments finis traitant la quasi-incompressibilité Résumé: Dans certaines situations, le comportement mécanique du matériau impose que la dilatation volumique reste nulle, autrement dit que la déformation se fasse à volume constant : élasticité isotrope avec coefficient de Poisson égal à 0.5 , écoulements plastiques parfaits en analyse limite … On p",
    "enTitle": "Finite elements treating quasi-incompressibility",
    "enLead": "r3.06.08 Finite elements treating quasi-incompressibility Summary: In certain situations, the mechanical behaviour of the material requires that the volumetric dilatation remain zero, in other words that the strain take place at constant volume: isotropic elasticity with a Poisson's ratio equal to 0.5 , perfect plastic flows in limit analysis … One proposes "
  },
  "r3.06.09": {
    "frTitle": "Éléments finis de joint mécaniques et éléments finis de joint couplés hydromécanique",
    "frLead": "r3.06.09 Éléments finis de joint mécaniques et éléments finis de joint couplés hydromécanique Résumé: Cette documentation porte sur la description des éléments finis de joint mécanique linéaire et quadratique. Les modélisations en mécanique pure (xxx JOINT) supportent les deux types de maillages, tandis que les modélisations couplés hydromécaniques (xxx JOIN",
    "enTitle": "Mechanical joint finite elements and coupled hydromechanical joint finite elements",
    "enLead": "r3.06.09 Mechanical joint finite elements and coupled hydromechanical joint finite elements Summary: This documentation deals with the description of the linear and quadratic mechanical joint finite elements. The modellings in pure mechanics (xxx JOINT) support both types of mesh, whereas the coupled hydromechanical modellings (xxx JOINT HYME) are implemente"
  },
  "r3.06.10": {
    "frTitle": "Élément quadrangulaire à un point d’intégration, stabilisé par la méthode « Assumed Strain »",
    "frLead": "r3.06.10 Élément quadrangulaire à un point d’intégration, stabilisé par la méthode « Assumed Strain » Résumé: Malgré tout le potentiel de l’élément quadrilatère isoparamétrique linéaire pour le calcul par éléments finis, l’application d'une formulation bilinéaire classique pour définir son champ de déplacement abouti à des résultats médiocres. Si la sous int",
    "enTitle": "Quadrilateral element with one integration point, stabilised by the “Assumed Strain” method",
    "enLead": "r3.06.10 Quadrilateral element with one integration point, stabilised by the “Assumed Strain” method Summary: Despite all the potential of the linear isoparametric quadrilateral element for finite-element analysis, the application of a classical bilinear formulation to define its displacement field leads to poor results. If under-integration of the element m"
  },
  "r3.06.11": {
    "frTitle": "Élément hexaédrique à un point d’intégration, stabilisé par la méthode « Assumed Strain »",
    "frLead": "r3.06.11 Élément hexaédrique à un point d’intégration, stabilisé par la méthode « Assumed Strain » Résumé: L'élément hexaédrique à 8 nœuds sous-intégré standard à 1 point d'intégration introduit des modes parasites associés à une énergie nulle (modes de sablier) et peut conduire à une singularité de la matrice de raideur globale pour certaines conditions aux",
    "enTitle": "Hexahedral element with one integration point, stabilised by the “Assumed Strain” method",
    "enLead": "r3.06.11 Hexahedral element with one integration point, stabilised by the “Assumed Strain” method Summary: The standard under-integrated 8-node hexahedral element with 1 integration point introduces spurious modes associated with zero energy (hourglass modes) and can lead to a singularity of the global stiffness matrix for certain boundary conditions. The ra"
  },
  "r3.06.13": {
    "frTitle": "Eléments finis d’interface mixte pour des modèles de zone cohésive (xxx_INTERFACE et xxx_INTERFACE_S)",
    "frLead": "r3.06.13 Eléments finis d’interface mixte pour des modèles de zone cohésive (xxx INTERFACE et xxx INTERFACE S) Résumé: Ce document présente un élément fini d’interface mixte pour des modèles de zone cohésive. Les mots clés correspondant pour les modélisations dans Code Aster sont PLAN INTERFACE, AXIS INTERFACE,3D INTERFACE, PLAN INTERFACE S, AXIS INTERFACE S",
    "enTitle": "Mixed interface finite elements for cohesive-zone models (xxx_INTERFACE and xxx_INTERFACE_S)",
    "enLead": "r3.06.13 Mixed interface finite elements for cohesive-zone models (xxx INTERFACE and xxx INTERFACE S) Summary: This document presents a mixed interface finite element for cohesive-zone models. The corresponding keywords for the modellings in Code Aster are PLAN INTERFACE, AXIS INTERFACE,3D INTERFACE, PLAN INTERFACE S, AXIS INTERFACE S and 3D INTERFACE S. 1 I"
  },
  "r3.06.14": {
    "frTitle": "Introduction aux méthodes Hybrid High-Order (HHO)",
    "frLead": "r3.06.14 Introduction aux méthodes Hybrid High-Order (HHO) Résumé: Ce document présente les méthodes HHO pour les problèmes en mécanique non-linéaire (petites et grandes déformations) et thermique linéaire et non-linéaire. Les mots clés correspondant dans AFFE MODELE pour les modélisations mécaniques dans code aster sont D PLAN HHO et 3D HHO. Une extension a",
    "enTitle": "Introduction to the Hybrid High-Order (HHO) methods",
    "enLead": "r3.06.14 Introduction to the Hybrid High-Order (HHO) methods Summary: This document presents the HHO methods for problems in non-linear mechanics (small and large strains) and linear and non-linear thermal analysis. The corresponding keywords in AFFE MODELE for the mechanical modellings in code aster are D PLAN HHO and 3D HHO. An extension to non-local formu"
  },
  "r3.06.15": {
    "frTitle": "Éléments finis mixtes stabilisés",
    "frLead": "r3.06.15 Éléments finis mixtes stabilisés Résumé : Ces éléments finis visent à compléter la bibliothèque d'éléments finis disponibles en mettant à la disposition de l'utilisateur un élément fini ayant les caractéristiques suivantes : - linéaire. L'usage d'un élément fini linéaire peut, dans certains cas, présenter des avantages par rapport à un élément quadr",
    "enTitle": "Stabilised mixed finite elements",
    "enLead": "r3.06.15 Stabilised mixed finite elements Summary: These finite elements aim to complete the library of available finite elements by placing at the user's disposal a finite element having the following characteristics: - linear. The use of a linear finite element can, in certain cases, present advantages relative to a quadratic element: compatibility with li"
  },
  "r3.07.02": {
    "frTitle": "Modélisation numérique des structures minces : coques thermo-élasto-plastiques axisymétriques",
    "frLead": "r3.07.02 Modélisation numérique des structures minces : coques thermo-élasto-plastiques axisymétriques Résumé: On présente une formulation numérique pour la modélisation des structures à surface moyenne de géométrie particulière: coques à symétrie de révolution autour de l’axe \\mathit{Oy} (modélisation COQUE AXIS). On décrit complètement le cas thermoélasto-",
    "enTitle": "Numerical modelling of thin structures: axisymmetric thermo-elasto-plastic shells",
    "enLead": "r3.07.02 Numerical modelling of thin structures: axisymmetric thermo-elasto-plastic shells Summary: A numerical formulation is presented for the modelling of structures whose middle surface has a particular geometry: shells with symmetry of revolution about the axis \\mathit{Oy} (modelling COQUE AXIS). The isotropic thermo-elasto-plastic case is described com"
  },
  "r3.07.03": {
    "frTitle": "Éléments de plaque : modélisations DKT, DST, DKTG et Q4G",
    "frLead": "r3.07.03 Éléments de plaque : modélisations DKT, DST, DKTG et Q4G Résumé: Ces modélisations d’éléments finis de plaque sont destinées aux calculs en petites déformations et petits déplacements de structures minces courbes ou planes. Ce sont des éléments finis plans qui ne prennent pas en compte la courbure géométrique des structures minces, contrairement aux",
    "enTitle": "Plate elements: modellings DKT, DST, DKTG and Q4G",
    "enLead": "r3.07.03 Plate elements: modellings DKT, DST, DKTG and Q4G Summary: These modellings of plate finite elements are intended for analyses in small strains and small displacements of thin curved or plane structures. They are plane finite elements which do not take into account the geometric curvature of thin structures, unlike shell elements which are curved: p"
  },
  "r3.07.04": {
    "frTitle": "Éléments finis de coques volumiques",
    "frLead": "r3.07.04 Éléments finis de coques volumiques Résumé : Dans le but de compléter la bibliothèque d’éléments finis de plaque plans R3.07.03 actuellement disponibles dans Code Aster (DKT, DST, Q4G...), on se propose d’introduire deux éléments finis de coque volumique ou tridimensionnelle [bib1]. Cette modélisation COQUE 3D U3.12.03 permet d’effectuer des calculs",
    "enTitle": "Volumetric shell finite elements",
    "enLead": "r3.07.04 Volumetric shell finite elements Summary: In order to complete the library of plane-plate finite elements R3.07.03 currently available in Code Aster (DKT, DST, Q4G...), it is proposed to introduce two volumetric, or three-dimensional, shell finite elements [bib1]. This modelling COQUE 3D U3.12.03 makes it possible to carry out analyses of shell stru"
  },
  "r3.07.05": {
    "frTitle": "Éléments de coques volumiques en non linéaire géométrique",
    "frLead": "r3.07.05 Éléments de coques volumiques en non linéaire géométrique Résumé : Nous présentons dans ce document la formulation théorique et l’implantation numérique d’un élément fini de coque volumique pour des analyses en non linéaire géométrique. Cette approche doit permettre de prendre en compte de grands déplacements et de grandes rotations de structures mi",
    "enTitle": "Volumetric shell elements in geometric non-linearity",
    "enLead": "r3.07.05 Volumetric shell elements in geometric non-linearity Summary: We present in this document the theoretical formulation and the numerical implementation of a volumetric shell finite element for analyses in geometric non-linearity. This approach must make it possible to take into account large displacements and large rotations of thin structures, whose"
  },
  "r3.07.06": {
    "frTitle": "Traitement de l’excentrement pour les éléments de plaque DKT, DST, DKQ, dsq et q4g",
    "frLead": "r3.07.06 Traitement de l’excentrement pour les éléments de plaque DKT, DST, DKQ, dsq et q4g Résumé: Les éléments de plaque R3.07.03 sont destinés aux calculs de structures minces tridimensionnelles. Le feuillet moyen de ces structures ne coïncide pas toujours avec le plan d’épure ou plan de maillage. On introduit donc la notion d’excentrement du feuillet moy",
    "enTitle": "Treatment of the offset for the plate elements DKT, DST, DKQ, dsq and q4g",
    "enLead": "r3.07.06 Treatment of the offset for the plate elements DKT, DST, DKQ, dsq and q4g Summary: The plate elements R3.07.03 are intended for the analyses of thin three-dimensional structures. The middle surface of these structures does not always coincide with the layout plane or the plane of the mesh. One therefore introduces the notion of offset of the middle "
  },
  "r3.07.09": {
    "frTitle": "Éléments de plaque : Modélisation Q4GG",
    "frLead": "r3.07.09 Éléments de plaque : Modélisation Q4GG Résumé Ce document présente la formulation des éléments de plaque épaisse, utilisés dans la modélisation Q4GG. Pour cette modélisation, deux types éléments finis sont disponibles, selon les mailles : - Élément fini quadrangulaire (Q4G) - Élément fini triangulaire (T3G) Cette modélisation d’élément de plaque épa",
    "enTitle": "Plate elements: Modelling Q4GG",
    "enLead": "r3.07.09 Plate elements: Modelling Q4GG Summary This document presents the formulation of the thick-plate elements used in the modelling Q4GG. For this modelling, two types of finite element are available, depending on the mesh cells: - Quadrangular finite element (Q4G) - Triangular finite element (T3G) This modelling of a thick-plate element, like the model"
  },
  "r3.07.10": {
    "frTitle": "Éléments finis de coques « solides » – COQUE_SOLIDE",
    "frLead": "r3.07.10 Éléments finis de coques « solides » – COQUE SOLIDE Résumé : Dans le but de compléter la bibliothèque d’éléments finis de plaque plans R3.07.03 actuellement disponibles (DKT, DST, Q4G...), on se propose d’introduire un élément fini de coque solide . Cette modélisation COQUE SOLIDE (solid-shell element) permet d’effectuer des calculs de structures mi",
    "enTitle": "“Solid” shell finite elements – COQUE_SOLIDE",
    "enLead": "r3.07.10 “Solid” shell finite elements – COQUE SOLIDE Summary: In order to complete the library of plane-plate finite elements R3.07.03 currently available (DKT, DST, Q4G...), a solid-shell finite element is introduced. This COQUE SOLIDE modelling (solid-shell element) makes it possible to analyse thin structures of arbitrary shape. This documentation is pro"
  },
  "r3.07.11": {
    "frTitle": "r3.07.10 Éléments finis mixtes hybrides via FENICSx  – PLAQ_MITC",
    "frLead": "r3.07.10 Éléments finis mixtes hybrides via FENICSx – PLAQ MITC Résumé : Dans le but de compléter la bibliothèque d’éléments finis de plaque plans R3.07.03 actuellement disponibles (DKT, DST, Q4G...), on se propose d’introduire un élément fini mixte hybride basé sur l'approche MITC (en anglais, Mixed Interpolation of Tensorial Component ). Ce modèle permet d",
    "enTitle": "r3.07.10 Mixed hybrid finite elements via FENICSx  – PLAQ_MITC",
    "enLead": "r3.07.10 Mixed hybrid finite elements via FENICSx – PLAQ MITC Summary: With the aim of completing the library of flat-plate finite elements R3.07.03 currently available (DKT, DST, Q4G...), one proposes to introduce a mixed hybrid finite element based on the MITC approach (in English, Mixed Interpolation of Tensorial Component ). This model makes it possible "
  },
  "r3.08.01": {
    "frTitle": "Éléments “exacts” de poutres",
    "frLead": "r3.08.01 Éléments “exacts” de poutres Résumé : Ce document présente les éléments de poutre de Code Aster basés sur une résolution exacte des équations du modèle continu effectuée pour chaque élément du maillage. Les poutres sont droites: éléments POU D T et POU D E. Les poutres courbes seront modélisées à l’aide d’un maillage suffisamment fin, sur lequel on ",
    "enTitle": "“Exact” beam elements",
    "enLead": "r3.08.01 “Exact” beam elements Summary : This document presents the beam elements of Code Aster based on an exact solution of the equations of the continuous model carried out for each element of the mesh. The beams are straight: elements POU D T and POU D E. Curved beams will be modelled by means of a sufficiently fine mesh, to which a straight-beam model i"
  },
  "r3.08.02": {
    "frTitle": "Modélisation des câbles",
    "frLead": "r3.08.02 Modélisation des câbles Résumé : Les câbles sont des structures souples qui peuvent subir de grands déplacements. Leur analyse est donc non linéaire. Au point de vue mécanique, un câble ne peut supporter aucun moment et n'est le siège que d'un effort normal appelé tension. L'expression du travail virtuel et sa différentiation par rapport aux déplace",
    "enTitle": "Modelling of cables",
    "enLead": "r3.08.02 Modelling of cables Summary: Cables are flexible structures which can undergo large displacements. Their analysis is therefore non-linear. From the mechanical point of view, a cable can support no moment and is the seat only of a normal force called tension. The expression of the virtual work and its differentiation with respect to the displacements"
  },
  "r3.08.03": {
    "frTitle": "Calcul des caractéristiques d’une poutre de section transversale quelconque",
    "frLead": "r3.08.03 Calcul des caractéristiques d’une poutre de section transversale quelconque Résumé: On présente le principe du calcul des différentes grandeurs caractéristiques des sections de poutres. Celles-ci sont établies à partir des caractéristiques géométriques de la section transversale de la poutre. Ces valeurs sont à fournir à l’opérande SECTION:’GENERALE",
    "enTitle": "Computation of the characteristics of a beam of arbitrary cross-section",
    "enLead": "r3.08.03 Computation of the characteristics of a beam of arbitrary cross-section Summary: The principle of the computation of the various characteristic quantities of beam sections is presented. These are established from the geometric characteristics of the cross-section of the beam. These values are to be supplied to the operand SECTION:’GENERALE’ of the o"
  },
  "r3.08.04": {
    "frTitle": "Élément de poutre à 7 degrés de liberté pour la prise en compte du gauchissement",
    "frLead": "r3.08.04 Élément de poutre à 7 degrés de liberté pour la prise en compte du gauchissement Résumé: Ce document présente l’élément POU D TG qui est un élément fini de poutre droite avec prise en compte du gauchissement des sections. Il permet le calcul des poutres à sections transverses minces et profil ouvert, avec torsion gênée ou libre. En ce qui concerne l",
    "enTitle": "Beam element with 7 degrees of freedom for taking warping into account",
    "enLead": "r3.08.04 Beam element with 7 degrees of freedom for taking warping into account Summary: This document presents the element POU D TG, which is a straight-beam finite element with taking into account of the warping of the cross-sections. It makes it possible to analyse beams with thin open cross-sections, with restrained or free torsion. As regards bending, t"
  },
  "r3.08.05": {
    "frTitle": "Un élément fini de câble-poulie",
    "frLead": "r3.08.05 Un élément fini de câble-poulie Résumé : Les poulies jouent un rôle important dans les structures de câbles telles que les lignes électriques aériennes. Il est donc utile de savoir les modéliser d'une façon à la fois réaliste et performante. On présente la formulation élément fini d'un tronçon de câble passant par une poulie : expressions des forces",
    "enTitle": "A cable–pulley finite element",
    "enLead": "r3.08.05 A cable–pulley finite element Summary: Pulleys play an important role in cable structures such as overhead electric lines. It is therefore useful to know how to model them in a manner which is at once realistic and efficient. The finite-element formulation of a length of cable passing over a pulley is presented: expressions of the internal forces an"
  },
  "r3.08.06": {
    "frTitle": "Éléments finis de tuyau droit et courbe avec ovalisation, gonflement et gauchissement en élasto-plasticité",
    "frLead": "r3.08.06 Éléments finis de tuyau droit et courbe avec ovalisation, gonflement et gauchissement en élasto-plasticité Résumé : Ce document présente la modélisation d’un élément fini de tuyau utilisable dans des calculs de tuyauteries en élasticité ou en plasticité. Les tuyaux, courbes ou droits, peuvent être relativement épais (rapport épaisseur sur rayon de l",
    "enTitle": "Straight and curved pipe finite elements with ovalisation, swelling and warping in elastoplasticity",
    "enLead": "r3.08.06 Straight and curved pipe finite elements with ovalisation, swelling and warping in elastoplasticity Summary: This document presents the modelling of a pipe finite element usable in piping analyses in elasticity or in plasticity. The pipes, curved or straight, may be relatively thick (ratio of thickness to radius of the cross-section up to 0.2 ) and "
  },
  "r3.08.07": {
    "frTitle": "Éléments MEMBRANE et GRILLE_MEMBRANE",
    "frLead": "r3.08.07 Éléments MEMBRANE et GRILLE MEMBRANE Résumé: Ce document décrit la formulation et l’implantation dans Code Aster des éléments MEMBRANE et GRILLE MEMBRANE. Les éléments MEMBRANE permettent de modéliser un comportement linéaire de membrane quelconque ou un comportement non linéaire de membranes isotropes. Les éléments GRILLE MEMBRANE sont des éléments",
    "enTitle": "MEMBRANE and GRILLE_MEMBRANE elements",
    "enLead": "r3.08.07 MEMBRANE and GRILLE MEMBRANE elements Summary: This document describes the formulation and the implementation in Code Aster of the MEMBRANE and GRILLE MEMBRANE elements. The MEMBRANE elements make it possible to model a linear behaviour of an arbitrary membrane or a non-linear behaviour of isotropic membranes. The GRILLE MEMBRANE elements are finite"
  },
  "r3.08.08": {
    "frTitle": "Élément de poutre multi-fibres (droite) POU_D_EM",
    "frLead": "r3.08.08 Élément de poutre multi-fibres (droite) POU D EM Résumé : Ce document présente les éléments de poutre multifibre basés sur une résolution d’un problème de poutre pour lequel chaque section d’une poutre est divisée en plusieurs fibres. Chaque fibre se comporte alors comme une poutre d’Euler. Plusieurs matériaux peuvent être affectés sur un seul suppo",
    "enTitle": "Multi-fibre beam element (straight) POU_D_EM",
    "enLead": "r3.08.08 Multi-fibre beam element (straight) POU D EM Summary: This document presents the multi-fibre beam elements based on the solution of a beam problem for which each cross-section of a beam is divided into several fibres. Each fibre then behaves as an Euler beam. Several materials may be assigned on a single finite-element support (SEG2), which avoids h"
  },
  "r3.08.09": {
    "frTitle": "Poutres multi-fibres en grands déplacements",
    "frLead": "r3.08.09 Poutres multi-fibres en grands déplacements Résumé: Ce document présente le traitement des grands déplacements de l'élément de poutre multi-fibres POU D TGM activé par le mot-clé DEFORMATION='GROT GDEP'. Il permet de combiner à la fois non-linéarité matériau (description de la section en fibres) et non-linéarité géométrique. La description des grand",
    "enTitle": "Multi-fibre beams in large displacements",
    "enLead": "r3.08.09 Multi-fibre beams in large displacements Summary: This document presents the treatment of the large displacements of the multi-fibre beam element POU D TGM activated by the keyword DEFORMATION='GROT GDEP'. It makes it possible to combine both material non-linearity (description of the cross-section in fibres) and geometric non-linearity. The descrip"
  },
  "r3.08.10": {
    "frTitle": "Élément CABLE_GAINE",
    "frLead": "r3.08.10 Élément CABLE GAINE Résumé: L'élément CABLE GAINE présenté dans ce document a pour but de modéliser des câbles de précontrainte pouvant frotter ou glisser dans leurs gaines et donc ne suivant pas totalement les déplacements du béton dans lequel ils sont plongés. Il vient donc en complément de la modélisation BARREalliée à l'opérateur DEFI CABLE BP q",
    "enTitle": "Element CABLE_GAINE",
    "enLead": "r3.08.10 Element CABLE GAINE Summary: The element CABLE GAINE presented in this document is intended to model prestressing cables which may rub or slide in their sheaths and which therefore do not entirely follow the displacements of the concrete in which they are embedded. It therefore complements the modelling BARRE combined with the operator DEFI CABLE BP"
  },
  "r3.11.01": {
    "frTitle": "Formulation d'un modèle de thermique pour les coques minces",
    "frLead": "r3.11.01 Formulation d'un modèle de thermique pour les coques minces Résumé : Le modèle présenté ici est issu de l'analyse asymptotique des équations de la thermique lorsque l'épaisseur de la structure tend vers zéro. La température est décrite par 3 champs définis sur la surface moyenne de la coque. On montre sur quelques exemples, les capacités du modèle p",
    "enTitle": "Formulation of a thermal model for thin shells",
    "enLead": "r3.11.01 Formulation of a thermal model for thin shells Summary: The model presented here comes from the asymptotic analysis of the heat equations when the thickness of the structure tends to zero. The temperature is described by 3 fields defined on the middle surface of the shell. One shows, on a few examples, the capabilities of the model by reference to 3"
  },
  "r4.01.01": {
    "frTitle": "Pré et Post-traitement pour les coques minces en matériaux composites",
    "frLead": "r4.01.01 Pré et Post-traitement pour les coques minces en matériaux composites Résumé: On étend les résultats de la théorie des éléments de plaques exposés dans la documentation r3.07.03 au cas des matériaux orthotropes multi-couches. La documentation proposée regroupe les aspects thermiques et thermo-élasto-mécaniques. L’utilisation de ces matériaux n’est t",
    "enTitle": "Pre- and post-processing for thin shells in composite materials",
    "enLead": "r4.01.01 Pre- and post-processing for thin shells in composite materials Summary: The results of the plate-element theory set out in the documentation r3.07.03 are extended to the case of multilayer orthotropic materials. The documentation proposed brings together the thermal and thermo-elasto-mechanical aspects. The use of these materials is theoretically v"
  },
  "r4.01.02": {
    "frTitle": "Élasticité anisotrope",
    "frLead": "r4.01.02 Élasticité anisotrope Résumé Ce document traite de la thermoélasticité anisotrope, utilisée pour les modélisations de milieux continus 3D et 2D(C PLAN, D PLAN, AXIS), ou les couches des coques composites. Le milieu thermoélastique peut être anisotrope suivant les 3 directions (on parle d’élasticité orthotrope), ou bien dans isotrope dans deux direct",
    "enTitle": "Anisotropic elasticity",
    "enLead": "r4.01.02 Anisotropic elasticity Summary This document deals with anisotropic thermoelasticity, used for the modellings of 3D and 2D continuous media (C PLAN, D PLAN, AXIS), or the layers of composite shells. The thermoelastic medium may be anisotropic in the 3 directions (one speaks of orthotropic elasticity), or isotropic in two directions (one speaks of tr"
  },
  "r4.02.01": {
    "frTitle": "Éléments finis en acoustique",
    "frLead": "r4.02.01 Éléments finis en acoustique Résumé: Ce document décrit en acoustique linéaire stationnaire à basse fréquence en milieu borné les équations utilisées, les formulations variationnelles qui en découlent ainsi que la traduction correspondante en éléments finis isoparamétriques à l'aide d'une formulation usuelle à une inconnue p (pression acoustique). C",
    "enTitle": "Finite elements in acoustics",
    "enLead": "r4.02.01 Finite elements in acoustics Summary: This document describes, for stationary linear acoustics at low frequency in a bounded medium, the equations used, the variational formulations which follow from them, and the corresponding translation into isoparametric finite elements by means of a usual formulation with one unknown p (acoustic pressure). This"
  },
  "r4.02.02": {
    "frTitle": "Éléments pour le couplage interaction fluide-structure linéaire avec fluide inerte",
    "frLead": "r4.02.02 Éléments pour le couplage interaction fluide-structure linéaire avec fluide inerte Résumé : Les éléments décrits ici permettent de réaliser des calculs des fréquences et de modes propres d'une structure couplée à un fluide. Ils permettent également le calcul de réponse acoustique. Après la formulation du problème de couplage fluide-structure, ce doc",
    "enTitle": "Elements for linear fluid-structure interaction coupling with an inert fluid",
    "enLead": "r4.02.02 Elements for linear fluid-structure interaction coupling with an inert fluid Summary: The elements described here make it possible to carry out computations of the frequencies and eigenmodes of a structure coupled to a fluid. They also make it possible to compute the acoustic response. After the formulation of the fluid-structure coupling problem, t"
  },
  "r4.02.03": {
    "frTitle": "Poutre élasto-acoustique",
    "frLead": "r4.02.03 Poutre élasto-acoustique Résumé : On présente un élément de couplage élasto‑acoustique droit qui s'applique sur un élément de structure de type poutre de Timoshenko. Cet élément permet de réaliser, en vibro‑acoustique, l'analyse modale d'une tuyauterie droite contenant du fluide sous pression (eau, vapeur…). On peut aussi effectuer des calculs de ré",
    "enTitle": "Elasto-acoustic beam",
    "enLead": "r4.02.03 Elasto-acoustic beam Summary: One presents a straight elasto-acoustic coupling element which applies to a structural element of Timoshenko beam type. This element makes it possible to carry out, in vibro-acoustics, the modal analysis of a straight pipe containing a pressurised fluid (water, steam…). One may also carry out response analyses to fluid "
  },
  "r4.02.04": {
    "frTitle": "Couplage Fluide - Structure avec surface Libre",
    "frLead": "r4.02.04 Couplage Fluide - Structure avec surface Libre Résumé : On présente ici le couplage fluide / structure dans le cas où le fluide présente une surface libre. Des éléments de surface libre ont été implantés dans Code Aster pour calculer les modes de ballotement d'un fluide couplé à une structure élastique pour un problème tridimensionnel. Table des mat",
    "enTitle": "Fluid–structure coupling with a free surface",
    "enLead": "r4.02.04 Fluid–structure coupling with a free surface Summary: Fluid/structure coupling is presented here in the case where the fluid has a free surface. Free-surface elements have been implemented in Code Aster in order to compute the sloshing modes of a fluid coupled to an elastic structure for a three-dimensional problem. Contents 1 Notation | P | : | the"
  },
  "r4.02.05": {
    "frTitle": "Éléments de frontière absorbante",
    "frLead": "r4.02.05 Éléments de frontière absorbante Résumé Ce document décrit l'implantation dans code aster des éléments de frontière absorbante. Ces éléments de type paraxiaux, dont on décrit ici la théorie, sont affectés à des frontières de domaines élastiques ou fluides pour traiter des problèmes 2D ou 3D d'interaction sol-structure ou sol-fluide-structure. Ils pe",
    "enTitle": "Absorbing boundary elements",
    "enLead": "r4.02.05 Absorbing boundary elements Summary: This document describes the implementation in code aster of absorbing boundary elements. These elements, of paraxial type, whose theory is described here, are assigned to boundaries of elastic or fluid domains in order to treat 2D or 3D problems of soil–structure or soil–fluid–structure interaction. They make it "
  },
  "r4.03.05": {
    "frTitle": "Modèles probabilistes paramétriques et non-paramétriques en dynamique",
    "frLead": "r4.03.05 Modèles probabilistes paramétriques et non-paramétriques en dynamique Résumé: Ce document décrit deux approches probabilistes, l'une paramétrique et l'autre non paramétrique afin de prendre en compte les incertitudes de modèle et de modélisation pour les systèmes dynamiques en mécanique des structures. L'approche non-paramétrique est spécifique à la",
    "enTitle": "Parametric and non-parametric probabilistic models in dynamics",
    "enLead": "r4.03.05 Parametric and non-parametric probabilistic models in dynamics Summary: This document describes two probabilistic approaches, one parametric and the other non-parametric, in order to take into account model uncertainties and modelling uncertainties for dynamic systems in structural mechanics. The non-parametric approach is specific to the solution o"
  },
  "r4.03.06": {
    "frTitle": "1 **r4.03.06** Algorithmes de recalage",
    "frLead": "1 r4.03.06 Algorithmes de recalage Résumé: Dans ce document on présente les algorithmes de recalage implémentés dans MACR RECAL. Il s’agit d'abord d’un algorithme de Levenberg-Marquardt avec bornes et ensuite d'un algorithme évolutionnaire. Pour le premier on décrit dans un premier temps la méthode générale avant d’en préciser certains éléments. Sont détaill",
    "enTitle": "1 **r4.03.06** Recalibration algorithms",
    "enLead": "1 r4.03.06 Recalibration algorithms Summary: This document presents the recalibration algorithms implemented in MACR RECAL. These are, first, a bounded Levenberg–Marquardt algorithm and, second, an evolutionary algorithm. For the first, the general method is described before certain elements are specified. The calculation of the functional and of the Jacobia"
  },
  "r4.04.01": {
    "frTitle": "Modèles de comportement métallurgique des aciers",
    "frLead": "r4.04.01 Modèles de comportement métallurgique des aciers Résumé : Ce document présente les modèles de comportement métallurgique au chauffage et au refroidissement permettant de décrire les transformations structurales des aciers lors de cycles thermiques excédant des températures de l'ordre de 800°C . Pour les deux types de transformations (au chauffage et",
    "enTitle": "Metallurgical constitutive models of steels",
    "enLead": "r4.04.01 Metallurgical constitutive models of steels Summary: This document presents the metallurgical constitutive models on heating and on cooling making it possible to describe the structural transformations of steels during thermal cycles exceeding temperatures of the order of 800°C . For the two types of transformation (on heating and on cooling) a deta"
  },
  "r4.04.02": {
    "frTitle": "Modélisation élasto(visco)plastique prenant en compte des transformations métallurgiques",
    "frLead": "r4.04.02 Modélisation élasto(visco)plastique prenant en compte des transformations métallurgiques Résumé: Ce document présente la modélisation mise en place dans code aster pour l'analyse mécanique d’opérations générant des transformations métallurgiques. On présente les différents effets mécaniques résultant des transformations structurales à prendre en com",
    "enTitle": "Elasto-(visco)plastic modelling taking metallurgical transformations into account",
    "enLead": "r4.04.02 Elasto-(visco)plastic modelling taking metallurgical transformations into account Summary: This document presents the modelling implemented in code aster for the mechanical analysis of operations that generate metallurgical transformations. The various mechanical effects resulting from the structural transformations to be taken into account, and the"
  },
  "r4.04.03": {
    "frTitle": "Loi de comportement élasto(visco)plastique en grandes déformations avec transformations métallurgiques",
    "frLead": "r4.04.03 Loi de comportement élasto(visco)plastique en grandes déformations avec transformations métallurgiques Résumé Ce document présente un modèle de comportement thermo-élasto-(visco)plastique à écrouissage isotrope avec effets des transformations métallurgiques écrit en grandes déformations. Ce modèle peut s’utiliser pour des modélisations tridimensionn",
    "enTitle": "Elasto(visco)plastic constitutive law in large strains with metallurgical transformations",
    "enLead": "r4.04.03 Elasto(visco)plastic constitutive law in large strains with metallurgical transformations Summary This document presents a thermo-elasto-(visco)plastic constitutive model with isotropic hardening, with the effects of the metallurgical transformations, written in large strains. This model may be used for three-dimensional, axisymmetric and plane-stra"
  },
  "r4.04.04": {
    "frTitle": "Modèles de comportement métallurgique du zircaloy",
    "frLead": "r4.04.04 Modèles de comportement métallurgique du zircaloy Résumé : Ce document présente les modèles de comportement métallurgique décrivant les transformations structurales, au chauffage et au refroidissement, que subit le zircaloy (gaine de crayon de combustible) entre environ 700°C et 1000°C . 1 Introduction Les gaines de combustibles des réacteurs nucléa",
    "enTitle": "Metallurgical constitutive models of Zircaloy",
    "enLead": "r4.04.04 Metallurgical constitutive models of Zircaloy Summary: This document presents the metallurgical constitutive models describing the structural transformations, on heating and on cooling, undergone by Zircaloy (fuel-rod cladding) between about 700°C and 1000°C . 1 Introduction The fuel claddings of pressurised-water nuclear reactors are made of zircon"
  },
  "r4.04.05": {
    "frTitle": "Modèle de comportement élasto-visqueux META_LEMA_ANI avec prise en compte de la métallurgie pour les tubes de gaine du crayon combustible",
    "frLead": "r4.04.05 Modèle de comportement élasto-visqueux META LEMA ANI avec prise en compte de la métallurgie pour les tubes de gaine du crayon combustible Résumé : En vue de la réalisation de calculs 3D de la gaine combustible en situation accidentelle de type APRP, le département MMC a formulé, pour les tubes en Zircaloy, un modèle de comportement élastovisqueux, s",
    "enTitle": "Elasto-viscous constitutive model META_LEMA_ANI with account taken of the metallurgy for the cladding tubes of the fuel rod",
    "enLead": "r4.04.05 Elasto-viscous constitutive model META LEMA ANI with account taken of the metallurgy for the cladding tubes of the fuel rod Summary: With a view to carrying out 3D analyses of the fuel cladding in an accidental situation of APRP type, the MMC department has formulated, for Zircaloy tubes, an elastoviscous constitutive model, without a threshold, ani"
  },
  "r4.05.01": {
    "frTitle": "Réponse sismique par analyse transitoire",
    "frLead": "r4.05.01 Réponse sismique par analyse transitoire Résumé Les méthodes les plus fréquemment utilisées pour l'analyse sismique des structures sont les méthodes spectrales et les méthodes transitoires. Les méthodes transitoires (directe linéaire ou non, par synthèse modale) permettent de calculer la réponse de structures sous l’effet de séismes imposés: excitat",
    "enTitle": "Seismic response by transient analysis",
    "enLead": "r4.05.01 Seismic response by transient analysis Summary The methods most frequently used for the seismic analysis of structures are the spectral methods and the transient methods. The transient methods (direct linear or not, by modal synthesis) make it possible to compute the response of structures under the effect of imposed earthquakes: single excitation ("
  },
  "r4.05.02": {
    "frTitle": "Approche stochastique pour l’analyse sismique",
    "frLead": "r4.05.02 Approche stochastique pour l’analyse sismique Résumé : Ce document présente une méthode de calcul probabiliste pour déterminer la réponse d’une structure soumise à une excitation aléatoire de type sismique à partir des interspectres de l’excitation aux points d’appui de la structure. La réponse est elle-même exprimée sous forme d’interspectres. 1 In",
    "enTitle": "Stochastic approach for seismic analysis",
    "enLead": "r4.05.02 Stochastic approach for seismic analysis Summary: This document presents a probabilistic analysis method for determining the response of a structure subjected to a random excitation of seismic type, from the cross-spectra of the excitation at the support points of the structure. The response is itself expressed in the form of cross-spectra. 1 Introd"
  },
  "r4.05.03": {
    "frTitle": "Réponse sismique par méthode spectrale",
    "frLead": "r4.05.03 Réponse sismique par méthode spectrale Résumé : L’étude de la réponse d’une structure sous l’effet de mouvements imposés de type sismique, avec un mouvement imposé unique (mono-appui) ou multiple (multi-appui) est possible en analyse transitoire (time history). On se reportera à la note R4.05.01. Pour des études de dimensionnement, on peut ne s'inté",
    "enTitle": "Seismic response by the spectral method",
    "enLead": "r4.05.03 Seismic response by the spectral method Summary: The study of the response of a structure under the effect of imposed motions of seismic type, with a single imposed motion (single-support) or a multiple one (multi-support) is possible in transient analysis (time history). One will refer to the note R4.05.01. For design studies, one may be interested"
  },
  "r4.05.04": {
    "frTitle": "Interaction sol-structure avec variabilité spatiale (opérateur DYNA_ISS_VARI)",
    "frLead": "r4.05.04 Interaction sol-structure avec variabilité spatiale (opérateur DYNA ISS VARI) Résumé: Ce document est une notice théorique décrivant les méthodes développées dans l'opérateur DYNA ISS VARI. Cet opérateur permet de traiter des problèmes d'interaction sol-structure (ISS) en analyse sismique où on souhaite tenir compte de la variabilité spatiale du cha",
    "enTitle": "Soil-structure interaction with spatial variability (operator DYNA_ISS_VARI)",
    "enLead": "r4.05.04 Soil-structure interaction with spatial variability (operator DYNA ISS VARI) Summary: This document is a theoretical note describing the methods developed in the operator DYNA ISS VARI. This operator makes it possible to treat soil-structure interaction (SSI) problems in seismic analysis in which one wishes to take account of the spatial variability"
  },
  "r4.05.05": {
    "frTitle": "Génération de signaux sismiques",
    "frLead": "r4.05.05 Génération de signaux sismiques Résumé: Dans les études sismiques «best-estimate», on est souvent amené à effectuer des analyses dynamiques transitoires. Le signal sismique est alors modélisé par un processus stochastique. Ce processus exprime l'accélération au sol en fonction du temps. On appelle trajectoires les signaux temporels (accélérogrammes)",
    "enTitle": "Generation of seismic signals",
    "enLead": "r4.05.05 Generation of seismic signals Summary: In \"best-estimate\" seismic studies, one is often led to carry out transient dynamic analyses. The seismic signal is then modelled by a stochastic process. This process expresses the ground acceleration as a function of time. One calls trajectories the time signals (accelerograms) which are realisations of the s"
  },
  "r4.05.06": {
    "frTitle": "Méthode linéaire équivalent pour la propagation des ondes en 1D",
    "frLead": "r4.05.06 Méthode linéaire équivalent pour la propagation des ondes en 1D Résumé Ce document décrit la méthode linéaire équivalent et son implémentation dans Code Aster dans la commande DEFI SOL EQUI U4.81.31. La méthode linéaire équivalent permet de calculer la réponse d’une colonne de sol unidimensionnelle (1D – une composante) ou multidimensionnelle (1D – ",
    "enTitle": "Equivalent linear method for the propagation of waves in 1D",
    "enLead": "r4.05.06 Equivalent linear method for the propagation of waves in 1D Summary This document describes the equivalent linear method and its implementation in Code Aster in the command DEFI SOL EQUI U4.81.31. The equivalent linear method makes it possible to compute the response of a one-dimensional soil column (1D – one component) or of a multidimensional one "
  },
  "r4.05.07": {
    "frTitle": "Interaction sol-structure non-linéaire avec la méthode Laplace-Temps",
    "frLead": "r4.05.07 Interaction sol-structure non-linéaire avec la méthode Laplace-Temps Résumé: Ce document est une notice théorique décrivant la méthode Laplace-Temps ( cf . U2.06.05) développée dans l'opérateur CALC MISS ( cf . U7.03.12) pour le type de résultat 'FICHIER TEMPS'. Elle s'inscrit dans le cadre des calculs d'interaction sol-structure (ISS) non-linéaires",
    "enTitle": "Non-linear soil–structure interaction with the Laplace–Time method",
    "enLead": "r4.05.07 Non-linear soil–structure interaction with the Laplace–Time method Summary: This document is a theoretical note describing the Laplace–Time method ( cf . U2.06.05) developed in the operator CALC MISS ( cf . U7.03.12) for the result type 'FICHIER TEMPS'. It belongs to the framework of non-linear soil–structure interaction (SSI) analyses based on the "
  },
  "r4.05.08": {
    "frTitle": "Méthode de prise en compte de l'interaction Plancher-Matériel",
    "frLead": "r4.05.08 Méthode de prise en compte de l'interaction Plancher-Matériel Résumé: Dans les études sismiques, on est souvent amené à réaliser des spectres de plancher pour des bâtiments où les équipements sont modélisés par des masses ajoutées au plancher. Ces masses supplémentaires impactent les spectres de plancher. La méthode proposée ici permet de modifier l",
    "enTitle": "Method for taking into account the Floor–Equipment interaction",
    "enLead": "r4.05.08 Method for taking into account the Floor–Equipment interaction Summary: In seismic studies, one is often led to produce floor spectra for buildings in which the equipment is modelled by masses added to the floor. These additional masses affect the floor spectra. The method proposed here makes it possible to modify the floor spectra by taking into ac"
  },
  "r4.06.02": {
    "frTitle": "Calcul modal par sous-structuration dynamique classique",
    "frLead": "r4.06.02 Calcul modal par sous-structuration dynamique classique Résumé: Ce rapport présente les bases théoriques des méthodes de calcul par synthèse modale. Nous débutons par la description de la transformation de RITZ et des méthodes de recombinaison modale qui en découlent. Puis, nous présentons la synthèse modale qui utilise les techniques classiques de ",
    "enTitle": "Modal analysis by classical dynamic substructuring",
    "enLead": "r4.06.02 Modal analysis by classical dynamic substructuring Summary: This report presents the theoretical bases of the methods of analysis by modal synthesis. We begin with the description of the RITZ transformation and of the methods of modal recombination which follow from it. Then, we present the modal synthesis which uses the classical techniques of subs"
  },
  "r4.06.03": {
    "frTitle": "Sous-structuration dynamique cyclique",
    "frLead": "r4.06.03 Sous-structuration dynamique cyclique Résumé : Ce rapport repose sur les notions de calcul par synthèse modale décrites dans le document R4.06.02. Nous abordons les méthodes de sous‑structuration dynamique cyclique. Complètement dédiées à l'étude des structures à répétitivité cyclique, elles tirent le meilleur parti des particularités géométriques d",
    "enTitle": "Cyclic dynamic substructuring",
    "enLead": "r4.06.03 Cyclic dynamic substructuring Summary: This report rests on the notions of analysis by modal synthesis described in the document R4.06.02. We address the methods of cyclic dynamic substructuring. Entirely devoted to the study of structures with cyclic repetitivity, they take the best advantage of the geometric particularities of the structure. The C"
  },
  "r4.07.02": {
    "frTitle": "Modélisation des excitations turbulentes",
    "frLead": "r4.07.02 Modélisation des excitations turbulentes Résumé: On décrit la modélisation des excitations turbulentes disponible dans Code Aster et la manière dont ces dernières sont prises en compte dans un calcul de dynamique. Les excitations turbulentes sont caractérisées par une densité spectrale d’efforts, spécifiée à l'aide de l’opérateur DEFI SPEC TURB U4.4",
    "enTitle": "Modelling of turbulent excitations",
    "enLead": "r4.07.02 Modelling of turbulent excitations Summary: The modelling of the turbulent excitations available in Code Aster is described, together with the way in which they are taken into account in a dynamic analysis. The turbulent excitations are characterised by a spectral density of forces, specified by means of the operator DEFI SPEC TURB U4.44.31. Their t"
  },
  "r4.07.03": {
    "frTitle": "Calcul de matrice de masse ajoutéesur base modale",
    "frLead": "r4.07.03 Calcul de matrice de masse ajoutéesur base modale Résumé: Ce document présente un aspect du couplage fluide/structure: lorsqu'une structure vibrante se trouve baignée par un fluide qu'on suppose sans écoulement, incompressible et non visqueux, elle ressent des forces de pression dont la résultante est proportionnelle à l'accélération de la structure",
    "enTitle": "Computation of an added-mass matrix on a modal basis",
    "enLead": "r4.07.03 Computation of an added-mass matrix on a modal basis Summary: This document presents one aspect of fluid/structure coupling: when a vibrating structure is immersed in a fluid assumed to be without flow, incompressible and inviscid, it experiences pressure forces whose resultant is proportional to the acceleration of the structure in the fluid: the p"
  },
  "r4.07.04": {
    "frTitle": "Couplage fluide-structure pour les structures tubulaires et les coques coaxiales",
    "frLead": "r4.07.04 Couplage fluide-structure pour les structures tubulaires et les coques coaxiales Résumé : Ce document décrit les différents modèles de couplage fluide-structure disponibles à partir de l’opérateur CALC FLUI STRU. Ces modèles permettent de simuler les forces de couplage fluide-élastique dans les configurations suivantes : - faisceaux de tubes sous éc",
    "enTitle": "Fluid–structure coupling for tubular structures and coaxial shells",
    "enLead": "r4.07.04 Fluid–structure coupling for tubular structures and coaxial shells Summary: This document describes the various fluid–structure coupling models available from the operator CALC FLUI STRU. These models make it possible to simulate the fluid-elastic coupling forces in the following configurations: - tube bundles under transverse flow (essentially for "
  },
  "r4.07.05": {
    "frTitle": "Homogénéisation d’un réseau de poutres baignant dans un fluide",
    "frLead": "r4.07.05 Homogénéisation d’un réseau de poutres baignant dans un fluide Résumé: Cette note décrit un modèle obtenu par une méthode d’homogénéisation pour caractériser le comportement vibratoire d’un réseau périodique de tubes baignés par un fluide incompressible. Ensuite le développement d’un élément fini associé à ce modèle homogénéisé est présenté. Les tub",
    "enTitle": "Homogenisation of a network of beams immersed in a fluid",
    "enLead": "r4.07.05 Homogenisation of a network of beams immersed in a fluid Summary: This note describes a model obtained by a homogenisation method in order to characterise the vibratory behaviour of a periodic network of tubes immersed in an incompressible fluid. The development of a finite element associated with this homogenised model is then presented. The tubes "
  },
  "r4.07.07": {
    "frTitle": "Identification d’efforts sur un modèle modal",
    "frLead": "r4.07.07 Identification d’efforts sur un modèle modal Résumé: La macro-commande CALC ESSAI rassemble les fonctionnalités de Code Aster pour la corrélation calcul-essais. On décrit dans le cadre de cette documentation la fonctionnalité «identification d'efforts», qui doit permettre d'identifier les efforts appliquer à une structure sous la forme d'un inter-sp",
    "enTitle": "Identification of forces on a modal model",
    "enLead": "r4.07.07 Identification of forces on a modal model Summary: The macro-command CALC ESSAI brings together the Code Aster features for analysis–test correlation. Within the scope of this documentation one describes the “force identification” feature, which is intended to make it possible to identify the forces applied to a structure in the form of an interspec"
  },
  "r4.08.01": {
    "frTitle": "Calcul de la déformation thermique",
    "frLead": "r4.08.01 Calcul de la déformation thermique Résumé Ce document est consacré à la présentation du calcul de la déformation thermique. On y indique les informations nécessaires au calcul de la déformation thermique et les diverses possibilités de définition de ces informations par l'utilisateur. 1 Introduction Les valeurs des coefficients de dilatation sont dé",
    "enTitle": "Computation of the thermal strain",
    "enLead": "r4.08.01 Computation of the thermal strain Summary This document is devoted to the presentation of the computation of the thermal strain. It indicates the information required for the computation of the thermal strain and the various possibilities for the definition of this information by the user. 1 Introduction The values of the expansion coefficients are "
  },
  "r4.09.01": {
    "frTitle": "Bilan d'énergie en thermo-mécanique",
    "frLead": "r4.09.01 Bilan d'énergie en thermo-mécanique Résumé : On présente dans cette documentation l 'écriture du bilan d'énergie pour un calcul avec Code Aster . Le calcul du bilan d'énergie peut être activé dans les opérateurs STAT NON LINE U4.51.03, DYNA NON LINE U4.53.01 et DYNA VIBRA[U4.53.03] sur base physique grâce à l'option ENERGIE= F(). Cette fonctionnalit",
    "enTitle": "Energy balance in thermo-mechanics",
    "enLead": "r4.09.01 Energy balance in thermo-mechanics Summary: This documentation presents the writing of the energy balance for an analysis with Code Aster . The computation of the energy balance can be activated in the operators STAT NON LINE U4.51.03, DYNA NON LINE U4.53.01 and DYNA VIBRA[U4.53.03] on a physical basis thanks to the option ENERGIE= F(). This functio"
  },
  "r4.10.01": {
    "frTitle": "Estimateur d'erreur de ZHU-ZIENKIEWICZ",
    "frLead": "r4.10.01 Estimateur d'erreur de ZHU-ZIENKIEWICZ Résumé: On expose dans ce document la méthode d'estimation de l'erreur de discrétisation proposée par ZHU‑ZIENKIEWICZ. Cet estimateur s'appuie sur un lissage continu des contraintes calculées permettant d'obtenir une meilleure précision sur les contraintes nodales par rapport aux méthodes standards. Deux versio",
    "enTitle": "ZHU-ZIENKIEWICZ error estimator",
    "enLead": "r4.10.01 ZHU-ZIENKIEWICZ error estimator Summary: This document sets out the method of estimation of the discretisation error proposed by ZHU‑ZIENKIEWICZ. This estimator is based on a continuous smoothing of the computed stresses, making it possible to obtain a better accuracy on the nodal stresses than the standard methods. Two successive versions of this e"
  },
  "r4.10.02": {
    "frTitle": "Estimateur d’erreur en résidu",
    "frLead": "r4.10.02 Estimateur d’erreur en résidu Résumé L’estimateur d’erreur en résidu permet d’estimer l’erreur de discrétisation due à la méthode des éléments finis sur les éléments d’un maillage 2D ou 3D. C’est un estimateur d’erreur explicite faisant intervenir les résidus des équations d’équilibre et les sauts des contraintes normales aux interfaces, contraireme",
    "enTitle": "Residual error estimator",
    "enLead": "r4.10.02 Residual error estimator Summary: The residual error estimator makes it possible to estimate the discretisation error due to the finite-element method on the elements of a 2D or 3D mesh. It is an explicit error estimator involving the residuals of the equilibrium equations and the jumps of the normal stresses at the interfaces, unlike the Zhu‑Zienki"
  },
  "r4.10.03": {
    "frTitle": "Indicateur d’erreur spatiale en résidu pour la thermique transitoire",
    "frLead": "r4.10.03 Indicateur d’erreur spatiale en résidu pour la thermique transitoire Résumé Lors de simulations numériques par éléments finis, l’obtention d’un résultat brut n’est plus suffisante. L’utilisateur est de plus en plus demandeur de calcul d’erreur spatiale par rapport à son maillage . Il a besoin d’appui méthodologique et d’outils «numériquo\"-\"informati",
    "enTitle": "Spatial residual error indicator for transient thermal analysis",
    "enLead": "r4.10.03 Spatial residual error indicator for transient thermal analysis Summary: In numerical simulations by finite elements, obtaining a raw result is no longer sufficient. The user increasingly requires a spatial error calculation with respect to the mesh . Methodological support and advanced “numerical-computational” tools are needed in order to gauge th"
  },
  "r4.10.04": {
    "frTitle": "Détection des singularités et calcul d’une carte de taille d’éléments",
    "frLead": "r4.10.04 Détection des singularités et calcul d’une carte de taille d’éléments Résumé: On propose ici une méthode qui vise à améliorer le traitement des singularités dans les stratégies d’adaptation de maillage avec le logiciel HOMARD (dans le cas du raffinement) ou avec le logiciel GMSH (cas du remaillage). Ce mécanisme permet, d’une part de détecter les él",
    "enTitle": "Detection of singularities and computation of an element-size map",
    "enLead": "r4.10.04 Detection of singularities and computation of an element-size map Summary: A method is proposed here which aims to improve the treatment of singularities in the mesh-adaptation strategies with the software HOMARD (in the case of refinement) or with the software GMSH (case of remeshing). This mechanism makes it possible, on the one hand, to detect th"
  },
  "r4.10.05": {
    "frTitle": "Indicateur d’erreur en résidu pour les modélisations HM",
    "frLead": "r4.10.05 Indicateur d’erreur en résidu pour les modélisations HM Résumé Dans ce document, on présente les indicateurs d'erreur a posteriori développés pour les modélisations HM. L'estimation a posteriori concernée est de type résidu explicite. On donne d'abord un cadre de travail pour l'étude a posteriori de ces problèmes. On présente ensuite les familles d'",
    "enTitle": "Residual error indicator for the HM modellings",
    "enLead": "r4.10.05 Residual error indicator for the HM modellings Summary In this document, one presents the a posteriori error indicators developed for the HM modellings. The a posteriori estimation concerned is of explicit residual type. One first gives a working framework for the a posteriori study of these problems. One then presents the families of error indicato"
  },
  "r4.10.06": {
    "frTitle": "Estimateurs d'erreur en quantités d'intérêt",
    "frLead": "r4.10.06 Estimateurs d'erreur en quantités d'intérêt Résumé: Dans ce document, on présente le cadre de l'estimation d'erreur en quantité d'intérêt. Ce cadre est utilisé avec des estimateurs en résidu explicites ainsi qu'avec des estimateurs en lissage. Un certain nombre de quantités d'intérêt sont détaillées, notamment leur écriture en terme de chargement po",
    "enTitle": "Error estimators in quantities of interest",
    "enLead": "r4.10.06 Error estimators in quantities of interest Summary: In this document, one presents the framework of error estimation in a quantity of interest. This framework is used with explicit residual estimators as well as with smoothing estimators. A number of quantities of interest are detailed, in particular their expression in terms of loading for the dual"
  },
  "r4.10.07": {
    "frTitle": "Calcul de l'erreur en relation de comportement en dynamique sous une formulation fréquentielle",
    "frLead": "r4.10.07 Calcul de l'erreur en relation de comportement en dynamique sous une formulation fréquentielle Résumé: Ce document présente le principe du calcul de l'erreur en relation de comportement (ERC). Dans ce document, la résolution d'un tel problème est restreint au cas de la dynamique linéaire sous le un formalisme fréquentiel. Plusieurs utilisations peuv",
    "enTitle": "Computation of the error in constitutive relation in dynamics under a frequency-domain formulation",
    "enLead": "r4.10.07 Computation of the error in constitutive relation in dynamics under a frequency-domain formulation Summary: This document presents the principle of the computation of the error in constitutive relation (ERC). In this document, the solution of such a problem is restricted to the case of linear dynamics under a frequency-domain formalism. Several uses"
  },
  "r4.20.01": {
    "frTitle": "Indicateurs de décharge et de perte de proportionnalité du chargement en élastoplasticité",
    "frLead": "r4.20.01 Indicateurs de décharge et de perte de proportionnalité du chargement en élastoplasticité Résumé On présente un ensemble de paramètres scalaires appelés indicateurs, permettant d’apprécier une décharge ou une perte de proportionnalité d’un chargement au cours de son histoire. Deux types d’indicateurs sont proposés: des indicateurs se présentant sous",
    "enTitle": "Indicators of unloading and of loss of proportionality of the loading in elastoplasticity",
    "enLead": "r4.20.01 Indicators of unloading and of loss of proportionality of the loading in elastoplasticity Summary A set of scalar parameters, called indicators, is presented, making it possible to assess an unloading or a loss of proportionality of a loading in the course of its history. Two types of indicator are proposed: indicators in the form of scalar fields, "
  },
  "r5.01.01": {
    "frTitle": "Solveurs modaux et résolution du problème généralisé (GEP)",
    "frLead": "r5.01.01 Solveurs modaux et résolution du problème généralisé (GEP) Résumé Que cela soit pour étudier les vibrations d’une structure ou pour rechercher ses modes de flambement, le mécanicien doit souvent résoudre un problème modal : soit généralisé (GEP), soit quadratique (QEP) Solveurs modaux et résolution du problème généralisé (GEP). Pour ce faire, on pro",
    "enTitle": "Modal solvers and solution of the generalised problem (GEP)",
    "enLead": "r5.01.01 Modal solvers and solution of the generalised problem (GEP) Summary: Whether it is to study the vibrations of a structure or to look for its buckling modes, the engineer often has to solve a modal problem: either generalised (GEP) or quadratic (QEP) Modal solvers and solution of the generalised problem (GEP). To do this, several methods are proposed"
  },
  "r5.01.02": {
    "frTitle": "1 **r5.01.02** Résolution du problème modal",
    "frLead": "1 r5.01.02 Résolution du problème modal 2 r5.01.02 quadratique (QEP) Résumé L’étude de la stabilité dynamique d’une structure amortie et / ou tournante conduit à la résolution d’un problème modal plus élevé que les traditionnels problèmes modaux standards (SEP) ou généralisé (GEP). Pour les appréhender, on propose des méthodes via l'opérateur CALC MODES : pu",
    "enTitle": "1 **r5.01.02** Solution of the modal problem",
    "enLead": "1 r5.01.02 Solution of the modal problem 2 r5.01.02 quadratic (QEP) Summary: The study of the dynamic stability of a damped and/or rotating structure leads to the solution of a modal problem of higher order than the traditional standard modal problems (SEP) or generalised modal problems (GEP). To tackle them, methods are proposed via the operator CALC MODES:"
  },
  "r5.01.03": {
    "frTitle": "Paramètres modaux et norme des vecteurs propres",
    "frLead": "r5.01.03 Paramètres modaux et norme des vecteurs propres Résumé : Dans ce document, on décrit: - les différentes possibilités dans Code Aster pour normer les modes propres, - les paramètres modaux importants associés aux modes propres. 1 Définition du problème aux valeurs propres 1.1 Généralités Soit le problème aux valeurs propres suivant : Trouver (\\lambda",
    "enTitle": "Modal parameters and the norm of the eigenvectors",
    "enLead": "r5.01.03 Modal parameters and the norm of the eigenvectors Summary: This document describes: - the various possibilities in Code Aster for normalising the eigenmodes, - the important modal parameters associated with the eigenmodes. 1 Definition of the eigenvalue problem 1.1 General points Let the following eigenvalue problem: Find (\\lambda ,\\Phi )\\in \\mathrm"
  },
  "r5.01.04": {
    "frTitle": "Procédure de dénombrement de valeurs propres",
    "frLead": "r5.01.04 Procédure de dénombrement de valeurs propres Résumé Que cela soit pour étudier les vibrations d'une structure ou rechercher ses modes de flambement , le mécanicien doit souvent résoudre un problème modal : soit généralisé (GEP) r5.01.01, soit quadratique (QEP) r5.01.02. Pour ce faire, code aster propose plusieurs algorithmes et méthodologies au trav",
    "enTitle": "Eigenvalue counting procedure",
    "enLead": "r5.01.04 Eigenvalue counting procedure Summary: Whether one is studying the vibrations of a structure or looking for its buckling modes , the engineer must often solve a modal problem: either generalised (GEP) r5.01.01, or quadratic (QEP) r5.01.02. To do so, code aster offers several algorithms and methodologies through the operator CALC MODES, not counting "
  },
  "r5.02.01": {
    "frTitle": "Algorithme de thermique linéaire transitoire",
    "frLead": "r5.02.01 Algorithme de thermique linéaire transitoire Résumé: On présente l'algorithme de thermique transitoire linéaire implanté au sein de la commande THER LINEAIRE U4.33.01 . Les différentes options de calcul nécessaires ont été présentées dans les éléments de structure plans, axisymétriques et tridimensionnels U1.22.01, U1.23.01 et U1.24.01. 1 Expression",
    "enTitle": "Algorithm for linear transient thermal analysis",
    "enLead": "r5.02.01 Algorithm for linear transient thermal analysis Summary: The algorithm for linear transient thermal analysis implemented in the command THER LINEAIRE U4.33.01 is presented. The various computation options required have been presented for the plane, axisymmetric and three-dimensional structural elements U1.22.01, U1.23.01 and U1.24.01. 1 Expression o"
  },
  "r5.02.02": {
    "frTitle": "Thermique non linéaire",
    "frLead": "r5.02.02 Thermique non linéaire Résumé L’opérateur THER NON LINE U4.54.02 permet de résoudre les problèmes de thermique transitoire dans les solides en présence de non-linéarités des propriétés des matériaux (capacité calorifique et conductivité), ou des conditions aux limites (échange thermique de type rayonnement). On présente ici la formulation et l'algor",
    "enTitle": "Non-linear thermal analysis",
    "enLead": "r5.02.02 Non-linear thermal analysis Summary The operator THER NON LINE U4.54.02 makes it possible to solve transient thermal problems in solids in the presence of non-linearities of the material properties (heat capacity and conductivity), or of the boundary conditions (heat exchange of radiation type). The formulation and the algorithm used are presented h"
  },
  "r5.02.04": {
    "frTitle": "Thermique non linéaire en repère mobile",
    "frLead": "r5.02.04 Thermique non linéaire en repère mobile Résumé On présente la formulation et l'algorithme du problème de convection-diffusion en thermique non linéaire stationnaire introduit au sein de la commande THER NON LINE MO u4.33.04. Le but est de résoudre l'équation de la chaleur dans un référentiel mobile lié à un chargement et se déplaçant dans une direct",
    "enTitle": "Non-linear thermal analysis in a moving frame",
    "enLead": "r5.02.04 Non-linear thermal analysis in a moving frame Summary The formulation and the algorithm of the stationary non-linear thermal convection–diffusion problem introduced within the command THER NON LINE MO u4.33.04 are presented. The aim is to solve the heat equation in a moving frame tied to a loading and travelling in a given direction and at a given s"
  },
  "r5.03.01": {
    "frTitle": "Algorithme non linéaire quasi-statique (STAT_NON_LINE)",
    "frLead": "r5.03.01 Algorithme non linéaire quasi-statique (STAT NON LINE) Résumé : L'opérateur STAT NON LINE U4.51.03 permet dans le cas d'une sollicitation quasi-statique d'intégrer divers types de non-linéarités provenant du comportement du matériau, de grandes transformations géométriques ou des conditions de contact/frottement. On décrit ici l'algorithme de résolu",
    "enTitle": "Quasi-static non-linear algorithm (STAT_NON_LINE)",
    "enLead": "r5.03.01 Quasi-static non-linear algorithm (STAT NON LINE) Summary: The operator STAT NON LINE U4.51.03 makes it possible, in the case of a quasi-static loading, to integrate various types of non-linearities arising from the constitutive behaviour of the material, from large geometric transformations or from contact/friction conditions. The global solution a"
  },
  "r5.03.02": {
    "frTitle": "Intégration des relations de comportement élasto-plastique de Von Mises",
    "frLead": "r5.03.02 Intégration des relations de comportement élasto-plastique de Von Mises Résumé : Ce document décrit les quantités calculées par l'opérateur STAT NON LINE nécessaires à la mise en œuvre de l'algorithme non linéaire quasi statique décrit en R5.03.01 dans le cas des comportements élasto-plastiques. Ces quantités sont calculées par les mêmes sous-progra",
    "enTitle": "Integration of the elastoplastic constitutive relations of Von Mises",
    "enLead": "r5.03.02 Integration of the elastoplastic constitutive relations of Von Mises Summary: This document describes the quantities computed by the operator STAT NON LINE that are required for the implementation of the quasi-static non-linear algorithm described in R5.03.01 in the case of elastoplastic constitutive behaviours. These quantities are computed by the "
  },
  "r5.03.03": {
    "frTitle": "Prise en compte de l’hypothèse des contraintes planes dans les comportements non linéaires",
    "frLead": "r5.03.03 Prise en compte de l’hypothèse des contraintes planes dans les comportements non linéaires Résumé: Ce document décrit une méthode générale d’intégration des modèles de comportements non linéaires (élastoplastiques, viscoplastiques, endommageants,...) en contraintes planes. Ceci est réalisé par une méthode de condensation statique due à R. de Borst. ",
    "enTitle": "Taking into account the plane-stress hypothesis in non-linear constitutive behaviours",
    "enLead": "r5.03.03 Taking into account the plane-stress hypothesis in non-linear constitutive behaviours Summary: This document describes a general method for integrating non-linear constitutive models (elastoplastic, viscoplastic, damaging, ...) in plane stresses. This is carried out by a static condensation method due to R. de Borst. This method makes it possible to"
  },
  "r5.03.04": {
    "frTitle": "Relations de comportement élasto-visco-plastique de Chaboche",
    "frLead": "r5.03.04 Relations de comportement élasto-visco-plastique de Chaboche Résumé: Ce document décrit l’intégration du modèle de comportement élasto-visco-plastique de Chaboche à écrouissage cinématique non linéaire et isotrope, avec prise en compte possible de la viscosité. Le modèle implanté possède une ou deux variables cinématiques, et prend en compte toutes ",
    "enTitle": "Elasto-visco-plastic constitutive relations of Chaboche",
    "enLead": "r5.03.04 Elasto-visco-plastic constitutive relations of Chaboche Summary: This document describes the integration of the elasto-visco-plastic constitutive model of Chaboche with non-linear kinematic and isotropic hardening, with possible taking into account of viscosity. The implemented model has one or two kinematic variables, and takes into account all the"
  },
  "r5.03.05": {
    "frTitle": "Relation de comportement viscoplastique de Taheri",
    "frLead": "r5.03.05 Relation de comportement viscoplastique de Taheri Résumé On présente dans ce document l’implantation de la relation de comportement de Taheri viscoplastique, disponible pour l’ensemble des éléments isoparamétriques (milieu continu 2D et 3D) à l’exception des contraintes planes. Après une présentation des équations d’évolution de cette loi, on décrit",
    "enTitle": "Viscoplastic constitutive relation of Taheri",
    "enLead": "r5.03.05 Viscoplastic constitutive relation of Taheri Summary This document presents the implementation of the viscoplastic constitutive relation of Taheri, available for all the isoparametric elements (2D and 3D continuum) with the exception of plane stresses. After a presentation of the evolution equations of this law, the system obtained by implicit discr"
  },
  "r5.03.06": {
    "frTitle": "Modèle de Rousselier en grandes déformations",
    "frLead": "r5.03.06 Modèle de Rousselier en grandes déformations Résumé On présente ici une variante du modèle de Rousselier qui permet de décrire la croissance plastique de cavités dans un acier. La relation de comportement est élastoplastique avec écrouissage isotrope, permet les changements de volume plastique et est écrite en grandes déformations. Ces dernières s’a",
    "enTitle": "Rousselier model in large strains",
    "enLead": "r5.03.06 Rousselier model in large strains Summary One presents here a variant of the Rousselier model which makes it possible to describe the plastic growth of cavities in a steel. The constitutive relation is elastoplastic with isotropic hardening, allows plastic changes of volume and is written in large strains. The latter rely on the theory proposed by S"
  },
  "r5.03.07": {
    "frTitle": "Modèle de Rousselier pour la rupture ductile",
    "frLead": "r5.03.07 Modèle de Rousselier pour la rupture ductile Résumé Le modèle de Rousselier décrit l’endommagement dû à la croissance plastique de cavités dans un métal. Il permet de modéliser la fissuration et la rupture ductile. La relation de comportement est élastoplastique ou viscoplastique avec écrouissage isotrope. Elle permet les changements de volume plast",
    "enTitle": "Rousselier model for ductile fracture",
    "enLead": "r5.03.07 Rousselier model for ductile fracture Summary The Rousselier model describes the damage due to the plastic growth of cavities in a metal. It makes it possible to model cracking and ductile fracture. The constitutive relation is elastoplastic or viscoplastic with isotropic hardening. It allows plastic volume changes and is written in small strains. T"
  },
  "r5.03.08": {
    "frTitle": "Intégration des relations de comportement viscoélastoplastiques dans les opérateurs demécanique non linéaire",
    "frLead": "r5.03.08 Intégration des relations de comportement viscoélastoplastiques dans les opérateurs demécanique non linéaire Résumé Ce document décrit dans le cas de comportements viscoélastiques non linéaires et viscoélastoplastiques avec seuil, construites sur la base du modèle viscoélastique non linéaire de Lemaître, les ingrédients nécessaires à la mise en œuvr",
    "enTitle": "Integration of the viscoelastoplastic constitutive relations in the non-linear mechanics operators",
    "enLead": "r5.03.08 Integration of the viscoelastoplastic constitutive relations in the non-linear mechanics operators Summary This document describes, for non-linear viscoelastic constitutive behaviours and viscoelastoplastic constitutive behaviours with a threshold, built on the basis of Lemaître's non-linear viscoelastic model, the ingredients required for the imple"
  },
  "r5.03.09": {
    "frTitle": "Relations de comportement non linéaires 1D",
    "frLead": "r5.03.09 Relations de comportement non linéaires 1D Résumé: Ce document décrit les quantités calculées par l’opérateur STAT NON LINE nécessaires à la mise en œuvre de l’algorithme non linéaire quasi statique décrit en R5.03.01 dans le cas des comportements élastoplastiques ou viscoplastiques monodimensionnels. Ces comportements, sauf mention contraire, sont ",
    "enTitle": "Non-linear 1D constitutive relations",
    "enLead": "r5.03.09 Non-linear 1D constitutive relations Summary: This document describes the quantities computed by the operator STAT NON LINE which are necessary for the implementation of the quasi-static non-linear algorithm described in R5.03.01 in the case of unidimensional elastoplastic or viscoplastic constitutive behaviours. These behaviours, unless otherwise s"
  },
  "r5.03.11": {
    "frTitle": "Comportements élastoviscoplastiques mono et polycristallins",
    "frLead": "r5.03.11 Comportements élastoviscoplastiques mono et polycristallins Résumé : Le but de ce document est de décrire l’intégration des comportements mono et polycristallins. On traite ici de l’intégration de ces lois de comportement associées à des systèmes de glissement correspondant aux familles cristallines habituelles ou spécifiées par l'utilisateur. Cette",
    "enTitle": "Single-crystal and polycrystalline elastoviscoplastic behaviours",
    "enLead": "r5.03.11 Single-crystal and polycrystalline elastoviscoplastic behaviours Summary: The aim of this document is to describe the integration of single-crystal and polycrystalline behaviours. This integration may be carried out explicitly (Runge–Kutta method with accuracy control and local subdivision of the time step) or implicitly (Newton method with local su"
  },
  "r5.03.12": {
    "frTitle": "Comportement viscoplastique avec effet de mémoire et restauration de Chaboche",
    "frLead": "r5.03.12 Comportement viscoplastique avec effet de mémoire et restauration de Chaboche Résumé: Ce document décrit l’intégration du modèle de comportement élasto-visco-plastique de Chaboche avec un écrouissage isotrope comportant un effet mémoire d’écrouissage et deux écrouissages cinématiques non linéaires, avec prise en compte possible de la restauration et",
    "enTitle": "Viscoplastic behaviour with memory effect and Chaboche recovery",
    "enLead": "r5.03.12 Viscoplastic behaviour with memory effect and Chaboche recovery Summary: This document describes the integration of the elasto-visco-plastic constitutive model of Chaboche with an isotropic hardening comprising a hardening-memory effect and two non-linear kinematic hardenings, with possible taking into account of recovery and of viscosity. This mode"
  },
  "r5.03.13": {
    "frTitle": "Comportement viscoplastique avec endommagement de HAYHURST",
    "frLead": "r5.03.13 Comportement viscoplastique avec endommagement de HAYHURST Résumé : Le modèle visco-plastique couplé à l'endommagement isotrope dit de Hayhurst est particulièrement adapté pour réaliser des calculs de structures en fluage. La partie viscoplastique du modèle a été proposée par Hayhurst et al dans [bib1] tandis que la loi d'endommagement a été proposé",
    "enTitle": "Viscoplastic behaviour with HAYHURST damage",
    "enLead": "r5.03.13 Viscoplastic behaviour with HAYHURST damage Summary: The viscoplastic model coupled with isotropic damage, known as the Hayhurst model, is particularly suited to structural analyses in creep. The viscoplastic part of the model was proposed by Hayhurst et al. in [bib1], while the damage law was proposed by Charles Pétry in [bib2]. This model provides"
  },
  "r5.03.14": {
    "frTitle": "Intégration implicite et explicite des relations de comportements non linéaires",
    "frLead": "r5.03.14 Intégration implicite et explicite des relations de comportements non linéaires Résumé Ce document décrit deux méthodes d’intégration (une implicite et une explicite) pour la résolution de problèmes avec comportements non linéaires dans les opérateurs STAT NON LINE R5.03.01 et DYNA NON LINE R5.05.05. La méthode numérique implicite présentée est cell",
    "enTitle": "Implicit and explicit integration of non-linear constitutive relations",
    "enLead": "r5.03.14 Implicit and explicit integration of non-linear constitutive relations Summary This document describes two integration methods (one implicit and one explicit) for the solution of problems with non-linear constitutive behaviours in the operators STAT NON LINE R5.03.01 and DYNA NON LINE R5.05.05. The implicit numerical method presented is that of Newt"
  },
  "r5.03.15": {
    "frTitle": "Comportement viscoplastique avec endommagement de CHABOCHE",
    "frLead": "r5.03.15 Comportement viscoplastique avec endommagement de CHABOCHE Résumé : Le modèle visco-plastique couplé à l'endommagement isotrope de Chaboche (développé à l’origine pour prédire avec succès la durée de vie et la fissuration des aubes des turboréacteurs modernes) est utilisé pour des calculs de prédiction du temps de ruine de structures à hautes tempér",
    "enTitle": "Viscoplastic behaviour with CHABOCHE damage",
    "enLead": "r5.03.15 Viscoplastic behaviour with CHABOCHE damage Summary: The viscoplastic model coupled to the isotropic damage of Chaboche (originally developed in order to predict successfully the lifetime and the cracking of the blades of modern turbojets) is used for analyses predicting the time to failure of structures at high temperatures. This model is implement"
  },
  "r5.03.16": {
    "frTitle": "Relation de comportement élastoplastique à écrouissage cinématique linéaire et isotrope non linéaire. Modélisations 3D et contraintes planes.",
    "frLead": "r5.03.16 Relation de comportement élastoplastique à écrouissage cinématique linéaire et isotrope non linéaire. Modélisations 3D et contraintes planes. Résumé: Ce document décrit une loi de comportement élastoplastique à écrouissage mixte, cinématique linéaire et isotrope non linéaire. Les équations à résoudre pour intégrer numériquement cette relation de com",
    "enTitle": "Elastoplastic constitutive relation with linear kinematic hardening and non-linear isotropic hardening. 3D modellings and plane stress.",
    "enLead": "r5.03.16 Elastoplastic constitutive relation with linear kinematic hardening and non-linear isotropic hardening. 3D modellings and plane stress. Summary: This document describes an elastoplastic constitutive law with mixed hardening, linear kinematic and non-linear isotropic. The equations to be solved in order to integrate this constitutive relation numeric"
  },
  "r5.03.17": {
    "frTitle": "Relations de comportement des éléments discrets",
    "frLead": "r5.03.17 Relations de comportement des éléments discrets Résumé: Ce document décrit les comportements non linéaires des éléments discrets qui sont appelés par les opérateurs de résolution de problèmes non linéaires STAT NON LINE ou DYNA NON LINE. Plus précisément, les comportements décrits dans ce document sont: - le comportement thermo-élastique ELAS, - le ",
    "enTitle": "Constitutive relations of discrete elements",
    "enLead": "r5.03.17 Constitutive relations of discrete elements Summary: This document describes the non-linear behaviours of the discrete elements that are called by the operators for the solution of non-linear problems STAT NON LINE or DYNA NON LINE. More precisely, the behaviours described in this document are: - the thermoelastic behaviour ELAS, - the Von Mises-typ"
  },
  "r5.03.19": {
    "frTitle": "Lois de comportement hyper-élastique",
    "frLead": "r5.03.19 Lois de comportement hyper-élastique Résumé: On décrit ici des lois de comportement hyper-élastique adoptées pour les élastomères. Les cas compressible et incompressible sont présentés. Pour les modèles traitant l’incompressibilité, on propose : - le modèle hyper-élastique de type Signorini, qui constitue une version généralisée des lois de Mooney-R",
    "enTitle": "Hyperelastic constitutive laws",
    "enLead": "r5.03.19 Hyperelastic constitutive laws Summary: Hyperelastic constitutive laws adopted for elastomers are described here. The compressible and incompressible cases are presented. For the models treating incompressibility, one proposes: - the hyperelastic model of Signorini type, which constitutes a generalised version of the Mooney-Rivlin laws, implemented "
  },
  "r5.03.20": {
    "frTitle": "Relation de comportement élastique non linéaire en grands déplacements",
    "frLead": "r5.03.20 Relation de comportement élastique non linéaire en grands déplacements Résumé: On se propose de décrire ici une relation de comportement élastique non linéaire qui coïncide avec la loi élastoplastique de Hencky-VonMises (écrouissage isotrope) dans le cas d'un chargement qui induit une évolution radiale et monotone des contraintes en tout point de la",
    "enTitle": "Non-linear elastic constitutive relation in large displacements",
    "enLead": "r5.03.20 Non-linear elastic constitutive relation in large displacements Summary: The aim here is to describe a non-linear elastic constitutive relation which coincides with the elastoplastic Hencky-VonMises law (isotropic hardening) in the case of a loading which induces a radial and monotonic evolution of the stresses at every point of the structure. This "
  },
  "r5.03.21": {
    "frTitle": "Modélisation élasto(visco)plastique avec écrouissage isotrope en grandes déformations",
    "frLead": "r5.03.21 Modélisation élasto(visco)plastique avec écrouissage isotrope en grandes déformations Résumé On décrit ici une relation de comportement thermoélastoplastique avec écrouissage isotrope écrite en grandes déformations et proposée par Simo et Miehe. Ce modèle est disponible dans la commande STAT NON LINE par l’intermédiaire du mot-clé RELATION:’VMIS ISO",
    "enTitle": "Elasto(visco)plastic modelling with isotropic hardening in large strains",
    "enLead": "r5.03.21 Elasto(visco)plastic modelling with isotropic hardening in large strains Summary One describes here a thermoelastoplastic constitutive relation with isotropic hardening written in large strains and proposed by Simo and Miehe. This model is available in the command STAT NON LINE through the keyword RELATION:’VMIS ISOT TRAC’, ‘VMIS ISOT PUIS’ or ’VMIS"
  },
  "r5.03.22": {
    "frTitle": "Loi de comportement en grandes rotations et petites déformations",
    "frLead": "r5.03.22 Loi de comportement en grandes rotations et petites déformations Résumé: On décrit ici la formulation adoptée pour traiter des grandes rotations et des petites déformations. Cette formulation est valable pour toutes les lois de comportement définies sous COMPORTEMENT de la commande STAT NON LINE et munies des modélisations tridimensionnelle (3D), ax",
    "enTitle": "Constitutive law in large rotations and small strains",
    "enLead": "r5.03.22 Constitutive law in large rotations and small strains Summary: The formulation adopted to treat large rotations and small strains is described here. This formulation is valid for all the constitutive laws defined under COMPORTEMENT of the command STAT NON LINE and provided with the three-dimensional (3D), axisymmetric (AXIS), plane-strain (D PLAN) a"
  },
  "r5.03.23": {
    "frTitle": "Comportement élasto-plastique sous irradiation des métaux : application aux internes de cuve",
    "frLead": "r5.03.23 Comportement élasto-plastique sous irradiation des métaux : application aux internes de cuve Résumé : Ce document présente l’écriture d’une loi de comportement sous irradiation des aciers inoxydables 304 et 316, matériaux dont sont constituées les structures internes de cuve des réacteurs nucléaires. Le formalisme du modèle est identique pour les de",
    "enTitle": "Elastoplastic constitutive behaviour under irradiation of metals: application to reactor-vessel internals",
    "enLead": "r5.03.23 Elastoplastic constitutive behaviour under irradiation of metals: application to reactor-vessel internals Summary: This document presents the writing of a constitutive law under irradiation for the stainless steels 304 and 316, the materials of which the internal structures of the vessels of nuclear reactors are made. The formalism of the model is i"
  },
  "r5.03.24": {
    "frTitle": "Modèle de grandes déformations GDEF_LOG",
    "frLead": "r5.03.24 Modèle de grandes déformations GDEF LOG Résumé : Ce document présente une formulation hypoélastique de grandes déformations pour les lois de comportement de type von Mises appelée GDEF LOG dans Code Aster. Ce modèle, dû à C.Miehe, N.Apel et M.Lambrecht [13] est un modèle de grandes déformations basé sur une mesure logarithmique, avec un tenseur de c",
    "enTitle": "Large-strain model GDEF_LOG",
    "enLead": "r5.03.24 Large-strain model GDEF LOG Summary: This document presents a hypoelastic large-strain formulation for constitutive laws of von Mises type, called GDEF LOG in Code Aster. This model, due to C. Miehe, N. Apel and M. Lambrecht [13], is a large-strain model based on a logarithmic measure, with a particular dual stress tensor. It is valid whatever the s"
  },
  "r5.03.25": {
    "frTitle": "Loi d’endommagement régularisée ENDO_SCALAIRE",
    "frLead": "r5.03.25 Loi d’endommagement régularisée ENDO SCALAIRE Résumé: Ce document décrit le modèle de comportement élastique fragile ENDO SCALAIRE disponible seulement pour la modélisation non locale à gradient d'endommagement GRAD VARI. L’endommagement est modélisé de manière scalaire; les chargements en compression et en traction ne sont pas distingués. A la diff",
    "enTitle": "Regularised damage law ENDO_SCALAIRE",
    "enLead": "r5.03.25 Regularised damage law ENDO SCALAIRE Summary: This document describes the elastic brittle constitutive model ENDO SCALAIRE, available only for the non-local modelling with a damage gradient GRAD VARI. The damage is modelled in a scalar manner; the compressive and tensile loadings are not distinguished. Unlike the other damage laws introduced previou"
  },
  "r5.03.27": {
    "frTitle": "Comportements mécaniques pour les simulations numériques",
    "frLead": "r5.03.27 Comportements mécaniques pour les simulations numériques Résumé : Le comportement du matériau est une donnée d’entrée incontournable dans la plupart des études mécaniques. Dans une simulation numérique ce comportement est pris en compte par l’intermédiaire d’un modèle plus ou moins complexe, supposé reproduire de façon suffisamment précise le compor",
    "enTitle": "Mechanical behaviours for numerical simulations",
    "enLead": "r5.03.27 Mechanical behaviours for numerical simulations Summary: The behaviour of the material is an essential input datum in most mechanical studies. In a numerical simulation this behaviour is taken into account by means of a model of greater or lesser complexity, assumed to reproduce sufficiently accurately the behaviour of the real material. The paramet"
  },
  "r5.03.28": {
    "frTitle": "Loi d’endommagement à gradient ENDO_FISS_EXP",
    "frLead": "r5.03.28 Loi d’endommagement à gradient ENDO FISS EXP Résumé: Ce document décrit le modèle de comportement élastique fragile ENDO FISS EXP, disponible en modélisation non locale à gradient d'endommagement GRAD VARI. L’endommagement y est modélisé de manière isotrope, ce qui implique préférentiellement de modéliser les fissures de manière individuelle et non ",
    "enTitle": "Gradient damage law ENDO_FISS_EXP",
    "enLead": "r5.03.28 Gradient damage law ENDO FISS EXP Summary: This document describes the elastic brittle constitutive model ENDO FISS EXP, available in non-local modelling with a damage gradient GRAD VARI. The damage is modelled there in an isotropic manner, which preferentially implies modelling the cracks individually and not by homogenisation: the scale of discret"
  },
  "r5.03.29": {
    "frTitle": "Lois de comportement d’endommagement ductile plastique etviscoplastique GTN et VISC_GTN",
    "frLead": "r5.03.29 Lois de comportement d’endommagement ductile plastique etviscoplastique GTN et VISC GTN Résumé: Ce document décrit le modèle d’endommagement ductilede Gurson – Tvergaard – Needleman (GTN). Il est disponible en version locale et à gradient de variables internes (GRAD VARI ou GRAD INCO). Lamodélisation des grandes déformations est accessible via la ci",
    "enTitle": "Plastic and viscoplastic ductile-damage constitutive laws GTN and VISC_GTN",
    "enLead": "r5.03.29 Plastic and viscoplastic ductile-damage constitutive laws GTN and VISC GTN Summary: This document describes the ductile damage model of Gurson – Tvergaard – Needleman (GTN). It is available in a local version and with a gradient of internal variables (GRAD VARI or GRAD INCO). The modelling of large strains is accessible via the GDEF LOG kinematics. "
  },
  "r5.03.31": {
    "frTitle": "Loi de comportement FONDATION",
    "frLead": "r5.03.31 Loi de comportement FONDATION Résumé: Ce document décrit le comportement élasto-plastique non linéaire d’une fondation superficielle rectangulaire soumise à une sollicitation tridimensionnelle statique ou sismique. Cette loi de comportement est affectée sur les éléments discrets 3D composé d’un unique nœud en translation/rotation (DIS TR) affecté d’",
    "enTitle": "Constitutive law FONDATION",
    "enLead": "r5.03.31 Constitutive law FONDATION Summary: This document describes the non-linear elastoplastic behaviour of a rectangular shallow foundation subjected to a static or seismic three-dimensional loading. This constitutive law is assigned to 3D discrete elements made up of a single node in translation/rotation (DIS TR) assigned a diagonal stiffness matrix (K "
  },
  "r5.03.32": {
    "frTitle": "Loi de comportement de l’assemblage ASSE_CORN",
    "frLead": "r5.03.32 Loi de comportement de l’assemblage ASSE CORN Résumé: Ce document décrit le comportement non linéaire des assemblages non linéaires de cornières de pylônes modélisés par des éléments discrets DIS TR. Cette loi de comportement est affectée sur les éléments discrets au moyen de la relation ASSE CORN appelée par les opérateurs de résolution de problème",
    "enTitle": "Constitutive law of the ASSE_CORN assembly",
    "enLead": "r5.03.32 Constitutive law of the ASSE CORN assembly Summary: This document describes the non-linear behaviour of the non-linear angle assemblies of pylons modelled by discrete elements DIS TR. This constitutive law is assigned to the discrete elements by means of the relation ASSE CORN, called by the operators for the solution of non-linear problems STAT NON"
  },
  "r5.03.33": {
    "frTitle": "Lois de comportement plastique etviscoplastique à écrouissage isotrope non linéaire VMIS_ISOT_NL et VISC_ISOT_NL",
    "frLead": "r5.03.33 Lois de comportement plastique etviscoplastique à écrouissage isotrope non linéaire VMIS ISOT NL et VISC ISOT NL Résumé: Ce document décrit le modèle de comportement élasto-visco-plastique à écrouissage isotrope non linéaire, disponible en version locale et à gradient de variables internes (GRAD VARI ou GRAD INCO). Une modélisation des grandes défor",
    "enTitle": "Plastic and viscoplastic constitutive laws with non-linear isotropic hardening VMIS_ISOT_NL and VISC_ISOT_NL",
    "enLead": "r5.03.33 Plastic and viscoplastic constitutive laws with non-linear isotropic hardening VMIS ISOT NL and VISC ISOT NL Summary: This document describes the elastoviscoplastic constitutive model with non-linear isotropic hardening, available in a local version and with a gradient of internal variables (GRAD VARI or GRAD INCO). A modelling of large strains is a"
  },
  "r5.03.34": {
    "frTitle": "Loi de comportement viscoélastique REGU_VISC_ELAS",
    "frLead": "r5.03.34 Loi de comportement viscoélastique REGU VISC ELAS Résumé: Pour régulariser certaines formes d’instabilités quasi-statiques, une technique de régularisation accessible dans STAT NON LINEvia le mot-clé REGU VISC s’appuie sur la superposition des contraintes de comportement avec des contraintes viscoélastiques, ces dernières pouvant conférer au système",
    "enTitle": "Viscoelastic constitutive law REGU_VISC_ELAS",
    "enLead": "r5.03.34 Viscoelastic constitutive law REGU VISC ELAS Summary: In order to regularise certain forms of quasi-static instabilities, a regularisation technique accessible in STAT NON LINE via the keyword REGU VISC relies on the superposition of the constitutive stresses with viscoelastic stresses, the latter being able to confer on the system the expected stab"
  },
  "r5.03.35": {
    "frTitle": "Intégration de la relation de comportement viscoélastiquede Maxwell (VISC_MAXWELL et VISC_MAXWELL_MT)",
    "frLead": "r5.03.35 Intégration de la relation de comportement viscoélastiquede Maxwell (VISC MAXWELL et VISC MAXWELL MT) Résumé Ce document décrit le développement de la loi de comportement viscoélastiques de Maxwell. La loi de Maxwell (mot clé VISC MAXWELL) est une loi viscoélastique basique. Sa variante (mot clé VISC MAXWELL MT) inclue une variation de ses paramètre",
    "enTitle": "Integration of the viscoelastic constitutive relation of Maxwell (VISC_MAXWELL and VISC_MAXWELL_MT)",
    "enLead": "r5.03.35 Integration of the viscoelastic constitutive relation of Maxwell (VISC MAXWELL and VISC MAXWELL MT) Summary This document describes the development of the viscoelastic constitutive law of Maxwell. The Maxwell law (keyword VISC MAXWELL) is a basic viscoelastic law. Its variant (keyword VISC MAXWELL MT) includes a variation of its parameters with poro"
  },
  "r5.03.36": {
    "frTitle": "Loi de comportement KICHENIN_NL combinant élastoplasticité etviscoélasticité non linéaire",
    "frLead": "r5.03.36 Loi de comportement KICHENIN NL combinant élastoplasticité etviscoélasticité non linéaire Résumé: Ce document décrit le modèle de comportement KICHENIN NL, destiné à décrire la réponse mécanique du polyéthylène. Il combine une branche élastoplastique à écrouissage cinématique linéaire avec une branche viscoélastique de Maxwell non linéaire. Une modé",
    "enTitle": "Constitutive law KICHENIN_NL combining elastoplasticity and non-linear viscoelasticity",
    "enLead": "r5.03.36 Constitutive law KICHENIN NL combining elastoplasticity and non-linear viscoelasticity Summary: This document describes the KICHENIN NL constitutive model, intended to describe the mechanical response of polyethylene. It combines an elastoplastic branch with linear kinematic hardening and a non-linear Maxwell viscoelastic branch. A large-strain mode"
  },
  "r5.03.37": {
    "frTitle": "Homogénéisation de structures hétérogènes périodiques",
    "frLead": "r5.03.37 Homogénéisation de structures hétérogènes périodiques Résumé: On expose les hypothèses et les méthodes employées dans la commande CALC MATE HOMO qui effectue le calcul des propriétés thermiques et thermoélastiques linéaires homogénéisées pour des structures hétérogènes périodiques à pas rectangulaire avec des cellules de base possédant des symétries",
    "enTitle": "Homogenisation of periodic heterogeneous structures",
    "enLead": "r5.03.37 Homogenisation of periodic heterogeneous structures Summary: The assumptions and the methods used in the command CALC MATE HOMO are set out; this command computes the homogenised linear thermal and thermoelastic properties for periodic heterogeneous structures with a rectangular pitch, with basic cells possessing symmetries with respect to orthogona"
  },
  "r5.03.38": {
    "frTitle": "Comportement mécanique isotrope élasto-viscoplastique multi-échelles sous irradiation: applications aux aciers de cuve irradiés",
    "frLead": "r5.03.38 Comportement mécanique isotrope élasto-viscoplastique multi-échelles sous irradiation: applications aux aciers de cuve irradiés Résumé : Ce document présente l'écriture de la loi de comportement VISC ISOT PLAS. Il s'agit d'un modèle d'écoulement isotrope élasto-viscoplastique modélisant les effets multi-échelles de la plasticité ainsi que les effets",
    "enTitle": "Isotropic multi-scale elasto-viscoplastic mechanical behaviour under irradiation: applications to irradiated reactor-pressure-vessel steels",
    "enLead": "r5.03.38 Isotropic multi-scale elasto-viscoplastic mechanical behaviour under irradiation: applications to irradiated reactor-pressure-vessel steels Summary: This document presents the formulation of the constitutive law VISC ISOT PLAS. It is an isotropic elasto-viscoplastic flow model representing the multi-scale effects of plasticity as well as the effects"
  },
  "r5.03.40": {
    "frTitle": "Modélisation statique et dynamique des poutres en grandes rotations",
    "frLead": "r5.03.40 Modélisation statique et dynamique des poutres en grandes rotations Résumé : Cette note donne une formulation mécanique des poutres en grands déplacements et grandes rotations mais avec un comportement élastique. La difficulté essentielle de l'analyse des rotations tient à ce qu'elles ne sont pas commutables et ne constituent pas un espace vectoriel",
    "enTitle": "Static and dynamic modelling of beams in large rotations",
    "enLead": "r5.03.40 Static and dynamic modelling of beams in large rotations Summary : This note gives a mechanical formulation of beams in large displacements and large rotations but with an elastic constitutive behaviour. The essential difficulty of the analysis of rotations lies in the fact that they are not commutative and do not constitute a vector space, but a ma"
  },
  "r5.03.50": {
    "frTitle": "Formulation discrète du contact-frottement",
    "frLead": "r5.03.50 Formulation discrète du contact-frottement Résumé : On décrit dans ce document les méthodes numériques utilisées pour traiter les problèmes de contact/frottement en grands déplacements dans l'opérateur STAT NON LINEou DYNA NON LINEà l’aide d’une formulation discrète. Les algorithmes disponibles permettent de traiter le problème de manière exacte (en",
    "enTitle": "Discrete formulation of contact-friction",
    "enLead": "r5.03.50 Discrete formulation of contact-friction Summary: This document describes the numerical methods used to treat contact/friction problems in large displacements in the operator STAT NON LINE or DYNA NON LINE by means of a discrete formulation. The available algorithms make it possible to treat the problem exactly (for contact) or approximately (for co"
  },
  "r5.03.52": {
    "frTitle": "1 **r5.03.52** Éléments de contact dérivés d’une formulation hybride continue",
    "frLead": "1 r5.03.52 Éléments de contact dérivés d’une formulation hybride continue Résumé: Ce document décrit la manière dont des éléments de contact frottant sont dérivés d’une formulation hybride continue de problèmes de contact entre solides (2D ou 3D) en grandes transformations et précise la stratégie de résolution utilisée. On utilise une formulation originale a",
    "enTitle": "1 **r5.03.52** Contact elements derived from a continuous hybrid formulation",
    "enLead": "1 r5.03.52 Contact elements derived from a continuous hybrid formulation Summary: This document describes the manner in which frictional contact elements are derived from a continuous hybrid formulation of contact problems between solids (2D or 3D) in large transformations and specifies the solution strategy used. An original formulation, called the stabilis"
  },
  "r5.03.54": {
    "frTitle": "Contact en petits glissements avec X-FEM",
    "frLead": "r5.03.54 Contact en petits glissements avec X-FEM Résumé: Ce document présente une nouvelle approche pour traiter les problèmes de contact en petits glissements avec la eXtended Finite Element Method (X-FEM) [bib1]. On considère la formulation hybride continue de problèmes de contact entre solides [bib2] et la stratégie de résolution est similaire à celle dé",
    "enTitle": "Contact in small sliding with X-FEM",
    "enLead": "r5.03.54 Contact in small sliding with X-FEM Summary: This document presents a new approach for treating contact problems in small sliding with the eXtended Finite Element Method (X-FEM) [bib1]. One considers the continuous hybrid formulation of contact problems between solids [bib2] and the solution strategy is similar to that already implemented in Code As"
  },
  "r5.03.55": {
    "frTitle": "1 **r5.03.55** Méthode LAC – Local Average Contact",
    "frLead": "1 r5.03.55 Méthode LAC – Local Average Contact Résumé: Ce document décrit la manière de traiter le contact entre solides (2D ou 3D) en grandes transformations par une méthode de type «mortar». La formulation est très précise pour les pressions de contact obtenues, en particulier lorsque les maillages ne sont pas coïncidents ou que les surfaces sont courbes. ",
    "enTitle": "1 **r5.03.55** LAC method – Local Average Contact",
    "enLead": "1 r5.03.55 LAC method – Local Average Contact Summary: This document describes the way of treating contact between solids (2D or 3D) in large transformations by a method of «mortar» type. The formulation is very accurate for the contact pressures obtained, in particular when the meshes are not matching or when the surfaces are curved. This formulation is ava"
  },
  "r5.03.80": {
    "frTitle": "Méthodes de pilotage du chargement",
    "frLead": "r5.03.80 Méthodes de pilotage du chargement Résumé: Ce document décrit les méthodes de pilotage du chargement disponibles dans Code Aster (par un degré de liberté, par longueur d’arc, par incrément de déformation et par prédiction élastique). Elles introduisent une inconnue supplémentaire, l’intensité de la part pilotable du chargement, et une équation suppl",
    "enTitle": "Methods of load piloting",
    "enLead": "r5.03.80 Methods of load piloting Summary: This document describes the load-piloting methods available in Code Aster (by a degree of freedom, by arc length, by strain increment and by elastic prediction). They introduce an additional unknown, the intensity of the pilotable part of the loading, and an additional equation, the piloting constraint. These method"
  },
  "r5.03.81": {
    "frTitle": "Méthode IMPLEX",
    "frLead": "r5.03.81 Méthode IMPLEX Résumé : Ce document présente une méthode de résolution du problème non linéaire, due à Oliver et al. [1], se substituant à la méthode de Newton pour certaines lois de comportement d'endommagement et de plasticité (ENDO FRAGILE [3], ENDO ISOT BETON [4] et VMIS ISOT LINE [5] à l'heure actuelle). Elle se base sur une extrapolation expli",
    "enTitle": "IMPLEX method",
    "enLead": "r5.03.81 IMPLEX method Summary: This document presents a method for solving the non-linear problem, due to Oliver et al. [1], taking the place of the Newton method for certain damage and plasticity constitutive laws (ENDO FRAGILE [3], ENDO ISOT BETON [4] and VMIS ISOT LINE [5] at the present time). It is based on an explicit extrapolation of the internal var"
  },
  "r5.04.01": {
    "frTitle": "Modélisation non locale à gradients de variables internes GRAD_VARI",
    "frLead": "r5.04.01 Modélisation non locale à gradients de variables internes GRAD VARI Résumé On présente ici la modélisation non locale à gradient de variables internes intitulée GRAD VARI dans Code Aster. Cette modélisation est issue des travaux d’E. Lorentz [Bib 1]. L’algorithme permettant de résoudre les équations d’équilibre et de régularisation a toutefois été m",
    "enTitle": "Non-local modelling with gradients of internal variables GRAD_VARI",
    "enLead": "r5.04.01 Non-local modelling with gradients of internal variables GRAD VARI Summary The non-local modelling with a gradient of internal variables entitled GRAD VARI in Code Aster is presented here. This modelling stems from the work of E. Lorentz [Bib 1]. The algorithm making it possible to solve the equilibrium and regularisation equations has however been "
  },
  "r5.04.03": {
    "frTitle": "Modélisations second gradient",
    "frLead": "r5.04.03 Modélisations second gradient Résumé On présente ici les modélisations second gradient issue des travaux de Chambon et al ([1], [2], [3]) et second gradient de dilatation issue des travaux de Fernandes et al ([4], [5]), et de Gantier ([14]). Ces modélisations s’inscrivent dans le cadre des milieux à microstructure et ont comme objectif numérique de ",
    "enTitle": "Second-gradient modellings",
    "enLead": "r5.04.03 Second-gradient modellings Summary The second-gradient modellings arising from the work of Chambon et al. ([1], [2], [3]) and the second gradient of dilatation arising from the work of Fernandes et al. ([4], [5]), and of Gantier ([14]), are presented here. These modellings fall within the framework of media with microstructure and have as their nume"
  },
  "r5.05.01": {
    "frTitle": "Calcul d'un spectre de réponse d'oscillateur",
    "frLead": "r5.05.01 Calcul d'un spectre de réponse d'oscillateur Résumé : Nous présentons dans ce document le calcul d'un spectre de réponse d'oscillateur (SRO). 1 Introduction Lors du calcul d'un spectre de réponse d'oscillateur (SRO), on est amené à calculer la réponse d'un oscillateur à un degré de liberté à un signal sismique. Cela consiste à résoudre une équation ",
    "enTitle": "Computation of an oscillator response spectrum",
    "enLead": "r5.05.01 Computation of an oscillator response spectrum Summary: We present in this document the computation of an oscillator response spectrum (SRO). 1 Introduction When computing an oscillator response spectrum (SRO), one is led to compute the response of a single-degree-of-freedom oscillator to a seismic signal. This consists in solving a second-order dif"
  },
  "r5.05.02": {
    "frTitle": "Algorithmes d'intégration directe de l'opérateur DYNA_VIBRA / BASE_CALCUL=’PHYS’",
    "frLead": "r5.05.02 Algorithmes d'intégration directe de l'opérateur DYNA VIBRA / BASE CALCUL=’PHYS’ Résumé: Ce document décrit les schémas d'intégration temporelle qui sont utilisés pour résoudre de façon directe des problèmes de dynamique en mécanique linéaire transitoire . Les schémas de NEWMARK et WILSON- \\theta sont détaillés, ainsi que les schémas «différences ce",
    "enTitle": "Direct integration algorithms of the operator DYNA_VIBRA / BASE_CALCUL=’PHYS’",
    "enLead": "r5.05.02 Direct integration algorithms of the operator DYNA VIBRA / BASE CALCUL=’PHYS’ Summary: This document describes the time-integration schemes which are used to solve, in a direct manner, dynamics problems in linear transient mechanics . The NEWMARK and WILSON- \\theta schemes are detailed, as well as the \"central differences with a constant step\" and \""
  },
  "r5.05.03": {
    "frTitle": "Réponse harmonique",
    "frLead": "r5.05.03 Réponse harmonique Résumé Ce document présente les bases théoriques du calcul du régime permanent de la réponse d’un système mécanique complexe, à comportement linéaire, soumis à une sollicitation dynamique harmonique. Le calcul porte indifféremment directement sur le système modélisé en éléments finis, ou bien représenté par une base modale; dans c",
    "enTitle": "Harmonic response",
    "enLead": "r5.05.03 Harmonic response Summary: This document presents the theoretical foundations of the computation of the steady-state regime of the response of a complex mechanical system, with linear behaviour, subjected to a harmonic dynamic excitation. The computation is carried out equally well directly on the system modelled by finite elements, or on the system"
  },
  "r5.05.04": {
    "frTitle": "Modélisation de l'amortissement en dynamique linéaire",
    "frLead": "r5.05.04 Modélisation de l'amortissement en dynamique linéaire Résumé : Les analyses dynamiques linéaires des structures soumises à des forces ou des mouvements imposés nécessitent d'ajouter des caractéristiques d'amortissement mécanique aux caractéristiques de rigidité et de masse du modèle. On dispose de plusieurs modélisations classiques, applicables à to",
    "enTitle": "Modelling of damping in linear dynamics",
    "enLead": "r5.05.04 Modelling of damping in linear dynamics Summary: The linear dynamic analyses of structures subjected to imposed forces or motions require mechanical damping characteristics to be added to the stiffness and mass characteristics of the model. Several classical modellings are available, applicable to all the types of finite elements available: - the vi"
  },
  "r5.05.05": {
    "frTitle": "Algorithme non linéaire dynamique",
    "frLead": "r5.05.05 Algorithme non linéaire dynamique Résumé: L’opérateur DYNA NON LINE DYNA NON LINE s’emploie pour l’analyse dynamique non linéaire des structures par une intégration directe en temps. Les non-linéarités peuvent provenir du comportement du matériau, des liaisons (contact-frottement), ou de grandes transformations géométriques (grands déplacements et g",
    "enTitle": "Non-linear dynamic algorithm",
    "enLead": "r5.05.05 Non-linear dynamic algorithm Summary: The operator DYNA NON LINE DYNA NON LINE is used for the non-linear dynamic analysis of structures by direct time integration. The non-linearities may come from the material behaviour, from the constraints (frictional contact), or from large geometric transformations (large displacements and large rotations). Th"
  },
  "r5.05.07": {
    "frTitle": "Matrices gyroscopiques des poutres droites et des disques",
    "frLead": "r5.05.07 Matrices gyroscopiques des poutres droites et des disques Résumé: Ce document présente la formulation des matrices d'amortissement et de raideur gyroscopiques des éléments poutres, volumiques et discrets. Les poutres sont uniquement des poutres droites (Éléments POU D T et POU D E). La section est constante sur la longueur et de forme circulaire. Le",
    "enTitle": "Gyroscopic matrices of straight beams and of discs",
    "enLead": "r5.05.07 Gyroscopic matrices of straight beams and of discs Summary: This document presents the formulation of the gyroscopic damping and stiffness matrices of the beam, solid and discrete elements. The beams are exclusively straight beams (Elements POU D T and POU D E). The cross-section is constant along the length and of circular shape. The material is ho"
  },
  "r5.05.08": {
    "frTitle": "Modélisation des rotors fissurés par raideur équivalente fonction de l'angle de rotation",
    "frLead": "r5.05.08 Modélisation des rotors fissurés par raideur équivalente fonction de l'angle de rotation Résumé: Ce document décrit une méthode de prise en compte des fissures dans les rotors modélisés en 1D. Elle se base sur des développements théoriques décrits dans les notes [1] et [2] et publiés dans [3], établissant, sous certaines hypothèses, l'équivalence en",
    "enTitle": "Modelling of cracked rotors by an equivalent stiffness as a function of the rotation angle",
    "enLead": "r5.05.08 Modelling of cracked rotors by an equivalent stiffness as a function of the rotation angle Summary: This document describes a method for taking cracks into account in rotors modelled in 1D. It is based on theoretical developments described in notes [1] and [2] and published in [3], establishing, under certain hypotheses, the equivalence between a no"
  },
  "r5.05.09": {
    "frTitle": "Calcul de signaux reconstitués et de la matrice fonction de transferts",
    "frLead": "r5.05.09 Calcul de signaux reconstitués et de la matrice fonction de transferts Résumé Ce document présente les bases théoriques ayant permis de mettre en place la macro-commande CALC TRANSFERT U4.53.51. Cette dernière permet de calculer la matrice fonction de transfert entre deux points, mais aussi de reconstituer les signaux en un point donné, connaissant ",
    "enTitle": "Computation of reconstructed signals and of the transfer-function matrix",
    "enLead": "r5.05.09 Computation of reconstructed signals and of the transfer-function matrix Summary: This document presents the theoretical bases which made it possible to set up the macro-command CALC TRANSFERT U4.53.51. The latter makes it possible to compute the transfer-function matrix between two points, but also to reconstruct the signals at a given point, knowi"
  },
  "r5.05.10": {
    "frTitle": "Dynamic analysis of structures with viscoelastic materials having frequency dependent properties",
    "frLead": "r5.05.10 Dynamic analysis of structures with viscoelastic materials having frequency dependent properties Overview: This reference document tackles the way how advanced capabilities are introduced in Code Aster to take into account frequency dependent properties of viscoelastic materials. Computing of harmonic response and modes of vibration (real or complex",
    "enTitle": "Dynamic analysis of structures with viscoelastic materials having frequency dependent properties",
    "enLead": "r5.05.10 Dynamic analysis of structures with viscoelastic materials having frequency dependent properties Overview: This reference document tackles the way how advanced capabilities are introduced in Code Aster to take into account frequency dependent properties of viscoelastic materials. Computing of harmonic response and modes of vibration (real or complex"
  },
  "r5.06.01": {
    "frTitle": "Réduction de modèle en dynamique linéaire et non-linéaire : Méthode de RITZ",
    "frLead": "r5.06.01 Réduction de modèle en dynamique linéaire et non-linéaire : Méthode de RITZ Résumé : Ce document présente le principe de réduction de modèle par projection sur base réduite (méthode de Ritz). La base le plus couramment utilisée est la base modale. Les problèmes de troncature dus à l'utilisation d'une base réduite sont évoqués. Des corrections de tro",
    "enTitle": "Model reduction in linear and non-linear dynamics: RITZ method",
    "enLead": "r5.06.01 Model reduction in linear and non-linear dynamics: RITZ method Summary: This document presents the principle of model reduction by projection onto a reduced basis (Ritz method). The basis most commonly used is the modal basis. The truncation problems due to the use of a reduced basis are mentioned. Truncation corrections are proposed. The descriptio"
  },
  "r5.06.03": {
    "frTitle": "Modélisation des chocs et du frottement en analyse transitoire par recombinaison modale",
    "frLead": "r5.06.03 Modélisation des chocs et du frottement en analyse transitoire par recombinaison modale Résumé : Ce document décrit les lois physiques de contact avec frottement entre structures et la modélisation qui en est faite dans l'algorithme d'analyse transitoire par recombinaison modale DYNA VIBRA (TYPE CALCUL='TRAN' et BASE CALCUL='GENE') avec COMPORTEMENT",
    "enTitle": "Modelling of impacts and of friction in transient analysis by modal recombination",
    "enLead": "r5.06.03 Modelling of impacts and of friction in transient analysis by modal recombination Summary: This document describes the physical laws of contact with friction between structures and the modelling of them in the algorithm for transient analysis by modal recombination DYNA VIBRA (TYPE CALCUL='TRAN' and BASE CALCUL='GENE') with COMPORTEMENT='DIS CHOC'. "
  },
  "r5.06.04": {
    "frTitle": "Algorithmes d’intégration temporelle de l’opérateur DYNA_VIBRA / BASE_CALCUL=’GENE’",
    "frLead": "r5.06.04 Algorithmes d’intégration temporelle de l’opérateur DYNA VIBRA / BASE CALCUL=’GENE’ Résumé Ce document décrit les schémas d’intégration temporelle qui sont utilisés pour résoudre dans l’espace des modes des problèmes de dynamique transitoire en mécanique linéaire, avec, pour certains schémas, la prise en compte possible de non linéarités localisées ",
    "enTitle": "Time-integration algorithms of the operator DYNA_VIBRA / BASE_CALCUL=’GENE’",
    "enLead": "r5.06.04 Time-integration algorithms of the operator DYNA VIBRA / BASE CALCUL=’GENE’ Summary: This document describes the time-integration schemes which are used to solve, in the space of the modes, linear transient dynamics problems in mechanics, with, for certain schemes, the possible taking into account of localised non-linearities of the type impacts, fr"
  },
  "r5.07.01": {
    "frTitle": "Calcul de modes non-linéaires avec l'opérateur MODE_NON_LINE",
    "frLead": "r5.07.01 Calcul de modes non-linéaires avec l'opérateur MODE NON LINE Résumé: L'opérateur MODE NON LINE permet de calculer les modes non-linéaires d'un système linéaire conservatif autonome doté de non-linéarités de choc localisées. On décrit ici les méthodes numériques utilisées pour le calcul des modes non-linéaires. 1 Introduction Les modes non-linéaires ",
    "enTitle": "Computation of non-linear modes with the operator MODE_NON_LINE",
    "enLead": "r5.07.01 Computation of non-linear modes with the operator MODE NON LINE Summary: The operator MODE NON LINE makes it possible to compute the non-linear modes of an autonomous conservative linear system endowed with localised impact non-linearities. The numerical methods used for the computation of the non-linear modes are described here. 1 Introduction Non-"
  },
  "r6.01.02": {
    "frTitle": "Généralités sur le gradient conjugué : GCPC Aster et utilisation de PETSc",
    "frLead": "r6.01.02 Généralités sur le gradient conjugué : GCPC Aster et utilisation de PETSc Résumé: Dans le cadre des simulations thermo-mécaniques, l’essentiel des coûts calcul provient souvent de la construction et de la résolution des systèmes linéaires . Le choix du bon solveur linéaire est donc primordial, d’une part pour sa rapidité, mais aussi pour sa robustes",
    "enTitle": "Generalities on the conjugate gradient: GCPC Aster and use of PETSc",
    "enLead": "r6.01.02 Generalities on the conjugate gradient: GCPC Aster and use of PETSc Summary: In the framework of thermo-mechanical simulations, the bulk of the computational cost often comes from the construction and the solution of linear systems . The choice of the right linear solver is therefore essential, on the one hand for its speed, but also for its robustn"
  },
  "r6.02.01": {
    "frTitle": "A propos des méthodes de décomposition de type GAUSS",
    "frLead": "r6.02.01 A propos des méthodes de décomposition de type GAUSS Résumé : Ce document présente quelques aspects liés à la méthode de décomposition de GAUSS. Après une rapide présentation, nous rappelons les principaux avantages et inconvénients liés à cette méthode directe. Puis, nous détaillons l'implémentation de l'algorithme LDLT mis en oeuvre dans le Code A",
    "enTitle": "About Gauss-type decomposition methods",
    "enLead": "r6.02.01 About Gauss-type decomposition methods Summary: This document presents a few aspects related to the GAUSS decomposition method. After a rapid presentation, we recall the main advantages and disadvantages related to this direct method. Then, we detail the implementation of the LDLT algorithm implemented in Code Aster . GAUSS (1777 - 1855) is at the o"
  },
  "r6.02.02": {
    "frTitle": "Solveur linéaire par la méthode multifrontale MULT_FRONT",
    "frLead": "r6.02.02 Solveur linéaire par la méthode multifrontale MULT FRONT Résumé: La méthode multifrontale MULT FRONT est une méthode directe particulièrement adaptée à la résolution des systèmes linéaires dont la matrice est creuse. Cette méthode comprend une phase préliminaire de renumérotation destinée à minimiser le remplissage de la matrice au cours de la facto",
    "enTitle": "Linear solver by the multifrontal method MULT_FRONT",
    "enLead": "r6.02.02 Linear solver by the multifrontal method MULT FRONT Summary: The multifrontal method MULT FRONT is a direct method particularly well suited to the solution of linear systems whose matrix is sparse. This method comprises a preliminary renumbering phase intended to minimise the fill-in of the matrix during the factorisation. This phase also makes it p"
  },
  "r6.02.03": {
    "frTitle": "Généralités sur les solveurs linéaires directs et utilisation de MUMPS",
    "frLead": "r6.02.03 Généralités sur les solveurs linéaires directs et utilisation de MUMPS Résumé Dans le cadre des simulations thermo-mécaniques avec Code Aster , l’essentiel des coûts calcul provient souvent de la construction et de la résolution des systèmes linéaires . Pour effectuer plus efficacement ces résolutions, Code Astera fait le choix d’intégrer la méthode",
    "enTitle": "General information on direct linear solvers and use of MUMPS",
    "enLead": "r6.02.03 General information on direct linear solvers and use of MUMPS Summary In the context of thermo-mechanical simulations with Code Aster , most of the calculation costs often come from the construction and solution of linear systems . To perform these solutions more efficiently, Code Aster has chosen to integrate the direct method deployed in the MUMPS"
  },
  "r6.03.01": {
    "frTitle": "Résolution de systèmes non réguliers par une méthode de décomposition en valeurs singulières",
    "frLead": "r6.03.01 Résolution de systèmes non réguliers par une méthode de décomposition en valeurs singulières Résumé : Ce document est consacré à la résolution des systèmes d’équations linéaires non réguliers. Les matrices prises en compte peuvent être carrées non inversibles ou rectangulaires. Après avoir rappelé le cadre théorique des solutions au sens des moindre",
    "enTitle": "Solution of non-regular systems by a singular value decomposition method",
    "enLead": "r6.03.01 Solution of non-regular systems by a singular value decomposition method Summary: This document is devoted to the solution of non-regular systems of linear equations. The matrices taken into account may be square and non-invertible, or rectangular. After recalling the theoretical framework of solutions in the least-squares sense, we concentrate the "
  },
  "r7.01.01": {
    "frTitle": "Relations de comportement BETON_GRANGER et BETON_GRANGER_V pour le fluage propre du béton",
    "frLead": "r7.01.01 Relations de comportement BETON GRANGER et BETON GRANGER V pour le fluage propre du béton Résumé : Ce document présente le modèle de fluage propre de «Granger», qui est une façon de modéliser le fluage propre du béton. On y détaille également l'écriture et le traitement numérique du modèle. Dans Code Aster, le modèle est décliné en deux lois de comp",
    "enTitle": "Constitutive relations BETON_GRANGER and BETON_GRANGER_V for the basic creep of concrete",
    "enLead": "r7.01.01 Constitutive relations BETON GRANGER and BETON GRANGER V for the basic creep of concrete Summary: This document presents the “Granger” basic-creep model, which is a way of modelling the basic creep of concrete. The writing and the numerical treatment of the model are also detailed there. In Code Aster, the model is declined into two constitutive law"
  },
  "r7.01.02": {
    "frTitle": "Modélisation des câbles de précontrainte",
    "frLead": "r7.01.02 Modélisation des câbles de précontrainte Résumé Pour améliorer la résistance de certaines structures de génie civil, on utilise du béton précontraint: pour cela, le béton est comprimé à l’aide de câbles de précontrainte en acier. Dans Code Aster , il est possible de faire des calculs de telles structures: les câbles de précontrainte sont modélisés, ",
    "enTitle": "Modelling of prestressing cables",
    "enLead": "r7.01.02 Modelling of prestressing cables Summary: In order to improve the strength of certain civil-engineering structures, prestressed concrete is used: to this end, the concrete is compressed by means of steel prestressing cables. In Code Aster , it is possible to carry out analyses of such structures: the prestressing cables are modelled either by two-no"
  },
  "r7.01.03": {
    "frTitle": "Loi de comportement BETON_DOUBLE_DP à double critère Drücker-Prager pour la fissuration et la compression du béton",
    "frLead": "r7.01.03 Loi de comportement BETON DOUBLE DP à double critère Drücker-Prager pour la fissuration et la compression du béton Résumé Le modèle présenté dans ce document, comportement BETON DOUBLE DP, est une loi de comportement non linéaire pour le béton. Il s’appuie sur la théorie de la plasticité, il est valable pour les états de contrainte tridimensionnels.",
    "enTitle": "Constitutive law BETON_DOUBLE_DP with a double Drucker-Prager criterion for the cracking and the compression of concrete",
    "enLead": "r7.01.03 Constitutive law BETON DOUBLE DP with a double Drucker-Prager criterion for the cracking and the compression of concrete Summary: The model presented in this document, constitutive behaviour BETON DOUBLE DP, is a non-linear constitutive law for concrete. It is based on the theory of plasticity; it is valid for three-dimensional stress states. The mo"
  },
  "r7.01.04": {
    "frTitle": "Loi de comportement ENDO_ISOT_BETON",
    "frLead": "r7.01.04 Loi de comportement ENDO ISOT BETON Résumé: Cette documentation présente l’écriture théorique et l’intégration numérique de la loi de comportement ENDO ISOT BETON qui décrit un mécanisme d’endommagement local asymétrique des bétons, avec effet de restauration de rigidité. 1 Introduction – Domaine d’application La loi de comportement ENDO ISOT BETON ",
    "enTitle": "Constitutive law ENDO_ISOT_BETON",
    "enLead": "r7.01.04 Constitutive law ENDO ISOT BETON Summary: This documentation presents the theoretical writing and the numerical integration of the constitutive law ENDO ISOT BETON, which describes a mechanism of asymmetric local damage of concretes, with a stiffness-restoration effect. 1 Introduction – Field of application The constitutive law ENDO ISOT BETON aims "
  },
  "r7.01.06": {
    "frTitle": "Relation de comportement BETON_UMLV pour le fluage du béton",
    "frLead": "r7.01.06 Relation de comportement BETON UMLV pour le fluage du béton Résumé : Ce document présente le modèle de fluage propre UMLV (comportement BETON UMLV) , qui est une façon de modéliser le fluage du béton (propre et de dessiccation). On y détaille également l'écriture et le traitement numérique du modèle. L'intégration du modèle (c’est-à-dire la mise à j",
    "enTitle": "Constitutive relation BETON_UMLV for the creep of concrete",
    "enLead": "r7.01.06 Constitutive relation BETON UMLV for the creep of concrete Summary: This document presents the UMLV basic-creep model (constitutive behaviour BETON UMLV), which is a way of modelling the creep of concrete (basic creep and desiccation creep). The writing and the numerical treatment of the model are also detailed there. The integration of the model (t"
  },
  "r7.01.08": {
    "frTitle": "Modèle d’endommagement de MAZARS",
    "frLead": "r7.01.08 Modèle d’endommagement de MAZARS Résumé : Cette documentation présente le modèle de comportement de MAZARS qui permet de décrire le comportement élastique-endommageable du béton. Ce modèle est 3D, isotrope et s’appuie sur un critère d’endommagement écrit en déformation et décrivant la dissymétrie traction-compression. Le modèle initial, ne rend pas ",
    "enTitle": "MAZARS damage model",
    "enLead": "r7.01.08 MAZARS damage model Summary: This documentation presents the MAZARS constitutive model, which makes it possible to describe the elastic damageable behaviour of concrete. This model is 3D and isotropic, and is based on a damage criterion written in strain and describing the tension–compression asymmetry. The initial model does not account for the rec"
  },
  "r7.01.09": {
    "frTitle": "Loi de comportement ENDO_ORTH_BETON",
    "frLead": "r7.01.09 Loi de comportement ENDO ORTH BETON Résumé: Cette documentation présente l’écriture théorique et l’intégration numérique de la loi de comportement ENDO ORTH BETON développée par [bib1], qui décrit l’anisotropie induite par l’endommagement dans le béton, ainsi que les effets unilatéraux (comportement différent en traction et en compression). La valid",
    "enTitle": "Constitutive law ENDO_ORTH_BETON",
    "enLead": "r7.01.09 Constitutive law ENDO ORTH BETON Summary: This documentation presents the theoretical writing and the numerical integration of the constitutive law ENDO ORTH BETON developed by [bib1], which describes the anisotropy induced by damage in concrete, as well as the unilateral effects (different behaviour in tension and in compression). The validation of"
  },
  "r7.01.10": {
    "frTitle": "Modélisations THHM. Généralités et algorithmes",
    "frLead": "r7.01.10 Modélisations THHM. Généralités et algorithmes Résumé Les modules THMsont ceux qui traitent les équations de la mécanique des milieux continus en utilisant la théorie des milieux poreux éventuellement non saturés et en considérant que les phénomènes mécaniques, thermiques et hydrauliques sont complètement couplés. Nous présentons ici les équations d",
    "enTitle": "THHM modellings. Generalities and algorithms",
    "enLead": "r7.01.10 THHM modellings. Generalities and algorithms Summary The THM modules are those which treat the equations of continuum mechanics using the theory of porous media, possibly unsaturated, and considering that the mechanical, thermal and hydraulic phenomena are fully coupled. We present here the equilibrium equations, or conservation equations solved by "
  },
  "r7.01.11": {
    "frTitle": "Modèles de comportement THHM",
    "frLead": "r7.01.11 Modèles de comportement THHM Résumé: Cette note présente une famille de lois de comportement THM pour les milieux saturés et non saturés. On y décrit les relations permettant de calculer les quantités hydrauliques et thermiques, en tenant compte de couplages forts entre ces phénomènes et aussi avec les déformations mécaniques. Les relations présenté",
    "enTitle": "THHM constitutive models",
    "enLead": "r7.01.11 THHM constitutive models Summary: This note presents a family of THM constitutive laws for saturated and unsaturated media. One describes there the relations making it possible to compute the hydraulic and thermal quantities, taking into account strong couplings between these phenomena and also with the mechanical strains. The relations presented he"
  },
  "r7.01.12": {
    "frTitle": "Modélisation de la thermo-hydratation, du séchage et du retrait du béton",
    "frLead": "r7.01.12 Modélisation de la thermo-hydratation, du séchage et du retrait du béton Résumé On décrit ici deux types de phénomènes se produisant à des périodes distinctes de la vie d’un béton: - d’une part une réaction de thermo-hydratation engendrant un retrait dit endogène, se manifestant au jeune âge du béton (les 100 premiers jours), - d’autre part une évap",
    "enTitle": "Modelling of the thermo-hydration, drying and shrinkage of concrete",
    "enLead": "r7.01.12 Modelling of the thermo-hydration, drying and shrinkage of concrete Summary Two types of phenomena, occurring at distinct periods in the life of a concrete, are described here: - on the one hand a thermo-hydration reaction generating a so-called endogenous shrinkage, appearing at the early age of the concrete (the first 100 days), - on the other han"
  },
  "r7.01.13": {
    "frTitle": "Loi CJS en géomécanique",
    "frLead": "r7.01.13 Loi CJS en géomécanique Résumé: On présente ici la loi CJS qui s’applique à la mécanique des sols. On précise: - la description du modèle, - l’intégration de la loi dans code aster , - la description des routines introduites. 1 Notations Les notations utilisées ici sont les notations usuelles de la mécanique des sols, auxquelles s’ajoutent les notat",
    "enTitle": "CJS law in geomechanics",
    "enLead": "r7.01.13 CJS law in geomechanics Summary: The CJS law, which applies to soil mechanics, is presented here. The following are specified: - the description of the model, - the integration of the law in code aster , - the description of the routines introduced. 1 Notation The notation used here is the notation usual in soil mechanics, to which is added the nota"
  },
  "r7.01.14": {
    "frTitle": "Loi de comportement CAM_CLAY",
    "frLead": "r7.01.14 Loi de comportement CAM CLAY Résumé: Le modèle de Cam-Clay est un des modèles élastoplastiques le plus connu et le plus utilisé en mécanique des sols. Il est spécialement adapté aux matériaux argileux. Il y a plusieurs types de modèles Cam-Clay, celui présenté ici est le plus courant et est appelé Cam-Clay modifié. Ce modèle est caractérisé par des ",
    "enTitle": "Constitutive law CAM_CLAY",
    "enLead": "r7.01.14 Constitutive law CAM CLAY Summary: The Cam-Clay model is one of the best known and most widely used elastoplastic models in soil mechanics. It is specially adapted to clayey materials. There are several types of Cam-Clay models; the one presented here is the most common and is called modified Cam-Clay. This model is characterised by hardenable loadi"
  },
  "r7.01.15": {
    "frTitle": "Loi de comportement de LAIGLE",
    "frLead": "r7.01.15 Loi de comportement de LAIGLE Résumé: Le modèle rhéologique de Laigle permet d’analyser le comportement mécanique des roches. Le développement de ce modèle de comportement a été initié suite à la difficulté d’appréhender correctement la réponse du massif lors de l’excavation d’une cavité souterraine, dans le but: - de définir le besoin et la nature ",
    "enTitle": "Constitutive law of LAIGLE",
    "enLead": "r7.01.15 Constitutive law of LAIGLE Summary: The rheological model of Laigle makes it possible to analyse the mechanical behaviour of rocks. The development of this constitutive model was initiated following the difficulty of correctly capturing the response of the rock mass during the excavation of an underground cavity, with the aim: - of defining the need"
  },
  "r7.01.16": {
    "frTitle": "Intégration des comportements mécaniques élasto-plastiques de Drucker-Prager, associé (DRUCK_PRAGER)et non-associé (DRUCK_PRAG_N_A) et post-traitements",
    "frLead": "r7.01.16 Intégration des comportements mécaniques élasto-plastiques de Drucker-Prager, associé (DRUCK PRAGER)et non-associé (DRUCK PRAG N A) et post-traitements Résumé: Ce document décrit les principes de plusieurs développements concernant la loi de comportement élastoplastique de Drucker-Prager en version associée (DRUCK PRAGER)et non-associée (DRUCK PRAG ",
    "enTitle": "Integration of the associated (DRUCK_PRAGER) and non-associated (DRUCK_PRAG_N_A) elastoplastic Drucker-Prager mechanical constitutive behaviours, and post-processing",
    "enLead": "r7.01.16 Integration of the associated (DRUCK PRAGER) and non-associated (DRUCK PRAG N A) elastoplastic Drucker-Prager mechanical constitutive behaviours, and post-processing Summary: This document describes the principles of several developments concerning the elastoplastic Drucker-Prager constitutive law in the associated version (DRUCK PRAGER) and the non"
  },
  "r7.01.17": {
    "frTitle": "Modèle de Barcelone",
    "frLead": "r7.01.17 Modèle de Barcelone Résumé: Ce document présente la formulation et l’intégration numérique du modèle de comportement élastoplastique de Barcelone [bib2] , conçu pour décrire le comportement mécanique des sols non saturés, en particulier les argiles. Ce modèle est une extension du modèle de Cam-Clay modifié [bib1] prenant en compte, de manière schéma",
    "enTitle": "Barcelona model",
    "enLead": "r7.01.17 Barcelona model Summary: This document presents the formulation and the numerical integration of the elastoplastic Barcelona constitutive model [bib2] , designed to describe the mechanical behaviour of unsaturated soils, in particular clays. This model is an extension of the modified Cam-Clay model [bib1] taking into account, in a schematic manner, "
  },
  "r7.01.18": {
    "frTitle": "Loi de comportement de HOEK_BROWN modifiée",
    "frLead": "r7.01.18 Loi de comportement de HOEK BROWN modifiée Résumé Ce document décrit une loi de comportement pour les roches. Le critère de plastification est un critère parabolique de type Hoek-Brown. Il est écrit en contraintes principales. L’évolution des déformations plastiques est de type «non associé», formulée à partir d’un critère de Drucker-Pragerdont l’an",
    "enTitle": "Modified HOEK_BROWN constitutive law",
    "enLead": "r7.01.18 Modified HOEK BROWN constitutive law Summary: This document describes a constitutive law for rocks. The yield criterion is a parabolic criterion of Hoek-Brown type. It is written in principal stresses. The evolution of the plastic strains is of «non-associated» type, formulated from a Drucker-Prager criterion whose friction angle evolves with yieldi"
  },
  "r7.01.19": {
    "frTitle": "Modélisation du couplage fluage/plasticité pour le béton",
    "frLead": "r7.01.19 Modélisation du couplage fluage/plasticité pour le béton Résumé Il s'agit d’un modèle de couplage entre les comportements modélisant le fluage, de type GRANGER et les modèles de plasticité, soit généraux (loi de Von Mises à écrouissage isotrope), soit spécifiques au béton, de type BETON DOUBLE DP, implanté dans l'algorithme de résolution général de ",
    "enTitle": "Modelling of the creep/plasticity coupling for concrete",
    "enLead": "r7.01.19 Modelling of the creep/plasticity coupling for concrete Summary This is a coupling model between the constitutive behaviours modelling creep, of GRANGER type, and the plasticity models, either general (von Mises law with isotropic hardening) or specific to concrete, of BETON DOUBLE DP type, implemented in the general solution algorithm of DYNA/STAT "
  },
  "r7.01.20": {
    "frTitle": "Comportement de l’acier soumis à la corrosion",
    "frLead": "r7.01.20 Comportement de l’acier soumis à la corrosion Résumé: Cette documentation présente le modèle de comportement de l’acier soumis à la corrosion qui permet de décrire le comportement mécanique de renforcement corrodé dans les structures en béton armé. Ce modèle est développé en 1D et 3D, élasto-plastique endommageable à écrouissage isotrope et s’appuie",
    "enTitle": "Behaviour of steel subjected to corrosion",
    "enLead": "r7.01.20 Behaviour of steel subjected to corrosion Summary: This documentation presents the constitutive model of steel subjected to corrosion, which makes it possible to describe the mechanical behaviour of corroded reinforcement in reinforced-concrete structures. This model is developed in 1D and 3D; it is elastoplastic and damageable, with isotropic harde"
  },
  "r7.01.21": {
    "frTitle": "Loi de comportement (en 2D) pour la liaison acier –béton : JOINT_BA",
    "frLead": "r7.01.21 Loi de comportement (en 2D) pour la liaison acier –béton : JOINT BA Résumé: La loi de comportement JOINT BA décrit le phénomène de dégradation et de rupture de la liaison entre les barres d’acier et le béton, dans les structures en béton armé. Cette documentation présente l’écriture théorique dans le cadre thermodynamique et l’intégration numérique ",
    "enTitle": "Constitutive law (in 2D) for the steel–concrete bond: JOINT_BA",
    "enLead": "r7.01.21 Constitutive law (in 2D) for the steel–concrete bond: JOINT BA Summary: The constitutive law JOINT BA describes the phenomenon of degradation and of failure of the bond between the steel bars and the concrete, in reinforced-concrete structures. This documentation presents the theoretical writing within the thermodynamic framework and the numerical i"
  },
  "r7.01.22": {
    "frTitle": "Loi de comportement viscoplastique VISC_DRUC_PRAG",
    "frLead": "r7.01.22 Loi de comportement viscoplastique VISC DRUC PRAG Résumé: Ce document décrit la loi de comportement viscoplastique VISC DRUC PRAG basée sur le modèle élastoplastique de Drucker-Prager et prenant en compte la viscosité selon une loi puissance de type Perzyna. Son domaine d'application est l'argilite qui est la roche hôte du concept de stockage. Le mo",
    "enTitle": "Viscoplastic constitutive law VISC_DRUC_PRAG",
    "enLead": "r7.01.22 Viscoplastic constitutive law VISC DRUC PRAG Summary: This document describes the viscoplastic constitutive law VISC DRUC PRAG based on the elastoplastic Drucker–Prager model and taking viscosity into account according to a power law of Perzyna type. Its field of application is argillite, which is the host rock of the storage concept. The proposed m"
  },
  "r7.01.23": {
    "frTitle": "Loi de comportement cyclique de HUJEUX pour les sols",
    "frLead": "r7.01.23 Loi de comportement cyclique de HUJEUX pour les sols Résumé: Le modèle de comportement dit de «Hujeux», conçu au laboratoire MSSMat de l’ECP , est un des modèles élastoplastiques cycliques de mécanique des sols (géomatériaux granulaires: argiles sableuses, normalement consolidées ou sur-consolidées, graves…) le plus adapté pour des simulations d’ouv",
    "enTitle": "Cyclic constitutive law of HUJEUX for soils",
    "enLead": "r7.01.23 Cyclic constitutive law of HUJEUX for soils Summary: The constitutive model known as “Hujeux”, designed at the MSSMat laboratory of the ECP , is one of the cyclic elastoplastic models of soil mechanics (granular geomaterials: sandy clays, normally consolidated or over-consolidated, gravels…) best suited to simulations of geotechnical structures unde"
  },
  "r7.01.24": {
    "frTitle": "Loi de comportement viscoplastique LETK",
    "frLead": "r7.01.24 Loi de comportement viscoplastique LETK Résumé: La loi L&K décrit un comportement élasto-visco-plastique des roches. L’élastoplasticité se caractérise par un écrouissage positif en pré-pic et un comportement adoucissant au delà du de résistance. La viscoplasticité traduit l’effet du temps sur le comportement. Elle est décrite par une loi en puissanc",
    "enTitle": "Viscoplastic constitutive law LETK",
    "enLead": "r7.01.24 Viscoplastic constitutive law LETK Summary: The L&K law describes an elasto-visco-plastic behaviour of rocks. Elastoplasticity is characterised by a positive hardening in the pre-peak regime and a softening behaviour beyond the strength. Viscoplasticity expresses the effect of time on the behaviour. It is described by a Perzyna power law. The initia"
  },
  "r7.01.25": {
    "frTitle": "Lois de comportement des joints des barrages : JOINT_MECA_RUPT, JOINT_MECA_FROT etJOINT_MECA_ENDO",
    "frLead": "r7.01.25 Lois de comportement des joints des barrages : JOINT MECA RUPT, JOINT MECA FROT etJOINT MECA ENDO Résumé: Ce document décrit des lois surfaciques permettant de modéliser la rupture et le frottement entre les lèvres d'une fissure ou d'un joint. La loi JOINT MECA RUPT ne représente que le phénomène d’endommagement, elle est basée sur une formulation c",
    "enTitle": "Constitutive laws of dam joints: JOINT_MECA_RUPT, JOINT_MECA_FROT and JOINT_MECA_ENDO",
    "enLead": "r7.01.25 Constitutive laws of dam joints: JOINT MECA RUPT, JOINT MECA FROT and JOINT MECA ENDO Summary: This document describes surface laws making it possible to model the fracture and the friction between the lips of a crack or of a joint. The law JOINT MECA RUPT represents only the damage phenomenon; it is based on a cohesive formulation of fracture. The "
  },
  "r7.01.26": {
    "frTitle": "Relation de comportement BETON_RAG",
    "frLead": "r7.01.26 Relation de comportement BETON RAG Résumé: Ce document présente le modèle de comportement BETON RAG, utilisé pour estimer le comportement à long terme des structures affectées par la réaction alcali-granulat. On y détaille également l’écriture et le traitement numérique du modèle. 1 Introduction Un certain nombre d’ouvrages de génie civil du parc de",
    "enTitle": "Constitutive law BETON_RAG",
    "enLead": "r7.01.26 Constitutive law BETON RAG Summary: This document presents the constitutive model BETON RAG, used to estimate the long-term behaviour of structures affected by the alkali-aggregate reaction. It also details the formulation and the numerical treatment of the model. 1 Introduction A certain number of civil-engineering structures of the EDF generating "
  },
  "r7.01.27": {
    "frTitle": "Loi de comportement BETON_REGLE_PR",
    "frLead": "r7.01.27 Loi de comportement BETON REGLE PR Résumé: Cette documentation présente la loi BETON REGLE PR implantée par la société Sixense-NECS dans le cadre de la communauté code aster libre. Il s'agit d'une loi réglementaire [bib1], écrite en combinant deux lois 1D. 1 Présentation de la loi BETON REGLE PR La loi de comportement est de type «deux fois 1D» dans",
    "enTitle": "Constitutive law BETON_REGLE_PR",
    "enLead": "r7.01.27 Constitutive law BETON REGLE PR Summary: This documentation presents the law BETON REGLE PR implemented by the company Sixense-NECS within the framework of the free code aster community. It is a regulatory law [bib1], written by combining two 1D laws. 1 Presentation of the law BETON REGLE PR The constitutive law is of the “twice 1D” type in the prin"
  },
  "r7.01.28": {
    "frTitle": "Loi de Mohr-Coulomb",
    "frLead": "r7.01.28 Loi de Mohr-Coulomb Résumé: Ce document présente la méthode de résolution de la loi de Mohr-Coulomb dans Code Aster . 1 Notations 1.1 Données générales | {\\sigma} {1}\\ge {\\sigma} {2}\\ge {\\sigma} {3} | Contraintes principales (dans cet ordre) | | --- | --- | | E | Module d'Young | | \\nu | Coefficient de Poisson | | K=\\frac{E}{3(1-2\\nu )} | Module de ",
    "enTitle": "Mohr-Coulomb law",
    "enLead": "r7.01.28 Mohr-Coulomb law Summary: This document presents the method of solution of the Mohr-Coulomb law in Code Aster . 1 Notations 1.1 General data | {\\sigma} {1}\\ge {\\sigma} {2}\\ge {\\sigma} {3} | Principal stresses (in this order) | | --- | --- | | E | Young's modulus | | \\nu | Poisson's ratio | | K=\\frac{E}{3(1-2\\nu )} | Elastic bulk modulus | | G=\\frac{"
  },
  "r7.01.29": {
    "frTitle": "Loi de comportement ENDO_HETEROGENE",
    "frLead": "r7.01.29 Loi de comportement ENDO HETEROGENE Résumé: Cette documentation présente l’écriture théorique et l’intégration numérique de la loi de comportement ENDO HETEROGENE qui prend en compte l'effet de l'hétérogénéité de la roche sur sa probabilité de rupture. Ce modèle a été intégré comme une loi d'endommagement non local (à gradient de contrainte) basé su",
    "enTitle": "Constitutive law ENDO_HETEROGENE",
    "enLead": "r7.01.29 Constitutive law ENDO HETEROGENE Summary: This documentation presents the theoretical writing and the numerical integration of the constitutive law ENDO HETEROGENE which takes into account the effect of the heterogeneity of the rock on its failure probability. This model has been integrated as a non-local damage law (with stress gradient) based on a"
  },
  "r7.01.31": {
    "frTitle": "Loi de comportement de plaques en béton armé GLRC_DAMAGE",
    "frLead": "r7.01.31 Loi de comportement de plaques en béton armé GLRC DAMAGE Résumé : Cette documentation présente la formulation théorique et l’intégration numérique de la loi de comportement GLRC DAMAGE [bib1]. Elle est écrite de manière globale en efforts et moments résultants pour des modélisations en éléments finis de plaques. Cette loi intègre le comportement éla",
    "enTitle": "Constitutive law for reinforced-concrete plates GLRC_DAMAGE",
    "enLead": "r7.01.31 Constitutive law for reinforced-concrete plates GLRC DAMAGE Summary: This documentation presents the theoretical formulation and the numerical integration of the constitutive law GLRC DAMAGE [bib1]. It is written in a global manner in terms of resultant forces and moments for finite-element modellings of plates. This law incorporates the elastic and"
  },
  "r7.01.32": {
    "frTitle": "Loi de comportement de plaques en béton armé GLRC_DM",
    "frLead": "r7.01.32 Loi de comportement de plaques en béton armé GLRC DM Résumé : Cette documentation présente la formulation théorique et l’intégration numérique de la loi de comportement GLRC DM, utilisable avec la modélisation DKTG. Elle fait partie des modèles dits «globaux» utilisés pour des structures minces (poutres, plaques et coques). Les phénomènes non-linéai",
    "enTitle": "Constitutive law for reinforced-concrete plates GLRC_DM",
    "enLead": "r7.01.32 Constitutive law for reinforced-concrete plates GLRC DM Summary: This documentation presents the theoretical formulation and the numerical integration of the constitutive law GLRC DM, which can be used with the modelling DKTG. It belongs to the so-called “global” models used for thin structures (beams, plates and shells). The non-linear phenomena, s"
  },
  "r7.01.33": {
    "frTitle": "Couplage élasto-plasticité-endommagement",
    "frLead": "r7.01.33 Couplage élasto-plasticité-endommagement Résumé: Ce document présente une méthode de couplage d’un modèle élasto-plastique avec un modèle d’endommagement, laquelle est implantée dans le cadre du KIT DDI. La méthode utilise une approche de partitionnement du modèle en trois modules: élasto-plasticité, endommagement et coupleur. C’est particulièrement",
    "enTitle": "Elasto-plasticity–damage coupling",
    "enLead": "r7.01.33 Elasto-plasticity–damage coupling Summary: This document presents a method for coupling an elasto-plastic model with a damage model, which is implemented within the framework of KIT DDI. The method uses an approach of partitioning the model into three modules: elasto-plasticity, damage and coupler. It is particularly this modularity which represents"
  },
  "r7.01.34": {
    "frTitle": "Schémas volumes finis SUSHI pour la modélisation des écoulements insaturés miscibles",
    "frLead": "r7.01.34 Schémas volumes finis SUSHI pour la modélisation des écoulements insaturés miscibles Résumé: Cette note présente brièvement les schémas volumes finis développés dans Code Aster. Un bref rappel des équations de comportement concernées est effectué puis les schémas utilisés sont présentés. Table des matières 1 Introduction Nous présentons ici les sché",
    "enTitle": "SUSHI finite-volume schemes for the modelling of miscible unsaturated flows",
    "enLead": "r7.01.34 SUSHI finite-volume schemes for the modelling of miscible unsaturated flows Summary: This note briefly presents the finite-volume schemes developed in Code Aster. A brief reminder of the constitutive equations concerned is given, then the schemes used are presented. Contents 1 Introduction We present here the SUSHI finite-volume schemes developed fo"
  },
  "r7.01.35": {
    "frTitle": "Relations de comportement BETON_BURGER et BETON_AGEING pour le fluage du béton",
    "frLead": "r7.01.35 Relations de comportement BETON BURGER et BETON AGEING pour le fluage du béton Résumé: Ce document présente les modèles de comportement BETON BURGER et BETON AGEING, permettant de représenter le fluage du béton (propre et de dessiccation). Ces modèles s'inspirent fortement de la structure déjà mise en place dans le modèle BETON UMLV. Ces modèles son",
    "enTitle": "Constitutive relations BETON_BURGER and BETON_AGEING for the creep of concrete",
    "enLead": "r7.01.35 Constitutive relations BETON BURGER and BETON AGEING for the creep of concrete Summary: This document presents the constitutive models BETON BURGER and BETON AGEING, making it possible to represent the creep of concrete (basic and desiccation). These models draw heavily on the structure already set up in the model BETON UMLV. These models are implem"
  },
  "r7.01.37": {
    "frTitle": "Dissipative Homogenised Reinforced Concrete (DHRC) constitutive model devoted to reinforced concrete plates",
    "frLead": "r7.01.37 Dissipative Homogenised Reinforced Concrete (DHRC) constitutive model devoted to reinforced concrete plates Abstract : This documentation presents the theoretical formulation and numerical integration of the DHRCconstitutive law, acronym for \"dissipative homogenised reinforced concrete\" used with modelling DKTG plates. It is one of models called \"gl",
    "enTitle": "Dissipative Homogenised Reinforced Concrete (DHRC) constitutive model devoted to reinforced concrete plates",
    "enLead": "r7.01.37 Dissipative Homogenised Reinforced Concrete (DHRC) constitutive model devoted to reinforced concrete plates Abstract : This documentation presents the theoretical formulation and numerical integration of the DHRC constitutive law, acronym for \"dissipative homogenised reinforced concrete\" used with modelling DKTG plates. It is one of models called \"g"
  },
  "r7.01.38": {
    "frTitle": "Loi d'Iwan pour le comportement cyclique de matériaux granulaires",
    "frLead": "r7.01.38 Loi d'Iwan pour le comportement cyclique de matériaux granulaires Résumé: Le modèle de comportement d'Iwan [ 1 ], [ 2 ] est un modèle élastoplastique multimécanisme classique pour la description du comportement déviatorique cyclique de matériaux et particulièrement de géomatériaux. L’écrouissage est cinématique linéaire pour chaque mécanisme et la r",
    "enTitle": "Iwan law for the cyclic behaviour of granular materials",
    "enLead": "r7.01.38 Iwan law for the cyclic behaviour of granular materials Summary: The constitutive model of Iwan [ 1 ], [ 2 ] is a classical multi-mechanism elastoplastic model for the description of the cyclic deviatoric behaviour of materials and particularly of geomaterials. The hardening is linear kinematic for each mechanism and the flow rule considered is asso"
  },
  "r7.01.39": {
    "frTitle": "Loi de Rankine",
    "frLead": "r7.01.39 Loi de Rankine Résumé: Ce document présente la méthode de résolution de la loi de Rankine. 1 Introduction La loi de Rankine est formulée en termes de contraintes principales. Cette formulation suppose l'isotropie du matériau(voir [1] et [2] )En effet, cette condition est nécessaire pour garantir que la méthode de retour radial préserve les direction",
    "enTitle": "Rankine law",
    "enLead": "r7.01.39 Rankine law Summary: This document presents the method of solution of the Rankine law. 1 Introduction The Rankine law is formulated in terms of principal stresses. This formulation assumes the isotropy of the material (see [1] and [2]). Indeed, this condition is necessary in order to guarantee that the radial-return method preserves the principal di"
  },
  "r7.01.40": {
    "frTitle": "Modèle de comportement LKR",
    "frLead": "r7.01.40 Modèle de comportement LKR Résumé: Le modèle de comportement LKR est une évolution thermomécanique du modèle élasto(visco)plastique LETK [1] et [2]. Son développement et son intégration numérique sont le fruit des travaux de thèse de S. Raude [3]. Ce document présenteles grandes lignes conceptuelles du modèle et les principales équations qui régisse",
    "enTitle": "Constitutive model LKR",
    "enLead": "r7.01.40 Constitutive model LKR Summary: The constitutive model LKR is a thermomechanical extension of the elasto(visco)plastic model LETK [1] and [2]. Its development and its numerical integration are the outcome of the thesis work of S. Raude [3]. This document presents the main conceptual outlines of the model and the principal equations that govern its o"
  },
  "r7.01.41": {
    "frTitle": "Loi de comportement des milieux poreux : GonfElas",
    "frLead": "r7.01.41 Loi de comportement des milieux poreux : GonfElas Résumé: Le modèle de GonfElas est un modèle initialement proposé par D. Hoxan et F. Colin [ 1 ]pour décrire le comportement gonflant de certains types d'argile. Il s'agit d'un modèle élastique non linéaire dépendant de la succion (ce modèle doit donc être utilisé dans un environnement THHM ouHHM uniq",
    "enTitle": "Constitutive law of porous media: GonfElas",
    "enLead": "r7.01.41 Constitutive law of porous media: GonfElas Summary: The GonfElas model is a model initially proposed by D. Hoxan and F. Colin [ 1 ] to describe the swelling behaviour of certain types of clay. It is a non-linear elastic model depending on suction (this model must therefore be used in a THHM or HHM environment only). This model is inspired by the Bar"
  },
  "r7.01.42": {
    "frTitle": "Loi d’endommagement homogène ENDO_LOCA_EXP",
    "frLead": "r7.01.42 Loi d’endommagement homogène ENDO LOCA EXP Résumé: Ce document décrit le modèle de comportement élastique fragile ENDO LOCA EXP, disponible en modélisation locale uniquement (par opposition à une formulation non locale type GRAD VARI). Cela implique de restreindre l’usage du modèle à des situations dans lesquelles l’endommagement est diffus et non p",
    "enTitle": "Homogeneous damage law ENDO_LOCA_EXP",
    "enLead": "r7.01.42 Homogeneous damage law ENDO LOCA EXP Summary: This document describes the elastic brittle constitutive model ENDO LOCA EXP, available in local modelling only (as opposed to a non-local formulation of GRAD VARI type). This implies restricting the use of the model to situations in which the damage is diffuse and not localised. The corresponding non-lo"
  },
  "r7.01.43": {
    "frTitle": "Loi élastoplastique avec critère de Mohr-Coulomb lissé",
    "frLead": "r7.01.43 Loi élastoplastique avec critère de Mohr-Coulomb lissé Résumé: Ce document présente la méthode de résolution de la loi élastoplastique non associée avec surface de charge lissée de Mohr-Coulomb dédiée particulièrement aux géo-matériaux granulaires, accessible via l'environnement MFront . Le critère de Mohr-Coulomb d’origine est une pyramide: les arê",
    "enTitle": "Elastoplastic constitutive law with a smoothed Mohr-Coulomb criterion",
    "enLead": "r7.01.43 Elastoplastic constitutive law with a smoothed Mohr-Coulomb criterion Summary: This document presents the solution method of the non-associated elastoplastic constitutive law with a smoothed Mohr-Coulomb yield surface dedicated in particular to granular geomaterials, accessible via the MFront environment. The original Mohr-Coulomb criterion is a pyr"
  },
  "r7.01.44": {
    "frTitle": "Modèle de comportement CSSM",
    "frLead": "r7.01.44 Modèle de comportement CSSM Résumé : Ce document présente la formulation et l’intégration numérique du modèle de comportement élastoplastique CSSM (\"Critical State Soil Model\"). Le modèle CSSM est une combinaison de deux modèles visant à représenter respectivement le comportement monotone et cyclique drainé des sols. Le premier composant s'appuie su",
    "enTitle": "CSSM constitutive model",
    "enLead": "r7.01.44 CSSM constitutive model Summary: This document presents the formulation and the numerical integration of the elastoplastic constitutive model CSSM (\"Critical State Soil Model\"). The CSSM model is a combination of two models intended to represent respectively the monotonic and the drained cyclic behaviour of soils. The first component is based on the"
  },
  "r7.01.45": {
    "frTitle": "Loi de comportement RGI_BETON_BA",
    "frLead": "r7.01.45 Loi de comportement RGI BETON BA Résumé: Le modèle présenté dans ce document est un enrichissement d’un modèle déjà effectif dans Code Aster: RGI BETON (cf. R7.01.30). Il permet de considérer des armatures réparties au sein d’un massif de béton sans différencier leur maillage. Les comportements des deux matériaux sont évalués et homogénéisés afin d’",
    "enTitle": "Constitutive law RGI_BETON_BA",
    "enLead": "r7.01.45 Constitutive law RGI BETON BA Summary: The model presented in this document is an enrichment of a model already effective in Code Aster: RGI BETON (cf. R7.01.30). It makes it possible to consider reinforcements distributed within a concrete mass without differentiating their mesh. The behaviours of the two materials are evaluated and homogenised in "
  },
  "r7.01.46": {
    "frTitle": "Loi élasto-visco-plastique NLH_CSRM pour les géomatériaux",
    "frLead": "r7.01.46 Loi élasto-visco-plastique NLH CSRM pour les géomatériaux Résumé: Ce document présente les principales équations de la loi de comportement NLH CSRM (Non-Linear Hardening Critical State Rock Model) ainsi que son algorithme d’intégration numérique. 1 Introduction Le modèle NLH CSRM remplacera, à terme, les lois de comportement LKR et LETK . Ce travail",
    "enTitle": "Elasto-visco-plastic constitutive law NLH_CSRM for geomaterials",
    "enLead": "r7.01.46 Elasto-visco-plastic constitutive law NLH CSRM for geomaterials Summary: This document presents the principal equations of the constitutive law NLH CSRM (Non-Linear Hardening Critical State Rock Model) as well as its numerical integration algorithm. 1 Introduction The model NLH CSRM will, in due course, replace the constitutive laws LKR and LETK . T"
  },
  "r7.01.47": {
    "frTitle": "Loi d’endommagement ENDO_LOCA_TC",
    "frLead": "r7.01.47 Loi d’endommagement ENDO LOCA TC Résumé: Ce document décrit le modèle de comportement isotrope quasi-fragile ENDO LOCA TC. Il reprend les fondamentaux des modèles ENDO ISOT BETON R7.01.04 et ENDO LOCA EXP R7.01.42 et les enrichit en introduisant : - un seuil d’endommagement rationnalisé dans l’optique d’optimiser la robustesse numérique ; - un effet",
    "enTitle": "Damage law ENDO_LOCA_TC",
    "enLead": "r7.01.47 Damage law ENDO LOCA TC Summary: This document describes the isotropic quasi-brittle constitutive model ENDO LOCA TC. It takes up the fundamentals of the models ENDO ISOT BETON R7.01.04 and ENDO LOCA EXP R7.01.42 and enriches them by introducing: - a rationalised damage threshold with a view to optimising numerical robustness; - an effect of damage "
  },
  "r7.01.48": {
    "frTitle": "Modèle de comportement MCC",
    "frLead": "r7.01.48 Modèle de comportement MCC Résumé : Ce document présente la formulation et l’intégration numérique du modèle de comportement élastoplastique Cam-Clay modifié dans le cadre des Matériaux Standard Généralisés. Ce modèle est dédié à représenter de façon qualitative la phénoménologie des sols granulaires, tenant compte des effets de dilatance/contractan",
    "enTitle": "Constitutive model MCC",
    "enLead": "r7.01.48 Constitutive model MCC Summary: This document presents the formulation and the numerical integration of the modified Cam-Clay elastoplastic constitutive model within the framework of Generalised Standard Materials. This model is intended to represent qualitatively the phenomenology of granular soils, taking account of the effects of dilatancy/contra"
  },
  "r7.01.49": {
    "frTitle": "Élément fini d’interaction sol-pieu (3D_INTERF_POU)",
    "frLead": "r7.01.49 Élément fini d’interaction sol-pieu (3D INTERF POU) Résumé: Ce document présente un élément fini d’interaction entre matrice et renforcement. Le mot-clé correspondant pour la modélisation est 3D INTERF POU . 1 Introduction Ce modèle permet de décrire l'interaction entre un renforcement et sa matrice environnante. Leur cinématique y est représentée r",
    "enTitle": "Finite element for soil–pile interaction (3D_INTERF_POU)",
    "enLead": "r7.01.49 Finite element for soil–pile interaction (3D INTERF POU) Summary: This document presents a finite element for interaction between a matrix and a reinforcement. The corresponding keyword for the modelling is 3D INTERF POU . 1 Introduction This model describes the interaction between a reinforcement and its surrounding matrix. Their kinematics are rep"
  },
  "r7.01.50": {
    "frTitle": "Intégration de la relation de comportement élasto-plastique INTERF_POU_CINE pour les éléments 3D_INTERF_POU",
    "frLead": "r7.01.50 Intégration de la relation de comportement élasto-plastique INTERF POU CINE pour les éléments 3D INTERF POU Résumé : Ce document décrit l'intégration de la relation de comportement élasto-plastique INTERF POU CINE. Cette loi concerne uniquement les éléments 3D INTERF POU R7.01.49. La méthode d'intégration utilisée se base sur une formulation implici",
    "enTitle": "Integration of the elastoplastic constitutive relation INTERF_POU_CINE for the 3D_INTERF_POU elements",
    "enLead": "r7.01.50 Integration of the elastoplastic constitutive relation INTERF POU CINE for the 3D INTERF POU elements Summary: This document describes the integration of the elastoplastic constitutive relation INTERF POU CINE. This law concerns only the 3D INTERF POU elements R7.01.49. The integration method used is based on a direct implicit formulation. From the "
  },
  "r7.02.01": {
    "frTitle": "Taux de restitution de l'énergie en thermo-élasticité linéaire",
    "frLead": "r7.02.01 Taux de restitution de l'énergie en thermo-élasticité linéaire Résumé : On présente le calcul du taux de restitution de l'énergie G par la méthode \\theta en 2D ou en 3D pour un problème thermo-élastique linéaire. On explique comment le champ \\theta est introduit et comment le taux de restitution d'énergie est calculé avec l’opérateur CALC G. Des étu",
    "enTitle": "Energy release rate in linear thermoelasticity",
    "enLead": "r7.02.01 Energy release rate in linear thermoelasticity Summary: The calculation of the energy release rate G by the \\theta method in 2D or in 3D is presented for a linear thermoelastic problem. It is explained how the field \\theta is introduced and how the energy release rate is calculated with the operator CALC G. Mechanical-reliability studies for the eva"
  },
  "r7.02.03": {
    "frTitle": "Taux de restitution de l'énergie en thermo-élasticité non-linéaire",
    "frLead": "r7.02.03 Taux de restitution de l'énergie en thermo-élasticité non-linéaire Résumé: On présente le calcul du taux de restitution de l'énergie par la méthode thêta en 2D ou en 3D pour un problème thermo-élastique non-linéaire. La relation de comportement élastique non linéaire est décrite en R5.03.20. 1 Calcul du taux de restitution de l'énergie par la méthod",
    "enTitle": "Energy release rate in non-linear thermoelasticity",
    "enLead": "r7.02.03 Energy release rate in non-linear thermoelasticity Summary: The calculation of the energy release rate by the theta method in 2D or in 3D is presented for a non-linear thermoelastic problem. The non-linear elastic constitutive relation is described in R5.03.20. 1 Calculation of the energy release rate by the theta method in non-linear thermoelastici"
  },
  "r7.02.04": {
    "frTitle": "Modèle de Beremin",
    "frLead": "r7.02.04 Modèle de Beremin Résumé On rappelle tout d'abord les fondements des modèles d'approche locale de la rupture permettant de modéliser la rupture fragile. On décrit comment, avec le modèle de Beremin, la probabilité de rupture d'une structure est calculée à partir de la connaissance des champs mécaniques la sollicitant. En se plaçant dans le cas génér",
    "enTitle": "Beremin model",
    "enLead": "r7.02.04 Beremin model Summary The foundations of the local-approach models of fracture, which make it possible to model brittle fracture, are first recalled. It is described how, with the Beremin model, the fracture probability of a structure is computed from knowledge of the mechanical fields acting on it. Placing oneself in the general case of a non-monot"
  },
  "r7.02.05": {
    "frTitle": "Calcul des facteurs d'intensité de contraintes en thermo-élasticité linéaire",
    "frLead": "r7.02.05 Calcul des facteurs d'intensité de contraintes en thermo-élasticité linéaire Résumé: On présente la méthode de calcul des facteurs d'intensité de contraintes {K} {I} , {K} {\\mathrm{II}} et {K} {\\mathrm{III}} en thermoélasticité linéaire. La formulation considère le taux de restitution d'énergie comme une forme bilinéaire symétrique du champ de dépla",
    "enTitle": "Computation of the stress intensity factors in linear thermoelasticity",
    "enLead": "r7.02.05 Computation of the stress intensity factors in linear thermoelasticity Summary: One presents the method for computing the stress intensity factors {K} {I} , {K} {\\mathrm{II}} and {K} {\\mathrm{III}} in linear thermoelasticity. The formulation considers the energy release rate as a symmetric bilinear form of the displacement field u and uses the expli"
  },
  "r7.02.06": {
    "frTitle": "Modèles de Bordet et de Rice et Tracey",
    "frLead": "r7.02.06 Modèles de Bordet et de Rice et Tracey Résumé Les fondements des modèles d’approche locale de la rupture qui permettant de modéliser la rupture fragile (modèle de Bordet) et l’amorçage ductile (modèle de Rice et Tracey) sont rappelés. Dans le cas du modèle de rupture fragile (Bordet), on décrit comment est calculée la probabilité de rupture d’une st",
    "enTitle": "Bordet model and Rice and Tracey model",
    "enLead": "r7.02.06 Bordet model and Rice and Tracey model Summary The foundations of the local-approach models of fracture which make it possible to model brittle fracture (Bordet model) and ductile initiation (Rice and Tracey model) are recalled. In the case of the brittle-fracture model (Bordet), one describes how the fracture probability of a structure is computed "
  },
  "r7.02.08": {
    "frTitle": "Calcul des facteurs d’intensité des contraintes par extrapolation du champ de déplacements",
    "frLead": "r7.02.08 Calcul des facteurs d’intensité des contraintes par extrapolation du champ de déplacements Résumé : On décrit ici une méthode de calcul de \\mathit{K1} , \\mathit{K2} et \\mathit{K3} en 2D (plan et axisymétrique) et 3D par extrapolation des sauts de déplacements sur les lèvres de la fissure. Elle est utilisable à l’aide de la commande POST K1 K2 K3, au",
    "enTitle": "Computation of the stress intensity factors by extrapolation of the displacement field",
    "enLead": "r7.02.08 Computation of the stress intensity factors by extrapolation of the displacement field Summary: One describes here a method for computing \\mathit{K1} , \\mathit{K2} and \\mathit{K3} in 2D (plane and axisymmetric) and in 3D by extrapolation of the displacement jumps on the crack lips. It can be used by means of the command POST K1 K2 K3, both for a mes"
  },
  "r7.02.09": {
    "frTitle": "Identification du modèle de Weibull",
    "frLead": "r7.02.09 Identification du modèle de Weibull Résumé On aborde ici le problème de l’identification des paramètres du modèle de WEIBULL sur un échantillon d’essais représentatif du comportement à rupture d’un matériau fragile (typiquement, acier ferritique à basse température). La méthode de régression linéaire et la méthode du maximum de vraisemblance sont le",
    "enTitle": "Identification of the Weibull model",
    "enLead": "r7.02.09 Identification of the Weibull model Summary This document addresses the problem of identifying the parameters of the WEIBULL model on a sample of tests representative of the fracture behaviour of a brittle material (typically, a ferritic steel at low temperature). The linear-regression method and the maximum-likelihood method are the two methods ret"
  },
  "r7.02.10": {
    "frTitle": "Analyse simplifiée de nocivité de défaut par la méthode Kcp correction β",
    "frLead": "r7.02.10 Analyse simplifiée de nocivité de défaut par la méthode Kcp correction β Résumé : La méthode d'analyse présentée (méthode Kcp, correction β) est appliquée à l’analyse de nocivité d’un défaut situé sous le revêtement des cuves des réacteurs à eau pressurisée, mise en œuvre par la commande POST KCP. La méthode Kcp de référence est codifiée dans le RSE",
    "enTitle": "Simplified harmfulness analysis of a defect by the Kcp method, β correction",
    "enLead": "r7.02.10 Simplified harmfulness analysis of a defect by the Kcp method, β correction Summary: The analysis method presented (Kcp method, β correction) is applied to the harmfulness analysis of a defect located under the cladding of pressurised-water reactor vessels, implemented by the command POST KCP. The reference Kcp method is codified in the RSE-M and ha"
  },
  "r7.02.11": {
    "frTitle": "Lois de comportement cohésives : CZM_xxx_xxx et pilotage du chargement",
    "frLead": "r7.02.11 Lois de comportement cohésives : CZM xxx xxx et pilotage du chargement Résumé: Les lois de comportement cohésives : - CZM EXP REG (Cohesive Zone Model EXPonentielle REGularisée) - CZM LIN REG (Cohesive Zone Model LINéaire REGularisée) - CZM OUV MIX (Cohesive Zone Model OUVerture basée sur une formulation MIXte) - CZM EXP MIX (Cohesive Zone Model EXP",
    "enTitle": "Cohesive constitutive laws: CZM_xxx_xxx and load piloting",
    "enLead": "r7.02.11 Cohesive constitutive laws: CZM xxx xxx and load piloting Summary: The cohesive constitutive laws: - CZM EXP REG (Cohesive Zone Model EXPonential REGularised) - CZM LIN REG (Cohesive Zone Model LINear REGularised) - CZM OUV MIX (Cohesive Zone Model OPENing based on a MIXed formulation) - CZM EXP MIX (Cohesive Zone Model EXPonential based on a MIXed "
  },
  "r7.02.12": {
    "frTitle": "eXtended Finite Element Method : Généralités",
    "frLead": "r7.02.12 eXtended Finite Element Method : Généralités Résumé: Ce document présente la méthode X-FEM (eXtended Finite Element Method) qui permet principalement de considérer des fissures ne respectant pas le maillage pour traiter les problèmes de fissures 2D et 3D. La fissure est définie par la commande DEFI FISS XFEM u4.82.08 et est utilisable pour des calcu",
    "enTitle": "eXtended Finite Element Method: General remarks",
    "enLead": "r7.02.12 eXtended Finite Element Method: General remarks Summary: This document presents the X-FEM method (eXtended Finite Element Method), which makes it possible mainly to consider cracks which do not conform to the mesh in order to treat 2D and 3D crack problems. The crack is defined by the command DEFI FISS XFEM u4.82.08 and can be used for linear and no"
  },
  "r7.02.13": {
    "frTitle": "Algorithmes de propagation de fissures avec X-FEM",
    "frLead": "r7.02.13 Algorithmes de propagation de fissures avec X-FEM Résumé: Ce document présente les algorithmes de propagation de fissures dans le cadre de la méthode X-FEM R7.02.12. La fissure est alors représentée par des level-sets. La propagation de la fissure consiste donc à mettre à jour les level-sets compte-tenu de l'avancée du front de fissure. 1 Introducti",
    "enTitle": "Crack propagation algorithms with X-FEM",
    "enLead": "r7.02.13 Crack propagation algorithms with X-FEM Summary: This document presents the crack propagation algorithms within the framework of the X-FEM R7.02.12 method. The crack is then represented by level-sets. The propagation of the crack therefore consists of updating the level-sets taking into account the advancement of the crack front. 1 Introduction A si"
  },
  "r7.02.14": {
    "frTitle": "Éléments à discontinuité interne, comportement CZM_EXPet pilotage du chargement",
    "frLead": "r7.02.14 Éléments à discontinuité interne, comportement CZM EXPet pilotage du chargement Résumé : En s’appuyant sur une formulation énergétique exposée brièvement dans une première partie nous présentons un modèle numérique d’amorçage et de propagation de fissures bidimensionnels. Celui-ci s’appuie sur un élément fini avec une discontinuité de déplacement in",
    "enTitle": "Elements with an internal discontinuity, behaviour CZM_EXP and piloting of the loading",
    "enLead": "r7.02.14 Elements with an internal discontinuity, behaviour CZM EXP and piloting of the loading Summary: Relying on an energetic formulation set out briefly in a first part, we present a numerical model of initiation and propagation of two-dimensional cracks. It relies on a finite element with an internal displacement discontinuity, close to the models known"
  },
  "r7.02.15": {
    "frTitle": "Modélisation des fissures avec couplage hydro-mécanique en milieu poreux saturé",
    "frLead": "r7.02.15 Modélisation des fissures avec couplage hydro-mécanique en milieu poreux saturé Résumé: On propose un nouvel élément de joint permettant de modéliser en 2D les discontinuités avec couplage-hydromécanique. Cet élément est utilisé pour mailler une fissure ou un trajet de fissure dans un maillage d'éléments THM volumiques classiques dans le cas d'un ma",
    "enTitle": "Modelling of cracks with hydro-mechanical coupling in a saturated porous medium",
    "enLead": "r7.02.15 Modelling of cracks with hydro-mechanical coupling in a saturated porous medium Summary: A new joint element is proposed, making it possible to model in 2D discontinuities with hydromechanical coupling. This element is used to mesh a crack or a crack path in a mesh of classical volumetric THM elements in the case of a saturated porous material. It m"
  },
  "r7.02.16": {
    "frTitle": "Méthode Gp : une approche énergétique de la prédiction du clivage",
    "frLead": "r7.02.16 Méthode Gp : une approche énergétique de la prédiction du clivage Résumé Le paramètre {G} {p} permet de définir un critère d’amorçage valide dans le domaine du clivage (rupture fragile intra-granulaire en présence de plasticité). On rappelle tout d’abord les fondements de cette approche : cadre énergétique du comportement des structures, modélisatio",
    "enTitle": "Gp method: an energy approach to the prediction of cleavage",
    "enLead": "r7.02.16 Gp method: an energy approach to the prediction of cleavage Summary The parameter {G} {p} makes it possible to define an initiation criterion valid in the cleavage domain (intragranular brittle fracture in the presence of plasticity). The foundations of this approach are first recalled: energy framework of the behaviour of structures, modelling of t"
  },
  "r7.02.17": {
    "frTitle": "Détermination d'une fissure équivalente à partir d'un champ d'endommagement",
    "frLead": "r7.02.17 Détermination d'une fissure équivalente à partir d'un champ d'endommagement Résumé: La commande POST ENDO FISS effectue un post-traitement sur un résultat issu de la mécanique des milieux continus. Le but est de trouver la courbe qui représente la fissure à partir d'un champ représentatif et l'ouverture de fissure. Le champ peut être l'endommagement",
    "enTitle": "Determination of an equivalent crack from a damage field",
    "enLead": "r7.02.17 Determination of an equivalent crack from a damage field Summary: The command POST ENDO FISS carries out a post-processing on a result coming from continuum mechanics. The aim is to find the curve which represents the crack from a representative field, and the crack opening. The field may be the damage or another scalar field. On input, the command "
  },
  "r7.02.18": {
    "frTitle": "Élément Hydromécanique couplé avec XFEM",
    "frLead": "r7.02.18 Élément Hydromécanique couplé avec XFEM Résumé: Dans ce document nous présentons la formulation d'un nouveau type d'éléments finis. Il s'agit d'un élément hydromécanique traversé par une discontinuité (une interface ou une fissure) dont la conception repose sur l'utilisation de la méthode des éléments finis étendue dans la formulation des équations ",
    "enTitle": "Hydromechanical element coupled with XFEM",
    "enLead": "r7.02.18 Hydromechanical element coupled with XFEM Summary: In this document we present the formulation of a new type of finite element. It is a hydromechanical element crossed by a discontinuity (an interface or a crack) whose design rests on the use of the extended finite-element method in the formulation of the discretised equations of the poro-mechanical"
  },
  "r7.02.19": {
    "frTitle": "Eléments cohésifs avec X-FEM",
    "frLead": "r7.02.19 Eléments cohésifs avec X-FEM Résumé: Ce document présente les différents éléments cohésifs disponibles avec la méthode des éléments finis étendus (X-FEM). Trois types de lois cohésives sont disponibles. La loi introduite en premier est une loi régularisée, disponible pour les éléments linéaires, fonction du saut de déplacement uniquement. Suite aux ",
    "enTitle": "Cohesive elements with X-FEM",
    "enLead": "r7.02.19 Cohesive elements with X-FEM Summary: This document presents the various cohesive elements available with the extended finite element method (X-FEM). Three types of cohesive law are available. The law introduced first is a regularised law, available for the linear elements, and a function of the displacement jump alone. Following the limitations of "
  },
  "r7.02.20": {
    "frTitle": "Computation of T-stress by extrapolation of displacement field",
    "frLead": "r7.02.20 Computation of T-stress by extrapolation of displacement field Abstract: The computation of T-stress is implemented for linear, homogeneous and elastic-isotropic materials with plane crack mesh (FEM only). The accuracy of T-stress results obtained by extrapolation of the displacement fieldmethod is clearly improved if the meshing elements are quadra",
    "enTitle": "Computation of T-stress by extrapolation of displacement field",
    "enLead": "r7.02.20 Computation of T-stress by extrapolation of displacement field Summary: The computation of T-stress is implemented for linear, homogeneous and elastic-isotropic materials with plane crack mesh (FEM only). The accuracy of T-stress results obtained by extrapolation of the displacement field method is clearly improved if the meshing elements are quadra"
  },
  "r7.02.21": {
    "frTitle": "1 **r7.02.21** Loi de comportement cohésive",
    "frLead": "1 r7.02.21 Loi de comportement cohésive 2 r7.02.21 dépendante de la mixité du chargement : CZM TURON Résumé: La loi de comportement cohésive CZM TURON permet de modéliser l'endommagement d'une interface fissurante telle que l'ouverture de la fissure génère des forces de cohésion entre les lèvres de celle-ci. Elle relie les forces cohésives, homogènes à une c",
    "enTitle": "1 **r7.02.21** Cohesive constitutive law",
    "enLead": "1 r7.02.21 Cohesive constitutive law 2 r7.02.21 dependent on the loading mixity: CZM TURON Summary: The cohesive constitutive law CZM TURON makes it possible to model the damage of a cracking interface such that the opening of the crack generates cohesive forces between the faces of the latter. It relates the cohesive forces, homogeneous to a stress, to the "
  },
  "r7.02.22": {
    "frTitle": "Calculation of modified J-integral in presence of initial state",
    "frLead": "r7.02.22 Calculation of modified J-integral in presence of initial state Summary: This document aims at describing the theoretical formulations and implementation to compute the modified J -integral in 3D and 2D via the macro command POST JMOD. The theoretical background of J -integral is presented in Section 1 . It is first introduced by the continuous math",
    "enTitle": "Calculation of modified J-integral in presence of initial state",
    "enLead": "r7.02.22 Calculation of modified J-integral in presence of initial state Summary: This document aims at describing the theoretical formulations and implementation to compute the modified J -integral in 3D and 2D via the macro command POST JMOD. The theoretical background of J -integral is presented in Section 1 . It is first introduced by the continuous math"
  },
  "r7.02.23": {
    "frTitle": "Loi de comportement d’interface pour les barrages CZM_FROT_MIX",
    "frLead": "r7.02.23 Loi de comportement d’interface pour les barrages CZM FROT MIX Résumé: Ce document décrit la loi de comportement cohésive CZM FROT MIX, modélisant l’ouverture et le glissement d’une interface selon la loi de frottement de Coulomb. CZM FROT MIX vise à couvrir la même phénoménologie que JOINT MECA FROT pour la modélisation du comportement mécanique de",
    "enTitle": "Interface constitutive law for dams CZM_FROT_MIX",
    "enLead": "r7.02.23 Interface constitutive law for dams CZM FROT MIX Summary: This document describes the cohesive constitutive law CZM FROT MIX, modelling the opening and the slip of an interface according to Coulomb's friction law. CZM FROT MIX aims to cover the same phenomenology as JOINT MECA FROT for the modelling of the mechanical behaviour of dams, but relying o"
  },
  "r7.04.01": {
    "frTitle": "Estimation de la durée de vie en fatigue à grand nombre de cycles et en fatigue oligocyclique",
    "frLead": "r7.04.01 Estimation de la durée de vie en fatigue à grand nombre de cycles et en fatigue oligocyclique Résumé : La plupart des structures industrielles sont soumises à des efforts variables dans le temps qui, répétés un grand nombre de fois peuvent conduire à leur rupture par fatigue. On présente dans cette note les principales fonctionnalités des commandes ",
    "enTitle": "Estimation of the life in high-cycle fatigue and in low-cycle fatigue",
    "enLead": "r7.04.01 Estimation of the life in high-cycle fatigue and in low-cycle fatigue Summary: Most industrial structures are subjected to loadings which vary with time and which, repeated a large number of times, can lead to their failure by fatigue. This note presents the principal functionalities of the commands POST FATIGUE U4.83.01 and/or CALC FATIGUE U4.83.02"
  },
  "r7.04.02": {
    "frTitle": "Estimation de la fatigue sous sollicitation aléatoire",
    "frLead": "r7.04.02 Estimation de la fatigue sous sollicitation aléatoire Résumé : Cette note présente deux méthodes de comptage de cycles de contraintes qui conduisent à une expression analytique du dommage mécanique engendré par un chargement aléatoire : - méthode de comptage des pics de contraintes, - méthode de comptage des dépassements d’un niveau donné. La premiè",
    "enTitle": "Estimation of fatigue under random loading",
    "enLead": "r7.04.02 Estimation of fatigue under random loading Summary: This note presents two stress-cycle counting methods which lead to an analytical expression for the mechanical damage produced by a random loading: - stress-peak counting method, - method of counting exceedances of a given level. The first method uses the signal, its first derivative and its second"
  },
  "r7.04.03": {
    "frTitle": "Post-traitement selon le RCC-M",
    "frLead": "r7.04.03 Post-traitement selon le RCC-M Résumé : L’opérateur POST RCCM u4.83.11 permet de vérifier les critères de niveau 0 et certains critères de niveau A du chapitre B3200 du RCC‑M, pour des modélisations de milieux continus 2D ou 3D. Les critères de niveau 0 visent à prémunir le matériel contre les dommages de déformation excessive, d’instabilité plastiq",
    "enTitle": "Post-processing according to the RCC-M",
    "enLead": "r7.04.03 Post-processing according to the RCC-M Summary: The operator POST RCCM u4.83.11 makes it possible to check the level-0 criteria and certain level-A criteria of chapter B3200 of the RCC‑M, for modellings of 2D or 3D continuous media. The level-0 criteria aim to protect the equipment against the damage of excessive strain, of plastic instability, and "
  },
  "r7.04.04": {
    "frTitle": "Critères multi-axiaux d’amorçage en fatigue",
    "frLead": "r7.04.04 Critères multi-axiaux d’amorçage en fatigue Résumé: Dans cette note nous proposons une formulation des critères de MATAKE, de DANG VAN et de FATEMI-SOCIE et des critères en formule adaptée au cadre du cumul de dommage sous chargement multiaxial périodique et non périodique . Ces critères sont utilisables dans la commande CALC FATIGUE. La première pa",
    "enTitle": "Multiaxial fatigue-initiation criteria",
    "enLead": "r7.04.04 Multiaxial fatigue-initiation criteria Summary: In this note we propose a formulation of the MATAKE, DANG VAN and FATEMI-SOCIE criteria and of the formula criteria adapted to the framework of damage accumulation under multiaxial periodic and non-periodic loading. These criteria can be used in the command CALC FATIGUE. The first part of this document"
  },
  "r7.04.05": {
    "frTitle": "Calcul et Vérification de ferraillage",
    "frLead": "r7.04.05 Calcul et Vérification de ferraillage Résumé: On présente l'algorithme de calcul des densités de ferraillage des éléments en béton armé, tel qu'implanté au sein de la commande CALC FERRAILLAGE. On présentera pour ce fait, en un premier temps, l’algorithme de calcul des éléments linéiques 1D , pour ensuite examiner celui des éléments surfaciques 2D d",
    "enTitle": "Computation and verification of reinforcement",
    "enLead": "r7.04.05 Computation and verification of reinforcement Summary: The algorithm for computing the reinforcement densities of reinforced-concrete elements is presented, as implemented in the command CALC FERRAILLAGE. To this end, the computation algorithm for the line elements 1D will first be presented, and then that for the surface elements 2D of plate type w"
  },
  "r7.04.10": {
    "frTitle": "Opérateur de calcul de l'usure",
    "frLead": "r7.04.10 Opérateur de calcul de l'usure Résumé: Cette note présente trois lois d'usure qui permettent d'évaluer le volume usé à partir des quantités issues d'un calcul dynamique effectué avec l'opérateur DYNA VIBRA U4.54.03 et le mot-clé CHOC. - La loi d'Archard, - La loi KWU EPRI, - La loi EDF MZ. Les coefficients d'usure nécessaires pour ces calculs sont f",
    "enTitle": "Operator for the computation of wear",
    "enLead": "r7.04.10 Operator for the computation of wear Summary: This note presents three wear laws which make it possible to evaluate the worn volume from the quantities coming from a dynamic analysis carried out with the operator DYNA VIBRA U4.54.03 and the keyword CHOC. - Archard's law, - The KWU EPRI law, - The EDF MZ law. The wear coefficients required for these "
  },
  "r7.05.01": {
    "frTitle": "Critères de stabilité mécanique",
    "frLead": "r7.05.01 Critères de stabilité mécanique Résumé: Ce document présente les différents critères de stabilité mécanique disponibles dans Code Aster . On peut les classer suivant deux catégories: - Le critère de stabilité associé aux systèmes conservatifs, qui se présente comme la généralisation du critère d'Euler basé sur l’analyse de la matrice de raideur glob",
    "enTitle": "Mechanical stability criteria",
    "enLead": "r7.05.01 Mechanical stability criteria Summary: This document presents the various mechanical stability criteria available in Code Aster . They may be classified into two categories: - The stability criterion associated with conservative systems, which appears as the generalisation of the Euler criterion based on the analysis of the updated global stiffness "
  },
  "r7.05.02": {
    "frTitle": "Analyse de stabilité statique des pentes en remblai",
    "frLead": "r7.05.02 Analyse de stabilité statique des pentes en remblai Résumé: La commande CALC STAB PENTE permet d’analyser la stabilité statique des pentes en remblai modélisées en 2D dans les ouvrages hydrauliques tels que les barrages, les talus et les digues autour des réservoirs, en prenant compte la pression interstitielle dans le milieu poreux et éventuellemen",
    "enTitle": "Static stability analysis of embankment slopes",
    "enLead": "r7.05.02 Static stability analysis of embankment slopes Summary: The command CALC STAB PENTE makes it possible to analyse the static stability of embankment slopes modelled in 2D in hydraulic works such as dams, slopes and dykes around reservoirs, taking into account the pore pressure in the porous medium and possibly other types of mechanical loading. In ge"
  },
  "r7.07.01": {
    "frTitle": "Calcul de charge limite par la méthode de Norton-Hoff-Friaâ, comportement NORTON_HOFF",
    "frLead": "r7.07.01 Calcul de charge limite par la méthode de Norton-Hoff-Friaâ, comportement NORTON HOFF Résumé : L’analyse limite permet de déterminer les chargements admissibles d‘une structure, de géométrie fixe donnée, constituée d’un matériau ayant un critère de résistance. On considère le cas de chargements constitués de la somme d’une charge permanente et d’une",
    "enTitle": "Calculation of the limit load by the Norton-Hoff-Friaâ method, constitutive behaviour NORTON_HOFF",
    "enLead": "r7.07.01 Calculation of the limit load by the Norton-Hoff-Friaâ method, constitutive behaviour NORTON HOFF Summary: Limit analysis makes it possible to determine the admissible loadings of a structure, of given fixed geometry, constituted of a material having a strength criterion. One considers the case of loadings constituted of the sum of a permanent load "
  },
  "r7.10.01": {
    "frTitle": "Dépouillement des réponses aléatoires",
    "frLead": "r7.10.01 Dépouillement des réponses aléatoires Résumé : L’introduction d’une “approche stochastiquedu calcul sismique” pour résoudre un problème de mécanique vibratoire sous excitation aléatoire nécessite un post-traitement particulier. La commande POST DYNA ALEA U4.76.02 permet, à partir de la densité spectrale de puissance d’un interspectre-réponse, d’éval",
    "enTitle": "Processing of random responses",
    "enLead": "r7.10.01 Processing of random responses Summary: The introduction of a “stochastic approach to the seismic analysis” in order to solve a problem of vibratory mechanics under random excitation requires a particular post-processing. The command POST DYNA ALEA U4.76.02 makes it possible, from the power spectral density of a response cross-spectrum, to evaluate "
  },
  "r7.10.02": {
    "frTitle": "Post-traitement des calculs modaux avec choc",
    "frLead": "r7.10.02 Post-traitement des calculs modaux avec choc Résumé : Ce document présente le principe de post-traitement des calculs transitoires par recombinaison modale avec non-linéarités de choc disponibles dans l’opérateur POST DYNA MODA T. Deux options de post-traitement peuvent être employées, la première utilisable pour des problèmes de vibration-usure dét",
    "enTitle": "Post-processing of modal analyses with shock",
    "enLead": "r7.10.02 Post-processing of modal analyses with shock Summary: This document presents the principle of post-processing of transient analyses by modal recombination with shock non-linearities available in the operator POST DYNA MODA T. Two post-processing options may be used. The first, usable for vibration–wear problems, determines mean and RMS values of dis"
  },
  "r7.10.03": {
    "frTitle": "Post-traitement de calculs de lignes d'arbres : diagramme de Campbell",
    "frLead": "r7.10.03 Post-traitement de calculs de lignes d'arbres : diagramme de Campbell Résumé : Ce document présente les commandes CALC MODE ROTATION et IMPR DIAG CAMPBELL permettant le suivi des modes des machines tournantes en fonction de la vitesse de rotation ainsi que les zones d’instabilité de ces modes. On rappelle tout d'abord la définition de cet outil, pui",
    "enTitle": "Post-processing of shaft-line analyses: Campbell diagram",
    "enLead": "r7.10.03 Post-processing of shaft-line analyses: Campbell diagram Summary: This document presents the commands CALC MODE ROTATION and IMPR DIAG CAMPBELL, which make it possible to follow the modes of rotating machines as a function of the rotational speed, together with the instability zones of these modes. The definition of this tool is first recalled, then"
  },
  "r7.10.04": {
    "frTitle": "Post-traitement selon la méthode Roche",
    "frLead": "r7.10.04 Post-traitement selon la méthode Roche Résumé: L’opérateur POST ROCHE est un post-traitement de calculs purement linéaires élastiques, qui utilise la méthode Roche pour évaluer la réponse d'une ligne de tuyauteries sous comportement élasto-plastique. 1 Introduction La méthode Roche permet d’évaluer la réponse relative à un comportement élasto-plasti",
    "enTitle": "Post-processing according to the Roche method",
    "enLead": "r7.10.04 Post-processing according to the Roche method Summary: The operator POST ROCHE is a post-processing of purely linear elastic analyses, which uses the Roche method to evaluate the response of a piping line under an elastoplastic constitutive behaviour. 1 Introduction The Roche method makes it possible to evaluate the response relating to an elastopla"
  },
  "r7.20.01": {
    "frTitle": "Projection d'un champ sur un maillage",
    "frLead": "r7.20.01 Projection d'un champ sur un maillage Résumé: La commande PROJ CHAMP permet de \"projeter\" des champs (connus sur un maillage \\mathit{ma1} ) sur un autre maillage \\mathit{ma2} . Dans ce document, on décrit les différentes méthodes de projection accessibles dans cette commande. Le paragraphe [§ 6 ] donne quelques éléments de validation de ces méthodes",
    "enTitle": "Projection of a field onto a mesh",
    "enLead": "r7.20.01 Projection of a field onto a mesh Summary: The command PROJ CHAMP makes it possible to \"project\" fields (known on a mesh \\mathit{ma1} ) onto another mesh \\mathit{ma2} . This document describes the various projection methods accessible in this command. Paragraph [§ 6 ] gives a few elements of validation of these methods. 1 General points on the comma"
  },
  "r7.20.02": {
    "frTitle": "Extrapolation de mesures sur un modèle numérique en dynamique",
    "frLead": "r7.20.02 Extrapolation de mesures sur un modèle numérique en dynamique Résumé: Une démarche d’extrapolation de résultats de mesures expérimentales en dynamique (déplacements, vitesses, accélérations, déformations, contraintes) sur un modèle numérique est présentée. Basée sur une représentation de la structure sur une base de projection préalablement choisie,",
    "enTitle": "Extrapolation of measurements onto a numerical model in dynamics",
    "enLead": "r7.20.02 Extrapolation of measurements onto a numerical model in dynamics Summary: A procedure for extrapolating results of experimental measurements in dynamics (displacements, velocities, accelerations, strains, stresses) onto a numerical model is presented. Based on a representation of the structure on a previously chosen projection basis, it consists in "
  },
  "u0.00.01": {
    "frTitle": "Guide de lecture de la documentation d'Utilisation",
    "frLead": "Guide de lecture de la documentation d'Utilisation Résumé. Le présent document a pour ambition de proposer une aide à un premier accès au contenu de la documentation d'utilisation. 1 Documentation de Code Aster : organisation et accès 1.1 Un découpage logique en Manuels : l'ARDUV La documentation technique de Code Aster comporte: - cinq manuels, - un ensembl",
    "enTitle": "Reading guide to the User documentation",
    "enLead": "Reading guide to the User documentation Summary. This document aims to offer help for a first access to the content of the User documentation. 1 Documentation of Code Aster: organisation and access 1.1 A logical breakdown into Manuals: the ARDUV The technical documentation of Code Aster comprises: - five manuals, - a set of other documentary items which comp"
  },
  "u1.02.00": {
    "frTitle": "Introduction à code_aster",
    "frLead": "u1.02.00 Introduction à code aster Avertissement : Dans ce document on décrit la philosophie et les domaines d'application de code aster, sans développer en détail les fonctionnalités disponibles. Ce document est une première prise de contact avec code aster et a été donc écrit avec un souci de concision. Il n’a pas pour vocation de répertorier toutes les mo",
    "enTitle": "Introduction to code_aster",
    "enLead": "Introduction to code aster Warning. In this document the philosophy and the fields of application of code aster are described, without developing in detail the functionalities available. This document is a first contact with code aster and has therefore been written with a concern for concision. It is not intended to list all the modellings or types of analy"
  },
  "u1.03.00": {
    "frTitle": "Les grands principes de fonctionnement de Code_Aster",
    "frLead": "u1.03.00 Les grands principes de fonctionnement de Code Aster Résumé : On présente ici de façon sommaire les principes de fonctionnement de Code Aster et les principales règles d'utilisation. Ce document reste un descriptif général et le lecteur se reportera utilement aux autres documents, pour tous les détails d'utilisation. 1 Principes généraux CodeAster p",
    "enTitle": "The main operating principles of Code_Aster",
    "enLead": "The main operating principles of Code Aster Summary. The operating principles of Code Aster and the main rules of use are presented here in outline. This document remains a general description and the reader will usefully refer to the other documents for all the details of use. 1 General principles Code Aster makes it possible to carry out structural analyse"
  },
  "u1.03.01": {
    "frTitle": "Superviseur et langage de commande",
    "frLead": "u1.03.01 Superviseur et langage de commande Résumé: Ce document décrit le rôle et le fonctionnement: - du superviseur qui assure le pilotage d’une exécution de Code Aster ; - et du langage de commande qui assure la communication entre l’utilisateur et le code. 1 Introduction Le rôle du superviseur est d'assurer le commandement du déroulement d'opérations en ",
    "enTitle": "Supervisor and command language",
    "enLead": "Supervisor and command language Summary. This document describes the role and the operation: - of the supervisor, which ensures the control of an execution of Code Aster ; - and of the command language, which ensures communication between the user and the code. 1 Introduction The role of the supervisor is to ensure the command of the progress of operations d"
  },
  "u1.03.02": {
    "frTitle": "Méthodes Python d'accès aux objets Aster",
    "frLead": "u1.03.02 Méthodes Python d'accès aux objets Aster Résumé: Ce document présente les méthodes Python permettant d’accéder aux informations contenues dans les structures de données Aster. Cette information peut être traitée par une programmation python, ou servir pour l’enchaînement conditionnel des commandes suivantes. 1 Introduction et précautions d’emploi Da",
    "enTitle": "Python methods for accessing Aster objects",
    "enLead": "Python methods for accessing Aster objects Summary. This document presents the Python methods for accessing the information contained in Aster data structures. This information can be processed by Python programming, or used for the conditional chaining of the subsequent commands. 1 Introduction and precautions for use In Code Aster , most commands are progr"
  },
  "u1.03.03": {
    "frTitle": "Indicateurs de performance d'un calcul (temps/mémoire)",
    "frLead": "u1.03.03 Indicateurs de performance d'un calcul (temps/mémoire) 1 But Lors d'une simulation avec Code Aster , des affichages par défaut tracent dans les fichiers message et résultats (.mess/.resu) certaines caractéristiques dimensionnantes du calcul (consommations RAM, temps CPU, système et utilisateur...). Cette documentation détaille les affichages de ces ",
    "enTitle": "Performance indicators of a run (time/memory)",
    "enLead": "Performance indicators of a run (time/memory) 1 Purpose During a simulation with Code Aster , default displays record , in the message and result files (.mess/.resu), certain sizing characteristics of the run (RAM consumption, CPU time, system time and user time...). This document details the displays of these performance indicators. Some advice is also form"
  },
  "u1.04.00": {
    "frTitle": "Méthodes de lancement de calcul code_aster",
    "frLead": "u1.04.00 Méthodes de lancement de calcul code aster Résumé : Ce document présente les différentes façons de lancer une étude sur code aster, telles que AsterStudy, astk, run aster, run ctest et run sbatch. Toutes les méthodes sont décrites en termes de logique de fonctionnement, leurs avantages et leurs inconvénients. Plus précisément, nous décrivons leurs i",
    "enTitle": "Methods for launching a code_aster run",
    "enLead": "Methods for launching a code aster run Summary. This document presents the different ways of launching a study on code aster, such as AsterStudy, astk, run aster, run ctest and run sbatch. All the methods are described in terms of their operating logic, their advantages and their disadvantages. More precisely, we describe their graphical interfaces or their "
  },
  "u1.05.00": {
    "frTitle": "Un exemple simple d’utilisation",
    "frLead": "u1.05.00 Un exemple simple d’utilisation Résumé: Ce document décrit un exemple très simple d’utilisation de Code Ast er. Les fichiers de mise en données sont ceux du cas test FORMA00, disponible dans la base de cas tests de Code Aster: | Script Salomé pour la génération de la CAO et du maillage | forma00.datg | | --- | --- | | Fichier de commandes de Code As",
    "enTitle": "A simple example of use",
    "enLead": "A simple example of use Summary. This document describes a very simple example of use of Code Aster . The data-setup files are those of the test case FORMA00, available in the test-case base of Code Aster: | Salomé script for generating the CAD and the mesh | forma00.datg | | --- | --- | | Code Aster command file | forma00.comm | On the basis of this simple "
  },
  "u2.00.01": {
    "frTitle": "Guide de lecture des documentations méthodologiques U2",
    "frLead": "u2.00.01 Guide de lecture des documentations méthodologiques U2 Résumé Ce document est un inventaire des documentations méthodologiques U2. 1 Généralités sur les éléments finis U2.01.02 Notice d'utilisation des conditions aux limites traitées par élimination U2.01.04 Documentation des grandeurs de Code Aster U2.01.05 Contraintes, efforts, forces et déformati",
    "enTitle": "Reading guide to the U2 methodological documents",
    "enLead": "u2.00.01 Reading guide to the U2 methodological documents Summary. This document is an inventory of the U2 methodological documents. 1 General points on finite elements U2.01.02 User's guide to boundary conditions treated by elimination U2.01.04 Documentation of the quantities of Code Aster U2.01.05 Stresses, internal forces, forces and strains U2.01.09 Anal"
  },
  "u2.01.02": {
    "frTitle": "Notice d'utilisation des conditions aux limites traitées par élimination",
    "frLead": "u2.01.02 Notice d'utilisation des conditions aux limites traitées par élimination Résumé Le traitement des conditions aux limites du type Dirichlet par élimination (AFFE CHAR CINE) n'offre pas la même généralité que par dualisation (AFFE CHAR MECA par exemple). Ce traitement est à utiliser lorsque l'on recherche à améliorer les temps d'éxécution d'un calcul ",
    "enTitle": "User's guide to boundary conditions treated by elimination",
    "enLead": "u2.01.02 User's guide to boundary conditions treated by elimination Summary. The treatment of Dirichlet boundary conditions by elimination (AFFE CHAR CINE) does not offer the same generality as treatment by dualisation (AFFE CHAR MECA, for example). This treatment is to be used when one seeks to improve the execution time of a run, or when one wishes to work"
  },
  "u2.01.04": {
    "frTitle": "Documentation des grandeurs de Code_Aster",
    "frLead": "u2.01.04 Documentation des grandeurs de Code Aster Résumé : Description des grandeurs associées aux champs pouvant être créés par les commandes de Code Aster . Le tableau suivant a trois colonnes. Le nom des grandeurs apparaît dans la colonne de gauche (classé par ordre alphabétique). Chaque grandeur est séparée de la suivante par une ligne blanche. Sur la p",
    "enTitle": "Documentation of the quantities of Code_Aster",
    "enLead": "u2.01.04 Documentation of the quantities of Code Aster Summary. Description of the quantities associated with the fields which can be created by the commands of Code Aster . The following table has three columns. The name of the quantities appears in the left-hand column (sorted in alphabetical order). Each quantity is separated from the next by a blank line"
  },
  "u2.01.05": {
    "frTitle": "Contraintes, efforts, forces et déformations",
    "frLead": "u2.01.05 Contraintes, efforts, forces et déformations Résumé: Ce document définit les grandeurs caractérisant les contraintes, les forces et les déformations à l’intérieur d’une structure dans un calcul par éléments finis en déplacement et comment cela se traduit. L’expression de ces grandeurs est donnée pour les éléments finis de mécanique: milieu continu 2",
    "enTitle": "Stresses, internal forces, forces and strains",
    "enLead": "u2.01.05 Stresses, internal forces, forces and strains Summary. This document defines the quantities which characterise the stresses, the forces and the strains inside a structure in a finite-element analysis in displacement, and how this is expressed. The expression of these quantities is given for the finite elements of mechanics: 2D or 3D continuum, shell"
  },
  "u2.01.09": {
    "frTitle": "Définition d'un champ de contraintes et d'un champ de variables internes initiaux",
    "frLead": "u2.01.09 Définition d'un champ de contraintes et d'un champ de variables internes initiaux Résumé : On explique comment fabriquer deux des champs constituant l'état initial d'un calcul non-linéaire (STAT NON LINE) : le champ de contraintes et le champ de variables internes. - les composantes du champ de contraintes ont une forme \"analytique\" (par exemple: ét",
    "enTitle": "Definition of an initial stress field and of an initial field of internal variables",
    "enLead": "u2.01.09 Definition of an initial stress field and of an initial field of internal variables Summary. It is explained how to build two of the fields which make up the initial state of a non-linear analysis (STAT NON LINE): the stress field and the field of internal variables. - the components of the stress field have an \"analytical\" form (for example: state "
  },
  "u2.01.10": {
    "frTitle": "Notice d'utilisation sur le choix des éléments finis",
    "frLead": "u2.01.10 Notice d'utilisation sur le choix des éléments finis Résumé: Ce document a pour but de donner quelques informations sur le choix des éléments finis et leur modélisation associée dans le cas d’études thermiques, thermo-mécaniques ou mécaniques non-linéaires. Il s’agit en quelque sorte, de proposer à l’utilisateur un choix a priori, permettant d’évite",
    "enTitle": "User's guide on the choice of finite elements",
    "enLead": "u2.01.10 User's guide on the choice of finite elements Summary. This document aims to give some information on the choice of finite elements and of their associated modelling in the case of thermal, thermomechanical or non-linear mechanical studies. It amounts, in a sense, to proposing to the user an a priori choice, making it possible to avoid certain commo"
  },
  "u2.01.11": {
    "frTitle": "Notice d'utilisation de la manipulation de champs et de tables",
    "frLead": "u2.01.11 Notice d'utilisation de la manipulation de champs et de tables Résumé: L'objectif de ce document est de fournir à l'utilisateur quelques recettes liées à la manipulation des champs ou des tables. Dans ce document sont décrits les cas de manipulation des champs suivants: - Poursuivre un calcul STAT NON LINE après avoir retiré ou ajouté des éléments d",
    "enTitle": "User's guide for the handling of fields and tables",
    "enLead": "u2.01.11 User's guide for the handling of fields and tables Summary: The aim of this document is to provide the user with a few recipes related to the handling of fields or tables. This document describes the following cases of field handling: - Continuing a STAT NON LINE analysis after having removed or added elements in the model (e.g.: excavation of a tun"
  },
  "u2.02.01": {
    "frTitle": "Notice d’utilisation des éléments plaques, coques, grilles et membranes",
    "frLead": "u2.02.01 Notice d’utilisation des éléments plaques, coques, grilles et membranes Résumé : Ce document est une notice d’utilisation pour les modélisations plaques, coques, grilles et membranes. Les éléments de coques et de plaques interviennent dans la modélisation numérique des structures minces à surface moyenne, plane (modélisation plaque) ou courbe (modél",
    "enTitle": "User's guide for the plate, shell, grid and membrane elements",
    "enLead": "u2.02.01 User's guide for the plate, shell, grid and membrane elements Summary. This document is a user's guide for the plate, shell, grid and membrane modellings. Shell and plate elements are used in the numerical modelling of thin structures with a middle surface that is plane (plate modelling) or curved (shell modelling). Grid modellings are used for the "
  },
  "u2.02.02": {
    "frTitle": "Notice d’utilisation des éléments TUYAU_*",
    "frLead": "u2.02.02 Notice d’utilisation des éléments TUYAU Résumé: Ce document est une notice d’utilisation pour les modélisations TUYAU 3M et TUYAU 6M. Les éléments finis TUYAU 3M et TUYAU 6M correspondent à des éléments linéiques de tuyauterie droite ou courbe. La cinématique des éléments TUYAU combine à la fois une cinématique de poutre, qui décrit le mouvement d'e",
    "enTitle": "User's guide for the TUYAU_* elements",
    "enLead": "u2.02.02 User's guide for the TUYAU elements Summary: This document is a user's guide for the TUYAU 3M and TUYAU 6M modellings. The TUYAU 3M and TUYAU 6M finite elements correspond to line elements for straight or curved piping. The kinematics of the TUYAU elements combines both a beam kinematics, which describes the overall motion of the piping line, and a "
  },
  "u2.02.03": {
    "frTitle": "Notice d’utilisation des éléments discrets",
    "frLead": "u2.02.03 Notice d’utilisation des éléments discrets Résumé: Ce document est une notice d’utilisation pour les modélisations des éléments discrets. Les éléments discrets interviennent dans la modélisation numérique de raideurs, d’amortissements ou masses localisés sur un nœud (maille POI1 ) ou entre deux nœuds (maille SEG2 ). Leurs degrés de liberté sont des ",
    "enTitle": "User's guide for the discrete elements",
    "enLead": "u2.02.03 User's guide for the discrete elements Summary: This document is a user's guide for the modellings of the discrete elements. The discrete elements are used in the numerical modelling of stiffnesses, dampings or masses localised on a node ( POI1 mesh cell) or between two nodes ( SEG2 mesh cell). Their degrees of freedom are generalised displacements."
  },
  "u2.03.04": {
    "frTitle": "Notice d’utilisation pour des calculs thermo-métallo-mécaniques sur des aciers",
    "frLead": "u2.03.04 Notice d’utilisation pour des calculs thermo-métallo-mécaniques sur des aciers Résumé L’objectif de cette note est de donner les informations nécessaires pour qu’un utilisateur puisse réaliser facilement un calcul thermo-métallo-mécanique dans Code Aster . Ce type de calcul concerne les aciers qui subissent au cours d’un chauffage ou d’un refroidiss",
    "enTitle": "User's guide for thermo-metallurgical-mechanical analyses on steels",
    "enLead": "u2.03.04 User's guide for thermo-metallurgical-mechanical analyses on steels Summary The objective of this note is to give the information necessary for a user to be able to carry out easily a thermo-metallurgical-mechanical analysis in Code Aster . This type of analysis concerns steels which undergo structural transformations in the course of a heating or o"
  },
  "u2.03.05": {
    "frTitle": "Notice d’utilisation pour la simulation numérique du soudage",
    "frLead": "u2.03.05 Notice d’utilisation pour la simulation numérique du soudage Résumé L’objectif de ce document est de donner les informations nécessaires pour qu’un utilisateur puisse réaliser des calculs de soudage multipasses avec Code Aster . Il constitue un guide méthodologique sur les outils disponibles et les bonnes pratiques à mettre en place pour conduire un",
    "enTitle": "User's guide for the numerical simulation of welding",
    "enLead": "u2.03.05 User's guide for the numerical simulation of welding Summary. The aim of this document is to give the information needed for a user to carry out multipass welding analyses with Code Aster . It constitutes a methodological guide to the tools available and to the good practice to put in place in order to conduct a quality study in the numerical simula"
  },
  "u2.03.06": {
    "frTitle": "Réalisation d'une étude génie civil avec câbles de précontrainte",
    "frLead": "u2.03.06 Réalisation d'une étude génie civil avec câbles de précontrainte Résumé: Ce document a pour but de donner des conseils pour réaliser des études de béton armé avec des câbles de précontrainte en utilisant les fonctionnalités dédiées (DEFI CABLE BP/CALC PRECONT). Il donne des informations sur les précautions de maillage, sur les modalités d’applicatio",
    "enTitle": "Carrying out a civil-engineering study with prestressing cables",
    "enLead": "u2.03.06 Carrying out a civil-engineering study with prestressing cables Summary. The aim of this document is to give advice for carrying out studies of reinforced concrete with prestressing cables, using the dedicated features (DEFI CABLE BP/CALC PRECONT). It gives information on the precautions for meshing, on the ways of applying the prestress, and on the"
  },
  "u2.03.07": {
    "frTitle": "Panorama des outils disponibles pour réaliser des calculs de structure de Génie Civil en béton",
    "frLead": "u2.03.07 Panorama des outils disponibles pour réaliser des calculs de structure de Génie Civil en béton Résumé: L'objectif de ce document est de fournir une vision d'ensemble des possibilités de modélisation qui s'offrent à l'utilisateur en fonction du type d'analyse qu'il souhaite mener en Génie Civil. Différents choix sont toujours possibles et le but de c",
    "enTitle": "Overview of the tools available for carrying out structural analyses of civil-engineering concrete",
    "enLead": "u2.03.07 Overview of the tools available for carrying out structural analyses of civil-engineering concrete Summary. The aim of this document is to provide an overview of the modelling possibilities open to the user according to the type of analysis he or she wishes to carry out in civil engineering. Several choices are always possible, and the purpose of th"
  },
  "u2.03.08": {
    "frTitle": "Réalisation d'une étude de génie civil avec des câbles de précontrainte en dynamique rapide via la macro commande CALC_EUROPLEXUS",
    "frLead": "u2.03.08 Réalisation d'une étude de génie civil avec des câbles de précontrainte en dynamique rapide via la macro commande CALC EUROPLEXUS Résumé: Ce document a pour but de donner des conseils pour réaliser des études de génie civil en dynamique rapide avec des câbles de précontrainte et le béton modélisé en coque (élément Q4GG). Les calculs en dynamique rap",
    "enTitle": "Carrying out a civil-engineering study with prestressing cables in fast dynamics via the macro-command CALC_EUROPLEXUS",
    "enLead": "u2.03.08 Carrying out a civil-engineering study with prestressing cables in fast dynamics via the macro-command CALC EUROPLEXUS Summary. The aim of this document is to give advice for carrying out civil-engineering studies in fast dynamics with prestressing cables and the concrete modelled as a shell (Q4GG element). The fast-dynamics analyses are carried out"
  },
  "u2.03.09": {
    "frTitle": "Panorama des modèles de comportement de sols et roches, de joints",
    "frLead": "u2.03.09 Panorama des modèles de comportement de sols et roches, de joints Résumé: L'objectif de ce document est de fournir une vision d'ensemble des possibilités de modélisation qui s'offrent à l'utilisateur en modélisation du comportement des sols et des roches, auxquelles on a aussi ajouté le comportement des joints pour décrire les interfaces entre milie",
    "enTitle": "Overview of the constitutive models for soils and rocks, and for joints",
    "enLead": "u2.03.09 Overview of the constitutive models for soils and rocks, and for joints Summary. The aim of this document is to provide an overall view of the modelling possibilities open to the user for the constitutive behaviour of soils and rocks, to which the constitutive behaviour of joints has also been added in order to describe the interfaces between geomat"
  },
  "u2.03.10": {
    "frTitle": "Notice de modélisation des jonctions entre éléments structurels de Génie Civil en béton armé",
    "frLead": "u2.03.10 Notice de modélisation des jonctions entre éléments structurels de Génie Civil en béton armé Résumé: Ce document a pour but de donner des conseils pour réaliser des études de structures en béton armé comportant des voiles, des dalles et radiers en utilisant les fonctionnalités dédiées (en particulier les liaisons cinématiques, un modèle de comportem",
    "enTitle": "User's guide to the modelling of junctions between reinforced-concrete civil-engineering structural elements",
    "enLead": "u2.03.10 User's guide to the modelling of junctions between reinforced-concrete civil-engineering structural elements Summary. The purpose of this document is to give advice for carrying out studies of reinforced-concrete structures comprising walls, slabs and rafts, using the dedicated features (in particular the kinematic relations, a non-linear constituti"
  },
  "u2.03.11": {
    "frTitle": "Préconisations pour la modélisation des “SCS”, Steel Concrete Structures",
    "frLead": "u2.03.11 Préconisations pour la modélisation des “SCS”, Steel Concrete Structures Résumé : L'objectif de ce document est de fournir des préconisations pour la modélisation des “Steel Concrete Structures”. Ce document aborde la modélisation des voiles, des planchers ainsi que des jonctions entre les différents éléments de structure. Différentes approches sont",
    "enTitle": "Recommendations for the modelling of “SCS”, Steel Concrete Structures",
    "enLead": "u2.03.11 Recommendations for the modelling of “SCS”, Steel Concrete Structures Summary. The aim of this document is to provide recommendations for the modelling of “Steel Concrete Structures”. This document addresses the modelling of walls, of floors and of the junctions between the various structural elements. Different approaches are possible and the aim o"
  },
  "u2.04.01": {
    "frTitle": "Conseils d'utilisation de STAT_NON_LINE",
    "frLead": "u2.04.01 Conseils d'utilisation de STAT NON LINE Résumé L’objectif de cette note est de donner quelques conseils à un utilisateur souhaitant réaliser des calculs non linéaires avec Code Aster en utilisant l'opérateur STAT NON LINE[U4.51.03]. Des conseils généraux sont d'abord donnés. Puis on précise les solutions à mettre en œuvre pour les principaux types d",
    "enTitle": "Advice on the use of STAT_NON_LINE",
    "enLead": "u2.04.01 Advice on the use of STAT NON LINE Summary. The aim of this note is to give some advice to a user wishing to carry out non-linear analyses with Code Aster using the operator STAT NON LINE [U4.51.03]. General advice is given first. The remedies to be implemented for the main types of problem encountered are then specified. The problems in question ar"
  },
  "u2.04.02": {
    "frTitle": "Conseils de mise en œuvre de calculs non-linéaires",
    "frLead": "u2.04.02 Conseils de mise en œuvre de calculs non-linéaires Résumé L’objectif de cet document est de donner des conseils à un utilisateur souhaitant réaliser des calculs non-linéaires avec Code Aster . L'utilisateur de calculs linéaires y trouvera aussi des informations et des conseils utiles. Les aspects suivant seront abordés: - maillage et modélisation, -",
    "enTitle": "Advice on the implementation of non-linear analyses",
    "enLead": "u2.04.02 Advice on the implementation of non-linear analyses Summary. The aim of this document is to give advice to a user wishing to carry out non-linear analyses with Code Aster . The user of linear analyses will also find useful information and advice in it. The following aspects will be addressed: - mesh and modelling, - loadings and boundary conditions,"
  },
  "u2.04.03": {
    "frTitle": "Choix du comportement élasto-(visco)-plastique",
    "frLead": "u2.04.03 Choix du comportement élasto-(visco)-plastique Résumé L’objectif de cette note est de donner des conseils à un utilisateur souhaitant réaliser des calculs avec des comportements non-linéaires de type élasto-plastique ou élasto-visco-plastique pour choisir une loi adaptée aux modélisations envisagées. Les matériaux concernés sont principalement les m",
    "enTitle": "Choice of the elasto-(visco)-plastic constitutive behaviour",
    "enLead": "u2.04.03 Choice of the elasto-(visco)-plastic constitutive behaviour Summary. The aim of this note is to give advice to a user wishing to carry out analyses with non-linear constitutive behaviours of elastoplastic or elastoviscoplastic type, in order to choose a law suited to the modellings envisaged. The materials concerned are mainly metals. For the other "
  },
  "u2.04.04": {
    "frTitle": "Notice d'utilisation du contact dans code_aster",
    "frLead": "u2.04.04 Notice d'utilisation du contact dans code aster Résumé: Ce document décrit la démarche à suivre pour la prise en compte de conditions de contact-frottement dans les études non linéaires. On s'intéresse à du contact surfacique entre solides déformable ou entre un solide déformable et un solide rigide. Dans un premier temps, on rappelle ce que signifi",
    "enTitle": "User's guide to contact in code_aster",
    "enLead": "u2.04.04 User's guide to contact in code aster Summary. This document describes the procedure to be followed in order to take frictional-contact conditions into account in non-linear studies. The concern is surface contact between deformable solids, or between a deformable solid and a rigid solid. First, what it means to take frictional contact into account "
  },
  "u2.04.05": {
    "frTitle": "Notice d'utilisation du modèle THM",
    "frLead": "u2.04.05 Notice d'utilisation du modèle THM Résumé: Les modélisations THM traitent exclusivement de l’évolution des comportements Thermo-Hydro-Mécaniques des milieux poreux saturés, ou non, par un ou deux fluides. La description numérique et physique des ces modélisations dans Code Aster est détaillée dans R7.01.10 et R7.01.11. On détaille dans cette documen",
    "enTitle": "User's guide for the THM model",
    "enLead": "u2.04.05 User's guide for the THM model Summary. THM modellings deal exclusively with the evolution of the thermo-hydro-mechanical constitutive behaviours of porous media, whether saturated or not by one or two fluids. The numerical and physical description of these modellings in Code Aster is detailed in R7.01.10 and R7.01.11. This documentation sets out th"
  },
  "u2.04.06": {
    "frTitle": "Comment creuser un tunnel : méthodologie d’excavation",
    "frLead": "u2.04.06 Comment creuser un tunnel : méthodologie d’excavation Résumé: Cette note propose une méthodologie pour simuler le creusement d’une galerie souterraine avec code aster . La méthode de base est une méthode couramment utilisée dans ce genre d’études: la méthode «convergence – confinement». Après un rappel sur le principe de la méthode, les principales ",
    "enTitle": "How to excavate a tunnel: excavation methodology",
    "enLead": "u2.04.06 How to excavate a tunnel: excavation methodology Summary. This note proposes a methodology for simulating the excavation of an underground gallery with code aster . The basic method is one commonly used in this kind of study: the \"convergence–confinement\" method. After a reminder of the principle of the method, the main stages of the code aster comm"
  },
  "u2.04.07": {
    "frTitle": "1 **u2.04.07** Utilisation de méthodes de résolution transitoires pour les problèmes quasi-statiques fortement non linéaires",
    "frLead": "1 u2.04.07 Utilisation de méthodes de résolution transitoires pour les problèmes quasi-statiques fortement non linéaires Résumé : Ce document présente l’utilisation de méthodes de résolution transitoires (implicites ou explicites) pour la simulation numérique de problèmes quasi-statiques présentant de fortes non-linéarités matériaux. On ne cherche qu’à obten",
    "enTitle": "1 **u2.04.07** Use of transient solution methods for strongly non-linear quasi-static problems",
    "enLead": "1 u2.04.07 Use of transient solution methods for strongly non-linear quasi-static problems Summary. This document presents the use of transient solution methods (implicit or explicit) for the numerical simulation of quasi-static problems presenting strong material non-linearities. The only aim is to obtain solutions in which the dynamic effects are negligibl"
  },
  "u2.05.00": {
    "frTitle": "Guide méthodologique sur les approches en mécanique de la rupture",
    "frLead": "u2.05.00 Guide méthodologique sur les approches en mécanique de la rupture Résumé : Cette note constitue un guide méthodologique pour l’utilisation de la mécanique de la rupture avec Code Aster . Elle apporte une vue globale sur les approches en mécanique de la rupture existantes ou en projet dans Code Aster et constitue un aiguillage vers les notes et docum",
    "enTitle": "Methodological guide on the approaches in fracture mechanics",
    "enLead": "u2.05.00 Methodological guide on the approaches in fracture mechanics Summary: This note constitutes a methodological guide for the use of fracture mechanics with Code Aster . It provides an overall view of the approaches in fracture mechanics existing or planned in Code Aster and constitutes a signpost towards the dedicated notes and documentations. 1 Gloss"
  },
  "u2.05.01": {
    "frTitle": "Notice d'utilisation des opérateurs de mécanique de la rupture pour l'approche classique (élasticité non-linéaire)",
    "frLead": "u2.05.01 Notice d'utilisation des opérateurs de mécanique de la rupture pour l'approche classique (élasticité non-linéaire) Résumé: Ce document présente les opérateurs de mécanique de la rupture disponibles dans Code Aster dans le cadre de l'approche classique. L'approche classique est limitée à l'élasticité non-linéaire. Des conseils d'utilisation sont donn",
    "enTitle": "User's guide to the fracture-mechanics operators for the classical approach (non-linear elasticity)",
    "enLead": "u2.05.01 User's guide to the fracture-mechanics operators for the classical approach (non-linear elasticity) Summary: This document presents the fracture-mechanics operators available in Code Aster within the framework of the classical approach. The classical approach is limited to non-linear elasticity. Advice on use is given. It is advisable to have read t"
  },
  "u2.05.02": {
    "frTitle": "Notice d’utilisation de la méthode X-FEM",
    "frLead": "u2.05.02 Notice d’utilisation de la méthode X-FEM Résumé L’objectif de cette note est de donner les informations nécessaires pour qu’un utilisateur puisse réaliser des calculs avec Code Aster en utilisant la méthode des éléments finis étendue (X-FEM pour eXtended Finite Element Method) [1]. La première partie introduit les objectifs de la méthode des élément",
    "enTitle": "User's guide for the X-FEM method",
    "enLead": "u2.05.02 User's guide for the X-FEM method Summary The aim of this note is to give the information necessary for a user to be able to carry out analyses with Code Aster using the extended finite element method (X-FEM, for eXtended Finite Element Method) [1]. The first part introduces the aims of the extended finite element method and recalls the basic princi"
  },
  "u2.05.04": {
    "frTitle": "Notice d’utilisation pour le calcul de charge limite",
    "frLead": "u2.05.04 Notice d’utilisation pour le calcul de charge limite Résumé L’objectif de cette note est de donner les informations nécessaires pour qu’un utilisateur puisse réaliser des calculs de charge limite avec code aster . La première partie rappelle les grandes lignes de la méthode et ses propriétés. La deuxième partie présente les différentes étapes nécess",
    "enTitle": "User's guide for the limit-load calculation",
    "enLead": "u2.05.04 User's guide for the limit-load calculation Summary The aim of this note is to give the information required for a user to be able to carry out limit-load calculations with code aster . The first part recalls the main lines of the method and its properties. The second part presents the various steps required for the implementation in code aster . Fi"
  },
  "u2.05.05": {
    "frTitle": "Calcul de structure en fatigue vibratoire",
    "frLead": "u2.05.05 Calcul de structure en fatigue vibratoire 1 But Ce document a pour but de décrire la mise en œuvre d'un calcul de structure en fatigue vibratoire. Il s'agit plus précisément d'estimer l'amplitude maximale de vibration admissible d'une structure soumise à un chargement statique (connu) et à un chargement dynamique (inconnu). 2 Contexte industriel Ce ",
    "enTitle": "Structural analysis in vibratory fatigue",
    "enLead": "u2.05.05 Structural analysis in vibratory fatigue 1 Purpose The purpose of this document is to describe the implementation of a structural analysis in vibratory fatigue. More precisely, it consists in estimating the maximum admissible vibration amplitude of a structure subjected to a static loading (known) and to a dynamic loading (unknown). 2 Industrial con"
  },
  "u2.05.06": {
    "frTitle": "Réalisation de calculs d'endommagement en quasi-statique (rupture fragile)",
    "frLead": "u2.05.06 Réalisation de calculs d'endommagement en quasi-statique (rupture fragile) Résumé: Ce document a pour but de conseiller l'utilisateur de Code Aster pour la réalisation de simulation à l'aide de modèles d'endommagement et notamment des techniques à mettre en œuvre pour avoir une solution de bonne qualité et de manière robuste. 1 Introduction et mise ",
    "enTitle": "Carrying out quasi-static damage analyses (brittle fracture)",
    "enLead": "u2.05.06 Carrying out quasi-static damage analyses (brittle fracture) Summary: This document aims to advise the user of Code Aster on the carrying out of simulations using damage models and, in particular, on the techniques to be implemented in order to obtain a solution of good quality and in a robust manner. 1 Introduction and warning To study the degradat"
  },
  "u2.05.07": {
    "frTitle": "Notice d’utilisation des modèles de zones cohésives",
    "frLead": "u2.05.07 Notice d’utilisation des modèles de zones cohésives Résumé Cette documentation est destinée à fournir les informations nécessaires à un utilisateur souhaitant modéliser l'amorçage et la propagation de fissure avec les modèles cohésifs (CZM). Dans une première partie on rappelle les grandes lignes de ce type de modèles, leurs domaines d'application, ",
    "enTitle": "User's guide for the cohesive-zone models",
    "enLead": "u2.05.07 User's guide for the cohesive-zone models Summary: This document is intended to supply the information necessary to a user wishing to model the initiation and the propagation of a crack with the cohesive models (CZM). In a first part one recalls the main lines of this type of model, their fields of application, advantages and limitations. The second"
  },
  "u2.05.08": {
    "frTitle": "Réalisation d'un calcul de prédiction de rupture par clivage",
    "frLead": "u2.05.08 Réalisation d'un calcul de prédiction de rupture par clivage Résumé Cette documentation est destinée à fournir les informations nécessaires à un utilisateur souhaitant simuler une rupture par clivage. La définition du clivage est initialement rappelée. On présente ensuite tour à tour les modèles disponibles pour prédire ce type de rupture et des con",
    "enTitle": "Carrying out an analysis for the prediction of cleavage fracture",
    "enLead": "u2.05.08 Carrying out an analysis for the prediction of cleavage fracture Summary: This document is intended to supply the information necessary to a user wishing to simulate a fracture by cleavage. The definition of cleavage is first recalled. One then presents in turn the models available for predicting this type of fracture, and methodological and impleme"
  },
  "u2.06.01": {
    "frTitle": "Mise en œuvre d'un calcul de modes propres d'une structure",
    "frLead": "u2.06.01 Mise en œuvre d'un calcul de modes propres d'une structure Résumé Ce document présente une vue globale des différentes approches disponibles dans Code Aster pour calculer les modes propres de vibration d'une structure mécanique. Ces approches sont décrites en partant de la plus simple à mettre en œuvre, pour des études standard, et en allant progres",
    "enTitle": "Carrying out an eigenmode analysis of a structure",
    "enLead": "u2.06.01 Carrying out an eigenmode analysis of a structure Summary This document presents an overall view of the various approaches available in Code Aster for computing the vibration eigenmodes of a mechanical structure. These approaches are described starting from the simplest to implement, for standard studies, and going progressively towards more elabora"
  },
  "u2.06.03": {
    "frTitle": "Notice de modélisation de l'amortissement mécanique",
    "frLead": "u2.06.03 Notice de modélisation de l'amortissement mécanique Les analyses dynamiques linéaires et non-linéaires, pour l'étude de la réponse vibratoire avec une excitation en force ou en mouvement imposé ou pour l'analyse modale complexe, nécessitent d'ajouter des caractéristiques d'amortissement mécanique aux caractéristiques de rigidité et de masse. On disp",
    "enTitle": "User's guide for the modelling of mechanical damping",
    "enLead": "u2.06.03 User's guide for the modelling of mechanical damping Linear and non-linear dynamic analyses, for the study of the vibratory response with a force excitation or an imposed motion, or for the complex modal analysis, require mechanical damping characteristics to be added to the stiffness and mass characteristics. Several classical modellings are availa"
  },
  "u2.06.04": {
    "frTitle": "Notice pour la construction de modèles réduits en dynamique",
    "frLead": "u2.06.04 Notice pour la construction de modèles réduits en dynamique Résumé: Les modèles utilisés pour les calculs de réponses en dynamique linéaire sont de plus en plus gros. Pour améliorer significativement les temps de calculs, il est possible de construire un sous-espace de dimension réduite qui permet de projeter le problème complet, et ainsi accélérer ",
    "enTitle": "User's guide for the construction of reduced models in dynamics",
    "enLead": "u2.06.04 User's guide for the construction of reduced models in dynamics Summary: The models used for response analyses in linear dynamics are increasingly large. In order to improve analysis times significantly, it is possible to build a subspace of reduced dimension which makes it possible to project the complete problem, and thus to speed up the various r"
  },
  "u2.06.10": {
    "frTitle": "Réalisation d'une étude de génie civil sous chargement sismique",
    "frLead": "u2.06.10 Réalisation d'une étude de génie civil sous chargement sismique Résumé: Ce document a pour but de donner des conseils pour réaliser des études de génie civil sous chargement sismique. On y présente l’utilisation des outils de modélisation des structures en béton armé sous séisme disponibles dans Code Aster . On consultera au préalable u2.03.07. On r",
    "enTitle": "Carrying out a civil-engineering study under seismic loading",
    "enLead": "u2.06.10 Carrying out a civil-engineering study under seismic loading Summary: The aim of this document is to give advice for carrying out civil-engineering studies under seismic loading. It presents the use of the tools available in Code Aster for modelling reinforced-concrete structures under earthquake loading. One should first consult u2.03.07. The metho"
  },
  "u2.06.11": {
    "frTitle": "Analyse de la tenue sismique des grands réservoirs métalliques",
    "frLead": "u2.06.11 Analyse de la tenue sismique des grands réservoirs métalliques Résumé: Ce document a pour objectif la description des différentes étapes à mettre en œuvre dans Code Aster pour réaliser la simulation numérique de la tenue au séisme de grands réservoirs métalliques. Ces structures métalliques minces peuvent alors présenter deux modes de ruine privilég",
    "enTitle": "Analysis of the seismic resistance of large metal tanks",
    "enLead": "u2.06.11 Analysis of the seismic resistance of large metal tanks Summary: The aim of this document is to describe the different steps to be implemented in Code Aster in order to carry out the numerical simulation of the seismic resistance of large metal tanks. These thin metal structures can then present two preferred failure modes: failure of the anchorages"
  },
  "u2.06.13": {
    "frTitle": "Conseils généraux d’utilisation de l’opérateur DYNA_NON_LINE",
    "frLead": "u2.06.13 Conseils généraux d’utilisation de l’opérateur DYNA NON LINE Résumé : Ce document présente l’utilisation de méthodes de résolution transitoires (implicites ou explicites) pour la simulation numérique de problèmes dynamiques non linéaires sur base physique. L’opérateur généraliste de référence pour ce type de calculs se nomme DYNA NON LINE et son usa",
    "enTitle": "General advice on the use of the operator DYNA_NON_LINE",
    "enLead": "u2.06.13 General advice on the use of the operator DYNA NON LINE Summary: This document presents the use of transient solution methods (implicit or explicit) for the numerical simulation of non-linear dynamic problems on the physical basis. The general-purpose reference operator for this type of analysis is called DYNA NON LINE and its correct use will be ma"
  },
  "u2.06.14": {
    "frTitle": "Conseils de mise en œuvre des calculs en Interaction Fluide-Structure",
    "frLead": "u2.06.14 Conseils de mise en œuvre des calculs en Interaction Fluide-Structure Résumé Ce document présente une vue globale des différentes approches disponibles dans Code Aster pour modéliser les effets de l'interaction fluide-structure dans les analyses vibratoires des structures. Il récapitule également nombre de conseils pratiques et de précautions à pren",
    "enTitle": "Advice on carrying out Fluid-Structure Interaction analyses",
    "enLead": "u2.06.14 Advice on carrying out Fluid-Structure Interaction analyses Summary This document presents an overall view of the different approaches available in Code Aster for modelling the effects of fluid-structure interaction in the vibratory analyses of structures. It also recapitulates a number of practical pieces of advice and of precautions to be taken wh"
  },
  "u2.06.31": {
    "frTitle": "Notice de modélisation de la gyroscopie",
    "frLead": "u2.06.31 Notice de modélisation de la gyroscopie Résumé: Les analyses modales ou dynamiques linéaires et non-linéaires des lignes d'arbres nécessitent d'intégrer notion d'amortissement gyroscopiques. L'analyse d'un transitoire de vitesse de rotation (montée en vitesse ou ralentissement) nécessite, quant à elle, d'intégrer la notion de raideur gyroscopique. L",
    "enTitle": "User's guide for the modelling of gyroscopy",
    "enLead": "u2.06.31 User's guide for the modelling of gyroscopy Summary: Modal analyses, or linear and non-linear dynamic analyses, of shaft lines require the notion of gyroscopic damping to be included. The analysis of a rotational-speed transient (run-up or slowdown) requires, for its part, the notion of gyroscopic stiffness to be included. Dedicated rotating-machine"
  },
  "u2.06.32": {
    "frTitle": "Notice de mise en œuvre de calculs de rotors",
    "frLead": "u2.06.32 Notice de mise en œuvre de calculs de rotors Résumé: Ce document constitue une aide à l'utilisateur pour la réalisation des études de machines tournantes dans Code Aster . Il doit lui permettre de mener à bien un calcul de machines tournantes (analyses statiques, modales, harmoniques et transitoires). La liste des cas-tests disponibles de machines t",
    "enTitle": "User's guide for carrying out rotor analyses",
    "enLead": "u2.06.32 User's guide for carrying out rotor analyses Summary: This document is an aid to the user for carrying out rotating-machinery studies in Code Aster . It should enable the user to carry through a rotating-machinery analysis (static, modal, harmonic and transient analyses). The list of the rotating-machinery test cases available in Code Aster is given"
  },
  "u2.06.41": {
    "frTitle": "Validation de modèle dynamique par corrélation calcul-essais",
    "frLead": "u2.06.41 Validation de modèle dynamique par corrélation calcul-essais Résumé Cette documentation est destinée à décrire les principaux outils d'aide à la validation de modèles en dynamique des structures par corrélation calcul-essais. On décrit notamment: - comment importer des données issues de mesures, - la validation par critère de MAC, - la validation pa",
    "enTitle": "Validation of a dynamic model by analysis–test correlation",
    "enLead": "u2.06.41 Validation of a dynamic model by analysis–test correlation Summary This documentation is intended to describe the principal tools for assisting the validation of models in structural dynamics by analysis–test correlation. In particular, one describes: - how to import data coming from measurements, - validation by the MAC criterion, - validation by c"
  },
  "u2.06.42": {
    "frTitle": "Mise en œuvre de procédure de recalage modal",
    "frLead": "u2.06.42 Mise en œuvre de procédure de recalage modal Résumé: Dans ce document, on présente des techniques de recalage modal. Le recalage modal consiste à exploiter les modes propres de la structure afin d'obtenir un modèle numérique qui reflète au mieux le comportement dynamique de la structure étudiée. 1 Introduction Le recalage modal consiste à ajuster le",
    "enTitle": "Implementation of a modal updating procedure",
    "enLead": "u2.06.42 Implementation of a modal updating procedure Summary: In this document, modal updating techniques are presented. Modal updating consists in exploiting the eigenmodes of the structure in order to obtain a numerical model which reflects as well as possible the dynamic behaviour of the structure under study. 1 Introduction Modal updating consists in ad"
  },
  "u2.07.01": {
    "frTitle": "Notice d’utilisation de la modélisation FOURIER",
    "frLead": "u2.07.01 Notice d’utilisation de la modélisation FOURIER 1 But L’analyse de Fourier est destinée à calculer la réponse de structures à géométrie axisymétrique sollicitées par des chargements non axisymétriques décomposés en séries de Fourier. Limitations: - la décomposition du chargement en séries de Fourier est supposée avoir été faite par l’utilisateur, - ",
    "enTitle": "User's guide to the FOURIER modelling",
    "enLead": "u2.07.01 User's guide to the FOURIER modelling 1 Purpose Fourier analysis is intended to compute the response of structures of axisymmetric geometry subjected to non-axisymmetric loadings decomposed into Fourier series. Limitations: - the decomposition of the loading into Fourier series is assumed to have been carried out by the user, - the Aster implementat"
  },
  "u2.07.02": {
    "frTitle": "Notice d'utilisation de la sous-structuration statique",
    "frLead": "u2.07.02 Notice d'utilisation de la sous-structuration statique Résumé Ce document est une introduction à l'utilisation de la sous-structuration statique. En s'appuyant sur un exemple détaillé, le cas test SSLP100B : - on lira les paragraphes 1, 2, 3, 4 ; - on se reportera à la description des commandes spécifiques : - MACR ELEM STAT u4.44.01 - DEFI MAILLAGE",
    "enTitle": "User's guide to static substructuring",
    "enLead": "u2.07.02 User's guide to static substructuring Summary This document is an introduction to the use of static substructuring. Relying on a detailed example, the test case SSLP100B: - one will read paragraphs 1, 2, 3, 4; - one will refer to the description of the specific commands: - MACR ELEM STAT u4.44.01 - DEFI MAILLAGE u4.12.04 and, - DEPL INTERNE u4.65.01"
  },
  "u2.07.03": {
    "frTitle": "Réalisation d’une étude de modification structurale à partir de données mesurées",
    "frLead": "u2.07.03 Réalisation d’une étude de modification structurale à partir de données mesurées Résumé: Ce document a pour but la description de la mise en œuvre d’une étude de modification structurale à partir des données mesurées. La méthode utilisée est basée sur la technique de sous-structuration. La première sous-structure (structure initiale) est obtenue à p",
    "enTitle": "Carrying out a structural-modification study from measured data",
    "enLead": "u2.07.03 Carrying out a structural-modification study from measured data Summary: The purpose of this document is the description of the setting up of a structural-modification study from measured data. The method used is based on the substructuring technique. The first substructure (initial structure) is obtained from the eigenmodes identified experimentall"
  },
  "u2.07.04": {
    "frTitle": "Condensation dynamique de modèle par sous-structuration statique",
    "frLead": "u2.07.04 Condensation dynamique de modèle par sous-structuration statique Résumé: Ce document décrit un mode d’utilisation de Code Aster pour permettre le calcul transitoire par l’opérateur de dynamique transitoire non linéaire DYNA NON LINE sur un modèle réduit strictement à des sous-domaines non linéaires, les sous-domaines linéaires étant pris en compte u",
    "enTitle": "Dynamic condensation of a model by static substructuring",
    "enLead": "u2.07.04 Dynamic condensation of a model by static substructuring Summary: This document describes a way of using Code Aster to allow the transient analysis by the non-linear transient dynamics operator DYNA NON LINE on a model reduced strictly to non-linear subdomains, the linear subdomains being taken into account once and for all by dynamic condensation b"
  },
  "u2.07.05": {
    "frTitle": "Mise en œuvre de calcul par sous-structuration dynamique",
    "frLead": "u2.07.05 Mise en œuvre de calcul par sous-structuration dynamique Résumé: Ce document a pour but d'aider et de donner des conseils aux utilisateurs pour la réalisation d'une étude faisant intervenir la technique de sous-structuration dynamique. On présente d'abord la démarche générale pour la mise en œuvre de la technique. On décrit par la suite les enchaîne",
    "enTitle": "Setting up an analysis by dynamic substructuring",
    "enLead": "u2.07.05 Setting up an analysis by dynamic substructuring Summary: The purpose of this document is to help users and to give them advice for carrying out a study involving the dynamic substructuring technique. One first presents the general approach for setting up the technique. One then describes the sequences of operations required in order to obtain usabl"
  },
  "u2.07.07": {
    "frTitle": "Mise en œuvre de calcul par sous-structuration dynamique en présence d’IFS",
    "frLead": "u2.07.07 Mise en œuvre de calcul par sous-structuration dynamique en présence d’IFS Résumé: Ce document a pour but d'aider et de donner des conseils aux utilisateurs pour la réalisation d'une étude faisant intervenir la technique de sous-structuration dynamique en présence d’interaction fluide-structure (IFS). Cette dernière doit être modélisée en formulatio",
    "enTitle": "Setting up an analysis by dynamic substructuring in the presence of IFS",
    "enLead": "u2.07.07 Setting up an analysis by dynamic substructuring in the presence of IFS Summary: The purpose of this document is to help users and to give them advice for carrying out a study involving the dynamic substructuring technique in the presence of fluid–structure interaction (IFS). The latter must be modelled in a displacement–pressure formulation (called"
  },
  "u2.08.01": {
    "frTitle": "Stratégies d’adaptation de maillages avec HOMARD",
    "frLead": "u2.08.01 Stratégies d’adaptation de maillages avec HOMARD Résumé: Ce document a pour objectif de décrire tous les outils de Code Aster liés à l’adaptation de maillage. Il constitue un guide méthodologique sur les bonnes pratiques à mettre en place pour conduire une étude de qualité en terme de maillage. Des exemples d’utilisation viennent illustrer les possi",
    "enTitle": "Mesh adaptation strategies with HOMARD",
    "enLead": "u2.08.01 Mesh adaptation strategies with HOMARD Summary: This document aims to describe all the tools of Code Aster related to mesh adaptation. It constitutes a methodological guide to the good practices to be put in place in order to conduct a study of quality as regards the mesh. Examples of use illustrate the possibilities and the implementation of remesh"
  },
  "u2.08.03": {
    "frTitle": "Notice d'utilisation des solveurs linéaires",
    "frLead": "u2.08.03 Notice d'utilisation des solveurs linéaires 1 But Les solveurs linéaires sont en fait omniprésents dans le déroulement des opérateurs de Code Aster car ils sont souvent enfouis au plus profond d'autres algorithmes numériques: schéma non linéaire, intégration en temps, analyse modale etc. Ils en consomment souvent la majeure partie du temps CPU et de",
    "enTitle": "User's guide for the linear solvers",
    "enLead": "u2.08.03 User's guide for the linear solvers 1 Purpose The linear solvers are in fact omnipresent in the course of the operators of Code Aster , because they are often buried in the deepest part of other numerical algorithms: non-linear scheme, integration in time, modal analysis, etc. They often consume the major part of the CPU time and of the memory. The "
  },
  "u2.08.04": {
    "frTitle": "Notice de calcul de charges critiques et de modes de flambement d'Euler et de calcul de flambage",
    "frLead": "u2.08.04 Notice de calcul de charges critiques et de modes de flambement d'Euler et de calcul de flambage Résumé : L’objectif de cette documentation est de présenter un guide méthodologique pour le calcul de charges critiques et de modes de flambement d'Euler d'une part et l'analyse de flambage non linéaire (instabilités) d’une structure d'autre part. On y a",
    "enTitle": "User's guide to the analysis of critical loads and of Euler buckling modes, and to buckling analysis",
    "enLead": "u2.08.04 User's guide to the analysis of critical loads and of Euler buckling modes, and to buckling analysis Summary: The aim of this documentation is to present a methodological guide for the analysis of critical loads and of Euler buckling modes on the one hand, and for the non-linear buckling analysis (instabilities) of a structure on the other. It deals"
  },
  "u2.08.05": {
    "frTitle": "Propagation des incertitudes et calcul de courbes de fragilité",
    "frLead": "u2.08.05 Propagation des incertitudes et calcul de courbes de fragilité Résumé : Ce document donne les éléments pour la mise en œuvre de simulations numériques de Monte Carlo via la distribution de calculs avec Code Aster. Les cinq principaux ingrédients sont : - la création du plan d'expérience: tirage des variables aléatoires des \\mathit{Ns} cas d'études ;",
    "enTitle": "Propagation of uncertainties and computation of fragility curves",
    "enLead": "u2.08.05 Propagation of uncertainties and computation of fragility curves Summary: This document gives the elements for the implementation of numerical Monte Carlo simulations via the distribution of analyses with Code Aster. The five main ingredients are: - the creation of the design of experiments: drawing of the random variables of the \\mathit{Ns} study c"
  },
  "u2.08.06": {
    "frTitle": "Notice d'utilisation du parallélisme",
    "frLead": "u2.08.06 Notice d'utilisation du parallélisme Résumé: Toute simulation Code Aster peut bénéficier des gains de performance que procure le parallélisme (HPC 1 en anglais). Ces gains peuvent être de deux ordres: sur le temps de calcul et sur l'espace RAM/disque requis (par cœur alloué). Bien compris et bien utilisé, l’impact du HPC sur les études peut être maj",
    "enTitle": "User's guide to parallelism",
    "enLead": "u2.08.06 User's guide to parallelism Summary: Any Code Aster simulation can benefit from the performance gains that parallelism provides (HPC 1 in English). These gains can be of two kinds: on the analysis time and on the RAM/disk space required (per core allocated). Well understood and well used, the impact of HPC on studies can be major in terms of: - Feas"
  },
  "u2.08.07": {
    "frTitle": "Calculs paramétriques - Distribution de calculs",
    "frLead": "u2.08.07 Calculs paramétriques - Distribution de calculs Résumé: Certaines études conduisent à effectuer un nombre plus ou moins important d'analyses (plusieurs milliers parfois), correspondant aux variations des paramètres. L'utilisation de calculs standards, consistant à modifier ou créer le fichier de commande pour chacun des jeux de paramètre est fastidi",
    "enTitle": "Parametric analyses - Distribution of analyses",
    "enLead": "u2.08.07 Parametric analyses - Distribution of analyses Summary: Certain studies lead one to carry out a more or less large number of analyses (sometimes several thousand), corresponding to the variations of the parameters. The use of standard analyses, consisting in modifying or creating the command file for each of the parameter sets, is tedious, difficult"
  },
  "u2.08.08": {
    "frTitle": "Utilisation de la Méthode des Solutions Manufacturées pour la vérification logicielle",
    "frLead": "u2.08.08 Utilisation de la Méthode des Solutions Manufacturées pour la vérification logicielle Résumé : Ce document présente l'utilisation de la Méthode des Solutions Manufacturées pour la validation logicielle de Code Aster . Le principe de cette méthode est détaillé sur un exemple simple de diffusion thermique. Cet exemple nous permet de préciser l'intérêt",
    "enTitle": "Use of the Method of Manufactured Solutions for software verification",
    "enLead": "u2.08.08 Use of the Method of Manufactured Solutions for software verification Summary: This document presents the use of the Method of Manufactured Solutions for the software validation of Code Aster . The principle of this method is detailed on a simple example of thermal diffusion. This example allows us to specify the interest of this approach and, in pa"
  },
  "u2.08.09": {
    "frTitle": "1 **u2.08.09** Adaptation de maillage en non-linéaire",
    "frLead": "Illustration 2: Marche en temps avec adaptation de maillage 1 u2.08.09 Adaptation de maillage en non-linéaire Résumé : Ce document présente la méthodologie de réalisation d'une étude non-linéaire avec adaptation de maillage. Cette adaptation du maillage au cours du transitoire est obtenue à l'aide du logiciel HOMARD appelé via la commande MACR ADAP MAIL U7.0",
    "enTitle": "1 **u2.08.09** Mesh adaptation in the non-linear regime",
    "enLead": "Illustration 2: Time marching with mesh adaptation 1 u2.08.09 Mesh adaptation in the non-linear regime Summary: This document presents the methodology for carrying out a non-linear study with mesh adaptation. This adaptation of the mesh in the course of the transient is obtained with the help of the HOMARD software, called via the command MACR ADAP MAIL U7.0"
  },
  "u2.09.02": {
    "frTitle": "Réalisation du calcul d’un assemblage goujon-bride",
    "frLead": "u2.09.02 Réalisation du calcul d’un assemblage goujon-bride 1 But Cette note concerne, la réalisation du maillage et du calcul global d’un assemblage goujon-bride avec Code Aster . Les calculs proprement dits ainsi que les macro-commandes évoquées dans ce document sont disponibles dans les fichiers de commandes des cast-test ZZZZ120A et ZZZZ120B. La producti",
    "enTitle": "Carrying out the analysis of a stud–flange assembly",
    "enLead": "u2.09.02 Carrying out the analysis of a stud–flange assembly 1 Purpose This note concerns the production of the mesh and the global analysis of a stud–flange assembly with Code Aster . The analyses proper, as well as the macro-commands mentioned in this document, are available in the command files of the test cases ZZZZ120A and ZZZZ120B. The production of th"
  },
  "u2.10.01": {
    "frTitle": "Notice d’utilisation du couplage entre Code_Aster et le module de lois de comportement UMAT",
    "frLead": "u2.10.01 Notice d’utilisation du couplage entre Code Aster et le module de lois de comportement UMAT Résumé: On décrit ici l’utilisation du couplage entre Code Aster et le module d’intégration de lois de comportement UMAT, routine «utilisateur» dont les arguments sont spécifiés par le code Abaqus. Attention: l'utilisation de ces lois de comportement «à façon",
    "enTitle": "User's guide to the coupling between Code_Aster and the UMAT constitutive-law module",
    "enLead": "u2.10.01 User's guide to the coupling between Code Aster and the UMAT constitutive-law module Summary: The use of the coupling between Code Aster and the UMAT constitutive-law integration module is described here. UMAT is a “user” routine whose arguments are specified by the Abaqus code. Warning: the use of these “custom” constitutive laws implies a specific"
  },
  "u2.10.02": {
    "frTitle": "Notice d’utilisation de MFront avec code_aster",
    "frLead": "u2.10.02 Notice d’utilisation de MFront avec code aster Résumé: On décrit ici l’utilisation du couplage entre code aster et le module d’intégration de lois de comportement MFront, qui est diffusé en Open Source sous licence GPL et CECILL-A. MFront permet de définir une loi de comportement de façon simple, proche des équations physiques, sans avoir à se souci",
    "enTitle": "User's guide to MFront with code_aster",
    "enLead": "u2.10.02 User's guide to MFront with code aster Summary: The use of the coupling between code aster and the constitutive-law integration module MFront is described here. MFront is distributed as Open Source under the GPL and CECILL-A licences. MFront makes it possible to define a constitutive law in a simple way, close to the physical equations, without havi"
  },
  "u2.11.01": {
    "frTitle": "Notice d’utilisation des raccords 1D-3D",
    "frLead": "u2.11.01 Notice d’utilisation des raccords 1D-3D Résumé: Cette notice a pour objectif de guider l'utilisateur dans le choix d'un raccord Poutre – 3D en dynamique dans Code Aster. Les méthodologies de raccord proposées sont de deux type : - Raccord surfacique non-intrusif dénommé bascule 1D-3D (option 3D POU de LIAISON ELEM) - Raccord volumique intrusif dans ",
    "enTitle": "User's guide to 1D–3D connections",
    "enLead": "u2.11.01 User's guide to 1D–3D connections Summary: This guide aims to help the user in the choice of a Beam–3D connection in dynamics in Code Aster. The connection methodologies proposed are of two types: - Non-intrusive surface connection called 1D–3D switchover (option 3D POU of LIAISON ELEM) - Intrusive volume connection within the Arlequin framework (op"
  },
  "u2.51.01": {
    "frTitle": "Notice d’utilisation de Grace pour Code_Aster",
    "frLead": "u2.51.01 Notice d’utilisation de Grace pour Code Aster Résumé: Ce document présente l’outil de tracé de courbes graphique Grace, outil puissant pour tracer et manipuler des courbes produites par Code Aster . 1 Généralités 1.1 Présentation Grace Grace est un outil de tracé de courbe graphique (WYSIWYG) sous licence GPL disponible sur les système type Unix/Lin",
    "enTitle": "User's guide to Grace for Code_Aster",
    "enLead": "u2.51.01 User's guide to Grace for Code Aster Summary: This document presents the graphical curve-plotting tool Grace, a powerful tool for plotting and manipulating curves produced by Code Aster . 1 General points 1.1 Presentation of Grace Grace is a graphical curve-plotting tool (WYSIWYG) under the GPL licence, available on systems of Unix/Linux type and po"
  },
  "u2.51.02": {
    "frTitle": "Tracé de courbes avec Code_Aster",
    "frLead": "u2.51.02 Tracé de courbes avec Code Aster Résumé : Ce document explique comment, à partir d’un résultat de calcul, on peut produire des tables ou des fonctions, extraire les valeurs de ces tables ou fonctions, les manipuler, et enfin en dernier lieu utiliser les commandes d’impression pour tracer des courbes. Si vous disposez d’une fonction ou d’une table et",
    "enTitle": "Plotting curves with Code_Aster",
    "enLead": "u2.51.02 Plotting curves with Code Aster Summary: This document explains how, starting from an analysis result, one can produce tables or functions, extract the values of these tables or functions, manipulate them, and finally, as a last step, use the print commands in order to plot curves. If you have a function or a table and you simply wish to represent i"
  },
  "u3.01.00": {
    "frTitle": "Description du fichier de maillage de Code_Aster",
    "frLead": "u3.01.00 Description du fichier de maillage de Code Aster Résumé : Ce fichier permet de décrire un maillage de Code Aster . Il peut être construit par une interface automatique entre un mailleur et le code, mais peut également être rédigé à la main. Il contient : - un titre éventuel, - une liste de nœuds avec leurs coordonnées, - des listes de mailles, chaqu",
    "enTitle": "Description of the Code_Aster mesh file",
    "enLead": "u3.01.00 Description of the Code Aster mesh file Summary: This file makes it possible to describe a mesh of Code Aster . It can be built by an automatic interface between a mesher and the code, but it can also be written by hand. It contains: - an optional title, - a list of nodes with their coordinates, - lists of mesh cells; each mesh cell is described by "
  },
  "u3.02.01": {
    "frTitle": "Interface du fichier de maillage GMSH avec Aster",
    "frLead": "u3.02.01 Interface du fichier de maillage GMSH avec Aster Résumé: GMSH est un outil de modelage, maillage et post-traitement diffusé sous licence GNU-GPL (https://gmsh.info, exécutables, sources et documentation disponibles sur ce site). On décrit ici le principe de l'interface qui permet d'utiliser dans Aster un fichier issu de GMSH. Cette interface est mis",
    "enTitle": "Interface of the GMSH mesh file with Aster",
    "enLead": "u3.02.01 Interface of the GMSH mesh file with Aster Summary: GMSH is a tool for modelling, meshing and post-processing, distributed under the GNU-GPL licence (https://gmsh.info, executables, sources and documentation available on this site). The principle of the interface which makes it possible to use in Aster a file coming from GMSH is described here. This"
  },
  "u3.03.01": {
    "frTitle": "Interface du fichier de maillage IDEAS avec Aster",
    "frLead": "u3.03.01 Interface du fichier de maillage IDEAS avec Aster Résumé: Ce document a pour but de décrire le principe de l'interface IDEAS (SDRC) avec Aster . Cette interface est activée dans Aster par la procédure PRE IDEAS U7.01.01. Les datasets du fichier universel I-DEASTM relus par l’interface IDEAS- Aster sont le dataset 151 (titre), les datasets 15, 781 ou",
    "enTitle": "Interface of the IDEAS mesh file with Aster",
    "enLead": "u3.03.01 Interface of the IDEAS mesh file with Aster Summary: The purpose of this document is to describe the principle of the IDEAS (SDRC) interface with Aster . This interface is activated in Aster by the procedure PRE IDEAS U7.01.01. The datasets of the I-DEASTM universal file read by the IDEAS– Aster interface are dataset 151 (title), datasets 15, 781 or"
  },
  "u3.04.01": {
    "frTitle": "Interface du fichier de maillage GIBI avec Code_Aster",
    "frLead": "u3.04.01 Interface du fichier de maillage GIBI avec Code Aster Résumé: L'utilisation de GIBI (mailleur de CASTEM 2000) peut se faire sur station de travail Unix/Linux selon les versions disponibles. On décrit ici le principe de l'interface qui permet d'utiliser dans Code Aster un fichier issu de CASTEM 2000. Cette interface est mise en œuvre dans Aster par l",
    "enTitle": "Interface of the GIBI mesh file with Code_Aster",
    "enLead": "u3.04.01 Interface of the GIBI mesh file with Code Aster Summary: The use of GIBI (mesher of CASTEM 2000) can be done on a Unix/Linux workstation, according to the versions available. The principle of the interface which makes it possible to use in Code Aster a file coming from CASTEM 2000 is described here. This interface is implemented in Aster by the comm"
  },
  "u3.11.01": {
    "frTitle": "Modélisations POU_D_T, POU_D_E, BARRE",
    "frLead": "u3.11.01 Modélisations POU D T, POU D E, BARRE Résumé: Les quatre modélisations POU D T, POU D E et BARRE correspondent aux formulations classiques d’éléments de poutres et de barres, inspirées de la Résistance des Matériaux. Elles sont utilisables pour des problèmes tridimensionnels en analyse mécanique linéaire ou non linéaire isotrope. 1 Discrétisation 1.",
    "enTitle": "Modellings POU_D_T, POU_D_E, BARRE",
    "enLead": "u3.11.01 Modellings POU D T, POU D E, BARRE Summary: The four modellings POU D T, POU D E and BARRE correspond to the classical formulations of beam and bar elements, inspired by Strength of Materials. They can be used for three-dimensional problems in linear or non-linear isotropic mechanical analysis. 1 Discretisation 1.1 Degrees of freedom For the three b"
  },
  "u3.11.02": {
    "frTitle": "Modélisations DIS_T et DIS_TR",
    "frLead": "u3.11.02 Modélisations DIS T et DIS TR Résumé : Ce document décrit pour les modélisations DIS T et DIS TR : - les degrés de liberté portés par les éléments finis qui supportent la modélisation, - les mailles supports afférentes, - les chargements supportés, - les possibilités non linéaires, - les cas-tests mettant en œuvre les modélisations. Les deux modélis",
    "enTitle": "Modellings DIS_T and DIS_TR",
    "enLead": "u3.11.02 Modellings DIS T and DIS TR Summary: This document describes, for the modellings DIS T and DIS TR : - the degrees of freedom carried by the finite elements which support the modelling, - the related support mesh cells, - the supported loadings, - the non-linear capabilities, - the test cases implementing the modellings. The two modellings DIS T and "
  },
  "u3.11.03": {
    "frTitle": "Modélisations CABLE et CABLE_POULIE",
    "frLead": "u3.11.03 Modélisations CABLE et CABLE POULIE Résumé : Ce document décrit pour les modélisations CABLE et CABLE POULIE: - les degrés de liberté portés par les éléments finis qui supportent la modélisation, - les mailles supports afférentes, - les chargements supportés, - les possibilités non linéaires, - les cas-tests mettant en œuvre les modélisations. Les m",
    "enTitle": "Modellings CABLE and CABLE_POULIE",
    "enLead": "u3.11.03 Modellings CABLE and CABLE POULIE Summary: This document describes, for the modellings CABLE and CABLE POULIE: - the degrees of freedom carried by the finite elements which support the modelling, - the related support mesh cells, - the supported loadings, - the non-linear capabilities, - the test cases implementing the modellings. The modellings CAB"
  },
  "u3.11.04": {
    "frTitle": "Modélisations POU_D_TG, POU_D_TGM",
    "frLead": "u3.11.04 Modélisations POU D TG, POU D TGM Résumé : Ce document décrit pour les modélisations POU D TGet POU D TGM: - les degrés de liberté portés par les éléments finis qui supportent la modélisation, - les mailles supports afférentes, - les chargements supportés, - les possibilités non linéaires, - les cas-tests mettant en œuvre les modélisations La modéli",
    "enTitle": "Modellings POU_D_TG, POU_D_TGM",
    "enLead": "u3.11.04 Modellings POU D TG, POU D TGM Summary: This document describes, for the modellings POU D TG and POU D TGM: - the degrees of freedom carried by the finite elements which support the modelling, - the related support mesh cells, - the supported loadings, - the non-linear capabilities, - the test cases implementing the modellings The POU D TG modelling"
  },
  "u3.11.05": {
    "frTitle": "Modélisation POU_D_T_GD",
    "frLead": "u3.11.05 Modélisation POU D T GD Résumé : Ce document décrit pour la modélisation POU D T GD: - les degrés de liberté portés par les éléments finis qui supportent la modélisation, - les mailles supports afférentes, - les chargements supportés, - les possibilités non linéaires, - les cas-tests mettant en œuvre la modélisation. La modélisation POU D T GD corre",
    "enTitle": "Modelling POU_D_T_GD",
    "enLead": "u3.11.05 Modelling POU D T GD Summary: This document describes, for the modelling POU D T GD: - the degrees of freedom carried by the finite elements which support the modelling, - the related support mesh cells, - the supported loadings, - the non-linear capabilities, - the test cases implementing the modelling. The POU D T GD modelling corresponds to a for"
  },
  "u3.11.06": {
    "frTitle": "Modélisations TUYAU_3M et TUYAU_6M",
    "frLead": "u3.11.06 Modélisations TUYAU 3M et TUYAU 6M Résumé : Ce document décrit pour les modélisations TUYAU 3M et TUYAU 6M: - les degrés de liberté portés par les éléments finis qui supportent la modélisation, - les mailles supports afférentes, - les chargements supportés, - les possibilités non-linéaires, - les cas-tests mettant en œuvre les modélisations. Les mod",
    "enTitle": "Modellings TUYAU_3M and TUYAU_6M",
    "enLead": "u3.11.06 Modellings TUYAU 3M and TUYAU 6M Summary: This document describes, for the modellings TUYAU 3M and TUYAU 6M: - the degrees of freedom carried by the finite elements which support the modelling, - the related support mesh cells, - the supported loadings, - the non-linear capabilities, - the test cases implementing the modellings. The modellings TUYAU"
  },
  "u3.11.07": {
    "frTitle": "Modélisation POU_D_EM",
    "frLead": "u3.11.07 Modélisation POU D EM Résumé: La modélisation POU D EM correspond à la formulation d’éléments de poutre multifibre (poutre de section hétérogène divisée en plusieurs fibres). Elles sont utilisables pour des problèmes tridimensionnels en analyse mécanique linéaire et non linéaire. 1 Discrétisation 1.1 Degrés de libertés Pour la modélisation de poutre",
    "enTitle": "Modelling POU_D_EM",
    "enLead": "u3.11.07 Modelling POU D EM Summary: The POU D EM modelling corresponds to the formulation of multi-fibre beam elements (beam of heterogeneous section divided into several fibres). They can be used for three-dimensional problems in linear and non-linear mechanical analysis. 1 Discretisation 1.1 Degrees of freedom For the multi-fibre beam modelling in three d"
  },
  "u3.12.01": {
    "frTitle": "Modélisations DKT - DST - Q4G - DKTG - Q4GG",
    "frLead": "u3.12.01 Modélisations DKT - DST - Q4G - DKTG - Q4GG Résumé : Ce document décrit pour les modélisations DKT - DST - Q4G - DKTG - Q4GG : - les degrés de liberté portés par les éléments finis qui supportent la modélisation, - les mailles supports afférentes, - les chargements supportés, - les possibilités non linéaires, - les cas-tests mettant en œuvre les mod",
    "enTitle": "Modellings DKT - DST - Q4G - DKTG - Q4GG",
    "enLead": "u3.12.01 Modellings DKT - DST - Q4G - DKTG - Q4GG Summary: This document describes, for the modellings DKT - DST - Q4G - DKTG - Q4GG: - the degrees of freedom carried by the finite elements which support the modelling, - the related support mesh cells, - the supported loadings, - the non-linear possibilities, - the test cases implementing the modellings. The"
  },
  "u3.12.02": {
    "frTitle": "Modélisations COQUE_AXIS",
    "frLead": "u3.12.02 Modélisations COQUE AXIS Résumé: Ce document décrit pour la modélisation COQUE AXIS: - les degrés de liberté portés par les éléments finis qui supportent la modélisation, - les mailles supports afférentes, - les chargements supportés, - les possibilités non linéaires, - les cas-tests mettant en œuvre les modélisations. La modélisation thermo-élasto-",
    "enTitle": "Modellings COQUE_AXIS",
    "enLead": "u3.12.02 Modellings COQUE AXIS Summary: This document describes, for the modelling COQUE AXIS: - the degrees of freedom carried by the finite elements which support the modelling, - the related support mesh cells, - the supported loadings, - the non-linear possibilities, - the test cases implementing the modellings. The thermo-elasto-plastic modelling COQUE "
  },
  "u3.12.03": {
    "frTitle": "Modélisation COQUE_3D",
    "frLead": "u3.12.03 Modélisation COQUE 3D Résumé : La modélisation COQUE 3D présentée ici correspond à une formulation de cinématique générale de coques et plaques, de type Naghdi-Reissner, où les contraintes généralisées sont obtenues à partir des lois de comportement tridimensionnel des matériaux constitutifs R3.07.04. Contrairement aux modélisations DKT-DST, Q4G cor",
    "enTitle": "Modelling COQUE_3D",
    "enLead": "u3.12.03 Modelling COQUE 3D Summary: The COQUE 3D modelling presented here corresponds to a general shell and plate kinematics formulation, of Naghdi-Reissner type, in which the generalised stresses are obtained from the three-dimensional constitutive laws of the constituent materials R3.07.04. Unlike the modellings DKT-DST, Q4G corresponding to the plate-el"
  },
  "u3.12.04": {
    "frTitle": "Modélisation GRILLE_EXCENTRE, GRILLE_MEMBRANE et MEMBRANE",
    "frLead": "u3.12.04 Modélisation GRILLE EXCENTRE, GRILLE MEMBRANE et MEMBRANE Résumé: Ce document décrit pour les modélisations GRILLE EXCENTRE,GRILLE MEMBRANE et MEMBRANE: - les degrés de liberté portés par les éléments finis qui supportent la modélisation, - les mailles supports afférentes, - les matériaux et chargements supportés, - les options de calculs pour les m",
    "enTitle": "Modelling GRILLE_EXCENTRE, GRILLE_MEMBRANE and MEMBRANE",
    "enLead": "u3.12.04 Modelling GRILLE EXCENTRE, GRILLE MEMBRANE and MEMBRANE Summary: This document describes, for the modellings GRILLE EXCENTRE, GRILLE MEMBRANE and MEMBRANE: - the degrees of freedom carried by the finite elements which support the modelling, - the related support mesh cells, - the supported materials and loadings, - the analysis options for the eleme"
  },
  "u3.13.01": {
    "frTitle": "Modélisations AXIS, D_PLAN, C_PLAN",
    "frLead": "u3.13.01 Modélisations AXIS, D PLAN, C PLAN Résumé : Les modélisations AXIS, D PLAN, C PLAN (Phénomène : mécanique) correspondent à des éléments finis dont les mailles supports sont surfaciques. Les hypothèses de modélisation sont les suivantes : - AXIS pour l'axisymétrie (mode 0 de Fourier) selon l'axe des Y, - D PLAN pour les déformations planes, - C PLAN ",
    "enTitle": "Modellings AXIS, D_PLAN, C_PLAN",
    "enLead": "u3.13.01 Modellings AXIS, D PLAN, C PLAN Summary: The modellings AXIS, D PLAN, C PLAN (Phenomenon: mechanical) correspond to finite elements whose support mesh cells are surface mesh cells. The modelling assumptions are the following: - AXIS for axisymmetry (Fourier mode 0) about the Y axis, - D PLAN for the plane strains, - C PLAN for the plane stresses. Th"
  },
  "u3.13.02": {
    "frTitle": "Modélisation AXIS_FOURIER mécanique",
    "frLead": "u3.13.02 Modélisation AXIS FOURIER mécanique Résumé: Ce document décrit pour la modélisation AXIS FOURIER mécanique: - les degrés de liberté portés par les éléments finis qui supportent la modélisation, - les mailles supports afférentes, - les chargements supportés, - les possibilités non linéaires, - les cas-tests mettant en œuvre la modélisation. La modéli",
    "enTitle": "Mechanical modelling AXIS_FOURIER",
    "enLead": "u3.13.02 Mechanical modelling AXIS FOURIER Summary: This document describes, for the mechanical modelling AXIS FOURIER: - the degrees of freedom carried by the finite elements which support the modelling, - the related support mesh cells, - the supported loadings, - the non-linear possibilities, - the test cases implementing the modelling. The modelling AXIS"
  },
  "u3.13.03": {
    "frTitle": "Modélisations 2D_FLUIDE, 2D_FLUI_STRU, AXIS_FLUIDE, AXIS_FLUI_STRU",
    "frLead": "u3.13.03 Modélisations 2D FLUIDE, 2D FLUI STRU, AXIS FLUIDE, AXIS FLUI STRU Résumé: Ce document décrit pour les modélisations 2D FLUIDE, 2D FLUI STRU, AXIS FLUIDE, AXIS FLUI STRU: - les degrés de liberté portés par les éléments finis qui supportent la modélisation, - les mailles supports afférentes, - les chargements supportés, - les possibilités non linéair",
    "enTitle": "Modellings 2D_FLUIDE, 2D_FLUI_STRU, AXIS_FLUIDE, AXIS_FLUI_STRU",
    "enLead": "u3.13.03 Modellings 2D FLUIDE, 2D FLUI STRU, AXIS FLUIDE, AXIS FLUI STRU Summary: This document describes, for the modellings 2D FLUIDE, 2D FLUI STRU, AXIS FLUIDE, AXIS FLUI STRU: - the degrees of freedom carried by the finite elements which support the modelling, - the related support mesh cells, - the supported loadings, - the non-linear possibilities, - t"
  },
  "u3.13.05": {
    "frTitle": "Modélisations AXIS_SI, D_PLAN_SI, C_PLAN_SI",
    "frLead": "u3.13.05 Modélisations AXIS SI, D PLAN SI, C PLAN SI Résumé : Les modélisations AXIS SI, D PLAN SI, C PLAN SI (Phénomène : mécanique) correspondent à des éléments finis dont les mailles supports sont surfaciques. Le suffixe SI signifie: Sous - Intégré: l’intégration des termes relatifs aux lois de comportement se fait de façon réduite (schéma de points de Ga",
    "enTitle": "Modellings AXIS_SI, D_PLAN_SI, C_PLAN_SI",
    "enLead": "u3.13.05 Modellings AXIS SI, D PLAN SI, C PLAN SI Summary: The modellings AXIS SI, D PLAN SI, C PLAN SI (Phenomenon: mechanical) correspond to finite elements whose support mesh cells are surface mesh cells. The suffix SI means: Under-integrated: the integration of the terms relating to the constitutive laws is carried out in a reduced manner (Gauss-point sc"
  },
  "u3.13.07": {
    "frTitle": "Modélisations AXIS_INCO_UPG, D_PLAN_INCO_UPG",
    "frLead": "u3.13.07 Modélisations AXIS INCO UPG, D PLAN INCO UPG Résumé: Ce document décrit pour les modélisations AXIS INCO UPG, D PLAN INCO UPG: - les degrés de liberté portés par les éléments finis qui supportent la modélisation, - les mailles supports afférentes, - les chargements supportés, - les possibilités non-linéaires, - les cas-tests mettant en œuvre les mod",
    "enTitle": "Modellings AXIS_INCO_UPG, D_PLAN_INCO_UPG",
    "enLead": "u3.13.07 Modellings AXIS INCO UPG, D PLAN INCO UPG Summary: This document describes, for the modellings AXIS INCO UPG, D PLAN INCO UPG: - the degrees of freedom carried by the finite elements which support the modelling, - the associated support mesh cells, - the supported loadings, - the non-linear capabilities, - the test cases implementing the modellings."
  },
  "u3.13.08": {
    "frTitle": "Modélisations D_PLAN_HM, D_PLAN_HHM, D_PLAN_THM, D_PLAN_THH, D_PLAN_THHM, AXIS_HM, AXIS_HHM,AXIS_THM, AXIS_THH, AXIS_THHM",
    "frLead": "u3.13.08 Modélisations D PLAN HM, D PLAN HHM, D PLAN THM, D PLAN THH, D PLAN THHM, AXIS HM, AXIS HHM,AXIS THM, AXIS THH, AXIS THHM Résumé: Ce document décrit pour les modélisations D PLAN et AXIS en thermo hydro mécanique: - les degrés de liberté portés par les éléments finis qui supportent la modélisation, - les mailles supports afférentes, - les matériaux ",
    "enTitle": "Modellings D_PLAN_HM, D_PLAN_HHM, D_PLAN_THM, D_PLAN_THH, D_PLAN_THHM, AXIS_HM, AXIS_HHM, AXIS_THM, AXIS_THH, AXIS_THHM",
    "enLead": "u3.13.08 Modellings D PLAN HM, D PLAN HHM, D PLAN THM, D PLAN THH, D PLAN THHM, AXIS HM, AXIS HHM, AXIS THM, AXIS THH, AXIS THHM Summary: This document describes, for the modellings D PLAN and AXIS in thermo-hydro-mechanics: - the degrees of freedom carried by the finite elements which support the modelling, - the associated support mesh cells, - the support"
  },
  "u3.13.09": {
    "frTitle": "Modélisations 2D_DIS_T et 2D_DIS_TR",
    "frLead": "u3.13.09 Modélisations 2D DIS T et 2D DIS TR Résumé : Ce document décrit pour les modélisations 2D DIS T, 2D DIS TR (cf. R5.03.17): - les degrés de liberté portés par les éléments finis qui supportent la modélisation, - les mailles supports afférentes, - les chargements supportés, - les possibilités non linéaires, - les cas-tests mettant en œuvre les modélis",
    "enTitle": "Modellings 2D_DIS_T and 2D_DIS_TR",
    "enLead": "u3.13.09 Modellings 2D DIS T and 2D DIS TR Summary: This document describes, for the modellings 2D DIS T, 2D DIS TR (see R5.03.17): - the degrees of freedom carried by the finite elements which support the modelling, - the associated support mesh cells, - the supported loadings, - the non-linear capabilities, - the test cases implementing the modellings. The"
  },
  "u3.13.12": {
    "frTitle": "Modélisation D_PLAN_ABSO",
    "frLead": "u3.13.12 Modélisation D PLAN ABSO Résumé: Ce document décrit pour la modélisation D PLAN ABSO: - les degrés de liberté portés par les éléments finis qui supportent la modélisation, - les mailles supports afférentes, - les chargements supportés, - les possibilités non linéaires, - les cas-tests mettant en œuvre la modélisation. La modélisation D PLAN ABSO (Ph",
    "enTitle": "Modelling D_PLAN_ABSO",
    "enLead": "u3.13.12 Modelling D PLAN ABSO Summary: This document describes, for the modelling D PLAN ABSO: - the degrees of freedom carried by the finite elements which support the modelling, - the associated support mesh cells, - the supported loadings, - the non-linear capabilities, - the test cases implementing the modelling. The modelling D PLAN ABSO (Phenomenon: m"
  },
  "u3.13.13": {
    "frTitle": "Modélisation 2D_FLUI_ABSO",
    "frLead": "u3.13.13 Modélisation 2D FLUI ABSO Résumé: Ce document décrit pour la modélisation 2D FLUI ABSO: - les degrés de liberté portés par les éléments finis qui supportent la modélisation, - les mailles supports afférentes, - les chargements supportés, - les possibilités non linéaires, - les cas-tests mettant en œuvre la modélisation. La modélisation 2D FLUI ABSO ",
    "enTitle": "Modelling 2D_FLUI_ABSO",
    "enLead": "u3.13.13 Modelling 2D FLUI ABSO Summary: This document describes, for the modelling 2D FLUI ABSO: - the degrees of freedom carried by the finite elements which support the modelling, - the associated support mesh cells, - the supported loadings, - the non-linear capabilities, - the test cases implementing the modelling. The modelling 2D FLUI ABSO (Phenomenon"
  },
  "u3.13.14": {
    "frTitle": "Modélisations x_JOINT, x_ELDI, x_INTERFACE et x_INTERFACE_S",
    "frLead": "u3.13.14 Modélisations x JOINT, x ELDI, x INTERFACE et x INTERFACE S Résumé: Ce document décrit, pour les modélisations PLAN JOINT, AXIS JOINT, 3D JOINT, PLAN ELDI,AXIS ELDI, PLAN INTERFACE, AXIS INTERFACE, 3D INTERFACE, PLAN INTERFACE S, AXIS INTERFACE S et 3D INTERFACE S, les points suivants: - les degrés de liberté portés par les éléments finis qui suppor",
    "enTitle": "Modellings x_JOINT, x_ELDI, x_INTERFACE and x_INTERFACE_S",
    "enLead": "u3.13.14 Modellings x JOINT, x ELDI, x INTERFACE and x INTERFACE S Summary: This document describes, for the modellings PLAN JOINT, AXIS JOINT, 3D JOINT, PLAN ELDI, AXIS ELDI, PLAN INTERFACE, AXIS INTERFACE, 3D INTERFACE, PLAN INTERFACE S, AXIS INTERFACE S and 3D INTERFACE S, the following points: - the degrees of freedom carried by the finite elements which"
  },
  "u3.14.01": {
    "frTitle": "Modélisations 3D et 3D_SI mécaniques",
    "frLead": "u3.14.01 Modélisations 3D et 3D SI mécaniques Résumé: Ce document décrit pour les modélisations mécaniques 3D et 3D SI: - les degrés de liberté portés par les éléments finis qui supportent la modélisation, - les mailles supports afférentes, - les chargements supportés, - les possibilités non linéaires, - les cas-tests mettant en œuvre la modélisation. Les mo",
    "enTitle": "Mechanical modellings 3D and 3D_SI",
    "enLead": "u3.14.01 Mechanical modellings 3D and 3D SI Summary: This document describes, for the mechanical modellings 3D and 3D SI: - the degrees of freedom carried by the finite elements which support the modelling, - the associated support mesh cells, - the supported loadings, - the non-linear capabilities, - the test cases implementing the modelling. The modellings"
  },
  "u3.14.02": {
    "frTitle": "Modélisations 3D_FLUIDE, FLUI_STRU, 2D_FLUI_PESA",
    "frLead": "u3.14.02 Modélisations 3D FLUIDE, FLUI STRU, 2D FLUI PESA Résumé: Ce document décrit pour les modélisations 3D FLUIDE, FLUI STRU, 2D FLUI PESA: - les degrés de liberté portés par les éléments finis qui supportent la modélisation, - les mailles supports afférentes, - les chargements supportés, - les possibilités non linéaires, - les cas-tests mettant en œuvre",
    "enTitle": "Modellings 3D_FLUIDE, FLUI_STRU, 2D_FLUI_PESA",
    "enLead": "u3.14.02 Modellings 3D FLUIDE, FLUI STRU, 2D FLUI PESA Summary: This document describes, for the modellings 3D FLUIDE, FLUI STRU, 2D FLUI PESA: - the degrees of freedom carried by the finite elements which support the modelling, - the associated support mesh cells, - the supported loadings, - the non-linear capabilities, - the test cases implementing the mod"
  },
  "u3.14.06": {
    "frTitle": "Modélisation 3D_INCO_UPG",
    "frLead": "u3.14.06 Modélisation 3D INCO UPG Résumé: Ce document décrit pour la modélisation 3D INCO UPG: - les degrés de liberté portés par les éléments finis qui supportent la modélisation, - les mailles supports afférentes, - les lois de comportement et les chargements supportés, - les possibilités non-linéaires, - les cas-tests mettant en œuvre la modélisation. Cet",
    "enTitle": "Modelling 3D_INCO_UPG",
    "enLead": "u3.14.06 Modelling 3D INCO UPG Summary: This document describes, for the modelling 3D INCO UPG: - the degrees of freedom carried by the finite elements which support the modelling, - the associated support mesh cells, - the supported constitutive laws and loadings, - the non-linear possibilities, - the test cases implementing the modelling. This modelling is"
  },
  "u3.14.07": {
    "frTitle": "Modélisations 3D_HM, 3D_HHM,3D_THM, 3D_THH, 3D_THHM",
    "frLead": "u3.14.07 Modélisations 3D HM, 3D HHM,3D THM, 3D THH, 3D THHM Résumé: Ce document décrit pour les modélisations 3D HM, 3D HHM,3D THM, 3D THH,3D THHM, 3D HM DIL, 3D HHM DIL, 3D THM DIL : - les degrés de liberté portés par les éléments finis qui supportent la modélisation, - les mailles supports afférentes, - les matériaux et chargements supportés, - les option",
    "enTitle": "Modellings 3D_HM, 3D_HHM, 3D_THM, 3D_THH, 3D_THHM",
    "enLead": "u3.14.07 Modellings 3D HM, 3D HHM, 3D THM, 3D THH, 3D THHM Summary: This document describes, for the modellings 3D HM, 3D HHM, 3D THM, 3D THH, 3D THHM, 3D HM DIL, 3D HHM DIL, 3D THM DIL: - the degrees of freedom carried by the finite elements which support the modelling, - the associated support mesh cells, - the supported materials and loadings, - the analy"
  },
  "u3.14.09": {
    "frTitle": "Modélisation 3D_ABSO",
    "frLead": "u3.14.09 Modélisation 3D ABSO Résumé: Ce document décrit pour la modélisation 3D ABSO: - les degrés de liberté portés par les éléments finis qui supportent la modélisation, - les mailles supports afférentes, - les chargements supportés, - les possibilités non linéaires, - les cas-tests mettant en œuvre les modélisations. La modélisation 3D ABSO (Phénomène : ",
    "enTitle": "Modelling 3D_ABSO",
    "enLead": "u3.14.09 Modelling 3D ABSO Summary: This document describes, for the modelling 3D ABSO: - the degrees of freedom carried by the finite elements which support the modelling, - the associated support mesh cells, - the supported loadings, - the non-linear possibilities, - the test cases implementing the modellings. The modelling 3D ABSO (Phenomenon: mechanics) "
  },
  "u3.14.10": {
    "frTitle": "Modélisation 3D_FLUI_ABSO",
    "frLead": "u3.14.10 Modélisation 3D FLUI ABSO Résumé: Ce document décrit pour la modélisation 3D FLUI ABSO: - les degrés de liberté portés par les éléments finis qui supportent la modélisation, - les mailles supports afférentes, - les chargements supportés, - les possibilités non linéaires, - les cas-tests mettant en œuvre la modélisation. La modélisation 3D FLUI ABSO ",
    "enTitle": "Modelling 3D_FLUI_ABSO",
    "enLead": "u3.14.10 Modelling 3D FLUI ABSO Summary: This document describes, for the modelling 3D FLUI ABSO: - the degrees of freedom carried by the finite elements which support the modelling, - the associated support mesh cells, - the supported loadings, - the non-linear possibilities, - the test cases implementing the modelling. The modelling 3D FLUI ABSO (Phenomeno"
  },
  "u3.22.01": {
    "frTitle": "Modélisations COQUE, COQUE_PLAN, COQUE_AXIS - Phénomène THERMIQUE",
    "frLead": "u3.22.01 Modélisations COQUE, COQUE PLAN, COQUE AXIS - Phénomène THERMIQUE Résumé: Ce document décrit pour les modélisations thermiques des éléments axisymétriques et plans: - les degrés de liberté portés par les éléments finis qui supportent la modélisation, - les mailles supports afférentes, - les chargements supportés, - les possibilités non linéaires, - ",
    "enTitle": "Modellings COQUE, COQUE_PLAN, COQUE_AXIS - Phenomenon THERMIQUE",
    "enLead": "u3.22.01 Modellings COQUE, COQUE PLAN, COQUE AXIS - Phenomenon THERMIQUE Summary: This document describes, for the thermal modellings of the axisymmetric and plane elements: - the degrees of freedom carried by the finite elements which support the modelling, - the associated support mesh cells, - the supported loadings, - the non-linear possibilities, - the "
  },
  "u3.23.01": {
    "frTitle": "Modélisations AXIS, PLAN, AXIS_DIAG et PLAN_DIAG - Phénomène THERMIQUE",
    "frLead": "u3.23.01 Modélisations AXIS, PLAN, AXIS DIAG et PLAN DIAG - Phénomène THERMIQUE Résumé: Ce document décrit pour les modélisations de thermiques des éléments axisymétriques et plans: - les degrés de liberté portés par les éléments finis qui supportent la modélisation, - les mailles supports afférentes, - les matériaux et chargements supportés, - les possibili",
    "enTitle": "Modellings AXIS, PLAN, AXIS_DIAG and PLAN_DIAG - Phenomenon THERMIQUE",
    "enLead": "u3.23.01 Modellings AXIS, PLAN, AXIS DIAG and PLAN DIAG - Phenomenon THERMIQUE Summary: This document describes, for the thermal modellings of the axisymmetric and plane elements: - the degrees of freedom carried by the finite elements which support the modelling, - the associated support mesh cells, - the supported materials and loadings, - the non-linear p"
  },
  "u3.23.02": {
    "frTitle": "1 **u3.23.02** Modélisation AXIS_FOURIER thermique",
    "frLead": "Organisme(s): EDF-R&D/AMA, DeltaCAD Manuel d'Utilisation Fascicule U3.23 : Eléments finis thermiques 2D Document : U3.23.02 1 u3.23.02 Modélisation AXIS FOURIER thermique Résumé: Ce document décrit pour la modélisation AXIS FOURIER thermique: - les degrés de liberté portés par les éléments finis qui supportent la modélisation, - les mailles supports afférent",
    "enTitle": "1 **u3.23.02** Thermal modelling AXIS_FOURIER",
    "enLead": "Organisation(s): EDF-R&D/AMA, DeltaCAD User's manual Booklet U3.23: 2D thermal finite elements Document: U3.23.02 1 u3.23.02 Thermal modelling AXIS FOURIER Summary: This document describes, for the thermal modelling AXIS FOURIER: - the degrees of freedom carried by the finite elements which support the modelling, - the associated support mesh cells, - the su"
  },
  "u3.24.01": {
    "frTitle": "Modélisations 3D et 3D_DIAG thermiques",
    "frLead": "u3.24.01 Modélisations 3D et 3D DIAG thermiques Résumé: Ce document décrit pour les modélisations 3D et 3D DIAG thermiques: - les degrés de liberté portés par les éléments finis qui supportent la modélisation, - les mailles supports afférentes, - les matériaux et chargements supportés, - les possibilités non linéaires, - les cas-tests mettant en œuvre les mo",
    "enTitle": "Thermal modellings 3D and 3D_DIAG",
    "enLead": "u3.24.01 Thermal modellings 3D and 3D DIAG Summary: This document describes, for the thermal modellings 3D and 3D DIAG: - the degrees of freedom carried by the finite elements which support the modelling, - the associated support mesh cells, - the supported materials and loadings, - the non-linear possibilities, - the test cases implementing the modellings T"
  },
  "u3.33.01": {
    "frTitle": "Modélisations 3D et PLAN du phénomène ACOUSTIQUE",
    "frLead": "u3.33.01 Modélisations 3D et PLAN du phénomène ACOUSTIQUE Résumé: Ce document décrit pour les modélisations 3D et PLAN: - les degrés de liberté portés par les éléments finis qui supportent la modélisation, - les mailles supports afférentes, - les matériaux et chargements supportés, - les options de calculs pour les matrices élémentaires et les post traitemen",
    "enTitle": "Modellings 3D and PLAN of the phenomenon ACOUSTIQUE",
    "enLead": "u3.33.01 Modellings 3D and PLAN of the phenomenon ACOUSTIQUE Summary: This document describes, for the modellings 3D and PLAN: - the degrees of freedom carried by the finite elements which support the modelling, - the associated support mesh cells, - the supported materials and loadings, - the analysis options for the elementary matrices and the post-process"
  },
  "u4.01.00": {
    "frTitle": "Comment lire la documentation des commandes",
    "frLead": "u4.01.00 Comment lire la documentation des commandes Résumé : Cette note est un guide de lecture des fascicules U4 et U7 du Manuel d'Utilisation. Elle explique notamment la signification des méta-caractères et des conventions typographiques utilisées pour la description de la syntaxe des commandes. Tous les exemples donnés ici sont donnés à titre d’illustrat",
    "enTitle": "How to read the command documentation",
    "enLead": "u4.01.00 How to read the command documentation Summary: This note is a reading guide for booklets U4 and U7 of the User's manual. It explains in particular the meaning of the meta-characters and of the typographical conventions used to describe the syntax of the commands. All the examples given here are given for illustration and do not replace the complete "
  },
  "u4.01.02": {
    "frTitle": "1 **u4.01.02** Nouveautés et modifications dans les commandes",
    "frLead": "Organisme(s): EDF-R&D/AMA Manuel d'Utilisation Fascicule U4.0-: Utilisation des commandes Document: U4.01.02 1 u4.01.02 Nouveautés et modifications dans les commandes Résumé: L’objet de ce document est d’offrir une vision globale des modifications de syntaxe et des nouvelles possibilités des commandes de Code Aster entre deux versions stabilisées. Cette mise",
    "enTitle": "1 **u4.01.02** New features and changes in the commands",
    "enLead": "Organisation(s): EDF-R&D/AMA User's manual Booklet U4.0-: Use of the commands Document: U4.01.02 1 u4.01.02 New features and changes in the commands Summary: The purpose of this document is to give an overall view of the syntax changes and of the new possibilities of the Code Aster commands between two stabilised versions. This update thus reports the change"
  },
  "u4.01.03": {
    "frTitle": "1 **u4.01.03** Nouveautés et modifications de la version 7",
    "frLead": "Organisme(s): EDF-R&D/AMA Manuel d'Utilisation Fascicule U4.0-: Utilisation des commandes Document: U4.01.03 1 u4.01.03 Nouveautés et modifications de la version 7 Résumé: L’objet de ce document est d’offrir une vision globale des modifications de syntaxe et des nouvelles possibilités des commandes de Code Aster intervenues entre chaque version depuis la ver",
    "enTitle": "1 **u4.01.03** New features and changes of version 7",
    "enLead": "Organisation(s): EDF-R&D/AMA User's manual Booklet U4.0-: Use of the commands Document: U4.01.03 1 u4.01.03 New features and changes of version 7 Summary: The purpose of this document is to give an overall view of the syntax changes and of the new possibilities of the Code Aster commands which have occurred between each version since version 7.0. Index A of "
  },
  "u4.01.04": {
    "frTitle": "1 **u4.01.04** Nouveautés et modifications de la version 8",
    "frLead": "Organisme(s): EDF-R&D/AMA Manuel d'Utilisation Fascicule U4.0-: Utilisation des commandes Document: U4.01.04 1 u4.01.04 Nouveautés et modifications de la version 8 Résumé: L’objet de ce document est d’offrir une vision globale des modifications de syntaxe et des nouvelles possibilités des commandes de Code Aster intervenues au cours du développement de la ve",
    "enTitle": "1 **u4.01.04** New features and changes of version 8",
    "enLead": "Organisation(s): EDF-R&D/AMA User's manual Booklet U4.0-: Use of the commands Document: U4.01.04 1 u4.01.04 New features and changes of version 8 Summary: The purpose of this document is to give an overall view of the syntax changes and of the new possibilities of the Code Aster commands which have occurred in the course of the development of version 8, that"
  },
  "u4.01.05": {
    "frTitle": "1 **u4.01.05** Nouveautés et modifications de la version 9",
    "frLead": "Organisme(s): EDF-R&D/AMA Manuel d'Utilisation Fascicule U4.0-: Utilisation des commandes Document: U4.01.05 1 u4.01.05 Nouveautés et modifications de la version 9 Résumé: L’objet de ce document est d’offrir une vision globale des modifications de syntaxe et des nouvelles possibilités des commandes de Code Aster intervenues au cours du développement de la ve",
    "enTitle": "1 **u4.01.05** New features and modifications of version 9",
    "enLead": "Organisation(s): EDF-R&D/AMA User's manual Booklet U4.0-: Use of the commands Document: U4.01.05 1 u4.01.05 New features and modifications of version 9 Summary: The purpose of this document is to provide an overall view of the syntax modifications and of the new possibilities of the Code Aster commands introduced during the development of version 9, that is,"
  },
  "u4.01.06": {
    "frTitle": "Nouveautés et modifications de la version 10",
    "frLead": "u4.01.06 Nouveautés et modifications de la version 10 Résumé: L’objet de ce document est d’offrir une vision globale des modifications de syntaxe et des nouvelles possibilités des commandes de Code Aster intervenues au cours du développement de la version 10, c’est-à-dire depuis la version 9.4.10. Pour plus de précisions, on consultera la documentation des c",
    "enTitle": "New features and modifications of version 10",
    "enLead": "u4.01.06 New features and modifications of version 10 Summary: The purpose of this document is to provide an overall view of the syntax modifications and of the new possibilities of the Code Aster commands introduced during the development of version 10, that is, since version 9.4.10. For further details, one should consult the documentation of the commands "
  },
  "u4.01.09": {
    "frTitle": "Nouveautés et modifications de la version 13",
    "frLead": "u4.01.09 Nouveautés et modifications de la version 13 Résumé: L’objet de ce document est d’offrir une vision globale des modifications de syntaxe et des nouvelles possibilités des commandes de code aster intervenues au cours du développement de la version 13, c’est-à-dire depuis la version 12.3.24. Pour plus de précisions, on consultera la documentation des ",
    "enTitle": "New features and modifications of version 13",
    "enLead": "u4.01.09 New features and modifications of version 13 Summary: The purpose of this document is to provide an overall view of the syntax modifications and of the new possibilities of the code aster commands introduced during the development of version 13, that is, since version 12.3.24. For further details, one should consult the documentation of the commands"
  },
  "u4.01.13": {
    "frTitle": "Nouveautés et modifications de la version 17",
    "frLead": "u4.01.13 Nouveautés et modifications de la version 17 Résumé: L’objet de ce document est d’offrir une vision globale des modifications de syntaxe et des nouvelles possibilités des commandes de code aster intervenues au cours du développement de la version 17, c’est-à-dire depuis la version 16.5. Pour plus de précisions, on consultera la documentation des com",
    "enTitle": "New features and modifications of version 17",
    "enLead": "u4.01.13 New features and modifications of version 17 Summary: The purpose of this document is to provide an overall view of the syntax modifications and of the new possibilities of the code aster commands introduced during the development of version 17, that is, since version 16.5. For further details, one should consult the documentation of the commands an"
  },
  "u4.01.14": {
    "frTitle": "Nouveautés et modifications de la version 18",
    "frLead": "u4.01.14 Nouveautés et modifications de la version 18 Résumé: L’objet de ce document est d’offrir une vision globale des modifications de syntaxe et des nouvelles possibilités des commandes de code aster intervenues au cours du développement de la version 18, c’est-à-dire depuis la version 17.4. Pour plus de précisions, on consultera la documentation des com",
    "enTitle": "New features and modifications of version 18",
    "enLead": "u4.01.14 New features and modifications of version 18 Summary: The purpose of this document is to provide an overall view of the syntax modifications and of the new possibilities of the code aster commands introduced during the development of version 18, that is, since version 17.4. For further details, one should consult the documentation of the commands an"
  },
  "u4.03.01": {
    "frTitle": "Titre et sous-titre d'un concept produit",
    "frLead": "u4.03.01 Titre et sous-titre d'un concept produit 1 But Définir un titre ou un sous-titre lors de l'exécution d'une commande Aster . Le titre et le sous titre lorsqu'ils sont prévus par la commande sont : - soit définis par défaut, - soit renseignés par l'utilisateur. Le titre est attaché à la structure de donnée produite par un opérateur. Les titres des con",
    "enTitle": "Title and subtitle of a produced concept",
    "enLead": "u4.03.01 Title and subtitle of a produced concept 1 Purpose Define a title or a subtitle during the execution of an Aster command. The title and the subtitle, when they are provided for by the command, are: - either defined by default, - or supplied by the user. The title is attached to the data structure produced by an operator. The titles of the modified c"
  },
  "u4.11.01": {
    "frTitle": "Procédure DEBUT",
    "frLead": "u4.11.01 Procédure DEBUT 1 But Affecter les ressources mémoire, disque et fichiers. L'exécution est constituée d'un ensemble de commandes commençant par DEBUT et se terminant par FIN. Voir aussi la procédure POURSUITE. La commande DEBUT effectue les tâches suivantes: - Définition des caractéristiques des bases de données (gérées par JEVEUX) et allocation des",
    "enTitle": "Procedure DEBUT",
    "enLead": "u4.11.01 Procedure DEBUT 1 Purpose Assign the memory, disk and file resources. The execution consists of a set of commands beginning with DEBUT and ending with FIN. See also the procedure POURSUITE. The command DEBUT carries out the following tasks: - Definition of the characteristics of the databases (managed by JEVEUX) and allocation of the associated file"
  },
  "u4.11.02": {
    "frTitle": "Commande FIN",
    "frLead": "u4.11.02 Commande FIN 1 But Cette commande termine proprement l'exécution d'un calcul. De cette manière, on indique au gestionnaire de mémoire que les objets peuvent être libérés et écrits sur disque dans la base globale (et permettre une POURSUITE). L'appel à cette procédure est obligatoire pour que l'exécution se termine correctement, ce qui nécessite de t",
    "enTitle": "Command FIN",
    "enLead": "u4.11.02 Command FIN 1 Purpose This command terminates the execution of an analysis cleanly. In this way, one tells the memory manager that the objects may be released and written to disk in the global database (and a restart, POURSUITE, made possible). The call to this procedure is mandatory for the execution to finish correctly, which requires every comman"
  },
  "u4.11.03": {
    "frTitle": "Procédure POURSUITE",
    "frLead": "u4.11.03 Procédure POURSUITE 1 But Poursuivre une étude à partir de la sauvegarde de la base effectuée par FIN. Cette commande est conservée pour des raisons de compatibilité. En effet, on peut se contenter d'utiliser DEBUT() que ce soit pour démarrer une étude ou pour reprendre l'exécution. En présence de la base, on fait automatiquement la poursuite du cal",
    "enTitle": "Procedure POURSUITE",
    "enLead": "u4.11.03 Procedure POURSUITE 1 Purpose Restart a study from the database save carried out by FIN. This command is retained for compatibility reasons. Indeed, one may simply use DEBUT(), whether to start a study or to resume the execution. In the presence of the database, the restart of the previous analysis is performed automatically. New since version 17 . "
  },
  "u4.12.03": {
    "frTitle": "Procédure DEFI_FICHIER",
    "frLead": "u4.12.03 Procédure DEFI FICHIER 1 But Ouvrir ou fermer un fichier associé à un numéro d’unité logique. Ce numéro peut être indiqué dans la procédure ou bien obtenu en retour de cette dernière. Cette action peut être effectuée à tout moment au cours du travail. Cette procédure permet d'associer un numéro d'unité logique avec un fichier FORTRAN de type ASCII, ",
    "enTitle": "Procedure DEFI_FICHIER",
    "enLead": "u4.12.03 Procedure DEFI FICHIER 1 Purpose Open or close a file associated with a logical-unit number. This number may be indicated in the procedure or else obtained in return from the latter. This action may be carried out at any moment during the work. This procedure makes it possible to associate a logical-unit number with a FORTRAN file of ASCII type, but"
  },
  "u4.13.01": {
    "frTitle": "Procédure INCLUDE",
    "frLead": "u4.13.01 Procédure INCLUDE 1 But Il s'agit d'insérer une suite de commandes qui seront exécutées presque telles qu'elles sont écrites. Il n'y a pas de possibilité de passer d'arguments. Les résultats des commandes sont exportées dans le jeu de commandes principal. Les autres objets sont normalement utilisables dans le fichier de commandes mais ne seront pas ",
    "enTitle": "Procedure INCLUDE",
    "enLead": "u4.13.01 Procedure INCLUDE 1 Purpose This inserts a sequence of commands that will be executed almost as they are written. There is no possibility of passing arguments. The results of the commands are exported into the main command set. The other objects are normally usable in the command file but will not be available in a POURSUITE. For example, a Python f"
  },
  "u4.13.04": {
    "frTitle": "Opérateur INFO_EXEC_ASTER",
    "frLead": "u4.13.04 Opérateur INFO EXEC ASTER 1 But Créer une table contenant des informations propres à l’exécution en cours, consultable depuis le fichier de commandes. Cette commande, destinée à s’enrichir, permet pour le moment de récupérer le temps restant et le premier numéro d’unité logique libre. La récupération du temps offre ainsi la possibilité de s’arrêter ",
    "enTitle": "Operator INFO_EXEC_ASTER",
    "enLead": "u4.13.04 Operator INFO EXEC ASTER 1 Purpose Create a table containing information specific to the execution in progress, which can be consulted from the command file. This command, intended to be extended, makes it possible for the moment to recover the time remaining and the first free logical-unit number. Recovering the time thus offers the possibility of "
  },
  "u4.14.01": {
    "frTitle": "Opérateur DETRUIRE",
    "frLead": "u4.14.01 Opérateur DETRUIRE 1 But Détruire des concepts utilisateurs. Après destruction, le concept ne peut donc naturellement plus être utilisé dans les commandes suivantes. La destruction d’un objet n’est pas si naturelle que cela puisse paraître. Il est important de bien comprendre son fonctionnement décrit dans cette documentation. La destruction d'objet",
    "enTitle": "Operator DETRUIRE",
    "enLead": "u4.14.01 Operator DETRUIRE 1 Purpose Destroy user concepts. After destruction, the concept can therefore naturally no longer be used in the following commands. The destruction of an object is not as natural as it may appear. It is important to understand fully its behaviour, described in this documentation. The destruction of unused objects makes it possible"
  },
  "u4.14.02": {
    "frTitle": "Opérateur COPIER",
    "frLead": "u4.14.02 Opérateur COPIER 1 But Dupliquer un concept utilisateur sous un autre nom. Cette commande est rarement utile et elle présente l'inconvénient de doubler l'espace «disque» du concept dans la base globale de l'utilisateur. Le concept produit peut être détruit (commande DETRUIRE) pour récupérer l'espace disque. Seuls certains types de concepts sont acce",
    "enTitle": "Operator COPIER",
    "enLead": "u4.14.02 Operator COPIER 1 Purpose Duplicate a user concept under another name. This command is rarely useful and it has the disadvantage of doubling the \"disk\" space of the concept in the user's global database. The concept produced can be destroyed (command DETRUIRE) in order to recover the disk space. Only certain types of concept are accepted. 2 Syntax 3"
  },
  "u4.15.01": {
    "frTitle": "Procédure MAJ_CATA",
    "frLead": "u4.15.01 Procédure MAJ CATA 1 But Compilation du catalogue d'éléments (scripts de l'agla associés : ccat92-py et ccat‑ele.csh). Cette procédure n'a pas d'intérêt pour l'utilisateur. Si nécessaire, on pourra se reporter au Manuel d’Utilisation de l’AGLA D1.02.01. 2 Syntaxe 3 Opérandes 3.1 Mot clé ELEMENT Cet opérande induit la compilation du catalogue des élé",
    "enTitle": "Procedure MAJ_CATA",
    "enLead": "u4.15.01 Procedure MAJ CATA 1 Purpose Compilation of the element catalogue (associated AGLA scripts: ccat92-py and ccat‑ele.csh). This procedure is of no interest to the user. If necessary, one may refer to the AGLA User's manual D1.02.01. 2 Syntax 3 Operands 3.1 Keyword ELEMENT This operand causes compilation of the element catalogue. Note: Management of lo"
  },
  "u4.15.12": {
    "frTitle": "Opérateur DEBUG",
    "frLead": "u4.15.12 Opérateur DEBUG 1 But Permet d'activer ou de désactiver les fonctionnalités de déverminage entre les différentes commandes. Certains mots-clés sont accessibles dans les commandes DEBUT et POURSUITE. Il s'agit d'une fonctionnalité destinée aux développeurs. 2 Syntaxe 3 Opérandes 3.1 Opérande SDVERI Attention, cette fonctionnalité peut provoquer un su",
    "enTitle": "Operator DEBUG",
    "enLead": "u4.15.12 Operator DEBUG 1 Purpose Makes it possible to activate or deactivate the debugging functionalities between the various commands. Some keywords are accessible in the commands DEBUT and POURSUITE. This is a functionality intended for developers. 2 Syntax 3 Operands 3.1 Operand SDVERI Warning: this functionality can cause a non-negligible extra cost du"
  },
  "u4.21.01": {
    "frTitle": "Opérateur LIRE_MAILLAGE",
    "frLead": "u4.21.01 Opérateur LIRE MAILLAGE 1 But Créer un maillage par lecture sur un fichier. Les formats de fichiers supportéssont: ASTER, MED, GIBI, GMSH et IDEAS. Produit une structure de données de type maillage. Remarque importante : On peut vérifier la qualité du maillage lu en utilisant (à la suite de LIRE MAILLAGE, la commande MACR INFO MAIL U7.03.02. 2 Synta",
    "enTitle": "Operator LIRE_MAILLAGE",
    "enLead": "u4.21.01 Operator LIRE MAILLAGE 1 Purpose Create a mesh by reading from a file. The supported file formats are: ASTER, MED, GIBI, GMSH and IDEAS. Produces a data structure of type maillage. Important note: One can check the quality of the mesh read by using (following LIRE MAILLAGE, the command MACR INFO MAIL U7.03.02. 2 Syntax 3 Operands 3.1 Operand UNITE L"
  },
  "u4.22.01": {
    "frTitle": "Opérateur DEFI_GROUP",
    "frLead": "u4.22.01 Opérateur DEFI GROUP 1 But Définir dans un maillage existant, de nouveaux groupes de nœuds ou de mailles. Ceci peut faciliter la définition de nouveaux lieux géométriques pour des entrées de données ou des post-traitements. Pour créer de nouveaux groupes, on utilise des critères topologiques, logiques ou géométriques. Modifie une structure de donnée",
    "enTitle": "Operator DEFI_GROUP",
    "enLead": "u4.22.01 Operator DEFI GROUP 1 Purpose Define, in an existing mesh, new node groups or mesh-cell groups. This can make it easier to define new geometric loci for data input or for post-processings. To create new groups, one uses topological, logical or geometric criteria. Modifies a data structure of type maillage, squelette or grille. 2 Syntax 3 Operands 3."
  },
  "u4.23.01": {
    "frTitle": "Opérateur DEFI_MAILLAGE",
    "frLead": "u4.23.01 Opérateur DEFI MAILLAGE 1 But Définir un maillage à l’aide de macro-éléments. Cette commande permet de définir un nouveau maillage à partir de macro-éléments statiques ou dynamiques. Ce nouveau maillage (ne contenant que les supports géométriques des macro-éléments) peut ensuite être “assemblé” à un autre maillage (contenant par exemple des mailles ",
    "enTitle": "Operator DEFI_MAILLAGE",
    "enLead": "u4.23.01 Operator DEFI MAILLAGE 1 Purpose Define a mesh with the help of macro-elements. This command makes it possible to define a new mesh from static or dynamic macro-elements. This new mesh (containing only the geometric supports of the macro-elements) can then be \"assembled\" with another mesh (containing for example \"classical\" mesh cells) thanks to the"
  },
  "u4.23.02": {
    "frTitle": "Opérateur CREA_MAILLAGE",
    "frLead": "u4.23.02 Opérateur CREA MAILLAGE 1 But Créer une structure de données de type maillage à partir d’un autre maillage. Le nouveau maillage est créé à partir d’un maillage existant en dupliquant, en détruisant, en transformant ou en éclatant des mailles ou en recopiant un maillage (cas de geom fibre). Produit une structure de données maillage. 2 Syntaxe 3 Risqu",
    "enTitle": "Operator CREA_MAILLAGE",
    "enLead": "u4.23.02 Operator CREA MAILLAGE 1 Purpose Create a data structure of type maillage from another mesh. The new mesh is created from an existing mesh by duplicating, destroying, transforming or exploding mesh cells, or by copying a mesh (the case of geom fibre). Produces a data structure maillage. 2 Syntax 3 Risk of producing a non-conforming mesh A certain nu"
  },
  "u4.23.03": {
    "frTitle": "Opérateur ASSE_MAILLAGE",
    "frLead": "u4.23.03 Opérateur ASSE MAILLAGE 1 But Assembler deux maillages pour en former un nouveau. Les deux maillages à assembler peuvent provenir des opérateurs: LIRE MAILLAGE U4.21.01, DEFI MAILLAGE U4.23.01, ASSE MAILLAGE U4.23.03, ... C’est-à-dire qu’ils peuvent contenir des mailles ordinaires ou des super-mailles porteuses de macro‑éléments. Produit une structu",
    "enTitle": "Operator ASSE_MAILLAGE",
    "enLead": "u4.23.03 Operator ASSE MAILLAGE 1 Purpose Assemble two meshes to form a new one. The two meshes to be assembled may come from the operators: LIRE MAILLAGE U4.21.01, DEFI MAILLAGE U4.23.01, ASSE MAILLAGE U4.23.03, ... That is to say that they may contain ordinary mesh cells or super mesh cells carrying macro-elements. Produces a data structure of type maillag"
  },
  "u4.23.04": {
    "frTitle": "Opérateur MODI_MAILLAGE",
    "frLead": "u4.23.04 Opérateur MODI MAILLAGE 1 But Effectuer des modifications sur un maillage existant. Les possibilités de modifications sont: - réorienter des mailles de bord servant à appliquer une pression, - vérifier l’orientation des normales sur les éléments de coque, - réorienter les mailles d’une mono-couche d’éléments de joint, - réorienter l'axe x dans l'esp",
    "enTitle": "Operator MODI_MAILLAGE",
    "enLead": "u4.23.04 Operator MODI MAILLAGE 1 Purpose Carry out modifications on an existing mesh. The possible modifications are: - reorient boundary mesh cells used to apply a pressure, - check the orientation of the normals on the shell elements, - reorient the mesh cells of a single layer of joint elements, - reorient the x-axis in the parametric space of the biquad"
  },
  "u4.24.01": {
    "frTitle": "Opérateur DEFI_SQUELETTE",
    "frLead": "u4.24.01 Opérateur DEFI SQUELETTE 1 But Définir le maillage de visualisation des résultats d’une sous-structuration dynamique. Dans le cas de la sous-structuration dynamique cyclique, le maillage est créé en utilisant tout ou partie des mailles (maillage de visualisation) de la structure secteur puis en la répétant de façon cyclique pour reconstituer la stru",
    "enTitle": "Operator DEFI_SQUELETTE",
    "enLead": "u4.24.01 Operator DEFI SQUELETTE 1 Purpose Define the visualisation mesh of the results of a dynamic substructuring. In the case of cyclic dynamic substructuring, the mesh is created by using all or part of the mesh cells (visualisation mesh) of the sector structure and then repeating it cyclically in order to reconstitute the global structure. In the case o"
  },
  "u4.24.02": {
    "frTitle": "Opérateur DEFI_GRILLE",
    "frLead": "u4.24.02 Opérateur DEFI GRILLE 1 But Définir une grille à partir d'un maillage. Une grille est un type particulier de maillage pour lequel les noeuds sont tous alignés selon les directions d'une base locale. L’opérateur produit un concept de type grille. 2 Syntaxe 3 Opérandes 3.1 Opérande MAILLAGE ma: maillage à utiliser pour la définition de la grille Le ma",
    "enTitle": "Operator DEFI_GRILLE",
    "enLead": "u4.24.02 Operator DEFI GRILLE 1 Purpose Define a grid from a mesh. A grid is a particular type of mesh for which the nodes are all aligned along the directions of a local basis. The operator produces a concept of type grille. 2 Syntax 3 Operands 3.1 Operand MAILLAGE ma: mesh to be used for the definition of the grid The mesh ma must be regular, such that all"
  },
  "u4.25.01": {
    "frTitle": "Opérateur DEFI_FLUI_STRU",
    "frLead": "u4.25.01 Opérateur DEFI FLUI STRU 1 But Définir les caractéristiques nécessaires à l’étude dynamique d’une structure sous écoulement. Par le choix d’un des mots-clés facteurs, l’utilisateur spécifie le type de configuration \"structure‑écoulement\" étudiée: faisceau de tubes sous écoulement transverse ou axial, grappe de commande, coques co-axiales. Suivant le",
    "enTitle": "Operator DEFI_FLUI_STRU",
    "enLead": "u4.25.01 Operator DEFI FLUI STRU 1 Purpose Define the characteristics necessary for the dynamic study of a structure under flow. By the choice of one of the factor keywords, the user specifies the type of \"structure-flow\" configuration studied: tube bundle under cross-flow or axial flow, control-rod cluster, coaxial shells. Depending on the type of configura"
  },
  "u4.26.01": {
    "frTitle": "Opérateur DEFI_GEOM_FIBRE",
    "frLead": "u4.26.01 Opérateur DEFI GEOM FIBRE 1 But Dans le cadre d’une modélisation de type multifibres, il y a deux “niveaux” de modélisation : - la modélisation dite “longitudinale” représentée par une poutre (de support géométrique SEG2) - la modélisation plane de la section (perpendiculairement au SEG2). L’opérateur DEFI GEOM FIBRE permet de définir la géométrie d",
    "enTitle": "Operator DEFI_GEOM_FIBRE",
    "enLead": "u4.26.01 Operator DEFI GEOM FIBRE 1 Purpose Within the framework of a multifibre modelling, there are two \"levels\" of modelling: - the so-called \"longitudinal\" modelling represented by a beam (with geometrical support SEG2) - the plane modelling of the section (perpendicularly to the SEG2). The operator DEFI GEOM FIBRE makes it possible to define the geometr"
  },
  "u4.31.01": {
    "frTitle": "Opérateur DEFI_CONSTANTE",
    "frLead": "u4.31.01 Opérateur DEFI CONSTANTE 1 But Définir la valeur d'une grandeur invariante. Cet opérateur est une facilité offerte chaque fois qu'un concept du type fonction est attendu et que la donnée à introduire est constante. Cela permet de définir, par exemple, des matériaux de caractéristiques indépendantes de la température pour des commandes qui permettent",
    "enTitle": "Operator DEFI_CONSTANTE",
    "enLead": "u4.31.01 Operator DEFI CONSTANTE 1 Purpose Define the value of an invariant quantity (grandeur). This operator is a convenience offered whenever a concept of type fonction is expected and the datum to be introduced is constant. This makes it possible to define, for example, materials with characteristics independent of the temperature, for commands which mak"
  },
  "u4.31.02": {
    "frTitle": "Opérateur DEFI_FONCTION",
    "frLead": "u4.31.02 Opérateur DEFI FONCTION 1 But Définir une fonction réelle ou complexe d’une variable réelle. Cet opérateur permet de définir, par exemple, des caractéristiques matériaux fonction de la température, ou des conditions aux limites qui dépendent d’une variable d’espace ou du temps. Le concept produit par cet opérateur est de type fonction. 2 Syntaxe 3 O",
    "enTitle": "Operator DEFI_FONCTION",
    "enLead": "u4.31.02 Operator DEFI FONCTION 1 Purpose Define a real or complex function of a real variable. This operator makes it possible to define, for example, material characteristics as a function of temperature, or boundary conditions which depend on a space variable or on time. The concept produced by this operator is of type fonction. 2 Syntax 3 Operands 3.1 Op"
  },
  "u4.31.03": {
    "frTitle": "Opérateur DEFI_NAPPE",
    "frLead": "u4.31.03 Opérateur DEFI NAPPE 1 But Définir une fonction réelle de deux variables réelles. Une nappe définit N fonctions pour N valeurs d’un paramètre. Cet opérateur permet de définir, par exemple, des conditions aux limites dépendant d'une variable d'espace et du temps ou de deux variables d'espace ou des données matériaux (par exemple des courbes de tracti",
    "enTitle": "Operator DEFI_NAPPE",
    "enLead": "u4.31.03 Operator DEFI NAPPE 1 Purpose Define a real function of two real variables. A nappe defines N functions for N values of a parameter. This operator makes it possible to define, for example, boundary conditions depending on a space variable and on time, or on two space variables, or material data (for example traction curves as a function of temperatu"
  },
  "u4.31.05": {
    "frTitle": "Opérateur FORMULE",
    "frLead": "u4.31.05 Opérateur FORMULE 1 But Définir une formule à valeur réelle ou complexe à partir de son expression mathématique. La formule sera utilisable dans une commande ultérieure comme argument de type fonction/formule ou évaluée avec des valeurs particulières des variables. Dans de nombreuses applications, on peut tabuler cette formule pour des valeurs parti",
    "enTitle": "Operator FORMULE",
    "enLead": "u4.31.05 Operator FORMULE 1 Purpose Define a real-valued or complex-valued formula from its mathematical expression. The formula will be usable in a later command as an argument of type fonction/formule, or evaluated with particular values of the variables. In many applications, one may tabulate this formula for particular values by the command CALC FONC INT"
  },
  "u4.32.01": {
    "frTitle": "Opérateur CALC_FONC_INTERP",
    "frLead": "u4.32.01 Opérateur CALC FONC INTERP 1 But Construire un concept de type fonction ou fonction c à partir d'une fonction FORMULE à 1 ou 2 variables. Peuvent être définies des fonctions réelles à variables réelles, des fonctions complexes à variables réelles et des nappes. On peut également produire une nouvelle fonction réelle ou complexe, ou une nappe en inte",
    "enTitle": "Operator CALC_FONC_INTERP",
    "enLead": "u4.32.01 Operator CALC FONC INTERP 1 Purpose Build a concept of type fonction or fonction c from a FORMULE function with 1 or 2 variables. Real functions of real variables, complex functions of real variables, and nappes may be defined. One can also produce a new real or complex function, or a nappe, by interpolating another function of the same type (real, "
  },
  "u4.32.02": {
    "frTitle": "Opérateur LIRE_FONCTION",
    "frLead": "u4.32.02 Opérateur LIRE FONCTION 1 But Lire un fichier de données contenant des valeurs réelles représentant une fonction. Produit un concept de type fonction U4.31.02 ou nappe U4.31.03. 2 Syntaxe 3 Opérandes 3.1 Opérande UNITE Entier, numéro logique de l'unité de lecture, définissant le fichier dans lequel sont lues les données. 3.2 Opérande FORMAT Indique ",
    "enTitle": "Operator LIRE_FONCTION",
    "enLead": "u4.32.02 Operator LIRE FONCTION 1 Purpose Read a data file containing real values representing a function. Produces a concept of type fonction U4.31.02 or nappe U4.31.03. 2 Syntax 3 Operands 3.1 Operand UNITE Integer, logical unit number for reading, defining the file in which the data are read. 3.2 Operand FORMAT Indicates the format of the file to be read."
  },
  "u4.32.03": {
    "frTitle": "Opérateur RECU_FONCTION",
    "frLead": "u4.32.03 Opérateur RECU FONCTION 1 But Extraire sous forme d'une fonction l’évolution d’une grandeur en fonction d’une autre. Si l’extraction s’effectue à partir d’une structure de données resultat, ou d’un champ de grandeur cham gd, ou d’un resu gene, la fonction produite correspond à l’évolution temporelle d’une composante en un nœud ou en un point de Gaus",
    "enTitle": "Operator RECU_FONCTION",
    "enLead": "u4.32.03 Operator RECU FONCTION 1 Purpose Extract, in the form of a function, the evolution of one quantity as a function of another. If the extraction is carried out from a data structure resultat, or from a field of a quantity (grandeur) cham gd, or from a resu gene, the function produced corresponds to the time evolution of a component at a node or at a G"
  },
  "u4.32.04": {
    "frTitle": "Opérateur CALC_FONCTION",
    "frLead": "u4.32.04 Opérateur CALC FONCTION 1 But Effectuer des opérations mathématiques sur des structures de données de type fonction. L'opérateur permet de réaliser des opérations générales sur les fonctions (intégration, dérivée, valeur absolue, combinaison, régression polynomiale…) et des opérations dédiées au traitement de signal et au séisme (calcul de FFT, liss",
    "enTitle": "Operator CALC_FONCTION",
    "enLead": "u4.32.04 Operator CALC FONCTION 1 Purpose Carry out mathematical operations on data structures of type fonction. The operator makes it possible to carry out general operations on functions (integration, derivative, absolute value, combination, polynomial regression…) and operations dedicated to signal processing and to the earthquake (calculation of the FFT,"
  },
  "u4.32.05": {
    "frTitle": "Opérateur INFO_FONCTION",
    "frLead": "u4.32.05 Opérateur INFO FONCTION 1 But Effectuer des opérations mathématiques sur des structures de données de type fonction. Les opérations suivantes sont actuellement disponibles : - la recherche des maximums d'une fonction, - le calcul de la norme {L} {2} d’une fonction, - l’écart type d’une fonction, - la valeur RMS d’une fonction, - la valeur de l'indic",
    "enTitle": "Operator INFO_FONCTION",
    "enLead": "u4.32.05 Operator INFO FONCTION 1 Purpose Carry out mathematical operations on data structures of type fonction. The following operations are currently available: - the search for the maxima of a function, - the calculation of the {L} {2} norm of a function, - the standard deviation of a function, - the RMS value of a function, - the value of the earthquake "
  },
  "u4.32.11": {
    "frTitle": "Macro-commande MACR_SPECTRE",
    "frLead": "u4.32.11 Macro-commande MACR SPECTRE 1 But Cette macro-commande permet un calcul de post-traitement rapide et efficace pour déterminer les spectres de plancher de tout bâtiment après une analyse dynamique sismique. Elle peut par exemple être utilisée après un calcul dynamique transitoire d'un bâtiment au séisme, où les connections entre le sol et le radier e",
    "enTitle": "Macro-command MACR_SPECTRE",
    "enLead": "u4.32.11 Macro-command MACR SPECTRE 1 Purpose This macro-command makes it possible to carry out a fast and efficient post-processing analysis in order to determine the floor spectra of any building after a seismic dynamic analysis. It may for example be used after a transient dynamic analysis of a building under earthquake loading, in which the connections b"
  },
  "u4.32.12": {
    "frTitle": "Macro-commande CALC_SPECTRE_IPM",
    "frLead": "u4.32.12 Macro-commande CALC SPECTRE IPM 1 But Cette macro-commande permet un calcul de post-traitement rapide et efficace pour déterminer les spectres de plancher de tout bâtiment après une analyse dynamique sismique en prenant en compte l'interaction du plancher avec les masses des équipements ( cf. documentation R4.05.08). Elle peut par exemple être utili",
    "enTitle": "Macro-command CALC_SPECTRE_IPM",
    "enLead": "u4.32.12 Macro-command CALC SPECTRE IPM 1 Purpose This macro-command makes it possible to carry out a fast and efficient post-processing analysis in order to determine the floor spectra of any building after a seismic dynamic analysis, taking into account the interaction of the floor with the masses of the equipment ( cf. document R4.05.08). It may for examp"
  },
  "u4.32.13": {
    "frTitle": "Macro-commande LISS_SPECTRE",
    "frLead": "u4.32.13 Macro-commande LISS SPECTRE 1 But Cette macro-commande permet d’effectuer des lissages de spectres à partir de tables issues de MACR SPECTRE ou de nappes définies par l’utilisateur, grâce à des appels à CALC FONCTION/LISS ENVELOPPE. Les tables issues de MACR SPECTRE sont transformées en nappes (fréquence, amortissement) avant regroupement et lissage",
    "enTitle": "Macro-command LISS_SPECTRE",
    "enLead": "u4.32.13 Macro-command LISS SPECTRE 1 Purpose This macro-command makes it possible to smooth spectra from tables coming from MACR SPECTRE or from nappes defined by the user, by means of calls to CALC FONCTION/LISS ENVELOPPE. The tables coming from MACR SPECTRE are transformed into nappes (frequency, damping) before grouping and smoothing. The spectra supplie"
  },
  "u4.32.21": {
    "frTitle": "Opérateur CALC_SPEC",
    "frLead": "u4.32.21 Opérateur CALC SPEC 1 But Construire tout ou partie d’une matrice inter spectrale ou de transfert à partir de fonctions ou d’une table de fonctions. Lorsque l’utilisateur choisi de rentrer une série de fonctions, celles ci sont utilisées complètement. Lorsque l’utilisateur choisi de rentrer une table fonction, les fonctions stockées peuvent être déc",
    "enTitle": "Operator CALC_SPEC",
    "enLead": "u4.32.21 Operator CALC SPEC 1 Purpose Build all or part of a cross-spectral or transfer matrix from functions or from a table of functions. When the user chooses to enter a series of functions, these are used in full. When the user chooses to enter a table fonction, the stored functions may be cut up, averaged and windowed, with a given overlap. To clarify t"
  },
  "u4.33.01": {
    "frTitle": "Opérateur IMPR_FONCTION",
    "frLead": "u4.33.01 Opérateur IMPR FONCTION 1 But Imprimer le contenu d’objets de type fonction ou liste de réels dans un fichier destiné à un traceur de courbes. Remarque : Les tables, elles, sont imprimées avec la commande IMPR TABLE . 2 Syntaxe 3 Opérandes 3.1 Présentation des courbes Un ensemble d’opérandes facultatifs permet de définir la présentation de la courbe",
    "enTitle": "Operator IMPR_FONCTION",
    "enLead": "u4.33.01 Operator IMPR FONCTION 1 Purpose Print the content of objects of type fonction or list of reals in a file intended for a curve plotter. Note: Tables, for their part, are printed with the command IMPR TABLE . 2 Syntax 3 Operands 3.1 Presentation of the curves A set of optional operands makes it possible to define the presentation of the curve. All ha"
  },
  "u4.33.02": {
    "frTitle": "Opérateur CREA_TABLE",
    "frLead": "u4.33.02 Opérateur CREA TABLE 1 But Créer une table. Cette commande permet de créer une table à partir d'une fonction ou de listes (de nombres entiers, ou réels, de chaînes de caractères, de concepts) ou encore d'un champ réel. La table créée possède deux paramètres au moins et autant de lignes que l'utilisateur le souhaite. Les listes utilisées pour générer",
    "enTitle": "Operator CREA_TABLE",
    "enLead": "u4.33.02 Operator CREA TABLE 1 Purpose Create a table. This command makes it possible to create a table from a function or from lists (of integers, or reals, of character strings, of concepts) or else from a real field. The table created has at least two parameters and as many lines as the user wishes. The lists used to generate the table must have the same "
  },
  "u4.33.03": {
    "frTitle": "Procédure CALC_TABLE",
    "frLead": "u4.33.03 Procédure CALC TABLE 1 But Manipuler les données des tables à la manière d'un tableur. La commande permet d'effectuer des opérations sur les données des tables. Les opérations suivantes sont actuellement disponibles : - Concaténer / Combiner deux tables, - Appliquer une formule, - Renommer des paramètres, - Filtrer les lignes selon certains critères",
    "enTitle": "Procedure CALC_TABLE",
    "enLead": "u4.33.03 Procedure CALC TABLE 1 Purpose Manipulate the data of tables in the manner of a spreadsheet. The command makes it possible to carry out operations on the data of the tables. The following operations are currently available: - Concatenate / Combine two tables, - Apply a formula, - Rename parameters, - Filter the lines according to certain criteria, -"
  },
  "u4.34.01": {
    "frTitle": "Opérateur DEFI_LIST_REEL",
    "frLead": "u4.34.01 Opérateur DEFI LIST REEL 1 But Créer une liste de réels strictement croissante. La liste peut être donnée \"in extenso\" par l’utilisateur, ou bien, elle peut être formée à partir de sous listes définies à \"pas constant\". Produit une structure de données de type listr8. 2 Syntaxe 3 Opérandes 3.1 Opérande VALE Liste des réels qui formeront la structure",
    "enTitle": "Operator DEFI_LIST_REEL",
    "enLead": "u4.34.01 Operator DEFI LIST REEL 1 Purpose Create a strictly increasing list of reals. The list may be given “in extenso” by the user, or else it may be formed from sub-lists defined at “constant step”. Produces a data structure of type listr8. 2 Syntax 3 Operands 3.1 Operand VALE List of the reals which will form the resulting listr8 data structure. This li"
  },
  "u4.34.02": {
    "frTitle": "Opérateur DEFI_LIST_ENTI",
    "frLead": "u4.34.02 Opérateur DEFI LIST ENTI 1 But Créer une liste d'entiers strictement croissants. La liste peut être donnée \"in extenso\" par l’utilisateur, ou bien, elle peut être formée à partir de sous listes définies à \"pas constant\". La liste peut être constituée par extraction des numéros d'ordre d'une structure de données résultat. Produit une structure de don",
    "enTitle": "Operator DEFI_LIST_ENTI",
    "enLead": "u4.34.02 Operator DEFI LIST ENTI 1 Purpose Create a strictly increasing list of integers. The list may be given “in extenso” by the user, or else it may be formed from sub-lists defined at “constant step”. The list may be built by extraction of the order numbers of a result data structure. Produces a data structure of type listis. 2 Syntax 3 Operands 3.1 Def"
  },
  "u4.34.03": {
    "frTitle": "Opérateur DEFI_LIST_INST",
    "frLead": "u4.34.03 Opérateur DEFI LIST INST Définir la liste d'instants de calcul, ainsi que sa gestion pour les algorithmes de résolution itératifs (commandes STAT NON LINE, DYNA NON LINE, MECA NON LINE et THER NON LINE ) - possibilités de re-découpage du pas de temps en cas d'échec, - possibilités d'adaptation du pas de temps. Produit une structure de données list i",
    "enTitle": "Operator DEFI_LIST_INST",
    "enLead": "u4.34.03 Operator DEFI LIST INST To define the list of analysis time instants, as well as its management for the iterative solution algorithms (commands STAT NON LINE, DYNA NON LINE, MECA NON LINE and THER NON LINE) - possibilities of recutting the time step in the event of failure, - possibilities of adapting the time step. Produces a data structure list in"
  },
  "u4.34.04": {
    "frTitle": "Opérateur DEFI_LIST_FREQ",
    "frLead": "u4.34.04 Opérateur DEFI LIST FREQ 1 But Créer une liste de réels en raffinant éventuellement autour de valeurs de fréquences renseignées par l'utilisateur. Produit une structure de données de type listr8. 2 Syntaxe 3 Opérandes 3.1 Opérandes VALE, DEBUT, INTERVALLE, JUSQU A, TITRE, INFO Ces mots-clés sont directement utilisés par DEFI LIST REEL pour définir l",
    "enTitle": "Operator DEFI_LIST_FREQ",
    "enLead": "u4.34.04 Operator DEFI LIST FREQ 1 Purpose To create a list of reals, possibly refining around frequency values supplied by the user. It produces a data structure of type listr8. 2 Syntax 3 Operands 3.1 Operands VALE, DEBUT, INTERVALLE, JUSQU A, TITRE, INFO These keywords are used directly by DEFI LIST REEL to define the initial list of frequencies. Note All"
  },
  "u4.35.01": {
    "frTitle": "Opérateur DEFI_FONC_FLUI",
    "frLead": "u4.35.01 Opérateur DEFI FONC FLUI 1 But Définir un profil de vitesse d'écoulement fluide le long d'une poutre. Profils correspondants à des profils \"types\" issus de résultats expérimentaux et utilisés dans le cadre d'un calcul dynamique avec prise en compte de forces fluide-élastiques. Les vitesses sont calculées aux nœuds pour lesquels on recherche dans le ",
    "enTitle": "Operator DEFI_FONC_FLUI",
    "enLead": "u4.35.01 Operator DEFI FONC FLUI 1 Purpose To define a fluid flow-velocity profile along a beam. Profiles corresponding to “standard” profiles coming from experimental results and used within a dynamic analysis taking fluid-elastic forces into account. The velocities are computed at the nodes for which one looks up, in the mesh concept, the value of the asso"
  },
  "u4.35.02": {
    "frTitle": "Opérateur FONC_FLUI_STRU",
    "frLead": "u4.35.02 Opérateur FONC FLUI STRU 1 But Créer une fonction constante paramétrée par l’abscisse curviligne. Cette fonction donne la valeur du coefficient de masse ajoutée pour une configuration du type «faisceau de tubes sous écoulement transverse». Cette fonction est utilisée en aval par l’opérateur DEFI MATERIAU U4.43.01, mot-clé facteur ELAS FLUI. Produit ",
    "enTitle": "Operator FONC_FLUI_STRU",
    "enLead": "u4.35.02 Operator FONC FLUI STRU 1 Purpose To create a constant function parameterised by the curvilinear abscissa. This function gives the value of the added-mass coefficient for a configuration of the type “tube bundle under transverse flow”. This function is used downstream by the operator DEFI MATERIAU U4.43.01, factor keyword ELAS FLUI. It produces a co"
  },
  "u4.36.01": {
    "frTitle": "Opérateur LIRE_INTE_SPEC",
    "frLead": "u4.36.01 Opérateur LIRE INTE SPEC 1 But Lire sur un fichier externe des fonctions complexes pour créer une matrice interspectrale. Le fichier utilisateur est codé en Ascii. Les fonctions lues sont de type fonction C. Le concept produit est de type interspectre. 2 Syntaxe 3 Opérandes 3.1 Opérande UNITE Numéro d'unité logique du fichier externe sur lequel la l",
    "enTitle": "Operator LIRE_INTE_SPEC",
    "enLead": "u4.36.01 Operator LIRE INTE SPEC 1 Purpose To read complex functions from an external file in order to create an interspectral matrix. The user file is coded in Ascii. The functions read are of type fonction C. The concept produced is of type interspectre. 2 Syntax 3 Operands 3.1 Operand UNITE Logical unit number of the external file on which the reading is "
  },
  "u4.36.02": {
    "frTitle": "Opérateur DEFI_INTE_SPEC",
    "frLead": "u4.36.02 Opérateur DEFI INTE SPEC 1 But Définir une matrice de densité spectrale (on dit aussi: matrice interspectrale). Les termes de la matrice sont définis par : - des constantes (bruit blanc), - des fonctions complexes existantes, - la formule analytique de KANAI-TAJIMI. Produit une structure de données de type interspectre. 2 Syntaxe 3 Opérandes 3.1 Opé",
    "enTitle": "Operator DEFI_INTE_SPEC",
    "enLead": "u4.36.02 Operator DEFI INTE SPEC 1 Purpose To define a spectral density matrix (one also says: interspectral matrix). The terms of the matrix are defined by: - constants (white noise), - existing complex functions, - the analytical formula of KANAI-TAJIMI. It produces a data structure of type interspectre. 2 Syntax 3 Operands 3.1 Operand DIMENSION Dimension "
  },
  "u4.36.03": {
    "frTitle": "Opérateur CALC_INTE_SPEC",
    "frLead": "u4.36.03 Opérateur CALC INTE SPEC 1 But Calculer une fonction de densité spectrale à partir d’un signal temporel (fonction du temps). La densité spectrale (ou autospectre) est la moyenne arithmétique d'un certain nombre de spectres calculée sur différents blocs temporels du signal. Si on donne plusieurs signaux on obtient une matrice de densité spectrale (ou",
    "enTitle": "Operator CALC_INTE_SPEC",
    "enLead": "u4.36.03 Operator CALC INTE SPEC 1 Purpose To compute a spectral density function from a time signal (function of time). The spectral density (or auto-spectrum) is the arithmetic mean of a certain number of spectra computed on different time blocks of the signal. If several signals are given, one obtains a spectral density matrix (or interspectrum). It produ"
  },
  "u4.36.04": {
    "frTitle": "Opérateur GENE_ACCE_SEISME",
    "frLead": "u4.36.04 Opérateur GENE ACCE SEISME 1 But Cet opérateur permet de générer des accélérogrammes sismiques artificiels pour des calculs dynamiques transitoires. Il permet de générer deux types de signaux: 1. Signaux sismiques non stationnaires selon le modèle de densité spectral de puissance (DSP) de Kanai-Tajimi évolutif, option DSP; 2. Signaux sismiques compa",
    "enTitle": "Operator GENE_ACCE_SEISME",
    "enLead": "u4.36.04 Operator GENE ACCE SEISME 1 Purpose This operator makes it possible to generate artificial seismic accelerograms for transient dynamic analyses. It makes it possible to generate two types of signals: 1. Non-stationary seismic signals according to the evolutionary Kanai-Tajimi power spectral density (DSP) model, option DSP; 2. Seismic signals compati"
  },
  "u4.36.05": {
    "frTitle": "Opérateur GENE_FONC_ALEA",
    "frLead": "u4.36.05 Opérateur GENE FONC ALEA 1 But Générer une trajectoire d'un processus stochastique multi-varié mono-dimensionnel (i.e. à plusieurs composantes et indexé sur une seule variable), stationnaire, de moyenne nulle à partir de sa matrice de densité spectrale (matrice interspectrale). Les trajectoires du processus stochastique sont des fonctions temporelle",
    "enTitle": "Operator GENE_FONC_ALEA",
    "enLead": "u4.36.05 Operator GENE FONC ALEA 1 Purpose To generate a trajectory of a multivariate one-dimensional stochastic process (i.e. with several components and indexed on a single variable), stationary, with zero mean, from its spectral density matrix (interspectral matrix). The trajectories of the stochastic process are time functions which then make it possible"
  },
  "u4.36.08": {
    "frTitle": "Macro-commande IMPR_ACCE_SEISME",
    "frLead": "u4.36.08 Macro-commande IMPR ACCE SEISME 1 But Cette macro-commande vise à automatiser le post-traitement des données issues de la commande GENE ACCE SEISME. Elle effectue les tâches suivantes: - impression d’une figure par accélérogramme, c’est-à-dire par direction et par tirage; - impression d’une figure de tous les accélérogrammes pour chaque direction; -",
    "enTitle": "Macro-command IMPR_ACCE_SEISME",
    "enLead": "u4.36.08 Macro-command IMPR ACCE SEISME 1 Purpose This macro-command aims to automate the post-processing of the data coming from the command GENE ACCE SEISME. It carries out the following tasks: - printing of one figure per accelerogram, that is, per direction and per draw; - printing of one figure of all the accelerograms for each direction; - computation "
  },
  "u4.36.09": {
    "frTitle": "Opérateur DEFI_PROP_ALEA",
    "frLead": "u4.36.09 Opérateur DEFI PROP ALEA 1 But Cet opérateur permet de définir des champs aléatoires pour prendre en compte la variabilité spatiale des propriétés mécanique comme le module d'Young (par exemple du sol ou du béton). L'opérateur construit des expressions analytiques des champs aléatoires par décomposition de Karhunen-Loeve. Les champs suivent une loi ",
    "enTitle": "Operator DEFI_PROP_ALEA",
    "enLead": "u4.36.09 Operator DEFI PROP ALEA 1 Purpose This operator makes it possible to define random fields in order to take into account the spatial variability of mechanical properties such as Young's modulus (for example of the soil or of the concrete). The operator builds analytical expressions of the random fields by a Karhunen-Loeve decomposition. The fields fo"
  },
  "u4.41.01": {
    "frTitle": "Opérateur AFFE_MODELE",
    "frLead": "u4.41.01 Opérateur AFFE MODELE 1 But Définir le phénomène physique modélisé (mécanique, thermique ou acoustique) et le type d’éléments finis. Cet opérateur permet d'affecter des modélisations sur tout ou partie du maillage, ce qui définit: - les degrés de liberté sur les nœuds (et l’équation ou les équations de conservation associées), - les types d’éléments",
    "enTitle": "Operator AFFE_MODELE",
    "enLead": "u4.41.01 Operator AFFE MODELE 1 Purpose Define the physical phenomenon modelled (mechanical, thermal or acoustic) and the type of finite elements. This operator makes it possible to assign modellings over all or part of the mesh, which defines: - the degrees of freedom on the nodes (and the associated conservation equation or equations), - the types of finit"
  },
  "u4.41.02": {
    "frTitle": "Opérateur MODI_MODELE",
    "frLead": "u4.41.02 Opérateur MODI MODELE 1 But Cet opérateur permet de redéfinir le mode de répartition des éléments finis d'un modèle pour le calcul parallèle. La partition des éléments finis est stockée dans la SD MODELE (conservée sur la base globale). Quand on est en poursuite, cela implique de continuer avec le même nombre de processeurs. Ce qui n'est pas forcéme",
    "enTitle": "Operator MODI_MODELE",
    "enLead": "u4.41.02 Operator MODI MODELE 1 Purpose This operator makes it possible to redefine the distribution mode of the finite elements of a model for the parallel analysis. The partition of the finite elements is stored in the SD MODELE (kept on the global database). When one is in restart, this implies continuing with the same number of processors. This is not ne"
  },
  "u4.41.11": {
    "frTitle": "Opérateur MODI_MODELE_XFEM",
    "frLead": "u4.41.11 Opérateur MODI MODELE XFEM 1 But Créer un nouveau modèle par l’introduction d’éléments finis spécifiques pouvant être traversés par une fissure de type X-FEM à partir d'un modèle existant. Cet opérateur permet de modifier certains éléments finis classiques en éléments finis enrichis; les éléments à modifier ont été déterminés au préalable par l’opér",
    "enTitle": "Operator MODI_MODELE_XFEM",
    "enLead": "u4.41.11 Operator MODI MODELE XFEM 1 Purpose Create a new model by introducing specific finite elements which can be crossed by a crack of X-FEM type, starting from an existing model. This operator makes it possible to modify certain classical finite elements into enriched finite elements; the elements to be modified have been determined beforehand by the op"
  },
  "u4.42.01": {
    "frTitle": "Opérateur AFFE_CARA_ELEM",
    "frLead": "u4.42.01 Opérateur AFFE CARA ELEM 1 But Affecter à des éléments de structure des caractéristiques géométriques et matérielles. Les données géométriques affectées sont complémentaires aux données de maillage. Parmi les caractéristiques traitées, citons: - pour les éléments de type coque: l’épaisseur, une direction de référence dans le plan tangent, - pour les",
    "enTitle": "Operator AFFE_CARA_ELEM",
    "enLead": "u4.42.01 Operator AFFE CARA ELEM 1 Purpose Assign geometric and material characteristics to structural elements. The assigned geometric data are complementary to the mesh data. Among the characteristics treated, one may cite: - for shell-type elements: the thickness, a reference direction in the tangent plane, - for beam-type elements: the characteristics of"
  },
  "u4.42.02": {
    "frTitle": "Macro-commande MACR_CARA_POUTRE",
    "frLead": "u4.42.02 Macro-commande MACR CARA POUTRE Cette macro commande permet de calculer les caractéristiques d’une section transversale de poutre à partir d’un maillage 2D de sa section transversale. Elle permet de construire une table de valeurs, utilisable par la commande AFFE CARA ELEM U4.42.01 pour affecter des caractéristiques de sections droites à tous les él",
    "enTitle": "Macro-command MACR_CARA_POUTRE",
    "enLead": "u4.42.02 Macro-command MACR CARA POUTRE This macro-command makes it possible to compute the characteristics of a beam cross-section from a 2D mesh of its cross-section. It makes it possible to build a table of values, usable by the command AFFE CARA ELEM U4.42.01 in order to assign straight-section characteristics to all the beam finite elements (modellings "
  },
  "u4.42.03": {
    "frTitle": "Opérateur DEFI_COMPOSITE",
    "frLead": "u4.42.03 Opérateur DEFI COMPOSITE 1 But Déterminer les caractéristiques matériaux homogénéisées d’une coque multi-couche à partir des caractéristiques de chaque couche. Sont prises en compte les caractéristiques suivantes: - épaisseur, - type du matériau constitutif, - orientation des fibres par rapport à un axe de référence. Cette commande produit une struc",
    "enTitle": "Operator DEFI_COMPOSITE",
    "enLead": "u4.42.03 Operator DEFI COMPOSITE 1 Purpose Determine the homogenised material characteristics of a multilayer shell from the characteristics of each layer. The following characteristics are taken into account: - thickness, - type of the constituent material, - orientation of the fibres with respect to a reference axis. This command produces a data structure "
  },
  "u4.42.04": {
    "frTitle": "Macro-commande DEFI_CABLE_BP",
    "frLead": "u4.42.04 Macro-commande DEFI CABLE BP Résumé L’objectif de cette commande est de calculer les profils initiaux de tension le long des câbles de précontrainte d’une structure béton. Les données du calcul sont la tension appliquée aux extrémités et d’autres paramètres caractéristiques des ancrages et des matériaux. Les relations utilisées sont celles prescrite",
    "enTitle": "Macro-command DEFI_CABLE_BP",
    "enLead": "u4.42.04 Macro-command DEFI CABLE BP Summary The objective of this command is to compute the initial tension profiles along the prestressing cables of a concrete structure. The data of the analysis are the tension applied at the ends and other parameters characteristic of the anchorages and of the materials. The relations used are those prescribed by the BPE"
  },
  "u4.42.05": {
    "frTitle": "Macro-commande CALC_PRECONT",
    "frLead": "u4.42.05 Macro-commande CALC PRECONT Résumé Cette macro-commande permet de mettre en tension les câbles dans une structure, de telle sorte que, à l’issue de ce calcul, la structure soit en équilibre et la tension soit égale à la tension donnée par les règles BPEL91, calculée par la commande DEFI CABLE BP. Elle permet également: - d’appliquer la précontrainte",
    "enTitle": "Macro-command CALC_PRECONT",
    "enLead": "u4.42.05 Macro-command CALC PRECONT Summary This macro-command makes it possible to tension the cables in a structure, in such a way that, at the end of this analysis, the structure is in equilibrium and the tension is equal to the tension given by the BPEL91 rules, computed by the command DEFI CABLE BP. It also makes it possible: - to apply the prestressing"
  },
  "u4.42.06": {
    "frTitle": "Opérateur DEFI_GLRC",
    "frLead": "u4.42.06 Opérateur DEFI GLRC 1 But L'opérateur DEFI GLRC permet de définir les paramètres des modèles de comportement de béton armé GLRC DAMAGE[R7.01.31] et GLRC DM[R7.01.32]. Il permet de déterminer les caractéristiques du béton armé homogénéisées à partir des propriétés du béton et de plusieurs types d'armature (armatures passives, câbles de précontrainte,",
    "enTitle": "Operator DEFI_GLRC",
    "enLead": "u4.42.06 Operator DEFI GLRC 1 Purpose The operator DEFI GLRC makes it possible to define the parameters of the reinforced-concrete constitutive models GLRC DAMAGE [R7.01.31] and GLRC DM [R7.01.32]. It makes it possible to determine the homogenised characteristics of the reinforced concrete from the properties of the concrete and of several types of reinforce"
  },
  "u4.42.07": {
    "frTitle": "Opérateur DEFI_MATER_GC",
    "frLead": "u4.42.07 Opérateur DEFI MATER GC 1 But L’opérateur DEFI MATER GC permet de définir les paramètres de matériaux utilisés pour des études de génie civil. L’objectif est d’aider l’utilisateur à définir les paramètres matériaux à partir de grandeur plus physique. Dans cette commande, on renseigne les propriétés physiques (coefficients élastiques, limites élastiq",
    "enTitle": "Operator DEFI_MATER_GC",
    "enLead": "u4.42.07 Operator DEFI MATER GC 1 Purpose The operator DEFI MATER GC makes it possible to define the material parameters used for civil-engineering studies. The aim is to help the user to define the material parameters from more physical quantities (grandeurs). In this command, one supplies the physical properties (elastic coefficients, elastic limits, chara"
  },
  "u4.42.08": {
    "frTitle": "Macro-commande CALC_ENDO",
    "frLead": "u4.42.08 Macro-commande CALC ENDO Résumé : Cette macro-commande permet de faciliter la mise en données d'un calcul d'endommagement visqueux. Comme pour n'importe quel calcul de mécanique non linéaire, le chargement est discrétisé en instants physiques fournis par l'utilisateur. Pour chacun de ces instants physiques, CALC ENDO appelle STAT NON LINE pour calcu",
    "enTitle": "Macro-command CALC_ENDO",
    "enLead": "u4.42.08 Macro-command CALC ENDO Summary: This macro-command makes it possible to facilitate the data setup of a viscous-damage analysis. As for any non-linear mechanical analysis, the loading is discretised into physical time instants supplied by the user. For each of these physical time instants, CALC ENDO calls STAT NON LINE in order to compute a fictitio"
  },
  "u4.43.01": {
    "frTitle": "Opérateur DEFI_MATERIAU",
    "frLead": "u4.43.01 Opérateur DEFI MATERIAU 1 But Définir les paramètres ou caractéristiques physiques d’un matériau, qui serviront à l’expression des lois de comportement, ou les paramètres associés à la fatigue, au dommage, ou aux méthodes simplifiées. Les paramètres physiques admis actuellement par cet opérateur concernent les domaines suivants: Mécanique et Thermiq",
    "enTitle": "Operator DEFI_MATERIAU",
    "enLead": "u4.43.01 Operator DEFI MATERIAU 1 Purpose Define the parameters or physical characteristics of a material, which will be used for the expression of the constitutive laws, or the parameters associated with fatigue, damage, or simplified methods. The physical parameters currently accepted by this operator concern the following domains: Mechanics and Thermal , "
  },
  "u4.43.02": {
    "frTitle": "Opérateur INCLUDE_MATERIAU",
    "frLead": "u4.43.02 Opérateur INCLUDE MATERIAU 1 But Récupérer les caractéristiques d’un matériau prédéfini dans le Catalogue Matériaux. Les fichiers du Catalogue Matériaux sont situés dans le sous-répertoire share/aster/materiau du répertoire d’installation. Ces catalogues ne sont pas diffusés dans la version de code aster open-source. 2 Syntaxe 3 Catalogue Matériaux ",
    "enTitle": "Operator INCLUDE_MATERIAU",
    "enLead": "u4.43.02 Operator INCLUDE MATERIAU 1 Purpose Retrieve the characteristics of a predefined material from the Material Catalogue. The files of the Material Catalogue are located in the subdirectory share/aster/materiau of the installation directory. These catalogues are not distributed in the open-source version of code aster. 2 Syntax 3 Aster Material Catalog"
  },
  "u4.43.03": {
    "frTitle": "Opérateur AFFE_MATERIAU",
    "frLead": "u4.43.03 Opérateur AFFE MATERIAU 1 But Affecter des matériaux à des zones géométriques d’un maillage ou d'un modèle. Il peut y avoir jusqu'à 26 matériaux sur une même maille (ce qui est nécessaire pour les poutres multi-fibres ou les matériaux polycristallins), mais on ne pourra utiliser qu'un seul champ de type cham mater dans les opérateurs. Définir les va",
    "enTitle": "Operator AFFE_MATERIAU",
    "enLead": "u4.43.03 Operator AFFE MATERIAU 1 Purpose Assign materials to geometric zones of a mesh or of a model. There may be up to 26 materials on one and the same mesh cell (which is necessary for the multifibre beams or the polycrystalline materials), but one will be able to use only a single field of type cham mater in the operators. Define the command variables ("
  },
  "u4.43.04": {
    "frTitle": "Opérateur DEFI_TRC",
    "frLead": "u4.43.04 Opérateur DEFI TRC 1 But Définir un diagramme TRC (Transformations en Refroidissement Continu) de référence pour les calculs métallurgiques. Le diagramme TRC ainsi défini est nécessaire à la caractérisation d'une loi de comportement métallurgique au refroidissement dans l'opérateur DEFI MATERIAU (mot clé facteur META ACIER). Pour la définition des d",
    "enTitle": "Operator DEFI_TRC",
    "enLead": "u4.43.04 Operator DEFI TRC 1 Purpose Define a reference TRC diagram (continuous cooling transformations) for metallurgical analyses. The TRC diagram thus defined is necessary for the characterisation of a metallurgical constitutive law on cooling in the operator DEFI MATERIAU (factor keyword META ACIER). For the definition of the metallurgical data and the m"
  },
  "u4.43.06": {
    "frTitle": "Opérateur DEFI_COMPOR",
    "frLead": "u4.43.06 Opérateur DEFI COMPOR 1 But Définir le comportement d’un monocristal, d’un polycristal ou d’une poutre multifibres. Pour le comportement d’un monocristal ou d’un polycristal, on permet à l’utilisateur de choisir les composantes de la loi de comportement monocristalline. On ne donne, suivant cette définition, que le nom de la structure cristallograph",
    "enTitle": "Operator DEFI_COMPOR",
    "enLead": "u4.43.06 Operator DEFI COMPOR 1 Purpose Define the constitutive behaviour of a single crystal, of a polycrystal or of a multifibre beam. For the constitutive behaviour of a single crystal or of a polycrystal, the user is allowed to choose the components of the single-crystal constitutive law. Following this definition, one gives only the name of the crystall"
  },
  "u4.43.07": {
    "frTitle": "Opérateur CALC_MATE_HOMO",
    "frLead": "u4.43.07 Opérateur CALC MATE HOMO 1 But Commande dédiée aux calculs des propriétés thermiques et thermoélastiques linéaires homogénéisées pour des structures hétérogènes périodiques à pas rectangulaire avec des cellules de base tridimensionnelles symétriques par rapport aux trois plans du référentiel cartésien, cf. R5.03.37. Plusieurs situations peuvent être",
    "enTitle": "Operator CALC_MATE_HOMO",
    "enLead": "u4.43.07 Operator CALC MATE HOMO 1 Purpose Command dedicated to the analyses of the homogenised linear thermal and thermoelastic properties for periodic heterogeneous structures with a rectangular pitch, with three-dimensional base cells symmetric with respect to the three planes of the Cartesian frame, cf. R5.03.37. Several situations can be treated: - a th"
  },
  "u4.43.08": {
    "frTitle": "Opérateur REST_HOMO_LOCAL",
    "frLead": "u4.43.08 Opérateur REST HOMO LOCAL 1 But Cette commande permet de reconstruire les champs locaux après un calcul 3D dont les paramètres ont été préalablement homogénéisés à l'aide de la commande CALC MATE HOMO. Elle prend en entrée : - les correcteurs mécaniques et thermiques issus de :command: CALC MATE HOMO , - le résultat homogène, tant élastique que ther",
    "enTitle": "Operator REST_HOMO_LOCAL",
    "enLead": "u4.43.08 Operator REST HOMO LOCAL 1 Purpose This command makes it possible to reconstruct the local fields after a 3D analysis whose parameters have been homogenised beforehand by means of the command CALC MATE HOMO. It takes as input: - the mechanical and thermal correctors coming from :command: CALC MATE HOMO , - the homogeneous result, both elastic and th"
  },
  "u4.43.09": {
    "frTitle": "Opérateur DEFI_REPERE",
    "frLead": "u4.43.09 Opérateur DEFI REPERE 1 But Créer un champ d'orientation CHAM ELEM de la quantité CAMA R à partir du modèle. Le champ créé pourra être utilisé dans AFFE CARA ELEM/MASSIF avec le mot-clé CHAM ORIE et dans AFFE MATERIAU pour définir par exemple des directions d'orthotropie. Permettre d’affecter à des éléments 3D ou 2D des axes locaux par les mots-clés",
    "enTitle": "Operator DEFI_REPERE",
    "enLead": "u4.43.09 Operator DEFI REPERE 1 Purpose Create an orientation field CHAM ELEM of the quantity CAMA R from the model. The field created may be used in AFFE CARA ELEM/MASSIF with the keyword CHAM ORIE and in AFFE MATERIAU in order to define, for example, directions of orthotropy. Make it possible to assign local axes to 3D or 2D elements by the keywords: - ANG"
  },
  "u4.44.01": {
    "frTitle": "Opérateurs AFFE_CHAR_MECA, AFFE_CHAR_MECA_C et AFFE_CHAR_MECA_F",
    "frLead": "u4.44.01 Opérateurs AFFE CHAR MECA, AFFE CHAR MECA C et AFFE CHAR MECA F 1 But Affecter des chargements et des conditions aux limites sur un modèle mécanique. - Pour AFFE CHAR MECA, les valeurs affectées ne dépendent d’aucun paramètre et sont définies par des valeurs réelles. - Pour AFFE CHAR MECA C, les valeurs affectées ne dépendent d’aucun paramètre et so",
    "enTitle": "Operators AFFE_CHAR_MECA, AFFE_CHAR_MECA_C and AFFE_CHAR_MECA_F",
    "enLead": "u4.44.01 Operators AFFE CHAR MECA, AFFE CHAR MECA C and AFFE CHAR MECA F 1 Purpose Assign loadings and boundary conditions on a mechanical model. - For AFFE CHAR MECA, the assigned values do not depend on any parameter and are defined by real values. - For AFFE CHAR MECA C, the assigned values do not depend on any parameter and are defined by complex values."
  },
  "u4.44.02": {
    "frTitle": "Opérateurs AFFE_CHAR_THER et AFFE_CHAR_THER_F",
    "frLead": "u4.44.02 Opérateurs AFFE CHAR THER et AFFE CHAR THER F 1 But Affecter des chargements et des conditions aux limites thermiques sur un modèle. Pour l'opérateur AFFE CHAR THER, les valeurs affectées ne dépendent d'aucun paramètre et sont définies par des valeurs réelles. Pour l'opérateur AFFE CHAR THER F, les valeurs sont des fonctions d'un ou plusieurs paramè",
    "enTitle": "Operators AFFE_CHAR_THER and AFFE_CHAR_THER_F",
    "enLead": "u4.44.02 Operators AFFE CHAR THER and AFFE CHAR THER F 1 Purpose Assign thermal loadings and boundary conditions on a model. For the operator AFFE CHAR THER, the assigned values do not depend on any parameter and are defined by real values. For the operator AFFE CHAR THER F, the values are functions of one or more parameters to be chosen from the set (INST, "
  },
  "u4.44.03": {
    "frTitle": "Opérateurs AFFE_CHAR_CINE et AFFE_CHAR_CINE_F",
    "frLead": "u4.44.03 Opérateurs AFFE CHAR CINE et AFFE CHAR CINE F 1 But Définir un chargement de type \"degrés de liberté imposés\". Cette commande peut être utilisée avec un modèle mécanique, thermique ou acoustique. Le traitement de ces conditions \"cinématiques\" se fera sans dualisation et donc sans ajout de degrés de liberté de Lagrange. 1. Pour AFFE CHAR CINE (sauf p",
    "enTitle": "Operators AFFE_CHAR_CINE and AFFE_CHAR_CINE_F",
    "enLead": "u4.44.03 Operators AFFE CHAR CINE and AFFE CHAR CINE F 1 Purpose Define a loading of type “imposed degrees of freedom”. This command can be used with a mechanical, thermal or acoustic model. The treatment of these “kinematic” conditions will be carried out without dualisation and therefore without the addition of Lagrange degrees of freedom. 1. For AFFE CHAR"
  },
  "u4.44.04": {
    "frTitle": "Opérateur AFFE_CHAR_ACOU",
    "frLead": "u4.44.04 Opérateur AFFE CHAR ACOU 1 But Affecter des conditions aux limites acoustiques constantes. Les valeurs affectées ne dépendent d'aucun paramètre et sont des valeurs complexes. Produit une structure de donnée de type char acou. 2 Syntaxe 3 Opérandes 3.1 Opérande MODELE Nom du modèle dont le maillage supporte les éléments de calcul acoustique. 3.2 Opér",
    "enTitle": "Operator AFFE_CHAR_ACOU",
    "enLead": "u4.44.04 Operator AFFE CHAR ACOU 1 Purpose Assign constant acoustic boundary conditions. The assigned values do not depend on any parameter and are complex values. Produces a data structure of type char acou. 2 Syntax 3 Operands 3.1 Operand MODELE Name of the model whose mesh supports the acoustic computational elements. 3.2 Operand DOUBLE LAGRANGE This keyw"
  },
  "u4.44.05": {
    "frTitle": "Opérateurs AFFE_CHAR_SECH et AFFE_CHAR_SECH_F",
    "frLead": "u4.44.05 Opérateurs AFFE CHAR SECH et AFFE CHAR SECH F 1 But Affecter des chargements et des conditions aux limites sur un modèle de calcul de séchage. Pour l'opérateur AFFE CHAR SECH, les valeurs affectées ne dépendent d'aucun paramètre et sont définies par des valeurs réelles. Pour l'opérateur AFFE CHAR SECH F, les valeurs sont des fonctions d'un ou plusie",
    "enTitle": "Operators AFFE_CHAR_SECH and AFFE_CHAR_SECH_F",
    "enLead": "u4.44.05 Operators AFFE CHAR SECH and AFFE CHAR SECH F 1 Purpose Assign loadings and boundary conditions on a drying analysis model. For the operator AFFE CHAR SECH, the assigned values do not depend on any parameter and are defined by real values. For the operator AFFE CHAR SECH F, the values are functions of one or more parameters to be chosen from the set"
  },
  "u4.44.06": {
    "frTitle": "AFFE_CHAR_GENE",
    "frLead": "u4.44.06 AFFE CHAR GENE 1 But Affecter des conditions aux limites sur un modèle généralisé. Produit une structure de donnée de type char gene. 2 Syntaxe 3 Opérandes 3.1 Mot-clef NUME DDL GENE Numérotation associée au modèle généralisé. 3.2 Mot-clé LIAISON Le mot-clé LIAISON permet de définir une relation linéaire entre modes. La condition suivante sera appli",
    "enTitle": "AFFE_CHAR_GENE",
    "enLead": "u4.44.06 AFFE CHAR GENE 1 Purpose Assign boundary conditions on a generalised model. Produces a data structure of type char gene. 2 Syntax 3 Operands 3.1 Keyword NUME DDL GENE Numbering associated with the generalised model. 3.2 Keyword LIAISON The keyword LIAISON makes it possible to define a linear relation between modes. The following condition will be ap"
  },
  "u4.44.11": {
    "frTitle": "Opérateur DEFI_CONTACT",
    "frLead": "u4.44.11 Opérateur DEFI CONTACT 1 But Affecter des conditions de contact unilatéral et de frottement en mécanique ou des conditions unilatérales sur les degrés de liberté. On détaille: - le contrôle de l’appariement pour les frontières en regard; - les paramètres physiques et numériques, utiles pour les diverses formulations disponibles. 2 Syntaxe 3 Principe",
    "enTitle": "Operator DEFI_CONTACT",
    "enLead": "u4.44.11 Operator DEFI CONTACT 1 Purpose Assign unilateral contact conditions and friction conditions in mechanics, or unilateral conditions on the degrees of freedom. One details: - the control of the pairing for the facing boundaries; - the physical and numerical parameters, useful for the various formulations available. 2 Syntax 3 Principles This command "
  },
  "u4.44.12": {
    "frTitle": "Opérateur CREA_RESU",
    "frLead": "u4.44.12 Opérateur CREA RESU 1 But Créer ou enrichir une structure de données resultat à partir de champs aux nœuds ou par éléments. Affectation possible des champs pour différents numéros d’ordre. L’utilisateur doit s’assurer de la cohérence des différents champs utilisés pour construire ou enrichir la structure de données resultat . L’affectation par l’int",
    "enTitle": "Operator CREA_RESU",
    "enLead": "u4.44.12 Operator CREA RESU 1 Purpose Create or enrich a result data structure from fields at the nodes or by elements. Assignment of the fields for different order numbers is possible. The user must ensure the consistency of the various fields used to build or enrich the result data structure. Assignment by means of a cham no of functions produced by CREA C"
  },
  "u4.44.13": {
    "frTitle": "Opérateur DEFI_CONT",
    "frLead": "u4.44.13 Opérateur DEFI CONT Résumé : On définit dans cet opérateur les conditions de contact unilatéral et de frottement pour son utilisation (exclusive) dans l'opérateur MECA NON LINE Pour le contact dans STAT NON LINE et DYNA NON LINE, se référer à la documentation de DEFI CONTACT. Cette documentation est provisoire, l'opérateur ne peut pas être utilisé d",
    "enTitle": "Operator DEFI_CONT",
    "enLead": "u4.44.13 Operator DEFI CONT Summary: One defines in this operator the unilateral contact and friction conditions for its (exclusive) use in the operator MECA NON LINE For contact in STAT NON LINE and DYNA NON LINE, refer to the documentation of DEFI CONTACT. This documentation is provisional, the operator cannot be used in the AIP studies and it is outside t"
  },
  "u4.44.21": {
    "frTitle": "Opérateur DEFI_OBSTACLE",
    "frLead": "u4.44.21 Opérateur DEFI OBSTACLE 1 But Définir la géométrie des lieux de chocs d'une structure filaire. Ces lieux sont définis dans un plan perpendiculaire à la structure modélisée par des poutres POU D T et POU D E. Il est alors utilisé par DYNA VIBRA U4.53.03 pour l’étude de la réponse d’une structure dont les déplacements sont limités par la présence de c",
    "enTitle": "Operator DEFI_OBSTACLE",
    "enLead": "u4.44.21 Operator DEFI OBSTACLE 1 Purpose Define the geometry of the shock locations of a slender structure. These locations are defined in a plane perpendicular to the structure modelled by POU D T and POU D E beams. It is then used by DYNA VIBRA U4.53.03 for the study of the response of a structure whose displacements are limited by the presence of this ob"
  },
  "u4.44.31": {
    "frTitle": "Opérateur DEFI_SPEC_TURB",
    "frLead": "u4.44.31 Opérateur DEFI SPEC TURB 1 But Définir un spectre d’excitation turbulente. Différents types de spectres sont disponibles: - pour les «faisceaux de tubes sous écoulement transverse», spectres de type «longueur de corrélation», - pour des écoulements uniformes établis, parallèles à des structures planes ou cylindriques circulaires, spectres de turbule",
    "enTitle": "Operator DEFI_SPEC_TURB",
    "enLead": "u4.44.31 Operator DEFI SPEC TURB 1 Purpose Define a turbulent excitation spectrum. Various types of spectrum are available: - for “tube bundles under cross-flow”, spectra of “correlation length” type, - for established uniform flows, parallel to plane structures or to circular cylindrical structures, boundary-layer turbulence spectra, - an excitation spectru"
  },
  "u4.50.01": {
    "frTitle": "Mot-clé SOLVEUR",
    "frLead": "u4.50.01 Mot-clé SOLVEUR 1 But Le mot clé facteur SOLVEUR est commun à toutes les commandes qui résolvent des systèmes d'équations linéaires (STAT NON LINE, CALC MODES, ...). Pour résoudre ces systèmes d'équations, on utilise des algorithmes particuliers appelés «solveurs linéaires». Le mot-clé SOLVEUR permet de choisir le solveur linéaire à utiliser parmi d",
    "enTitle": "Keyword SOLVEUR",
    "enLead": "u4.50.01 Keyword SOLVEUR 1 Purpose The factor keyword SOLVEUR is common to all the commands which solve systems of linear equations (STAT NON LINE, CALC MODES, ...). To solve these systems of equations, particular algorithms called “linear solvers” are used. The keyword SOLVEUR makes it possible to choose the linear solver to be used from among two categorie"
  },
  "u4.51.01": {
    "frTitle": "Opérateur MECA_STATIQUE",
    "frLead": "u4.51.01 Opérateur MECA STATIQUE 1 But Résoudre un problème de mécanique statique linéaire. Cet opérateur permet de résoudre soit: - un problème mécanique statique linéaire avec superposition de différentes conditions aux limites et de différents chargements, - une analyse thermo-mécanique pour une liste donnée d'instants. - dans ce cas les caractéristiques ",
    "enTitle": "Operator MECA_STATIQUE",
    "enLead": "u4.51.01 Operator MECA STATIQUE 1 Purpose Solve a linear static mechanical problem. This operator makes it possible to solve either: - a linear static mechanical problem with superposition of different boundary conditions and different loadings, - a thermo-mechanical analysis for a given list of time instants. - in this case the mechanical characteristics of"
  },
  "u4.51.02": {
    "frTitle": "Macro commande MACRO_ELAS_MULT",
    "frLead": "u4.51.02 Macro commande MACRO ELAS MULT 1 But Le rôle de la commande est de calculer des réponses statiques linéaires pour différents cas de charges ou modes de Fourier. On suppose que les conditions cinématiques (blocages de la structure) et les caractéristiques des matériaux sont invariantes pour tous les cas de charge, ce qui permet d’avoir la même matric",
    "enTitle": "Macro-command MACRO_ELAS_MULT",
    "enLead": "u4.51.02 Macro-command MACRO ELAS MULT 1 Purpose The role of the command is to compute linear static responses for different load cases or Fourier modes. It is assumed that the kinematic conditions (restraints of the structure) and the material characteristics are invariant for all the load cases, which makes it possible to have the same stiffness matrix. Th"
  },
  "u4.51.03": {
    "frTitle": "Opérateur STAT_NON_LINE",
    "frLead": "u4.51.03 Opérateur STAT NON LINE Résumé : Calculer l'évolution mécanique ou thermo-hydro-mécanique couplée, en quasi-statique ou en dynamique, d'une structure en non linéaire. La non-linéarité est liée soit au comportement du matériau (par exemple plastique), soit à la géométrie (par exemple en grands déplacements) soit au contact-frottement. Pour avoir des ",
    "enTitle": "Operator STAT_NON_LINE",
    "enLead": "u4.51.03 Operator STAT NON LINE Summary: Compute the coupled mechanical or thermo-hydro-mechanical evolution, in quasi-statics or in dynamics, of a structure in the non-linear regime. The non-linearity is related either to the constitutive behaviour of the material (for example plastic), or to the geometry (for example in large displacements), or to friction"
  },
  "u4.51.04": {
    "frTitle": "Opérateur MECA_NON_LINE",
    "frLead": "u4.51.04 Opérateur MECA NON LINE Résumé : Calculer l'évolution mécanique ou thermo-hydro-mécanique couplée, en quasi-statique ou en dynamique, d'une structure en non linéaire. La non-linéarité est liée soit au comportement du matériau (par exemple plastique), soit à la géométrie (par exemple en grands déplacements) soit au contact-frottement. Pour avoir des ",
    "enTitle": "Operator MECA_NON_LINE",
    "enLead": "u4.51.04 Operator MECA NON LINE Summary: Compute the mechanical or coupled thermo-hydro-mechanical evolution, in quasi-statics or in dynamics, of a structure in the non-linear regime. The non-linearity is linked either to the constitutive behaviour of the material (for example plastic), or to the geometry (for example in large displacements), or to frictiona"
  },
  "u4.51.05": {
    "frTitle": "Commande CALC_MECA_MULT",
    "frLead": "u4.51.05 Commande CALC MECA MULT 1 But Le rôle de la commande CALC MECA MULT est de calculer les réponses thermomécaniques d’un modèle mécanique pour différents cas de sollicitations thermiques. Pour cela, on fournit un chargement mécanique commun et une structure de données résultats thermiques par cas de charge. La structure de données produite est de type",
    "enTitle": "Command CALC_MECA_MULT",
    "enLead": "u4.51.05 Command CALC MECA MULT 1 Purpose The role of the command CALC MECA MULT is to compute the thermomechanical responses of a mechanical model for different cases of thermal loads. For this, one supplies a common mechanical loading and a thermal result data structure per load case. The data structure produced is of type evol noli dict. 2 Syntax 3 Operan"
  },
  "u4.51.10": {
    "frTitle": "Opérateur CALCUL",
    "frLead": "u4.51.10 Opérateur CALCUL 1 But Pour la mécanique: - calculer les contraintes et les variables internes pour l'intégration d'une loi de comportement non-linéaire; - calculer les vecteurs élémentaires vect elemdes forces internes et nodales et les matrices élémentaires matr elemd'une matrice tangente; - calculerles vecteurs élémentaires vect elemdes forces co",
    "enTitle": "Operator CALCUL",
    "enLead": "u4.51.10 Operator CALCUL 1 Purpose For mechanics: - compute the stresses and the internal variables for the integration of a non-linear constitutive law; - compute the elementary vectors vect elem of the internal and nodal forces and the elementary matrices matr elem of a tangent matrix; - compute the elementary vectors vect elem of the forces corresponding "
  },
  "u4.51.11": {
    "frTitle": "Comportements non linéaires",
    "frLead": "u4.51.11 Comportements non linéaires 1 But Ce document décrit les comportements non linéaires introduits par l’intermédiaire du mot-clé COMPORTEMENT dans les opérateurs de calcul non linéaire: STAT NON LINE, DYNA NON LINE, SIMU POINT MAT, CALCUL Pour chaque comportement sont précisés les domaines d’application, les mots-clés définissant les paramètres matéri",
    "enTitle": "Non-linear constitutive behaviours",
    "enLead": "u4.51.11 Non-linear constitutive behaviours 1 Purpose This document describes the non-linear constitutive behaviours introduced by means of the keyword COMPORTEMENT in the non-linear analysis operators: STAT NON LINE, DYNA NON LINE, SIMU POINT MAT, CALCUL For each constitutive behaviour, the fields of application, the keywords defining the material parameter"
  },
  "u4.51.12": {
    "frTitle": "Macro commande SIMU_POINT_MAT",
    "frLead": "u4.51.12 Macro commande SIMU POINT MAT 1 But Calculer l'évolution mécanique d'un point matériel, en quasi-statique non linéaire. Tous les comportements disponibles dans STAT NON LINE U4.51.11 le sont également ici. Le but de cette macro-commande est de simplifier au maximum les données: il suffit de fournir: 1. Le comportement et le matériau; 2. Les fonction",
    "enTitle": "Macro-command SIMU_POINT_MAT",
    "enLead": "u4.51.12 Macro-command SIMU POINT MAT 1 Purpose Compute the mechanical evolution of a material point, in non-linear quasi-statics. All the constitutive behaviours available in STAT NON LINE U4.51.11 are also available here. The purpose of this macro-command is to simplify the data as much as possible: it is sufficient to supply: 1. The constitutive behaviour"
  },
  "u4.51.21": {
    "frTitle": "Macro-commande CALC_STABILITE",
    "frLead": "u4.51.21 Macro-commande CALC STABILITE 1 But La macro-commande CALC STABILITE permet de déterminer la stabilité de solutions périodiques obtenues par MODE NON LINE, en se basant sur la théorie de Floquet, par un schéma d'intégration temporelle et un calcul aux valeurs propres. En sortie, elle met à jour la colonne STABILITE de la table des solutions périodiq",
    "enTitle": "Macro-command CALC_STABILITE",
    "enLead": "u4.51.21 Macro-command CALC STABILITE 1 Purpose The macro-command CALC STABILITE makes it possible to determine the stability of periodic solutions obtained by MODE NON LINE, on the basis of Floquet theory, by a time-integration scheme and an eigenvalue analysis. On output, it updates the column STABILITE of the table of periodic solutions. This macro-comman"
  },
  "u4.52.01": {
    "frTitle": "Opérateur INFO_MODE",
    "frLead": "u4.52.01 Opérateur INFO MODE 1 But Cette commande permet de compter et de sauvegarder (dans une sd table) le nombre de valeurs propres comprises dans: - Un intervalle de l'axe réel (pour les problèmes généralisés GEPs standards à matrices réelles symétriques). - Un disque du plan complexe (pour tous les autres cas de figure, autres GEPs et tous les problèmes",
    "enTitle": "Operator INFO_MODE",
    "enLead": "u4.52.01 Operator INFO MODE 1 Purpose This command makes it possible to count and to save (in an sd table) the number of eigenvalues contained in: - An interval of the real axis (for the standard generalised GEPs with real symmetric matrices). - A disc of the complex plane (for all the other cases, other GEPs and all the quadratic problems QEPs). When one tr"
  },
  "u4.52.02": {
    "frTitle": "Opérateur CALC_MODES",
    "frLead": "u4.52.02 Opérateur CALC MODES 1 But Calculer les modes propres de vibrations ou les modes de flambement d'Euler, d'une structure mécanique. L'opérateur CALC MODESrésout pour cela un problème modal qui peut être soit généralisé (GEP) [[R5.01.01]](https://code-aster.org/V2/doc/default/fr/man r/r5/r5.01.01.pdf), soit quadratique (QEP) [[R5.01.02]](https://code-",
    "enTitle": "Operator CALC_MODES",
    "enLead": "u4.52.02 Operator CALC MODES 1 Purpose Compute the vibration eigenmodes or the Euler buckling modes of a mechanical structure. The operator CALC MODES solves, for this purpose, a modal problem which may be either generalised (GEP) [[R5.01.01]](https://code-aster.org/V2/doc/default/fr/man r/r5/r5.01.01.pdf), or quadratic (QEP) [[R5.01.02]](https://code-aster."
  },
  "u4.52.05": {
    "frTitle": "Opérateur MODE_ITER_CYCL",
    "frLead": "u4.52.05 Opérateur MODE ITER CYCL 1 But Calculer les modes propres d’une structure à symétrie cyclique. On calcule les composantes généralisées des modes propres de la structure entière, par une méthode de sous-structuration cyclique, à partir de la base modale d’un secteur de référence (cf R4.06.03). L’axe de symétrie est l’axe OZ. La base modale du secteur",
    "enTitle": "Operator MODE_ITER_CYCL",
    "enLead": "u4.52.05 Operator MODE ITER CYCL 1 Purpose Compute the eigenmodes of a structure with cyclic symmetry. One computes the generalised components of the eigenmodes of the whole structure, by a cyclic substructuring method, from the modal base of a reference sector (cf R4.06.03). The axis of symmetry is the axis OZ. The modal base of the sector must be of type C"
  },
  "u4.52.06": {
    "frTitle": "Opérateur MODE_NON_LINE",
    "frLead": "u4.52.06 Opérateur MODE NON LINE 1 But L'opérateur MODE NON LINE permet de calculer un mode non-linéaire d'un système linéaire conservatif autonome dotées de non-linéarités de choc localisées. La condition initiale peut-être un mode linéaire ou un mode non-linéaire permettant d'utiliser les résultats d'un calcul antérieur. Les non-linéarités sont définies da",
    "enTitle": "Operator MODE_NON_LINE",
    "enLead": "u4.52.06 Operator MODE NON LINE 1 Purpose The operator MODE NON LINE makes it possible to compute a non-linear mode of an autonomous conservative linear system endowed with localised impact non-linearities. The initial condition may be a linear mode or a non-linear mode, making it possible to use the results of an earlier analysis. The non-linearities are de"
  },
  "u4.52.11": {
    "frTitle": "Opérateur NORM_MODE",
    "frLead": "u4.52.11 Opérateur NORM MODE 1 But Le rôle de la commande est de normer des modes propres en fonction d’un critère choisi par l’utilisateur. L'opérateur de calcul modal CALC MODES U4.52.02 produit un concept de type mode meca ou mode meca c dont les modes propres réels ou complexes sont normalisés de telle façon que la plus grande des composantes qui n'est p",
    "enTitle": "Operator NORM_MODE",
    "enLead": "u4.52.11 Operator NORM MODE 1 Purpose The role of the command is to normalise eigenmodes according to a criterion chosen by the user. The modal analysis operator CALC MODES U4.52.02 produces a concept of type mode meca or mode meca c whose real or complex eigenmodes are normalised in such a way that the largest of the components which is not a LAGRANGE multi"
  },
  "u4.52.12": {
    "frTitle": "Opérateur EXTR_MODE",
    "frLead": "u4.52.12 Opérateur EXTR MODE 1 But Extraire sélectivement des modes des structures de données modale. Les modes sont sélectionnés selon un critère de valeur de paramètre modal supérieur à un certain seuil, puis sont concaténés en une seule structure de données finale. On peut également imprimer dans le fichier MESSAGE un tableau récapitulatif sur les cumuls ",
    "enTitle": "Operator EXTR_MODE",
    "enLead": "u4.52.12 Operator EXTR MODE 1 Purpose Selectively extract modes from modal data structures. The modes are selected according to a criterion of a modal-parameter value greater than a certain threshold, then concatenated into a single final data structure. One can also print in the MESSAGE file a summary table of the cumulative sums of the unit effective modal"
  },
  "u4.52.13": {
    "frTitle": "Opérateur CALC_AMOR_MODAL",
    "frLead": "u4.52.13 Opérateur CALC AMOR MODAL 1 But Créer une liste d'amortissements modaux calculés selon la règle du RCC-G. Le calcul s'effectue en post-traitement du calcul modal d'une structure de type bâtiment dont le radier repose sur un sol modélisé par des ressorts. Le principe du calcul est de pondérer par les taux d'énergie potentielle (par rapport à l'énergi",
    "enTitle": "Operator CALC_AMOR_MODAL",
    "enLead": "u4.52.13 Operator CALC AMOR MODAL 1 Purpose Create a list of modal dampings computed according to the RCC-G rule. The analysis is performed in post-processing of the modal analysis of a building-type structure whose raft rests on a soil modelled by springs. The principle of the analysis is to weight, by the potential-energy ratios (with respect to the total "
  },
  "u4.52.14": {
    "frTitle": "Opérateur MODE_STATIQUE",
    "frLead": "u4.52.14 Opérateur MODE STATIQUE 1 But Calculer des modes statiques pour un déplacement, une force ou une accélération unitaire imposé. On peut également calculer des modes de couplages (modes d'interface) pour définir un modèle généralisé plus petit. Un mode statique est la déformée statique d'une structure isostatique ou hyperstatique à laquelle on impose ",
    "enTitle": "Operator MODE_STATIQUE",
    "enLead": "u4.52.14 Operator MODE STATIQUE 1 Purpose Compute static modes for a unit imposed displacement, force or acceleration. One can also compute coupling modes (interface modes) in order to define a smaller generalised model. A static mode is the static deformed shape of an isostatic or hyperstatic structure on which one imposes: - at a blocked degree of freedom "
  },
  "u4.52.15": {
    "frTitle": "Opérateur MAC_MODES",
    "frLead": "u4.52.15 Opérateur MAC MODES 1 But L’opérateur MAC MODES permet de calculer une matrice de corrélation entre deux bases modales. Le coefficient de corrélation entre deux vecteurs de cette base est d’autant plus proche de 1 que ces deux vecteurs sont colinéaires. Il permet aussi de calculer la différence entre deux bases modales en utilisant le critère énergé",
    "enTitle": "Operator MAC_MODES",
    "enLead": "u4.52.15 Operator MAC MODES 1 Purpose The operator MAC MODES makes it possible to compute a correlation matrix between two modal bases. The correlation coefficient between two vectors of this base is all the closer to 1 as these two vectors are collinear. It also makes it possible to compute the difference between two modal bases by using the IERI energy cri"
  },
  "u4.52.16": {
    "frTitle": "Opérateur CALC_CORR_SSD",
    "frLead": "u4.52.16 Opérateur CALC CORR SSD 1 But Estimer la qualité des modèles réduits dans le cadre de l'analyse modale. Cette commande permet de calculer les travaux des efforts résiduels de couplage au niveau de chacune des interfaces, ainsi que les travaux des efforts résiduels sur les parties internes des sous structures. Par ailleurs, sur la base de ces travaux",
    "enTitle": "Operator CALC_CORR_SSD",
    "enLead": "u4.52.16 Operator CALC CORR SSD 1 Purpose Estimate the quality of the reduced models in the framework of the modal analysis. This command makes it possible to compute the works of the residual coupling forces at each of the interfaces, as well as the works of the residual forces on the internal parts of the substructures. Furthermore, on the basis of these w"
  },
  "u4.52.17": {
    "frTitle": "Macro-commande POST_MODE",
    "frLead": "u4.52.17 Macro-commande POST MODE Résumé : Les masses et inerties effectives sont des paramètres calculés pour chaque mode par l'opérateur CALC MODES. Elles peuvent servir de critères pour sélectionner les modes de plus fort intérêt. Dans ce cas, ces paramètres sont calculées en prenant en compte tout le modèle. Or il s'avère parfois utile de pouvoir dispose",
    "enTitle": "Macro-command POST_MODE",
    "enLead": "u4.52.17 Macro-command POST MODE Summary: The effective masses and inertias are parameters computed for each mode by the operator CALC MODES. They can serve as criteria for selecting the modes of greatest interest. In that case, these parameters are computed by taking the whole model into account. It is however sometimes useful to be able to have these param"
  },
  "u4.52.51": {
    "frTitle": "Opérateur CALC_MODE_ROTATION",
    "frLead": "u4.52.51 Opérateur CALC MODE ROTATION 1 But Calculer les modes et les fréquences du système suivant en fonction des vitesses de rotation, M\\ddot{\\delta}+(C+\\Omega G)\\dot{\\delta}+K\\delta =0 Où M est la matrice de masse du système, C est une matrice d'amortissement, G est la matrice de gyroscopie (antisymétrique), et K est la matrice de raideur du système. \\Om",
    "enTitle": "Operator CALC_MODE_ROTATION",
    "enLead": "u4.52.51 Operator CALC MODE ROTATION 1 Purpose Compute the modes and the frequencies of the following system as a function of the rotation speeds, M\\ddot{\\delta}+(C+\\Omega G)\\dot{\\delta}+K\\delta =0 Where M is the mass matrix of the system, C is a damping matrix, G is the gyroscopic matrix (antisymmetric), and K is the stiffness matrix of the system. \\Omega r"
  },
  "u4.53.01": {
    "frTitle": "Opérateur DYNA_NON_LINE",
    "frLead": "u4.53.01 Opérateur DYNA NON LINE 1 But Calculer l'évolution dynamique d'une structure dont le matériau ou la géométrie ont un comportement non linéaire ou de contact/frottement. La syntaxe de cette commande est très semblable à celle de l'opérateur STAT NON LINE U4.51.03. L'évolution dynamique est étudiée à partir d'un état initial, configuration de référenc",
    "enTitle": "Operator DYNA_NON_LINE",
    "enLead": "u4.53.01 Operator DYNA NON LINE 1 Purpose Compute the dynamic evolution of a structure whose material or geometry has a non-linear behaviour or frictional contact. The syntax of this command is very similar to that of the operator STAT NON LINE U4.51.03. The dynamic evolution is studied from an initial state, the reference configuration, which may be produce"
  },
  "u4.53.03": {
    "frTitle": "Opérateur DYNA_VIBRA",
    "frLead": "u4.53.03 Opérateur DYNA VIBRA 1 But DYNA VIBRA permet de réaliser un calcul de réponse transitoire ou harmonique sur un modèle linéaire sur base physique ou sur base modale. Il peut également traiter les non-linéarités localisées pour les calculs de réponse transitoire sur base modale. Le concept produit dépend du type de calcul réalisé (tran gene, dyna tran",
    "enTitle": "Operator DYNA_VIBRA",
    "enLead": "u4.53.03 Operator DYNA VIBRA 1 Purpose DYNA VIBRA makes it possible to carry out a transient or harmonic response analysis on a linear model, on a physical basis or on a modal basis. It can also treat localised non-linearities for transient response analyses on a modal basis. The concept produced depends on the type of analysis carried out (tran gene, dyna t"
  },
  "u4.53.04": {
    "frTitle": "Opérateur DYNA_VISCO",
    "frLead": "u4.53.04 Opérateur DYNA VISCO 1 But Cette commande permet de calculer les modes propres réels ou complexes, ainsi que la réponse harmonique (déplacement, vitesse, accélération) d’une structure comportant des matériaux viscoélastiques dont les propriétés dépendent de la fréquence (ce qui se traduit par une matrice de rigidité dépendante de la fréquence). Les ",
    "enTitle": "Operator DYNA_VISCO",
    "enLead": "u4.53.04 Operator DYNA VISCO 1 Purpose This command makes it possible to compute the real or complex eigenmodes, as well as the harmonic response (displacement, velocity, acceleration) of a structure comprising viscoelastic materials whose properties depend on frequency (which results in a frequency-dependent stiffness matrix). The following actions are poss"
  },
  "u4.53.05": {
    "frTitle": "Opérateur DYNA_LINE",
    "frLead": "u4.53.05 Opérateur DYNA LINE 1 But DYNA LINE est l’opérateur unifié permettant de réaliser un calcul de réponse transitoire ou harmonique sur base physique ou généralisée. Il peut également traiter les non-linéarités localisées pour les calculs de réponse transitoire, l’interaction sol-structure ou l’interaction fluide-structure sur base généralisée. L’intér",
    "enTitle": "Operator DYNA_LINE",
    "enLead": "u4.53.05 Operator DYNA LINE 1 Purpose DYNA LINE is the unified operator making it possible to carry out a transient or harmonic response analysis on a physical or generalised basis. It can also treat localised non-linearities for transient response analyses, soil-structure interaction or fluid-structure interaction on a generalised basis. The advantage of th"
  },
  "u4.53.22": {
    "frTitle": "Opérateur DYNA_ALEA_MODAL",
    "frLead": "u4.53.22 Opérateur DYNA ALEA MODAL 1 But Cet opérateur permet de calculer la matrice de densité spectrale de la réponse d’une structure linéaire sous une excitation dont on connaît la matrice de densité spectrale (on dit aussi interspectre d’excitation). L’opérateur fournit alors la réponse modale sous forme de sa densité spectrale (l’interspectre de la répo",
    "enTitle": "Operator DYNA_ALEA_MODAL",
    "enLead": "u4.53.22 Operator DYNA ALEA MODAL 1 Purpose This operator makes it possible to compute the spectral density matrix of the response of a linear structure under an excitation whose spectral density matrix is known (one also says excitation interspectrum). The operator then supplies the modal response in the form of its spectral density (the interspectrum of th"
  },
  "u4.53.23": {
    "frTitle": "Opérateur DYNA_SPEC_MODAL",
    "frLead": "u4.53.23 Opérateur DYNA SPEC MODAL 1 But Calculer la réponse par recombinaison modale d'une structure linéaire à une excitation aléatoire. Cette excitation est définie sous forme d'interspectres de puissance d'efforts modaux. La réponse est établie sous forme d'interspectres de puissance des déplacements généralisés. Chaque matrice interspectrale est associé",
    "enTitle": "Operator DYNA_SPEC_MODAL",
    "enLead": "u4.53.23 Operator DYNA SPEC MODAL 1 Purpose Compute the response, by modal recombination, of a linear structure to a random excitation. This excitation is defined in the form of power interspectra of modal forces. The response is established in the form of power interspectra of the generalised displacements. Each interspectral matrix is associated with a mod"
  },
  "u4.53.31": {
    "frTitle": "Opérateur DYNA_ISS_VARI",
    "frLead": "u4.53.31 Opérateur DYNA ISS VARI 1 But Cet opérateur permet de calculer la réponse d’une structure soumise à un mouvement sismique variable en espace à partir d’une fonction de cohérence, de la matrice d’impédance et de la force sismique. Ces dernières peuvent être calculées par le logiciel PROMISS3D. Plus précisément, on construit les vecteurs spectraux de ",
    "enTitle": "Operator DYNA_ISS_VARI",
    "enLead": "u4.53.31 Operator DYNA ISS VARI 1 Purpose This operator makes it possible to compute the response of a structure subjected to a seismic motion which varies in space, from a coherence function, the impedance matrix and the seismic force. The latter may be computed by the PROMISS3D software. More precisely, one builds the spectral vectors of modal response (co"
  },
  "u4.53.41": {
    "frTitle": "Opérateur CALC_ERC_DYN",
    "frLead": "u4.53.41 Opérateur CALC ERC DYN 1 But Pour le cas de la dynamique linéaire, il permet d'obtenir les champs solution d'un problème de minimisation d'une fonctionnelle énergétique de type erreur en relation en comportement (ERC) sous une formulation modale. Par ailleurs, il permet d'évaluer la fonctionnelle d'erreur pour les champs solution. Produit une struct",
    "enTitle": "Operator CALC_ERC_DYN",
    "enLead": "u4.53.41 Operator CALC ERC DYN 1 Purpose For the case of linear dynamics, it makes it possible to obtain the solution fields of a problem of minimisation of an energy functional of constitutive-relation error type (ERC) in a modal formulation. Furthermore, it makes it possible to evaluate the error functional for the solution fields. Produces a data structur"
  },
  "u4.53.51": {
    "frTitle": "Opérateur CALC_TRANSFERT",
    "frLead": "u4.53.51 Opérateur CALC TRANSFERT 1 But Cet opérateur permet de calculer la matrice de fonctions de transfert dynamique d'un système mécanique linéaire entre deux points du modèle numérique. Les fonctions de transfert peuvent être en accélération, vitesse ou déplacement. On peut traiter le cas de mouvements absolus ou relatifs, sous l'action d'une sollicitat",
    "enTitle": "Operator CALC_TRANSFERT",
    "enLead": "u4.53.51 Operator CALC TRANSFERT 1 Purpose This operator makes it possible to compute the matrix of dynamic transfer functions of a linear mechanical system between two points of the numerical model. The transfer functions may be in acceleration, velocity or displacement. One can treat the case of absolute or relative motions, under the action of an entrainm"
  },
  "u4.54.01": {
    "frTitle": "Opérateur THER_LINEAIRE",
    "frLead": "u4.54.01 Opérateur THER LINEAIRE 1 But Résoudre un problème de thermique linéaire en régime stationnaire ou évolutif. Le chargement thermique est défini par le mot clé EXCIT. La discrétisation temporelle est fournie par la liste d’instants définie sous le mot clé LIST INST. Ce calcul évolutif peut être initialisé, au premier instant, de trois manières différ",
    "enTitle": "Operator THER_LINEAIRE",
    "enLead": "u4.54.01 Operator THER LINEAIRE 1 Purpose Solve a linear thermal problem in the steady or evolutionary regime. The thermal loading is defined by the keyword EXCIT. The time discretisation is supplied by the list of time instants defined under the keyword LIST INST. This evolutionary analysis can be initialised, at the first time instant, in three different w"
  },
  "u4.54.02": {
    "frTitle": "Opérateur THER_NON_LINE",
    "frLead": "u4.54.02 Opérateur THER NON LINE 1 But Calculer la réponse thermique avec des non linéarités de comportements et de conditions aux limites. L’équation de la chaleur est résolue en régime évolutif (sauf si aucune liste d’instant n’est fournie, seul le régime stationnaire est alors calculé). Les non linéarités proviennent soit du comportement (caractéristiques",
    "enTitle": "Operator THER_NON_LINE",
    "enLead": "u4.54.02 Operator THER NON LINE 1 Purpose Compute the thermal response with non-linearities of constitutive behaviour and of boundary conditions. The heat equation is solved in the evolutionary regime (unless no list of time instants is supplied, in which case only the steady regime is computed). The non-linearities come either from the constitutive behaviou"
  },
  "u4.54.03": {
    "frTitle": "Opérateur THER_NON_LINE_MO",
    "frLead": "u4.54.03 Opérateur THER NON LINE MO 1 But Calculer la réponse thermique stationnaire non linéaire avec chargement mobile. Cet opérateur permet de résoudre l'équation de la chaleur stationnaire dans un référentiel mobile lié à un chargement et se déplaçant dans une direction et à une vitesse données R5.02.04. Les non linéarités du problème proviennent aussi b",
    "enTitle": "Operator THER_NON_LINE_MO",
    "enLead": "u4.54.03 Operator THER NON LINE MO 1 Purpose Compute the non-linear steady thermal response with a moving loading. This operator makes it possible to solve the steady heat equation in a moving reference frame attached to a loading and travelling in a given direction and at a given velocity R5.02.04. The non-linearities of the problem come both from the mater"
  },
  "u4.54.04": {
    "frTitle": "Commande CALC_THER_MULT",
    "frLead": "u4.54.04 Commande CALC THER MULT 1 But Le rôle de la commande est de calculer les réponses thermiques de différents cas de chargement et de les stocker dans une même structure de données résultat. Ces chargements peuvent être des chargements thermiques quelconques (définis avec les commandes AFFE CHAR THER et AFFE CHAR THER F) ou des chocs unitaires pour les",
    "enTitle": "Command CALC_THER_MULT",
    "enLead": "u4.54.04 Command CALC THER MULT 1 Purpose The role of the command is to compute the thermal responses of various load cases and to store them in one and the same result data structure. These loadings may be any thermal loadings (defined with the commands AFFE CHAR THER and AFFE CHAR THER F) or unit shocks for which an automatic setup is used. The thermal bou"
  },
  "u4.55.01": {
    "frTitle": "Opérateur FACTORISER",
    "frLead": "u4.55.01 Opérateur FACTORISER 1 But Factoriser une matrice assemblée ou fabriquer une matrice de pré-conditionnement . La matrice produite par cet opérateur est fournie à l’opérateur RESOUDRE[U4.55.02] pour résoudre les systèmes linéaires. Cet opérateur permet: 1. Soit de factoriser la matrice assemblée (en un produit de deux matrices triangulaires) pour les",
    "enTitle": "Operator FACTORISER",
    "enLead": "u4.55.01 Operator FACTORISER 1 Purpose Factorise an assembled matrix or build a preconditioning matrix . The matrix produced by this operator is supplied to the operator RESOUDRE[U4.55.02] in order to solve the linear systems. This operator makes it possible: 1. Either to factorise the assembled matrix (into a product of two triangular matrices) for the dire"
  },
  "u4.55.02": {
    "frTitle": "Opérateur RESOUDRE",
    "frLead": "u4.55.02 Opérateur RESOUDRE 1 But Résoudre un système d’équations linéaires (méthode directe ou itérative) Les méthodes de résolutions implantées dans Code Aster et utilisables par cette commande sont: 1. la méthode MULT FRONT (méthode directe), 2. la méthode LDLT (méthode directe), 3. la méthode MUMPS (méthode directe), 4. la méthode GCPC (méthode itérative",
    "enTitle": "Operator RESOUDRE",
    "enLead": "u4.55.02 Operator RESOUDRE 1 Purpose Solve a system of linear equations (direct or iterative method) The solution methods implemented in Code Aster and usable by this command are: 1. the MULT FRONT method (direct method), 2. the LDLT method (direct method), 3. the MUMPS method (direct method), 4. the GCPC method (iterative method), 5. the PETSC method (itera"
  },
  "u4.55.03": {
    "frTitle": "Opérateur ELIM_LAGR",
    "frLead": "u4.55.03 Opérateur ELIM LAGR 1 But Supprimer les équations de Lagrange dans une matrice qui en possède. Cette commande est expérimentale. Elle est avant tout destinée à produire des matrices «sans Lagrange» pour l'opérateur de calcul modal (CALC MODES). Remarques: - Pour éliminer les équations de Lagrange, on est conduit à éliminer certains degrés de liberté",
    "enTitle": "Operator ELIM_LAGR",
    "enLead": "u4.55.03 Operator ELIM LAGR 1 Purpose Remove the Lagrange equations from a matrix which contains them. This command is experimental. It is intended above all to produce matrices “without Lagrange” for the modal analysis operator (CALC MODES). Notes: - In order to eliminate the Lagrange equations, one is led to eliminate certain physical degrees of freedom (o"
  },
  "u4.56.01": {
    "frTitle": "Opérateur SECH_NON_LINE",
    "frLead": "u4.56.01 Opérateur SECH NON LINE 1 But Cet opérateur permet de résoudre les problèmes de séchage (non linéaires) en résolvant l'équation de la chaleur où la concentration en eau C est assimilée à une température. La conductivité thermique est dans ce cas le coefficient de diffusion, non linéaire en C et fonction, éventuellement, d’une température calculée au",
    "enTitle": "Operator SECH_NON_LINE",
    "enLead": "u4.56.01 Operator SECH NON LINE 1 Purpose This operator makes it possible to solve (non-linear) drying problems by solving the heat equation in which the water concentration C is treated as a temperature. The thermal conductivity is in this case the diffusion coefficient, non-linear in C and a function, possibly, of a temperature computed beforehand and supp"
  },
  "u4.61.01": {
    "frTitle": "Opérateur CALC_MATR_ELEM",
    "frLead": "u4.61.01 Opérateur CALC MATR ELEM 1 But Calculer des matrices élémentaires que l'on pourra assembler par la commande ASSE MATRICE. Les options de calculs possibles sont: 'AMOR ACOU','mass meca','RIGI FLUI STRU','rigi rota','AMOR MECA', 'MECA GYRO','MASS MECA DIAG','rigi geom','RIGI THER', 'MASS THER','IMPE MECA','rigi meca','MASS ACOU','ONDE FLUI', 'RIGI MEC",
    "enTitle": "Operator CALC_MATR_ELEM",
    "enLead": "u4.61.01 Operator CALC MATR ELEM 1 Purpose Compute elementary matrices which one will be able to assemble by the command ASSE MATRICE. The possible analysis options are: 'AMOR ACOU', 'mass meca', 'RIGI FLUI STRU', 'rigi rota', 'AMOR MECA', 'MECA GYRO', 'MASS MECA DIAG', 'rigi geom', 'RIGI THER', 'MASS THER', 'IMPE MECA', 'rigi meca', 'MASS ACOU', 'ONDE FLUI'"
  },
  "u4.61.02": {
    "frTitle": "Opérateur CALC_VECT_ELEM",
    "frLead": "u4.61.02 Opérateur CALC VECT ELEM 1 But Calculer un ensemble de vecteurs élémentaires que l'on pourra assembler avec ASSE VECTEUR. Les options de calcul possibles sont: 'CHAR MECA', 'CHAR THER', 'CHAR ACOU', 'FORC NODA'. Produit une structure de données de type vect elem . 2 Syntaxe 3 Généralités Cette commande sert à calculer un ensemble de vecteurs élément",
    "enTitle": "Operator CALC_VECT_ELEM",
    "enLead": "u4.61.02 Operator CALC VECT ELEM 1 Purpose Compute a set of elementary vectors which one will be able to assemble with ASSE VECTEUR. The possible analysis options are: 'CHAR MECA', 'CHAR THER', 'CHAR ACOU', 'FORC NODA'. Produces a data structure of type vect elem . 2 Syntax 3 General points This command is used to compute a set of elementary vectors (corresp"
  },
  "u4.61.03": {
    "frTitle": "Opérateur CALC_CHAR_CINE",
    "frLead": "u4.61.03 Opérateur CALC CHAR CINE 1 But Calculer le champ aux nœuds correspondant aux degrés de liberté imposés par AFFE CHAR CINE. Ce champ aux nœuds ainsi calculé devra être utilisé lors de la résolution du système linéaire avec l'opérateur RESOUDRE U4.51.02. Cet opérateur n’est utile que pour les calculs “pas à pas” où l’on résout les systèmes linéaires p",
    "enTitle": "Operator CALC_CHAR_CINE",
    "enLead": "u4.61.03 Operator CALC CHAR CINE 1 Purpose Compute the field at the nodes corresponding to the degrees of freedom imposed by AFFE CHAR CINE. This nodal field thus computed will have to be used when solving the linear system with the operator RESOUDRE U4.51.02. This operator is useful only for the “step-by-step” analyses in which one solves the linear systems"
  },
  "u4.61.11": {
    "frTitle": "Opérateur NUME_DDL",
    "frLead": "u4.61.11 Opérateur NUME DDL 1 But Numéroter les inconnues d’un système d’équations linéaires. Cet opérateur \"prépare\" également l’assemblage de la matrice associée à ce système d’équations. C’est dans cet opérateur qu’est choisie la méthode de résolution des systèmes linéaires : LDLT, gradient conjugué, multi-frontale… Produit une structure de données de typ",
    "enTitle": "Operator NUME_DDL",
    "enLead": "u4.61.11 Operator NUME DDL 1 Purpose Number the unknowns of a system of linear equations. This operator also “prepares” the assembly of the matrix associated with this system of equations. It is in this operator that the method for solving the linear systems is chosen: LDLT, conjugate gradient, multifrontal… Produces a data structure of type nume ddl. 2 Synt"
  },
  "u4.61.21": {
    "frTitle": "Macro-commande ASSEMBLAGE",
    "frLead": "u4.61.21 Macro-commande ASSEMBLAGE 1 But Calculer une ou plusieurs matrices assemblées (rigidité, masse, amortissement …) ainsi que un ou plusieurs vecteurs assemblés. Cette commande est recommandée pour créer les concepts nécessaires aux calculs dynamiques, qu'il s'agisse des matrices ou des vecteurs. Elle évite de fastidieux appels aux commandes \"de base\":",
    "enTitle": "Macro-command ASSEMBLAGE",
    "enLead": "u4.61.21 Macro-command ASSEMBLAGE 1 Purpose Compute one or more assembled matrices (stiffness, mass, damping …) as well as one or more assembled vectors. This command is recommended in order to create the concepts necessary for dynamic analyses, whether matrices or vectors. It avoids tedious calls to the “basic” commands: CALC MATR ELEM U4.41.01, NUME DDL U4"
  },
  "u4.61.22": {
    "frTitle": "Opérateur ASSE_MATRICE",
    "frLead": "u4.61.22 Opérateur ASSE MATRICE 1 But Créer une matrice par assemblage de matrices élémentaires. La matrice produite est \"creuse\"; elle est stockée sous forme \"morse\". Produit une structure de données de type matr asse . 2 Syntaxe 3 Opérandes 3.1 Opérande MATR ELEM Nom du concept matr elem à assembler. 3.2 Numérotation et stockage Précise la numérotation des",
    "enTitle": "Operator ASSE_MATRICE",
    "enLead": "u4.61.22 Operator ASSE MATRICE 1 Purpose Create a matrix by assembly of elementary matrices. The matrix produced is “sparse”; it is stored in “morse” form. Produces a data structure of type matr asse . 2 Syntax 3 Operands 3.1 Operand MATR ELEM Name of the matr elem concept to be assembled. 3.2 Numbering and storage Specifies the numbering of the equations of"
  },
  "u4.61.23": {
    "frTitle": "Opérateur ASSE_VECTEUR",
    "frLead": "u4.61.23 Opérateur ASSE VECTEUR 1 But Construire un champ aux nœuds par assemblage de vecteurs élémentaires. Ce champ pourra, par exemple, être utilisé comme second membre pour la résolution d’un système linéaire. Produit une structure de données cham no. 2 Syntaxe 3 Opérandes 3.1 Opérande VECT ELEM Liste des concepts de type vect elem à assembler. Les diffé",
    "enTitle": "Operator ASSE_VECTEUR",
    "enLead": "u4.61.23 Operator ASSE VECTEUR 1 Purpose Build a field at the nodes by assembly of elementary vectors. This field may, for example, be used as a right-hand side for the solution of a linear system. Produces a data structure cham no. 2 Syntax 3 Operands 3.1 Operand VECT ELEM List of the concepts of type vect elem to be assembled. The various elementary vector"
  },
  "u4.62.01": {
    "frTitle": "Opérateur MACR_ELEM_STAT",
    "frLead": "u4.62.01 Opérateur MACR ELEM STAT 1 But Créer des macro-éléments pour les calculs de \"sous-structuration statique\" ou pour les calculs de \"modification structurale\". Dans le cas des calculs de \"sous-structuration statique\", le macro-élément est calculé par assemblage d'éléments finis ordinaires et condensation des matrices aux degrés de liberté \"extérieurs\".",
    "enTitle": "Operator MACR_ELEM_STAT",
    "enLead": "u4.62.01 Operator MACR ELEM STAT 1 Purpose Create macro-elements for analyses of \"static substructuring\" or for analyses of \"structural modification\". In the case of analyses of \"static substructuring\", the macro-element is computed by assembly of ordinary finite elements and condensation of the matrices onto the \"external\" degrees of freedom. In the case of"
  },
  "u4.62.02": {
    "frTitle": "Opérateur DEPL_INTERNE",
    "frLead": "u4.62.02 Opérateur DEPL INTERNE 1 But Calculer le champ à l'intérieur d'un macro-élément. Deux cas de figure peuvent exister : le macro-élément a été obtenu par sous-structuration statique , ou le macro-élément a été obtenu par condensation de la mesure pour un calcul de modification structurale (voir U4.62.01). Dans le cas d’une sous-structure statique: le ",
    "enTitle": "Operator DEPL_INTERNE",
    "enLead": "u4.62.02 Operator DEPL INTERNE 1 Purpose Compute the field inside a macro-element. Two situations may exist: the macro-element was obtained by static substructuring , or the macro-element was obtained by condensation of the measurement for a structural modification analysis (see U4.62.01). In the case of a static substructure: the result of the command is a "
  },
  "u4.63.01": {
    "frTitle": "Opérateur CALC_CHAR_SEISME",
    "frLead": "u4.63.01 Opérateur CALC CHAR SEISME 1 But Établir le chargement sismique (forces d’inertie d'entraînement unitaires) pour un calcul de réponse en mouvement relatif par rapport aux mouvements des appuis. Pour une meilleure compréhension théorique de ce chargement, on se reportera au document R4.05.01. Le concept produit est directement utilisable lors d’une a",
    "enTitle": "Operator CALC_CHAR_SEISME",
    "enLead": "u4.63.01 Operator CALC CHAR SEISME 1 Purpose Establish the seismic loading (unit entrainment inertia forces) for a response analysis in relative motion with respect to the motions of the supports. For a better theoretical understanding of this loading, one should refer to the document R4.05.01. The concept produced can be used directly during a direct transi"
  },
  "u4.63.02": {
    "frTitle": "Opérateur PRE_SEISME_NONL",
    "frLead": "u4.63.02 Opérateur PRE SEISME NONL 1 But Cet opérateur a pour but de simplifier la mise en œuvre de la méthode Laplace-Temps en permettant la réalisation de calculs non-linéaires avec des impédances produites par MISS3D. L'utilisation de la méthode Laplace‑Temps ( cf . U2.06.05) requiert plusieurs opérations: 1. le calcul d'une base de modes d'interface néce",
    "enTitle": "Operator PRE_SEISME_NONL",
    "enLead": "u4.63.02 Operator PRE SEISME NONL 1 Purpose The purpose of this operator is to simplify the implementation of the Laplace-Time method by making it possible to carry out non-linear analyses with impedances produced by MISS3D. The use of the Laplace-Time method ( cf . U2.06.05) requires several operations: 1. the computation of a basis of interface modes neces"
  },
  "u4.63.03": {
    "frTitle": "Macro-commande DEFI_PRES_EC8",
    "frLead": "u4.63.03 Macro-commande DEFI PRES EC8 Résumé : Cette macro-commande construit une formule permettant d'appliquer des champs de pression aux parois des grands réservoirs dans le cadre d'une vérification sismique par calcul mécanique équivalent selon l'Eurocode 8. Pour appliquer ce champ de pression, cette formule doit être fournie à AFFE CHAR MECA/FORCE COQUE",
    "enTitle": "Macro-command DEFI_PRES_EC8",
    "enLead": "u4.63.03 Macro-command DEFI PRES EC8 Summary: This macro-command builds a formula making it possible to apply pressure fields to the walls of large tanks within the framework of a seismic verification by an equivalent mechanical analysis according to Eurocode 8. In order to apply this pressure field, this formula must be supplied to AFFE CHAR MECA/FORCE COQU"
  },
  "u4.63.11": {
    "frTitle": "Macro commande PROJ_BASE",
    "frLead": "u4.63.11 Macro commande PROJ BASE 1 But Projeter des matrices et/ou vecteurs assemblés sur une base modale ou sur une base de RITZ. Les matrices et vecteurs projetés résultats seront utilisés par les algorithmes de calcul en composantes généralisées (DYNA VIBRA U4.53.03 par exemple). Cette macro-commande se substitue aux commandes successives suivantes: - NU",
    "enTitle": "Macro-command PROJ_BASE",
    "enLead": "u4.63.11 Macro-command PROJ BASE 1 Purpose Project assembled matrices and/or vectors onto a modal basis or onto a RITZ basis. The resulting projected matrices and vectors will be used by the analysis algorithms in generalised components (DYNA VIBRA U4.53.03 for example). This macro-command replaces the following successive commands: - NUME DDL GENE U4.65.03 "
  },
  "u4.63.12": {
    "frTitle": "Opérateur PROJ_MATR_BASE",
    "frLead": "u4.63.12 Opérateur PROJ MATR BASE 1 But Projeter une matrice assemblée sur une base de modes propres mécaniques ou une base de RITZ. La matrice projetée résultat sera utilisée par les algorithmes de calcul en composantes généralisées (DYNA VIBRA U4.53.03 par exemple). On peut utiliser PROJ BASE U4.63.11 pour traiter plusieurs matrices simultanément. Produit ",
    "enTitle": "Operator PROJ_MATR_BASE",
    "enLead": "u4.63.12 Operator PROJ MATR BASE 1 Purpose Project an assembled matrix onto a basis of mechanical eigenmodes or a RITZ basis. The resulting projected matrix will be used by the analysis algorithms in generalised components (DYNA VIBRA U4.53.03 for example). One may use PROJ BASE U4.63.11 to process several matrices simultaneously. Produces a generalised-matr"
  },
  "u4.63.13": {
    "frTitle": "Opérateur PROJ_VECT_BASE",
    "frLead": "u4.63.13 Opérateur PROJ VECT BASE 1 But Projeter un vecteur assemblé sur une base de modes propres mécaniques ou une base de Ritz. Le vecteur projeté pourra être utilisé par les algorithmes de calcul en composantes généralisées. On peut utiliser PROJ BASE U4.63.11 pour ces projections. Produit un concept de type vect asse gene. 2 Syntaxe 3 Opérandes 3.1 Opér",
    "enTitle": "Operator PROJ_VECT_BASE",
    "enLead": "u4.63.13 Operator PROJ VECT BASE 1 Purpose Project an assembled vector onto a basis of mechanical eigenmodes or a Ritz basis. The projected vector may be used by the analysis algorithms in generalised components. One may use PROJ BASE U4.63.11 for these projections. Produces a concept of type vect asse gene. 2 Syntax 3 Operands 3.1 Operand BASE Concept of ty"
  },
  "u4.63.14": {
    "frTitle": "Opérateur PROJ_SPEC_BASE",
    "frLead": "u4.63.14 Opérateur PROJ SPEC BASE 1 But Projeter un ou plusieurs spectres de turbulence sur une (ou plusieurs) base(s) modale(s). Les spectres sont définis par l'opérateur DEFI SPEC TURB U4.44.31. La (ou les) base(s) modale(s) peut ou (peuvent) être définies par: - un concept de type melasflu produit par l'opérateur CALC FLUI STRU U4.66.02, - un concept de t",
    "enTitle": "Operator PROJ_SPEC_BASE",
    "enLead": "u4.63.14 Operator PROJ SPEC BASE 1 Purpose Project one or more turbulence spectra onto one (or more) modal basis (bases). The spectra are defined by the operator DEFI SPEC TURB U4.44.31. The modal basis (or bases) may be defined by: - a concept of type melasflu produced by the operator CALC FLUI STRU U4.66.02, - a concept of type mode meca produced by the op"
  },
  "u4.63.22": {
    "frTitle": "Opérateur REST_SPEC_PHYS",
    "frLead": "u4.63.22 Opérateur REST SPEC PHYS 1 But Calculer la réponse d'une structure dans la base physique. Le calcul est effectué à partir d'un interspectre de réponse modale, en certains nœuds sélectionnés du maillage. L’opérateur réalise le calcul, avec quatre variantes, des spectres de réponse dans la base physique. L’utilisateur peut choisir une réponse en dépla",
    "enTitle": "Operator REST_SPEC_PHYS",
    "enLead": "u4.63.22 Operator REST SPEC PHYS 1 Purpose Compute the response of a structure in the physical basis. The analysis is carried out from a modal-response interspectrum, at certain selected nodes of the mesh. The operator carries out the computation, with four variants, of the response spectra in the physical basis. The user may choose a response in displacemen"
  },
  "u4.63.31": {
    "frTitle": "Opérateur REST_GENE_PHYS",
    "frLead": "u4.63.31 Opérateur REST GENE PHYS 1 But Restituer dans la base physique des résultats en coordonnées généralisées. Cet opérateur permet de restituer dans l’espace physique des résultats obtenus sur un système en coordonnées généralisées par des méthodes de recombinaison modale. Le concept produit est un concept de type: - dyna trans si les résultats générali",
    "enTitle": "Operator REST_GENE_PHYS",
    "enLead": "u4.63.31 Operator REST GENE PHYS 1 Purpose Recover in the physical basis results in generalised coordinates. This operator makes it possible to recover in the physical space results obtained on a system in generalised coordinates by modal recombination methods. The concept produced is a concept of type: - dyna trans if the generalised results come from an an"
  },
  "u4.63.32": {
    "frTitle": "Opérateur REST_SOUS_STRUC",
    "frLead": "u4.63.32 Opérateur REST SOUS STRUC 1 But Restituer dans la base physique des résultats en coordonnées généralisées. Cet opérateur permet, à partir de résultats sur un système en coordonnées généralisées obtenus par des méthodes de recombinaison modale tran gene, des méthodes de sous structuration cyclique mode cycl, de sous structuration dynamique mode gene ",
    "enTitle": "Operator REST_SOUS_STRUC",
    "enLead": "u4.63.32 Operator REST SOUS STRUC 1 Purpose Recover in the physical basis results in generalised coordinates. This operator makes it possible, from results on a system in generalised coordinates obtained by modal recombination methods tran gene, cyclic substructuring methods mode cycl, dynamic substructuring mode gene or harmonic substructuring harm gene, to"
  },
  "u4.63.33": {
    "frTitle": "Opérateur REST_COND_TRAN",
    "frLead": "u4.63.33 Opérateur REST COND TRAN 1 But Restituer dans la base physique de modèles complets des résultats d'évolutions transitoires sur des modèles condensés. Cet opérateur permet, à partir de résultats d'évolutions transitoires en non-linéaire sur des modèles condensés, d'obtenir un autre résultat d'évolution transitoire sur un modèle plus complet. Le conce",
    "enTitle": "Operator REST_COND_TRAN",
    "enLead": "u4.63.33 Operator REST COND TRAN 1 Purpose Recover in the physical basis of complete models the results of transient evolutions on condensed models. This operator makes it possible, from results of non-linear transient evolutions on condensed models, to obtain another transient-evolution result on a more complete model. The concept produced is a concept of t"
  },
  "u4.63.34": {
    "frTitle": "Opérateur REST_SPEC_TEMP",
    "frLead": "u4.63.34 Opérateur REST SPEC TEMP 1 But Retour de champs de résultats, en coordonnées généralisées ou dans la base physique, du fréquentiel vers le temporel et inversement, par transformée de Fourier rapide (FFT). Cet opérateur permet, à partir d’un résultat d’évolution transitoire sur un système en coordonnées généralisées ou dans la base physique, d’obteni",
    "enTitle": "Operator REST_SPEC_TEMP",
    "enLead": "u4.63.34 Operator REST SPEC TEMP 1 Purpose Return of result fields, in generalised coordinates or in the physical basis, from the frequency domain to the time domain and conversely, by fast Fourier transform (FFT). This operator makes it possible, from a transient-evolution result on a system in generalised coordinates or in the physical basis, to obtain a f"
  },
  "u4.63.35": {
    "frTitle": "Opérateur REST_MODE_NONL",
    "frLead": "u4.63.35 Opérateur REST MODE NONL 1 But L'opérateur REST MODE NONL permet de restituer dans le domaine temporel ou dans le domaine de Fourier une solution périodique issue d'un calcul avec MODE NON LINE. Cet opérateur produit un concept de type dyna trans (dans le domaine temporel) ou mode meca (dans le domaine de Fourier). 2 Syntaxe 3 Opérandes 3.1 Mot clé ",
    "enTitle": "Operator REST_MODE_NONL",
    "enLead": "u4.63.35 Operator REST MODE NONL 1 Purpose The operator REST MODE NONL makes it possible to recover, in the time domain or in the Fourier domain, a periodic solution coming from an analysis with MODE NON LINE. This operator produces a concept of type dyna trans (in the time domain) or mode meca (in the Fourier domain). 2 Syntax 3 Operands 3.1 Keyword MODE NO"
  },
  "u4.63.36": {
    "frTitle": "Opérateur POST_GENE_PHYS",
    "frLead": "u4.63.36 Opérateur POST GENE PHYS 1 But Restituer dans la base physique d'une partie des résultats en coordonnées généralisées. Cet opérateur permet de restituer dans l’espace physique des résultats obtenus sur un système en coordonnées généralisées par des méthodes de recombinaison modale. A la différence de l'opérateur REST GENE PHYS, cet opérateur permet ",
    "enTitle": "Operator POST_GENE_PHYS",
    "enLead": "u4.63.36 Operator POST GENE PHYS 1 Purpose Recover in the physical basis part of the results in generalised coordinates. This operator makes it possible to recover in the physical space results obtained on a system in generalised coordinates by modal recombination methods. Unlike the operator REST GENE PHYS, this operator makes it possible to limit the recov"
  },
  "u4.64.01": {
    "frTitle": "Opérateur DEFI_INTERF_DYNA",
    "frLead": "u4.64.01 Opérateur DEFI INTERF DYNA 1 But Définir les interfaces d’une structure et leur affecter un type. Employé dans le cadre de méthodes de recombinaison modale, ou de sous-structuration dynamique par synthèse modale. Recense également, sans les calculer (tâche effectuée par l’opérateur DEFI BASE MODALE U4.64.02), les déformées statiques correspondant au",
    "enTitle": "Operator DEFI_INTERF_DYNA",
    "enLead": "u4.64.01 Operator DEFI INTERF DYNA 1 Purpose Define the interfaces of a structure and assign a type to them. Used within modal recombination methods, or dynamic substructuring by modal synthesis. It also lists, without computing them (a task carried out by the operator DEFI BASE MODALE U4.64.02), the static deflected shapes corresponding to the defined inter"
  },
  "u4.64.02": {
    "frTitle": "Opérateur DEFI_BASE_MODALE",
    "frLead": "u4.64.02 Opérateur DEFI BASE MODALE 1 But Le but de l'opérateur est de définir: - la base d'une sous-structuration dynamique, quand on a découpé la structure complète en sous-structures; - ou la base d'une recombinaison modale, quand on traite directement la structure complète. La base modale obtenue par cet opérateur est du type: 'CLASSIQUE' si la base moda",
    "enTitle": "Operator DEFI_BASE_MODALE",
    "enLead": "u4.64.02 Operator DEFI BASE MODALE 1 Purpose The purpose of the operator is to define: - the basis of a dynamic substructure, when one has split the complete structure into substructures; - or the basis of a modal recombination, when one treats the complete structure directly. The modal basis obtained by this operator is of type: 'CLASSIQUE' if the modal bas"
  },
  "u4.65.01": {
    "frTitle": "Opérateur MACR_ELEM_DYNA",
    "frLead": "u4.65.01 Opérateur MACR ELEM DYNA 1 But Définir un macro-élément de sous-structuration dynamique. Dans le cadre d’une analyse transitoire, modale ou harmonique, avec sous-structuration dynamique, l’opérateur MACR ELEM DYNA effectue la projection des matrices de rigidité, de masse et éventuellement d’amortissement (analyse harmonique) sur la base modale de la",
    "enTitle": "Operator MACR_ELEM_DYNA",
    "enLead": "u4.65.01 Operator MACR ELEM DYNA 1 Purpose Define a macro-element for dynamic substructuring. Within a transient, modal or harmonic analysis with dynamic substructuring, the operator MACR ELEM DYNA projects the stiffness, mass and, possibly, damping matrices (harmonic analysis) onto the modal basis of the substructure defined by DEFI BASE MODALE U4.64.02, an"
  },
  "u4.65.02": {
    "frTitle": "Opérateur DEFI_MODELE_GENE",
    "frLead": "u4.65.02 Opérateur DEFI MODELE GENE 1 But Créer la structure globale à partir des sous-structures en sous-structuration dynamique (cf R4.06.02). Dans le cadre d’un calcul utilisant les méthodes de sous-structuration dynamique (analyse modale ou harmonique), l’opérateur DEFI MODELE GENE permet de décrire la structure globale à partir des macro-éléments issus ",
    "enTitle": "Operator DEFI_MODELE_GENE",
    "enLead": "u4.65.02 Operator DEFI MODELE GENE 1 Purpose Create the global structure from the substructures in dynamic substructuring (cf R4.06.02). Within an analysis using the dynamic substructuring methods (modal or harmonic analysis), the operator DEFI MODELE GENE makes it possible to describe the global structure from the macro-elements coming from MACR ELEM DYNA U"
  },
  "u4.65.03": {
    "frTitle": "Opérateur NUME_DDL_GENE",
    "frLead": "u4.65.03 Opérateur NUME DDL GENE 1 But Numéroter les degrés de liberté de la structure globale à partir de la numérotation des sous-structures. Dans le cadre d’un calcul utilisant les méthodes de sous-structuration dynamique (analyse modale ou harmonique), l’opérateur NUME DDL GENE définit la bijection entre, d’une part, les numéros des degrés de liberté gén",
    "enTitle": "Operator NUME_DDL_GENE",
    "enLead": "u4.65.03 Operator NUME DDL GENE 1 Purpose Number the degrees of freedom of the global structure from the numbering of the substructures. Within an analysis using the dynamic substructuring methods (modal or harmonic analysis), the operator NUME DDL GENE defines the bijection between, on the one hand, the numbers of the generalised degrees of freedom of each "
  },
  "u4.65.04": {
    "frTitle": "Opérateur ASSE_MATR_GENE",
    "frLead": "u4.65.04 Opérateur ASSE MATR GENE 1 But Assembler la matrice de rigidité ou de masse globale à partir des sous-structures. Dans le cadre d’un calcul utilisant les méthodes de sous-structuration dynamique (analyse modale ou harmonique), cet opérateur crée la matrice généralisée de rigidité ou de masse ou éventuellement d’amortissement (analyse harmonique ou t",
    "enTitle": "Operator ASSE_MATR_GENE",
    "enLead": "u4.65.04 Operator ASSE MATR GENE 1 Purpose Assemble the global stiffness or mass matrix from the substructures. Within an analysis using the dynamic substructuring methods (modal or harmonic analysis), this operator creates the generalised stiffness or mass matrix, or possibly the damping matrix (harmonic or transient analysis), by assembly of the correspond"
  },
  "u4.65.05": {
    "frTitle": "Opérateur ASSE_VECT_GENE",
    "frLead": "u4.65.05 Opérateur ASSE VECT GENE 1 But Projeter les chargements sur la base modale d’une sous-structure. Dans le cadre d’un calcul harmonique utilisant les méthodes de sous-structuration, l’opérateur ASSE VECT GENE effectue la projection des chargements de type cham no DEPL R issus de ASSE VECTEUR U4.61.23, sur la base modale de la sous-structure définie pa",
    "enTitle": "Operator ASSE_VECT_GENE",
    "enLead": "u4.65.05 Operator ASSE VECT GENE 1 Purpose Project the loadings onto the modal basis of a substructure. Within a harmonic analysis using the substructuring methods, the operator ASSE VECT GENE projects the loadings of type cham no DEPL R coming from ASSE VECTEUR U4.61.23 onto the modal basis of the substructure defined by DEFI BASE MODALE U4.64.02. The gener"
  },
  "u4.65.11": {
    "frTitle": "Opérateur CREA_ELEM_SSD",
    "frLead": "u4.65.11 Opérateur CREA ELEM SSD 1 But Cet opérateur a pour objectif de faciliter la tâche de l'utilisateur pour la création d'un macro-élément dynamique. CREA ELEM SSD calcule les vecteurs de base de projection, définit les interfaces et crée le macro-élément dynamique. Il produit un concept de type macr elem dyna. Le macro-élément dynamique crée est prêt à",
    "enTitle": "Operator CREA_ELEM_SSD",
    "enLead": "u4.65.11 Operator CREA ELEM SSD 1 Purpose The purpose of this operator is to make the user's task easier for the creation of a dynamic macro-element. CREA ELEM SSD computes the projection-basis vectors, defines the interfaces and creates the dynamic macro-element. It produces a concept of type macr elem dyna. The dynamic macro-element created is ready to be "
  },
  "u4.65.12": {
    "frTitle": "Opérateur ASSE_ELEM_SSD",
    "frLead": "u4.65.12 Opérateur ASSE ELEM SSD 1 But Cet opérateur a pour objectif de faciliter la tâche de l'utilisateur pour l'assemblage des macro-éléments dynamiques. Il enchaîne les commandes suivantes: DEFI MODELE GENE, NUME DDL GENE et ASSE MATR GENE. Il produit un concept de type modele gene, et éventuellement un concept de type nume ddl gene et des concepts de ty",
    "enTitle": "Operator ASSE_ELEM_SSD",
    "enLead": "u4.65.12 Operator ASSE ELEM SSD 1 Purpose The purpose of this operator is to make the user's task easier for the assembly of the dynamic macro-elements. It chains the following commands: DEFI MODELE GENE, NUME DDL GENE and ASSE MATR GENE. It produces a concept of type modele gene, and possibly a concept of type nume ddl gene and concepts of type matr asse ge"
  },
  "u4.66.01": {
    "frTitle": "Opérateur CALC_MATR_AJOU",
    "frLead": "u4.66.01 Opérateur CALC MATR AJOU 1 But Calculer des matrices de masse R4.07.03, d’amortissement ou de rigidité ajoutés. Les matrices sont induites par un fluide parfait, incompressible, au repos ou en écoulement potentiel, sur une structure en 2D, 2D axisymétrique ou en 3D. Les termes de ces matrices sont calculés sur la base modale de la structure dans le ",
    "enTitle": "Operator CALC_MATR_AJOU",
    "enLead": "u4.66.01 Operator CALC MATR AJOU 1 Purpose Compute added mass R4.07.03, damping or stiffness matrices. The matrices are induced by a perfect, incompressible fluid, at rest or in potential flow, on a structure in 2D, axisymmetric 2D or in 3D. The terms of these matrices are computed on the modal basis of the structure in vacuum. The computation of the terms o"
  },
  "u4.66.02": {
    "frTitle": "Opérateur CALC_FLUI_STRU",
    "frLead": "u4.66.02 Opérateur CALC FLUI STRU 1 But Calculer les paramètres modaux d'une structure soumise à un écoulement. Permet de tenir compte des forces fluide-élastiques qui sont représentées par une matrice de transfert complexe les reliant aux déplacements modaux. Pour certaines configurations, la matrice de transfert peut être décomposée en trois matrices réell",
    "enTitle": "Operator CALC_FLUI_STRU",
    "enLead": "u4.66.02 Operator CALC FLUI STRU 1 Purpose Compute the modal parameters of a structure subjected to a flow. Makes it possible to take into account the fluid-elastic forces, which are represented by a complex transfer matrix relating them to the modal displacements. For certain configurations, the transfer matrix can be decomposed into three real matrices of "
  },
  "u4.66.03": {
    "frTitle": "Opérateur CALC_FORC_AJOU",
    "frLead": "u4.66.03 Opérateur CALC FORC AJOU 1 But Cette commande permet de calculer l’effet de surpression hydrodynamique due au mouvement d’entraînement de la structure en analyse sismique où on décompose le mouvement total en mouvement d'entraînement et mouvement relatif. Le calcul de cette force s’effectue comme celui de la masse ajoutée par analogie thermique, mai",
    "enTitle": "Operator CALC_FORC_AJOU",
    "enLead": "u4.66.03 Operator CALC FORC AJOU 1 Purpose This command makes it possible to compute the effect of the hydrodynamic overpressure due to the entrainment motion of the structure in seismic analysis, in which one decomposes the total motion into an entrainment motion and a relative motion. The analysis of this force is carried out in the same way as that of the"
  },
  "u4.66.04": {
    "frTitle": "Opérateur CALC_CHAM_FLUI",
    "frLead": "u4.66.04 Opérateur CALC CHAM FLUI 1 But Calculer des champs de potentiel fluide associés à la théorie de la masse ajoutée R4.07.03, Les champs sont induits par un fluide parfait, incompressible, au repos ou en écoulement potentiel, sur une structure en 3D. Les termes de ces champs sont calculés sur la base modale de la structure dans le vide. Le calcul des t",
    "enTitle": "Operator CALC_CHAM_FLUI",
    "enLead": "u4.66.04 Operator CALC CHAM FLUI 1 Purpose Compute fluid potential fields associated with the added-mass theory R4.07.03. The fields are induced by a perfect, incompressible fluid, at rest or in potential flow, on a 3D structure. The terms of these fields are computed on the modal basis of the structure in vacuum. The analysis of the terms of the matrices is"
  },
  "u4.66.11": {
    "frTitle": "Macro-commande MACRO_MATR_AJOU",
    "frLead": "u4.66.11 Macro-commande MACRO MATR AJOU 1 But Calculer de façon plus condensée qu’avec CALC MATR AJOU des matrices de masse, d’amortissement ou de rigidité ajoutés R4.07.03. Les matrices sont induites par un fluide parfait, incompressible, au repos ou en écoulement potentiel, sur une structure en 2D, 2D axisymétrique ou en 3D. Les termes de ces matrices sont",
    "enTitle": "Macro-command MACRO_MATR_AJOU",
    "enLead": "u4.66.11 Macro-command MACRO MATR AJOU 1 Purpose Compute, in a more condensed way than with CALC MATR AJOU, added mass, damping or stiffness matrices R4.07.03. The matrices are induced by a perfect, incompressible fluid, at rest or in potential flow, on a structure in 2D, axisymmetric 2D or 3D. The terms of these matrices are computed on the modal basis of t"
  },
  "u4.66.21": {
    "frTitle": "Opérateur MODI_BASE_MODALE",
    "frLead": "u4.66.21 Opérateur MODI BASE MODALE 1 But Définir la base modale d’une structure sous écoulement. Cette base est obtenue après un calcul de couplage fluide-élastique réalisé à l’aide de l’opérateur CALC FLUI STRU U4.66.02. Le concept produit est de type mode meca. 2 Syntaxe 3 Opérandes Concept de type [mode meca] qui définit les caractéristiques modales avan",
    "enTitle": "Operator MODI_BASE_MODALE",
    "enLead": "u4.66.21 Operator MODI BASE MODALE 1 Purpose Define the modal basis of a structure under flow. This basis is obtained after an analysis of fluid-elastic coupling carried out with the aid of the operator CALC FLUI STRU U4.66.02. The concept produced is of type mode meca. 2 Syntax 3 Operands Concept of type [mode meca] which defines the modal characteristics b"
  },
  "u4.67.01": {
    "frTitle": "Opérateur DEFI_BASE_REDUITE",
    "frLead": "u4.67.01 Opérateur DEFI BASE REDUITE Le but de l'opérateur est de construire la base réduite à partir d'un calcul non-linéaire (thermique ou mécanique) ou d'un calcul linéaire paramétrique. Il existe deux méthodes: - Pour les problèmes non-linéaires, l'opérateur s'appuie sur une sd resultat de type evol ther ou evol noli et réalise une décomposition aux vale",
    "enTitle": "Operator DEFI_BASE_REDUITE",
    "enLead": "u4.67.01 Operator DEFI BASE REDUITE The purpose of the operator is to build the reduced basis from a non-linear analysis (thermal or mechanical) or from a parametric linear analysis. There are two methods: - For non-linear problems, the operator relies on an sd resultat of type evol ther or evol noli and carries out a singular value decomposition (SVD) on th"
  },
  "u4.67.02": {
    "frTitle": "Opérateur DEFI_DOMAINE_REDUIT",
    "frLead": "u4.67.02 Opérateur DEFI DOMAINE REDUIT Le but de l'opérateur est d'enrichir un maillage existant par des groupes (de mailles ou de nœuds) qui définissent un sous-domaine appelé domaine réduit d'intégration (RID) . L'opérateur s'appuie sur une ou plusieurs sd résultat de type mode empipour déterminer des nœuds spécifiques, appelés points d'interpolation, en a",
    "enTitle": "Operator DEFI_DOMAINE_REDUIT",
    "enLead": "u4.67.02 Operator DEFI DOMAINE REDUIT The purpose of the operator is to enrich an existing mesh with groups (of mesh cells or of nodes) which define a subdomain called the reduced integration domain (RID). The operator relies on one or more result data structures of type mode empi in order to determine specific nodes, called interpolation points, by applying"
  },
  "u4.67.03": {
    "frTitle": "Opérateur REST_REDUIT_COMPLET",
    "frLead": "u4.67.03 Opérateur REST REDUIT COMPLET Le but de l'opérateur est de reconstruire les solutions sur un modèle complet à partir d'un modèle réduit. L'opérateur reconstruit un evol therou un evol nolià partir d'une base empirique (voir U4.67.01, opérateur DEFI BASE REDUITE) et du résultat d'un calcul réduit. 1 Syntaxe 2 Opérandes 2.1 Opérande RESULTAT REDUIT Ce",
    "enTitle": "Operator REST_REDUIT_COMPLET",
    "enLead": "u4.67.03 Operator REST REDUIT COMPLET The purpose of the operator is to reconstruct the solutions on a complete model from a reduced model. The operator reconstructs an evol ther or an evol noli from an empirical basis (see U4.67.01, operator DEFI BASE REDUITE) and from the result of a reduced analysis. 1 Syntax 2 Operands 2.1 Operand RESULTAT REDUIT This ke"
  },
  "u4.71.00": {
    "frTitle": "Sélection d’un ou plusieurs champs dans une Structure de Données RESULTAT",
    "frLead": "u4.71.00 Sélection d’un ou plusieurs champs dans une Structure de Données RESULTAT 1 But Description des mots-clés d’accès aux champs de grandeurs d’une structure de données de type resultat. Pour extraire un champ de grandeurs dans un concept resultat on dispose de deux types d’indicateurs : les noms symboliques et les variables d’accès. Ce document décrit ",
    "enTitle": "Selection of one or more fields in a RESULTAT data structure",
    "enLead": "u4.71.00 Selection of one or more fields in a RESULTAT data structure 1 Purpose Description of the keywords for access to the fields of quantities (grandeurs) of a data structure of type resultat. In order to extract a field of quantities (grandeurs) in a result concept one has two types of indicators: the symbolic names and the access variables. This docume"
  },
  "u4.71.02": {
    "frTitle": "Opérateur RECU_TABLE",
    "frLead": "u4.71.02 Opérateur RECU TABLE 1 But 2 Syntaxe 3 Opérandes Nom de la structure de données dans laquelle on veut extraire une table. Nom de la table stockée dans la structure de données. Aujourd’hui, les structures de données contenant une table que l’on peut extraire par RECU TABLE/ NOM TABLE sont les suivantes: - une structure de données de type evol noli ob",
    "enTitle": "Operator RECU_TABLE",
    "enLead": "u4.71.02 Operator RECU TABLE 1 Purpose 2 Syntax 3 Operands Name of the data structure from which one wants to extract a table. Name of the table stored in the data structure. Today, the data structures containing a table which one can extract by RECU TABLE / NOM TABLE are the following: - a data structure of type evol noli obtained by STAT NON LINE or DYNA N"
  },
  "u4.71.03": {
    "frTitle": "Opérateur RECU_GENE",
    "frLead": "u4.71.03 Opérateur RECU GENE 1 But Extraire un vecteur de déplacements, vitesses ou accélérations généralisés à partir d’un résultat lui-même en coordonnées généralisées. Leur extraction a lieu pour des discretisations (instants ou fréquences) données. 2 Syntaxe 3 Opérandes 3.1 Opérande RESU GENE Concept de type tran geneou harm gene qui contient pour différ",
    "enTitle": "Operator RECU_GENE",
    "enLead": "u4.71.03 Operator RECU GENE 1 Purpose Extract a vector of generalised displacements, velocities or accelerations from a result which is itself in generalised coordinates. Their extraction takes place for given discretisations (time instants or frequencies). 2 Syntax 3 Operands 3.1 Operand RESU GENE Concept of type tran gene or harm gene which contains, for d"
  },
  "u4.71.04": {
    "frTitle": "Opérateur EXTR_RESU",
    "frLead": "u4.71.04 Opérateur EXTR RESU 1 But Extraire des champs au sein d’une structure de données de type resultat. La réduction de l’encombrement de la structure de données resultat est obtenue en archivant une partie des champs qu’elle contient. On peut choisir les champs à archiver soit en indiquant les champs à conserver, soit en indiquant les champs à exclure. ",
    "enTitle": "Operator EXTR_RESU",
    "enLead": "u4.71.04 Operator EXTR RESU 1 Purpose Extract fields from within a data structure of type resultat. The reduction of the size of the result data structure is obtained by archiving part of the fields which it contains. One can choose the fields to be archived either by indicating the fields to be kept, or by indicating the fields to be excluded. The extractio"
  },
  "u4.71.05": {
    "frTitle": "1 **u4.71.05** Procédure EXTR_TABLE",
    "frLead": "Organisme(s): EDF-R&D/AMA 1 u4.71.05 Procédure EXTR TABLE 1 But Extraire un concept d’une table. La table peut être une table container issue de la commande CALCUL. Les concepts extraits sont alors des matrices élémentaires, des vecteurs élémentaires ou des champs. La table peut avoir été obtenue par l’opérateur RECU TABLE (NOM TABLE = 'MATR GENE' ...) à par",
    "enTitle": "1 **u4.71.05** Procedure EXTR_TABLE",
    "enLead": "Organisation(s): EDF-R&D/AMA 1 u4.71.05 Procedure EXTR TABLE 1 Purpose Extract a concept from a table. The table may be a table container coming from the command CALCUL. The extracted concepts are then elementary matrices, elementary vectors or fields. The table may have been obtained by the operator RECU TABLE (NOM TABLE = 'MATR GENE' ...) from a result con"
  },
  "u4.71.06": {
    "frTitle": "Commande EXTR_CONCEPT",
    "frLead": "u4.71.06 Commande EXTR CONCEPT Résumé : Permet d'extraire un sous-objet depuis une structure de données de type dict . 1 Syntaxe 2 Opérandes Les structures de données de type dict ne sont pas des dictionnaires Python mais leur usage est similaire. La première structure de données de ce type est evol ther dict dans laquelle on stocke un objet de type evol the",
    "enTitle": "Command EXTR_CONCEPT",
    "enLead": "u4.71.06 Command EXTR CONCEPT Summary: Makes it possible to extract a sub-object from a data structure of type dict . 1 Syntax 2 Operands Data structures of type dict are not Python dictionaries but their use is similar. The first data structure of this type is evol ther dict , in which one stores an object of type evol ther associated with an access key. It"
  },
  "u4.71.07": {
    "frTitle": "Opérateur EXTR_COUPE",
    "frLead": "u4.71.07 Opérateur EXTR COUPE 1 But Extraction d’un concept résultat sur un ensemble de coupes droites unidimensionnelles à partir du résultat d’un calcul 2D ou 3D. Principe : Cette macro-commande génère un maillage à partir du tableau définissant les coupes données par l’utilisateur. Le maillage est un ensemble de segments 1D discrétisant la coupe selon les",
    "enTitle": "Operator EXTR_COUPE",
    "enLead": "u4.71.07 Operator EXTR COUPE 1 Purpose Extraction of a result concept on a set of straight one-dimensional sections from the result of a 2D or 3D analysis. Principle: This macro-command generates a mesh from the table defining the sections given by the user. The mesh is a set of 1D segments discretising the section according to the arrangements defined by th"
  },
  "u4.72.01": {
    "frTitle": "Opérateur COMB_MATR_ASSE",
    "frLead": "u4.72.01 Opérateur COMB MATR ASSE 1 But Combiner linéairement, avec coefficients réels ou complexes, des concepts de type matr asse . Cet opérateur permet également d'effectuer des combinaisons linéaires en ne considérant que la partie réelle ou imaginaire d'une matrice à coefficients complexes (extraction de la partie réelle ou complexe d'une matrice). Tous",
    "enTitle": "Operator COMB_MATR_ASSE",
    "enLead": "u4.72.01 Operator COMB MATR ASSE 1 Purpose Combine linearly, with real or complex coefficients, concepts of type matr asse . This operator also makes it possible to carry out linear combinations by considering only the real or imaginary part of a matrix with complex coefficients (extraction of the real or imaginary part of a matrix). All the concepts of type"
  },
  "u4.72.04": {
    "frTitle": "Opérateur CREA_CHAMP",
    "frLead": "u4.72.04 Opérateur CREA CHAMP 1 But Créer un champ de type cham no, carte ou cham elem. On peut créer un champ : - par affectation de valeurs sur des nœuds ou des mailles, - en assemblant (et / ou combinant) des morceaux de champs existants, - en évaluant les fonctions d'un champ de fonctions pour en faire un champ de réels, - en modifiant la représentation ",
    "enTitle": "Operator CREA_CHAMP",
    "enLead": "u4.72.04 Operator CREA CHAMP 1 Purpose Create a field of type cham no, carte or cham elem. One can create a field: - by assigning values on nodes or mesh cells, - by assembling (and/or combining) pieces of existing fields, - by evaluating the functions of a field of functions in order to make a field of reals, - by modifying the geometric representation of a"
  },
  "u4.72.05": {
    "frTitle": "Opérateur PROJ_CHAMP",
    "frLead": "u4.72.05 Opérateur PROJ CHAMP Le but de l’opérateur est de projeter les champs d’une structure de données résultat sur un autre maillage. Cette commande peut servir par exemple à transférer sur un maillage “mécanique”, le résultat d’un calcul thermique réalisé sur un maillage “thermique” différent. On peut également «poursuivre» un calcul thermique (ou mécan",
    "enTitle": "Operator PROJ_CHAMP",
    "enLead": "u4.72.05 Operator PROJ CHAMP The purpose of the operator is to project the fields of a result data structure onto another mesh. This command can be used, for example, to transfer onto a “mechanical” mesh the result of a thermal analysis carried out on a different “thermal” mesh. One can also “continue” a thermal (or mechanical) analysis on another mesh (more"
  },
  "u4.72.06": {
    "frTitle": "Opérateur PROD_MATR_CHAM",
    "frLead": "u4.72.06 Opérateur PROD MATR CHAM 1 But Effectuer le produit d’une matrice par un vecteur. La matrice est une structure de données du type matr asse : elle est à valeurs réelles ou complexes, symétrique ou non symétrique. Le vecteur est une structure de données du type cham no. Il est à valeurs réelles ou complexes. On impose que matrice et vecteur soient to",
    "enTitle": "Operator PROD_MATR_CHAM",
    "enLead": "u4.72.06 Operator PROD MATR CHAM 1 Purpose Carry out the product of a matrix by a vector. The matrix is a data structure of type matr asse: it has real or complex values, and is symmetric or non-symmetric. The vector is a data structure of type cham no. It has real or complex values. One requires that the matrix and the vector both have real values or both h"
  },
  "u4.73.01": {
    "frTitle": "Opérateur PROJ_MESU_MODAL",
    "frLead": "u4.73.01 Opérateur PROJ MESU MODAL 1 But Extrapoler des mesures expérimentales sur un modèle numérique en dynamique. Les données expérimentales peuvent être des déplacements, des vitesses, des accélérations, des déformations ou des contraintes. Elles sont définies en tant que fonction du temps ou de la fréquence, ou sous forme de liste. Il s'agit de calculer",
    "enTitle": "Operator PROJ_MESU_MODAL",
    "enLead": "u4.73.01 Operator PROJ MESU MODAL 1 Purpose Extrapolate experimental measurements onto a numerical model in dynamics. The experimental data may be displacements, velocities, accelerations, strains or stresses. They are defined as a function of time or of frequency, or in the form of a list. The aim is to compute the generalised coordinates of the measurement"
  },
  "u4.73.02": {
    "frTitle": "Macro-commande MACR_RECAL",
    "frLead": "u4.73.02 Macro-commande MACR RECAL 1 But Recaler des résultats de calculs sur des résultats expérimentaux ou sur d’autres résultats de calculs. Considérons d’une part un ou plusieurs résultats d’essais et d’autre part un ou plusieurs calculs Code Aster modélisant ces essais. MACR RECAL permet de déterminer les paramètres de ces calculs (qui peuvent être des ",
    "enTitle": "Macro-command MACR_RECAL",
    "enLead": "u4.73.02 Macro-command MACR RECAL 1 Purpose Recalibrate analysis results on experimental results or on other analysis results. Consider, on the one hand, one or more test results and, on the other hand, one or more Code Aster analyses modelling these tests. MACR RECAL makes it possible to determine the parameters of these analyses (which may be parameters of"
  },
  "u4.74.01": {
    "frTitle": "Opérateur MODI_REPERE",
    "frLead": "u4.74.01 Opérateur MODI REPERE Cet opérateur permet de modifier le repère dans lequel s’expriment des champs portés des éléments de milieu continu et des éléments de structure (coques, plaques, poutres, ...). L’appel à MODI REPERE produit généralement un nouveau concept résultat : RESUOUT = MODI REPERE(RESULTAT= RESUIN … ) Le concept résultat en sortie est d",
    "enTitle": "Operator MODI_REPERE",
    "enLead": "u4.74.01 Operator MODI REPERE This operator makes it possible to modify the reference frame in which fields carried by continuum elements and by structural elements (shells, plates, beams, ...) are expressed. The call to MODI REPERE generally produces a new result concept: RESUOUT = MODI REPERE(RESULTAT= RESUIN … ) The result concept in output is of the same"
  },
  "u4.75.01": {
    "frTitle": "Macro-commande CALC_THERMECA_MULT",
    "frLead": "u4.75.01 Macro-commande CALC THERMECA MULT But : La macro-commande CALC THERMECA MULT permet de produire les résultats de thermique et de mécanique linéaire d’un choc thermique quelconque sans projeter systématiquement les champ d’un maillage linéaire à un maillage quadratique grâce à la multiplication d’un unique calcul unitaire. Elle implémente une méthodo",
    "enTitle": "Macro-command CALC_THERMECA_MULT",
    "enLead": "u4.75.01 Macro-command CALC THERMECA MULT Purpose : The macro-command CALC THERMECA MULT makes it possible to produce the thermal and linear mechanical results of an arbitrary thermal shock without systematically projecting the fields from a linear mesh onto a quadratic mesh, thanks to the multiplication of a single unit analysis. It implements a methodology"
  },
  "u4.81.03": {
    "frTitle": "Opérateur CALC_CHAM_ELEM",
    "frLead": "u4.81.03 Opérateur CALC CHAM ELEM 1 But Calculer un champ élémentaire aux points de Gauss contenant les coordonnées et le poids des points de Gauss. Calculer un champ élémentaire de flux thermique et de pression acoustique, à partir de champs déjà calculés de type cham no . Mettre au format d’un champ aux nœuds par éléments les valeurs de certains paramètres",
    "enTitle": "Operator CALC_CHAM_ELEM",
    "enLead": "u4.81.03 Operator CALC CHAM ELEM 1 Purpose Compute an elementary field at the Gauss points containing the coordinates and the weight of the Gauss points. Compute an elementary field of heat flux and of acoustic pressure, from already computed fields of type cham no . Put into the format of a field at the nodes by element the values of certain material parame"
  },
  "u4.81.04": {
    "frTitle": "Opérateur CALC_CHAMP",
    "frLead": "u4.81.04 Opérateur CALC CHAMP 1 But Créer ou compléter un résultat en calculant des champs par élément ou aux nœuds (contraintes, déformations, …). Le concept résultat produit est soit créé, soit modifié, c'est-à-dire que l'appel à CALC CHAMP se fait de la façon suivante: ou bien 2 Syntaxe 3 Opérandes RESULTAT/MODELE/CHAM MATER/CARA ELEM/EXCIT 3.1 Opérandes ",
    "enTitle": "Operator CALC_CHAMP",
    "enLead": "u4.81.04 Operator CALC CHAMP 1 Purpose Create or complete a result by computing fields by element or at the nodes (stresses, strains, …). The result concept produced is either created or modified, that is, the call to CALC CHAMP is made in the following way: or else 2 Syntax 3 Operands RESULTAT/MODELE/CHAM MATER/CARA ELEM/EXCIT 3.1 Operands RESULTAT Name of "
  },
  "u4.81.05": {
    "frTitle": "Opérateur POST_CHAMP",
    "frLead": "u4.81.05 Opérateur POST CHAMP 1 But Post-traitements spécifiques pour les éléments de structure (coques, poutres, …): - extraction d'un champ pour un sous-point - calcul des minimum/maximum sur l'ensemble des sous-points d'un point - prise en compte de l'excentrement des plaques pour le calcul des efforts 2 Syntaxe 3 Généralités Lorsque qu'une sd resultat (r",
    "enTitle": "Operator POST_CHAMP",
    "enLead": "u4.81.05 Operator POST CHAMP 1 Purpose Specific post-processing for structural elements (shells, beams, …): - extraction of a field for a sub-point - computation of the minimum/maximum over all the sub-points of a point - account taken of the offset of the plates for the computation of the forces 2 Syntax 3 General points When an sd resultat (resu) contains "
  },
  "u4.81.06": {
    "frTitle": "Opérateur CALC_ERREUR",
    "frLead": "u4.81.06 Opérateur CALC ERREUR 1 But Créer ou compléter un résultat en calculant des champs par élément d'erreur de discrétisation. Remarque: CALC ERREUR ne peut pas être utilisé sur plusieurs processeurs. Table des Matières 2 Syntaxe",
    "enTitle": "Operator CALC_ERREUR",
    "enLead": "u4.81.06 Operator CALC ERREUR 1 Purpose Create or complete a result by computing per-element fields of the discretisation error. Note: CALC ERREUR cannot be used on several processors. Table of Contents 2 Syntax"
  },
  "u4.81.07": {
    "frTitle": "Opérateur POST_ERREUR",
    "frLead": "u4.81.07 Opérateur POST ERREUR 1 But Calculer l'erreur relative entre une solution obtenue par un calcul éléments finis et une solution analytique de référence en termes d'une norme donnée, dans le but d'évaluer la convergence des éléments finis. Les normes actuellement disponibles sont: - la norme en énergie, - la norme {L}^{2} du déplacement, - la norme {L",
    "enTitle": "Operator POST_ERREUR",
    "enLead": "u4.81.07 Operator POST ERREUR 1 Purpose Compute the relative error between a solution obtained by a finite-element analysis and a reference analytical solution in terms of a given norm, with the aim of assessing the convergence of the finite elements. The norms currently available are: - the energy norm, - the {L}^{2} norm of the displacement, - the {L}^{2} "
  },
  "u4.81.08": {
    "frTitle": "Opérateur POST_BEREMIN",
    "frLead": "u4.81.08 Opérateur POST BEREMIN 1 But L'objet de cette commande est de calculer, en post-traitement d'un calcul de mécanique non linéaire élasto-plastique : - la contrainte de Weibull et la probabilité de clivage issues du modèle de Beremin. - la densité surfacique de contrainte de Weibull issue de la déclinaison industrielle du modèle de Beremin. Cette comm",
    "enTitle": "Operator POST_BEREMIN",
    "enLead": "u4.81.08 Operator POST BEREMIN 1 Purpose The purpose of this command is to compute, in post-processing of a non-linear elastoplastic mechanical analysis: - the Weibull stress and the probability of cleavage coming from the Beremin model. - the surface density of Weibull stress coming from the industrial version of the Beremin model. This command returns a ta"
  },
  "u4.81.13": {
    "frTitle": "Opérateur MACR_LIGN_COUPE",
    "frLead": "u4.81.13 Opérateur MACR LIGN COUPE 1 But Extraction dans une table des valeurs d’un résultat sur des lignes de coupe définies par deux points et un intervalle ou des groupes de nœuds. Le résultat peut être mécanique (evol elas, evol noli, mode meca, comb fourier, mult elas, fourier elas, dyna trans) ou thermique (evol ther). Principe: Cette macro-commande cr",
    "enTitle": "Operator MACR_LIGN_COUPE",
    "enLead": "u4.81.13 Operator MACR LIGN COUPE 1 Purpose Extraction into a table of the values of a result on section lines defined by two points and an interval or by node groups. The result may be mechanical (evol elas, evol noli, mode meca, comb fourier, mult elas, fourier elas, dyna trans) or thermal (evol ther). Principle: This macro-command creates a mesh which may"
  },
  "u4.81.21": {
    "frTitle": "Opérateur POST_RELEVE_T",
    "frLead": "u4.81.21 Opérateur POST RELEVE T 1 But Extraire des valeurs de composantes de champs de grandeurs et effectuer des calculs de moyennes et d’invariants. Les valeurs sont relevées sur des nœuds, mailles, lignes brisées reliant des nœuds. Elles peuvent faire l’objet, par cette même procédure: - de calculs de: - moyennes, - résultantes et moments de champs vecto",
    "enTitle": "Operator POST_RELEVE_T",
    "enLead": "u4.81.21 Operator POST RELEVE T 1 Purpose Extract values of components of fields of quantities (grandeurs) and carry out computations of means and of invariants. The values are recorded on nodes, mesh cells, broken lines linking nodes. They can be the subject, by this same procedure: - of computations of: - means, - resultants and moments of vector fields, -"
  },
  "u4.81.22": {
    "frTitle": "Opérateur POST_ELEM",
    "frLead": "u4.81.22 Opérateur POST ELEM 1 But Calculer des quantités sur tout ou partie de la structure. Les quantités calculées correspondent à des options de calcul particulières de la modélisation affectée. Les options disponibles actuellement sont: - calcul de la masse, des inerties et de la position du centre de gravité, - calcul de l'énergie potentielle, - calcul",
    "enTitle": "Operator POST_ELEM",
    "enLead": "u4.81.22 Operator POST ELEM 1 Purpose Calculate quantities on the whole or on part of the structure. The quantities calculated correspond to particular computation options of the assigned modelling. The options currently available are: - calculation of the mass, of the inertias and of the position of the centre of gravity, - calculation of the potential ener"
  },
  "u4.81.23": {
    "frTitle": "Opérateur POST_COQUE",
    "frLead": "u4.81.23 Opérateur POST COQUE 1 But Extraire des efforts ou des déformations sur les éléments coques à un instant donné. Ces extractions ont lieu sur des ensembles de points introduits par l'utilisateur par leurs coordonnées et leur position dans l'épaisseur. Cette commande produit une table contenant une ligne par point de post-traitement. 2 Syntaxe 3 Opéra",
    "enTitle": "Operator POST_COQUE",
    "enLead": "u4.81.23 Operator POST COQUE 1 Purpose Extract forces or strains on shell elements at a given time instant. These extractions take place on sets of points introduced by the user by their coordinates and their position through the thickness. This command produces a table containing one line per post-processing point. 2 Syntax 3 Operands 3.1 Operand RESULTAT N"
  },
  "u4.81.24": {
    "frTitle": "Opérateur CALC_COUPURE",
    "frLead": "u4.81.24 Opérateur CALC COUPURE Résumé: On présente ici la commande qui permet de réaliser de calculer le torseur d'efforts résultants de l'action d'un groupe de mailles sur un groupe de nœuds en un point donné. La commande peut également gérer la combinaison des torseurs modaux dans le cadre d'une analyse modale spectrale (avec ou sans signature, combinaiso",
    "enTitle": "Operator CALC_COUPURE",
    "enLead": "u4.81.24 Operator CALC COUPURE Summary: The command is presented here which makes it possible to compute the resultant force torsor of the action of a mesh-cell group on a node group at a given point. The command can also handle the combination of modal torsors in the context of a spectral modal analysis (with or without a signature, CQC combination of the m"
  },
  "u4.81.41": {
    "frTitle": "Opérateur POST_BORDET",
    "frLead": "u4.81.41 Opérateur POST BORDET 1 But L'objet de cette commande est de calculer, en post-traitement d'un calcul de mécanique non linéaire élasto-plastique, la probabilité de clivage issue du modèle de Bordet ainsi que la contrainte du modèle du même nom. Cette commande calcule initialement les champs mécaniques nécessaires au post-traitement et en déduit la c",
    "enTitle": "Operator POST_BORDET",
    "enLead": "u4.81.41 Operator POST BORDET 1 Purpose The purpose of this command is to compute, in post-processing of a non-linear elasto-plastic mechanical analysis, the cleavage probability from the Bordet model as well as the stress of the model of the same name. This command first computes the mechanical fields required for the post-processing and deduces from them t"
  },
  "u4.81.42": {
    "frTitle": "Opérateur CALC_FERRAILLAGE",
    "frLead": "u4.81.42 Opérateur CALC FERRAILLAGE 1 But Calculer les densités de ferraillage dans des éléments coques et plaques en fonction des sollicitations : les efforts généralisés, préalablement obtenus par l'option EFGE ELNO. La commande enrichit la structure de données de type résultat, fournie sous le mot-clé RESULTAT, d'un champ de grandeur ferraillage, dont les",
    "enTitle": "Operator CALC_FERRAILLAGE",
    "enLead": "u4.81.42 Operator CALC FERRAILLAGE 1 Purpose Compute the reinforcement densities in shell and plate elements as a function of the internal forces: the generalised forces, previously obtained by the option EFGE ELNO. The command enriches the data structure of type result, supplied under the keyword RESULTAT, with a reinforcement quantity (grandeur) field, who"
  },
  "u4.81.43": {
    "frTitle": "Opérateur CALC_PRESSION",
    "frLead": "u4.81.43 Opérateur CALC PRESSION 1 But Compléter un résultat en calculant un champ nodal correspondant à la densité des efforts normaux et tangentiels d'interface sur une zone définie. L'amplitude de ces efforts est stocké dans le champ produit PRES NOEU sur la grandeur PRES R avec les noms des composants PRES et CISA. Les vecteurs de la force tangentielle s",
    "enTitle": "Operator CALC_PRESSION",
    "enLead": "u4.81.43 Operator CALC PRESSION 1 Purpose Complete a result by computing a nodal field corresponding to the density of the normal and tangential interface forces on a defined zone. The amplitude of these forces is stored in the produced field PRES NOEU on the quantity (grandeur) PRES R with the component names PRES and CISA. The vectors of the tangential for"
  },
  "u4.81.44": {
    "frTitle": "Opérateur COMBINAISON_FERRAILLAGE",
    "frLead": "u4.81.44 Opérateur COMBINAISON FERRAILLAGE 1 But Le but de cet opérateur est de calculer les densités de ferraillage dans des éléments surfaciques (2D) et linéiques (1D) en fonction des sollicitations pour plusieurs combinaisons de chargement. En entrée, cette macro-commande prend un résultat multiple de type mult elas. Chacun des résultats de mult elas cont",
    "enTitle": "Operator COMBINAISON_FERRAILLAGE",
    "enLead": "u4.81.44 Operator COMBINAISON FERRAILLAGE 1 Purpose The purpose of this operator is to compute the reinforcement densities in surface (2D) and line (1D) elements as a function of the internal forces for several loading combinations. As input, this macro-command takes a multiple result of type mult elas. Each of the results of mult elas contains the generalis"
  },
  "u4.81.45": {
    "frTitle": "Opérateur POST_COMBINAISON",
    "frLead": "u4.81.45 Opérateur POST COMBINAISON 1 But Le but de cette macro-commande est de combiner différentes grandeurs physiques à la suite de calculs aux éléments finis réalisés en amont. Cette commande ne réalisera que des posts-traitements en manipulant des résultats sous forme de champs ou de tables issues de calculs antérieurs. En entrée, cette macro-commande p",
    "enTitle": "Operator POST_COMBINAISON",
    "enLead": "u4.81.45 Operator POST COMBINAISON 1 Purpose The purpose of this macro-command is to combine different physical quantities following finite-element analyses carried out beforehand. This command performs only post-processing by manipulating results in the form of fields or tables produced by earlier analyses. As input, this macro-command takes results of seve"
  },
  "u4.81.46": {
    "frTitle": "Opérateur VERI_FERRAILLAGE",
    "frLead": "u4.81.46 Opérateur VERI FERRAILLAGE Résumé : Opérateur de vérification d'un ferraillage existant 1 But Vérifier un ferraillage existant sous une charge donnée en fournissant une marge mécanique et un taux d’utilisation de la capacité maximale de la structure sous cette charge. La méthode employée pour la vérification du ferraillage est présentée en détail da",
    "enTitle": "Operator VERI_FERRAILLAGE",
    "enLead": "u4.81.46 Operator VERI FERRAILLAGE Summary: Operator for the verification of an existing reinforcement 1 Purpose Verify an existing reinforcement under a given load by supplying a mechanical margin and a utilisation ratio of the maximum capacity of the structure under this load. The method used for the verification of the reinforcement is presented in detail"
  },
  "u4.81.47": {
    "frTitle": "Opérateur POST_VERI_FERRAILLAGE",
    "frLead": "u4.81.47 Opérateur POST VERI FERRAILLAGE Résumé : Opérateur de post traitement de VERI FERRAILLAGE : permet de tracer le diagramme d'interaction et de calculer les paramètres liés à l'état d'équilibre de la section critique des éléments de plaque en béton armé. 1 But Générer le diagramme d'interaction de la facette critique et calculer les paramètres liés à ",
    "enTitle": "Operator POST_VERI_FERRAILLAGE",
    "enLead": "u4.81.47 Operator POST VERI FERRAILLAGE Summary: Post-processing operator for VERI FERRAILLAGE: makes it possible to plot the interaction diagram and to compute the parameters related to the equilibrium state of the critical section of the reinforced-concrete plate elements. 1 Purpose Generate the interaction diagram of the critical facet and compute the par"
  },
  "u4.81.52": {
    "frTitle": "Opérateur POST_FM",
    "frLead": "u4.81.52 Opérateur POST FM 1 But Procéder à des post-traitements des tables de résultats issues des opérateurs CALC Get de paramètres matériaux pour le calcul de facteurs de marges. Produit une structure de données tableavec les colonnes suivantes: - \\mathit{INST} : instants de calculs, - \\mathit{TEMP} : températures du point de fond de fissure, - \\mathit{KI",
    "enTitle": "Operator POST_FM",
    "enLead": "u4.81.52 Operator POST FM 1 Purpose Carry out post-processing of the result tables produced by the operators CALC Get of material parameters for the analysis of margin factors. Produces a data structure table with the following columns: - \\mathit{INST} : analysis time instants, - \\mathit{TEMP} : temperatures of the crack-front point, - \\mathit{KIC} : value o"
  },
  "u4.81.53": {
    "frTitle": "Opérateur CREA_COUPE",
    "frLead": "u4.81.53 Opérateur CREA COUPE 1 But Création d'un tableau représentant des coupes droites unidimensionnelles. Ce tableau décrit les coupes à l'aide de leurs extrémités. On impose aux extrémités d'être localisées sur la surface d'un maillage. Principe : Cette macro-commande crée une table où chaque ligne correspond à une coupe. À partir d'une table d'entrée f",
    "enTitle": "Operator CREA_COUPE",
    "enLead": "u4.81.53 Operator CREA COUPE 1 Purpose Creation of a table representing straight one-dimensional sections. This table describes the sections by means of their end points. The end points are required to be located on the surface of a mesh. Principle: This macro-command creates a table in which each line corresponds to a section. From an input table formatted "
  },
  "u4.82.01": {
    "frTitle": "Opérateur DEFI_FOND_FISS",
    "frLead": "u4.82.01 Opérateur DEFI FOND FISS 1 But Définir les éléments géométriques relatifs à une fissure, notamment le fond de fissure et les lèvres supérieure et inférieure de cette fissure, dans un maillage 2D ou 3D. La définition du fond de la fissure peut se faire à partir d'entités (nœuds ou mailles) ou à partir de groupes d'entités. Les nœuds peuvent être ordo",
    "enTitle": "Operator DEFI_FOND_FISS",
    "enLead": "u4.82.01 Operator DEFI FOND FISS 1 Purpose Define the geometric items relating to a crack, in particular the crack front and the upper and lower lips of this crack, in a 2D or 3D mesh. The crack front may be defined from entities (nodes or mesh cells) or from groups of entities. The nodes may be ordered in the direction of increasing curvilinear abscissae. I"
  },
  "u4.82.03": {
    "frTitle": "Opérateur CALC_G",
    "frLead": "u4.82.03 Opérateur CALC G 1 But Cet opérateur calcule les grandeurs de mécanique de la rupture suivantes, en 2D et en 3D: - le taux de restitution d’énergie par la méthode thêta dans le cas d’un problème thermo-élastique linéaire ou non linéaire R7.02.01 et R7.02.03, en statique ou en dynamique R7.02.02; - les facteurs d’intensité de contraintes K1 , \\mathrm",
    "enTitle": "Operator CALC_G",
    "enLead": "u4.82.03 Operator CALC G 1 Purpose This operator computes the following fracture-mechanics quantities, in 2D and in 3D: - the energy release rate by the theta method in the case of a linear or non-linear thermoelastic problem R7.02.01 and R7.02.03, in statics or in dynamics R7.02.02; - the stress intensity factors K1 , \\mathrm{K2} and \\mathrm{K3} by the sing"
  },
  "u4.82.04": {
    "frTitle": "Opérateur POST_RUPTURE",
    "frLead": "u4.82.04 Opérateur POST RUPTURE 1 But Procéder à des post-traitements des tables de résultats issues des opérateurs CALC G et POST K1 K2 K3. Les différentes opérations possibles sont: - normalisation de l'abscisse curviligne, - calcul de l'angle de bifurcation, - comptage des cycles en fatigue, - calcul de l'incrément d'avancée de fissure en fatigue, - cumul",
    "enTitle": "Operator POST_RUPTURE",
    "enLead": "u4.82.04 Operator POST RUPTURE 1 Purpose Carry out post-processings of the result tables coming from the operators CALC G and POST K1 K2 K3. The various possible operations are: - normalisation of the curvilinear abscissa, - computation of the bifurcation angle, - fatigue cycle counting, - computation of the crack-advance increment in fatigue, - accumulation"
  },
  "u4.82.05": {
    "frTitle": "Opérateur POST_K1_K2_K3",
    "frLead": "u4.82.05 Opérateur POST K1 K2 K3 1 But Calculer les facteurs d’intensité des contraintes en 2D et 3D . Cet opérateur permet de calculer \\mathit{K1} , \\mathit{K2} en 2D (modélisations 'D PLAN', 'C PLAN' et 'AXIS') et \\mathit{K3} en 3D (modélisation '3D') par extrapolation des sauts de déplacements sur les lèvres de la fissure, cf. R7.02.08. Cette méthode n’es",
    "enTitle": "Operator POST_K1_K2_K3",
    "enLead": "u4.82.05 Operator POST K1 K2 K3 1 Purpose Compute the stress intensity factors in 2D and in 3D. This operator makes it possible to compute \\mathit{K1} , \\mathit{K2} in 2D (modellings 'D PLAN', 'C PLAN' and 'AXIS') and \\mathit{K3} in 3D (modelling '3D') by extrapolation of the displacement jumps on the lips of the crack, cf. R7.02.08. This method is applicabl"
  },
  "u4.82.06": {
    "frTitle": "Opérateur RECA_WEIBULL",
    "frLead": "u4.82.06 Opérateur RECA WEIBULL 1 But Recaler les paramètres du modèle de WEIBULL sur des données expérimentales. Ces données sont constituées d’une (ou plusieurs) liste d’instants de rupture déterminés expérimentalement, associées à un (ou plusieurs) concept résultat de STAT NON LINE modélisant les essais à ces différents instants. Le module de WEIBULL, ou ",
    "enTitle": "Operator RECA_WEIBULL",
    "enLead": "u4.82.06 Operator RECA WEIBULL 1 Purpose Calibrate the parameters of the WEIBULL model on experimental data. These data consist of one (or several) list(s) of failure time instants determined experimentally, associated with one (or several) result concept(s) of STAT NON LINE modelling the tests at these various time instants. The WEIBULL modulus, or the clea"
  },
  "u4.82.07": {
    "frTitle": "Opérateur POST_KCP correction β",
    "frLead": "u4.82.07 Opérateur POST KCP correction β 1 But Analyse de nocivité de défaut par la méthode Kcp correction β pour un défaut semi-elliptique situé sous le revêtement des cuves des réacteurs à eau pressurisée. L'objectif de cette méthode est d'évaluer sur un maillage sain (sans défaut maillé) et en post-traitement d'une étude mécanique (axisymétrique ou 3D) en",
    "enTitle": "Operator POST_KCP correction β",
    "enLead": "u4.82.07 Operator POST KCP correction β 1 Purpose Harmfulness assessment of a defect by the Kcp β-correction method for a semi-elliptical defect located under the cladding of pressurised-water reactor vessels. The objective of this method is to evaluate, on a sound mesh (without a meshed defect) and in post-processing of a mechanical study (axisymmetric or 3"
  },
  "u4.82.08": {
    "frTitle": "Opérateur DEFI_FISS_XFEM",
    "frLead": "u4.82.08 Opérateur DEFI FISS XFEM 1 But Définir une fissure ou un interface 2D ou 3D par le biais de fonctions de niveaux. Pour les fissures, on définit deux fonctions de niveaux (level sets) permettant de caractériser une fissure quelconque (fissure plane ou non). Pour les interfaces, une seule level-set est nécessaire. Les level sets peuvent être définies ",
    "enTitle": "Operator DEFI_FISS_XFEM",
    "enLead": "u4.82.08 Operator DEFI FISS XFEM 1 Purpose Define a 2D or 3D crack or interface by means of level-set functions. For cracks, two level-set functions are defined, making it possible to characterise an arbitrary crack (plane or not). For interfaces, a single level set is necessary. The level sets may be defined in four different ways: - either from two mesh-ce"
  },
  "u4.82.09": {
    "frTitle": "Macro-commande CALC_GP",
    "frLead": "u4.82.09 Macro-commande CALC GP 1 But L'objet de cette macro-commande est de calculer, en post-traitement d'un calcul de mécanique non linéaire élasto-plastique, le paramètre de mécanique de la rupture énergétique appelé {G} {P} . L'approche énergétique basée sur ce critère est détaillée dans le document R7.02.16. Cette macro-commande est utilisable en 2D et",
    "enTitle": "Macro-command CALC_GP",
    "enLead": "u4.82.09 Macro-command CALC GP 1 Purpose The purpose of this macro-command is to compute, in post-processing of a non-linear elastoplastic mechanical analysis, the energetic fracture-mechanics parameter called {G} {P} . The energy approach based on this criterion is detailed in the document R7.02.16. This macro-command can be used in 2D and in 3D. In 2D, it "
  },
  "u4.82.10": {
    "frTitle": "Opérateur CALC_G_XFEM",
    "frLead": "u4.82.10 Opérateur CALC G XFEM 1 But Cet opérateur calcule les grandeurs de mécanique de la rupture suivantes, en 2D et en 3D pour des fissures non maillées (méthode X-FEM): - le taux de restitution d’énergie par la méthode thêta dans le cas d’un problème thermo-élastique linéaire ou non linéaire R7.02.01 et R7.02.03, en statique ou en dynamique R7.02.02, et",
    "enTitle": "Operator CALC_G_XFEM",
    "enLead": "u4.82.10 Operator CALC G XFEM 1 Purpose This operator computes the following fracture-mechanics quantities, in 2D and in 3D, for unmeshed cracks (X-FEM method): - the energy release rate by the theta method in the case of a linear or non-linear thermoelastic problem R7.02.01 and R7.02.03, in statics or in dynamics R7.02.02, and in elastoplasticity R7.02.07; "
  },
  "u4.82.11": {
    "frTitle": "Opérateur PROPA_FISS",
    "frLead": "u4.82.11 Opérateur PROPA FISS 1 But Le but de l’opérateur PROPA FISS est de faire propager une fissure, cette fissure étant définie avec la méthode X-FEM. Trois types de méthodes sont disponibles: - une méthode basée sur un algorithme de fast marching (METHODE PROPA='SIMPLEXE', 'UPWIND'): cette méthode est disponible en 2D et 3D pour tous types d'éléments fi",
    "enTitle": "Operator PROPA_FISS",
    "enLead": "u4.82.11 Operator PROPA FISS 1 Purpose The purpose of the operator PROPA FISS is to propagate a crack, this crack being defined with the X-FEM method. Three types of method are available: - a method based on a fast marching algorithm (METHODE PROPA='SIMPLEXE', 'UPWIND'): this method is available in 2D and in 3D for all types of finite element. The initial cr"
  },
  "u4.82.21": {
    "frTitle": "Opérateur POST_MAIL_XFEM",
    "frLead": "u4.82.21 Opérateur POST MAIL XFEM 1 But Créer le maillage fissuré d’une structure selon la méthode X-FEM. Cet opérateur produit un nouveau maillage en ajoutant des mailles afin de suivre le lieu de la fissure décrite par les level sets. On «maille» ainsi la fissure. Ce maillage servira uniquement à des fins de visualisation et ne doit pas être utilisé pour u",
    "enTitle": "Operator POST_MAIL_XFEM",
    "enLead": "u4.82.21 Operator POST MAIL XFEM 1 Purpose Create the cracked mesh of a structure according to the X-FEM method. This operator produces a new mesh by adding mesh cells so as to follow the locus of the crack described by the level sets. The crack is thus ‘meshed’. This mesh is to be used only for visualisation and must not be used for an analysis. Produces a "
  },
  "u4.82.22": {
    "frTitle": "Opérateur POST_CHAM_XFEM",
    "frLead": "u4.82.22 Opérateur POST CHAM XFEM 1 But Créer une SD Résultat contenant les champs à post-traiter de la méthode X-FEM. Elle permet de générer les champs suivants afin de les post-traiter sur le maillage fissuré: - champs de déplacements, de contraintes et de variables internes suite à la résolution d'un problème mécanique - champ de température suite à la ré",
    "enTitle": "Operator POST_CHAM_XFEM",
    "enLead": "u4.82.22 Operator POST CHAM XFEM 1 Purpose Create a result data structure containing the fields to be post-processed by the X-FEM method. It makes it possible to generate the following fields in order to post-process them on the cracked mesh: - displacement, stress and internal-variable fields following the solution of a mechanical problem - temperature fiel"
  },
  "u4.82.30": {
    "frTitle": "Opérateur POST_K_TRANS",
    "frLead": "u4.82.30 Opérateur POST K TRANS 1 But Calculer les facteurs d’intensité des contraintes d’un problème dynamique transitoire résolu par décomposition sur une base modale. Le calcul des facteurs d’intensité des contraintes, fonctions du temps, se fait à partir des facteurs d’intensité des contraintes modaux (issus de CALC G U4.82.03) et des facteurs de contrib",
    "enTitle": "Operator POST_K_TRANS",
    "enLead": "u4.82.30 Operator POST K TRANS 1 Purpose Compute the stress intensity factors of a transient dynamic problem solved by decomposition on a modal basis. The computation of the stress intensity factors, as functions of time, is carried out from the modal stress intensity factors (obtained from CALC G U4.82.03) and from the modal contribution factors obtained fr"
  },
  "u4.82.41": {
    "frTitle": "Operator POST_JMOD",
    "frLead": "u4.82.41 Operator POST JMOD 1 Goal This operator aims at calculating the modified J -integral in 3D (‘3D’modeling) using the domain integral method based on the work Rice 1 (standard or without initial state) and Lei 2 (with initial state). The theoretical and numerical descriptions of this method are presented in the associated reference document R7.02.22. ",
    "enTitle": "Operator POST_JMOD",
    "enLead": "u4.82.41 Operator POST JMOD 1 Goal This operator aims at calculating the modified J -integral in 3D (‘3D’modelling) using the domain integral method based on the work Rice 1 (standard or without initial state) and Lei 2 (with initial state). The theoretical and numerical descriptions of this method are presented in the associated reference document R7.02.22."
  },
  "u4.83.01": {
    "frTitle": "Opérateur POST_FATIGUE",
    "frLead": "u4.83.01 Opérateur POST FATIGUE 1 But Calculer, en un point, le dommage de fatigue d’une structure soumise à une histoire de chargement. A la différence de CALC FATIGUE, POST FATIGUE n’opère pas sur un champ mais sur un «signal» préalablement extrait d’un calcul ou définit par ailleurs. Les diverses méthodes disponibles R7.04.01 sont: | méthodes basées sur d",
    "enTitle": "Operator POST_FATIGUE",
    "enLead": "u4.83.01 Operator POST FATIGUE 1 Purpose Compute, at a point, the fatigue damage of a structure subjected to a loading history. Unlike CALC FATIGUE, POST FATIGUE does not operate on a field but on a “signal” previously extracted from an analysis or defined elsewhere. The various methods available R7.04.01 are: | methods based on uniaxial tests: Wöhler, Manso"
  },
  "u4.83.02": {
    "frTitle": "Opérateur CALC_FATIGUE",
    "frLead": "u4.83.02 Opérateur CALC FATIGUE 1 But Calculer un champ de dommage de fatigue subi par une structure ; un plan critique dans lequel le cisaillement est maximal ; ou une amplitude maximale de vibration admissible. Calcul d’un champ de dommage : à partir d’une histoire de contraintes équivalentes (contraintes de von Mises signées) ou de déformations équivalent",
    "enTitle": "Operator CALC_FATIGUE",
    "enLead": "u4.83.02 Operator CALC FATIGUE 1 Purpose Compute a field of fatigue damage undergone by a structure; a critical plane in which the shear is maximum; or a maximum admissible vibration amplitude. Analysis of a damage field : from a history of equivalent stresses (signed von Mises stresses) or of equivalent strains (signed second invariant) computed at the node"
  },
  "u4.83.11": {
    "frTitle": "Opérateur POST_RCCM",
    "frLead": "u4.83.11 Opérateur POST RCCM 1 But Vérifier des critères du RCC-M. Il s'agit notamment : - de certains critères de fatigue du ZE200 en post-traitement de calculs sur des tuyauteries (avec ou sans effet d'environnement), - des critères de fatigue du B3600 en post-traitement de calculs de tuyauteries, - d u critère de moment équivalent du B3600 en post-traitem",
    "enTitle": "Operator POST_RCCM",
    "enLead": "u4.83.11 Operator POST RCCM 1 Purpose Check criteria of the RCC-M. This concerns in particular: - certain fatigue criteria of ZE200 in the post-processing of analyses on piping (with or without environmental effect), - the fatigue criteria of B3600 in the post-processing of piping analyses, - the equivalent-moment criterion of B3600 in the post-processing of"
  },
  "u4.83.31": {
    "frTitle": "Opérateur COMB_FOURIER",
    "frLead": "u4.83.31 Opérateur COMB FOURIER 1 But Recombiner les modes de FOURIER d'une structure de données resultat dans des directions particulières. Les modes sont produits pour un modèle 'AXIS FOURIER' par la macro commande MACRO ELAS MULT U4.51.02. Ceci est possible pour les déplacements, les réactions, les champs de déformations et de contraintes en élasticité et",
    "enTitle": "Operator COMB_FOURIER",
    "enLead": "u4.83.31 Operator COMB FOURIER 1 Purpose Recombine the FOURIER modes of a resultat data structure in particular directions. The modes are produced for an 'AXIS FOURIER' model by the macro-command MACRO ELAS MULT U4.51.02. This is possible for the displacements, the reactions, the strain and stress fields in elasticity and for the temperature and flux fields "
  },
  "u4.84.01": {
    "frTitle": "Opérateur COMB_SISM_MODAL",
    "frLead": "u4.84.01 Opérateur COMB SISM MODAL 1 But Calculer la réponse à un chargement sismique, via l’approche modale spectrale, basée sur le cumul des réponses modales, sous hypothèse de comportement linéaire élastique. (Réponse spectrale = réponse issue des cumuls) Le chargement sismique est constitué de deux parties: - le mouvement de déformation statique de la st",
    "enTitle": "Operator COMB_SISM_MODAL",
    "enLead": "u4.84.01 Operator COMB SISM MODAL 1 Purpose Compute the response to a seismic loading, by the spectral modal approach, based on the combination of the modal responses, under the assumption of linear elastic constitutive behaviour. (Spectral response = response resulting from the combinations) The seismic loading consists of two parts: - the static deformatio"
  },
  "u4.84.02": {
    "frTitle": "Opérateur POST_DYNA_MODA_T",
    "frLead": "u4.84.02 Opérateur POST DYNA MODA T 1 But Post-traiter les résultats en coordonnées généralisées produits par DYNA VIBRA. Deux options sont disponibles: post traitement des non linéarités de choc ou des relations effort-déplacement. Dans le premier cas, on choisit un diagnostic d’usure ou une meilleure connaissance des chocs survenus pendant l’analyse transi",
    "enTitle": "Operator POST_DYNA_MODA_T",
    "enLead": "u4.84.02 Operator POST DYNA MODA T 1 Purpose Post-process the results in generalised coordinates produced by DYNA VIBRA. Two options are available: post-processing of the shock non-linearities or of the force–displacement relations. In the first case, one chooses a wear diagnosis or a better knowledge of the shocks that occurred during the transient analysis"
  },
  "u4.84.03": {
    "frTitle": "Opérateur POST_FATI_ALEA",
    "frLead": "u4.84.03 Opérateur POST FATI ALEA 1 But Calculer le dommage de fatigue subi par une structure soumise à une sollicitation de type aléatoire. Pour ce faire POST FATI ALEA permet à partir de la donnée des moments spectraux caractérisant entièrement le signal aléatoire : - d'extraire par une méthode statistique de comptage de cycles (méthode de comptage de pics",
    "enTitle": "Operator POST_FATI_ALEA",
    "enLead": "u4.84.03 Operator POST FATI ALEA 1 Purpose Compute the fatigue damage undergone by a structure subjected to a random loading. To this end POST FATI ALEA makes it possible, from the spectral moments which fully characterise the random signal: - to extract, by a statistical cycle-counting method (stress-peak counting method or level-crossing counting method), "
  },
  "u4.84.04": {
    "frTitle": "Opérateur POST_DYNA_ALEA",
    "frLead": "u4.84.04 Opérateur POST DYNA ALEA 1 But POST DYNA ALEA permet d’effectuer deux types de post-traitement à l’issue d’un calcul de dynamique stochastique: Calcul de courbes de fragilité à partir d’une table contenant les résultats d’une simulation de Monte Carlo A partir d’une table [table sdaster]contenant l’information sur les niveaux d’excitation (en analys",
    "enTitle": "Operator POST_DYNA_ALEA",
    "enLead": "u4.84.04 Operator POST DYNA ALEA 1 Purpose POST DYNA ALEA makes it possible to carry out two types of post-processing after a stochastic dynamics analysis: Analysis of fragility curves from a table containing the results of a Monte Carlo simulation From a table [table sdaster] containing the information on the excitation levels (in a seismic analysis, the PG"
  },
  "u4.84.05": {
    "frTitle": "Opérateur POST_USURE",
    "frLead": "u4.84.05 Opérateur POST USURE 1 But Calculer volume et profondeur d’usure d’après la puissance d’usure. La puissance d’usure est donnée ou calculée par l’opérateur DYNA VIBRA U4.53.03. Il faut fournir une loi d’usure, une géométrie de contact et une liste d’instants. Produit une structure de données de type table sdaster. 2 Syntaxe 3 Opérandes Nous attirons ",
    "enTitle": "Operator POST_USURE",
    "enLead": "u4.84.05 Operator POST USURE 1 Purpose Compute the worn volume and the wear depth from the wear power. The wear power is given or computed by the operator DYNA VIBRA U4.53.03. A wear law, a contact geometry and a list of time instants must be supplied. Produces a data structure of type table sdaster. 2 Syntax 3 Operands Attention is drawn here to a few delic"
  },
  "u4.84.11": {
    "frTitle": "Opérateur POST_DECOLLEMENT",
    "frLead": "u4.84.11 Opérateur POST DECOLLEMENT Résumé: Cet opérateur de post-traitement calcule la surface de contact ou décollée entre le radier et le sol d'un calcul d'interaction sol/structure (ISS), mené avec l'opérateur DYNA NON LINE. Cet opérateur produit une table de type table sdaster contenant le pourcentage de décollement à chaque instant. 1 Syntaxe 2 Opérand",
    "enTitle": "Operator POST_DECOLLEMENT",
    "enLead": "u4.84.11 Operator POST DECOLLEMENT Summary: This post-processing operator computes the contact area or the lifted-off area between the raft and the soil of a soil–structure interaction analysis (ISS), carried out with the operator DYNA NON LINE. This operator produces a table of type table sdaster containing the percentage of lift-off at each time instant. 1"
  },
  "u4.84.21": {
    "frTitle": "Opérateur CALC_FORC_NONL",
    "frLead": "u4.84.21 Opérateur CALC FORC NONL 1 But 2 Syntaxe 3 Opérandes La commande permet le calcul du complément de forces internes dû aux non linéarités de comportement. Ce calcul concerne les lois de comportement où les forces internes dépendent essentiellement des champs cinématiques (déplacements, vitesses, accélérations); elle concerne donc surtout les non liné",
    "enTitle": "Operator CALC_FORC_NONL",
    "enLead": "u4.84.21 Operator CALC FORC NONL 1 Purpose 2 Syntax 3 Operands The command makes it possible to compute the complement of internal forces due to the non-linearities of the constitutive behaviour. This analysis concerns the constitutive laws in which the internal forces depend essentially on the kinematic fields (displacements, velocities, accelerations); it "
  },
  "u4.84.31": {
    "frTitle": "Commande DEFI_SOL_EQUI",
    "frLead": "u4.84.31 Commande DEFI SOL EQUI 1 But Caractériser la variation des caractéristiques mécaniques de couches de sol stratifié au cours d'un séisme à partir de leur niveau de déformation de cisaillement. Pour cela, on détermine par une procédure itérative pour chacune de ces couches de sol des caractéristiques linéaires équivalentes recalées à partir des courbe",
    "enTitle": "Command DEFI_SOL_EQUI",
    "enLead": "u4.84.31 Command DEFI SOL EQUI 1 Purpose Characterise the variation of the mechanical characteristics of layers of stratified soil in the course of an earthquake from their level of shear strain. For this, one determines by an iterative procedure, for each of these soil layers, equivalent linear characteristics recalibrated from the curves of reduction of th"
  },
  "u4.84.32": {
    "frTitle": "Commande DEFI_CHAR_SOL",
    "frLead": "u4.84.32 Commande DEFI CHAR SOL 1 But Produire une charge utilisable dans les opérateurs de résolution dynamique DYNA VIBRA et DYNA NON LINE pour pouvoir prendre en compte des charges sismiques aux frontières de domaines de sol 2D ou 3D. Les charges créées relèvent potentiellement de deux sources: soit des charges de type «onde plane» déduites de mouvements ",
    "enTitle": "Command DEFI_CHAR_SOL",
    "enLead": "u4.84.32 Command DEFI CHAR SOL 1 Purpose Produce a load usable in the dynamic solution operators DYNA VIBRA and DYNA NON LINE in order to be able to take into account seismic loads on the boundaries of 2D or 3D soil domains. The loads created potentially come from two sources: either loads of “plane wave” type deduced from motions imposed on the lateral boun"
  },
  "u4.84.44": {
    "frTitle": "Opérateur POST_LIQUEFACTION",
    "frLead": "u4.84.44 Opérateur POST LIQUEFACTION 1 But Cette commande permet de calculer la valeur d'un critère {r} {u} évaluant les zones de liquéfaction dans un ouvrage géotechnique, modélisé par un milieu poreux saturé. Quatre formules sont disponibles pour calculer ce critère: - DP SIGV REF: le critère est basé sur les valeurs en tout point matériel de la pression i",
    "enTitle": "Operator POST_LIQUEFACTION",
    "enLead": "u4.84.44 Operator POST LIQUEFACTION 1 Purpose This command makes it possible to compute the value of a criterion {r} {u} evaluating the liquefaction zones in a geotechnical structure, modelled by a saturated porous medium. Four formulae are available to compute this criterion: - DP SIGV REF: the criterion is based on the values, at every material point, of t"
  },
  "u4.84.45": {
    "frTitle": "Macro-commande POST_NEWMARK",
    "frLead": "u4.84.45 Macro-commande POST NEWMARK 1 But Vérifier la stabilité d'un ouvrage en remblai en 2D (digue/barrage) selon le critère de déplacement horizontal maximal admissible lors d'un chargement sismique via la méthode de Newmark [1]. La procédure dépend en entrée du concept résultat d'un calcul dynamique linéaire temporel ou non linéaire, ainsi que de la pos",
    "enTitle": "Macro-command POST_NEWMARK",
    "enLead": "u4.84.45 Macro-command POST NEWMARK 1 Purpose Check the stability of a 2D embankment structure (dyke/dam) according to the criterion of maximum admissible horizontal displacement under seismic loading, via the Newmark method [1]. The procedure depends, as input, on the result concept of a linear or non-linear transient dynamic analysis, as well as on the pos"
  },
  "u4.84.46": {
    "frTitle": "Macro-commande POST_ROCHE",
    "frLead": "u4.84.46 Macro-commande POST ROCHE 1 But et description L’objectif de cette macro-commande est d’effectuer des post-traitements de calculs élastiques linéaires, rendant compte du comportement élasto-plastique des lignes de tuyauteries sous séisme et chargements permanents, selon la méthode simplifiée Roche. Elle prend en entrée des valeurs de moments (compos",
    "enTitle": "Macro-command POST_ROCHE",
    "enLead": "u4.84.46 Macro-command POST ROCHE 1 Purpose and description The objective of this macro-command is to carry out post-processings of linear elastic analyses, accounting for the elastoplastic behaviour of piping lines under earthquake and permanent loadings, according to the simplified Roche method. It takes as input values of moments (components MT, MFY and M"
  },
  "u4.84.47": {
    "frTitle": "Macro-commande CALC_STAB_PENTE",
    "frLead": "u4.84.47 Macro-commande CALC STAB PENTE 1 But Vérifier la stabilité statique des ouvrages en remblai modélisés en 2D, comme les barrages en remblai, les talus et les digues autour des réservoirs, etc . La macro-commande CALC STAB PENTE permet de calculer le facteur de sécurité représentant la marge de stabilité disponible, définie par le rapport entre la for",
    "enTitle": "Macro-command CALC_STAB_PENTE",
    "enLead": "u4.84.47 Macro-command CALC STAB PENTE 1 Purpose Check the static stability of embankment structures modelled in 2D, such as embankment dams, slopes and the dykes around reservoirs, etc . The macro-command CALC STAB PENTE makes it possible to compute the factor of safety representing the available stability margin, defined by the ratio between the shear resi"
  },
  "u4.85.01": {
    "frTitle": "Opérateur CALC_META",
    "frLead": "u4.85.01 Opérateur CALC META 1 But Calcule l’évolution métallurgique associée à une histoire thermique. L’opérateur fonctionne en tant que post-traitement du résultat du calcul thermique dans le sens où ce dernier est une donnée \"entrante\" du calcul métallurgique et qu’il n’y a pas de couplage entre la métallurgie et la thermique. Deux modèles d’évolution so",
    "enTitle": "Operator CALC_META",
    "enLead": "u4.85.01 Operator CALC META 1 Purpose Computes the metallurgical evolution associated with a thermal history. The operator operates as a post-processing of the result of the thermal analysis in the sense that the latter is an “incoming” datum of the metallurgical analysis and that there is no coupling between the metallurgy and the thermal analysis. Two evol"
  },
  "u4.86.01": {
    "frTitle": "Procédure POST_ENDO_FISS",
    "frLead": "u4.86.01 Procédure POST ENDO FISS 1 But La commande POST ENDO FISS effectue un post-traitement sur un résultat issu de la mécanique des milieux continus. Le but est de trouver la courbe qui représente la fissure à partir d'un champ représentatif et l'ouverture de fissure. Le champ peut être l'endommagement ou un autre champ scalaire. En entrée, la commande u",
    "enTitle": "Procedure POST_ENDO_FISS",
    "enLead": "u4.86.01 Procedure POST ENDO FISS 1 Purpose The command POST ENDO FISS carries out a post-processing on a result coming from continuum mechanics. The aim is to find the curve which represents the crack from a representative field, and the crack opening. The field may be the damage or another scalar field. As input, the command uses an evol noli or cham gd co"
  },
  "u4.86.02": {
    "frTitle": "Macro-commande POST_CZM_FISS",
    "frLead": "u4.86.02 Macro-commande POST CZM FISS 1 But Cette macro-commande permet de réaliser les deux types de post-traitements suivants: - fournir à chaque incrément de chargement des informations sur la longueur d'une fissure cohésive rectiligne 2D (positions de la pointe de fissure et de la pointe cohésive). Plus précisément la macro fournit la distance entre un p",
    "enTitle": "Macro-command POST_CZM_FISS",
    "enLead": "u4.86.02 Macro-command POST CZM FISS 1 Purpose This macro-command makes it possible to carry out the following two types of post-processing: - supply, at each loading increment, information on the length of a straight 2D cohesive crack (positions of the crack tip and of the cohesive tip). More precisely, the macro supplies the distance between an origin poin"
  },
  "u4.90.01": {
    "frTitle": "Macro-commande CALC_ESSAI",
    "frLead": "u4.90.01 Macro-commande CALC ESSAI 1 But Lancement de la macro-commande CALC ESSAI, qui permet de lancer des calculs d’identification et d’expansion sur des structures filaires filaires et de lancer des calculs de modification structurale: - expansion de données expérimentales sur base de déformées numériques, en utilisant la macro-commande MACRO EXPANS (qui",
    "enTitle": "Macro-command CALC_ESSAI",
    "enLead": "u4.90.01 Macro-command CALC ESSAI 1 Purpose Launching of the macro-command CALC ESSAI, which makes it possible to launch identification and expansion analyses on wire structures and to launch structural-modification analyses: - expansion of experimental data on a basis of numerical mode shapes, using the macro-command MACRO EXPANS (which carries out the elem"
  },
  "u4.90.02": {
    "frTitle": "Macro-commande MACRO_EXPANS",
    "frLead": "u4.90.02 Macro-commande MACRO EXPANS 1 But La macro-commande MACRO EXPANS permet de réaliser l’expansion de données expérimentales sur un modèle numérique à partir d’une base d’expansion. Elle consiste en la succession des opérateurs EXTR MODE, PROJ MESU MODAL, REST GENE PHYS, et PROJ CHAMP. 2 Syntaxe 3 Opérandes 3.1 Mot clé MODELE CALCUL Mot-clé facteur ras",
    "enTitle": "Macro-command MACRO_EXPANS",
    "enLead": "u4.90.02 Macro-command MACRO EXPANS 1 Purpose The macro-command MACRO EXPANS makes it possible to carry out the expansion of experimental data onto a numerical model from an expansion basis. It consists of the succession of the operators EXTR MODE, PROJ MESU MODAL, REST GENE PHYS and PROJ CHAMP. 2 Syntax 3 Operands 3.1 Keyword MODELE CALCUL Factor keyword ga"
  },
  "u4.90.03": {
    "frTitle": "Macro-commande OBSERVATION",
    "frLead": "u4.90.03 Macro-commande OBSERVATION 1 But La macro-commande OBSERVATION utilise les opérateurs PROJ CHAMP, CREA CHAMP, CREA RESU, MODI REPERE et POST RELEVE T pour: - projeter un champ d’un modèle numérique vers un modèle expérimental, - modifier les repères locaux, - sélectionner les degrés de liberté «de mesure», - calculer la valeur moyenne d'un champ de ",
    "enTitle": "Macro-command OBSERVATION",
    "enLead": "u4.90.03 Macro-command OBSERVATION 1 Purpose The macro-command OBSERVATION uses the operators PROJ CHAMP, CREA CHAMP, CREA RESU, MODI REPERE and POST RELEVE T in order to: - project a field from a numerical model onto an experimental model, - modify the local frames, - select the «measurement» degrees of freedom, - compute the mean value of a strain field in"
  },
  "u4.90.11": {
    "frTitle": "Opérateur CALC_MAC3COEUR",
    "frLead": "u4.90.11 Opérateur CALC MAC3COEUR 1 But Macro-commande dédiée aux assemblages combustibles. Le but est d'évaluer: - soit la déformation des assemblages combustibles soumis à des chargements thermique, hydraulique et neutronique; - soit les lames d'eau inter-assemblages en début ou fin de cycle d'un réacteur. 2 Syntaxe 3 Opérandes 3.1 Opérande TYPE COEUR Nom ",
    "enTitle": "Operator CALC_MAC3COEUR",
    "enLead": "u4.90.11 Operator CALC MAC3COEUR 1 Purpose Macro-command dedicated to fuel assemblies. The aim is to evaluate: - either the deformation of the fuel assemblies subjected to thermal, hydraulic and neutronic loadings; - or the inter-assembly water gaps at the beginning or at the end of a reactor cycle. 2 Syntax 3 Operands 3.1 Operand TYPE COEUR Name of the type"
  },
  "u4.90.12": {
    "frTitle": "Opérateur POST_MAC3COEUR",
    "frLead": "u4.90.12 Opérateur POST MAC3COEUR 1 But Macro-commande dédiée au post-traitement de CALC MAC3COEUR., pour extraire au format tableau les valeurs ou des analyses du résultat. 2 Syntaxe 3 Opérandes 3.1 Opérande TYPE COEUR Nom du type de cœur à traiter. Voir u4.90.11 CALC MAC3COEUR. 3.2 Opérande NB ASSEMBLAGE Dans le cas d’un cœur de type 'LIGNEXXX' (avec XXX='",
    "enTitle": "Operator POST_MAC3COEUR",
    "enLead": "u4.90.12 Operator POST MAC3COEUR 1 Purpose Macro-command dedicated to the post-processing of CALC MAC3COEUR, in order to extract, in table format, the values or analyses of the result. 2 Syntax 3 Operands 3.1 Operand TYPE COEUR Name of the type of core to be processed. See u4.90.11 CALC MAC3COEUR. 3.2 Operand NB ASSEMBLAGE In the case of a core of type 'LIGN"
  },
  "u4.90.13": {
    "frTitle": "Macro-commande PERM_MAC3COEUR",
    "frLead": "u4.90.13 Macro-commande PERM MAC3COEUR 1 But Macro-commande permettant de définir le chargement d'un cœur à partir de résultats antérieurs. 2 Syntaxe 3 Principe La commande permet d'initier un calcul d'un cycle (CALC MAC3COEUR / DEFORMATION) à partir de résultats antérieurs, en prenant en compte le plan de chargement et le nom des assemblages. Ainsi, il est ",
    "enTitle": "Macro-command PERM_MAC3COEUR",
    "enLead": "u4.90.13 Macro-command PERM MAC3COEUR 1 Purpose Macro-command making it possible to define the loading of a core from previous results. 2 Syntax 3 Principle The command makes it possible to start an analysis of a cycle (CALC MAC3COEUR / DEFORMATION) from previous results, taking into account the loading pattern and the names of the assemblies. It is thus pos"
  },
  "u4.90.21": {
    "frTitle": "Macro-commande CALC_ESSAI_GEOMECA",
    "frLead": "u4.90.21 Macro-commande CALC ESSAI GEOMECA 1 But Cette macro-commande permet de simuler pour un point matériel différents trajets de chargement caractéristiques d'essais géomécaniques, et de post-traiter les résultats obtenus. L'utilisateur fournit en entrée le comportement, le matériau, ainsi que des listes de paramètres de chargement qui correspondent à pl",
    "enTitle": "Macro-command CALC_ESSAI_GEOMECA",
    "enLead": "u4.90.21 Macro-command CALC ESSAI GEOMECA 1 Purpose This macro-command makes it possible to simulate, for a material point, various loading paths characteristic of geomechanical tests, and to post-process the results obtained. The user supplies as input the constitutive behaviour, the material, and lists of loading parameters which correspond to several occu"
  },
  "u4.91.01": {
    "frTitle": "Procédure IMPR_RESU aux formats 'RESULTAT'et 'ASTER'",
    "frLead": "u4.91.01 Procédure IMPR RESU aux formats 'RESULTAT'et 'ASTER' 1 But Écrire le maillage ou les résultats d’un calcul dans un fichier au format 'RESULTAT' ou le maillage au format 'ASTER'. Actuellement cette procédure permet d’écrire au choix: - un maillage, - des champs aux nœuds (de déplacements, de températures, de modes propres, de modes statiques, …), - d",
    "enTitle": "Procedure IMPR_RESU in the 'RESULTAT' and 'ASTER' formats",
    "enLead": "u4.91.01 Procedure IMPR RESU in the 'RESULTAT' and 'ASTER' formats 1 Purpose Write the mesh or the results of an analysis to a file in the 'RESULTAT' format, or the mesh in the 'ASTER' format. At present this procedure makes it possible to write, as one chooses: - a mesh, - fields at the nodes (of displacements, of temperatures, of eigenmodes, of static mode"
  },
  "u4.91.02": {
    "frTitle": "Procédure IMPR_GENE",
    "frLead": "u4.91.02 Procédure IMPR GENE 1 But Ecrire le résultat d'un calcul dynamique en variables généralisées sur un fichier, au format 'RESULTAT'. Actuellement cette procédure permet d'écrire des résultats en variables généralisées issus des concepts suivants : - tran gene, - vect asse gene, - harm gene, - mode gene. 2 Syntaxe 3 Mot clé GENE Ce mot-clé facteur perm",
    "enTitle": "Procedure IMPR_GENE",
    "enLead": "u4.91.02 Procedure IMPR GENE 1 Purpose Write the result of a dynamic analysis in generalised variables to a file, in the 'RESULTAT' format. At present this procedure makes it possible to write results in generalised variables coming from the following concepts: - tran gene, - vect asse gene, - harm gene, - mode gene. 2 Syntax 3 Keyword GENE This factor keywo"
  },
  "u4.91.03": {
    "frTitle": "Procédure IMPR_TABLE",
    "frLead": "u4.91.03 Procédure IMPR TABLE 1 But Imprimer le contenu d'une table dans un fichier. La commande permet d'imprimer un sous-ensemble de la table sous différents formats. Le format par défaut (TABLEAU) est pratique pour un dépouillement par des logiciels de type tableur, d'autres formats permettent une visualisation directe avec un traceur de courbes (par exem",
    "enTitle": "Procedure IMPR_TABLE",
    "enLead": "u4.91.03 Procedure IMPR TABLE 1 Purpose Print the content of a table in a file. The command makes it possible to print a subset of the table in various formats. The default format (TABLEAU) is convenient for processing by spreadsheet-type software; other formats allow direct visualisation with a curve plotter (for example xmgrace). 2 Syntax 3 Operands 3.1 Wh"
  },
  "u4.91.04": {
    "frTitle": "Procédure IMPR_CONCEPT",
    "frLead": "u4.91.04 Procédure IMPR CONCEPT 1 But Imprimersous une forme visualisable des champs de «données»à partir de concepts affectées par l’utilisateur avec les commandes AFFE MATERIAU, AFFE CARA ELEM et AFFE CHAR MECA. 2 Syntaxe 3 Typographie dans la documentation IMPR CONCEPT La procédure IMPR CONCEPT permet d’imprimer sous une forme visualisable les quantités a",
    "enTitle": "Procedure IMPR_CONCEPT",
    "enLead": "u4.91.04 Procedure IMPR CONCEPT 1 Purpose Print, in a form that can be visualised, \"data\" fields from concepts assigned by the user with the commands AFFE MATERIAU, AFFE CARA ELEM and AFFE CHAR MECA. 2 Syntax 3 Typography in the IMPR CONCEPT documentation The procedure IMPR CONCEPT makes it possible to print, in a form that can be visualised, the quantities "
  },
  "u4.91.11": {
    "frTitle": "Procédure IMPR_CO",
    "frLead": "u4.91.11 Procédure IMPR CO 1 But Imprimer tous les objets JEVEUX qui constituent un concept existant. Cette commande est destinée avant tout au «debugage». Le contenu des objets JEVEUX que l’on imprime n’est compréhensible en principe que par des développeurs munis de leur documentation D. En particulier, le format de ces objets peut changer sans concertatio",
    "enTitle": "Procedure IMPR_CO",
    "enLead": "u4.91.11 Procedure IMPR CO 1 Purpose Print all the JEVEUX objects which constitute an existing concept. This command is intended above all for \"debugging\". The content of the JEVEUX objects that one prints is in principle understandable only by developers equipped with their D documentation. In particular, the format of these objects can change without consu"
  },
  "u4.91.12": {
    "frTitle": "Procédure INFO_RESU",
    "frLead": "u4.91.12 Procédure INFO RESU 1 But Imprimer la liste des champs et des composantes de ces champs présents dans une structure de donnée résultat. 2 Syntaxe 3 Opérandes 3.1 Opérande RESULTAT C'est avec ce mot clé que l'utilisateur précise la structure de donnée résultat pour laquelle il souhaite voir imprimer les champs et les composantes présentes. 3.2 Opéran",
    "enTitle": "Procedure INFO_RESU",
    "enLead": "u4.91.12 Procedure INFO RESU 1 Purpose Print the list of the fields and of the components of those fields present in a result data structure. 2 Syntax 3 Operands 3.1 Operand RESULTAT It is with this keyword that the user specifies the result data structure for which he or she wishes to have the fields and the components present printed. 3.2 Operand UNITE Log"
  },
  "u4.91.21": {
    "frTitle": "Procédure IMPR_JEVEUX",
    "frLead": "u4.91.21 Procédure IMPR JEVEUX 1 But Imprimer le contenu des objets créés par le Gestionnaire de mémoire JEVEUX. Utile pour la maintenance et le déverminage des nouveaux développements. Imprimer le contenu des objets JEVEUX, accéder aux objets système de JEVEUX, imprimer le répertoire des objets associés à une base, imprimer la segmentation mémoire ou accéde",
    "enTitle": "Procedure IMPR_JEVEUX",
    "enLead": "u4.91.21 Procedure IMPR JEVEUX 1 Purpose Print the content of the objects created by the JEVEUX memory manager. Useful for the maintenance and the debugging of new developments. Print the content of the JEVEUX objects, access the JEVEUX system objects, print the directory of the objects associated with a database, print the memory segmentation or access the "
  },
  "u4.92.01": {
    "frTitle": "Procédure TEST_RESU",
    "frLead": "u4.92.01 Procédure TEST RESU 1 But Comparer une valeur extraite d’une structure de données à une valeur de référence fournie par l’utilisateur. Cette commande permet de tester une valeur numérique : entier, réel ou complexe extraite d'un concept déjà calculé. Aujourd'hui, on peut tester une composante d'un cham no ou d'un cham elem, une composante d'un champ",
    "enTitle": "Procedure TEST_RESU",
    "enLead": "u4.92.01 Procedure TEST RESU 1 Purpose Compare a value extracted from a data structure with a reference value supplied by the user. This command makes it possible to test a numerical value: integer, real or complex extracted from an already computed concept. Today, one can test a component of a cham no or of a cham elem, a component of a field extracted from"
  },
  "u4.92.02": {
    "frTitle": "Procédure TEST_FONCTION",
    "frLead": "u4.92.02 Procédure TEST FONCTION 1 But Extraire une valeur numérique ou un attribut d’une fonction pour comparaison à une valeur de référence. La fonction est une structure de données du type fonction ou nappe. Cette procédure écrit alors un message conventionnel \"OK\" (si c'est bon) ou \"NOOK\" (sinon). Elle n'arrête pas l'exécution si le test n'est pas vérifi",
    "enTitle": "Procedure TEST_FONCTION",
    "enLead": "u4.92.02 Procedure TEST FONCTION 1 Purpose Extract a numerical value or an attribute of a function for comparison with a reference value. The function is a data structure of type fonction or nappe. This procedure then writes a conventional message \"OK\" (if it is good) or \"NOOK\" (otherwise). It does not stop the execution if the test is not satisfied; this ma"
  },
  "u4.92.03": {
    "frTitle": "Procédure TEST_TABLE",
    "frLead": "u4.92.03 Procédure TEST TABLE 1 But Tester une \"cellule\" (ou une colonne entière) d'un concept de type table. Imprime OK si la valeur trouvée dans la cellule est identique à la valeur donnée en référence, NOOK sinon. Cette commande est utilisée essentiellement par les cas tests pour valider la non-régression des résultats. 2 Syntaxe 3 Opérandes 3.1 Opérande ",
    "enTitle": "Procedure TEST_TABLE",
    "enLead": "u4.92.03 Procedure TEST TABLE 1 Purpose Test a \"cell\" (or a whole column) of a concept of type table. Prints OK if the value found in the cell is identical to the value given as reference, NOOK otherwise. This command is used essentially by the test cases in order to validate the non-regression of the results. 2 Syntax 3 Operands 3.1 Operand TABLE One gives "
  },
  "u4.92.04": {
    "frTitle": "Procédure TEST_FICHIER",
    "frLead": "u4.92.04 Procédure TEST FICHIER 1 But Cette macro-commande permet de tester la non régression de fichiers produits par les commandes Code Aster, principalement IMPR RESU, mais on peut l’utiliser sur n’importe quel fichier texte. Pour tester un fichier, on extrait la liste des nombres réels et entiers présents dans le fichier, le cardinal de cette liste, et l",
    "enTitle": "Procedure TEST_FICHIER",
    "enLead": "u4.92.04 Procedure TEST FICHIER 1 Purpose This macro-command makes it possible to test the non-regression of files produced by the Code Aster commands, principally IMPR RESU, but one can use it on any text file. To test a file, one extracts the list of the real and integer numbers present in the file, the cardinality of this list, and the whole of the remain"
  },
  "u4.92.06": {
    "frTitle": "Procédure TEST_COMPOR",
    "frLead": "u4.92.06 Procédure TEST COMPOR 1 But Cette macro-commande permet de tester les lois de comportement mécaniques du point de vue de la robustesse et de la fiabilité : - dans le cas mécanique, le test met en œuvre une simulation d'un trajet de chargement multi-axial sur un point matériel, dans le but de vérifier la robustesse de l'intégration numérique des comp",
    "enTitle": "Procedure TEST_COMPOR",
    "enLead": "u4.92.06 Procedure TEST COMPOR 1 Purpose This macro-command makes it possible to test the mechanical constitutive laws from the point of view of robustness and reliability: - in the mechanical case, the test implements a simulation of a multi-axial loading path on a material point, with the aim of checking the robustness of the numerical integration of the c"
  },
  "u4.92.11": {
    "frTitle": "Procédure ENGENDRE_TEST",
    "frLead": "u4.92.11 Procédure ENGENDRE TEST 1 But Écrire un \"morceau de fichier\" pour vérifier la non-régression ultérieure du code. Ce morceau de fichier (contenant des commandes TEST RESU et TEST TABLE) pourra être inséré dans un cas test pour vérifier la non-régression du contenu des objets JEVEUX créés par ce cas test. Cette commande n'est utile qu'aux développeurs",
    "enTitle": "Procedure ENGENDRE_TEST",
    "enLead": "u4.92.11 Procedure ENGENDRE TEST 1 Purpose Write a \"piece of a file\" in order to check the subsequent non-regression of the code. This piece of a file (containing the commands TEST RESU and TEST TABLE) may be inserted into a test case in order to check the non-regression of the content of the JEVEUX objects created by this test case. This command is useful o"
  },
  "u7.00.01": {
    "frTitle": "Opérateur EXEC_LOGICIEL",
    "frLead": "u7.00.01 Opérateur EXEC LOGICIEL 1 But Le but de cet opérateur est d'exécuter un logiciel externe sur la machine locale. Cela peut être n'importe quel programme ou script exécutable. 2 Syntaxe 3 Opérandes 3.1 Opérande LOGICIEL Nom de la commande ou de l’exécutable à appeler. C’est une chaîne de caractères (entre '), il faut préciser le chemin complet pour at",
    "enTitle": "Operator EXEC_LOGICIEL",
    "enLead": "u7.00.01 Operator EXEC LOGICIEL 1 Purpose The purpose of this operator is to execute external software on the local machine. This may be any executable program or script. 2 Syntax 3 Operands 3.1 Operand LOGICIEL Name of the command or of the executable to be called. It is a character string (between '), the full path must be specified in order to reach the e"
  },
  "u7.01.01": {
    "frTitle": "Procédure PRE_IDEAS",
    "frLead": "u7.01.01 Procédure PRE IDEAS 1 But Cette commande est dépréciée. Il est recommandé d'utiliser LIRE MAILLAGE, FORMAT='IDEAS'. Convertir un fichier de maillage du format \"universel\" IDEAS au format Aster . Il peut ensuite être lu par Aster via la commande LIRE MAILLAGE. Les versions I-DEASTM traitées sont les versions 4, 5 et 6 ainsi que les versions 1., 2., 3",
    "enTitle": "Procedure PRE_IDEAS",
    "enLead": "u7.01.01 Procedure PRE IDEAS 1 Purpose This command is deprecated. It is recommended to use LIRE MAILLAGE, FORMAT='IDEAS'. Convert a mesh file from the \"universal\" IDEAS format to the Aster format. It can then be read by Aster via the command LIRE MAILLAGE. The I-DEASTM versions handled are versions 4, 5 and 6 as well as versions 1., 2., 3., 4., 5., 6., 7., "
  },
  "u7.01.11": {
    "frTitle": "Procédure PRE_GIBI",
    "frLead": "u7.01.11 Procédure PRE GIBI 1 But Cette commande est dépréciée. Il est recommandé d'utiliser LIRE MAILLAGE, FORMAT='GIBI'. Lire un fichier de maillage au format GIBI puis l'écrire au format Aster . Les seuls niveaux de version du mailleur GIBI (mailleur de CASTEM 2000) traités sont les niveaux 3, 4, 5, 6, 8, 9, 10, 11 et 13. Dans CASTEM 2000, le fichier de m",
    "enTitle": "Procedure PRE_GIBI",
    "enLead": "u7.01.11 Procedure PRE GIBI 1 Purpose This command is deprecated. It is recommended to use LIRE MAILLAGE, FORMAT='GIBI'. Read a mesh file in GIBI format, then write it in Aster format. The only version levels of the GIBI mesher (mesher of CASTEM 2000) that are handled are levels 3, 4, 5, 6, 8, 9, 10, 11 and 13. In CASTEM 2000, the mesh file in GIBI format is"
  },
  "u7.01.31": {
    "frTitle": "Procédure PRE_GMSH",
    "frLead": "u7.01.31 Procédure PRE GMSH 1 But Cette commande est dépréciée. Il est recommandé d'utiliser LIRE MAILLAGE, FORMAT='GMSH'. Lire un fichier de maillage au format GMSH puis l'écrire au format Aster . GMSH est un outil de modelage, maillage et post traitement diffusé sous licence GNU GPL à l’adresse https://gmsh.info. 2 Syntaxe 3 Opérandes 3.1 Opérande UNITE GM",
    "enTitle": "Procedure PRE_GMSH",
    "enLead": "u7.01.31 Procedure PRE GMSH 1 Purpose This command is deprecated. It is recommended to use LIRE MAILLAGE, FORMAT='GMSH'. Read a mesh file in GMSH format, then write it in Aster format. GMSH is a tool for modelling, meshing and post-processing, distributed under the GNU GPL licence at the address https://gmsh.info. 2 Syntax 3 Operands 3.1 Operand UNITE GMSH L"
  },
  "u7.02.01": {
    "frTitle": "Opérateur LIRE_RESU",
    "frLead": "u7.02.01 Opérateur LIRE RESU 1 But Lire des champs et les stocker dans une structure de données de type resultat Le type du format du fichier lu est: soit le format MED, soit le format universel IDEAS. Produit une structure de données de type resultat (evol noli, evol ther, ...). 2 Syntaxe 3 Opérandes 3.1 Mot clé RESULTAT Dans le cas où l'on souhaite enrichi",
    "enTitle": "Operator LIRE_RESU",
    "enLead": "u7.02.01 Operator LIRE RESU 1 Purpose Read fields and store them in a data structure of type resultat. The type of the format of the file read is: either the MED format, or the IDEAS universal format. Produces a data structure of type resultat (evol noli, evol ther, ...). 2 Syntax 3 Operands 3.1 Keyword RESULTAT In the case where one wishes to enrich an exis"
  },
  "u7.02.02": {
    "frTitle": "Opérateur LIRE_CHAMP",
    "frLead": "u7.02.02 Opérateur LIRE CHAMP 1 But Lire un champ dans un fichier au format MED et le stocker dans un concept de type champ. Le champ est désigné dans le fichier par son nom et éventuellement par un paramètre temporel. Le concept produit est du type correspondant à ce qui a été demandé. 2 Syntaxe 3 Opérandes 3.1 Opérande FORMAT Choix du format du fichier con",
    "enTitle": "Operator LIRE_CHAMP",
    "enLead": "u7.02.02 Operator LIRE CHAMP 1 Purpose Read a field from a file in MED format and store it in a concept of type field. The field is designated in the file by its name and possibly by a time parameter. The concept produced is of the type corresponding to what was requested. 2 Syntax 3 Operands 3.1 Operand FORMAT Choice of the format of the file containing the"
  },
  "u7.02.03": {
    "frTitle": "Opérateur LIRE_TABLE",
    "frLead": "u7.02.03 Opérateur LIRE TABLE 1 But Lire un fichier contenant une table. Cette commande permet de lire une table écrite dans un fichier sous le format TABLEAU, ASTER ou un format dit LIBRE. Aux formats TABLEAU et ASTER, le fichier peut provenir directement d’un IMPR TABLE au même format. Le format LIBRE, comme son nom l'indique, est plus souple. Il faut tout",
    "enTitle": "Operator LIRE_TABLE",
    "enLead": "u7.02.03 Operator LIRE TABLE 1 Purpose Read a file containing a table. This command makes it possible to read a table written in a file in TABLEAU format, ASTER format, or a format known as LIBRE. In the TABLEAU and ASTER formats, the file may come directly from an IMPR TABLE in the same format. The LIBRE format, as its name indicates, is more flexible. Cert"
  },
  "u7.02.11": {
    "frTitle": "Opérateur LIRE_PLEXUS",
    "frLead": "u7.02.11 Opérateur LIRE PLEXUS 1 But Lire le fichier de résultats au format IDEAS produit par le logiciel EUROPLEXUS. Permet de récupérer un champ transitoire de pression fluide dans une tuyauterie calculée à l’aide d’un modèle hydrodynamique filaire (ondes planes) de PLEXUS. Le champ de pression défini constant par élément dans le calcul EUROPLEXUS est proj",
    "enTitle": "Operator LIRE_PLEXUS",
    "enLead": "u7.02.11 Operator LIRE PLEXUS 1 Purpose Read the results file in IDEAS format produced by the EUROPLEXUS software. Makes it possible to recover a transient fluid-pressure field in a piping system computed by means of a line hydrodynamic model (plane waves) of PLEXUS. The pressure field, defined as constant per element in the EUROPLEXUS analysis, is projected"
  },
  "u7.02.32": {
    "frTitle": "Opérateur LIRE_IMPE_MISS",
    "frLead": "u7.02.32 Opérateur LIRE IMPE MISS 1 But Construire une matrice assemblée projetée sur une base de RITZ à partir d’un fichier d’impédances de sol calculées par le logiciel MISS3D. La matrice projetée résultat sera utilisée par l’opérateur de calcul harmonique en composantes généralisées DYNA VIBRA U4.53.03). Produit un concept vecteur généralisé de type matr ",
    "enTitle": "Operator LIRE_IMPE_MISS",
    "enLead": "u7.02.32 Operator LIRE IMPE MISS 1 Purpose Build an assembled matrix projected onto a RITZ basis from a file of soil impedances computed by the MISS3D software. The resulting projected matrix will be used by the harmonic analysis operator in generalised components DYNA VIBRA U4.53.03). Produces a generalised-vector concept of type matr asse gene C. 2 Syntax "
  },
  "u7.02.33": {
    "frTitle": "Opérateur LIRE_FORC_MISS",
    "frLead": "u7.02.33 Opérateur LIRE FORC MISS 1 But Construire un vecteur assemblé projeté sur une base de RITZ à partir d’un fichier de forces sismiques de sol calculées par le logiciel MISS3D. Le vecteur projeté résultat sera utilisé par l’opérateur de calcul harmonique en composantes généralisées DYNA VIBRA U4.53.03. Produit un concept vecteur généralisé de type vect",
    "enTitle": "Operator LIRE_FORC_MISS",
    "enLead": "u7.02.33 Operator LIRE FORC MISS 1 Purpose Build an assembled vector projected onto a RITZ basis from a file of seismic soil forces computed by the MISS3D software. The resulting projected vector will be used by the harmonic analysis operator in generalised components DYNA VIBRA U4.53.03. Produces a generalised-vector concept of type vect asse gene. 2 Syntax"
  },
  "u7.02.34": {
    "frTitle": "Commande DEFI_SOL_MISS",
    "frLead": "u7.02.34 Commande DEFI SOL MISS 1 But Produire une table contenant des informations nécessaires à la description d'un fichier de sol pour le logiciel MISS3D. Les données entrées par la commande DEFI SOL MISS sont: - la description des caractéristiques des matériaux constitutifs des couches d'un sol stratifié, - la description géométrique et l'affectation des",
    "enTitle": "Command DEFI_SOL_MISS",
    "enLead": "u7.02.34 Command DEFI SOL MISS 1 Purpose Produce a table containing the information necessary for the description of a soil file for the MISS3D software. The data entered by the command DEFI SOL MISS are: - the description of the characteristics of the materials constituting the layers of a stratified soil, - the geometric description and the assignment of t"
  },
  "u7.03.01": {
    "frTitle": "Macro-commande MACR_ADAP_MAIL",
    "frLead": "u7.03.01 Macro-commande MACR ADAP MAIL 1 But Adapter un maillage avec le logiciel HOMARD. Cette opération est possible pour un maillage formé de mailles-points, de segments, de triangles, de quadrangles, de tétraèdres, d’hexaèdres, de pentaèdres. Un champ pilotant l'adaptation aura éventuellement été calculé. En fonction de sa valeur maille par maille ou nœu",
    "enTitle": "Macro-command MACR_ADAP_MAIL",
    "enLead": "u7.03.01 Macro-command MACR ADAP MAIL 1 Purpose Adapt a mesh with the HOMARD software. This operation is possible for a mesh made up of point mesh cells, segments, triangles, quadrangles, tetrahedra, hexahedra and pentahedra. A field driving the adaptation may possibly have been computed. Depending on its value mesh cell by mesh cell or node by node, or depe"
  },
  "u7.03.02": {
    "frTitle": "Macro-commande MACR_INFO_MAIL",
    "frLead": "u7.03.02 Macro-commande MACR INFO MAIL 1 But Donner des informations sur la qualité d’un maillage. Cette macro-commande permet d’obtenir des informations sur un maillage, de degré 1 ou 2, contenant des mailles-points, des segments, des triangles, des quadrangles, des tétraèdres, des hexaèdres ou des pentaèdres. L’impression est dirigée sur le fichier de mess",
    "enTitle": "Macro-command MACR_INFO_MAIL",
    "enLead": "u7.03.02 Macro-command MACR INFO MAIL 1 Purpose Provide information on the quality of a mesh. This macro-command makes it possible to obtain information on a mesh, of degree 1 or 2, containing point mesh cells, segments, triangles, quadrangles, tetrahedra, hexahedra or pentahedra. The printout is directed to the message file. One first finds an overall summa"
  },
  "u7.03.03": {
    "frTitle": "Méthodes Python de pilotage de GMSH",
    "frLead": "u7.03.03 Méthodes Python de pilotage de GMSH Résumé: Ce document présente le superviseur permettant de piloter GMSH depuis Python, et donc depuis le fichier de commandes Aster. Ce superviseur produit tout type de maillages 2D en utilisant le logiciel GMSH (https://gmsh.info). Il est notamment utilisé dans Aster par l’outil de post-traitement interactif STANL",
    "enTitle": "Python methods for driving GMSH",
    "enLead": "u7.03.03 Python methods for driving GMSH Summary: This document presents the supervisor that makes it possible to drive GMSH from Python, and therefore from the Aster command file. This supervisor produces any type of 2D mesh using the GMSH software (https://gmsh.info). It is used in particular in Aster by the interactive post-processing tool STANLEY in orde"
  },
  "u7.03.04": {
    "frTitle": "Macro-commande CREA_LIB_MFRONT",
    "frLead": "u7.03.04 Macro-commande CREA LIB MFRONT 1 But Construire une bibliothèque de loi de comportement à partir d'un fichier .mfront . L’objet produit est ensuite utilisé sous le mot-clé COMPORTEMENT/COMPOR MFRONT. On trouvera plus d'informations sur le format MFront dans la notice d'utilisation dédiée. 2 Syntaxe 3 Opérandes 3.1 Opérande NOM COMPOR Nom du comporte",
    "enTitle": "Macro-command CREA_LIB_MFRONT",
    "enLead": "u7.03.04 Macro-command CREA LIB MFRONT 1 Purpose Build a constitutive-law library from a .mfront file. The object produced is then used under the keyword COMPORTEMENT/COMPOR MFRONT. One will find more information on the MFront format in the dedicated user's guide. 2 Syntax 3 Operands 3.1 Operand NOM COMPOR Name of the constitutive behaviour to be used, as de"
  },
  "u7.03.12": {
    "frTitle": "Opérateur CALC_MISS",
    "frLead": "u7.03.12 Opérateur CALC MISS 1 But L'objet de cette commande est de préparer les données, d'exécuter le logiciel Miss3D, puis de post-traiter les résultats de celui-ci pour produire des concepts exploitables dans code aster. Selon les arguments en entrée de la commande on obtient la réponse harmonique, temporelle de la structure, ou des évolutions des déplac",
    "enTitle": "Operator CALC_MISS",
    "enLead": "u7.03.12 Operator CALC MISS 1 Purpose The purpose of this command is to prepare the data, to run the Miss3D software, then to post-process its results in order to produce concepts that can be used in code aster. Depending on the input arguments of the command, one obtains the harmonic or transient response of the structure, or evolutions of the displacements"
  },
  "u7.03.41": {
    "frTitle": "Procédure MACR_ECREVISSE",
    "frLead": "u7.03.41 Procédure MACR ECREVISSE Résumé: La macro-commande MACR ECREVISSE a pour but de calculer le débit de fluide (air/vapeur/liquide) à travers une (ou plusieurs) fissure(s) traversante(s) dans une structure modélisée en 2 dimensions. Elle réalise pour cela, à chaque pas de temps, le chaînage de deux codes : - Code Aster qui permet de connaître l'état th",
    "enTitle": "Procedure MACR_ECREVISSE",
    "enLead": "u7.03.41 Procedure MACR ECREVISSE Summary: The purpose of the macro-command MACR ECREVISSE is to compute the flow rate of fluid (air/steam/liquid) through one (or several) through-crack(s) in a structure modelled in 2 dimensions. To do this, at each time step, it carries out the chaining of two codes: - Code Aster which makes it possible to know the thermo-m"
  },
  "u7.03.51": {
    "frTitle": "Macro-commande RAFF_XFEM",
    "frLead": "u7.03.51 Macro-commande RAFF XFEM 1 But Effectuer le calcul du critère d'erreur préalable à un raffinement de maillage pour les fissures et interfaces modélisées par la méthode X-FEM. La commande produit une structure de données cham no. 2 Syntaxe 3 Fonctionnement général L'opérateur RAFF XFEM permet de créer un champ en prévision d'un raffinement de maillag",
    "enTitle": "Macro-command RAFF_XFEM",
    "enLead": "u7.03.51 Macro-command RAFF XFEM 1 Purpose Perform the computation of the error criterion prior to a mesh refinement for cracks and interfaces modelled by the X-FEM method. The command produces a data structure cham no. 2 Syntax 3 General operation The operator RAFF XFEM makes it possible to create a field in anticipation of a mesh refinement in the framewor"
  },
  "u7.03.71": {
    "frTitle": "U7.03.71 Macro-commande RAFF_GP",
    "frLead": "u7.03.71 U7.03.71 Macro-commande RAFF GP 1 But L'objet de cette macro-commande est de raffiner un maillage bidimensionnel comportant un défaut représenté par une entaille; le raffinement est effectué dans la zone en aval de l'entaille. Cette macro-commande peut notamment servir en amont du calcul mécanique à partir duquel un post-traitement de mécanique de l",
    "enTitle": "Macro-command RAFF_GP",
    "enLead": "u7.03.71 Macro-command RAFF GP 1 Purpose The purpose of this macro-command is to refine a two-dimensional mesh containing a defect represented by a notch; the refinement is carried out in the zone downstream of the notch. This macro-command may in particular be used upstream of the mechanical analysis from which a fracture-mechanics post-processing by CALC G"
  },
  "u7.04.33": {
    "frTitle": "Procédure IMPR_MACR_ELEM",
    "frLead": "u7.04.33 Procédure IMPR MACR ELEM 1 But Imprimer aux formats IDEAS et MISS 3D une structure de données macr elem dyna. On imprime : - la définition d’une interface de liaison entre une macro-structure et son environnement extérieur, - une base modale (modes dynamiques de la macro-structure et modes statiques résultant soit de déplacements unitaires imposés à",
    "enTitle": "Procedure IMPR_MACR_ELEM",
    "enLead": "u7.04.33 Procedure IMPR MACR ELEM 1 Purpose Print a data structure macr elem dyna in the IDEAS and MISS 3D formats. One prints: - the definition of a connection interface between a macro-structure and its external environment, - a modal basis (dynamic modes of the macro-structure and static modes resulting either from unit displacements imposed at the interf"
  },
  "u7.04.51": {
    "frTitle": "Opérateur IMPR_OAR",
    "frLead": "u7.04.51 Opérateur IMPR OAR 1 But Écrire le résultat d’un calcul mécanique ou thermomécanique ASTER au format OAR. L’OAR (Outil d’Analyse Rapide) permet la réalisation de calculs de rupture brutale selon les méthodes codifiées du RSE-M. Le champ de contraintes le long du ligament au droit du défaut entre dans les données d’entrée nécessaires à l’application ",
    "enTitle": "Operator IMPR_OAR",
    "enLead": "u7.04.51 Operator IMPR OAR 1 Purpose Write the result of an ASTER mechanical or thermomechanical analysis in the OAR format. The OAR (Rapid Analysis Tool) makes it possible to carry out brittle-fracture analyses according to the codified methods of the RSE-M. The stress field along the ligament in line with the defect enters into the input data necessary for"
  },
  "u7.05.01": {
    "frTitle": "1 **u7.05.01** Procédure IMPR_RESU au format ‘IDEAS’",
    "frLead": "Organisme(s): EDF-R&D/AMA 1 u7.05.01 Procédure IMPR RESU au format ‘IDEAS’ 1 But Écrire un maillage et/ou les résultats d'un calcul sur un fichier au format 'IDEAS'. L'utilisation de ce format est déconseillé car il ne traite que des cas simples, Actuellement cette procédure permet d'écrire au choix : - un maillage, - des champs aux nœuds (de déplacements, d",
    "enTitle": "Procedure IMPR_RESU in ‘IDEAS’ format",
    "enLead": "Organisation(s): EDF-R&D/AMA u7.05.01 Procedure IMPR RESU in ‘IDEAS’ format 1 Purpose Write a mesh and/or the results of an analysis to a file in the 'IDEAS' format. The use of this format is not recommended because it only handles simple cases. At present this procedure makes it possible to write, as one chooses: - a mesh, - fields at the nodes (of displace"
  },
  "u7.05.21": {
    "frTitle": "Procédure IMPR_RESU au format 'MED'",
    "frLead": "u7.05.21 Procédure IMPR RESU au format 'MED' 1 But Écrire le résultat d’un calcul dans un fichier au format MED. On décrit l’ensemble des mots clés de la commande IMPR RESU U4.91.01 pour ce qui concerne ce format de sortie uniquement. On peut écrire au choix dans un fichier au format MED: - un maillage, - des champs aux nœuds, - des champs aux éléments. Lors",
    "enTitle": "Procedure IMPR_RESU in 'MED' format",
    "enLead": "u7.05.21 Procedure IMPR RESU in 'MED' format 1 Purpose Write the result of an analysis to a file in MED format. One describes all the keywords of the command IMPR RESU U4.91.01 as regards this output format only. One can write, as one chooses, to a file in MED format: - a mesh, - fields at the nodes, - fields at the elements. When writing the fields by eleme"
  },
  "u7.05.32": {
    "frTitle": "Procédure IMPR_RESU au format ‘GMSH’",
    "frLead": "u7.05.32 Procédure IMPR RESU au format ‘GMSH’ 1 But Écrire un champ de grandeur ou un concept résultat au format 'GMSH'. Actuellement cette procédure permet d'écrire au choix : - des champs aux nœuds (de déplacements, de températures, de modes propres, de modes statiques, …), - des champs par éléments aux nœuds (de contraintes, d’efforts généralisés, de vari",
    "enTitle": "Procedure IMPR_RESU in ‘GMSH’ format",
    "enLead": "u7.05.32 Procedure IMPR RESU in ‘GMSH’ format 1 Purpose Write a field of a quantity (grandeur) or a result concept in the 'GMSH' format. At present this procedure makes it possible to write, as one chooses: - fields at the nodes (of displacements, of temperatures, of eigenmodes, of static modes, …), - fields by element at the nodes (of stresses, of generalis"
  }
};
