# COSMABENT

Page de liens de COSMABENT. Ouvrez `index.html` dans un navigateur ; aucun serveur ni compilation n'est nécessaire.

## Modifier les liens

Éditez uniquement `links.js`. L'ordre des objets est l'ordre des boutons.

- `label` : titre du bouton ;
- `detail` : petit texte secondaire, facultatif ;
- `url` : adresse complète en `https:`, `tel:` ou `mailto:` ;
- `icon` : `star`, `instagram`, `facebook`, `tiktok`, `message`, `phone`, `pin` ou `globe`.

Une `url` vide masque le bouton sans supprimer son objet. Pour WhatsApp, utilisez `https://wa.me/` suivi du numéro international sans `+`, espaces ni zéro initial. Les fichiers sont publics : n'y mettez aucun secret.

## Vérifier et publier

Exécutez `node check.cjs` depuis ce dossier ou `node check.cjs` à la racine. Le contrôle local utilise `../../../scripts/check-store.cjs`. Publiez `index.html`, `styles.css`, `links.js`, `page.js` et `assets/` en conservant leur arborescence ; `references/` contient les maquettes fournies et n'est pas publié.

## Identité

Fond ivoire et fuchsia, halo satiné discret, titres serif proches du lettrage du logo, boutons blancs bordés de rose. Le logo officiel est affiché sans cadre carré sur un halo sombre translucide ; sa version détourée sert à la page, sa version opaque reste utilisée dans l'annuaire.
