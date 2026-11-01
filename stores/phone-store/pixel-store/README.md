# Pixel Store

Page de liens de Pixel Store. Ouvrez `index.html` dans un navigateur ; aucun serveur ni compilation n'est nécessaire.

## Modifier les liens

Éditez uniquement `links.js`. L'ordre des objets est l'ordre des boutons.

- `label` : titre du bouton ;
- `detail` : petit texte secondaire, facultatif ;
- `url` : adresse complète en `https:`, `tel:` ou `mailto:` ;
- `icon` : `star`, `instagram`, `facebook`, `tiktok`, `message`, `phone`, `pin` ou `globe`.

Une `url` vide masque le bouton sans supprimer son objet. Le WhatsApp est configuré sur `https://wa.me/213553669256` (numéro international sans `+`, espaces ni zéro initial). Les fichiers sont publics : n'y mettez aucun secret.

## Vérifier et publier

Exécutez `node check.cjs` depuis ce dossier ou `node check.cjs` à la racine. Le contrôle local utilise `../../../scripts/check-store.cjs`. Publiez `index.html`, `styles.css`, `links.js`, `page.js` et `assets/` en conservant leur arborescence ; `references/` conserve le logo original ; la carte NFC est publiée depuis `plates/` dans l’aperçu du commerce.

## Identité

Fond bleu nuit, cyan électrique et traits diagonaux inspirés de la carte fournie. Le logo officiel fourni (`assets/pixel-store-logo.webp`, master dans `references/`) sert de visuel d'annuaire et de favicon. Le lettrage « pixel store » de la page reste typographique ; la carte NFC fournie est conservée dans `plates/` et apparaît dans l’aperçu du commerce.
