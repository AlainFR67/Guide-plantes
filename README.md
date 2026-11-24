# 🌿 Guide-plantes — 100 herbes médicinales et aromatiques

Application web **100 % hors ligne** (HTML / CSS / JavaScript pur, zéro dépendance) : un guide pratique des **100 herbes médicinales et aromatiques les plus courantes**, consultable sur ordinateur comme sur téléphone.

> ⚠️ **Avertissement médical important** — Ces fiches sont fournies à titre culturel, culinaire et pédagogique. Elles ne remplacent **en aucun cas** l’avis d’un médecin ou d’un pharmacien. En cas de traitement, de maladie, de grossesse, d’allaitement ou pour un jeune enfant, demandez toujours conseil à un professionnel de santé avant tout usage médicinal d’une plante.

## Contenu de chaque fiche

Chaque plante dispose d’une fiche repliable (un clic ou un toucher sur son nom) avec :

- **Présentation** : nom, nom latin, famille botanique, type (aromatique 🌱 / médicinale 💚 / les deux 🌸) ;
- **Vertus et effets** : au moins trois usages traditionnels décrits ;
- **⚠️ Points d’attention** : toxicité éventuelle selon le dosage, précautions (grossesse, traitements médicamenteux, huiles essentielles, enfants…) ;
- **Récolte** : quand et comment cueillir la plante ;
- **Utilisation** : façon simple de l’employer au quotidien ;
- **🍲 Recette** : une recette de cuisine ou une préparation simple (tisane, sirop, baume, cataplasme, infusion…).

## Fonctionnalités

- **Recherche plein texte** instantanée sur tous les champs (nom commun, nom latin, famille, vertus, symptômes, parties utilisées, recettes…) : tapez « sommeil », « toux », « digestion »…
- **Filtre par domaine d’usage** (menu déroulant) : Digestion, Sommeil et détente, Respiration, Peau et plaies, Voies urinaires, Circulation, Défenses, Douleurs, Bien-être féminin.
- **Interface minimale** : pas d’index cliquables, tout tient dans une liste fluide.
- **Blocs visuels** : encadré rouge doux pour la toxicité et les précautions, encadré doré pour les recettes.

## Quelques plantes fortement encadrées

Certaines fiches portent des avertissements renforcés, à lire obligatoirement :

- **Menthe pouliot** : usage interne dangereux (abortif, hépatotoxique) — feuille externe uniquement, huile essentielle à proscrire ;
- **Consoude** : alcaloïdes hépatotoxiques — usage externe sur peau intacte seulement ;
- **Séné** : laxatif stimulant, cure courte et encadrée ;
- **Sauge officinale** : à limiter (thujone), déconseillée chez la femme enceinte et allaitante ;
- **Absinthe** : thujone, usage traditionnellement encadré ;
- **Muscade** : toxique en excès (cf. ses effets neurologiques) ;
- **Millepertuis** : nombreuses interactions médicamenteuses (photosensibilisation, pilule, antidépresseurs) ;
- **Sureau** : fleurs en tisane oui, baies crues non (toxiques) ;
- **Rhubarbe** : feuilles à exclure (oxalates), pétioles seuls.

## Structure du projet

```
Guide-plantes/
├── index.html       — page unique (recherche + filtre + liste des fiches)
├── css/style.css    — thème vert nature, responsive, encadrés attention/recette
├── js/data.js       — les 100 fiches complètes (constante PLANTES)
└── js/app.js        — logique : recherche plein texte, filtre, rendu des fiches
```

## Lancer l’application

Ouvrir `index.html` dans n’importe quel navigateur moderne — aucune connexion, aucune installation, aucun serveur. Fonctionne hors ligne sur téléphone comme sur ordinateur.

## Historique des versions

- **v1.0.0** — Première version : les 100 herbes médicinales et aromatiques les plus courantes (41 médicinales, 18 aromatiques, 41 aux deux titres), recherche plein texte, filtre par domaine d’usage, fiches repliables avec vertus, points d’attention toxicitaires, récolte, utilisation et recette.

---

*Application suggérée par Alain et créée par son ami Vibe Code.*
