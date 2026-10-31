# Nos commerces

Annuaire français statique pour les commerces équipés de plaques NFC ou de QR codes.
Parcours : catégorie → commerce → liens utiles. Les scans ouvrent directement la page du commerce.
Aucun framework, backend ni dépendance à installer pour le site ou les contrôles Node.

## Modifier et vérifier

- `stores.js` : catégories, noms, logos et localisation. Les champs `commune` et `wilaya` restent `null` tant qu'ils ne sont pas confirmés ; la carte affiche « Localisation à confirmer ».
- `<catégorie>/<commerce>/links.js` : textes, destinations et ordre des liens. Ino Burger conserve sa convention `window.INO_LINKS` ; les autres utilisent `window.LINKTREE_LINKS`.
- Une destination vide masque le bouton sans supprimer sa configuration. Seuls `https:`, `tel:` et `mailto:` sont acceptés. Les textes sont rendus sans HTML.
- Les pages des commerces restent indépendantes du rendu de l'annuaire.

```powershell
node check.cjs
node scripts/prepare.cjs
```

Le contrôle racine lance les vérifications des six commerces, valide le registre,
les destinations et la fermeture des références de fichiers publics. Il crée `_site/`,
exclu de Git, avec uniquement les fichiers nécessaires à l'exécution.
`node check.cjs --release` exige aussi toutes les communes et wilayas confirmées.
Il ne remplace pas les autres portes de sortie décrites dans `VERIFICATION.md`.

Ouvrez `index.html` pour une prévisualisation simple ou servez `_site/` avec un serveur statique.
L'annuaire propose des liens ordinaires vers les catégories et les commerces sans JavaScript.
Les pages des commerces affichent un message lorsque JavaScript est désactivé.

## Vérification navigateur

`scripts/check-browser.cjs` utilise une installation Playwright existante, sans l'ajouter au site.
Configurez `PLAYWRIGHT_MODULE` avec le chemin de `playwright-core` et, si nécessaire,
`CHROMIUM_PATH` avec le navigateur Chromium installé, puis :

```powershell
node scripts/check-browser.cjs
```

Le script sert uniquement `_site/` sous `/nfc/` sur une interface locale, exécute 72 vues
(12 pages × 6 formats), contrôle la navigation et crée des captures locales ignorées dans
`.impeccable/review/`. Les tests Node restent exécutables sans Playwright.

## Ajouter un commerce

1. Utilisez le skill `nfc-linktree` pour créer le dossier dans la catégorie appropriée. Conservez les références originales et la documentation avec le projet.
2. Renseignez `links.js`, puis ajoutez le commerce à `stores.js` avec son logo et une commune + wilaya confirmées. Conservez les slugs après lancement.
3. Ajoutez un lien ordinaire vers le commerce dans le bloc `noscript` de la page de catégorie. Pour une nouvelle catégorie, créez son `index.html` sur le modèle existant et ajoutez son lien dans le `noscript` de l'accueil.
4. Exécutez `node check.cjs`, les vérifications navigateur et `node check.cjs --release`.
5. Committez les chemins concernés et poussez sur `main` dans `WakilAI/nfc`. Le workflow vérifie le site puis prépare et déploie l'artifact Pages.

## GitHub Pages

Le dépôt existant est [WakilAI/nfc](https://github.com/WakilAI/nfc), public.
Le workflow `.github/workflows/pages.yml` se lance sur `main` ou manuellement.
Seul `_site/` est déployé ; les tests, la documentation, les masters et les références inutilisées restent hors de l'artifact.
Les originaux utiles restent versionnés dans le dépôt public.

Si Pages n'est pas activé, un propriétaire/administrateur doit ouvrir
[Settings → Pages](https://github.com/WakilAI/nfc/settings/pages), sélectionner **GitHub Actions**
comme source et enregistrer. Ensuite, relancer le workflow **Check and deploy Pages** dans
[Actions](https://github.com/WakilAI/nfc/actions/workflows/pages.yml) sur `main`.
Si une politique d'organisation bloque les actions utilisées, autoriser `actions/checkout`,
`actions/setup-node`, `actions/upload-pages-artifact`, `actions/configure-pages` et `actions/deploy-pages`.

Adresse attendue uniquement : `https://wakilai.github.io/nfc/`.
Ne programmer/ imprimer aucune destination NFC/QR avant vérification de l'adresse effective et des douze pages en ligne.

L'adéquation de GitHub Pages à ce service commercial reste une porte de sortie ouverte.
Les [limites d'utilisation GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits#usage-limits)
restreignent notamment l'hébergement de sites principalement destinés aux transactions commerciales ou à un SaaS commercial.
La mise en place du workflow ne confirme pas cette adéquation.
